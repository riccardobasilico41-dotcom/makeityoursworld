'use client'

import { useId, useRef, useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown, Search } from 'lucide-react'
import Link from '@/components/ui/Link'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { localizza } from '@/lib/i18n/percorsi'
import type { Lingua } from '@/lib/i18n/config'
import { MESI_BREVI, NOMI_MESI } from '@/lib/viaggi-filtri-stato'

/** Valori del contratto URL di /viaggi (`durata`, `stile`): restano in italiano in tutte le lingue. */
const DURATE = ['weekend', '4-7', '8-14', '15+'] as const
const STILI = ['mare', 'gastronomia', 'montagna', 'trekking', 'archeologia'] as const
const MESI = Array.from({ length: 12 }, (_, i) => i + 1)

const T = {
  it: {
    label: 'Dove vuoi andare?',
    placeholder: 'Un Paese, una città, un’idea…',
    cerca: 'Cerca',
    quanto: 'Quanto tempo hai',
    durate: { weekend: 'Weekend', '4-7': '4-7 giorni', '8-14': '8-14 giorni', '15+': 'Più di 2 settimane' },
    tutti: 'Tutti i viaggi',
    porte: 'Da dove cominciare',
    paese: 'Destinazioni',
    mappa: 'Mappa',
    meraviglie: 'Meraviglie',
    quando: 'Quando andare',
    quandoMese: (m: string) => `Viaggi consigliati a ${m}`,
    interessi: 'Interessi',
    stili: { mare: 'Mare', gastronomia: 'Gastronomia', montagna: 'Montagna', trekking: 'Trekking', archeologia: 'Archeologia' },
  },
  en: {
    label: 'Where do you want to go?',
    placeholder: 'A country, a city, an idea…',
    cerca: 'Search',
    quanto: 'How much time you have',
    durate: { weekend: 'Weekend', '4-7': '4–7 days', '8-14': '8–14 days', '15+': 'Over 2 weeks' },
    tutti: 'All trips',
    porte: 'Where to start',
    paese: 'Destinations',
    mappa: 'Map',
    meraviglie: 'Wonders',
    quando: 'When to go',
    quandoMese: (m: string) => `Trips best done in ${m}`,
    interessi: 'Interests',
    stili: { mare: 'Beach', gastronomia: 'Food', montagna: 'Mountains', trekking: 'Trekking', archeologia: 'Archaeology' },
  },
  es: {
    label: '¿Adónde quieres ir?',
    placeholder: 'Un país, una ciudad, una idea…',
    cerca: 'Buscar',
    quanto: 'Cuánto tiempo tienes',
    durate: { weekend: 'Fin de semana', '4-7': '4-7 días', '8-14': '8-14 días', '15+': 'Más de 2 semanas' },
    tutti: 'Todos los viajes',
    porte: 'Por dónde empezar',
    paese: 'Destinos',
    mappa: 'Mapa',
    meraviglie: 'Maravillas',
    quando: 'Cuándo ir',
    quandoMese: (m: string) => `Viajes recomendados en ${m}`,
    interessi: 'Intereses',
    stili: { mare: 'Mar', gastronomia: 'Gastronomía', montagna: 'Montaña', trekking: 'Trekking', archeologia: 'Arqueología' },
  },
} satisfies Record<
  Lingua,
  {
    label: string
    placeholder: string
    cerca: string
    quanto: string
    durate: Record<(typeof DURATE)[number], string>
    tutti: string
    porte: string
    paese: string
    mappa: string
    meraviglie: string
    quando: string
    quandoMese: (m: string) => string
    interessi: string
    stili: Record<(typeof STILI)[number], string>
  }
>

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream'
const CHIP = `inline-flex min-h-11 shrink-0 items-center whitespace-nowrap border-2 border-cream/80 bg-ink/70 px-3.5 text-sm font-semibold text-cream transition-colors duration-150 hover:border-cream hover:bg-cream hover:text-ink motion-reduce:transition-none ${FOCUS}`
const MESE = `flex min-h-11 items-center justify-center border-2 border-cream/80 bg-ink/70 text-sm font-semibold text-cream transition-colors duration-150 hover:border-cream hover:bg-cream hover:text-ink motion-reduce:transition-none ${FOCUS}`
const TOGGLE = `inline-flex min-h-11 items-center gap-1 text-[0.95rem] font-semibold text-cream [text-shadow:0_1px_8px_rgb(0_0_0/0.6)] ${FOCUS}`
const LINK = `inline-flex min-h-11 items-center text-[0.95rem] font-semibold text-cream underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-[oklch(80%_0.12_32)] ${FOCUS}`

