// Mappa di New York CITTÀ (non lo Stato): i cinque distretti più un margine di New Jersey,
// Westchester e Long Island occidentale. Scrive
//   src/content/mappe/new-york.json          = contorno dei distretti + proiezione (come gli altri Paesi)
//   src/content/mappe/new-york-atlante.json  = distretti colorati, contee vicine, ponti, etichette (tinta piatta)
//
//   node tools/mappe/new-york.mjs --dati <dir>
//
// <dir> contiene:
//   boroughs.geojson  Borough Boundaries (clipped to shoreline), NYC Open Data
//                     https://data.cityofnewyork.us/api/geospatial/tqmj-j8zm?method=export&format=GeoJSON
//   county/cb_2023_us_county_500k.{shp,dbf}  U.S. Census Bureau, Cartographic Boundary Files 1:500k (pubblico dominio)
//                     https://www2.census.gov/geo/tiger/GENZ2023/shp/cb_2023_us_county_500k.zip
//   ponti.json, ponti2.json  ponti principali da OpenStreetMap (Overpass, «way[bridge][name~…] out geom»), ODbL
// contorni.mjs e atlante.mjs saltano new-york (config: citta), così non viene sovrascritta.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const i = process.argv.indexOf('--dati')
const DATI = i > 0 ? process.argv[i + 1] : null
if (!DATI) { console.error('Uso: node tools/mappe/new-york.mjs --dati <dir>'); process.exit(1) }

