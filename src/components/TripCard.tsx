import Link from '@/components/ui/Link'
import Image from 'next/image'
import { ArrowUpRight, Compass, Mountain, TreePalm, Landmark, Sun, Waves, type LucideProps } from 'lucide-react'
import type { Viaggio } from '@/lib/viaggi'
import { getContinente } from '@/lib/utils'
import { coloreContinente } from '@/lib/colori-etichette'
import { FeaturedBorderTrail } from './FeaturedBorderTrail'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { etichetta } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'
import { stagioneBreve } from '@/lib/viaggi-filtri-stato'

const T = {
  it: { leggi: "Leggi l'itinerario", durata: 'Durata', quando: 'Quando andare', budget: 'Budget', tipo: 'Tipo', combinato: 'Più viaggi in uno' },
  en: { leggi: 'Read the itinerary', durata: 'Length', quando: 'Best time', budget: 'Budget', tipo: 'Type', combinato: 'Several trips in one' },
  es: { leggi: 'Lee el itinerario', durata: 'Duración', quando: 'Cuándo ir', budget: 'Presupuesto', tipo: 'Tipo', combinato: 'Varios viajes en uno' },
} satisfies Record<Lingua, Record<string, string>>

const GRADIENTS: Record<string, string> = {
  Europa: 'from-[#2c4a6b] to-[#0f2439]',
  Africa: 'from-[#b5652b] to-[#5e2f11]',
  'Nord America': 'from-[#1f5c56] to-[#0b2624]',
  'America Centrale': 'from-[#2f6b3f] to-[#123018]',
  'Medio Oriente': 'from-[#a8672f] to-[#4a2a10]',
  Asia: 'from-[#7a2e4e] to-[#33111e]',
}

const ICONS: Record<string, typeof Compass> = {
  Europa: Landmark,
  Africa: Sun,
  'Nord America': Mountain,
  'America Centrale': TreePalm,
  'Medio Oriente': Waves,
  Asia: Mountain,
}

function gradientFor(continente: string) {
  return GRADIENTS[continente] ?? 'from-alpine to-alpine-dark'
}

/** Icona del riquadro senza foto: un componente lucide per continente. */
function IconaContinente({ continente, ...props }: { continente: string } & LucideProps) {
  const Icona = ICONS[continente] ?? Compass
  return <Icona {...props} />
}

/** Solo i campi che servono alla scheda: l'elenco /viaggi passa questi al client, non il testo intero dei viaggi. */
export type ViaggioScheda = Pick<
  Viaggio,
  'slug' | 'titolo' | 'descrizione' | 'categorie' | 'tags' | 'durata' | 'durataBreve' | 'periodoBreve'
> & {
  /** Copertina nella lingua della pagina (foto + testo alternativo), se il viaggio ne ha una. */
  copertina?: { immagine: string; imageAlt: string }
  /** Paesi del viaggio già tradotti («Guatemala · Belize · Panama»): se c'è, sostituisce il continente nell'occhiello. */
  luogo?: string
  /** Campi della card «da confronto» dell'archivio: tutti facoltativi, se mancano la riga non c'è. */
  mesiConsigliati?: number[]
  budget?: string
  stili?: string[]
  provenienza?: 'journey' | 'combined'
}

export function riduciPerScheda(v: Viaggio): ViaggioScheda {
  return {
    slug: v.slug,
    titolo: v.titolo,
    descrizione: v.descrizione,
    categorie: v.categorie,
    tags: v.tags,
    durata: v.durata,
    durataBreve: v.durataBreve,
    periodoBreve: v.periodoBreve,
  }
}

/**
 * `subito`: la prima scheda dell'elenco (elemento LCP sul telefono) si carica senza lazy-loading e con priorità alta.
 * `confronto`: la card dell'archivio /viaggi, con le stesse righe in ogni card (durata, quando andare, budget se
 * c'è, tipo) al posto del periodo in cui sono partito; ogni riga compare solo se il dato esiste.
 */
export function TripCard({
  viaggio,
  featured = false,
  subito = false,
  confronto = false,
}: {
  viaggio: ViaggioScheda
  featured?: boolean
  subito?: boolean
  confronto?: boolean
}) {
  const lingua = useLingua()
  const t = T[lingua]
  const continente = getContinente(viaggio.categorie)
  const copertina = viaggio.copertina
  const stagione = stagioneBreve(viaggio.mesiConsigliati, lingua)
  const tipo = (viaggio.stili ?? []).slice(0, 2).map((s) => etichetta(s, lingua)).join(' · ')
  const righe = confronto
    ? [
        { k: t.durata, v: viaggio.durataBreve },
        { k: t.quando, v: stagione },
        { k: t.budget, v: viaggio.budget },
        { k: t.tipo, v: tipo && tipo.charAt(0).toUpperCase() + tipo.slice(1) },
      ].filter((r): r is { k: string; v: string } => Boolean(r.v))
    : []

  return (
    <Link
      href={`/viaggi/${viaggio.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-none border border-alpine/10 bg-white transition-[border-color,transform] duration-150 ease-out hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine focus-visible:ring-offset-2 active:scale-[0.99] motion-reduce:active:scale-100"
    >
      {featured && <FeaturedBorderTrail />}
      <div
        className={`relative flex items-end overflow-hidden p-6 text-cream ${copertina ? '' : `bg-gradient-to-br ${gradientFor(continente)}`} ${
          featured ? 'min-h-[14rem]' : 'min-h-[9rem]'
        }`}
      >
        {copertina ? (
          <>
            <Image
              src={copertina.immagine}
              alt={copertina.imageAlt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 3rem)"
              loading={subito ? 'eager' : undefined}
              fetchPriority={subito ? 'high' : undefined}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
          </>
        ) : (
          <IconaContinente
            continente={continente}
            size={featured ? 140 : 96}
            strokeWidth={1}
            className="pointer-events-none absolute -right-4 -top-4 text-cream/10 transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <p className="relative z-10 px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream" style={{ backgroundColor: coloreContinente(continente) }}>
          {viaggio.luogo ?? etichetta(continente, lingua)}
        </p>
        {viaggio.provenienza === 'combined' && (
          <p className="absolute right-3 top-3 z-10 border border-cream/70 bg-ink/70 px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cream">
            {t.combinato}
          </p>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3
          className={`font-display font-medium leading-tight text-alpine ${
            featured ? 'text-2xl' : 'text-lg'
          }`}
        >
          {viaggio.titolo}
        </h3>
        <p className={`text-sm leading-relaxed text-stone ${confronto ? 'line-clamp-3' : ''}`}>{viaggio.descrizione}</p>
        {confronto ? (
          righe.length > 0 && (
            <dl className="mt-auto grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 border-t border-ink/10 pt-3 text-xs">
              {righe.map((r) => (
                <div key={r.k} className="contents">
                  <dt className="font-semibold uppercase tracking-wider text-stone/85">{r.k}</dt>
                  <dd className="text-ink">{r.v}</dd>
                </div>
              ))}
            </dl>
          )
        ) : (
          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-2 text-xs text-stone/85">
            {viaggio.periodoBreve && <span>{viaggio.periodoBreve}</span>}
            {viaggio.durataBreve && <span>· {viaggio.durataBreve}</span>}
          </div>
        )}
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-rosso">
          {t.leggi}
          <ArrowUpRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
