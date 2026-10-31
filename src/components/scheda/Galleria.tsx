'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export type FotoGalleria = { src: string; alt: string }

/**
 * Striscia di foto della destinazione (giorni dei viaggi ed esperienze) che si apre a
 * schermo intero: frecce, tastiera (← → Esc) e scorrimento col dito sul telefono.
 */
export function Galleria({ foto }: { foto: FotoGalleria[] }) {
  const [aperta, setAperta] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const tocco = useRef<number | null>(null)

  const vai = useCallback((d: number) => setAperta((i) => (i === null ? i : (i + d + foto.length) % foto.length)), [foto.length])

  useEffect(() => {
    const dlg = dialogRef.current
    if (!dlg) return
    if (aperta !== null && !dlg.open) dlg.showModal()
    if (aperta === null && dlg.open) dlg.close()
  }, [aperta])

  useEffect(() => {
    if (aperta === null) return
    const tasto = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') vai(1)
      if (e.key === 'ArrowLeft') vai(-1)
    }
    window.addEventListener('keydown', tasto)
    return () => window.removeEventListener('keydown', tasto)
  }, [aperta, vai])

  const corrente = aperta !== null ? foto[aperta] : null
  const freccia = 'absolute top-1/2 -translate-y-1/2 inline-flex size-12 items-center justify-center bg-cream/90 text-ink hover:bg-cream'

  return (
    <>
      <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {foto.map((f, i) => (
          <li key={f.src} className={i === 0 && foto.length > 4 ? 'col-span-2 row-span-2' : ''}>
            <button
              type="button"
              onClick={() => setAperta(i)}
              className="group relative block aspect-[4/3] h-full w-full overflow-hidden bg-cream-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosso"
              aria-label={`Apri la foto: ${f.alt}`}
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes={i === 0 && foto.length > 4 ? '(min-width: 1024px) 560px, 100vw' : '(min-width: 1024px) 280px, 50vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setAperta(null)}
        onClick={(e) => e.target === e.currentTarget && setAperta(null)}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-black/95 p-0 backdrop:bg-black/80"
        aria-label="Galleria fotografica"
      >
        {corrente && (
          <div
            className="relative flex h-full w-full items-center justify-center"
            onTouchStart={(e) => (tocco.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (tocco.current === null) return
              const dx = e.changedTouches[0].clientX - tocco.current
              if (Math.abs(dx) > 40) vai(dx < 0 ? 1 : -1)
              tocco.current = null
            }}
          >
            <div className="relative h-[82dvh] w-[94vw]">
              <Image src={corrente.src} alt={corrente.alt} fill sizes="94vw" className="object-contain" />
            </div>
            <p className="absolute bottom-4 left-1/2 w-[90vw] -translate-x-1/2 text-center text-sm text-cream/80">
              {corrente.alt} · {aperta! + 1}/{foto.length}
            </p>
            <button type="button" onClick={() => setAperta(null)} className="absolute right-3 top-3 inline-flex size-12 items-center justify-center bg-cream/90 text-ink hover:bg-cream" aria-label="Chiudi">
              <X size={20} />
            </button>
            {foto.length > 1 && (
              <>
                <button type="button" onClick={() => vai(-1)} className={`${freccia} left-3`} aria-label="Foto precedente">
                  <ChevronLeft size={22} />
                </button>
                <button type="button" onClick={() => vai(1)} className={`${freccia} right-3`} aria-label="Foto successiva">
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>
        )}
      </dialog>
    </>
  )
}
