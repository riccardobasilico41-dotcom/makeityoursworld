'use client'

import { useId, useState } from 'react'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import type { DatiMesiPaese, VociSpesa } from '@/content/paesi-mesi/tipi'

type Stile = 'economico' | 'medio' | 'comfort'

const T = {
  it: {
    titolo: (p: string) => `Quanto costa un viaggio in ${p}`,
    lead: 'Un calcolo indicativo a partire da quanto si spende in media al giorno. Volo a parte, se non lo includi.',
    giorni: 'Giorni',
    persone: 'Persone',
    stile: 'Stile di viaggio',
    stili: { economico: 'Economico', medio: 'Medio', comfort: 'Comfort' },
    volo: 'Includi il volo dall\'Italia',
    totale: 'Totale indicativo',
    aPersona: 'a persona',
    alGiorno: 'al giorno a persona',
    voci: { dormire: 'Dormire', mangiare: 'Mangiare', trasporti: 'Trasporti', attivita: 'Ingressi e attività' },
    voloFascia: 'volo A/R',
  },
  en: {
    titolo: (p: string) => `How much does a trip to ${p} cost`,
    lead: 'An indicative estimate based on the average spend per day. Flights excluded unless you add them.',
    giorni: 'Days',
    persone: 'People',
    stile: 'Travel style',
    stili: { economico: 'Budget', medio: 'Mid-range', comfort: 'Comfort' },
    volo: 'Include the return flight from Italy',
    totale: 'Indicative total',
    aPersona: 'per person',
    alGiorno: 'per day per person',
    voci: { dormire: 'Accommodation', mangiare: 'Food', trasporti: 'Transport', attivita: 'Tickets and activities' },
    voloFascia: 'return flight',
  },
  es: {
    titolo: (p: string) => `Cuánto cuesta un viaje a ${p}`,
    lead: 'Un cálculo orientativo a partir de lo que se gasta de media al día. Vuelo aparte, si no lo incluyes.',
    giorni: 'Días',
    persone: 'Personas',
    stile: 'Estilo de viaje',
    stili: { economico: 'Económico', medio: 'Medio', comfort: 'Confort' },
    volo: 'Incluir el vuelo desde Italia',
    totale: 'Total orientativo',
    aPersona: 'por persona',
    alGiorno: 'al día por persona',
    voci: { dormire: 'Alojamiento', mangiare: 'Comida', trasporti: 'Transporte', attivita: 'Entradas y actividades' },
    voloFascia: 'vuelo i/v',
  },
} as const

const euro = (n: number, l: string) => new Intl.NumberFormat(l, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
const somma = (v: VociSpesa) => v.dormire + v.mangiare + v.trasporti + v.attivita

export function CalcolatoreBudget({ costi, nomePaese }: { costi: DatiMesiPaese['costi']; nomePaese: string }) {
  const lingua = useLingua()
  const t = T[lingua]
  const loc = { it: 'it-IT', en: 'en-GB', es: 'es-ES' }[lingua]
  const id = useId()
  const [giorni, setGiorni] = useState(10)
  const [persone, setPersone] = useState(2)
  const [stile, setStile] = useState<Stile>('medio')
  const [volo, setVolo] = useState(false)
  const v = costi[stile]
  const giorno = somma(v)
  const voloMedio = costi.volo ? Math.round((costi.volo[0] + costi.volo[1]) / 2) : 0
  const aPersona = giorno * giorni + (volo ? voloMedio : 0)
  const totale = aPersona * persone

  return (
    <section id="quanto-costa" className="scroll-mt-24 border-t border-alpine/10 sezione">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] text-ink">{t.titolo(nomePaese)}</h2>
        <p className="mt-3 max-w-2xl text-stone">{t.lead}</p>
        <div className="mt-8 grid gap-8 border-2 border-ink bg-white p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <label className="block" htmlFor={`${id}-g`}>
              <span className="flex justify-between text-sm font-semibold text-ink">
                {t.giorni} <span className="tabular-nums">{giorni}</span>
              </span>
              <input id={`${id}-g`} type="range" min={3} max={30} step={1} value={giorni} onChange={(e) => setGiorni(Number(e.target.value))} className="mt-2 w-full accent-[var(--color-rosso)]" />
            </label>
            <label className="block" htmlFor={`${id}-p`}>
              <span className="flex justify-between text-sm font-semibold text-ink">
                {t.persone} <span className="tabular-nums">{persone}</span>
              </span>
              <input id={`${id}-p`} type="range" min={1} max={6} step={1} value={persone} onChange={(e) => setPersone(Number(e.target.value))} className="mt-2 w-full accent-[var(--color-rosso)]" />
            </label>
            <fieldset>
              <legend className="text-sm font-semibold text-ink">{t.stile}</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {(['economico', 'medio', 'comfort'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={stile === s}
                    onClick={() => setStile(s)}
                    className={`min-h-11 border-2 border-ink px-4 text-sm font-semibold transition-colors ${stile === s ? 'bg-ink text-cream' : 'bg-white text-ink hover:bg-ink hover:text-cream'}`}
                  >
                    {t.stili[s]}
                  </button>
                ))}
              </div>
            </fieldset>
            {costi.volo && (
              <label className="flex items-center gap-3 text-sm text-ink">
                <input type="checkbox" checked={volo} onChange={(e) => setVolo(e.target.checked)} className="size-5 accent-[var(--color-rosso)]" />
                {t.volo} <span className="text-stone">({euro(costi.volo[0], loc)}–{euro(costi.volo[1], loc)} {t.voloFascia})</span>
              </label>
            )}
          </div>
          <div aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">{t.totale}</p>
            <p className="mt-2 font-display text-5xl leading-none text-ink tabular-nums">{euro(totale, loc)}</p>
            <p className="mt-2 text-sm text-stone">
              {euro(aPersona, loc)} {t.aPersona} · {euro(giorno, loc)} {t.alGiorno}
            </p>
            <dl className="mt-6 divide-y divide-ink/10 border-t border-ink/10 text-sm">
              {(Object.keys(t.voci) as (keyof VociSpesa)[]).map((k) => (
                <div key={k} className="flex justify-between py-2">
                  <dt className="text-stone">{t.voci[k]}</dt>
                  <dd className="font-semibold tabular-nums text-ink">{euro(v[k] * giorni * persone, loc)}</dd>
                </div>
              ))}
            </dl>
            {costi.nota && <p className="mt-4 text-xs leading-relaxed text-stone">{costi.nota[lingua]}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
