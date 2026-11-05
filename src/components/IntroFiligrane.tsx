'use client'

import { useEffect, useState } from 'react'
import { Marchio } from '@/components/Marchio'

/*
 * Apertura del sito ispirata a Franco Maria Ricci: una griglia di riquadri con le filigrane
 * dei Paesi che si alternano, e al centro il marchio.
 *
 * Arriva già nell'HTML del server, quindi è la prima cosa che si vede: copre il sito mentre
 * carica e sfuma quando la pagina è pronta (minimo ~1,2 s, massimo ~3,5 s). Uno script in
 * linea, eseguito prima che il browser disegni, la nasconde subito se è già stata vista nella
 * sessione o con «riduci movimento», così il sito non lampeggia. `?intro=colore|bn` la forza.
 */

const MINIMO = 1200
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

export function IntroFiligrane({ immagini, variante = 'colore' }: { immagini: string[]; variante?: 'colore' | 'bn' }) {
  const [stato, setStato] = useState<'visibile' | 'esce' | 'nascosta'>('visibile')
  const [scelta, setScelta] = useState(variante)
  // disposizione iniziale fissa (uguale su server e browser), poi cambia a caso
  const [celle, setCelle] = useState(() => Array.from({ length: CELLE }, (_, k) => (k * 7) % immagini.length))

  useEffect(() => {
    const { salta, variante: forzata } = daSaltare()
    if (salta) {
      setStato('nascosta')
      return
    }
    if (forzata) setScelta(forzata)
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
        aria-hidden="true"
        suppressHydrationWarning
        onClick={() => setStato('esce')}
        className="intro-filigrane fixed inset-0 z-[100] cursor-pointer overflow-hidden bg-[#fbf8f2] transition-opacity ease-out"
        style={{ opacity: stato === 'esce' ? 0 : 1, transitionDuration: `${SFUMATURA}ms`, pointerEvents: stato === 'esce' ? 'none' : undefined }}
      >
        <div className="grid h-full w-full grid-cols-[repeat(auto-fill,minmax(92px,1fr))] content-start sm:grid-cols-[repeat(auto-fill,minmax(128px,1fr))]">
          {celle.map((i, k) => (
            <div key={k} className="flex aspect-square items-center justify-center border-[0.5px] border-ink/10 p-[14%]">
              {/* eslint-disable-next-line @next/next/no-img-element -- miniature da pochi KB, niente ottimizzazione */}
              <img src={immagini[i]} alt="" width={96} height={96} className="h-full w-full object-contain" style={{ filter: FILTRI[scelta] }} />
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
