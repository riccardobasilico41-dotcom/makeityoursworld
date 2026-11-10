import type { PuntoTappa } from './geo'
import { HeroVideo } from './HeroVideo'
import { HeroFinder } from './HeroFinder'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    label: 'Runaway: montaggio video dei nostri viaggi in giro per il mondo',
  },
  en: {
    label: 'Runaway: a video montage of our trips around the world',
  },
  es: {
    label: 'Runaway: montaje de vídeo de nuestros viajes por el mundo',
  },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Apertura della Home: il montaggio «Runaway» dei nostri viaggi a tutto
 * schermo, sempre in orizzontale, con titolo e Travel Finder sopra, visibili
 * da subito. Su schermi
 * orizzontali il video riempie la finestra e una sfumatura scura tiene
 * leggibile il testo; sul telefono in verticale il video resta 16:9 a tutta
 * larghezza (niente ritaglio in verticale) e il testo parte dal suo bordo
 * basso e prosegue sul fondo scuro.
 */
export const HERO_VIDEO = {
  src: '/videos/runaway-hero-75s.mp4',
  srcMobile: '/videos/runaway-hero-mobile-40s.mp4',
  poster: '/videos/runaway-hero-poster.jpg',
  label: 'Runaway: montaggio video dei nostri viaggi in giro per il mondo',
  /** Secondi dell'apertura del video con il titolo «WORLD. make it yours»: solo un velo più scuro, il testo resta visibile. */
  introFino: 17,
}

/** Divide la tagline: le ultime tre parole vanno in evidenza. */
function dividiTagline(tagline: string): [string, string] {
  const parole = tagline.split(' ')
  if (parole.length < 5) return [tagline, '']
  return [parole.slice(0, -3).join(' '), parole.slice(-3).join(' ')]
}

export async function CinematicHero({
  tagline,
  subtext,
}: {
  tagline: string
  subtext: string
  routeTappe?: PuntoTappa[]
}) {
  const t = T[await linguaCorrente()]
  const [inizio, fine] = dividiTagline(tagline)

  return (
    <section className="group/hero relative isolate flex flex-col overflow-hidden border-b-2 border-ink bg-ink text-cream landscape:min-h-[32rem] landscape:md:h-[calc(100svh-4.25rem)]">
      <div className="relative aspect-video w-full landscape:md:absolute landscape:md:inset-0 landscape:md:aspect-auto landscape:md:h-full">
        <HeroVideo
          src={HERO_VIDEO.src}
          srcMobile={HERO_VIDEO.srcMobile}
          poster={HERO_VIDEO.poster}
          label={t.label}
          introFino={HERO_VIDEO.introFino}
        />
        {/* Sfumature per la leggibilità: dal basso (dove sta il testo) e da sinistra. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/25 to-transparent landscape:md:from-ink/90 landscape:md:via-ink/35"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 hidden bg-gradient-to-r from-ink/70 via-ink/25 to-transparent landscape:md:block"
        />
        {/* Durante l'apertura del video («WORLD. make it yours») il fotogramma si abbassa:
            il titolo del video resta un effetto di sfondo e non compete con H1 e ricerca. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-ink/0 transition-colors duration-700 motion-reduce:transition-none landscape:md:group-data-[intro=true]/hero:bg-ink/45"
        />
      </div>

      {/* Testo e Travel Finder visibili da subito, anche durante l'apertura del video. */}
      <div className="relative z-10 px-4 pt-5 pb-8 sm:px-8 sm:pt-8 sm:pb-10 landscape:md:mt-auto landscape:md:px-12 landscape:md:pt-0 landscape:md:pb-12">
        <h1 className="max-w-[22ch] font-display text-[clamp(2rem,4.6vw,4.75rem)] leading-[1.02] text-balance text-cream [text-shadow:0_2px_24px_rgb(0_0_0/0.55)]">
          {inizio} {fine && <span className="text-[oklch(72%_0.16_32)]">{fine}</span>}
        </h1>
        <p className="mt-3 max-w-[46ch] text-base leading-snug text-cream/90 [text-shadow:0_1px_12px_rgb(0_0_0/0.6)] sm:mt-4 sm:text-lg sm:leading-relaxed">
          {subtext}
        </p>
        <div className="mt-5 sm:mt-6">
          <HeroFinder />
        </div>
      </div>
    </section>
  )
}
