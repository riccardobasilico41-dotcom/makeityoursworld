#!/usr/bin/env node
// (b, nel browser) Clic sul selettore lingua dopo l'idratazione: la nuova pagina è quella equivalente,
// tiene query (?paese=…) e ancora (#…), non ha prefissi doppi, risponde 200; sulle 404 si va alla home
// della lingua; il selettore si usa da tastiera (Tab + Invio) ed è annunciato (nav con label, aria-current).
// Uso: node tools/test/i18n-selettore-click.mjs [--base=URL]
// Playwright: PLAYWRIGHT_CORE (cartella di playwright-core) e CHROME (eseguibile) configurabili.
import { createRequire } from 'node:module'
import { BASE, linguaDi, prefissoErrato, riepilogo } from './i18n-comune.mjs'

const require = createRequire(import.meta.url)
const PW = process.env.PLAYWRIGHT_CORE || '/Users/riccardobasilico/Desktop/CLAUDE/remotion-video/node_modules/playwright-core'
const CHROME =
  process.env.CHROME ||
  '/Users/riccardobasilico/Desktop/CLAUDE/remotion-video/node_modules/.remotion/chrome-headless-shell/mac-x64/chrome-headless-shell-mac-x64/chrome-headless-shell'
const { chromium } = require(PW)

// [pagina di partenza, lingua di arrivo, percorso atteso (senza query/hash) o null se basta «non 404»]
const CASI = [
  ['/', 'it', '/it'],
  ['/', 'es', '/es'],
  ['/it', 'en', '/'],
  ['/es', 'it', '/it'],
  ['/trips?paese=giappone', 'it', '/it/viaggi'],
  ['/it/viaggi?paese=giappone&durata=lungo', 'es', '/es/viajes'],
  ['/es/viajes?paese=cina', 'en', '/trips'],
  ['/trips/japan-itinerary#itinerario', 'it', '/it/viaggi/giappone-itinerario'],
  ['/it/viaggi/giappone-itinerario', 'es', '/es/viajes/japon-itinerario'],
  ['/destinations/japan', 'es', '/es/destinos/japon'],
  ['/it/destinazioni/italia/dolomiti', 'en', '/destinations/italy/dolomites'],
  ['/es/experiencias/italia/alta-via-1-dolomitas', 'it', '/it/esperienze/italia/alta-via-1'],
  ['/wonders', 'it', '/it/meraviglie'],
  ['/regions/asia', 'es', '/es/regiones/asia'], // /regions non ha una pagina indice (404 voluto): si prova un'area
  ['/about', 'it', '/it/chi-sono'],
  ['/it/privacy', 'es', '/es/privacidad'],
  ['/es/cookies', 'en', '/cookies'],
  ['/photo-credits', 'es', '/es/creditos-fotograficos'],
  ['/trips/questo-viaggio-non-esiste', 'it', '/it'],
  ['/it/pagina-inesistente/a/b', 'en', '/'],
  ['/es/viajes/no-existe', 'it', '/it'],
]

const browser = await chromium.launch({ executablePath: CHROME })
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
await ctx.addInitScript(() => {
  try {
    sessionStorage.setItem('intro-vista', '1')
  } catch {}
})
const page = await ctx.newPage()
const errori = []
console.log(`BASE ${BASE} · ${CASI.length} clic sul selettore + tastiera`)

// la home ha video e mappa: «networkidle» può non arrivare mai, quindi carico la pagina e aspetto
// l'idratazione (il bottone della ricerca diventa interattivo) con un tetto di tempo
async function apri(p) {
  await page.goto(BASE + p, { waitUntil: 'load', timeout: 60000 })
  await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {})
  await page.waitForFunction(() => !!document.querySelector('nav a[hreflang]') && document.readyState === 'complete', null, { timeout: 15000 })
  await page.waitForTimeout(500)
}

async function selettore(l) {
  // il selettore visibile (header largo); su mobile è nel menu
  const loc = page.locator(`nav a[hreflang="${l}"]:visible`).first()
  await loc.waitFor({ timeout: 20000 })
  return loc
}

