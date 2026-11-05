// Controlla i link «Scopri la destinazione» e le tappe della rotta di ogni viaggio, in it/en/es:
// ogni link generato (come nei componenti, poi localizzato e riletto come fa il proxy) deve
// portare a una destinazione esistente. Uso: node tools/controlla-link-destinazioni.mjs
import { createJiti } from 'jiti'
import path from 'node:path'

const radice = path.resolve(import.meta.dirname, '..')
const jiti = createJiti(import.meta.url, { alias: { '@': path.join(radice, 'src') } })
const geo = await jiti.import(path.join(radice, 'src/lib/geo.ts'))
const { getAllViaggi } = await jiti.import(path.join(radice, 'src/lib/viaggi.ts'))
const { conPaesiDelleDestinazioni } = await jiti.import(path.join(radice, 'src/lib/viaggi-filtri.ts'))
const { linkDestinazione } = await jiti.import(path.join(radice, 'src/lib/link-destinazione.ts'))
const { localizza, canonico } = await jiti.import(path.join(radice, 'src/lib/i18n/percorsi.ts'))

let totale = 0, rotti = 0, senzaLink = 0, primaRotti = 0
const esiste = (pubblico, lingua) => {
  const { percorso } = canonico(pubblico)
  const [, a, p, d] = percorso.split('/')
  return a === 'destinazioni' && Boolean(geo.getDestinazione(p, d, lingua))
}
for (const lingua of ['it', 'en', 'es']) {
  const controlla = (dove, x, paeseFallback) => {
    if (!x.destinazioneSlug) return
    if (!geo.getDestinazione(paeseFallback, x.destinazioneSlug, lingua)) primaRotti++
    const href = linkDestinazione(x.destinazioneSlug, x.paeseSlug, paeseFallback)
    if (!href) { senzaLink++; console.log(`  senza link [${lingua}] ${dove}: ${x.destinazioneSlug}`); return }
    totale++
    const pubblico = localizza(href, lingua)
    if (!esiste(pubblico, lingua)) { rotti++; console.log(`  ROTTO [${lingua}] ${dove}: ${pubblico}`) }
  }
  for (const v of getAllViaggi(lingua)) {
    const meta = geo.getTripMeta(v.slug, lingua)
    if (!meta) continue
    const m = conPaesiDelleDestinazioni(meta)
    m.tappeMappa.forEach((t) => controlla(`${v.slug} tappa «${t.nome}»`, t, meta.paeseSlug))
    m.giorni.forEach((g) => controlla(`${v.slug} «${g.titoloGiorno}»`, g, meta.paeseSlug))
  }
  // pagina Paese: le tappe del viaggio principale
  for (const p of geo.getAllPaesi(lingua)) {
    const meta = p.tripPrincipaleSlug && geo.getTripMeta(p.tripPrincipaleSlug, lingua)
    if (!meta) continue
    conPaesiDelleDestinazioni(meta).tappeMappa.forEach((t) => controlla(`/destinazioni/${p.slug} tappa «${t.nome}»`, t, p.slug))
  }
}
console.log(`\nLink controllati: ${totale} · rotti: ${rotti} · tolti (destinazione inesistente): ${senzaLink} · con la regola vecchia sarebbero stati rotti: ${primaRotti}`)
process.exit(rotti ? 1 : 0)
