'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from '@/components/ui/Link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { SelettoreLingua } from './SelettoreLingua'
import { APRI_RICERCA } from './Ricerca'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { principale: 'Principale', menu: 'Menu', aree: 'Per area', cerca: 'Cerca nel sito', apri: (n: string) => `Apri il menu ${n}` },
  en: { principale: 'Main', menu: 'Menu', aree: 'By area', cerca: 'Search the site', apri: (n: string) => `Open the ${n} menu` },
  es: { principale: 'Principal', menu: 'Menú', aree: 'Por área', cerca: 'Buscar en el sitio', apri: (n: string) => `Abrir el menú ${n}` },
} satisfies Record<Lingua, Record<string, string | ((n: string) => string)>>

export type VoceMenu = { nome: string; href: string }
export type GruppoMenu = { nome: string; voci: VoceMenu[]; tutti: VoceMenu; /** pagina del gruppo: il nome nel menu diventa un link */ href?: string }

export type Menu = {
  viaggi: VoceMenu
  /** «Destinazioni»: link a /destinazioni e, a tendina, le aree con i loro Paesi */
  destinazioni: VoceMenu & { aree: GruppoMenu[] }
  meraviglie: GruppoMenu
  chiSono: VoceMenu
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosso'
const VOCE = `inline-flex min-h-11 items-center whitespace-nowrap text-[0.95rem] font-medium text-ink transition-colors duration-150 hover:text-rosso ${FOCUS}`

/**
 * Menu principale. Da xl (1280 px) in su, in riga: Viaggi · Destinazioni ▾ ·
 * Meraviglie ▾ · Chi sono. «Destinazioni» apre un pannello a due colonne: a
 * sinistra le aree, a destra i Paesi dell'area scelta (passaggio del mouse o
 * focus). Sotto xl: pulsante «Menu» con Viaggi e Destinazioni in cima, poi le
 * aree a fisarmonica, Meraviglie, Chi sono e la ricerca. Esc chiude tutto.
 */
export function NavPrincipale({ menu }: { menu: Menu }) {
  const t = T[useLingua()]
  const [aperto, setAperto] = useState<'destinazioni' | 'meraviglie' | null>(null)
  const [areaAttiva, setAreaAttiva] = useState(0)
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
  const colonne = (n: number) => (n > 16 ? 'columns-3' : n > 8 ? 'columns-2' : 'columns-1')
  const { destinazioni, meraviglie } = menu
  const area = destinazioni.aree[areaAttiva] ?? destinazioni.aree[0]

  /** Voce con link + freccia che apre il pannello (funzione di render, non componente: niente rimontaggi). */
  function tendina(chiave: 'destinazioni' | 'meraviglie', voce: VoceMenu, pannello: string, children: ReactNode) {
    const isOpen = aperto === chiave
    return (
      <li
        key={chiave}
        className="relative"
        onMouseEnter={() => setAperto(chiave)}
        onMouseLeave={() => setAperto((a) => (a === chiave ? null : a))}
      >
        <span className={`inline-flex items-center ${isOpen ? 'text-rosso' : 'text-ink'}`}>
          <Link href={voce.href} className={`inline-flex min-h-11 items-center whitespace-nowrap text-[0.95rem] font-medium transition-colors duration-150 hover:text-rosso ${FOCUS}`} onClick={() => setAperto(null)}>
            {voce.nome}
          </Link>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={pannello}
            aria-label={(t.apri as (n: string) => string)(voce.nome)}
            onClick={() => setAperto(isOpen ? null : chiave)}
            className={`inline-flex min-h-11 min-w-6 items-center justify-center hover:text-rosso ${FOCUS}`}
          >
            <ChevronDown size={14} aria-hidden="true" className={`transition-transform duration-150 motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </span>
        <div id={pannello} hidden={!isOpen} className="absolute right-0 top-full z-50 max-w-[calc(100vw-2rem)] pt-2">
          {children}
        </div>
      </li>
    )
  }

  return (
    <div ref={ref}>
      {/* Desktop */}
      <nav aria-label={t.principale as string} className="hidden xl:block">
        <ul className="flex items-center gap-x-4 2xl:gap-x-6">
          <li>
            <Link href={menu.viaggi.href} className={VOCE}>
              {menu.viaggi.nome}
            </Link>
          </li>

          {tendina('destinazioni', destinazioni, 'menu-destinazioni', (
            <div className="grid w-[46rem] grid-cols-[13rem_1fr] border-2 border-ink bg-cream shadow-[6px_6px_0_0_var(--color-ink)]">
              <ul className="border-r-2 border-ink py-3">
                {destinazioni.aree.map((a, i) => (
                  <li key={a.nome}>
                    <Link
                      href={a.href ?? a.tutti.href}
                      onMouseEnter={() => setAreaAttiva(i)}
                      onFocus={() => setAreaAttiva(i)}
                      className={`flex min-h-11 items-center justify-between px-5 font-display text-lg transition-colors duration-150 ${FOCUS} focus-visible:-outline-offset-2 ${
                        i === areaAttiva ? 'bg-ink text-cream' : 'text-ink hover:text-rosso'
                      }`}
                    >
                      {a.nome}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {area && (
                <div className="flex flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{area.nome}</p>
                  <ul className={`mt-3 gap-x-8 ${colonne(area.voci.length)}`}>
                    {area.voci.map((v) => (
                      <li key={v.href} className="break-inside-avoid">
                        <Link href={v.href} className={`block py-1 text-[0.95rem] text-ink hover:text-rosso hover:underline hover:decoration-rosso hover:underline-offset-4 ${FOCUS}`}>
                          {v.nome}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap justify-between gap-x-6 gap-y-1 border-t border-ink/15 pt-3">
                    <Link href={area.tutti.href} className={`inline-flex min-h-11 items-center text-sm font-semibold text-rosso hover:underline ${FOCUS}`}>
                      {area.tutti.nome} →
                    </Link>
                    <Link href={destinazioni.href} className={`inline-flex min-h-11 items-center text-sm font-semibold text-ink hover:text-rosso hover:underline ${FOCUS}`}>
                      {destinazioni.nome} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}

          {tendina('meraviglie', { nome: meraviglie.nome, href: meraviglie.href ?? meraviglie.tutti.href }, 'menu-meraviglie', (
            <div className="w-max border-2 border-ink bg-cream p-5 shadow-[6px_6px_0_0_var(--color-ink)]">
              <ul>
                {meraviglie.voci.map((v) => (
                  <li key={v.href}>
                    <Link href={v.href} className={`block py-1 text-[0.95rem] text-ink hover:text-rosso hover:underline hover:decoration-rosso hover:underline-offset-4 ${FOCUS}`}>
                      {v.nome}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={meraviglie.tutti.href} className={`mt-4 block border-t border-ink/15 pt-3 text-sm font-semibold text-rosso hover:underline ${FOCUS}`}>
                {meraviglie.tutti.nome} →
              </Link>
            </div>
          ))}

          <li>
            <Link href={menu.chiSono.href} className={VOCE}>
              {menu.chiSono.nome}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile e tablet */}
      <div className="xl:hidden">
        <button
          type="button"
          aria-expanded={mobile}
          aria-controls="menu-mobile"
          onClick={() => setMobile((m) => !m)}
          aria-label={t.menu as string}
          className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 whitespace-nowrap text-[0.95rem] font-semibold text-ink ${FOCUS}`}
        >
          {mobile ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          {/* sotto i 420 px resta solo l'icona: marchio, menu, cerca e cuore stanno così su una riga */}
          <span aria-hidden="true" className="hidden min-[420px]:inline">{t.menu as string}</span>
        </button>
        <nav
          id="menu-mobile"
          aria-label={t.principale as string}
          hidden={!mobile}
          className="absolute inset-x-0 top-full z-50 h-[calc(100svh-4.75rem)] overflow-y-auto overscroll-contain border-y-2 border-ink bg-cream px-4 pb-6 sm:px-8"
        >
          {/* in cima le due porte principali */}
          <ul className="grid grid-cols-2 gap-3 pt-4 pb-5">
            {[menu.viaggi, destinazioni].map((v) => (
              <li key={v.href}>
                <Link
                  href={v.href}
                  className={`flex min-h-12 items-center justify-between border-2 border-ink px-4 font-display text-xl text-ink transition-colors duration-150 hover:bg-ink hover:text-cream ${FOCUS}`}
                >
                  {v.nome}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{t.aree as string}</p>
          <ul className="mt-1">
            {[...destinazioni.aree, meraviglie].map((g) => (
              <li key={g.nome} className="border-b border-ink/15">
                <details className="group">
                  <summary className={`flex min-h-12 cursor-pointer list-none items-center justify-between font-display text-xl text-ink [&::-webkit-details-marker]:hidden ${FOCUS}`}>
                    {g.nome}
                    <ChevronDown size={18} aria-hidden="true" className="transition-transform duration-150 group-open:rotate-180 motion-reduce:transition-none" />
                  </summary>
                  <ul className="grid grid-cols-2 gap-x-4 pb-4">
                    {g.voci.map((v) => (
                      <li key={v.href}>
                        <Link href={v.href} className={`flex min-h-11 items-center text-ink hover:text-rosso ${FOCUS}`}>
                          {v.nome}
                        </Link>
                      </li>
                    ))}
                    <li className="col-span-2">
                      <Link href={g.tutti.href} className={`flex min-h-11 items-center text-sm font-semibold text-rosso ${FOCUS}`}>
                        {g.tutti.nome} →
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            ))}
            <li className="border-b border-ink/15">
              <Link href={menu.chiSono.href} className={`flex min-h-12 items-center font-display text-xl text-ink hover:text-rosso ${FOCUS}`}>
                {menu.chiSono.nome}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => {
              setMobile(false)
              window.dispatchEvent(new Event(APRI_RICERCA))
            }}
            className={`mt-4 flex min-h-12 w-full items-center gap-2 border-2 border-ink px-4 text-left font-semibold text-ink hover:bg-ink hover:text-cream ${FOCUS}`}
          >
            <Search size={18} aria-hidden="true" />
            {t.cerca as string}
          </button>
          {/* sotto i 420 px il selettore non sta nell'header: lo si trova qui */}
          <div className="pt-4 min-[420px]:hidden">
            <SelettoreLingua />
          </div>
        </nav>
      </div>
    </div>
  )
}
