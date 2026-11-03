import { CheckCircle2, AlertTriangle } from 'lucide-react'
import type { TripMeta } from '@/lib/types'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { titolo: 'Punti forti e criticità', forti: 'Punti forti', criticita: 'Principali criticità' },
  en: { titolo: 'Strengths and weak points', forti: 'Strengths', criticita: 'Main weak points' },
  es: { titolo: 'Puntos fuertes y pegas', forti: 'Puntos fuertes', criticita: 'Principales pegas' },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Punti forti e criticità del viaggio. I dati brevi (durata, ritmo, trasporti,
 * budget, periodo, adatto a) sono passati nel riepilogo sotto l'intestazione
 * (`RiepilogoViaggio`): qui non si ripetono.
 */
export async function TripSummary({ meta }: { meta: TripMeta }) {
  const t = T[await linguaCorrente()]
  if (meta.puntiForti.length === 0 && meta.criticita.length === 0) return null
  return (
    <div className="rounded-none border border-alpine/10 bg-cream-dark/50 p-6 sm:p-8">
      <h2 className="font-display text-xl text-alpine">{t.titolo}</h2>
      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-alpine">
            <CheckCircle2 size={14} /> {t.forti}
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone">
            {meta.puntiForti.map((p) => (
              <li key={p}>· {p}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rosso">
            <AlertTriangle size={14} /> {t.criticita}
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone">
            {meta.criticita.map((c) => (
              <li key={c}>· {c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
