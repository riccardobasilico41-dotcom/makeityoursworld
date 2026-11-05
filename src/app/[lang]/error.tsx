'use client'

import Link from '@/components/ui/Link'
import { useEffect } from 'react'
import { ArrowRight, RotateCcw } from 'lucide-react'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    eyebrow: 'Qualcosa è andato storto',
    titolo: 'Abbiamo perso la coincidenza',
    testo: 'La pagina non si è caricata come doveva. Di solito basta riprovare; se non funziona, dai viaggi si riparte.',
    riprova: 'Riprova',
    viaggi: 'Tutti i viaggi',
  },
  en: {
    eyebrow: 'Something went wrong',
    titolo: 'We missed our connection',
    testo: "The page didn't load the way it should. Trying again usually does it; if not, start over from the trips.",
    riprova: 'Try again',
    viaggi: 'All the trips',
  },
  es: {
    eyebrow: 'Algo ha salido mal',
    titolo: 'Hemos perdido la conexión',
    testo: 'La página no se ha cargado como debía. Normalmente basta con volver a intentarlo; si no funciona, se vuelve a empezar desde los viajes.',
    riprova: 'Reintentar',
    viaggi: 'Todos los viajes',
  },
} satisfies Record<Lingua, Record<string, string>>

/** Errore imprevisto in una pagina: si può riprovare o tornare ai viaggi. */
export default function ErrorePagina({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = T[useLingua()]
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-14 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{t.eyebrow}</p>
        <h1 className="mt-3 max-w-[18ch] font-display text-[clamp(2.5rem,5.2vw,5rem)] text-balance text-ink">
          {t.titolo}
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-stone">
          {t.testo}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="btn btn-primario"
          >
            <RotateCcw size={16} aria-hidden /> {t.riprova}
          </button>
          <Link
            href="/viaggi"
            className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-rosso"
          >
            {t.viaggi} <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
