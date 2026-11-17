'use client'

import { Suspense, useEffect, useId, useMemo, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, RotateCcw } from 'lucide-react'
import Link from '@/components/ui/Link'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import type { Lingua } from '@/lib/i18n/config'
import { NOMI_MESI } from '@/lib/viaggi-filtri-stato'
import {
  BUDGET,
  COMPAGNIE,
  DISTANZE,
  DURATE,
  INTERESSI,
  NOMI_INTERESSI,
  PASSI,
  RISPOSTE_VUOTE,
  leggiRisposte,
  linkArchivio,
  migliori,
  perche,
  primoPassoAperto,
  rispostaData,
  scriviRisposte,
  type Interesse,
  type Passo,
  type Risposte,
  type ViaggioQuiz,
} from '@/lib/dove-vado'

const T = {
  it: {
    passo: (n: number, tot: number) => `Passo ${n} di ${tot}`,
    domande: {
      quando: 'Quando parti?',
      durata: 'Quanto tempo hai?',
      budget: 'Quanto vuoi spendere al giorno?',
      ama: 'Cosa ami in un viaggio?',
      con: 'Con chi viaggi?',
      dove: 'Quanto lontano?',
    },
    aiuti: {
      quando: 'Il mese in cui pensi di partire.',
      durata: 'Giorni sul posto, voli esclusi.',
      budget: 'Alloggio, cibo e spostamenti sul posto, a persona.',
      ama: 'Scegline quanti vuoi, poi vai avanti.',
      con: 'Serve a mettere in alto i viaggi pensati per voi.',
      dove: 'Europa, oppure un volo lungo.',
    },
    flessibile: 'Sono flessibile',
    durate: { weekend: 'Weekend', '4-7': '4-7 giorni', '8-14': '8-14 giorni', '15+': '15 giorni o più' },
    budget: { basso: 'Basso', medio: 'Medio', alto: 'Alto' },
    budgetNote: { basso: 'Ostelli, street food, mezzi pubblici', medio: 'Hotel buoni, qualche cena fuori', alto: 'Belle strutture, nessuna rinuncia' },
    con: { solo: 'Da solo', coppia: 'In coppia', amici: 'Con amici', famiglia: 'In famiglia' },
    dove: { europa: 'In Europa', lontano: 'Lontano', ovunque: 'Non importa' },
    interessi: { mare: 'Mare', cultura: 'Cultura', natura: 'Natura', avventura: 'Avventura', cibo: 'Cibo', citta: 'Città', neve: 'Neve' },
    avanti: 'Avanti',
    indietro: 'Indietro',
    risultati: 'I viaggi che fanno per te',
    risultatiLead: (n: number) => `${n} itinerari scelti tra quelli dell'archivio in base alle tue risposte. Il link di questa pagina conserva le risposte: puoi condividerlo.`,
    leTueRisposte: 'Le tue risposte',
    modifica: (d: string) => `Modifica: ${d}`,
    perche: 'Perché',
    leggi: "Leggi l'itinerario",
    rifai: 'Rifai il quiz',
    archivio: 'Vedi tutti i viaggi filtrati',
    nessunMotivo: 'Il più vicino alle tue risposte',
  },
  en: {
    passo: (n: number, tot: number) => `Step ${n} of ${tot}`,
    domande: {
      quando: 'When are you leaving?',
      durata: 'How much time do you have?',
      budget: 'What’s your daily budget?',
      ama: 'What do you love on a trip?',
      con: 'Who are you travelling with?',
      dove: 'How far?',
    },
    aiuti: {
      quando: 'The month you’re thinking of going.',
      durata: 'Days on the ground, flights excluded.',
      budget: 'Accommodation, food and getting around, per person.',
      ama: 'Pick as many as you like, then continue.',
      con: 'It puts the trips made for you at the top.',
      dove: 'Europe, or a long-haul flight.',
    },
    flessibile: 'I’m flexible',
    durate: { weekend: 'Weekend', '4-7': '4–7 days', '8-14': '8–14 days', '15+': '15 days or more' },
    budget: { basso: 'Low', medio: 'Mid', alto: 'High' },
    budgetNote: { basso: 'Hostels, street food, public transport', medio: 'Good hotels, a few dinners out', alto: 'Nice places, no compromises' },
    con: { solo: 'Solo', coppia: 'As a couple', amici: 'With friends', famiglia: 'With family' },
    dove: { europa: 'In Europe', lontano: 'Long-haul', ovunque: 'Doesn’t matter' },
    interessi: { mare: 'Sea', cultura: 'Culture', natura: 'Nature', avventura: 'Adventure', cibo: 'Food', citta: 'Cities', neve: 'Snow' },
    avanti: 'Continue',
    indietro: 'Back',
    risultati: 'The trips for you',
    risultatiLead: (n: number) => `${n} itineraries picked from the archive based on your answers. This page’s link keeps your answers, so you can share it.`,
    leTueRisposte: 'Your answers',
    modifica: (d: string) => `Change: ${d}`,
    perche: 'Why',
    leggi: 'Read the itinerary',
    rifai: 'Start over',
    archivio: 'See all matching trips',
    nessunMotivo: 'The closest match to your answers',
  },
  es: {
    passo: (n: number, tot: number) => `Paso ${n} de ${tot}`,
    domande: {
      quando: '¿Cuándo sales?',
      durata: '¿Cuánto tiempo tienes?',
      budget: '¿Cuánto quieres gastar al día?',
      ama: '¿Qué te gusta en un viaje?',
      con: '¿Con quién viajas?',
      dove: '¿Cómo de lejos?',
    },
    aiuti: {
      quando: 'El mes en que piensas salir.',
      durata: 'Días en destino, sin contar los vuelos.',
      budget: 'Alojamiento, comida y transporte en destino, por persona.',
      ama: 'Elige todos los que quieras y sigue.',
      con: 'Sirve para poner arriba los viajes pensados para vosotros.',
      dove: 'Europa, o un vuelo largo.',
    },
    flessibile: 'Soy flexible',
    durate: { weekend: 'Fin de semana', '4-7': '4-7 días', '8-14': '8-14 días', '15+': '15 días o más' },
    budget: { basso: 'Bajo', medio: 'Medio', alto: 'Alto' },
    budgetNote: { basso: 'Albergues, comida callejera, transporte público', medio: 'Buenos hoteles, alguna cena fuera', alto: 'Buenos alojamientos, sin renuncias' },
    con: { solo: 'Solo', coppia: 'En pareja', amici: 'Con amigos', famiglia: 'En familia' },
    dove: { europa: 'En Europa', lontano: 'Lejos', ovunque: 'Me da igual' },
    interessi: { mare: 'Mar', cultura: 'Cultura', natura: 'Naturaleza', avventura: 'Aventura', cibo: 'Comida', citta: 'Ciudad', neve: 'Nieve' },
    avanti: 'Siguiente',
    indietro: 'Atrás',
    risultati: 'Los viajes para ti',
    risultatiLead: (n: number) => `${n} itinerarios elegidos del archivo según tus respuestas. El enlace de esta página guarda tus respuestas: puedes compartirlo.`,
    leTueRisposte: 'Tus respuestas',
    modifica: (d: string) => `Cambiar: ${d}`,
    perche: 'Por qué',
    leggi: 'Lee el itinerario',
    rifai: 'Repetir el test',
    archivio: 'Ver todos los viajes filtrados',
    nessunMotivo: 'El más cercano a tus respuestas',
  },
} satisfies Record<Lingua, unknown>

