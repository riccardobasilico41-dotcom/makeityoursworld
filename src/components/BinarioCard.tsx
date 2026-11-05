'use client'

import { Children, useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLingua } from '@/lib/i18n/LinguaProvider'

const T = {
  it: { prima: 'Indietro', dopo: 'Avanti' },
  en: { prima: 'Previous', dopo: 'Next' },
  es: { prima: 'Anterior', dopo: 'Siguiente' },
} as const

/**
 * Fila di card che scorre in orizzontale, con le frecce e una barra che mostra a che punto
 * si è. Sul telefono si scorre col dito; le card si fermano allineate (scroll-snap).
 */
export function BinarioCard({ children, etichetta }: { children: ReactNode; etichetta: string }) {
  const lingua = useLingua()
  const t = T[lingua]
  const binario = useRef<HTMLDivElement>(null)
  const [avanzamento, setAvanzamento] = useState({ inizio: 0, larghezza: 1 })
  const [estremi, setEstremi] = useState({ primo: true, ultimo: false })

  useEffect(() => {
    const el = binario.current
    if (!el) return
    const aggiorna = () => {
      const max = el.scrollWidth - el.clientWidth
      const larghezza = el.scrollWidth ? el.clientWidth / el.scrollWidth : 1
      setAvanzamento({ inizio: max > 0 ? (el.scrollLeft / max) * (1 - larghezza) : 0, larghezza })
      setEstremi({ primo: el.scrollLeft < 8, ultimo: el.scrollLeft > max - 8 })
    }
    aggiorna()
    el.addEventListener('scroll', aggiorna, { passive: true })
    addEventListener('resize', aggiorna)
    return () => {
      el.removeEventListener('scroll', aggiorna)
      removeEventListener('resize', aggiorna)
    }
  }, [])

  const sposta = (verso: 1 | -1) => {
    const el = binario.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const passo = card ? card.offsetWidth + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: verso * passo, behavior: 'smooth' })
  }

  const freccia =
    'inline-flex size-11 items-center justify-center border-2 border-ink bg-cream text-ink transition-colors hover:bg-ink hover:text-cream disabled:pointer-events-none disabled:opacity-30'

  return (
    <div>
      <div
        ref={binario}
        role="region"
        aria-label={etichetta}
        tabIndex={0}
        className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto scroll-smooth px-6 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 [scrollbar-width:none] focus-visible:outline-none [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (figlio) => (
          <div className="flex w-[82%] shrink-0 snap-start sm:w-[22rem] [&>*]:w-full">{figlio}</div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-5">
        <div className="relative h-[3px] flex-1 bg-alpine/10" aria-hidden>
          <div
            className="absolute inset-y-0 bg-rosso transition-[left] duration-150 ease-out"
            style={{ left: `${avanzamento.inizio * 100}%`, width: `${avanzamento.larghezza * 100}%` }}
          />
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => sposta(-1)} disabled={estremi.primo} aria-label={t.prima} className={freccia}>
            <ArrowLeft size={18} aria-hidden />
          </button>
          <button type="button" onClick={() => sposta(1)} disabled={estremi.ultimo} aria-label={t.dopo} className={freccia}>
            <ArrowRight size={18} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}
