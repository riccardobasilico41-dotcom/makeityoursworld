// Strati «da atlante» delle mappe Paese (MappaAtlante): per ogni Paese
//   src/content/mappe/<paese>-atlante.json  = Paesi vicini (con colore), fiumi, laghi, etichette
//   public/images/mappe/<paese>-rilievo.webp (+ -hd.webp) = tinta altimetrica + rilievo, solo sul Paese
//
//   node tools/mappe/atlante.mjs --dati <dir> <paese> [<paese>…]
//   node tools/mappe/atlante.mjs --dati <dir> --tutti
//
// <dir> contiene i GeoJSON Natural Earth (pubblico dominio, github.com/nvkelso/natural-earth-vector):
//   ne_50m_admin_0_countries, ne_50m_admin_1_states_provinces, ne_10m_rivers_lake_centerlines,
//   ne_10m_lakes, ne_10m_geography_marine_polys (.geojson)
// Il rilievo nasce da SRTM30_PLUS (30", Becker et al., UCSD), scaricato Paese per Paese da NOAA ERDDAP
// (griddap srtm30plus, Esri ASCII), con un passo che tiene la griglia sotto ~2000×2400 celle; il file
// temporaneo viene cancellato subito dopo l'uso. Usa la proiezione di src/content/mappe/<paese>.json.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { MAPPE } from './config.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const arg = (k) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null }
const DATI = arg('--dati')
const TUTTI = process.argv.includes('--tutti')
const SENZA_RILIEVO = process.argv.includes('--senza-rilievo') // solo i vettori (per ritoccare le etichette)
const scelti = process.argv.slice(2).filter((a, i, all) => !a.startsWith('--') && all[i - 1] !== '--dati')
if (!DATI || (!TUTTI && !scelti.length)) {
  console.error('Uso: node tools/mappe/atlante.mjs --dati <dir> (--tutti | <paese>…) [--senza-rilievo]')
  process.exit(1)
}

// Paesi dove il rilievo a ~1 km non dice nulla (città-Stato, atolli): tinta piatta, stesso stile
const PIATTI = new Set(['singapore', 'maldive'])
// nomi italiani/spagnoli dei fiumi più noti (Natural Earth 1:10m dà solo il nome locale/inglese)
const FIUMI_NOMI = {
  Amazonas: ['Rio delle Amazzoni', 'Amazon', 'Amazonas'],
  Danube: ['Danubio', 'Danube', 'Danubio'], Donau: ['Danubio', 'Danube', 'Danubio'], Dunărea: ['Danubio', 'Danube', 'Danubio'], Duna: ['Danubio', 'Danube', 'Danubio'],
  Rhine: ['Reno', 'Rhine', 'Rin'], Rhein: ['Reno', 'Rhine', 'Rin'], Rhin: ['Reno', 'Rhine', 'Rin'], Rijn: ['Reno', 'Rhine', 'Rin'],
  Nile: ['Nilo', 'Nile', 'Nilo'], Loire: ['Loira', 'Loire', 'Loira'], Seine: ['Senna', 'Seine', 'Sena'], Rhône: ['Rodano', 'Rhône', 'Ródano'],
  Elbe: ['Elba', 'Elbe', 'Elba'], Vistula: ['Vistola', 'Vistula', 'Vístula'], Wisła: ['Vistola', 'Vistula', 'Vístula'],
  Tagus: ['Tago', 'Tagus', 'Tajo'], Tajo: ['Tago', 'Tagus', 'Tajo'], Tejo: ['Tago', 'Tagus', 'Tajo'], Ebro: ['Ebro', 'Ebro', 'Ebro'],
  Douro: ['Douro', 'Douro', 'Duero'], Duero: ['Douro', 'Douro', 'Duero'], Guadalquivir: ['Guadalquivir', 'Guadalquivir', 'Guadalquivir'],
  Po: ['Po', 'Po', 'Po'], Tevere: ['Tevere', 'Tiber', 'Tíber'], Ganges: ['Gange', 'Ganges', 'Ganges'], Indus: ['Indo', 'Indus', 'Indo'],
  Mekong: ['Mekong', 'Mekong', 'Mekong'], Yangtze: ['Fiume Azzurro', 'Yangtze', 'Yangtsé'], 'Chang Jiang': ['Fiume Azzurro', 'Yangtze', 'Yangtsé'],
  'Huang He': ['Fiume Giallo', 'Yellow River', 'Río Amarillo'], Mississippi: ['Mississippi', 'Mississippi', 'Misisipi'],
  'St. Lawrence': ['San Lorenzo', 'St. Lawrence', 'San Lorenzo'], 'Rio Grande': ['Rio Grande', 'Rio Grande', 'río Bravo'],
  Euphrates: ['Eufrate', 'Euphrates', 'Éufrates'], Tigris: ['Tigri', 'Tigris', 'Tigris'], Dnieper: ['Dnepr', 'Dnieper', 'Dniéper'],
}