const maiuscola = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const MESI = Array.from({ length: 12 }, (_, i) => i + 1)

/** Scelta grande: bordo nero 2 px, selezionata piena di nero con l'ombra rossa della scheda. */
const SCELTA =
  'flex min-h-16 w-full items-center justify-between gap-3 border-2 border-ink bg-white px-4 py-3 text-left text-base font-semibold text-ink transition-[background-color,color,box-shadow] duration-[var(--dur-micro)] hover:bg-cream-dark aria-pressed:bg-ink aria-pressed:text-cream aria-pressed:shadow-[4px_4px_0_var(--color-rosso)] sm:min-h-20 sm:text-lg'

/** Il quiz legge le risposte dall'URL: senza Suspense la pagina statica non si potrebbe prerenderizzare. */
export function DoveVadoQuiz({ viaggi }: { viaggi: ViaggioQuiz[] }) {
  return (
    <Suspense fallback={<Quiz viaggi={viaggi} iniziali={RISPOSTE_VUOTE} />}>
      <QuizDaUrl viaggi={viaggi} />
    </Suspense>
  )
}

function QuizDaUrl({ viaggi }: { viaggi: ViaggioQuiz[] }) {
  const params = useSearchParams()
  // le risposte dell'URL servono solo all'apertura: dopo comanda lo stato, che riscrive l'URL
  const [iniziali] = useState(() => leggiRisposte(params))
  return <Quiz viaggi={viaggi} iniziali={iniziali} sincronizza />
}

