// Rigenera src/content/paesi-mesi/index.ts con un import per ogni file <paese>.ts presente.
import fs from 'node:fs'
const dir = 'src/content/paesi-mesi'
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts') && !['index.ts', 'tipi.ts'].includes(f)).sort()
const nome = (f) => 'm_' + f.replace(/\.ts$/, '').replace(/-/g, '_')
const righe = [
  "import type { DatiMesiPaese } from './tipi'",
  ...files.map((f) => `import { dati as ${nome(f)} } from './${f.replace(/\.ts$/, '')}'`),
  '',
  '/** Calendari e costi per Paese (generato da tools/indice-paesi-mesi.mjs). */',
  'export const MESI_PAESI: Record<string, DatiMesiPaese> = Object.fromEntries(',
  `  [${files.map(nome).join(', ')}].map((d) => [d.paeseSlug, d]),`,
  ')',
  '',
]
fs.writeFileSync(`${dir}/index.ts`, righe.join('\n'))
console.log(files.length, 'Paesi')