/**
 * Travel Finder dell'apertura: un campo «Dove vuoi andare?» che porta
 * all'archivio filtrato (/viaggi?q=…), poi gli accessi rapidi per durata e, a
 * richiesta, per mese consigliato (/viaggi?quando=…) o interesse; sotto, le
 * quattro porte del sito (tutti i viaggi, destinazioni, mappa, meraviglie).
 * I mesi e gli interessi sono link veri: senza JavaScript restano nascosti,
 * ma il modulo funziona lo stesso (GET su /viaggi).
 */
export function HeroFinder() {
  const lingua = useLingua()
  const t = T[lingua]
  const router = useRouter()
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [aperto, setAperto] = useState<'quando' | 'interessi' | null>(null)
  const apri = (quale: 'quando' | 'interessi') => setAperto((v) => (v === quale ? null : quale))

  function invia(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const q = inputRef.current?.value.trim() ?? ''
    router.push(localizza(q ? `/viaggi?q=${encodeURIComponent(q)}` : '/viaggi', lingua))
  }

  return (
    <div className="w-full max-w-2xl">
      <form role="search" action={localizza('/viaggi', lingua)} method="get" onSubmit={invia}>
        <label htmlFor={`${id}-q`} className="block text-xs font-semibold uppercase tracking-[0.2em] text-cream [text-shadow:0_1px_8px_rgb(0_0_0/0.6)]">
          {t.label}
        </label>
        <div className="mt-2 flex">
          <input
            ref={inputRef}
            id={`${id}-q`}
            name="q"
            type="search"
            enterKeyHint="search"
            autoComplete="off"
            placeholder={t.placeholder}
            className="h-12 min-w-0 flex-1 rounded-none border-2 border-r-0 border-ink bg-cream px-4 text-base text-ink placeholder:text-stone/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          />
          <button
            type="submit"
            className={`inline-flex h-12 shrink-0 items-center gap-2 border-2 border-ink bg-rosso px-5 text-[0.95rem] font-semibold text-cream transition-colors duration-150 hover:bg-rosso-dark ${FOCUS}`}
          >
            <Search size={16} aria-hidden="true" />
            <span className="max-[359px]:sr-only">{t.cerca}</span>
          </button>
        </div>
      </form>

      {/* Durata: una riga sola; sul telefono scorre in orizzontale invece di andare a capo */}
      <ul
        aria-label={t.quanto}
        className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {DURATE.map((d) => (
          <li key={d} className="shrink-0">
            <Link href={`/viaggi?durata=${encodeURIComponent(d)}`} className={CHIP}>
              {t.durate[d]}
            </Link>
          </li>
        ))}
      </ul>

      {/* «Quando andare» e «Interessi»: due tendine, una aperta alla volta */}
      <div className="mt-1 flex flex-wrap items-center gap-x-5">
        {(['quando', 'interessi'] as const).map((quale) => (
          <button
            key={quale}
            type="button"
            aria-expanded={aperto === quale}
            aria-controls={`${id}-${quale}`}
            onClick={() => apri(quale)}
            className={TOGGLE}
          >
            {t[quale]}
            <ChevronDown size={16} aria-hidden="true" className={`transition-transform duration-150 motion-reduce:transition-none ${aperto === quale ? 'rotate-180' : ''}`} />
          </button>
        ))}
      </div>
      <ul id={`${id}-quando`} hidden={aperto !== 'quando'} aria-label={t.quando} className="mt-1 grid grid-cols-6 gap-1.5 sm:grid-cols-12">
        {MESI.map((m) => (
          <li key={m}>
            <Link href={`/viaggi?quando=${m}`} aria-label={t.quandoMese(NOMI_MESI[lingua][m - 1])} className={MESE}>
              {MESI_BREVI[lingua][m - 1]}
            </Link>
          </li>
        ))}
      </ul>
      <ul id={`${id}-interessi`} hidden={aperto !== 'interessi'} aria-label={t.interessi} className="mt-1 flex flex-wrap gap-2">
        {STILI.map((s) => (
          <li key={s}>
            <Link href={`/viaggi?stile=${encodeURIComponent(s)}`} className={CHIP}>
              {t.stili[s]}
            </Link>
          </li>
        ))}
      </ul>

      {/* le quattro porte del sito: trovare un viaggio, le destinazioni, la mappa, le meraviglie */}
      <nav aria-label={t.porte} className="mt-2 border-t border-cream/25 pt-1">
        <ul className="flex flex-wrap items-center gap-x-5">
          <li>
            <Link href="/viaggi" className={LINK}>
              {t.tutti} →
            </Link>
          </li>
          <li>
            <Link href="/destinazioni" className={LINK}>
              {t.paese}
            </Link>
          </li>
          <li>
            {/* la mappa è più giù nella stessa pagina */}
            <a href="#mondo-titolo" className={LINK}>
              {t.mappa}
            </a>
          </li>
          <li>
            <Link href="/meraviglie" className={LINK}>
              {t.meraviglie}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
