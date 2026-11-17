'use client'

import { useEffect, useRef } from 'react'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Domande e commenti',
    sotto: 'Hai fatto questo viaggio o lo stai organizzando? Scrivi qui: serve un account GitHub, i commenti sono pubblici.',
    carica: 'Caricamento dei commenti…',
  },
  en: {
    titolo: 'Questions and comments',
    sotto: 'Have you done this trip or are you planning it? Write here: you need a GitHub account, comments are public.',
    carica: 'Loading comments…',
  },
  es: {
    titolo: 'Preguntas y comentarios',
    sotto: '¿Has hecho este viaje o lo estás organizando? Escribe aquí: necesitas una cuenta de GitHub, los comentarios son públicos.',
    carica: 'Cargando comentarios…',
  },
} satisfies Record<Lingua, Record<string, string>>

export type ConfigGiscus = { repo: string; repoId: string; category: string; categoryId: string }

/**
 * Commenti Giscus (GitHub Discussions) in fondo ai viaggi. Lo script di giscus.app si carica
 * solo quando la sezione sta per entrare nello schermo. Il thread si aggancia a un termine
 * fisso (`termine`, lo slug italiano del viaggio), non all'indirizzo: le versioni IT, EN ed
 * ES dello stesso viaggio condividono la stessa discussione.
 */
export function CommentiGiscus({
  config,
  termine,
  lingua,
  temaUrl,
}: {
  config: ConfigGiscus
  termine: string
  lingua: Lingua
  /** URL assoluto del tema (public/giscus/tema.css) sul dominio pubblico; senza, il tema «light». */
  temaUrl?: string
}) {
  const t = T[lingua]
  const contenitore = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contenitore.current
    if (!el) return
    const carica = () => {
      const s = document.createElement('script')
      s.src = 'https://giscus.app/client.js'
      s.async = true
      s.crossOrigin = 'anonymous'
      const attributi: Record<string, string> = {
        'data-repo': config.repo,
        'data-repo-id': config.repoId,
        'data-category': config.category,
        'data-category-id': config.categoryId,
        'data-mapping': 'specific',
        'data-term': termine,
        'data-strict': '1',
        'data-reactions-enabled': '1',
        'data-emit-metadata': '0',
        'data-input-position': 'top',
        'data-theme': temaUrl ?? 'light',
        'data-lang': lingua,
        'data-loading': 'lazy',
      }
      for (const [k, v] of Object.entries(attributi)) s.setAttribute(k, v)
      el.replaceChildren(s)
    }
    // lo script di giscus.app parte solo quando la sezione sta per entrare nello schermo
    if (!('IntersectionObserver' in window)) {
      carica()
      return () => el.replaceChildren()
    }
    const oss = new IntersectionObserver(
      (voci) => {
        if (voci.some((v) => v.isIntersecting)) {
          oss.disconnect()
          carica()
        }
      },
      { rootMargin: '400px 0px' },
    )
    oss.observe(el)
    return () => {
      oss.disconnect()
    }
  }, [config.repo, config.repoId, config.category, config.categoryId, termine, lingua, temaUrl])

  return (
    <section id="commenti" aria-labelledby="commenti-titolo" className="scroll-mt-24 border-t-2 border-ink pt-6">
      <h2 id="commenti-titolo" className="font-display text-xl text-ink sm:text-2xl">
        {t.titolo}
      </h2>
      <p className="mt-1 max-w-2xl text-sm leading-relaxed text-stone">{t.sotto}</p>
      <div ref={contenitore} className="giscus mt-5 min-h-24">
        <p className="text-sm text-stone">{t.carica}</p>
      </div>
    </section>
  )
}
