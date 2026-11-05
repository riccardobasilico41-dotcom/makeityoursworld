// Lettura minima di TopoJSON (arcs quantizzati + delta) senza dipendenze.
import fs from 'node:fs'

export function leggiTopo(file) {
  const t = JSON.parse(fs.readFileSync(file, 'utf8'))
  const [sx, sy] = t.transform?.scale ?? [1, 1]
  const [tx, ty] = t.transform?.translate ?? [0, 0]
  const arcs = t.arcs.map((arc) => {
    let x = 0, y = 0
    return arc.map(([dx, dy]) => {
      x += dx; y += dy
      return t.transform ? [x * sx + tx, y * sy + ty] : [dx, dy]
    })
  })
  return { t, arcs }
}

function anello(arcs, idx) {
  const out = []
  for (const i of idx) {
    const a = i < 0 ? arcs[~i].slice().reverse() : arcs[i]
    for (let k = out.length ? 1 : 0; k < a.length; k++) out.push(a[k])
  }
  return out
}

/** Poligoni (array di anelli [lng,lat]) delle feature con questi nomi, nell'oggetto dato. */
export function poligoni(topo, oggetto, nomi) {
  const out = []
  for (const g of topo.t.objects[oggetto].geometries) {
    if (!nomi.includes(g.properties?.name)) continue
    const polys = g.type === 'Polygon' ? [g.arcs] : g.type === 'MultiPolygon' ? g.arcs : []
    for (const p of polys) out.push({ nome: g.properties.name, anelli: p.map((r) => anello(topo.arcs, r)) })
  }
  return out
}

export function bboxDi(punti) {
  let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity
  for (const [x, y] of punti) { if (x < a) a = x; if (y < b) b = y; if (x > c) c = x; if (y > d) d = y }
  return [a, b, c, d]
}

/** Poligoni del Paese già filtrati per clip, con bbox geografica complessiva. */
export function geometriaPaese(cfg, atlanti) {
  let polys
  if (cfg.fonte === 'mapunits') {
    if (!atlanti.mapunits) throw new Error('manca ne_50m_admin_0_map_units.geojson nella cartella degli atlanti')
    polys = []
    for (const f of atlanti.mapunits.features) {
      if (!cfg.nomi.includes(f.properties.NAME)) continue
      const g = f.geometry
      const ps = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : []
      for (const p of ps) polys.push({ nome: f.properties.NAME, anelli: p })
    }
  } else {
    const topo = cfg.fonte === 'us' ? atlanti.us : atlanti.world
    polys = poligoni(topo, cfg.fonte === 'us' ? 'states' : 'countries', cfg.nomi)
  }
  if (cfg.clip) {
    const [a, b, c, d] = cfg.clip
    polys = polys.filter((p) => {
      const [x0, y0, x1, y1] = bboxDi(p.anelli[0])
      const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2
      return cx >= a && cx <= c && cy >= b && cy <= d
    })
  }
  const bbox = bboxDi(polys.flatMap((p) => p.anelli[0]))
  return { polys, bbox }
}

export function caricaAtlanti(dir) {
  const mu = `${dir}/ne_50m_admin_0_map_units.geojson`
  return {
    world: leggiTopo(`${dir}/countries-10m.json`),
    us: leggiTopo(`${dir}/states-10m.json`),
    // facoltativo: serve solo alle mappe con fonte 'mapunits' (nazioni del Regno Unito)
    mapunits: fs.existsSync(mu) ? JSON.parse(fs.readFileSync(mu, 'utf8')) : null,
  }
}
