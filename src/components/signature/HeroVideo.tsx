'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

/**
 * Video dell'apertura (montaggio «Runaway»): parte da solo, muto e in loop,
 * appena si apre la pagina. Con `prefers-reduced-motion` resta fermo sul
 * poster; il pulsante permette sempre di fermarlo o farlo ripartire.
 */
export function HeroVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [inPausa, setInPausa] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setInPausa(true)
      return
    }
    video.play().catch(() => setInPausa(true))
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
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-label={label}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={alterna}
        aria-label={inPausa ? 'Fai ripartire il video' : 'Metti in pausa il video'}
        className="absolute bottom-3 right-3 inline-flex size-10 items-center justify-center bg-ink/70 text-cream transition-colors duration-150 hover:bg-rosso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
      >
        {inPausa ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
      </button>
    </>
  )
}
