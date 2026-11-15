import type { ReactNode } from 'react'
import { AlertTriangle, ArrowUpRight, type LucideIcon } from 'lucide-react'
import { richNodes } from '@/components/ui/Rich'
import { CardRicordo } from '@/components/scheda/CardRicordo'
import { Container } from '@/components/ui/Container'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    infoPratiche: 'Informazioni pratiche',
    avviso: 'Prezzi, orari e disponibilità cambiano: conviene ricontrollarli prima di partire.',
    miaEsperienza: 'Il mio ricordo',
    errori: 'Errori da evitare',
  },
  en: {
    infoPratiche: 'Practical information',
    avviso: 'Prices, opening hours and availability change: it pays to double-check them before you go.',
    miaEsperienza: 'My memory',
    errori: 'Mistakes to avoid',
  },
  es: {
    infoPratiche: 'Información práctica',
    avviso: 'Los precios, los horarios y la disponibilidad cambian: conviene volver a comprobarlos antes de salir.',
    miaEsperienza: 'Mi recuerdo',
    errori: 'Errores que evitar',
  },
} satisfies Record<Lingua, Record<string, string>>

/*
 * Blocchi delle schede destinazione ed esperienza. Sostituiscono la colonna destra fissa
 * (che restava sempre a schermo) e le liste a puntino: informazioni pratiche in una griglia
 * subito sotto la foto, elenchi come schede numerate, il ricordo di Rick come riquadro
 * firmato, gli errori in un riquadro rosso.
 */

export type VoceInfo = { label: string; value?: string; icona: LucideIcon }

