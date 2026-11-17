import { getTripMeta } from './geo'
import { getAllViaggi, getViaggioBySlug } from './viaggi'
import { datiFiltroViaggio } from './viaggi-filtri'
import { copertine } from './i18n/contenuti'
import type { Lingua } from './i18n/config'
import { compagniaDa, costoDelPaese, interessiDa, type Budget, type ViaggioQuiz } from './dove-vado'
import { MESI_PAESI } from '@/content/paesi-mesi'

/** Livello di spesa dai costi giornalieri verificati del Paese (stile «medio», a persona); se mancano, la stima del quiz. */
function costoVerificato(paeseSlug: string | undefined): Budget {
  const c = paeseSlug ? MESI_PAESI[paeseSlug]?.costi.medio : undefined
  if (!c) return costoDelPaese(paeseSlug)
  const totale = c.dormire + c.mangiare + c.trasporti + c.attivita
  return totale <= 125 ? 'basso' : totale >= 200 ? 'alto' : 'medio'
}

/**
 * Schede del quiz «Dove vado?», lato server: gli stessi dati dell'archivio /viaggi (mesi
 * consigliati, giorni, aree, stili) più interessi e compagnia letti da stili, categorie, tag,
 * «adatto a» e «compagni di viaggio» del testo italiano. Titoli e foto nella lingua della pagina.
 */
export function viaggiPerQuiz(lingua: Lingua): ViaggioQuiz[] {
  const foto = copertine(lingua)
  return getAllViaggi(lingua).map((v) => {
    const it = lingua === 'it' ? v : (getViaggioBySlug(v.slug, 'it') ?? v)
    const meta = getTripMeta(v.slug, 'it')
    const f = datiFiltroViaggio(v, lingua)
    return {
      slug: v.slug,
      titolo: v.titolo,
      ...(f.luogo ? { luogo: f.luogo } : {}),
      ...(foto[v.slug] ? { copertina: { immagine: foto[v.slug].immagine, imageAlt: foto[v.slug].imageAlt } } : {}),
      giorni: f.giorni,
      durataBreve: v.durataBreve,
      mesiConsigliati: f.mesiConsigliati,
      europa: f.aree.length > 0 && f.aree.every((a) => a === 'europa'),
      interessi: interessiDa([...(meta?.stile ?? []), ...it.categorie, ...it.tags]),
      compagnia: compagniaDa([it.compagni, meta?.viaggioInBreve.conChiSonoPartito ?? '', ...(meta?.adattoA ?? [])]),
      costo: costoVerificato(f.paesi[0]),
    }
  })
}
