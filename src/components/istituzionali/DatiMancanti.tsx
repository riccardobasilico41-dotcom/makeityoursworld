import { datiTitolareMancanti, emailPrivacy } from '@/lib/site-config'
import { ISTITUZIONALE } from '@/lib/i18n/sito'
import type { Lingua } from '@/lib/i18n/config'

/**
 * Riquadro con i dati obbligatori del titolare che mancano ancora in site-config.
 * Quando arrivano tutti, il riquadro sparisce da solo.
 */
export function DatiMancanti({ lingua }: { lingua: Lingua }) {
  if (datiTitolareMancanti.length === 0) return null
  const t = ISTITUZIONALE[lingua]
  return (
    <aside role="note" aria-labelledby="dati-mancanti-titolo" className="not-prose mb-10 max-w-3xl border-2 border-ink bg-cream p-5 sm:p-6">
      <p id="dati-mancanti-titolo" className="font-display text-lg text-ink">
        {t.mancantiTitolo}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-stone">{t.mancantiTesto}</p>
      <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-ink">
        {datiTitolareMancanti.map((d) => (
          <li key={d}>{t.mancanti[d]}</li>
        ))}
      </ul>
    </aside>
  )
}

/** Email privacy come link, o una dicitura neutra se non c'è ancora (mai un segnaposto). */
export function RecapitoPrivacy({ lingua }: { lingua: Lingua }) {
  if (emailPrivacy) return <a href={`mailto:${emailPrivacy}`}>{emailPrivacy}</a>
  return <em>{ISTITUZIONALE[lingua].recapitoNonDisponibile}</em>
}
