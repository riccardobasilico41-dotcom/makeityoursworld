// Contorni SVG dei Paesi per la mappa «Dove sono le cose»: un file per Paese in
// src/content/mappe/<paese>.json = { viewBox, w, h, path, proiezione }.
//
//   node tools/mappe/contorni.mjs --atlanti <dir con countries-10m.json e states-10m.json>
//
// Fonti: world-atlas@2.0.2 countries-10m (Natural Earth 1:10m) e us-atlas@3.0.1 states-10m,
// entrambe di pubblico dominio. Va lanciato DOPO geocodifica.mjs: le isole piccole vengono
// scartate tranne quelle su cui (o vicino a cui) cade una destinazione o un'esperienza.
// Proiezione di Mercatore e semplificazione Douglas-Peucker scritte qui, senza dipendenze.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { MAPPE } from './config.mjs'
import { caricaAtlanti, geometriaPaese } from './topo.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const i = process.argv.indexOf('--atlanti')
const ATLANTI = i > 0 ? process.argv[i + 1] : null
if (!ATLANTI) {
  console.error('Uso: node tools/mappe/contorni.mjs --atlanti <dir>')
  process.exit(1)
}

const W = 1000, PAD = 36, H_MIN = 520, H_MAX = 1250, MAX_BYTES = 56_000
// Il confine riconosciuto Marocco / Sahara Occidentale è il parallelo 27°40' N.
const TAGLIO_SUD = { marocco: 27.6667 }

const mercY = (lat) => (Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) * 180) / Math.PI

// coordinate già geocodificate (per tenere le isole dove c'è qualcosa)
const coordTs = fs.readFileSync(path.join(ROOT, 'src/content/mappe/coordinate.ts'), 'utf8')
const punti = {}
for (const m of coordTs.matchAll(/'([^/']+)\/[^']+': \[(-?[\d.]+), (-?[\d.]+)\]/g)) {
  ;(punti[m[1]] ??= []).push([+m[2], +m[3]])
}

/** Sutherland–Hodgman contro un solo semipiano lat >= limite. */
function tagliaSotto(anello, limite) {
  const out = []
  for (let k = 0; k < anello.length; k++) {
    const a = anello[k], b = anello[(k + 1) % anello.length]
    const ina = a[1] >= limite, inb = b[1] >= limite
    if (ina) out.push(a)
    if (ina !== inb) {
      const t = (limite - a[1]) / (b[1] - a[1])
      out.push([a[0] + t * (b[0] - a[0]), limite])
    }
  }
  return out
}

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

/** DP su anello chiuso: spezza nel punto più lontano dal primo. */
function semplificaAnello(r, tol) {
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
const n = (v) => { const r = Math.round(v * 10) / 10; return Number.isInteger(r) ? String(r) : r.toFixed(1) }

const atlanti = caricaAtlanti(ATLANTI)
const outDir = path.join(ROOT, 'src/content/mappe')
fs.mkdirSync(outDir, { recursive: true })
console.log('Paese                  poligoni  byte   tolleranza px')

for (const [slug, cfg] of Object.entries(MAPPE)) {
  let { polys } = geometriaPaese(cfg, atlanti)
  if (TAGLIO_SUD[slug]) {
    polys = polys
      .map((p) => ({ ...p, anelli: p.anelli.map((r) => tagliaSotto(r, TAGLIO_SUD[slug])).filter((r) => r.length > 2) }))
      .filter((p) => p.anelli.length)
  }
  const pts = (punti[slug] ?? []).map(([la, lo]) => [lo, mercY(la)])
  // in coordinate proiettate (gradi Mercatore), y verso nord
  let pp = polys.map((p) => p.anelli.map((r) => r.map(([lo, la]) => [lo, mercY(la)])))

  // prima stima della scala per decidere le isole da scartare
  const bboxDi = (rings) => {
    let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity
    for (const r of rings) for (const [x, y] of r) { a = Math.min(a, x); b = Math.min(b, y); c = Math.max(c, x); d = Math.max(d, y) }
    return [a, b, c, d]
  }
  const scala = (bb) => Math.min((W - 2 * PAD) / (bb[2] - bb[0]), (H_MAX - 2 * PAD) / (bb[3] - bb[1]))
  const s0 = scala(bboxDi(pp.map((p) => p[0])))
  const soglia = cfg.isole === 'tutte' ? (slug === 'maldive' ? 0 : 3) : 40 // px² a scala finale (circa)
  const vicinoAPunto = (r) => {
    const [a, b, c, d] = bboxDi([r])
    const m = 20 / s0
    return pts.some(([x, y]) => x >= a - m && x <= c + m && y >= b - m && y <= d + m)
  }
  const maxArea = Math.max(...pp.map((p) => area(p[0])))
  pp = pp.filter((p) => area(p[0]) === maxArea || area(p[0]) * s0 * s0 >= soglia || vicinoAPunto(p[0]))

  // inquadratura: terre tenute + punti
  const bb = bboxDi([...pp.map((p) => p[0]), pts])
  const s = scala(bb)
  const wC = (bb[2] - bb[0]) * s, hC = (bb[3] - bb[1]) * s
  const h = Math.round(Math.max(H_MIN, hC + 2 * PAD))
  const ox = (W - wC) / 2, oy = (h - hC) / 2
  const proiezione = { tipo: 'mercatore', lng0: +bb[0].toFixed(5), y0: +bb[3].toFixed(5), s: +s.toFixed(5), ox: +ox.toFixed(2), oy: +oy.toFixed(2) }
  const P = ([x, y]) => [ox + (x - bb[0]) * s, oy + (bb[3] - y) * s]
  const px = pp.map((p) => p.map((r) => r.map(P)))

  let tol = 0.35, d = ''
  for (;;) {
    const parti = []
    for (const p of px) {
      for (const [ri, r] of p.entries()) {
        const [a, b, c, e] = bboxDi([r])
        const est = Math.max(c - a, e - b)
        if (ri > 0 && est < 3) continue // buchi minuscoli (es. Vaticano, San Marino)
        let sr = semplificaAnello(r, Math.min(tol, est / 6))
        if (sr.length < 3) sr = [[a, b], [c, b], [c, e], [a, e]].filter(() => est >= 0.6)
        if (sr.length < 3) continue
        parti.push('M' + sr.map(([x, y]) => `${n(x)} ${n(y)}`).join(' ').replace(/ (-?)/g, (m, g) => (g ? '-' : ' ')) + 'Z')
      }
    }
    d = parti.join('')
    if (d.length <= MAX_BYTES || tol > 20) break
    tol *= 1.35
  }
  const out = { viewBox: `0 0 ${W} ${h}`, w: W, h, path: d, proiezione }
  fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(out))
  console.log(`${slug.padEnd(22)} ${String(px.length).padStart(5)}  ${String(d.length).padStart(6)}  ${tol.toFixed(2)}`)
}
