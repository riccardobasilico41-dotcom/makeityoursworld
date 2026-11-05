'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { preload } from 'react-dom'
import { Pause, Play } from 'lucide-react'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { dopoIlCaricamento, pausaFuoriVista, reteLenta } from '@/lib/video-differito'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { riparti: 'Fai ripartire il video', pausa: 'Metti in pausa il video' },
  en: { riparti: 'Play the video', pausa: 'Pause the video' },
  es: { riparti: 'Reanudar el vídeo', pausa: 'Pausar el vídeo' },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Video dell'apertura (montaggio «Runaway»), sempre in orizzontale.
 * Riparte dall'inizio a ogni apertura della pagina, anche tornando indietro
 * con il browser (bfcache). Muto e in loop; con `prefers-reduced-motion`
 * resta fermo sul primo fotogramma. Sul telefono carica la versione leggera.
 * Durante l'apertura del video (il titolo «WORLD.» battuto a macchina, fino a
 * `introFino` secondi) segna la sezione con `data-intro="true"`, così l'hero
 * può scurire il fotogramma (il testo dell'hero resta sempre visibile).
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
  const t = T[useLingua()]
  const ref = useRef<HTMLVideoElement>(null)
  const [inPausa, setInPausa] = useState(true)
  // pausa chiesta dal pulsante: lo scorrimento non la deve annullare
  const pausaScelta = useRef(false)
  // Il fotogramma d'apertura è l'elemento LCP: si chiede subito, dal <head>, con priorità alta.
  preload(poster, { as: 'image', fetchPriority: 'high' })

  // Prima del primo disegno: il velo dell'apertura c'è già, niente lampo.
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
    // Su schermi larghi il testo dell'hero sta sopra il video: si salta il titolo «WORLD»
    // già impresso nei primi secondi, che finirebbe sotto l'H1 (anche a ogni giro del loop).
    const largo = window.matchMedia('(min-width: 901px)').matches
    const partenza = largo ? introFino : 0
    const saltaTitolo = () => {
      if (video && largo && introFino && video.currentTime < introFino - 0.5) video.currentTime = introFino
    }
    video.addEventListener('timeupdate', saltaTitolo)

    function dallInizio() {
      if (!video) return
      video.currentTime = partenza
      if (fermo) return
      video.play().then(() => setInPausa(false)).catch(() => setInPausa(true))
    }

    function alRitorno(e: PageTransitionEvent) {
      if (e.persisted) dallInizio()
    }

    // Il video parte dopo il primo caricamento (prima poster, testo, font e script) e non parte
    // da solo con «Risparmio dati» o rete 2G/3G: resta il poster, con il pulsante play.
    // Fuori dallo schermo va in pausa, così il file da 1600 px non si scarica mentre si legge.
    let avviato = false
    const vista = pausaFuoriVista(video, () => avviato && !pausaScelta.current && !fermo)
    const smetti = reteLenta()
      ? () => {}
      : dopoIlCaricamento(() => {
          avviato = true
          if (vista.visibile()) dallInizio()
          else video.currentTime = partenza
        })
    window.addEventListener('pageshow', alRitorno)
    return () => {
      smetti()
      vista.smetti()
      window.removeEventListener('pageshow', alRitorno)
      video.removeEventListener('timeupdate', saltaTitolo)
    }
  }, [introFino])

  function alterna() {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      pausaScelta.current = false
      video.play().then(() => setInPausa(false)).catch(() => {})
    } else {
      pausaScelta.current = true
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
        preload="metadata"
        // il pulsante segue lo stato vero (anche le pause e le ripartenze dovute allo scorrimento)
        onPlay={() => setInPausa(false)}
        onPause={() => setInPausa(true)}
        aria-label={label}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={srcMobile} type="video/mp4" media="(max-width: 900px)" />
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={alterna}
        aria-label={inPausa ? t.riparti : t.pausa}
        className="absolute right-3 top-3 z-20 inline-flex size-11 items-center justify-center bg-ink/75 text-cream transition-colors duration-150 hover:bg-rosso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream landscape:lg:bottom-6 landscape:lg:right-6 landscape:lg:top-auto"
      >
        {inPausa ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
      </button>
    </>
  )
}
