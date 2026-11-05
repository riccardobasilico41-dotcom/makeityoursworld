import { Container } from '@/components/ui/Container'
import { getAllViaggi } from '@/lib/viaggi'
import { mesiDelViaggio } from '@/lib/viaggi-filtri'
import { riduciPerScheda } from '@/components/TripCard'
import { copertina } from '@/lib/i18n/contenuti'
import type { Lingua } from '@/lib/i18n/config'
import { QuestoMeseScelta, type VoceMese } from './QuestoMeseScelta'

/**
 * «Dove ero a <mese>»: i viaggi che ho fatto davvero nel mese corrente (dai mesi del «Periodo
 * del viaggio», vedi docs/ux/mesi-viaggi.md). Il mese si sceglie nel browser, così la home
 * statica resta giusta tutto l'anno; se nel mese ci sono meno di 2 viaggi la sezione non c'è.
 */
export function QuestoMese({ lingua }: { lingua: Lingua }) {
  const voci: VoceMese[] = getAllViaggi(lingua).flatMap((v) => {
    const mesi = mesiDelViaggio(v.slug)
    if (!mesi.length) return []
    return [{ mesi, viaggio: { ...riduciPerScheda(v), copertina: copertina(v.slug, lingua) } }]
  })
  if (!voci.length) return null
  return (
    <Container>
      <QuestoMeseScelta voci={voci} />
    </Container>
  )
}
