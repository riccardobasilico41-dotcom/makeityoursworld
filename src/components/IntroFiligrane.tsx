'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { Marchio } from '@/components/Marchio'

/*
 * Apertura del sito ispirata a Franco Maria Ricci: una griglia di riquadri con le filigrane
 * dei Paesi che si alternano, e al centro il marchio.
 *
 * Arriva già nell'HTML del server, quindi è la prima cosa che si vede: copre il sito mentre
 * carica e sfuma appena la pagina è pronta (al massimo ~3,5 s). Uno script in
 * linea, eseguito prima che il browser disegni, la nasconde subito se è già stata vista nella
 * sessione o con «riduci movimento», così il sito non lampeggia. `?intro=colore|bn` la forza.
 */

// nessuna attesa minima: l'apertura copre solo il caricamento vero e sparisce appena la pagina è pronta
const MINIMO = 0
const MASSIMO = 3500
const SFUMATURA = 500
const CELLE = 160 // abbastanza per coprire uno schermo grande; quelle in più restano fuori vista

const FILTRI = {
  colore: 'saturate(1.5) contrast(1.35) brightness(0.92)',
  bn: 'grayscale(1) contrast(2.4) brightness(0.72)',
}


function daSaltare() {
  try {
    const q = new URLSearchParams(location.search).get('intro')
    const forzata = q === 'colore' || q === 'bn'
    const vista = sessionStorage.getItem('intro-vista') === '1'
    const ridotto = matchMedia('(prefers-reduced-motion: reduce)').matches
    return { salta: !forzata && (vista || ridotto), variante: forzata ? (q as 'colore' | 'bn') : null }
  } catch {
    return { salta: false, variante: null }
  }
}

const nessunaIscrizione = () => () => {}

/**
 * Le 160 celle non sono <img> ma sfondi CSS: una classe per filigrana, definita una volta sola.
 * Prima ogni pagina aveva 160 <img> nel DOM (e ~40 KB di HTML) anche quando l'apertura non
 * parte; uno sfondo dentro un elemento con display:none non viene scaricato.
 */
function stile(immagini: string[]) {
  return (
    '.if-c{display:flex;aspect-ratio:1/1;align-items:center;justify-content:center;border:.5px solid color-mix(in oklab,var(--color-ink) 10%,transparent);padding:14%}' +
    '.if-c>span{display:block;width:100%;height:100%;background-position:center;background-size:contain;background-repeat:no-repeat}' +
    (Object.keys(FILTRI) as (keyof typeof FILTRI)[]).map((v) => `#intro-filigrane[data-v=${v}] .if-c>span{filter:${FILTRI[v]}}`).join('') +
    immagini.map((src, i) => `.if-${i}{background-image:url(${JSON.stringify(src)})}`).join('')
  )
}

export function IntroFiligrane({ immagini, variante = 'colore' }: { immagini: string[]; variante?: 'colore' | 'bn' }) {
  const [stato, setStato] = useState<'visibile' | 'esce' | 'nascosta'>('visibile')
  // variante forzata con ?intro=colore|bn: letta dall'URL nel browser (sul server e nell'idratazione vale la prop)
  const forzataUrl = useSyncExternalStore(nessunaIscrizione, () => daSaltare().variante, () => null)
  const scelta = forzataUrl ?? variante
  // disposizione iniziale fissa (uguale su server e browser), poi cambia a caso
  const [celle, setCelle] = useState(() => Array.from({ length: CELLE }, (_, k) => (k * 7) % immagini.length))

  useEffect(() => {
    const { salta } = daSaltare()
    if (salta) {
      // lo script in linea l'ha già nascosta prima del primo disegno: qui si toglie solo dal DOM,
      // in un callback (niente setState sincrono nell'effetto, regola react-hooks/set-state-in-effect)
      const via = setTimeout(() => setStato('nascosta'), 0)
      return () => clearTimeout(via)
    }
    try {
      sessionStorage.setItem('intro-vista', '1')
    } catch {}

    const giro = setInterval(() => {
      setCelle((prima) => {
        const dopo = [...prima]
        for (let k = 0; k < 12; k++) dopo[Math.floor(Math.random() * dopo.length)] = Math.floor(Math.random() * immagini.length)
        return dopo
      })
    }, 140)

    // esce quando la pagina ha finito di caricare, ma non prima del minimo e mai oltre il massimo;
    // i tempi contano da quando è arrivato l'HTML, cioè da quando l'apertura è sullo schermo
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    const inizio = nav?.responseStart ?? 0
    const trascorso = () => performance.now() - inizio
    let fatto = false
    const esci = () => {
      if (fatto) return
      fatto = true
      setStato('esce')
    }
    let attesa: ReturnType<typeof setTimeout> | undefined
    const quandoPronta = () => {
      attesa = setTimeout(esci, Math.max(0, MINIMO - trascorso()))
    }
    if (document.readyState === 'complete') quandoPronta()
    else addEventListener('load', quandoPronta, { once: true })
    const limite = setTimeout(esci, Math.max(0, MASSIMO - trascorso()))
    const tasto = (e: KeyboardEvent) => e.key === 'Escape' && esci()
    addEventListener('keydown', tasto)

    return () => {
      clearInterval(giro)
      clearTimeout(limite)
      clearTimeout(attesa)
      removeEventListener('load', quandoPronta)
      removeEventListener('keydown', tasto)
    }
  }, [immagini.length])

  // ferma il giro delle filigrane appena inizia la sfumatura, poi toglie tutto
  useEffect(() => {
    if (stato !== 'esce') return
    const t = setTimeout(() => setStato('nascosta'), SFUMATURA)
    return () => clearTimeout(t)
  }, [stato])

  if (stato === 'nascosta') return null
  return (
      <div
        id="intro-filigrane"
        data-v={scelta}
        aria-hidden="true"
        suppressHydrationWarning
        onClick={() => setStato('esce')}
        className="intro-filigrane fixed inset-0 z-[100] cursor-pointer overflow-hidden bg-[#fbf8f2] transition-opacity ease-out"
        style={{ opacity: stato === 'esce' ? 0 : 1, transitionDuration: `${SFUMATURA}ms`, pointerEvents: stato === 'esce' ? 'none' : undefined }}
      >
        <style>{stile(immagini)}</style>
        <div className="grid h-full w-full grid-cols-[repeat(auto-fill,minmax(92px,1fr))] content-start sm:grid-cols-[repeat(auto-fill,minmax(128px,1fr))]">
          {/* niente <img> né preload: con l'apertura già nascosta (display:none) le filigrane non si scaricano */}
          {celle.map((i, k) => (
            <div key={k} className="if-c">
              <span className={`if-${i}`} />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
          <div className="border-2 border-ink bg-[#fbf8f2] px-8 py-6 text-center shadow-[8px_8px_0_var(--color-ink)] sm:px-14 sm:py-9">
            <p className="text-[clamp(1.9rem,6vw,4.5rem)] leading-none text-ink">
              <Marchio />
            </p>
          </div>
        </div>
      </div>
  )
}
