'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Barra «G1 G2 G3…» per saltare tra i giorni sugli schermi piccoli, dove
 * l'indice laterale e il segnaposto di percorso non ci sono (`lg:hidden`).
 * È sticky dentro il blocco dei giorni: resta in alto solo mentre si leggono
 * i giorni e sparisce con loro. Il giorno a metà schermo è evidenziato
 * (IntersectionObserver) e la barra scorre per tenerlo in vista.
 */
export function GiorniBarraMobile({
  giorni,
  unitaLabel = 'Giorno',
}: {
  /** Numero mostrato e id dell'ancora di ogni giorno, nell'ordine della timeline. */
  giorni: { numero: string; id: string }[]
  unitaLabel?: string
}) {
  const [attivo, setAttivo] = useState(0)
  const barraRef = useRef<HTMLUListElement>(null)
  const sigla = unitaLabel === 'Giorno' ? 'G' : unitaLabel.charAt(0).toUpperCase()

  useEffect(() => {
    const elementi = giorni.map((g) => document.getElementById(g.id)).filter((e): e is HTMLElement => !!e)
    if (!elementi.length) return
    const io = new IntersectionObserver(
      (voci) => {
        for (const v of voci) {
          if (v.isIntersecting) {
            const i = elementi.indexOf(v.target as HTMLElement)
            if (i >= 0) setAttivo(i)
          }
        }
      },
      // una linea sottile a circa un terzo dello schermo: il giorno che la attraversa è quello che si sta leggendo
      { rootMargin: '-35% 0px -64% 0px' }
    )
    elementi.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [giorni])

  useEffect(() => {
    const barra = barraRef.current
    const bottone = barra?.children[attivo] as HTMLElement | undefined
    if (!barra || !bottone) return
    const ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    barra.scrollTo({
      left: bottone.offsetLeft - barra.clientWidth / 2 + bottone.clientWidth / 2,
      behavior: ridotto ? 'auto' : 'smooth',
    })
  }, [attivo])

  if (giorni.length < 2) return null

  return (
    <nav
      aria-label={`Vai a un ${unitaLabel.toLowerCase()} dell'itinerario`}
      className="sticky top-0 z-30 -mx-6 mb-8 border-y-2 border-ink bg-cream sm:-mx-8 lg:col-span-2 lg:mx-0"
    >
      <ul
        ref={barraRef}
        className="flex gap-1.5 overflow-x-auto px-6 py-1.5 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {giorni.map((g, i) => {
          const corrente = i === attivo
          return (
            <li key={g.id} className="shrink-0">
              <a
                href={`#${g.id}`}
                onClick={() => setAttivo(i)}
                aria-label={`${unitaLabel} ${g.numero}`}
                aria-current={corrente ? 'step' : undefined}
                className={`flex h-11 min-w-11 items-center justify-center border-2 px-2.5 text-sm font-semibold tabular-nums transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-1 motion-reduce:transition-none ${
                  corrente ? 'border-rosso bg-rosso text-cream' : 'border-ink/20 bg-white text-ink hover:border-ink'
                }`}
              >
                {sigla}
                {g.numero}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
