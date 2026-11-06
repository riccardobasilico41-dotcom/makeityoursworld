/*
 * Controlla che src/content/guide-pdf.json (letto dal pulsante «Scarica la guida») e
 * public/guide-pdf/ siano allineati: ogni voce ha il suo file con la dimensione giusta,
 * ogni file ha la sua voce, nessun PDF vuoto o quasi (< 100 kB = probabile demo).
 *
 *   node tools/controlla-guide-pdf.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const radice = path.join(import.meta.dirname, '..')
const cartella = path.join(radice, 'public', 'guide-pdf')
const elenco = JSON.parse(fs.readFileSync(path.join(radice, 'src', 'content', 'guide-pdf.json'), 'utf8'))
const file = fs.existsSync(cartella) ? fs.readdirSync(cartella).filter((f) => f.endsWith('.pdf')) : []
const errori = []

for (const [slug, byte] of Object.entries(elenco)) {
  const p = path.join(cartella, `${slug}.pdf`)
  if (!fs.existsSync(p)) { errori.push(`${slug}: nell'elenco ma il file non c'è`); continue }
  const reale = fs.statSync(p).size
  if (reale !== byte) errori.push(`${slug}: elenco ${byte} byte, file ${reale} byte`)
  if (reale < 100_000) errori.push(`${slug}: solo ${reale} byte, vuoto o dimostrativo?`)
}
for (const f of file) if (!(f.replace(/\.pdf$/, '') in elenco)) errori.push(`${f}: file senza voce nell'elenco (il pulsante non compare)`)

if (errori.length) {
  console.error(errori.join('\n'))
  process.exit(1)
}
console.log(`OK: ${Object.keys(elenco).length} PDF, elenco e file allineati`)
