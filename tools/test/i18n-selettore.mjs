#!/usr/bin/env node
// (b) Selettore lingua: su un campione di pagine (ogni tipo, ogni lingua) il link verso ogni altra lingua
//     - non ha prefissi doppi né /en,
//     - porta alla pagina equivalente (quella che la sitemap dichiara come alternate hreflang),
//     - risponde 200 senza redirect, con <html lang> della lingua di arrivo,
//     - la lingua corrente è marcata aria-current.
//     Sulle pagine 404: nessun prefisso doppio (il fallback alla home si verifica nel browser).
// Uso: node tools/test/i18n-selettore.mjs [--base=URL] [--per-tipo=3]
import { BASE, LINGUE, inParallelo, langHtml, linguaDi, linkSelettore, prefissoErrato, riepilogo, scarica } from './i18n-comune.mjs'

const perTipo = Number(process.argv.find((a) => a.startsWith('--per-tipo='))?.slice(11) || 3)

// sitemap con le alternate: { en: '/trips/x', it: '/it/viaggi/x', es: '/es/viajes/x' }
const sm = await scarica('/sitemap.xml', { redirect: 'follow' })
if (sm.status !== 200) throw new Error(`sitemap.xml: HTTP ${sm.status}`)
const gruppi = []
const visti = new Set()
for (const blocco of sm.testo.split('<url>').slice(1)) {
  const alt = {}
  for (const m of blocco.matchAll(/hreflang="([a-z]{2})" href="([^"]+)"/g)) alt[m[1]] = new URL(m[2]).pathname
  if (!alt.en || visti.has(alt.en)) continue
  visti.add(alt.en)
  gruppi.push(alt)
}

// campione: per ogni tipo (primo segmento inglese, e per destinazioni/esperienze anche la profondità) i primi N
const perChiave = new Map()
for (const g of gruppi) {
  const seg = g.en.split('/').filter(Boolean)
  const chiave = seg.length ? `${seg[0]}:${seg.length}` : 'home'
  const lista = perChiave.get(chiave) ?? []
  if (lista.length < perTipo) lista.push(g)
  perChiave.set(chiave, lista)
}
const campione = [...perChiave.values()].flat()

// casi con query e ancora (il link SSR non porta la query: la aggiunge il clic, vedi i18n-selettore-click.mjs)
const errori = []
const controlli = []
for (const g of campione) for (const da of LINGUE) controlli.push({ g, da })

// pagine 404 a varie profondità
const nonTrovate = ['/trips/questo-viaggio-non-esiste', '/it/viaggi/questo-viaggio-non-esiste', '/es/viajes/no-existe', '/destinations/japan/nowhere', '/it/pagina-inesistente', '/es/pagina-inexistente/x/y']

console.log(`BASE ${BASE} · ${campione.length} pagine × 3 lingue + ${nonTrovate.length} pagine 404`)

let n = 0
await inParallelo(controlli, 8, async ({ g, da }) => {
  const origine = g[da]
  const r = await scarica(origine)
  if (r.status !== 200) {
    errori.push({ origine, problema: `origine HTTP ${r.status}` })
    return
  }
  const link = linkSelettore(r.testo)
  for (const a of LINGUE) {
    n++
    const l = link[a]
    const problemi = []
    if (!l) problemi.push('link mancante')
    else {
      const pref = prefissoErrato(l.href)
      if (pref) problemi.push(pref)
      const percorsoLink = l.href.split(/[?#]/)[0] || '/'
      if (percorsoLink !== g[a]) problemi.push(`porta a ${l.href}, atteso ${g[a]}`)
      if (a === da && !l.corrente) problemi.push('manca aria-current sulla lingua corrente')
      if (a !== da && l.corrente) problemi.push('aria-current su una lingua non corrente')
      if (a !== da) {
        const arrivo = await scarica(l.href)
        if (arrivo.status !== 200) problemi.push(`arrivo HTTP ${arrivo.status}${arrivo.location ? ` → ${arrivo.location}` : ''}`)
        else if (langHtml(arrivo.testo) !== a) problemi.push(`arrivo con <html lang="${langHtml(arrivo.testo)}">`)
      }
    }
    if (problemi.length) {
      errori.push({ origine, verso: a, href: l?.href, problemi })
      console.log(`  ✗ ${origine} → ${a}: ${problemi.join('; ')}`)
    }
  }
})

for (const origine of nonTrovate) {
  const r = await scarica(origine, { redirect: 'follow' })
  const da = linguaDi(origine)
  if (r.status !== 404) console.log(`  ! ${origine}: HTTP ${r.status} (atteso 404)`)
  // il testo della 404 arriva solo con status 404: lo rileggo
  const html = await fetch(BASE + origine).then((x) => x.text())
  const link = linkSelettore(html)
  for (const a of LINGUE) {
    if (a === da) continue
    n++
    const l = link[a]
    const problemi = []
    if (!l) problemi.push('link mancante')
    else {
      // nell'HTML del server il link punta all'indirizzo equivalente; dopo l'idratazione il selettore
      // passa alla home della lingua (verificato da i18n-selettore-click.mjs): qui solo i prefissi
      const pref = prefissoErrato(l.href)
      if (pref) problemi.push(pref)
    }
    if (problemi.length) {
      errori.push({ origine, verso: a, href: l?.href, problemi, tipo: '404' })
      console.log(`  ✗ [404] ${origine} → ${a}: ${problemi.join('; ')}`)
    }
  }
}

process.exit(riepilogo('Selettore lingua', errori, n))
