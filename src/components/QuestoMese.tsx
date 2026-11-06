import { Container } from '@/components/ui/Container'
import { getAllViaggi } from '@/lib/viaggi'
import { datiFiltroViaggio, mesiConsigliatiDelViaggio, mesiDelViaggio } from '@/lib/viaggi-filtri'
import { riduciPerScheda } from '@/components/TripCard'
import { copertina } from '@/lib/i18n/contenuti'
import type { Lingua } from '@/lib/i18n/config'
import { QuestoMeseScelta, type VoceMese } from './QuestoMeseScelta'

/** Viaggi consigliati da mostrare per ogni mese in «Dove andare a <mese>». */
const PER_MESE = 3

/** Giorni dal 1970: fa ruotare i consigliati una volta al giorno, come il viaggio in evidenza della home. */
function giornoDiOggi(): number {
  return Math.floor(Date.now() / 86_400_000)
}

/**
 * Una sola sezione per il mese corrente, con due schede:
 * - «Dove andare a <mese>»: 3 viaggi il cui periodo consigliato comprende il mese
 *   (TripMeta.mesiConsigliati), scelti a rotazione ogni giorno (la home si rigenera una volta al
 *   giorno) e diversi da quelli di «Dove ero»;
 * - «Dove ero a <mese>»: i viaggi che ho fatto davvero in quel mese (dal «Periodo del viaggio»).
 * Due schede invece di due sezioni: la home non si allunga e le due domande restano distinte.
 * Il mese si sceglie nel browser, così la home statica resta giusta tutto l'anno; al browser
 * arrivano solo le card che possono servire (i viaggi reali più 3 consigliati per ogni mese).
 */
export function QuestoMese({ lingua }: { lingua: Lingua }) {
  const viaggi = getAllViaggi(lingua)
  const giorno = giornoDiOggi()
  const scelti = new Map<string, number[]>()
  for (let mese = 1; mese <= 12; mese++) {
    const candidati = viaggi.filter(
      (v) => mesiConsigliatiDelViaggio(v.slug).includes(mese) && !mesiDelViaggio(v.slug).includes(mese)
    )
    const inizio = candidati.length ? giorno % candidati.length : 0
    const giro = [...candidati.slice(inizio), ...candidati.slice(0, inizio)].slice(0, PER_MESE)
    for (const v of giro) scelti.set(v.slug, [...(scelti.get(v.slug) ?? []), mese])
  }

  const voci: VoceMese[] = viaggi.flatMap((v) => {
    const mesi = mesiDelViaggio(v.slug)
    const andare = scelti.get(v.slug) ?? []
    if (!mesi.length && !andare.length) return []
    const dati = datiFiltroViaggio(v, lingua)
    return [
      {
        mesi,
        andare,
        viaggio: {
          ...riduciPerScheda(v),
          copertina: copertina(v.slug, lingua),
          luogo: dati.luogo,
          mesiConsigliati: dati.mesiConsigliati,
          budget: dati.budget,
          stili: dati.stili,
          provenienza: dati.provenienza,
        },
      },
    ]
  })
  if (!voci.length) return null
  return (
    <Container>
      <QuestoMeseScelta voci={voci} />
    </Container>
  )
}
