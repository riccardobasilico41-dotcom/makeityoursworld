// Controlla che ogni luogo con coordinate stia vicino alla sua destinazione (oltre 110 km = da guardare).
//   npx tsx --tsconfig tsconfig.json tools/controlla-coordinate-luoghi.ts
import { getAllPaesi, getDestinazioniByPaese } from '@/lib/geo'
import { coordinateDestinazioni } from '@/content/mappe/coordinate'
const r = (x: number) => (x * Math.PI) / 180
const km = (a: number, b: number, c: number, e: number) => 12742 * Math.asin(Math.sqrt(Math.sin(r(c - a) / 2) ** 2 + Math.cos(r(a)) * Math.cos(r(c)) * Math.sin(r(e - b) / 2) ** 2))
let n = 0
for (const p of getAllPaesi('it'))
  for (const d of getDestinazioniByPaese(p.slug, 'it')) {
    const c = coordinateDestinazioni[`${p.slug}/${d.slug}`]
    for (const l of d.luoghi ?? []) {
      if (typeof l.lat !== 'number' || typeof l.lng !== 'number') continue
      n++
      if (!c) continue
      const k = km(l.lat, l.lng, c[0], c[1])
      if (k > 110) console.log(k.toFixed(0).padStart(5), 'km |', d.slug, '|', l.nome)
    }
  }
console.log('controllati', n)