const leggi = (f) => JSON.parse(fs.readFileSync(path.join(DATI, f + '.geojson'), 'utf8'))
console.time('dati')
const PAESI = leggi('ne_50m_admin_0_countries').features
const STATI = leggi('ne_50m_admin_1_states_provinces').features
const FIUMI = leggi('ne_10m_rivers_lake_centerlines').features
const LAGHI = leggi('ne_10m_lakes').features
const MARI = leggi('ne_10m_geography_marine_polys').features
console.timeEnd('dati')

const mercY = (lat) => (Math.log(Math.tan(Math.PI / 4 + (Math.max(-85, Math.min(85, lat)) * Math.PI) / 360)) * 180) / Math.PI
const mercLat = (y) => (Math.atan(Math.exp((y * Math.PI) / 180)) * 360) / Math.PI - 90
const n1 = (v) => { const r = Math.round(v * 10) / 10; return Number.isInteger(r) ? String(r) : r.toFixed(1) }
const poligoni = (g) => (!g ? [] : g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [])
const linee = (g) => (!g ? [] : g.type === 'LineString' ? [g.coordinates] : g.type === 'MultiLineString' ? g.coordinates : [])
const nomeDi = (p, k) => p[`NAME_${k.toUpperCase()}`] ?? p[`name_${k}`] ?? p.NAME ?? p.name

function dp(pts, tol) {
  if (pts.length < 3) return pts
  const keep = new Uint8Array(pts.length)
  keep[0] = keep[pts.length - 1] = 1
  const stack = [[0, pts.length - 1]]
  while (stack.length) {
    const [a, b] = stack.pop()
    const [ax, ay] = pts[a], [bx, by] = pts[b]
    const dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy) || 1e-9
    let md = -1, mi = -1
    for (let k = a + 1; k < b; k++) {
      const d = Math.abs(dy * pts[k][0] - dx * pts[k][1] + bx * ay - by * ax) / L
      if (d > md) { md = d; mi = k }
    }
    if (md > tol) { keep[mi] = 1; stack.push([a, mi], [mi, b]) }
  }
  return pts.filter((_, k) => keep[k])
}
function semplificaAnello(r, tol) {
  if (r.length < 4) return r
  let far = 0, fd = -1
  for (let k = 1; k < r.length; k++) {
    const d = (r[k][0] - r[0][0]) ** 2 + (r[k][1] - r[0][1]) ** 2
    if (d > fd) { fd = d; far = k }
  }
  const a = dp(r.slice(0, far + 1), tol), b = dp([...r.slice(far), r[0]], tol)
  return [...a.slice(0, -1), ...b.slice(0, -1)]
}
const area = (r) => {
  let s = 0
  for (let k = 0; k < r.length; k++) { const a = r[k], b = r[(k + 1) % r.length]; s += a[0] * b[1] - b[0] * a[1] }
  return Math.abs(s / 2)
}
const centro = (r) => { let x = 0, y = 0; for (const p of r) { x += p[0]; y += p[1] } return [x / r.length, y / r.length] }
function dentro(pt, anelli) {
  let c = false
  for (const r of anelli) {
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
      const [xi, yi] = r[i], [xj, yj] = r[j]
      if (yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) c = !c
    }
  }
  return c
}
function distSegmenti(pt, anelli) {
  let m = Infinity
  for (const r of anelli) {
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
      const [ax, ay] = r[j], [bx, by] = r[i]
      const dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy || 1e-9
      const t = Math.max(0, Math.min(1, ((pt[0] - ax) * dx + (pt[1] - ay) * dy) / L))
      const d = Math.hypot(pt[0] - ax - t * dx, pt[1] - ay - t * dy)
      if (d < m) m = d
    }
  }
  return m
}
const bbox = (anelli) => {
  let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity
  for (const r of anelli) for (const [x, y] of r) { a = Math.min(a, x); b = Math.min(b, y); c = Math.max(c, x); d = Math.max(d, y) }
  return [a, b, c, d]
}
function leggiPath(d) {
  const anelli = []
  for (const parte of d.split('M').filter(Boolean)) {
    const nums = parte.replace(/Z/g, '').match(/-?\d+(?:\.\d+)?/g).map(Number)
    const r = []
    for (let k = 0; k + 1 < nums.length; k += 2) r.push([nums[k], nums[k + 1]])
    if (r.length > 2) anelli.push(r)
  }
  return anelli
}
const anelloD = (r) => 'M' + r.map(([x, y]) => `${n1(x)} ${n1(y)}`).join(' ') + 'Z'
const lineaD = (r) => 'M' + r.map(([x, y]) => `${n1(x)} ${n1(y)}`).join(' ')

