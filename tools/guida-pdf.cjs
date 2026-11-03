/*
 * Genera il PDF A5 di una guida dalla pagina di stampa locale (/guide/<slug>/stampa).
 *
 *   node tools/guida-pdf.cjs <slug> "<Nome per il file>" [porta]
 *
 * Serve il dev server acceso (la pagina di stampa esiste solo in locale). Due passate,
 * copertina al vivo e interno con i margini (vedi stile.ts), poi pdfunite. Il PDF finisce in
 * «/Volumes/SanDisk 1TB/Make It Yours - Guide PDF/» (o sulla Scrivania se il disco non c'è). Usa playwright-core e il Chrome già scaricato
 * da Remotion (niente installazioni).
 */
const path = require('node:path')
const os = require('node:os')
const fs = require('node:fs')
const { execFileSync } = require('node:child_process')

const REMOTION = path.join(os.homedir(), 'Desktop/CLAUDE/remotion-video/node_modules')
const { chromium } = require(path.join(REMOTION, 'playwright-core'))
const CHROME = path.join(REMOTION, '.remotion/chrome-headless-shell/mac-x64/chrome-headless-shell-mac-x64/chrome-headless-shell')

const [slug, nome, porta = '3000'] = process.argv.slice(2)
if (!slug || !nome) {
  console.error('Uso: node tools/guida-pdf.cjs <slug> "<Nome>" [porta]')
  process.exit(1)
}

;(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), `guida-${slug}-`))
  const browser = await chromium.launch({ executablePath: CHROME })
  const page = await browser.newPage()
  const parti = []
  for (const parte of ['copertina', 'interno']) {
    await page.goto(`http://localhost:${porta}/guide/${slug}/stampa?parte=${parte}`, { waitUntil: 'load', timeout: 600000 })
    await page.evaluate(async () => {
      await document.fonts.ready
      await Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r }))))
    })
    const file = path.join(tmp, `${parte}.pdf`)
    await page.pdf({ path: file, preferCSSPageSize: true, printBackground: true, timeout: 600000 })
    parti.push(file)
  }
  await browser.close()
  // tutte le guide in una cartella sola sul disco esterno (se non è collegato, sulla Scrivania)
  const cartella = fs.existsSync('/Volumes/SanDisk 1TB') ? '/Volumes/SanDisk 1TB/Make It Yours - Guide PDF' : path.join(os.homedir(), 'Desktop', 'Make It Yours - Guide PDF')
  fs.mkdirSync(cartella, { recursive: true })
  const out = path.join(cartella, `Make It Yours - ${nome} (guida).pdf`)
  execFileSync('pdfunite', [...parti, out])
  // copia per il sito (pulsante «Scarica la guida»): public/guide-pdf/<slug>.pdf
  const pubblica = path.join(__dirname, '..', 'public', 'guide-pdf')
  fs.mkdirSync(pubblica, { recursive: true })
  fs.copyFileSync(out, path.join(pubblica, `${slug}.pdf`))
  // elenco letto dal pulsante «Scarica la guida» (src/content/guide-pdf.json: slug → byte)
  const elenco = path.join(__dirname, '..', 'src', 'content', 'guide-pdf.json')
  const guide = fs.existsSync(elenco) ? JSON.parse(fs.readFileSync(elenco, 'utf8')) : {}
  guide[slug] = fs.statSync(path.join(pubblica, `${slug}.pdf`)).size
  fs.writeFileSync(elenco, JSON.stringify(Object.fromEntries(Object.entries(guide).sort()), null, 2) + '\n')
  fs.rmSync(tmp, { recursive: true, force: true })
  console.log(out)
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
