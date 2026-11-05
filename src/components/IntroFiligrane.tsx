'use client'

import { useEffect, useMemo, useState } from 'react'
import { Marchio } from '@/components/Marchio'

/*
 * Apertura del sito ispirata a Franco Maria Ricci: una griglia di riquadri con le filigrane
 * dei Paesi che si alternano, e al centro il marchio. Dura circa 2,5 secondi, poi sfuma sul
 * sito. Solo alla prima visita della sessione; un clic o Esc la saltano; con «riduci
 * movimento» non parte. `?intro=colore` o `?intro=bn` la forzano per provarla.
 */

const DURATA = 2600
const SFUMATURA = 600

export function IntroFiligrane({ immagini, variante = 'colore' }: { immagini: string[]; variante?: 'colore' | 'bn' }) {
  const [stato, setStato] = useState<'nascosta' | 'visibile' | 'esce'>('nascosta')
  const [scelta, setScelta] = useState(variante)
  const [celle, setCelle] = useState<number[]>([])
  const [colonne, setColonne] = useState(8)
  const [pronta, setPronta] = useState(false)

  // quante celle servono per riempire lo schermo
  useEffect(() => {
    const q = new URLSearchParams(location.search).get('intro')
    const forzata = q === 'colore' || q === 'bn'
    if (forzata) setScelta(q)
    let gia = false
    try {
      gia = sessionStorage.getItem('intro-vista') === '1'
    } catch {}
    const ridotto = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!forzata && (gia || ridotto)) return
    const lato = innerWidth < 640 ? 92 : 128
    const c = Math.ceil(innerWidth / lato)
    const r = Math.ceil(innerHeight / lato)
    setColonne(c)
    const iniziali = Array.from({ length: c * r }, () => Math.floor(Math.random() * immagini.length))
    setCelle(iniziali)
    setStato('visibile')
    // il conto parte quando le miniature sono arrivate (al massimo dopo 1,5 s), così nessun riquadro resta vuoto
    const carica = (src: string) =>
      new Promise<void>((ok) => {
        const im = new Image()
        im.onload = im.onerror = () => ok()
        im.src = src
      })
    const attesa = setTimeout(() => setPronta(true), 1500)
    Promise.all(immagini.map(carica)).then(() => {
      clearTimeout(attesa)
      setPronta(true)
    })
    try {
      sessionStorage.setItem('intro-vista', '1')
    } catch {}
  }, [immagini.length])

  // le filigrane cambiano a caso, poche celle alla volta
  useEffect(() => {
    if (stato !== 'visibile' || !celle.length || !pronta) return
    const giro = setInterval(() => {
      setCelle((prima) => {
        const dopo = [...prima]
        for (let k = 0; k < Math.max(2, Math.round(prima.length / 12)); k++) {
          dopo[Math.floor(Math.random() * dopo.length)] = Math.floor(Math.random() * immagini.length)
        }
        return dopo
      })
    }, 140)
    const fine = setTimeout(() => setStato('esce'), DURATA)
    return () => {
      clearInterval(giro)
      clearTimeout(fine)
    }
  }, [stato, celle.length, immagini.length, pronta])

  useEffect(() => {
    if (stato !== 'esce') return
    const t = setTimeout(() => setStato('nascosta'), SFUMATURA)
    return () => clearTimeout(t)
  }, [stato])

  useEffect(() => {
    if (stato === 'nascosta') return
    const esci = (e: KeyboardEvent) => e.key === 'Escape' && setStato('esce')
    addEventListener('keydown', esci)
    return () => removeEventListener('keydown', esci)
  }, [stato])

  const filtro = useMemo(() => (scelta === 'bn' ? 'grayscale(1) contrast(2.4) brightness(0.72)' : 'saturate(1.5) contrast(1.35) brightness(0.92)'), [scelta])

  if (stato === 'nascosta') return null
  return (
    <div
      aria-hidden="true"
      onClick={() => setStato('esce')}
      className="fixed inset-0 z-[100] cursor-pointer overflow-hidden bg-[#fbf8f2] transition-opacity ease-out"
      style={{ opacity: stato === 'esce' ? 0 : 1, transitionDuration: `${SFUMATURA}ms` }}
    >
      <div className="grid h-full w-full" style={{ gridTemplateColumns: `repeat(${colonne}, minmax(0, 1fr))` }}>
        {celle.map((i, k) => (
          <div key={k} className="flex aspect-square items-center justify-center border-[0.5px] border-ink/10 p-[14%]">
            {/* eslint-disable-next-line @next/next/no-img-element -- miniature già piccole, niente ottimizzazione */}
            <img src={immagini[i]} alt="" className="h-full w-full object-contain transition-opacity duration-300" style={{ filter: filtro, opacity: pronta ? 1 : 0 }} decoding="async" />
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