// riquadro: i cinque distretti con un po' di margine attorno
const LNG_A = -74.3, LNG_B = -73.66, LAT_S = 40.47, LAT_N = 40.95
const W = 1000
const mercY = (lat) => (Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) * 180) / Math.PI
const s = W / (LNG_B - LNG_A)
const y0 = mercY(LAT_N)
const H = Math.round((y0 - mercY(LAT_S)) * s)
const P = ([lng, lat]) => [(lng - LNG_A) * s, (y0 - mercY(lat)) * s]
const n1 = (v) => { const r = Math.round(v * 10) / 10; return Number.isInteger(r) ? String(r) : r.toFixed(1) }

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
  let t = 0
  for (let k = 0; k < r.length; k++) { const a = r[k], b = r[(k + 1) % r.length]; t += a[0] * b[1] - b[0] * a[1] }
  return Math.abs(t / 2)
}
const M = 30
function ritaglia(anello) {
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
const anelloD = (r) => 'M' + r.map(([x, y]) => `${n1(x)} ${n1(y)}`).join(' ') + 'Z'
const poligoni = (g) => (g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [])
/** Anelli esterni proiettati, ritagliati e semplificati; scarta le isolette sotto `minArea` unità². */
function anelliDi(geom, tol, minArea) {
  const out = []
  for (const poly of geom) {
    const r = ritaglia(poly[0].map(P))
    if (r.length < 3 || area(r) < minArea) continue
    const sr = semplificaAnello(r, tol)
    if (sr.length >= 3) out.push(sr)
  }
  return out
}

// ── distretti (NYC Open Data) ──
const boro = JSON.parse(fs.readFileSync(path.join(DATI, 'boroughs.geojson'), 'utf8')).features
const DISTRETTI = {
  Manhattan: { id: 'manhattan', colore: 0 },
  Brooklyn: { id: 'brooklyn', colore: 1 },
  Queens: { id: 'queens', colore: 4 },
  Bronx: { id: 'bronx', colore: 2 },
  'Staten Island': { id: 'staten-island', colore: 3 },
}
const interni = []
const tuttiAnelli = []
for (const f of boro) {
  const d = DISTRETTI[f.properties.boroname]
  if (!d) continue
  const anelli = anelliDi(poligoni(f.geometry), 0.35, 2)
  tuttiAnelli.push(...anelli)
  interni.push({ ...d, nome: f.properties.boroname === 'Bronx' ? 'The Bronx' : f.properties.boroname, anelli })
}

// ── contee vicine (Census 1:500k): lettura minima di .shp/.dbf ──
function leggiShp(base) {
  const shp = fs.readFileSync(base + '.shp'), dbf = fs.readFileSync(base + '.dbf')
  const nRec = dbf.readUInt32LE(4), hLen = dbf.readUInt16LE(8), rLen = dbf.readUInt16LE(10)
  const campi = []
  for (let o = 32; dbf[o] !== 0x0d; o += 32) {
    campi.push({ nome: dbf.toString('latin1', o, o + 11).replace(/\0.*$/, ''), len: dbf[o + 16] })
  }
  const attr = []
  for (let r = 0; r < nRec; r++) {
    let o = hLen + r * rLen + 1
    const rec = {}
    for (const c of campi) { rec[c.nome] = dbf.toString('latin1', o, o + c.len).trim(); o += c.len }
    attr.push(rec)
  }
  const out = []
  let o = 100, k = 0
  while (o < shp.length) {
    const lenW = shp.readInt32BE(o + 4)
    const c = o + 8
    const tipo = shp.readInt32LE(c)
    if (tipo === 5) {
      const [xmin, ymin, xmax, ymax] = [0, 1, 2, 3].map((q) => shp.readDoubleLE(c + 4 + q * 8))
      const nParti = shp.readInt32LE(c + 36), nPunti = shp.readInt32LE(c + 40)
      // solo i record che toccano il riquadro
      if (!(xmax < LNG_A - 0.1 || xmin > LNG_B + 0.1 || ymax < LAT_S - 0.1 || ymin > LAT_N + 0.1)) {
        const parti = []
        for (let q = 0; q < nParti; q++) parti.push(shp.readInt32LE(c + 44 + q * 4))
        const p0 = c + 44 + nParti * 4
        const anelli = parti.map((start, q) => {
          const end = q + 1 < nParti ? parti[q + 1] : nPunti
          const r = []
          for (let j = start; j < end; j++) r.push([shp.readDoubleLE(p0 + j * 16), shp.readDoubleLE(p0 + j * 16 + 8)])
          return r
        })
        out.push({ attr: attr[k], anelli })
      }
    }
    o = c + lenW * 2
    k++
  }
  return out
}
const contee = leggiShp(path.join(DATI, 'county/cb_2023_us_county_500k'))
const NYC = new Set(['36005', '36047', '36061', '36081', '36085'])
const GRUPPI = {
  nj: { id: 'new-jersey', colore: 5, nome: { it: 'New Jersey', en: 'New Jersey', es: 'Nueva Jersey' }, anelli: [] },
  nassau: { id: 'long-island', colore: 6, nome: { it: 'Long Island', en: 'Long Island', es: 'Long Island' }, anelli: [] },
  westchester: { id: 'westchester', colore: 3, nome: { it: 'Westchester', en: 'Westchester', es: 'Westchester' }, anelli: [] },
}
for (const c of contee) {
  const geoid = c.attr.STATEFP + c.attr.COUNTYFP
  if (NYC.has(geoid)) continue
  const g = c.attr.STATEFP === '34' ? GRUPPI.nj : geoid === '36059' ? GRUPPI.nassau : geoid === '36119' ? GRUPPI.westchester : null
  if (!g) continue
  // gli anelli dello shapefile: esterni in senso orario; i buchi (antiorari) si scartano
  const esterni = c.anelli.filter((r) => {
    let t = 0
    for (let q = 0; q < r.length - 1; q++) t += (r[q + 1][0] - r[q][0]) * (r[q + 1][1] + r[q][1])
    return t > 0
  })
  ;(g.ll ??= []).push(...esterni)
}
// le contee confinanti condividono gli stessi vertici: togliendo i lati doppi restano solo i contorni esterni
// del gruppo (niente confini di contea dentro «New Jersey»)
function dissolvi(anelliLL) {
  const k = (p) => `${p[0]},${p[1]}`
  const conta = new Map()
  for (const r of anelliLL) for (let q = 0; q < r.length - 1; q++) {
    const a = k(r[q]), b = k(r[q + 1])
    const u = a < b ? `${a}|${b}` : `${b}|${a}`
    conta.set(u, (conta.get(u) ?? 0) + 1)
  }
  const dopo = new Map() // punto → lati in uscita rimasti
  for (const r of anelliLL) for (let q = 0; q < r.length - 1; q++) {
    const a = k(r[q]), b = k(r[q + 1])
    const u = a < b ? `${a}|${b}` : `${b}|${a}`
    if (conta.get(u) > 1) continue
    if (!dopo.has(a)) dopo.set(a, [])
    dopo.get(a).push(r[q + 1])
  }
  const out = []
  for (const [start] of dopo) {
    while (dopo.get(start)?.length) {
      const anello = [start.split(',').map(Number)]
      let cur = start
      for (let guard = 0; guard < 1e6; guard++) {
        const lista = dopo.get(cur)
        if (!lista?.length) break
        const nx = lista.pop()
        anello.push(nx)
        cur = k(nx)
        if (cur === start) break
      }
      if (anello.length > 3) out.push(anello)
    }
  }
  return out
}
for (const g of Object.values(GRUPPI)) {
  if (!g.ll?.length) continue
  g.anelli = anelliDi(dissolvi(g.ll).map((r) => [r]), 0.6, 6)
}
const vicini = Object.values(GRUPPI).filter((g) => g.anelli.length)

// ── ponti (OSM): per ogni ponte la corda tra i due punti più lontani ──
const NOMI_PONTI = [
  ['Brooklyn Bridge', 'brooklyn-bridge'], ['Manhattan Bridge', 'manhattan-bridge'], ['Williamsburg Bridge', 'williamsburg-bridge'],
  ['Queensboro Bridge', 'queensboro-bridge'], ['Robert F. Kennedy Bridge', 'rfk-bridge'], ['George Washington Bridge', 'gw-bridge'],
  ['Verrazzano', 'verrazzano-bridge'], ['Bronx–Whitestone Bridge', 'whitestone-bridge'], ['Throgs Neck Bridge', 'throgs-neck-bridge'],
  ['Bayonne Bridge', 'bayonne-bridge'], ['Goethals Bridge', 'goethals-bridge'], ['Outerbridge Crossing', 'outerbridge'],
]
const elementi = ['ponti.json', 'ponti2.json'].flatMap((f) => JSON.parse(fs.readFileSync(path.join(DATI, f), 'utf8')).elements)
const ponti = []
for (const [nome, id] of NOMI_PONTI) {
  const pts = elementi
    .filter((e) => ((e.tags['bridge:name'] ?? e.tags.name) || '').startsWith(nome))
    .flatMap((e) => (e.geometry ?? []).map((g) => P([g.lon, g.lat])))
  if (pts.length < 2) continue
  let a = pts[0], b = pts[1], dmax = -1
  for (let p = 0; p < pts.length; p++) for (let q = p + 1; q < pts.length; q++) {
    const d = Math.hypot(pts[p][0] - pts[q][0], pts[p][1] - pts[q][1])
    if (d > dmax) { dmax = d; a = pts[p]; b = pts[q] }
  }
  ponti.push({ id, path: `M${n1(a[0])} ${n1(a[1])}L${n1(b[0])} ${n1(b[1])}`, a, b })
}

// ── etichette ──
const E = (id, tipo, lat, lng, testo, ruota) => {
  const [x, y] = P([lng, lat])
  const t = typeof testo === 'string' ? { it: testo, en: testo, es: testo } : testo
  return { id, tipo, x: +x.toFixed(1), y: +y.toFixed(1), ...(ruota ? { ruota } : {}), testo: t }
}
const etichette = [
  E('manhattan', 'paese', 40.789, -73.962, 'Manhattan', -62),
  E('brooklyn', 'paese', 40.645, -73.945, 'Brooklyn'),
  E('queens', 'paese', 40.715, -73.8, 'Queens'),
  E('bronx', 'paese', 40.853, -73.865, 'The Bronx'),
  E('staten-island', 'paese', 40.585, -74.145, 'Staten Island'),
  E('new-jersey', 'paese', 40.79, -74.17, vicini.find((v) => v.id === 'new-jersey').nome),
  E('long-island', 'paese', 40.735, -73.7, 'Long Island'),
  E('westchester', 'paese', 40.93, -73.84, 'Westchester'),
  E('hudson', 'fiume', 40.83, -73.958, { it: 'Fiume Hudson', en: 'Hudson River', es: 'Río Hudson' }, -70),
  E('east-river', 'fiume', 40.758, -73.957, { it: 'East River', en: 'East River', es: 'East River' }, -58),
  E('upper-bay', 'mare', 40.664, -74.045, { it: 'Baia di\nNew York', en: 'Upper\nNew York Bay', es: 'Bahía de\nNueva York' }),
  E('lower-bay', 'mare', 40.535, -74.03, { it: 'Lower Bay', en: 'Lower Bay', es: 'Lower Bay' }),
  E('jamaica-bay', 'mare', 40.612, -73.845, { it: 'Jamaica Bay', en: 'Jamaica Bay', es: 'Jamaica Bay' }),
  E('sound', 'mare', 40.885, -73.72, { it: 'Long Island\nSound', en: 'Long Island\nSound', es: 'Long Island\nSound' }),
  E('atlantico', 'mare', 40.525, -73.82, { it: 'Oceano Atlantico', en: 'Atlantic Ocean', es: 'Océano Atlántico' }),
  E('raritan', 'mare', 40.488, -74.22, { it: 'Raritan Bay', en: 'Raritan Bay', es: 'Raritan Bay' }),
]
// tre ponti con il nome, ruotato lungo il ponte e spostato un poco a lato
for (const [id, nome] of [['brooklyn-bridge', 'Brooklyn Bridge'], ['gw-bridge', 'George Washington Br.'], ['verrazzano-bridge', 'Verrazzano Br.']]) {
  const p = ponti.find((q) => q.id === id)
  if (!p) continue
  let ang = (Math.atan2(p.b[1] - p.a[1], p.b[0] - p.a[0]) * 180) / Math.PI
  if (ang > 90) ang -= 180
  if (ang < -90) ang += 180
  etichette.push({ id, tipo: 'ponte', x: +((p.a[0] + p.b[0]) / 2).toFixed(1), y: +((p.a[1] + p.b[1]) / 2 + 9).toFixed(1), ruota: Math.round(ang), testo: { it: nome, en: nome, es: nome } })
}

const pathCitta = tuttiAnelli.map(anelloD).join('')
const baseOut = {
  viewBox: `0 0 ${W} ${H}`, w: W, h: H, path: pathCitta,
  proiezione: { tipo: 'mercatore', lng0: LNG_A, y0: +y0.toFixed(5), s: +s.toFixed(5), ox: 0, oy: 0 },
}
const atlOut = {
  fonte: 'Distretti: NYC Open Data (Borough Boundaries, clipped to shoreline); contee vicine: U.S. Census Bureau, Cartographic Boundary Files 1:500k; ponti: © OpenStreetMap contributors (ODbL)',
  crediti: {
    it: 'Distretti: NYC Open Data. Contee vicine: U.S. Census Bureau. Ponti e luoghi:',
    en: 'Boroughs: NYC Open Data. Neighbouring counties: U.S. Census Bureau. Bridges and places:',
    es: 'Distritos: NYC Open Data. Condados vecinos: U.S. Census Bureau. Puentes y lugares:',
  },
  raggioGruppo: 24,
  rilievo: null,
  vicini: vicini.map((v) => ({ id: v.id, colore: v.colore, path: v.anelli.map(anelloD).join('') })),
  interni: interni.map((d) => ({ id: d.id, colore: d.colore, path: d.anelli.map(anelloD).join('') })),
  ponti: ponti.map(({ id, path }) => ({ id, path })),
  fiumi: [],
  laghi: [],
  etichette,
}
fs.writeFileSync(path.join(ROOT, 'src/content/mappe/new-york.json'), JSON.stringify(baseOut))
fs.writeFileSync(path.join(ROOT, 'src/content/mappe/new-york-atlante.json'), JSON.stringify(atlOut))
console.log(`new-york ${W}×${H} · contorno ${(pathCitta.length / 1024).toFixed(0)} KB · atlante ${(JSON.stringify(atlOut).length / 1024).toFixed(0)} KB · vicini ${vicini.map((v) => v.id)} · ponti ${ponti.length}`)