/** Due righe per i nomi lunghi del mare («Mar / Tirreno»). */
const aCapo = (s0) => {
  const s = s0.charAt(0).toUpperCase() + s0.slice(1)
  if (s.length < 13 || !s.includes(' ')) return s
  const m = s.length / 2
  let best = -1
  for (let i = 0; i < s.length; i++) if (s[i] === ' ' && (best < 0 || Math.abs(i - m) < Math.abs(best - m))) best = i
  return s.slice(0, best) + '\n' + s.slice(best + 1)
}

// ── DEM SRTM30_PLUS da ERDDAP, solo sul riquadro ──
const TMP = path.join(DATI, '_dem')
async function scaricaDem(latS, latN, lngA, lngB) {
  const cellNat = 1 / 120
  const st = Math.max(1, Math.ceil((lngB - lngA) / cellNat / 2000), Math.ceil((latN - latS) / cellNat / 2400))
  const a360 = ((lngA % 360) + 360) % 360, b360 = ((lngB % 360) + 360) % 360
  const tratti = a360 <= b360 ? [[a360, b360]] : [[a360, 359.9958], [0.0042, b360]]
  const blocchi = []
  for (const [a, b] of tratti) {
    const url = `https://coastwatch.pfeg.noaa.gov/erddap/griddap/srtm30plus.esriAscii?z%5B(${latS.toFixed(4)}):${st}:(${latN.toFixed(4)})%5D%5B(${a.toFixed(4)}):${st}:(${b.toFixed(4)})%5D`
    let testo = null
    for (let tent = 0; tent < 3 && !testo; tent++) {
      try {
        const r = await fetch(url)
        if (!r.ok) throw new Error(`${r.status}`)
        testo = await r.text()
      } catch (e) {
        console.warn('  DEM: nuovo tentativo', e.message)
        await new Promise((ok) => setTimeout(ok, 4000))
      }
    }
    if (!testo) throw new Error('DEM non scaricato')
    fs.mkdirSync(TMP, { recursive: true })
    const righe = testo.split('\n')
    testo = null
    const hdr = {}
    for (let i = 0; i < 6; i++) { const [k, v] = righe[i].trim().split(/\s+/); hdr[k.toLowerCase()] = +v }
    const z = new Float32Array(hdr.ncols * hdr.nrows)
    for (let r = 0; r < hdr.nrows; r++) {
      const v = righe[6 + r].trim().split(/\s+/)
      for (let c = 0; c < hdr.ncols; c++) { const q = +v[c]; z[r * hdr.ncols + c] = q === hdr.nodata_value || !Number.isFinite(q) ? 0 : q }
    }
    blocchi.push({ ...hdr, z })
  }
  // cuci i due blocchi a cavallo di Greenwich
  const NR = Math.min(...blocchi.map((b) => b.nrows))
  const NC = blocchi.reduce((s, b) => s + b.ncols, 0)
  const z = new Float32Array(NC * NR)
  let off = 0
  for (const b of blocchi) {
    for (let r = 0; r < NR; r++) z.set(b.z.subarray(r * b.ncols, r * b.ncols + b.ncols), r * NC + off)
    off += b.ncols
  }
  const b0 = blocchi[0]
  const xll = b0.xllcenter > 180 ? b0.xllcenter - 360 : b0.xllcenter
  return { NC, NR, CELL: b0.cellsize, LAT_TOP: b0.yllcenter + (b0.nrows - 1) * b0.cellsize, LNG_0: xll < lngA - 1 ? xll + 360 : xll, z, st }
}

const TINTE = [
  [0, [196, 211, 167]], [150, [202, 215, 171]], [400, [214, 220, 177]], [800, [227, 224, 183]],
  [1500, [233, 215, 167]], [2500, [222, 191, 139]], [3300, [208, 162, 114]], [4000, [198, 153, 116]],
  [4700, [204, 168, 132]], [5200, [222, 205, 188]], [5700, [244, 240, 234]], [6400, [252, 250, 247]],
]
const tinta = (z) => {
  if (z <= TINTE[0][0]) return TINTE[0][1]
  for (let k = 1; k < TINTE.length; k++) {
    if (z <= TINTE[k][0]) {
      const [z0, c0] = TINTE[k - 1], [z1, c1] = TINTE[k]
      const t = (z - z0) / (z1 - z0)
      return c0.map((v, j) => v + (c1[j] - v) * t)
    }
  }
  return TINTE[TINTE.length - 1][1]
}
const CARTA = [244, 238, 227]
const ZEN = (45 * Math.PI) / 180, PIANO = Math.cos(ZEN)

