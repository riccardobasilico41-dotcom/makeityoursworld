'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import type { Lingua } from '@/lib/i18n/config'
import type { Reel } from '@/content/reels'

const T = {
  it: {
    titolo: 'Reel dal viaggio',
    lead: 'Girato da me, in verticale come sul telefono. Parte senza audio quando arriva sullo schermo: tocca per sentirlo.',
    audioOn: 'Attiva l’audio',
    audioOff: 'Togli l’audio',
    play: 'Riproduci',
    pausa: 'Metti in pausa',
    sottotitoli: 'Sottotitoli in inglese nel video',
    video: (t: string, l: string) => `Reel «${t}», ${l}`,
  },
  en: {
    titolo: 'Reels from the trip',
    lead: 'Shot by me, vertical like on your phone. It starts muted when it scrolls into view: tap to hear it.',
    audioOn: 'Turn sound on',
    audioOff: 'Turn sound off',
    play: 'Play',
    pausa: 'Pause',
    sottotitoli: 'English subtitles in the video',
    video: (t: string, l: string) => `Reel “${t}”, ${l}`,
  },
  es: {
    titolo: 'Reels del viaje',
    lead: 'Grabado por mí, en vertical como en el móvil. Empieza sin sonido al aparecer en pantalla: toca para oírlo.',
    audioOn: 'Activar el sonido',
    audioOff: 'Quitar el sonido',
    play: 'Reproducir',
    pausa: 'Pausar',
    sottotitoli: 'Subtítulos en inglés dentro del vídeo',
    video: (t: string, l: string) => `Reel «${t}», ${l}`,
  },
} satisfies Record<Lingua, unknown>

function minuti(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

function Telefono({ reel, lingua }: { reel: Reel; lingua: Lingua }) {
  const t = T[lingua]
  const ref = useRef<HTMLVideoElement>(null)
  const [muto, setMuto] = useState(true)
  const [inPausa, setInPausa] = useState(true)
  // pausa scelta dall'utente: lo scroll non la riavvia
  const pausaManuale = useRef(false)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const ridotto = matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && e.intersectionRatio >= 0.5) {
          if (!ridotto && !pausaManuale.current) v.play().catch(() => {})
        } else if (!v.paused) {
          v.pause()
        }
      },
      { threshold: [0, 0.5] },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  const audio = () => {
    const v = ref.current
    if (!v) return
    v.muted = !v.muted
    setMuto(v.muted)
    if (!v.muted && v.paused) {
      pausaManuale.current = false
      v.play().catch(() => {})
    }
  }

  const playPausa = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) {
      pausaManuale.current = false
      v.play().catch(() => {})
    } else {
      pausaManuale.current = true
      v.pause()
    }
  }

  return (
    <figure className="mx-auto w-full max-w-[17rem]">
      <div className="relative rounded-[2.25rem] border-[7px] border-ink bg-ink shadow-[6px_6px_0_0_rgba(0,0,0,0.12)]">
        <span aria-hidden className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-ink/80" />
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-ink">
          <video
            ref={ref}
            src={reel.src}
            poster={reel.poster}
            preload="none"
            muted
            loop
            playsInline
            aria-label={t.video(reel.titolo[lingua], reel.luogo[lingua])}
            onPlay={() => setInPausa(false)}
            onPause={() => setInPausa(true)}
            onClick={audio}
            className="h-full w-full cursor-pointer object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3">
            <button
              type="button"
              onClick={playPausa}
              aria-label={inPausa ? t.play : t.pausa}
              className="inline-flex size-11 items-center justify-center rounded-full bg-ink/70 text-cream backdrop-blur-sm transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {inPausa ? <Play size={18} aria-hidden /> : <Pause size={18} aria-hidden />}
            </button>
            <button
              type="button"
              onClick={audio}
              aria-pressed={!muto}
              aria-label={muto ? t.audioOn : t.audioOff}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink/70 px-4 text-xs font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {muto ? <VolumeX size={16} aria-hidden /> : <Volume2 size={16} aria-hidden />}
              <span>{muto ? t.audioOn : t.audioOff}</span>
            </button>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center">
        <span className="block font-display text-lg text-ink">{reel.titolo[lingua]}</span>
        <span className="mt-1 block text-xs leading-relaxed text-stone">
          {reel.luogo[lingua]} · {minuti(reel.durata)}
          <br />
          {t.sottotitoli}
        </span>
      </figcaption>
    </figure>
  )
}

export function ReelDalViaggio({ reels, lingua, id = 'reel-dal-viaggio' }: { reels: Reel[]; lingua: Lingua; id?: string }) {
  if (reels.length === 0) return null
  const t = T[lingua]
  return (
    <section id={id} aria-labelledby={`${id}-titolo`} className="scroll-mt-24">
      <h2 id={`${id}-titolo`} className="titolo-sezione text-alpine">
        {t.titolo}
      </h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone">{t.lead}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-10 sm:justify-start">
        {reels.map((r) => (
          <Telefono key={r.id} reel={r} lingua={lingua} />
        ))}
      </div>
    </section>
  )
}
