// Terre del mondo per il globo «Il mondo che ho visto»: src/content/mappe/mondo.json.
//
//   node tools/mappe/mondo.mjs --atlanti <dir con countries-110m.json>
//
// Fonte: world-atlas@2.0.2 countries-110m (Natural Earth 1:110m, pubblico dominio).
// Formato compatto: { paesi: [{ n: nome, s?: slug del sito, p: [[lng,lat,lng,lat,...], ...] }] }
// con coordinate a 0,1° e semplificazione Douglas-Peucker in gradi. L'Antartide è esclusa.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { MAPPE } from './config.mjs'
import { leggiTopo, poligoni } from './topo.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const i = process.argv.indexOf('--atlanti')
if (i < 0) {
  console.error('Uso: node tools/mappe/mondo.mjs --atlanti <dir>')
  process.exit(1)
}
const topo = leggiTopo(path.join(process.argv[i + 1], 'countries-110m.json'))

// nome Natural Earth → slug della pagina Paese (il primo che lo usa come geometria principale)
const SLUG = {}
for (const [slug, cfg] of Object.entries(MAPPE)) {
  if (cfg.fonte !== 'world' || slug === 'borneo') continue
  SLUG[cfg.nomi[0]] ??= slug
}

function dp(pts, tol) {
  if (pts.length < 4) return pts
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

const r1 = (v) => Math.round(v * 10) / 10
const paesi = []
for (const g of topo.t.objects.countries.geometries) {
  const nome = g.properties?.name
  if (!nome || nome === 'Antarctica') continue
  const p = []
  for (const poly of poligoni(topo, 'countries', [nome]).filter((x) => x.nome === nome)) {
    // anello chiuso: spezzato nel punto più lontano dal primo, poi DP sulle due metà
    const ring = poly.anelli[0]
    let far = 0, fd = -1
    ring.forEach(([x, y], k) => { const d = (x - ring[0][0]) ** 2 + (y - ring[0][1]) ** 2; if (d > fd) { fd = d; far = k } })
    const r = [...dp(ring.slice(0, far + 1), 0.12).slice(0, -1), ...dp(ring.slice(far), 0.12).slice(0, -1)]
    if (r.length < 4) continue
    p.push(r.flatMap(([lng, lat]) => [r1(lng), r1(lat)]))
  }
  if (!p.length) continue
  paesi.push({ n: nome, ...(SLUG[nome] ? { s: SLUG[nome] } : {}), p })
}
const out = JSON.stringify({ paesi })
fs.writeFileSync(path.join(ROOT, 'src/content/mappe/mondo.json'), out)
console.log(`mondo.json: ${paesi.length} Paesi, ${(out.length / 1024).toFixed(1)} KB, collegati: ${paesi.filter((x) => x.s).length}`)
