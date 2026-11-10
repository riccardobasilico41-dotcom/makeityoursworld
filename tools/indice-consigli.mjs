// Rigenera src/content/consigli/index.ts da tutti i file articolo e unisce gli slug tradotti
// scritti dagli agenti (scratchpad/slug-guide-*.json o argomenti) in src/content/i18n/<l>/slug/consigli.json.
//   node tools/indice-consigli.mjs [file-slug.json ...]
import fs from 'node:fs'
const dir = 'src/content/consigli'
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts') && !['index.ts', 'tipi.ts'].includes(f))
const voci = files.map((f) => {
  const s = fs.readFileSync(`${dir}/${f}`, 'utf8')
  const nome = s.match(/export const (\w+)\s*:\s*Consiglio/)?.[1]
  const data = s.match(/aggiornato:\s*['"](\d{4}-\d{2}-\d{2})/)?.[1] ?? ''
  if (!nome) throw new Error(`export mancante in ${f}`)
  return { f: f.replace(/\.ts$/, ''), nome, data }
})
// prima i più vecchi (gli articoli generali), poi le guide nell'ordine di data e nome
voci.sort((a, b) => a.data.localeCompare(b.data) || a.f.localeCompare(b.f))
const righe = [
  "import type { Consiglio } from './tipi'",
  ...voci.map((v) => `import { ${v.nome} } from './${v.f}'`),
  '',
  '/** Registro degli articoli «Consigli» (generato da tools/indice-consigli.mjs). */',
  `export const CONSIGLI: Consiglio[] = [\n${voci.map((v) => `  ${v.nome},`).join('\n')}\n]`,
  '',
]
fs.writeFileSync(`${dir}/index.ts`, righe.join('\n'))
for (const sorgente of process.argv.slice(2)) {
  const d = JSON.parse(fs.readFileSync(sorgente, 'utf8'))
  for (const l of ['en', 'es']) {
    const p = `src/content/i18n/${l}/slug/consigli.json`
    const cur = JSON.parse(fs.readFileSync(p, 'utf8'))
    Object.assign(cur.consigli, d[l] ?? {})
    fs.writeFileSync(p, JSON.stringify(cur))
  }
}
// gli slug tradotti arrivano al proxy da slug.json: va rigenerato
import('node:child_process').then(({ execFileSync }) => {
  for (const l of ['en', 'es']) execFileSync('python3', ['tools/unisci-slug.py', l], { stdio: 'inherit' })
})
console.log(voci.length, 'articoli')