function Quiz({ viaggi, iniziali, sincronizza = false }: { viaggi: ViaggioQuiz[]; iniziali: Risposte; sincronizza?: boolean }) {
  const lingua = useLingua()
  const t = T[lingua]
  const id = useId()
  const router = useRouter()
  const [r, setR] = useState<Risposte>(iniziali)
  const [passo, setPasso] = useState<Passo | null>(() => primoPassoAperto(iniziali))
  const titoloRef = useRef<HTMLHeadingElement>(null)
  const primoRender = useRef(true)

  // URL condivisibile: ogni risposta finisce nella query string (replace, il tasto Indietro non si riempie)
  useEffect(() => {
    if (!sincronizza) return
    const qs = scriviRisposte(r)
    const url = `${window.location.pathname}${qs ? `?${qs}` : ''}`
    if (url !== `${window.location.pathname}${window.location.search}`) router.replace(url, { scroll: false })
  }, [r, router, sincronizza])

  // a ogni cambio di passo il fuoco va sulla domanda nuova (o sul titolo dei risultati)
  useEffect(() => {
    if (primoRender.current) {
      primoRender.current = false
      return
    }
    titoloRef.current?.focus({ preventScroll: true })
    titoloRef.current?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }, [passo])

  const indice = passo ? PASSI.indexOf(passo) : PASSI.length

  function rispondi(nuove: Partial<Risposte>, avanza = true) {
    const prossime = { ...r, ...nuove }
    setR(prossime)
    if (!avanza || !passo) return
    const dopo = PASSI.slice(PASSI.indexOf(passo) + 1).find((p) => !rispostaData(prossime, p))
    setPasso(dopo ?? primoPassoAperto(prossime))
  }

  function indietro() {
    if (indice > 0) setPasso(PASSI[indice - 1])
  }

  function ricomincia() {
    setR(RISPOSTE_VUOTE)
    setPasso('quando')
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* avanzamento: sei tacche, quelle fatte in nero, quella attuale in rosso */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone" aria-live="polite">
          {passo ? t.passo(indice + 1, PASSI.length) : t.passo(PASSI.length, PASSI.length)}
        </p>
        {passo && indice > 0 && (
          <button type="button" onClick={indietro} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink underline decoration-rosso decoration-2 underline-offset-4">
            <ArrowLeft size={16} aria-hidden="true" />
            {t.indietro}
          </button>
        )}
      </div>
      <ol className="mt-3 grid grid-cols-6 gap-1.5" aria-hidden="true">
        {PASSI.map((p, i) => (
          <li key={p} className={`h-1.5 ${i < indice ? 'bg-ink' : i === indice ? 'bg-rosso' : 'bg-ink/15'}`} />
        ))}
      </ol>

      {passo ? (
        <fieldset className="mt-8 min-w-0" aria-describedby={`${id}-aiuto`}>
          <legend className="contents">
            <h2 ref={titoloRef} tabIndex={-1} className="titolo-sezione scroll-mt-24 text-alpine focus:outline-none">
              {t.domande[passo]}
            </h2>
          </legend>
          <p id={`${id}-aiuto`} className="mt-3 text-base text-stone">
            {t.aiuti[passo]}
          </p>
          <div className="mt-6">
            <Scelte passo={passo} r={r} lingua={lingua} rispondi={rispondi} />
          </div>
        </fieldset>
      ) : (
        <Risultati viaggi={viaggi} r={r} lingua={lingua} titoloRef={titoloRef} vai={setPasso} ricomincia={ricomincia} />
      )}
    </div>
  )
}

