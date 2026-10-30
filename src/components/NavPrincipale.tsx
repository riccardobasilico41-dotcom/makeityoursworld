'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'

export type VoceMenu = { nome: string; href: string }
export type GruppoMenu = { nome: string; voci: VoceMenu[]; tutti: VoceMenu }

/**
 * Menu principale per macro-area (Asia, Europa, …, Meraviglie), ognuna con i
 * suoi Paesi. Da xl in su: voci in riga con pannello a tendina (clic,
 * passaggio del mouse, Esc per chiudere). Sotto: pulsante «Menu» con le aree
 * a fisarmonica.
 */
export function NavPrincipale({ gruppi }: { gruppi: GruppoMenu[] }) {
  const [aperto, setAperto] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  // Cambio pagina: menu chiusi (reset durante il render, non in un effetto).
  const [percorso, setPercorso] = useState(pathname)
  if (percorso !== pathname) {
    setPercorso(pathname)
    setAperto(null)
    setMobile(false)
  }

  useEffect(() => {
    function fuori(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setAperto(null)
    }
    function esc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setAperto(null)
        setMobile(false)
      }
    }
    document.addEventListener('mousedown', fuori)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('mousedown', fuori)
      document.removeEventListener('keydown', esc)
    }
  }, [])

  // Colonne di giornale: l'ordine alfabetico scende per colonna, non per riga.
  const colonne = (n: number) => (n > 16 ? 'w-[34rem] columns-3' : n > 8 ? 'w-[24rem] columns-2' : 'w-max columns-1')

  return (
    <div ref={ref}>
      {/* Desktop */}
      <nav aria-label="Principale" className="hidden xl:block">
        <ul className="flex items-center gap-x-5">
          {gruppi.map((g) => {
            const id = `menu-${g.nome.replace(/\W+/g, '-').toLowerCase()}`
            const isOpen = aperto === g.nome
            return (
              <li
                key={g.nome}
                className="relative"
                onMouseEnter={() => setAperto(g.nome)}
                onMouseLeave={() => setAperto((a) => (a === g.nome ? null : a))}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setAperto(isOpen ? null : g.nome)}
                  className="inline-flex min-h-11 items-center gap-1 text-[0.95rem] font-medium text-ink transition-colors duration-150 hover:text-rosso aria-expanded:text-rosso"
                >
                  {g.nome}
                  <ChevronDown size={14} aria-hidden="true" className={`transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  id={id}
                  hidden={!isOpen}
                  className="absolute right-0 top-full z-50 pt-2"
                >
                  <div className="border-2 border-ink bg-cream p-5 shadow-[6px_6px_0_0_var(--color-ink)]">
                    <ul className={`gap-x-8 ${colonne(g.voci.length)}`}>
                      {g.voci.map((v) => (
                        <li key={v.href} className="break-inside-avoid">
                          <Link href={v.href} className="block py-1 text-[0.95rem] text-ink hover:text-rosso hover:underline hover:decoration-rosso hover:underline-offset-4">
                            {v.nome}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={g.tutti.href} className="mt-4 block border-t border-ink/15 pt-3 text-sm font-semibold text-rosso hover:underline">
                      {g.tutti.nome} →
                    </Link>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile e tablet */}
      <div className="xl:hidden">
        <button
          type="button"
          aria-expanded={mobile}
          aria-controls="menu-mobile"
          onClick={() => setMobile((m) => !m)}
          className="inline-flex min-h-11 items-center gap-2 text-[0.95rem] font-semibold text-ink"
        >
          {mobile ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          Menu
        </button>
        <nav
          id="menu-mobile"
          aria-label="Principale"
          hidden={!mobile}
          className="absolute inset-x-0 top-full z-50 max-h-[80svh] overflow-y-auto border-y-2 border-ink bg-cream px-4 pb-6 sm:px-8"
        >
          <ul>
            {gruppi.map((g) => (
              <li key={g.nome} className="border-b border-ink/15">
                <details className="group">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between font-display text-xl text-ink [&::-webkit-details-marker]:hidden">
                    {g.nome}
                    <ChevronDown size={18} aria-hidden="true" className="transition-transform duration-150 group-open:rotate-180" />
                  </summary>
                  <ul className="grid grid-cols-2 gap-x-4 pb-4">
                    {g.voci.map((v) => (
                      <li key={v.href}>
                        <Link href={v.href} className="block py-1.5 text-ink hover:text-rosso">
                          {v.nome}
                        </Link>
                      </li>
                    ))}
                    <li className="col-span-2">
                      <Link href={g.tutti.href} className="mt-1 block py-1.5 text-sm font-semibold text-rosso">
                        {g.tutti.nome} →
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
