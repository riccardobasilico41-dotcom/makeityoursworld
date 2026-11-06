#!/usr/bin/env node
// (c) Nessuna stringa italiana nota nelle pagine EN ed ES.
//   1. frasi sentinella (lista sotto): esempi segnalati e titoletti italiani noti;
//   2. etichette dei dati: in ogni elenco «a · b · c» nessuna voce è una chiave italiana del dizionario
//      src/lib/i18n/etichette-dati.ts che nella lingua della pagina ha un'altra traduzione.
// Uso: node tools/test/i18n-italiano.mjs [--base=URL] [--campione=N] [--paralleli=10]
//   senza --campione controlla tutte le pagine EN/ES della sitemap.
import { createJiti } from 'jiti'
import { fileURLToPath } from 'node:url'
import { BASE, inParallelo, linguaDi, percorsiSitemap, riepilogo, scarica, testoVisibile } from './i18n-comune.mjs'

const arg = (n) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1]
const campione = Number(arg('campione') || 0)
const paralleli = Number(arg('paralleli') || 10)

// frasi che non devono mai comparire in EN/ES (minuscole/maiuscole contano: sono titoletti e etichette)
export const SENTINELLE = [
  'grandi classici · alta velocità · megalopoli',
  'grandi classici',
  'alta velocità',
  'sakura · cultura · cibo',
  'archeologia · deserto · crociera sul nilo · immersioni',
  'crociera sul nilo',
  'natura · avventura · trekking · vulcani',
  'vulcani · isole',
  'treni ad alta velocità',
  'Dove dormire',
  'Dove mangiare',
  'Quando andare',
  'Come arrivare',
  'Cosa fare',
  'giorno per giorno',
  'Torna alla home',
  'Tutti i viaggi',
  'Il mio prossimo viaggio',
  'Leggi di più',
]

const radice = fileURLToPath(new URL('../../', import.meta.url))
const jiti = createJiti(import.meta.url, { alias: { '@': radice + 'src' } })
const { ETICHETTE } = await jiti.import(radice + 'src/lib/i18n/etichette-dati.ts')
const DIZ = new Map()
for (const [k, v] of Object.entries(ETICHETTE)) {
  // solo voci di almeno 4 lettere, per non confondere sigle e nomi brevi
  if (k.replace(/\s/g, '').length >= 4) DIZ.set(k.toLowerCase(), v)
}

let percorsi = (await percorsiSitemap()).filter((p) => linguaDi(p) !== 'it')
if (campione && campione < percorsi.length) {
  // campione stabile: tutte le pagine Paese/area/elenchi + un passo regolare sul resto
  const fissi = percorsi.filter((p) => p.split('/').filter(Boolean).length <= (p.startsWith('/es') ? 3 : 2))
  const altri = percorsi.filter((p) => !fissi.includes(p))
  const passo = Math.max(1, Math.floor(altri.length / Math.max(1, campione - fissi.length)))
  percorsi = [...fissi, ...altri.filter((_, i) => i % passo === 0)].slice(0, Math.max(campione, fissi.length))
}
console.log(`BASE ${BASE} · ${percorsi.length} pagine EN/ES · ${SENTINELLE.length} sentinelle · ${DIZ.size} etichette`)

const errori = []
const perFrase = new Map()
await inParallelo(percorsi, paralleli, async (p) => {
  const r = await scarica(p)
  if (r.status !== 200) return
  const l = linguaDi(p)
  const t = testoVisibile(r.testo)
  const trovate = new Set(SENTINELLE.filter((s) => t.includes(s)))
  for (const m of t.matchAll(/[^·|\n]{2,40}(?: · [^·|\n]{2,40})+/g)) {
    for (const voce of m[0].split(' · ').map((x) => x.trim().toLowerCase())) {
      const tr = DIZ.get(voce)?.[l]
      if (tr && tr.toLowerCase() !== voce) trovate.add(`etichetta «${voce}» (→ ${tr})`)
    }
  }
  if (trovate.size) {
    errori.push({ percorso: p, trovate: [...trovate] })
    for (const f of trovate) perFrase.set(f, [...(perFrase.get(f) ?? []), p])
  }
})

for (const [f, pagine] of [...perFrase].sort((a, b) => b[1].length - a[1].length))
  console.log(`  ✗ ${f}: ${pagine.length} pagine (${pagine.slice(0, 3).join(', ')}${pagine.length > 3 ? ', …' : ''})`)
process.exit(riepilogo('Stringhe italiane in EN/ES', errori, percorsi.length))
