'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { ArrowRight, RotateCcw } from 'lucide-react'

/** Errore imprevisto in una pagina: si può riprovare o tornare ai viaggi. */
export default function ErrorePagina({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-14 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Qualcosa è andato storto</p>
        <h1 className="mt-3 max-w-[18ch] font-display text-[clamp(2.5rem,5.2vw,5rem)] text-balance text-ink">
          Abbiamo perso la coincidenza
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-stone">
          La pagina non si è caricata come doveva. Di solito basta riprovare; se non funziona, dai viaggi si riparte.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center gap-2 bg-rosso px-6 py-3 text-[0.95rem] font-semibold text-cream hover:bg-rosso-dark"
          >
            <RotateCcw size={16} aria-hidden /> Riprova
          </button>
          <Link
            href="/viaggi"
            className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-rosso"
          >
            Tutti i viaggi <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