for (const [da, verso, atteso] of CASI) {
  const problemi = []
  try {
    await apri(da)
    const coda = da.includes('?') || da.includes('#') ? da.slice(da.search(/[?#]/)) : ''
    const link = await selettore(verso)
    // l'attributo href nel DOM (quello di «apri in nuova scheda», clic centrale, copia link): dopo
    // un'idratazione con differenze React non lo corregge, quindi va controllato a parte
    const hrefDom = (await link.getAttribute('href')) || ''
    const prefDom = prefissoErrato(hrefDom)
    if (prefDom) problemi.push(`href nel DOM ${hrefDom}: ${prefDom}`)
    else if (atteso && hrefDom.split(/[?#]/)[0] !== atteso) problemi.push(`href nel DOM ${hrefDom}, atteso ${atteso}`)
    const navigazione = page.waitForURL((u) => linguaDi(u.pathname) === verso, { timeout: 15000 })
    await link.click()
    await navigazione
    await page.waitForLoadState('load').catch(() => {})
    const u = new URL(page.url())
    const percorso = u.pathname
    const pref = prefissoErrato(percorso)
    if (pref) problemi.push(pref)
    if (atteso && percorso !== atteso) problemi.push(`arrivato su ${percorso}, atteso ${atteso}`)
    if (coda && !atteso.match(/^\/(it|es)?$/) && u.search + u.hash !== coda) problemi.push(`query/ancora perse: «${u.search + u.hash}» invece di «${coda}»`)
    const lang = await page.getAttribute('html', 'lang')
    if (lang !== verso) problemi.push(`<html lang="${lang}">`)
    const titolo = await page.title()
    if (/not found|non trovata|no encontrada/i.test(titolo)) problemi.push(`pagina 404 («${titolo}»)`)
    const corrente = await page.locator(`nav a[hreflang="${verso}"][aria-current]`).count()
    if (!corrente) problemi.push('manca aria-current sulla lingua di arrivo')
  } catch (e) {
    problemi.push(String(e.message || e).split('\n')[0])
  }
  console.log(`  ${problemi.length ? '✗' : '✓'} ${da} → ${verso}${problemi.length ? ': ' + problemi.join('; ') : ''}`)
  if (problemi.length) errori.push({ da, verso, problemi })
}

// tastiera: dalla home EN, Tab fino al link «IT» del selettore e Invio
{
  const problemi = []
  try {
    await apri('/trips/japan-itinerary')
    let trovato = false
    for (let i = 0; i < 60 && !trovato; i++) {
      await page.keyboard.press('Tab')
      trovato = await page.evaluate(() => document.activeElement?.getAttribute('hreflang') === 'it')
    }
    if (!trovato) problemi.push('link IT non raggiungibile con Tab')
    else {
      const nome = await page.evaluate(() => {
        const a = document.activeElement
        return (a.getAttribute('aria-label') || a.textContent || '').trim()
      })
      const nav = await page.evaluate(() => document.activeElement.closest('nav')?.getAttribute('aria-label'))
      if (!nav) problemi.push('nav del selettore senza aria-label')
      if (!/italiano/i.test(nome)) problemi.push(`nome accessibile «${nome}» (atteso che dica «Italiano»)`)
      await Promise.all([page.waitForURL(/\/it\//, { timeout: 15000 }), page.keyboard.press('Enter')])
      if (new URL(page.url()).pathname !== '/it/viaggi/giappone-itinerario') problemi.push(`Invio porta a ${page.url()}`)
    }
  } catch (e) {
    problemi.push(String(e.message || e).split('\n')[0])
  }
  console.log(`  ${problemi.length ? '✗' : '✓'} tastiera${problemi.length ? ': ' + problemi.join('; ') : ''}`)
  if (problemi.length) errori.push({ da: 'tastiera', problemi })
}

await browser.close()
process.exit(riepilogo('Selettore lingua (browser)', errori, CASI.length + 1))
