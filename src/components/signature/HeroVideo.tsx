'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { preload } from 'react-dom'
import { Pause, Play } from 'lucide-react'

/**
 * Video dell'apertura (montaggio «Runaway»), sempre in orizzontale.
 * Riparte dall'inizio a ogni apertura della pagina, anche tornando indietro
 * con il browser (bfcache). Muto e in loop; con `prefers-reduced-motion`
 * resta fermo sul primo fotogramma. Sul telefono carica la versione leggera.
 * Durante l'apertura del video (il titolo «WORLD.» battuto a macchina, fino a
 * `introFino` secondi) segna la sezione con `data-intro="true"`, così l'hero
 * può tenere nascosto il proprio titolo e non sovrapporlo a quello del video.
 */
export function HeroVideo({
  src,
  srcMobile,
  poster,
  label,
  introFino = 0,
}: {
  src: string
  srcMobile: string
  poster: string
  label: string
  introFino?: number
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [inPausa, setInPausa] = useState(true)
  // Il fotogramma d'apertura è l'elemento LCP: si chiede subito, dal <head>, con priorità alta.
  preload(poster, { as: 'image', fetchPriority: 'high' })

  // Prima del primo disegno: niente lampo del titolo sopra «WORLD.».
  useLayoutEffect(() => {
    const video = ref.current
    const sezione = video?.closest('section')
    if (!video || !sezione || !introFino) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const aggiorna = () => {
      sezione.dataset.intro = !video.paused && video.currentTime < introFino ? 'true' : 'false'
    }
    sezione.dataset.intro = 'true'
    video.addEventListener('timeupdate', aggiorna)
    video.addEventListener('pause', aggiorna)
    // Se il video non parte (rete lenta, autoplay bloccato) il titolo compare comunque.
    const riserva = window.setTimeout(() => {
      if (video.paused || video.currentTime === 0) sezione.dataset.intro = 'false'
    }, 4000)
    return () => {
      video.removeEventListener('timeupdate', aggiorna)
      video.removeEventListener('pause', aggiorna)
      window.clearTimeout(riserva)
    }
  }, [introFino])

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const fermo = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function dallInizio() {
      if (!video) return
      video.currentTime = 0
      if (fermo) return
      video.play().then(() => setInPausa(false)).catch(() => setInPausa(true))
    }

    function alRitorno(e: PageTransitionEvent) {
      if (e.persisted) dallInizio()
    }

    dallInizio()
    window.addEventListener('pageshow', alRitorno)
    return () => window.removeEventListener('pageshow', alRitorno)
  }, [])

  function alterna() {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      video.play().then(() => setInPausa(false)).catch(() => {})
    } else {
      video.pause()
      setInPausa(true)
    }
  }

  return (
    <>
      <video
        ref={ref}
        poster={poster}
        muted
        loop
        playsInline
        preload="auto"
        aria-label={label}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={srcMobile} type="video/mp4" media="(max-width: 900px)" />
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={alterna}
        aria-label={inPausa ? 'Fai ripartire il video' : 'Metti in pausa il video'}
        className="absolute right-3 top-3 z-20 inline-flex size-10 items-center justify-center bg-ink/60 text-cream backdrop-blur-sm transition-colors duration-150 hover:bg-rosso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream landscape:lg:bottom-6 landscape:lg:right-6 landscape:lg:top-auto"
      >
        {inPausa ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
      </button>
    </>
  )
}