/** Oltre questa lunghezza una casella va a riga intera, in fondo, invece di allungare la riga. */
const LUNGA = 160
const LG_COLS = { 1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3' } as const
const LG_SPAN = { 1: 'lg:col-span-1', 2: 'lg:col-span-2', 3: 'lg:col-span-3' } as const

/**
 * Le informazioni pratiche: l'unica griglia di dati del sito (schede destinazione, esperienza,
 * meraviglia, Paese). Bordo nero, icona rossa per voce, niente buchi: l'ultima casella corta
 * allarga fino in fondo alla riga e le caselle lunghe (oltre LUNGA caratteri) vanno a riga intera
 * dopo le altre. `fascia` (predefinito) la mette in una banda a tutta pagina sotto l'intestazione;
 * senza, è un blocco dentro la colonna del testo.
 */
export async function InfoPratiche({
  voci,
  titolo,
  id = 'info-pratiche',
  avviso = true,
  fascia = true,
}: {
  voci: VoceInfo[]
  titolo?: string
  id?: string
  avviso?: boolean
  fascia?: boolean
}) {
  const t = T[await linguaCorrente()]
  titolo ??= t.infoPratiche
  const piene = voci.filter((v) => v.value && v.value.trim())
  if (piene.length === 0) return null
  const corte = piene.filter((v) => v.value!.length <= LUNGA)
  const lunghe = piene.filter((v) => v.value!.length > LUNGA)
  const k = corte.length
  const cols = (k <= 2 ? Math.max(k, 1) : k === 4 ? 2 : 3) as 1 | 2 | 3
  const resto = k % cols
  const ultimaSpan = (resto === 0 ? 1 : cols - resto + 1) as 1 | 2 | 3
  const celle = [
    ...corte.map((v, i) => ({
      v,
      span: i === k - 1 ? `${k % 2 === 1 ? 'col-span-2' : ''} ${LG_SPAN[ultimaSpan]}` : '',
    })),
    ...lunghe.map((v) => ({ v, span: 'col-span-2 lg:col-span-full' })),
  ]
  const blocco = (
    <>
      <h2 id={id} className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">
        {titolo}
      </h2>
      <dl className={`mt-5 grid grid-cols-2 gap-px overflow-hidden border-2 border-ink bg-ink ${LG_COLS[cols]}`}>
        {celle.map(({ v: { label, value, icona: Icona }, span }) => (
          // dt e dd figli diretti del div (HTML valido per <dl>); l'icona sta nel dt, in posizione assoluta
          <div key={label} className={`relative min-w-0 bg-cream p-3.5 min-[400px]:pl-11 sm:p-5 sm:pl-13 ${span}`}>
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-stone/85 sm:text-xs">
              <Icona size={20} aria-hidden className="absolute left-3.5 top-4 hidden text-rosso min-[400px]:block sm:left-5 sm:top-[1.375rem]" />
              {label}
            </dt>
            <dd className="mt-1 max-w-[80ch] text-sm leading-relaxed text-ink [overflow-wrap:anywhere]">{richNodes(value!)}</dd>
          </div>
        ))}
      </dl>
      {avviso && (
        <p className="mt-3 flex items-center gap-1.5 text-xs text-stone/85">
          <ArrowUpRight size={12} aria-hidden />
          {t.avviso}
        </p>
      )}
    </>
  )
  if (!fascia) return <section aria-labelledby={id}>{blocco}</section>
  return (
    <section aria-labelledby={id} className="border-b border-alpine/10 bg-cream-dark/50 py-10 sm:py-12">
      <Container>{blocco}</Container>
    </section>
  )
}

/** Titolo di sezione, uguale in tutto il sito (token `titolo-sezione`). */
export function TitoloSezione({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="titolo-sezione text-alpine">
      {children}
    </h2>
  )
}

/** Elenco come schede numerate (cosa vedere, cosa fare, alternative). */
export function ElencoNumerato({ voci }: { voci: string[] }) {
  return (
    <ol className="mt-5 grid gap-3 sm:grid-cols-2">
      {voci.map((v, i) => (
        <li key={v} className="scheda-lista flex gap-4 p-4">
          <span aria-hidden className="font-display text-2xl leading-none text-rosso tabular-nums">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-base leading-relaxed text-ink">{richNodes(v)}</span>
        </li>
      ))}
    </ol>
  )
}

/** Testo lungo (dove mangiare, dormire, uscire) in una scheda con icona. I \n\n diventano paragrafi. */
export function SchedaTesto({ icona: Icona, titolo, testo }: { icona: LucideIcon; titolo: string; testo: string }) {
  return (
    <div className="scheda-lista p-5 sm:p-6">
      <h3 className="titolo-scheda flex items-center gap-2.5 text-alpine">
        <Icona size={19} aria-hidden className="text-rosso" />
        {titolo}
      </h3>
      <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-stone">
        {testo.split(/\n\n+/).map((p, i) => (
          <p key={i}>{richNodes(p)}</p>
        ))}
      </div>
    </div>
  )
}

/** Il ricordo di Rick: riquadro scuro, virgolette e firma con la faccia. */
export async function Ricordo({ testo }: { testo: string }) {
  const t = T[await linguaCorrente()]
  return <CardRicordo etichetta={t.miaEsperienza}>{richNodes(testo)}</CardRicordo>
}

/**
 * Il riquadro rosso degli avvisi: errori da evitare, truffe, attenzioni. Uno solo per tutto il
 * sito: bordo rosso 2 px, icona, quadratini rossi come punti elenco, larghezza massima fissa.
 */
export function RiquadroAvviso({ titolo, voci, id }: { titolo: string; voci: string[]; id?: string }) {
  if (voci.length === 0) return null
  return (
    <div id={id} className="max-w-3xl scroll-mt-24 border-2 border-rosso bg-rosso/[0.04] p-5 sm:p-7">
      <h2 className="titolo-scheda flex items-center gap-3 text-rosso">
        <AlertTriangle size={22} aria-hidden className="shrink-0" />
        {titolo}
      </h2>
      <ul className="mt-4 space-y-3">
        {voci.map((v) => (
          <li key={v} className="flex gap-3 text-base leading-relaxed text-ink">
            <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-rosso" />
            <span>{richNodes(v)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Errori da evitare delle schede destinazione. */
export async function ErroriDaEvitare({ voci }: { voci: string[] }) {
  const t = T[await linguaCorrente()]
  return <RiquadroAvviso titolo={t.errori} voci={voci} />
}
