#!/usr/bin/env node
// Test senza server delle funzioni di src/lib/i18n/percorsi.ts sulle coppie hreflang della sitemap:
// per ogni pagina e ogni lingua, canonico(indirizzo pubblico) e canonico(rotta interna /<lingua>/<canonico>,
// quella che vede usePathname() sul server) danno lo stesso percorso canonico, e localizza() lo riporta
// esattamente all'indirizzo pubblico di ogni lingua. È il caso che generava /it/en/… e /es/en/….
// Uso: node tools/test/i18n-percorsi.mjs [--base=URL]   (la sitemap si legge da BASE)
import { createJiti } from 'jiti'
import { fileURLToPath } from 'node:url'
import { BASE, LINGUE, prefissoErrato, riepilogo, scarica } from './i18n-comune.mjs'

const radice = fileURLToPath(new URL('../../', import.meta.url))
const jiti = createJiti(import.meta.url, { alias: { '@': radice + 'src' } })
const { canonico, localizza } = await jiti.import(radice + 'src/lib/i18n/percorsi.ts')

const sm = await scarica('/sitemap.xml', { redirect: 'follow' })
if (sm.status !== 200) throw new Error(`sitemap.xml: HTTP ${sm.status}`)
const gruppi = new Map()
for (const blocco of sm.testo.split('<url>').slice(1)) {
  const alt = {}
  for (const m of blocco.matchAll(/hreflang="([a-z]{2})" href="([^"]+)"/g)) alt[m[1]] = new URL(m[2]).pathname
  if (alt.en) gruppi.set(alt.en, alt)
}

const errori = []
let n = 0
for (const alt of gruppi.values()) {
  const canon = canonico(alt.it).percorso
  for (const da of LINGUE) {
    const forme = { pubblico: alt[da], interno: `/${da}${canon === '/' ? '' : canon}` }
    for (const [tipo, p] of Object.entries(forme)) {
      n++
      const c = canonico(p)
      const problemi = []
      if (c.lingua !== da) problemi.push(`lingua ${c.lingua}`)
      if (c.percorso !== canon) problemi.push(`canonico ${c.percorso} invece di ${canon}`)
      for (const a of LINGUE) {
        const h = localizza(c.percorso, a)
        if (h !== alt[a]) problemi.push(`→${a} ${h} invece di ${alt[a]}`)
        const pref = prefissoErrato(h)
        if (pref) problemi.push(pref)
      }
      if (problemi.length) {
        errori.push({ p, tipo, problemi })
        if (errori.length <= 40) console.log(`  ✗ ${tipo} ${p}: ${problemi.join('; ')}`)
      }
    }
  }
}
console.log(`BASE ${BASE} · ${gruppi.size} pagine × 3 lingue × (pubblico + interno)`)
process.exit(riepilogo('Percorsi i18n', errori, n))
