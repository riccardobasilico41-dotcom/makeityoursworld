'use client'

import dynamic from 'next/dynamic'
import { Component, useEffect, useRef, useState, type ReactNode } from 'react'
import { GloboDestinazioniSvg, type PaeseGlobo, type PinGlobo } from './GloboDestinazioniSvg'

export type { PaeseGlobo, PinGlobo }

// three.js + React Three Fiber stanno in un chunk a parte, scaricato solo quando la sezione
// si avvicina alla viewport (vedi IntersectionObserver sotto)
const Globo3D = dynamic(() => import('./Globo3D'), { ssr: false, loading: () => null })

/** Se il 3D si rompe (shader, contesto perso…) si torna al globo SVG. */
class Paracadute extends Component<{ onErrore: () => void; children: ReactNode }, { rotto: boolean }> {
  state = { rotto: false }
  static getDerivedStateFromError() {
    return { rotto: true }
  }
  componentDidCatch() {
    this.props.onErrore()
  }
  render() {
    return this.state.rotto ? null : this.props.children
  }
}

function webglDisponibile() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

/** Telefoni piccoli e con pochi core: meglio il globo SVG, più leggero. */
function pocaPotenza() {
  const core = navigator.hardwareConcurrency || 8
  const risparmio = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true
  return risparmio || (core <= 4 && window.innerWidth < 768)
}

/**
 * Globo delle destinazioni. Primo render (anche sul server) e stato di caricamento: il globo
 * SVG. Nel browser, se c'è WebGL, niente prefers-reduced-motion e il dispositivo regge, quando
 * la sezione entra in vista carica il globo 3D (Globo3D.tsx) e ci sfuma sopra. Se il 3D va a
 * scatti o si rompe, resta l'SVG.
 */
export function GloboDestinazioni({ paesi, pins }: { paesi: PaeseGlobo[]; pins: PinGlobo[] }) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [modo, setModo] = useState<'svg' | '3d'>('svg')
  const [carica, setCarica] = useState(false)
  const [pronto, setPronto] = useState(false)
  const [svgVia, setSvgVia] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const decidi = () => setModo(!mq.matches && webglDisponibile() && !pocaPotenza() ? '3d' : 'svg')
    decidi()
    mq.addEventListener('change', decidi)
    return () => mq.removeEventListener('change', decidi)
  }, [])

  useEffect(() => {
    if (modo !== '3d' || carica || !boxRef.current) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setCarica(true)
          io.disconnect()
        }
      },
      { rootMargin: '400px 0px' },
    )
    io.observe(boxRef.current)
    return () => io.disconnect()
  }, [modo, carica])

  // tolta la dissolvenza, l'SVG esce dal DOM (e smette di animarsi)
  useEffect(() => {
    if (!pronto || modo !== '3d') return
    const t = setTimeout(() => setSvgVia(true), 700)
    return () => clearTimeout(t)
  }, [pronto, modo])

  const usa3d = modo === '3d' && carica
  const ripiega = () => {
    setPronto(false)
    setSvgVia(false)
    setModo('svg')
  }

  return (
    <div
      ref={boxRef}
      className="relative mx-auto h-[var(--globo-h)] w-full max-w-[1600px] [--globo-h:min(100vw,560px)] sm:[--globo-h:min(70vw,84vh,820px)]"
    >
      {!(usa3d && svgVia) && (
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
          style={{ opacity: usa3d && pronto ? 0 : 1 }}
          aria-hidden={usa3d && pronto ? true : undefined}
        >
          <GloboDestinazioniSvg
            paesi={paesi}
            pins={pins}
            tema="scuro"
            className="relative mx-auto w-full max-w-[min(64rem,calc(var(--globo-h)*1.3889))]"
          />
        </div>
      )}
      {usa3d && (
        <Paracadute onErrore={ripiega}>
          <div className="absolute inset-0 transition-opacity duration-700" style={{ opacity: pronto ? 1 : 0 }}>
            <Globo3D pins={pins} onPronto={() => setPronto(true)} onLento={ripiega} />
          </div>
        </Paracadute>
      )}
    </div>
  )
}