function ombreggia(D) {
  const { NC, NR, CELL, LAT_TOP, z, st } = D
  const ombra = new Float32Array(NC * NR)
  const luci = [[315, 0.65], [270, 0.2], [0, 0.15]].map(([az, w]) => [((360 - az + 90) % 360) * (Math.PI / 180), w])
  const zf = 1.6 * Math.sqrt(st)
  const g = (rr, cc) => z[Math.min(NR - 1, Math.max(0, rr)) * NC + Math.min(NC - 1, Math.max(0, cc))]
  for (let r = 0; r < NR; r++) {
    const lat = LAT_TOP - r * CELL
    const dx = CELL * 111320 * Math.max(0.05, Math.cos((lat * Math.PI) / 180)), dy = CELL * 110540
    for (let c = 0; c < NC; c++) {
      const a = g(r - 1, c - 1), b = g(r - 1, c), c3 = g(r - 1, c + 1), d = g(r, c - 1), f = g(r, c + 1), g7 = g(r + 1, c - 1), h = g(r + 1, c), i9 = g(r + 1, c + 1)
      const dzdx = (c3 + 2 * f + i9 - (a + 2 * d + g7)) / (8 * dx)
      const dzdy = (g7 + 2 * h + i9 - (a + 2 * b + c3)) / (8 * dy)
      const slope = Math.atan(zf * Math.hypot(dzdx, dzdy))
      const aspect = Math.atan2(dzdy, -dzdx)
      let s = 0
      for (const [azR, w] of luci) s += w * Math.max(0, Math.cos(ZEN) * Math.cos(slope) + Math.sin(ZEN) * Math.sin(slope) * Math.cos(azR - aspect))
      ombra[r * NC + c] = s
    }
  }
  return ombra
}

async function scriviRilievo(D, ombra, base, prj, outW, file, maxByte) {
  const { W, H, lng0, y0, s, ox, oy } = prj
  const outH = Math.round((outW * H) / W)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${outW}" height="${outH}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}"/><path d="${base.path}" fill="#fff" stroke="#fff" stroke-width="${(6 * W) / outW}"/></svg>`
  const maschera = await sharp(Buffer.from(svg)).extractChannel(0).raw().toBuffer()
  const { NC, NR, CELL, LAT_TOP, LNG_0, z } = D
  const bil = (arr, fx, fy) => {
    const x0 = Math.max(0, Math.min(NC - 2, Math.floor(fx))), yy = Math.max(0, Math.min(NR - 2, Math.floor(fy)))
    const tx = Math.min(1, Math.max(0, fx - x0)), ty = Math.min(1, Math.max(0, fy - yy))
    const i0 = yy * NC + x0
    return (arr[i0] * (1 - tx) + arr[i0 + 1] * tx) * (1 - ty) + (arr[i0 + NC] * (1 - tx) + arr[i0 + NC + 1] * tx) * ty
  }
  const rgb = Buffer.alloc(outW * outH * 3)
  for (let py = 0; py < outH; py++) {
    const lat = mercLat(y0 - (((py + 0.5) / outH) * H - oy) / s)
    const fy = (LAT_TOP - lat) / CELL
    for (let px = 0; px < outW; px++) {
      const k = py * outW + px
      const m = maschera[k] / 255
      let col = CARTA
      if (m > 0) {
        const lng = lng0 + (((px + 0.5) / outW) * W - ox) / s
        let fx = (lng - LNG_0) / CELL
        if (fx < -1) fx += 360 / CELL
        const zz = bil(z, fx, fy), sh = bil(ombra, fx, fy)
        const f = Math.min(1.12, Math.max(0.42, 1 + (sh - PIANO) * 1.15))
        const c = tinta(zz).map((v) => Math.min(255, v * f))
        col = c.map((v, j) => (v * 0.88 + CARTA[j] * 0.12) * m + CARTA[j] * (1 - m))
      }
      rgb[k * 3] = col[0]; rgb[k * 3 + 1] = col[1]; rgb[k * 3 + 2] = col[2]
    }
  }
  let q = 80, buf
  for (;;) {
    buf = await sharp(rgb, { raw: { width: outW, height: outH, channels: 3 } }).webp({ quality: q, effort: 6, smartSubsample: true }).toBuffer()
    if (buf.length <= maxByte || q <= 40) break
    q -= 8
  }
  fs.writeFileSync(file, buf)
  return buf.length
}

