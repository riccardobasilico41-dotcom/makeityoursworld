// Scrive src/content/aggiornamenti-viaggi.json: per ogni viaggio la data (AAAA-MM-GG) dell'ultimo
// commit che ha toccato il suo testo, in qualsiasi lingua. Lanciarlo prima di pubblicare
// (su Vercel il clone è parziale e git log non basta).  node tools/aggiornamenti-viaggi.mjs
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
const dir = 'src/content/viaggi'
const out = {}
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md')).sort()) {
  const slug = f.replace(/^\d+-/, '').replace(/\.md$/, '')
  const files = [`${dir}/${f}`, `src/content/i18n/en/viaggi/${f}`, `src/content/i18n/es/viaggi/${f}`]
  const d = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...files], { encoding: 'utf8' }).trim()
  if (d) out[slug] = d
}
fs.writeFileSync('src/content/aggiornamenti-viaggi.json', JSON.stringify(out, null, 1) + '\n')
console.log(Object.keys(out).length, 'viaggi')
