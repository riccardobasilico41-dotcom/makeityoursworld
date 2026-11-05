'use client'

import { useRef } from 'react'
import { preload } from 'react-dom'
import Image from 'next/image'
import { useReducedMotion } from 'motion/react'
import { useVideoDifferito } from '@/lib/video-differito'

export type Media =
  | { tipo: 'foto'; src: string; alt: string }
  | { tipo: 'video'; src: string; poster: string }

/**
 * Riempie il riquadro destro di `PageHeader`: foto vera oppure video muto in loop.
 * `prefers-reduced-motion`: niente autoplay, resta il fotogramma fermo (`poster`).
 */
export function HeaderMedia({ media, sizes = '(min-width: 1024px) 42vw, 100vw' }: { media: Media; sizes?: string }) {
  const reduceMotion = useReducedMotion()
  const video = useRef<HTMLVideoElement>(null)
  useVideoDifferito(video)
  // il fotogramma del video è l'elemento LCP della testata: si chiede subito, dal <head>
  if (media.tipo === 'video') preload(media.poster, { as: 'image', fetchPriority: 'high' })

  if (media.tipo === 'foto') {
    return (
      <Image
        src={media.src}
        alt={media.alt}
        fill
        preload
        sizes={sizes}
        className="object-cover"
      />
    )
  }
  if (reduceMotion) {
    // eslint-disable-next-line @next/next/no-img-element -- fotogramma fermo del video, decorativo
    return <img src={media.poster} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
  }
  return (
    // niente autoPlay: parte dopo il caricamento della pagina (useVideoDifferito), non con rete lenta
    <video
      ref={video}
      aria-hidden="true"
      loop
      muted
      playsInline
      preload="none"
      poster={media.poster}
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={media.src} type="video/mp4" />
    </video>
  )
}
