'use client'

import { useAncoraAttiva } from './useAncoraAttiva'
import type { VoceGiorno, VoceSezione } from './GiorniBarraMobile'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { etichetta } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { inQuestaPagina: 'In questa pagina' },
  en: { inQuestaPagina: 'On this page' },
  es: { inQuestaPagina: 'En esta página' },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Indice laterale della pagina viaggio, da `lg`: sezioni in colonna e, sotto l'itinerario,
 * i giorni come caselle numerate (44 px, toccabili anche su tablet). La sezione e il giorno
 * che si stanno leggendo sono segnati in rosso. Sticky, con scroll proprio se più alto dello
 * schermo. Sul telefono lo stesso indice è `GiorniBarraMobile`.
 */
export function IndiceViaggio({
  sezioni,
  giorni,
  unitaLabel = 'Giorno',
  hrefItinerario = '#itinerario-giorno-per-giorno',
}: {
  sezioni: VoceSezione[]
  giorni: VoceGiorno[]
  unitaLabel?: string
  hrefItinerario?: string
}) {
  const lingua = useLingua()
  const unita = etichetta(unitaLabel, lingua)
  const sezione = useAncoraAttiva(sezioni.map((s) => s.href.slice(1)))
  const giorno = useAncoraAttiva(
    giorni.map((g) => g.id),
    hrefItinerario.slice(1),
  )
  const corrente = giorno >= 0 ? giorni[giorno] : undefined

  return (
    <nav
      aria-label={T[lingua].inQuestaPagina}
      className="sticky top-6 max-h-[calc(100dvh-3rem)] overflow-y-auto overscroll-contain border-l-2 border-ink pb-2 [scrollbar-width:thin]"
    >
      <p className="px-4 text-xs font-semibold uppercase tracking-[0.18em] text-stone/85">{T[lingua].inQuestaPagina}</p>
      <ul className="mt-3">
        {sezioni.map((s, i) => {
          const qui = i === sezione
          return (
            <li key={s.href}>
              <a
                href={s.href}
                aria-current={qui ? 'location' : undefined}
                className={`-ml-0.5 flex min-h-11 items-center border-l-2 px-4 py-1.5 text-sm leading-snug transition-colors duration-150 motion-reduce:transition-none ${
                  qui ? 'border-rosso font-semibold text-rosso' : 'border-transparent text-ink hover:border-ink hover:text-rosso'
                }`}
              >
                {s.label}
              </a>
              {s.href === hrefItinerario && giorni.length > 1 && (
                <div className="px-4 pb-3 pt-1">
                  <ol className="grid grid-cols-4 gap-1">
                    {giorni.map((g, j) => {
                      const oggi = j === giorno
                      return (
                        <li key={g.id}>
                          <a
                            href={`#${g.id}`}
                            title={g.luogo || undefined}
                            aria-label={`${unita} ${g.numero}${g.luogo ? `: ${g.luogo}` : ''}`}
                            aria-current={oggi ? 'step' : undefined}
                            className={`flex h-11 items-center justify-center border-2 text-xs font-semibold tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-1 ${
                              oggi ? 'border-rosso bg-rosso text-cream' : 'border-ink/20 bg-white text-ink hover:border-ink'
                            }`}
                          >
                            {g.numero}
                          </a>
                        </li>
                      )
                    })}
                  </ol>
                  {corrente?.luogo && (
                    <p className="mt-2 text-xs leading-snug text-stone">
                      <span className="font-semibold text-ink">
                        {unita} {corrente.numero}
                      </span>{' '}
                      · {corrente.luogo}
                    </p>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
