'use client'

import { useEffect, type RefObject } from 'react'

/*
 * Avvio «educato» dei video di sfondo (hero della Home, testate di viaggi e meraviglie).
 * Prima partivano con autoplay/preload="auto" insieme al resto della pagina: sul telefono il
 * video (3-4 MB) si prendeva la banda di immagini, font e JavaScript, e quello della Home da
 * 1600 px continuava a scaricarsi anche a pagina scorsa. Ora:
 * - il fotogramma (poster) è l'elemento LCP e arriva per primo;
 * - il video si avvia dopo l'evento `load`, quando il primo caricamento è finito;
 * - con «Risparmio dati» o rete 2G/3G non parte da solo (resta il poster, c'è il pulsante play);
 * - fuori dallo schermo va in pausa, e riparte quando torna visibile.
 */

type ConnessioneInfo = { saveData?: boolean; effectiveType?: string }

/** «Risparmio dati» attivo o rete lenta: meglio non far partire video da soli. */
export function reteLenta(): boolean {
  const c = (navigator as Navigator & { connection?: ConnessioneInfo }).connection
  if (!c) return false
  return Boolean(c.saveData) || /(^|-)2g$|^3g$/.test(c.effectiveType ?? '')
}

/** Esegue `fai` dopo il `load` della pagina (subito se c'è già stato). Restituisce la pulizia. */
export function dopoIlCaricamento(fai: () => void): () => void {
  let t: ReturnType<typeof setTimeout> | undefined
  const via = () => {
    t = setTimeout(fai, 0)
  }
  if (document.readyState === 'complete') via()
  else addEventListener('load', via, { once: true })
  return () => {
    removeEventListener('load', via)
    clearTimeout(t)
  }
}

/**
 * Pausa automatica fuori dallo schermo. `puoPartire()` dice se il video, visibile, deve andare
 * (falso prima dell'avvio differito e dopo una pausa scelta dall'utente). Restituisce la pulizia
 * e una funzione che dice se in questo momento il video è visibile.
 */
export function pausaFuoriVista(video: HTMLVideoElement, puoPartire: () => boolean): { smetti: () => void; visibile: () => boolean } {
  let inVista = true
  if (typeof IntersectionObserver === 'undefined') return { smetti: () => {}, visibile: () => true }
  const io = new IntersectionObserver(([voce]) => {
    if (!voce) return
    inVista = voce.isIntersecting
    if (!inVista) {
      if (!video.paused) video.pause()
    } else if (video.paused && video.isConnected && puoPartire()) {
      video.play().catch(() => {})
    }
  })
  io.observe(video)
  return { smetti: () => io.disconnect(), visibile: () => inVista }
}

/**
 * Per i video decorativi senza controlli (testate di viaggi e meraviglie): parte dopo il
 * caricamento, non con rete lenta, in pausa fuori dallo schermo. Il <video> va reso senza
 * `autoPlay` e con preload="none", altrimenti il browser lo scarica comunque subito.
 */
export function useVideoDifferito(ref: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = ref.current
    if (!video || reteLenta()) return
    let avviato = false
    const vista = pausaFuoriVista(video, () => avviato)
    const smetti = dopoIlCaricamento(() => {
      avviato = true
      // isConnected: con «riduci movimento» il <video> può essere già stato sostituito dal poster
      if (vista.visibile() && video.isConnected) video.play().catch(() => {})
    })
    return () => {
      smetti()
      vista.smetti()
    }
  }, [ref])
}
