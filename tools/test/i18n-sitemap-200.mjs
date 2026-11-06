#!/usr/bin/env node
// (a) Ogni indirizzo della sitemap (en, it, es) risponde 200 senza redirect e con <html lang> giusto.
// Uso: node tools/test/i18n-sitemap-200.mjs [--base=URL] [--paralleli=12] [--json=file]
import { writeFileSync } from 'node:fs'
import { BASE, inParallelo, langHtml, linguaDi, percorsiSitemap, prefissoErrato, riepilogo, scarica } from './i18n-comune.mjs'

const paralleli = Number(process.argv.find((a) => a.startsWith('--paralleli='))?.slice(12) || 12)
const fileJson = process.argv.find((a) => a.startsWith('--json='))?.slice(7)

const percorsi = await percorsiSitemap()
const conta = { en: 0, it: 0, es: 0 }
for (const p of percorsi) conta[linguaDi(p)]++
console.log(`BASE ${BASE} · ${percorsi.length} indirizzi in sitemap (en ${conta.en}, it ${conta.it}, es ${conta.es})`)

const errori = []
let fatti = 0
await inParallelo(percorsi, paralleli, async (p) => {
  const r = await scarica(p)
  const atteso = linguaDi(p)
  const problemi = []
  if (r.status !== 200) problemi.push(`HTTP ${r.status}${r.location ? ` → ${r.location}` : ''}${r.errore ? ` ${r.errore}` : ''}`)
  else if (langHtml(r.testo) !== atteso) problemi.push(`<html lang="${langHtml(r.testo)}"> invece di ${atteso}`)
  const pref = prefissoErrato(p)
  if (pref) problemi.push(pref)
  if (problemi.length) {
    errori.push({ percorso: p, problemi })
    console.log(`  ✗ ${p}: ${problemi.join('; ')}`)
  }
  if (++fatti % 250 === 0) console.log(`  … ${fatti}/${percorsi.length}`)
})

if (fileJson) writeFileSync(fileJson, JSON.stringify({ base: BASE, totale: percorsi.length, errori }, null, 2))
process.exit(riepilogo('Sitemap 200', errori, percorsi.length))