function Scelte({ passo, r, lingua, rispondi }: { passo: Passo; r: Risposte; lingua: Lingua; rispondi: (n: Partial<Risposte>, avanza?: boolean) => void }) {
  const t = T[lingua]
  const segno = (attivo: boolean) => (attivo ? <Check size={20} aria-hidden="true" className="shrink-0" /> : null)

  if (passo === 'quando') {
    return (
      <div className="grid gap-2">
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {MESI.map((m) => {
            const nome = NOMI_MESI[lingua][m - 1]
            const attivo = r.quando === String(m)
            return (
              <li key={m}>
                <button type="button" aria-pressed={attivo} onClick={() => rispondi({ quando: String(m) })} className={`${SCELTA} justify-center capitalize`}>
                  {nome}
                </button>
              </li>
            )
          })}
        </ul>
        <button type="button" aria-pressed={r.quando === 'flessibile'} onClick={() => rispondi({ quando: 'flessibile' })} className={SCELTA}>
          {t.flessibile}
          {segno(r.quando === 'flessibile')}
        </button>
      </div>
    )
  }

  if (passo === 'ama') {
    const cambia = (i: Interesse) => rispondi({ ama: r.ama.includes(i) ? r.ama.filter((x) => x !== i) : [...r.ama, i] }, false)
    return (
      <>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {INTERESSI.map((i) => (
            <li key={i}>
              <button type="button" aria-pressed={r.ama.includes(i)} onClick={() => cambia(i)} className={SCELTA}>
                {t.interessi[i]}
                {segno(r.ama.includes(i))}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          disabled={r.ama.length === 0}
          onClick={() => rispondi({}, true)}
          className="btn btn-primario mt-6 w-full disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto"
        >
          {t.avanti}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </>
    )
  }

  const opzioni: { valore: string; etichetta: string; nota?: string }[] =
    passo === 'durata'
      ? DURATE.map((d) => ({ valore: d, etichetta: t.durate[d] }))
      : passo === 'budget'
        ? BUDGET.map((b) => ({ valore: b, etichetta: t.budget[b], nota: t.budgetNote[b] }))
        : passo === 'con'
          ? COMPAGNIE.map((c) => ({ valore: c, etichetta: t.con[c] }))
          : DISTANZE.map((d) => ({ valore: d, etichetta: t.dove[d] }))

  return (
    <ul className={`grid gap-2 ${opzioni.length === 4 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'}`}>
      {opzioni.map((o) => {
        const attivo = r[passo] === o.valore
        return (
          <li key={o.valore}>
            <button type="button" aria-pressed={attivo} onClick={() => rispondi({ [passo]: o.valore } as Partial<Risposte>)} className={`${SCELTA} h-full`}>
              <span>
                {o.etichetta}
                {o.nota && <span className="mt-1 block text-sm font-normal opacity-80">{o.nota}</span>}
              </span>
              {segno(attivo)}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

function Risultati({
  viaggi,
  r,
  lingua,
  titoloRef,
  vai,
  ricomincia,
}: {
  viaggi: ViaggioQuiz[]
  r: Risposte
  lingua: Lingua
  titoloRef: React.RefObject<HTMLHeadingElement | null>
  vai: (p: Passo) => void
  ricomincia: () => void
}) {
  const t = T[lingua]
  const scelti = useMemo(() => migliori(viaggi, r), [viaggi, r])
  const valore = (p: Passo): string => {
    switch (p) {
      case 'quando':
        return r.quando === 'flessibile' ? t.flessibile : NOMI_MESI[lingua][Number(r.quando) - 1]
      case 'durata':
        return r.durata ? t.durate[r.durata] : ''
      case 'budget':
        return r.budget ? t.budget[r.budget] : ''
      case 'ama':
        return r.ama.map((i) => NOMI_INTERESSI[lingua][i]).join(', ')
      case 'con':
        return r.con ? t.con[r.con] : ''
      case 'dove':
        return r.dove ? t.dove[r.dove] : ''
    }
  }

  return (
    <section className="mt-8" aria-labelledby="dove-vado-risultati">
      <h2 id="dove-vado-risultati" ref={titoloRef} tabIndex={-1} className="titolo-sezione scroll-mt-24 text-alpine focus:outline-none">
        {t.risultati}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone">{t.risultatiLead(scelti.length)}</p>

      <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-stone">{t.leTueRisposte}</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {PASSI.map((p) => (
          <li key={p}>
            <button type="button" onClick={() => vai(p)} aria-label={t.modifica(t.domande[p])} className="chip">
              {maiuscola(valore(p))}
            </button>
          </li>
        ))}
      </ul>

      <ol className="mt-8 grid gap-6 sm:grid-cols-2">
        {scelti.map(({ viaggio, motivi }, i) => (
          <li key={viaggio.slug} className="flex">
            <Link
              href={`/viaggi/${viaggio.slug}`}
              className={`group flex w-full flex-col overflow-hidden ${i === 0 ? 'scheda scheda-link bg-white' : 'scheda-lista'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine focus-visible:ring-offset-2`}
            >
              <div className="relative flex min-h-[9rem] items-end bg-alpine p-5 text-cream">
                {viaggio.copertina && (
                  <>
                    <Image
                      src={viaggio.copertina.immagine}
                      alt={viaggio.copertina.imageAlt}
                      fill
                      sizes="(min-width: 640px) 24rem, calc(100vw - 2rem)"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                  </>
                )}
                {viaggio.luogo && (
                  <p className="relative z-10 bg-ink/80 px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream">{viaggio.luogo}</p>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="titolo-scheda text-alpine">{viaggio.titolo}</h3>
                <p className="text-sm leading-relaxed text-ink">
                  <span className="font-semibold text-rosso">{t.perche}: </span>
                  {perche(motivi, lingua) || t.nessunMotivo}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-rosso">
                  {t.leggi}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href={linkArchivio(r)} className="btn btn-primario">
          {t.archivio}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <button type="button" onClick={ricomincia} className="btn btn-secondario bg-white">
          <RotateCcw size={16} aria-hidden="true" />
          {t.rifai}
        </button>
      </div>
    </section>
  )
}
