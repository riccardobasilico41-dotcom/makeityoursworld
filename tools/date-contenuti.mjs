// Scrive src/content/date-contenuti.json: per viaggi, Paesi (destinazioni), meraviglie e consigli
// la data del primo commit (pubblicato) e dell'ultimo (aggiornato) che ha toccato i loro testi,
// in qualsiasi lingua. Serve a datePublished/dateModified e alla data visibile in pagina.
// Parte da solo con `npm run build` (prebuild); va lanciato anche prima di ogni commit
// che tocca i testi:  node tools/date-contenuti.mjs
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'

const LINGUE = ['', 'i18n/en/', 'i18n/es/']
const base = 'src/content/'

// Su Vercel il clone è parziale: le date di git sarebbero sbagliate, si tiene il JSON già committato.
const parziale = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { encoding: 'utf8' }).trim() === 'true'
if (process.env.VERCEL || parziale) {
  console.log('date-contenuti: clone parziale, uso il JSON già salvato')
  process.exit(0)
}
const oggi = new Date().toISOString().slice(0, 10)

function date(files) {
  const esistenti = files.filter((f) => fs.existsSync(f))
  if (!esistenti.length) return null
  const log = execFileSync('git', ['log', '--format=%cs', '--', ...esistenti], { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(Boolean)
  // modifiche non ancora committate: contano come aggiornamento di oggi
  const modificato = execFileSync('git', ['status', '--porcelain', '--', ...esistenti], { encoding: 'utf8' }).trim() !== ''
  if (!log.length) return modificato ? { pubblicato: oggi, aggiornato: oggi } : null
  return { pubblicato: log[log.length - 1], aggiornato: modificato ? oggi : log[0] }
}

const out = { viaggi: {}, paesi: {}, meraviglie: {}, consigli: {} }

for (const f of fs.readdirSync(base + 'viaggi').filter((x) => x.endsWith('.md')).sort()) {
  const slug = f.replace(/^\d+-/, '').replace(/\.md$/, '')
  const d = date(LINGUE.map((l) => `${base}${l}viaggi/${f}`))
  if (d) out.viaggi[slug] = d
}

for (const f of fs.readdirSync(base + 'destinazioni').filter((x) => x.endsWith('.ts')).sort()) {
  const d = date(LINGUE.map((l) => `${base}${l}destinazioni/${f}`))
  if (d) out.paesi[f.replace(/\.ts$/, '')] = d
}

const meraviglieBase = LINGUE.map((l) => `${base}${l}meraviglie.ts`)
const guide = `${base}meraviglie-guide`
for (const f of fs.readdirSync(`${guide}/it`).filter((x) => x.endsWith('.ts')).sort()) {
  const slug = f.replace(/\.ts$/, '')
  const d = date([...meraviglieBase, ...['it', 'en', 'es'].map((l) => `${guide}/${l}/${f}`)])
  if (d) out.meraviglie[slug] = d
}

for (const f of fs.readdirSync(base + 'consigli').filter((x) => x.endsWith('.ts') && !['index.ts', 'tipi.ts'].includes(x)).sort()) {
  const d = date([`${base}consigli/${f}`])
  if (d) out.consigli[f.replace(/\.ts$/, '')] = d
}

fs.writeFileSync(base + 'date-contenuti.json', JSON.stringify(out, null, 1) + '\n')
console.log(Object.entries(out).map(([k, v]) => `${k} ${Object.keys(v).length}`).join(', '))