/** Punto più «interno» di un insieme di anelli (griglia), con distanza dai bordi e dal riquadro. */
function polo(anelli, W, H, passo, fuori = false, ostacoli = null) {
  const [a, b, c, d] = fuori ? [0, 0, W, H] : bbox(anelli)
  let best = null, bd = -1
  for (let y = Math.max(b, 0) + passo / 2; y < Math.min(d, H); y += passo) {
    for (let x = Math.max(a, 0) + passo / 2; x < Math.min(c, W); x += passo) {
      const pt = [x, y]
      if (fuori ? (ostacoli && dentro(pt, ostacoli)) : !dentro(pt, anelli)) continue
      const bordo = Math.min(x, y, W - x, H - y) * 1.2
      const dd = Math.min(bordo, distSegmenti(pt, fuori ? ostacoli ?? [] : anelli))
      if (dd > bd) { bd = dd; best = pt }
    }
  }
  return best ? { pt: best, d: bd } : null
}

async function atlante(slug) {
  const cfg = MAPPE[slug]
  const fileBase = path.join(ROOT, 'src/content/mappe', `${slug}.json`)
  if (!cfg || !fs.existsSync(fileBase)) { console.log(`${slug}: manca config o contorno, salto`); return null }
  const base = JSON.parse(fs.readFileSync(fileBase, 'utf8'))
  const { lng0, y0, s, ox, oy } = base.proiezione
  const W = base.w, H = base.h
  const prj = { W, H, lng0, y0, s, ox, oy }
  const P = ([lng, lat]) => [ox + (lng - lng0) * s, oy + (y0 - mercY(lat)) * s]
  const inv = ([x, y]) => [lng0 + (x - ox) / s, mercLat(y0 - (y - oy) / s)]
  const lngA = lng0 - ox / s, lngB = lng0 + (W - ox) / s
  const latN = mercLat(y0 + oy / s), latS = mercLat(y0 - (H - oy) / s)
  const M = 40
  const vicinoVista = (bb) => !(bb[2] < lngA - 2 || bb[0] > lngB + 2 || bb[3] < latS - 2 || bb[1] > latN + 2)
  const ritaglia = (anello) => {
    const lati = [(p) => p[0] >= -M, (p) => p[0] <= W + M, (p) => p[1] >= -M, (p) => p[1] <= H + M]
    const tagli = [
      (a, b) => { const t = (-M - a[0]) / (b[0] - a[0]); return [-M, a[1] + t * (b[1] - a[1])] },
      (a, b) => { const t = (W + M - a[0]) / (b[0] - a[0]); return [W + M, a[1] + t * (b[1] - a[1])] },
      (a, b) => { const t = (-M - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), -M] },
      (a, b) => { const t = (H + M - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), H + M] },
    ]
    let r = anello
    for (let l = 0; l < 4 && r.length; l++) {
      const out = []
      for (let k = 0; k < r.length; k++) {
        const a = r[k], b = r[(k + 1) % r.length]
        const ia = lati[l](a), ib = lati[l](b)
        if (ia) out.push(a)
        if (ia !== ib) out.push(tagli[l](a, b))
      }
      r = out
    }
    return r
  }
  const principale = leggiPath(base.path)
  const nomiMain = new Set(cfg.nomi)
  const isMain = (p) => [p.NAME, p.NAME_LONG, p.ADMIN, p.NAME_EN, p.name, p.name_en].some((v) => v && nomiMain.has(v))
  const dentroClip = (r) => {
    if (!cfg.clip) return true
    const [x, y] = centro(r)
    return x >= cfg.clip[0] && x <= cfg.clip[2] && y >= cfg.clip[1] && y <= cfg.clip[3]
  }

  // ── terre vicine: Paesi (o Stati USA per le mappe 'us') ──
  const fonti = cfg.fonte === 'us'
    ? [...PAESI.filter((f) => f.properties.ADMIN !== 'United States of America'), ...STATI.filter((f) => f.properties.admin === 'United States of America')]
    : PAESI
  const vicini = []
  const tol = 0.8
  for (const f of fonti) {
    const pr = f.properties
    const main = isMain(pr)
    const anelli = []
    for (const poly of poligoni(f.geometry)) {
      const r0 = poly[0]
      if (main && dentroClip(r0)) continue
      const bbLL = bbox([r0])
      if (!vicinoVista(bbLL)) continue
      const r = ritaglia(r0.map(P))
      if (r.length < 3 || area(r) < 4) continue
      const sr = semplificaAnello(r, tol)
      if (sr.length >= 3) anelli.push(sr)
    }
    if (!anelli.length) continue
    const id = (pr.ADM0_A3 ?? pr.adm1_code ?? pr.iso_3166_2 ?? pr.name).toLowerCase()
    vicini.push({ id, anelli, nome: { it: nomeDi(pr, 'it'), en: nomeDi(pr, 'en'), es: nomeDi(pr, 'es') } })
  }
  // colori: greedy sui vicini adiacenti (vertici a meno di 4 unità dal bordo dell'altro)
  const adiac = vicini.map(() => new Set())
  const bbs = vicini.map((v) => bbox(v.anelli))
  for (let i = 0; i < vicini.length; i++) {
    for (let j = i + 1; j < vicini.length; j++) {
      const A = bbs[i], B = bbs[j]
      if (A[2] + 4 < B[0] || B[2] + 4 < A[0] || A[3] + 4 < B[1] || B[3] + 4 < A[1]) continue
      const pts = vicini[i].anelli.flat()
      const passo = Math.max(1, Math.floor(pts.length / 400))
      let tocca = false
      for (let k = 0; k < pts.length && !tocca; k += passo) {
        const p = pts[k]
        if (p[0] < B[0] - 4 || p[0] > B[2] + 4 || p[1] < B[1] - 4 || p[1] > B[3] + 4) continue
        if (distSegmenti(p, vicini[j].anelli) < 4) tocca = true
      }
      if (tocca) { adiac[i].add(j); adiac[j].add(i) }
    }
  }
  const N_COLORI = 7
  const colore = new Array(vicini.length).fill(-1)
  const ordine = vicini.map((_, i) => i).sort((a, b) => adiac[b].size - adiac[a].size)
  for (const i of ordine) {
    const usati = new Set([...adiac[i]].map((j) => colore[j]))
    // parte da un colore «sfalsato» per non avere sempre lo stesso sui Paesi più grandi
    let c = 0
    for (let k = 0; k < N_COLORI; k++) { const cc = (k + i * 3) % N_COLORI; if (!usati.has(cc)) { c = cc; break } }
    colore[i] = c
  }

  const etichette = []
  // etichette dei vicini: al centro della parte visibile più grande, se c'è spazio
  vicini.forEach((v) => {
    const grande = v.anelli.reduce((m, r) => (area(r) > area(m) ? r : m))
    const visibile = ritagliaVista(grande, W, H)
    if (visibile.length < 3 || area(visibile) < 2500) return
    const q = polo([visibile], W, H, 10)
    if (!q || q.d < 16) return
    etichette.push({ id: v.id, tipo: 'paese', x: +q.pt[0].toFixed(1), y: +q.pt[1].toFixed(1), testo: v.nome })
  })

  // ── mari: i punti d'acqua più lontani dalle terre, con il nome del mare che li contiene ──
  const terre = [...principale, ...vicini.flatMap((v) => v.anelli)]
  const mariVisti = new Set()
  for (let tent = 0; tent < 3; tent++) {
    const altri = etichette.filter((e) => e.tipo === 'mare').map((e) => [e.x, e.y])
    let best = null, bd = -1
    const passo = 14
    for (let y = passo / 2; y < H; y += passo) {
      for (let x = passo / 2; x < W; x += passo) {
        const pt = [x, y]
        if (altri.some((a) => Math.hypot(a[0] - x, a[1] - y) < 260)) continue
        if (dentro(pt, terre)) continue
        const dd = Math.min(Math.min(x, y, W - x, H - y) * 1.3, distSegmenti(pt, terre))
        if (dd > bd) { bd = dd; best = pt }
      }
    }
    if (!best || bd < 28) break
    const ll = inv(best)
    const mare = MARI.find((f) => poligoni(f.geometry).some((poly) => dentro(ll, [poly[0]])))
    if (!mare) break
    const nm = mare.properties
    if (mariVisti.has(nm.name)) { // stesso mare: niente seconda scritta, ma prova altrove
      etichette.push({ id: `_x${tent}`, tipo: '_vuoto', x: best[0], y: best[1] })
      continue
    }
    mariVisti.add(nm.name)
    const testo = { it: aCapo(nm.name_it ?? nm.name), en: aCapo(nm.name_en ?? nm.name), es: aCapo(nm.name_es ?? nm.name) }
    etichette.push({ id: `mare-${tent}`, tipo: 'mare', x: +best[0].toFixed(1), y: +best[1].toFixed(1), testo })
  }

  // ── fiumi: soglia di importanza secondo la scala ──
  const soglia = s < 12 ? 4 : s < 30 ? 6 : s < 80 ? 8 : 10
  const fiumi = new Map()
  for (const f of FIUMI) {
    const pr = f.properties
    if (!f.geometry || pr.featurecla?.includes('Lake') || pr.scalerank > soglia) continue
    for (const l of linee(f.geometry)) {
      const bbLL = bbox([l])
      if (!vicinoVista(bbLL)) continue
      const px = l.map(P)
      let tratto = []
      const chiudi = () => {
        if (tratto.length > 1) {
          const sr = dp(tratto, 1.0)
          let len = 0
          for (let k = 1; k < sr.length; k++) len += Math.hypot(sr[k][0] - sr[k - 1][0], sr[k][1] - sr[k - 1][1])
          if (len > 12) {
            const id = `f${pr.rivernum ?? pr.name}`
            const voce = fiumi.get(id) ?? { id, peso: pr.scalerank <= 3 ? 3 : pr.scalerank <= 6 ? 2 : 1, path: '', nome: pr.name, rank: pr.scalerank, tratti: [] }
            voce.path += lineaD(sr)
            voce.tratti.push(sr)
            fiumi.set(id, voce)
          }
        }
        tratto = []
      }
      for (const p of px) {
        if (p[0] > -M && p[0] < W + M && p[1] > -M && p[1] < H + M) tratto.push(p)
        else chiudi()
      }
      chiudi()
    }
  }
  // etichette di (al massimo) tre fiumi: i più importanti con più strada dentro il Paese
  const candidati = []
  for (const f of fiumi.values()) {
    if (!f.nome) continue
    let bestRun = null, bestLen = 0
    for (const t of f.tratti) {
      let run = [], len = 0
      const fine = () => { if (len > bestLen) { bestLen = len; bestRun = run } run = []; len = 0 }
      for (let k = 0; k < t.length; k++) {
        if (dentro(t[k], principale) && t[k][0] > 20 && t[k][0] < W - 20 && t[k][1] > 20 && t[k][1] < H - 20) {
          if (run.length) len += Math.hypot(t[k][0] - run[run.length - 1][0], t[k][1] - run[run.length - 1][1])
          run.push(t[k])
        } else fine()
      }
      fine()
    }
    if (bestRun && bestLen > 90) candidati.push({ f, run: bestRun, len: bestLen })
  }
  candidati.sort((a, b) => a.f.rank - b.f.rank || b.len - a.len)
  for (const { f, run, len } of candidati.slice(0, 3)) {
    // punto a metà strada e direzione media lì intorno
    let acc = 0, k = 1
    for (; k < run.length; k++) { acc += Math.hypot(run[k][0] - run[k - 1][0], run[k][1] - run[k - 1][1]); if (acc >= len / 2) break }
    const a = run[Math.max(0, k - 2)], b = run[Math.min(run.length - 1, k + 1)], m = run[Math.min(run.length - 1, k)]
    let ang = (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI
    if (ang > 90) ang -= 180
    if (ang < -90) ang += 180
    const tr = FIUMI_NOMI[f.nome]
    etichette.push({
      id: f.id, tipo: 'fiume', x: +m[0].toFixed(1), y: +(m[1] - 7).toFixed(1), ruota: Math.round(ang),
      testo: tr ? { it: tr[0], en: tr[1], es: tr[2] } : { it: f.nome, en: f.nome, es: f.nome },
    })
  }

  // ── laghi ──
  const laghi = []
  const laghiOrd = [...LAGHI].sort((a, b) => (a.properties.scalerank ?? 9) - (b.properties.scalerank ?? 9))
  for (const f of laghiOrd) {
    const pr = f.properties
    for (const poly of poligoni(f.geometry)) {
      if (!vicinoVista(bbox([poly[0]]))) continue
      const r = ritaglia(poly[0].map(P))
      if (r.length < 3 || area(r) < 30) continue
      const sr = semplificaAnello(r, 0.5)
      if (sr.length < 3) continue
      if (laghi.length >= 40) continue // i laghi sono già in ordine di grandezza: bastano i primi 40
      laghi.push({ id: `l${laghi.length}`, path: anelloD(sr) })
      const vis = ritagliaVista(sr, W, H)
      if (pr.name && vis.length > 2 && area(vis) > 900 && dentro(centro(vis), principale)) {
        const q = polo([vis], W, H, 4)
        if (q && q.d > 5) {
          // «L. Vittoria»: il nome del lago con l'abbreviazione da atlante, se non c'è già «Lago/Lake/Laguna»
          const nome = (k) => { const v = pr[`name_${k}`] ?? pr.name; return /^(lago|lake|laguna|loch|lac|lough)\b/i.test(v) ? v : `L. ${v}` }
          etichette.push({ id: `l${laghi.length - 1}`, tipo: 'lago', x: +q.pt[0].toFixed(1), y: +(q.pt[1]).toFixed(1), testo: { it: nome('it'), en: nome('en'), es: nome('es') } })
        }
      }
    }
  }

  // ── rilievo ──
  let rilievo = null, pesi = ''
  const nomeBase = `${slug}-rilievo.webp`, nomeHd = `${slug}-rilievo-hd.webp`
  const dirImg = path.join(ROOT, 'public/images/mappe')
  fs.mkdirSync(dirImg, { recursive: true })
  if (!PIATTI.has(slug) && !SENZA_RILIEVO) {
    const D = await scaricaDem(Math.max(-80, latS - 0.05), Math.min(80, latN + 0.05), lngA - 0.05, lngB + 0.05)
    const ombra = ombreggia(D)
    const pb = await scriviRilievo(D, ombra, base, prj, 900, path.join(dirImg, nomeBase), 150_000)
    const ph = await scriviRilievo(D, ombra, base, prj, 1900, path.join(dirImg, nomeHd), 400_000)
    pesi = `${(pb / 1024).toFixed(0)}+${(ph / 1024).toFixed(0)} KB (passo DEM ${D.st})`
    fs.rmSync(TMP, { recursive: true, force: true })
  } else if (SENZA_RILIEVO && fs.existsSync(path.join(dirImg, nomeBase))) {
    pesi = 'rilievo invariato'
  }
  if (fs.existsSync(path.join(dirImg, nomeBase)) && !PIATTI.has(slug)) {
    rilievo = { src: `/images/mappe/${nomeBase}`, srcHd: `/images/mappe/${nomeHd}`, x: 0, y: 0, w: W, h: H }
  }

  const out = {
    fonte: 'Natural Earth (Paesi 1:50m, fiumi e laghi 1:10m), pubblico dominio; rilievo e tinta altimetrica da SRTM30_PLUS (Becker et al., UCSD/NOAA)',
    rilievo,
    vicini: vicini.map((v, i) => ({ id: v.id, colore: colore[i], path: v.anelli.map(anelloD).join('') })),
    // al massimo 45 fiumi, i più importanti
    fiumi: [...fiumi.values()].sort((a, b) => a.rank - b.rank).slice(0, 45).map(({ id, peso, path }) => ({ id, peso, path })),
    laghi,
    etichette: etichette.filter((e) => e.tipo !== '_vuoto'),
  }
  const fileOut = path.join(ROOT, 'src/content/mappe', `${slug}-atlante.json`)
  fs.writeFileSync(fileOut, JSON.stringify(out))
  console.log(`${slug.padEnd(20)} json ${(fs.statSync(fileOut).size / 1024).toFixed(0)} KB · vicini ${vicini.length} · fiumi ${fiumi.size} · laghi ${laghi.length} · etichette ${out.etichette.length} · ${pesi || 'tinta piatta'}`)
  return out
}

