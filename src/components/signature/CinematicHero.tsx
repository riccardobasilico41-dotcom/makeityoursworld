import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { PuntoTappa } from './geo'
import { HeroVideo } from './HeroVideo'

/**
 * Apertura della Home: il montaggio «Runaway» dei nostri viaggi a tutto
 * schermo, sempre in orizzontale, con titolo e azioni sopra. Su schermi
 * orizzontali il video riempie la finestra e una sfumatura scura tiene
 * leggibile il testo; sul telefono in verticale il video resta 16:9 a tutta
 * larghezza (niente ritaglio in verticale) e il testo parte dal suo bordo
 * basso e prosegue sul fondo scuro.
 */
export const HERO_VIDEO = {
  src: '/videos/runaway-hero-1600.mp4',
  srcMobile: '/videos/runaway-hero-mobile.mp4',
  poster: '/videos/runaway-hero-poster.jpg',
  label: 'Runaway: montaggio video dei nostri viaggi in giro per il mondo',
  /** Secondi dell'apertura del video con il titolo «WORLD. make it yours». */
  introFino: 17,
  didascalia: 'Runaway, i nostri viaggi in un solo montaggio. Riprese di Riccardo Basilico.',
}

/** Divide la tagline: le ultime tre parole vanno in evidenza. */
function dividiTagline(tagline: string): [string, string] {
  const parole = tagline.split(' ')
  if (parole.length < 5) return [tagline, '']
  return [parole.slice(0, -3).join(' '), parole.slice(-3).join(' ')]
}

export function CinematicHero({
  tagline,
  subtext,
}: {
  tagline: string
  subtext: string
  routeTappe?: PuntoTappa[]
}) {
  const [inizio, fine] = dividiTagline(tagline)

  return (
    <section className="group/hero relative isolate flex flex-col overflow-hidden border-b-2 border-ink bg-ink text-cream landscape:min-h-[32rem] landscape:md:h-[calc(100svh-4.25rem)]">
      <div className="relative aspect-video w-full landscape:md:absolute landscape:md:inset-0 landscape:md:aspect-auto landscape:md:h-full">
        <HeroVideo
          src={HERO_VIDEO.src}
          srcMobile={HERO_VIDEO.srcMobile}
          poster={HERO_VIDEO.poster}
          label={HERO_VIDEO.label}
          introFino={HERO_VIDEO.introFino}
        />
        {/* Sfumature per la leggibilità: dal basso (dove sta il testo) e da sinistra. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/25 to-transparent landscape:md:from-ink/90 landscape:md:via-ink/35"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 hidden bg-gradient-to-r transition-opacity duration-700 group-data-[intro=true]/hero:opacity-0 from-ink/60 via-ink/15 to-transparent landscape:md:block"
        />
      </div>

      <div className="relative z-10 -mt-8 px-4 pb-10 transition-opacity duration-700 sm:-mt-14 sm:px-8 landscape:md:mt-auto landscape:md:px-12 landscape:md:pb-14 landscape:md:group-data-[intro=true]/hero:pointer-events-none landscape:md:group-data-[intro=true]/hero:opacity-0">
        <h1 className="max-w-[16ch] font-display text-[clamp(2.4rem,6.4vw,6.5rem)] text-balance text-cream [text-shadow:0_2px_24px_rgb(0_0_0/0.45)]">
          {inizio} {fine && <span className="text-[oklch(70%_0.16_32)]">{fine}</span>}
        </h1>
        <p className="mt-5 max-w-[38ch] text-lg leading-relaxed text-cream/85 [text-shadow:0_1px_12px_rgb(0_0_0/0.5)] sm:text-xl">
          {subtext}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-6">
          <Link
            href="/viaggi"
            className="inline-flex min-h-12 items-center gap-2 bg-rosso px-6 py-3 text-[0.95rem] font-semibold text-cream transition-colors duration-150 hover:bg-rosso-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Scopri gli itinerari
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/destinazioni"
            className="text-[0.95rem] font-semibold text-cream underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-[oklch(80%_0.12_32)]"
          >
            Sfoglia per Paese
          </Link>
        </div>
        <p className="mt-8 text-xs text-cream/60">{HERO_VIDEO.didascalia}</p>
      </div>
    </section>
  )
}
