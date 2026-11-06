// Funzioni comuni ai test multilingua (node puro, nessuna dipendenza).
// BASE: variabile d'ambiente o --base=URL; default http://localhost:3100.

export const BASE = (process.argv.find((a) => a.startsWith('--base='))?.slice(7) || process.env.BASE || 'http://localhost:3100').replace(/\/$/, '')

export const LINGUE = ['en', 'it', 'es']
export const PREFISSO = { en: '', it: '/it', es: '/es' }

/** Lingua di un indirizzo pubblico dal prefisso. */
export function linguaDi(percorso) {
  const p = percorso.split('/')[1]
  return p === 'it' || p === 'es' ? p : 'en'
}

/** Prefisso doppio o /en pubblico: /it/en, /es/it, /en/…, /it/it… */
export function prefissoErrato(percorso) {
  const [, a, b] = percorso.split(/[/?#]/)
  if (a === 'en') return 'prefisso /en (l\'inglese non ha prefisso)'
  if (LINGUE.includes(a) && LINGUE.includes(b)) return `prefisso doppio /${a}/${b}`
  return null
}

export async function scarica(percorso, { redirect = 'manual', tentativi = 2 } = {}) {
  const url = percorso.startsWith('http') ? percorso : BASE + percorso
  for (let i = 0; ; i++) {
    try {
      const r = await fetch(url, { redirect, headers: { 'user-agent': 'i18n-test/1.0', accept: 'text/html' } })
      const testo = r.status === 200 ? await r.text() : ''
      return { status: r.status, location: r.headers.get('location'), testo, url: r.url }
    } catch (e) {
      if (i >= tentativi) return { status: 0, errore: String(e), testo: '' }
      await new Promise((ok) => setTimeout(ok, 500 * (i + 1)))
    }
  }
}

/** Percorsi della sitemap, con l'origine sostituita da BASE. */
export async function percorsiSitemap() {
  const r = await scarica('/sitemap.xml', { redirect: 'follow' })
  if (r.status !== 200) throw new Error(`sitemap.xml: HTTP ${r.status}`)
  return [...r.testo.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    const u = new URL(m[1].trim())
    return u.pathname + u.search
  })
}

/** Esegue `fn` su `voci` con al massimo `n` richieste in parallelo. */
export async function inParallelo(voci, n, fn) {
  const out = new Array(voci.length)
  let i = 0
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < voci.length) {
        const k = i++
        out[k] = await fn(voci[k], k)
      }
    })
  )
  return out
}

/** Link del selettore lingua nell'HTML: <a hrefLang="xx" … href="…"> dentro il <nav> della lingua. */
export function linkSelettore(html) {
  const link = {}
  for (const m of html.matchAll(/<a\b[^>]*\bhrefLang="([a-z]{2})"[^>]*>/gi)) {
    const tag = m[0]
    const href = tag.match(/\bhref="([^"]*)"/)?.[1]
    if (href && !link[m[1]]) link[m[1]] = { href: href.replace(/&amp;/g, '&'), corrente: /aria-current="(true|page)"/.test(tag) }
  }
  return link
}

export const langHtml = (html) => html.match(/<html[^>]*\blang="([^"]+)"/i)?.[1] ?? null

/** Testo visibile (via script, style, tag) e attributi leggibili (alt, title, aria-label, content dei meta). */
export function testoVisibile(html) {
  const attr = [...html.matchAll(/\b(?:alt|title|aria-label|placeholder)="([^"]*)"/g)].map((m) => m[1])
  const meta = [...html.matchAll(/<meta[^>]+(?:name|property)="(?:description|og:title|og:description|twitter:title|twitter:description)"[^>]*content="([^"]*)"/g)].map((m) => m[1])
  const titolo = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ''
  const corpo = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
  return [titolo, ...meta, ...attr, corpo]
    .join(' \n ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/\s+/g, ' ')
}

export function riepilogo(nome, errori, totale) {
  console.log(`\n${nome}: ${totale - errori.length}/${totale} ok, ${errori.length} errori`)
  return errori.length ? 1 : 0
}
