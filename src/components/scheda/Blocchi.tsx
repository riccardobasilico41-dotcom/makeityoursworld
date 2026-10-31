import Image from 'next/image'
import type { ReactNode } from 'react'
import { AlertTriangle, ArrowUpRight, type LucideIcon } from 'lucide-react'
import { richNodes } from '@/components/ui/Rich'
import { Container } from '@/components/ui/Container'

/*
 * Blocchi delle schede destinazione ed esperienza. Sostituiscono la colonna destra fissa
 * (che restava sempre a schermo) e le liste a puntino: informazioni pratiche in una griglia
 * subito sotto la foto, elenchi come schede numerate, il ricordo di Rick come riquadro
 * firmato, gli errori in un riquadro rosso.
 */

export type VoceInfo = { label: string; value?: string; icona: LucideIcon }

/** Le informazioni pratiche in griglia, sotto l'intestazione. Le voci vuote non compaiono. */
export function InfoPratiche({ voci, titolo = 'Informazioni pratiche' }: { voci: VoceInfo[]; titolo?: string }) {
  const piene = voci.filter((v) => v.value && v.value.trim())
  if (piene.length === 0) return null
  return (
    <section aria-labelledby="info-pratiche" className="border-b border-alpine/10 bg-cream-dark/50 py-10 sm:py-12">
      <Container>
        <h2 id="info-pratiche" className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">
          {titolo}
        </h2>
        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden border-2 border-ink bg-ink lg:grid-cols-3">
          {piene.map(({ label, value, icona: Icona }, i) => {
            // l'ultima casella allarga fino in fondo alla riga, così la griglia non resta con buchi neri
            const ultima = i === piene.length - 1
            const lg = { 0: 'lg:col-span-1', 1: 'lg:col-span-3', 2: 'lg:col-span-2' }[piene.length % 3]
            const larga = ultima ? `${piene.length % 2 === 1 ? 'col-span-2' : ''} ${lg}` : ''
            return (
            <div key={label} className={`flex gap-2.5 bg-cream p-3.5 sm:gap-3 sm:p-5 ${larga}`}>
              <Icona size={20} aria-hidden className="mt-0.5 hidden shrink-0 text-rosso min-[400px]:block" />
              <div className="min-w-0">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-stone/70 sm:text-xs">{label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink">{richNodes(value!)}</dd>
              </div>
            </div>
            )
          })}
        </dl>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-stone/70">
          <ArrowUpRight size={12} aria-hidden />
          Prezzi, orari e disponibilità cambiano: conviene ricontrollarli prima di partire.
        </p>
      </Container>
    </section>
  )
}

/** Titolo di sezione con icona e trattino rosso, uguale in tutta la scheda. */
export function TitoloSezione({ icona: Icona, children }: { icona?: LucideIcon; children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-display text-2xl text-alpine sm:text-3xl">
      {Icona && <Icona size={22} aria-hidden className="shrink-0 text-rosso" />}
      {children}
    </h2>
  )
}

/** Elenco come schede numerate (cosa vedere, cosa fare, alternative). */
export function ElencoNumerato({ voci }: { voci: string[] }) {
  return (
    <ol className="mt-5 grid gap-3 sm:grid-cols-2">
      {voci.map((v, i) => (
        <li key={v} className="flex gap-4 border border-alpine/15 bg-white p-4 transition-colors hover:border-ink">
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
    <div className="border border-alpine/15 bg-white p-5 sm:p-6">
      <h3 className="flex items-center gap-2.5 font-display text-xl text-alpine">
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
export function Ricordo({ testo }: { testo: string }) {
  return (
    <figure className="relative border-2 border-ink bg-alpine p-6 text-cream shadow-[6px_6px_0_var(--color-rosso)] sm:p-8">
      <span aria-hidden className="absolute -top-6 left-5 font-display text-7xl leading-none text-rosso">
        «
      </span>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">La mia esperienza</p>
      <blockquote className="mt-3 font-display text-xl italic leading-relaxed sm:text-2xl">{richNodes(testo)}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 text-sm text-cream/80">
        <Image
          src="/images/chi-sono/rick-avatar.jpg"
          alt=""
          width={36}
          height={36}
          className="size-9 rounded-full border-2 border-cream object-cover"
        />
        Rick
      </figcaption>
    </figure>
  )
}

/** Errori da evitare in un riquadro rosso. */
export function ErroriDaEvitare({ voci }: { voci: string[] }) {
  return (
    <div className="border-2 border-rosso bg-rosso/[0.04] p-5 sm:p-7">
      <h2 className="flex items-center gap-3 font-display text-2xl text-rosso sm:text-3xl">
        <AlertTriangle size={22} aria-hidden />
        Errori da evitare
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
