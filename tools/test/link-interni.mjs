#!/usr/bin/env node
// Crawler dei link interni: per ogni pagina della sitemap (en, it, es) estrae gli href interni
// dall'HTML del server e controlla che rispondano 200, oppure 307/308 verso una pagina 200.
// Segnala anche href="#", href vuoti, javascript:, mailto:/tel: vuoti e <button> senza type/azione
// evidente nell'HTML statico (solo segnalazione: l'azione può arrivare con JS, vedi nota).
// Uso: node tools/test/link-interni.mjs [--base=URL] [--paralleli=8] [--json=file]
import { writeFileSync } from 'node:fs'
import { BASE, inParallelo, percorsiSitemap, riepilogo } from './i18n-comune.mjs'

const paralleli = Number(process.argv.find((a) => a.startsWith('--paralleli='))?.slice(12) || 8)
const fileJson = process.argv.find((a) => a.startsWith('--json='))?.slice(7)
const origine = new URL(BASE).origin

async function get(url, redirect = 'manual') {
  for (let i = 0; ; i++) {
    try {
      const r = await fetch(url, { redirect, headers: { 'user-agent': 'link-test/1.0', accept: 'text/html' } })
      const testo = r.status === 200 && (r.headers.get('content-type') || '').includes('text/html') ? await r.text() : ''
      if (!testo) await r.body?.cancel()
      return { status: r.status, location: r.headers.get('location'), testo }
    } catch (e) {
      if (i >= 2) return { status: 0, errore: String(e), testo: '' }
      await new Promise((ok) => setTimeout(ok, 500 * (i + 1)))
    }
  }
}

const decodifica = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"')

const pagine = await percorsiSitemap()
console.log(`BASE ${BASE} · ${pagine.length} pagine della sitemap`)

const daControllare = new Map() // destinazione → [pagine che la linkano]
const sospetti = [] // href vuoti, "#", javascript:
const bottoni = [] // <button> senza type o con type=button senza attributi d'azione noti nell'HTML
let fatti = 0
const errori = []

await inParallelo(pagine, paralleli, async (p) => {
  const r = await get(BASE + p)
  if (r.status !== 200) {
    errori.push({ percorso: p, problemi: [`pagina della sitemap: HTTP ${r.status}`] })
    return
  }
  // togli script e style: niente href dentro JSON RSC
  const html = r.testo.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')
  for (const m of html.matchAll(/<a\b[^>]*?>/g)) {
    const tag = m[0]
    const h = tag.match(/\shref="([^"]*)"/)
    if (!h) { sospetti.push({ pagina: p, tag: tag.slice(0, 120), motivo: '<a> senza href' }); continue }
    const href = decodifica(h[1]).trim()
    if (href === '' || href === '#') { sospetti.push({ pagina: p, tag: tag.slice(0, 120), motivo: `href="${href}"` }); continue }
    if (/^javascript:/i.test(href)) { sospetti.push({ pagina: p, tag: tag.slice(0, 120), motivo: 'javascript:' }); continue }
    if (/^(mailto|tel):\s*$/i.test(href)) { sospetti.push({ pagina: p, tag: tag.slice(0, 120), motivo: 'mailto/tel vuoto' }); continue }
    if (href.startsWith('#')) continue // ancora nella stessa pagina
    let u
    try { u = new URL(href, BASE + p) } catch { sospetti.push({ pagina: p, tag: tag.slice(0, 120), motivo: 'href non valido' }); continue }
    if (u.origin !== origine) continue
    const dest = u.pathname + u.search
    if (!daControllare.has(dest)) daControllare.set(dest, [])
    const l = daControllare.get(dest)
    if (l.length < 3) l.push(p)
  }
  for (const m of html.matchAll(/<button\b([^>]*)>/g)) {
    const attr = m[1]
    // un bottone è «senza azione» nell'HTML se non è submit, non controlla nulla (aria-controls/expanded/pressed/haspopup)
    // e non ha un nome: segnalazione da verificare a mano, perché l'onClick di React non compare nell'HTML
    const controlla = /aria-(controls|expanded|pressed|haspopup)=|type="submit"|form=|popovertarget=|data-/.test(attr)
    if (!/type=/.test(attr) && !controlla) bottoni.push({ pagina: p, tag: `<button${attr.slice(0, 100)}>`, motivo: 'senza type' })
  }
  if (++fatti % 300 === 0) console.log(`  … ${fatti}/${pagine.length} pagine lette, ${daControllare.size} destinazioni`)
})

console.log(`${daControllare.size} destinazioni interne distinte da controllare`)
const destinazioni = [...daControllare.keys()]
let controllati = 0
const stati = { 200: 0, redirectOk: 0 }
await inParallelo(destinazioni, paralleli, async (d) => {
  let r = await get(BASE + d)
  let catena = [`${r.status}`]
  let salti = 0
  while ([301, 302, 307, 308].includes(r.status) && salti < 5) {
    const prossimo = new URL(r.location, BASE + d)
    if (prossimo.origin !== origine) { catena.push('esterno'); break }
    r = await get(prossimo.href)
    catena.push(`${r.status}`)
    salti++
  }
  const finale = r.status
  if (salti === 0 && finale === 200) stati[200]++
  else if (salti > 0 && finale === 200) stati.redirectOk++
  else errori.push({ percorso: d, problemi: [`HTTP ${catena.join(' → ')}`, `linkata da ${daControllare.get(d).join(', ')}`] })
  if (++controllati % 500 === 0) console.log(`  … ${controllati}/${destinazioni.length}`)
})

console.log(`Destinazioni: ${stati[200]} rispondono 200, ${stati.redirectOk} con redirect verso 200`)
console.log(`href sospetti (vuoti, "#", javascript:, mailto vuoti, <a> senza href): ${sospetti.length}`)
for (const s of sospetti.slice(0, 20)) console.log(`  ! ${s.pagina}: ${s.motivo} ${s.tag}`)
const tipiBottoni = new Map()
for (const b of bottoni) tipiBottoni.set(b.tag, (tipiBottoni.get(b.tag) || 0) + 1)
console.log(`<button> senza type né attributi d'azione nell'HTML: ${bottoni.length} (${tipiBottoni.size} tipi distinti)`)
for (const [t, n] of [...tipiBottoni].slice(0, 15)) console.log(`  ? ${n}× ${t}`)
for (const e of errori.slice(0, 40)) console.log(`  ✗ ${e.percorso}: ${e.problemi.join('; ')}`)

if (fileJson) writeFileSync(fileJson, JSON.stringify({ base: BASE, pagine: pagine.length, destinazioni: destinazioni.length, stati, sospetti, bottoni, errori }, null, 2))
const esito = riepilogo('Link interni', [...errori, ...sospetti.map((s) => ({ percorso: s.pagina, problemi: [s.motivo] }))], destinazioni.length)
process.exit(esito)
