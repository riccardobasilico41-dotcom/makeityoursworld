import { CheckCircle2, AlertTriangle } from 'lucide-react'
import type { TripMeta } from '@/lib/types'

/**
 * Punti forti e criticità del viaggio. I dati brevi (durata, ritmo, trasporti,
 * budget, periodo, adatto a) sono passati nel riepilogo sotto l'intestazione
 * (`RiepilogoViaggio`): qui non si ripetono.
 */
export function TripSummary({ meta }: { meta: TripMeta }) {
  if (meta.puntiForti.length === 0 && meta.criticita.length === 0) return null
  return (
    <div className="rounded-none border border-alpine/10 bg-cream-dark/50 p-6 sm:p-8">
      <h2 className="font-display text-xl text-alpine">Punti forti e criticità</h2>
      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-alpine">
            <CheckCircle2 size={14} /> Punti forti
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone">
            {meta.puntiForti.map((p) => (
              <li key={p}>· {p}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rosso">
            <AlertTriangle size={14} /> Principali criticità
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
