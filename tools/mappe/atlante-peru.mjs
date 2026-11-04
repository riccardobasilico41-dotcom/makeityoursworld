// Strati «da atlante» della mappa del Perù (versione di prova, solo Perù):
//   src/content/mappe/peru-atlante.json  = Paesi vicini, fiumi, laghi, etichette
//   public/images/mappe/peru-rilievo.webp = rilievo ombreggiato ritagliato e riproiettato
//
//   node tools/mappe/atlante-peru.mjs --dati <dir>
//
// <dir> deve contenere (Natural Earth, pubblico dominio):
//   ne_50m_admin_0_countries.geojson, ne_10m_rivers_lake_centerlines.geojson,
//   ne_50m_lakes.geojson  (github.com/nvkelso/natural-earth-vector, cartella geojson)
//   dem.asc               SRTM30_PLUS 30" in Esri ASCII, da NOAA ERDDAP:
//     https://coastwatch.pfeg.noaa.gov/erddap/griddap/srtm30plus.esriAscii?z[(-19.0):1:(0.6)][(277.0):1:(293.0)]
// Usa la stessa proiezione di src/content/mappe/peru.json, così tutto combacia col contorno.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const i = process.argv.indexOf('--dati')
const DATI = i > 0 ? process.argv[i + 1] : null
if (!DATI) {
  console.error('Uso: node tools/mappe/atlante-peru.mjs --dati <dir>')
  process.exit(1)
}

const base = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/content/mappe/peru.json'), 'utf8'))
const { lng0, y0, s, ox, oy } = base.proiezione
const W = base.w, H = base.h
const mercY = (lat) => (Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) * 180) / Math.PI
const mercLat = (y) => (Math.atan(Math.exp((y * Math.PI) / 180)) * 360) / Math.PI - 90
const P = ([lng, lat]) => [ox + (lng - lng0) * s, oy + (y0 - mercY(lat)) * s]
const n = (v) => { const r = Math.round(v * 10) / 10; return Number.isInteger(r) ? String(r) : r.toFixed(1) }
const leggi = (f) => JSON.parse(fs.readFileSync(path.join(DATI, f), 'utf8'))

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

/** DP su anello chiuso: spezza nel punto più lontano dal primo (come contorni.mjs). */
function semplificaAnello(r, tol) {
  let far = 0, fd = -1
  for (let k = 1; k < r.length; k++) {
    const d = (r[k][0] - r[0][0]) ** 2 + (r[k][1] - r[0][1]) ** 2
    if (d > fd) { fd = d; far = k }
  }
  const a = dp(r.slice(0, far + 1), tol), b = dp([...r.slice(far), r[0]], tol)
  return [...a.slice(0, -1), ...b.slice(0, -1)]
}