/** Ritaglio stretto al riquadro visibile (per scegliere dove scrivere). */
function ritagliaVista(r, W, H) {
  const lati = [(p) => p[0] >= 0, (p) => p[0] <= W, (p) => p[1] >= 0, (p) => p[1] <= H]
  const tagli = [
    (a, b) => { const t = (0 - a[0]) / (b[0] - a[0]); return [0, a[1] + t * (b[1] - a[1])] },
    (a, b) => { const t = (W - a[0]) / (b[0] - a[0]); return [W, a[1] + t * (b[1] - a[1])] },
    (a, b) => { const t = (0 - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), 0] },
    (a, b) => { const t = (H - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), H] },
  ]
  let out = r
  for (let l = 0; l < 4 && out.length; l++) {
    const nx = []
    for (let k = 0; k < out.length; k++) {
      const a = out[k], b = out[(k + 1) % out.length]
      const ia = lati[l](a), ib = lati[l](b)
      if (ia) nx.push(a)
      if (ia !== ib) nx.push(tagli[l](a, b))
    }
    out = nx
  }
  return out
}

const lista = TUTTI
  ? fs.readdirSync(path.join(ROOT, 'src/content/paesi')).filter((f) => f.endsWith('.ts')).map((f) => f.replace(/\.ts$/, ''))
  : scelti
for (const slug of lista) {
  try {
    await atlante(slug)
  } catch (e) {
    console.error(`${slug}: ERRORE ${e.message}`)
    fs.rmSync(TMP, { recursive: true, force: true })
  }
}