// ritaglio Sutherland–Hodgman al rettangolo della mappa (con margine)
const M = 40
function ritaglia(anello) {
  const lati = [
    (p) => p[0] >= -M, (p) => p[0] <= W + M, (p) => p[1] >= -M, (p) => p[1] <= H + M,
  ]
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

const anelloD = (r) => 'M' + r.map(([x, y]) => `${n(x)} ${n(y)}`).join(' ') + 'Z'
const lineaD = (r) => 'M' + r.map(([x, y]) => `${n(x)} ${n(y)}`).join(' ')
const poligoni = (g) => (g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [])
const linee = (g) => (g.type === 'LineString' ? [g.coordinates] : g.type === 'MultiLineString' ? g.coordinates : [])

// ── Paesi vicini (1:50m, stessa fonte del contorno del Perù) ──
const VICINI = { Ecuador: 'ecuador', Colombia: 'colombia', Brazil: 'brasile', Bolivia: 'bolivia', Chile: 'cile' }
const paesi = leggi('ne_50m_admin_0_countries.geojson')
const vicini = []
for (const f of paesi.features) {
  const chiave = VICINI[f.properties.ADMIN]
  if (!chiave) continue
  const parti = []
  for (const poly of poligoni(f.geometry)) {
    const r = ritaglia(poly[0].map(P))
    if (r.length < 3) continue
    const sr = semplificaAnello(r, 0.8)
    if (sr.length >= 3) parti.push(anelloD(sr))
  }
  if (parti.length) vicini.push({ id: chiave, path: parti.join('') })
}

// ── Fiumi principali (1:10m semplificati) ──
const FIUMI = {
  Amazonas: { id: 'amazzoni', peso: 3 },
  Ucayali: { id: 'ucayali', peso: 2 },
  'Marañón': { id: 'maranon', peso: 2 },
  Huallaga: { id: 'huallaga', peso: 1 },
  Napo: { id: 'napo', peso: 1 },
  Putumayo: { id: 'putumayo', peso: 1 },
  'Madre de Dios': { id: 'madre-de-dios', peso: 1 },
  Tambo: { id: 'tambo', peso: 1 },
  Javari: { id: 'javari', peso: 1 },
}
const fiumiGeo = leggi('ne_10m_rivers_lake_centerlines.geojson')
const fiumi = new Map()
for (const f of fiumiGeo.features) {
  const cfg = FIUMI[f.properties.name]
  if (!cfg || !f.geometry) continue
  for (const l of linee(f.geometry)) {
    const px = l.map(P)
    // spezza dove esce dalla mappa
    let tratto = []
    const chiudi = () => {
      if (tratto.length > 1) {
        const sr = dp(tratto, 1.1)
        const voce = fiumi.get(cfg.id) ?? { id: cfg.id, peso: cfg.peso, path: '' }
        voce.path += lineaD(sr)
        fiumi.set(cfg.id, voce)
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

// ── Laghi (1:50m) ──
const laghiGeo = leggi('ne_50m_lakes.geojson')
const laghi = []
for (const f of laghiGeo.features) {
  if (f.properties.name !== 'Lago Titicaca') continue
  for (const poly of poligoni(f.geometry)) {
    const sr = semplificaAnello(poly[0].map(P).slice(0, -1), 0.5)
    laghi.push({ id: 'titicaca', path: anelloD(sr) })
  }
}

// ── Etichette fisse (lat, lng scelti a mano; ruota in gradi) ──
const ETICHETTE = [
  { id: 'ecuador', tipo: 'paese', at: [-1.6, -78.6] },
  { id: 'colombia', tipo: 'paese', at: [0.0, -72.4] },
  { id: 'brasile', tipo: 'paese', at: [-8.6, -69.2] },
  { id: 'bolivia', tipo: 'paese', at: [-16.4, -67.9] },
  { id: 'cile', tipo: 'paese', at: [-18.6, -69.0] },
  { id: 'pacifico', tipo: 'mare', at: [-11.0, -81.0] },
  { id: 'amazzoni', tipo: 'fiume', at: [-3.55, -71.6], ruota: -8 },
  { id: 'ucayali', tipo: 'fiume', at: [-8.1, -74.6], ruota: -70 },
  { id: 'maranon', tipo: 'fiume', at: [-5.1, -76.4], ruota: -32 },
  { id: 'titicaca', tipo: 'lago', at: [-16.5, -69.0] },
]
const etichette = ETICHETTE.map((e) => {
  const [x, y] = P([e.at[1], e.at[0]])
  return { ...e, at: undefined, x: +x.toFixed(1), y: +y.toFixed(1) }
}).map(({ at, ...e }) => e)

// ── Rilievo + tinta altimetrica da DEM, riproiettati in Mercatore sul viewBox della mappa ──
// dem.asc = SRTM30_PLUS (30", ~1 km) in Esri ASCII grid, ritagliato su NOAA ERDDAP (griddap srtm30plus)
const testo = fs.readFileSync(path.join(DATI, 'dem.asc'), 'utf8')
const righe = testo.split('\n')
const hdr = {}
let ri = 0
for (; ri < 6; ri++) { const [k, v] = righe[ri].trim().split(/\s+/); hdr[k.toLowerCase()] = +v }
const NC = hdr.ncols, NR = hdr.nrows, CELL = hdr.cellsize
const LAT_TOP = hdr.yllcenter + (NR - 1) * CELL, LNG_0 = hdr.xllcenter
const dem = new Float32Array(NC * NR)
for (let r = 0; r < NR; r++) {
  const v = righe[ri + r].trim().split(/\s+/)
  for (let c = 0; c < NC; c++) { const z = +v[c]; dem[r * NC + c] = z === hdr.nodata_value ? 0 : z }
}
// ombreggiatura (Horn), luce da nord-ovest più un filo da ovest: morbida, da incisione
const ombra = new Float32Array(NC * NR)
const zen = (45 * Math.PI) / 180
const luci = [[315, 0.65], [270, 0.2], [0, 0.15]]
for (let r = 0; r < NR; r++) {
  const lat = LAT_TOP - r * CELL
  const dx = CELL * 111320 * Math.cos((lat * Math.PI) / 180), dy = CELL * 110540
  for (let c = 0; c < NC; c++) {
    const g = (rr, cc) => dem[Math.min(NR - 1, Math.max(0, rr)) * NC + Math.min(NC - 1, Math.max(0, cc))]
    const a = g(r - 1, c - 1), b = g(r - 1, c), cc_ = g(r - 1, c + 1), d = g(r, c - 1), f = g(r, c + 1), gg = g(r + 1, c - 1), h = g(r + 1, c), ii = g(r + 1, c + 1)
    const dzdx = (cc_ + 2 * f + ii - (a + 2 * d + gg)) / (8 * dx)
    const dzdy = (gg + 2 * h + ii - (a + 2 * b + cc_)) / (8 * dy)
    const slope = Math.atan(1.6 * Math.hypot(dzdx, dzdy))
    const aspect = Math.atan2(dzdy, -dzdx)
    let s = 0
    for (const [az, w] of luci) {
      const azR = ((360 - az + 90) % 360) * (Math.PI / 180)
      s += w * Math.max(0, Math.cos(zen) * Math.cos(slope) + Math.sin(zen) * Math.sin(slope) * Math.cos(azR - aspect))
    }
    ombra[r * NC + c] = s
  }
}
// tinta altimetrica ad acquerello: verdi tenui in basso, ocra e terra di Siena sulle Ande, bianco sulle vette
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
const bil = (arr, fx, fy) => {
  const x0 = Math.max(0, Math.min(NC - 2, Math.floor(fx))), y0_ = Math.max(0, Math.min(NR - 2, Math.floor(fy)))
  const tx = Math.min(1, Math.max(0, fx - x0)), ty = Math.min(1, Math.max(0, fy - y0_))
  const i0 = y0_ * NC + x0
  return (arr[i0] * (1 - tx) + arr[i0 + 1] * tx) * (1 - ty) + (arr[i0 + NC] * (1 - tx) + arr[i0 + NC + 1] * tx) * ty
}
const CARTA = [244, 238, 227]
const PIANO = Math.cos(zen) // ombreggiatura di una pianura

async function rilievo(outW, nome, qualita) {
  const outH = Math.round((outW * H) / W)
  // maschera del Paese (fuori dal Perù colore piatto: comprime meglio, tanto è ritagliato nell'SVG)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${outW}" height="${outH}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}"/><path d="${base.path}" fill="#fff" stroke="#fff" stroke-width="6"/></svg>`
  const maschera = await sharp(Buffer.from(svg)).extractChannel(0).raw().toBuffer()
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
        const fx = (lng - LNG_0) / CELL
        const z = bil(dem, fx, fy), sh = bil(ombra, fx, fy)
        const f = Math.min(1.12, Math.max(0.42, 1 + (sh - PIANO) * 1.15))
        const c = tinta(z).map((v) => Math.min(255, v * f))
        // un velo di carta sopra, come un acquerello leggero
        col = c.map((v, j) => (v * 0.88 + CARTA[j] * 0.12) * m + CARTA[j] * (1 - m))
      }
      rgb[k * 3] = col[0]; rgb[k * 3 + 1] = col[1]; rgb[k * 3 + 2] = col[2]
    }
  }
  const file = path.join(ROOT, 'public/images/mappe', nome)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  await sharp(rgb, { raw: { width: outW, height: outH, channels: 3 } }).webp({ quality: qualita, effort: 6, smartSubsample: true }).toFile(file)
  return fs.statSync(file).size
}
const pesoBase = await rilievo(900, 'peru-rilievo.webp', 80)
const pesoHd = await rilievo(1900, 'peru-rilievo-hd.webp', 80)


const out = {
  fonte: 'Natural Earth 1:50m (Paesi, laghi) e 1:10m (fiumi), pubblico dominio; rilievo e tinta altimetrica da SRTM30_PLUS (Becker et al., UCSD/NOAA)',
  rilievo: { src: '/images/mappe/peru-rilievo.webp', srcHd: '/images/mappe/peru-rilievo-hd.webp', x: 0, y: 0, w: W, h: H },
  vicini,
  fiumi: [...fiumi.values()],
  laghi,
  etichette,
}
const outJson = path.join(ROOT, 'src/content/mappe/peru-atlante.json')
fs.writeFileSync(outJson, JSON.stringify(out))
console.log('json', fs.statSync(outJson).size, 'byte · webp', pesoBase, '+ hd', pesoHd, 'byte')
console.log('vicini', vicini.map((v) => `${v.id}:${v.path.length}`).join(' '))
console.log('fiumi', [...fiumi.values()].map((v) => `${v.id}:${v.path.length}`).join(' '))
