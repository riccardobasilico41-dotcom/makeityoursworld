'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, X } from 'lucide-react'
import { togliSalvato, useIdratato, useSalvati, type TipoSalvato } from '@/lib/salvati'

const GRUPPI: { tipo: TipoSalvato; titolo: string }[] = [
  { tipo: 'viaggio', titolo: 'Viaggi' },
  { tipo: 'destinazione', titolo: 'Destinazioni' },
  { tipo: 'esperienza', titolo: 'Esperienze' },
]

/** Elenco di /salvati, raggruppato per tipo. Legge localStorage solo dopo l'idratazione. */
export function SalvatiElenco() {
  const salvati = useSalvati()
  const idratato = useIdratato()

  // Prima dell'idratazione non si sa ancora cosa c'è: niente stato vuoto lampeggiante.
  if (!idratato) return <div className="min-h-[40vh]" aria-busy="true" />

  if (!salvati.length) {
    return (
      <div className="border-2 border-ink p-8 sm:p-12">
        <Heart size={28} aria-hidden="true" className="text-rosso" />
        <h2 className="mt-4 font-display text-3xl text-ink">Non hai ancora salvato niente</h2>
        <p className="mt-3 max-w-[52ch] leading-relaxed text-stone">
          Tocca il cuore su un viaggio, una destinazione o un&apos;esperienza: la ritrovi qui, pronta per organizzare il
          prossimo viaggio.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/viaggi"
            className="inline-flex min-h-12 items-center bg-rosso px-6 py-3 text-[0.95rem] font-semibold text-cream transition-colors duration-150 hover:bg-rosso-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
          >
            Guarda i viaggi
          </Link>
          <Link
            href="/destinazioni"
            className="text-[0.95rem] font-semibold text-ink underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-rosso"
          >
            Esplora le destinazioni
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-14">
      <p className="text-sm text-stone" aria-live="polite">
        {salvati.length} {salvati.length === 1 ? 'elemento salvato' : 'elementi salvati'}
      </p>
      {GRUPPI.map((g) => {
        const voci = salvati.filter((s) => s.tipo === g.tipo)
        if (!voci.length) return null
        return (
          <section key={g.tipo} aria-labelledby={`salvati-${g.tipo}`}>
            <h2 id={`salvati-${g.tipo}`} className="border-b-2 border-ink pb-3 font-display text-3xl text-ink">
              {g.titolo} <span className="font-sans text-lg font-normal text-stone">({voci.length})</span>
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {voci.map((v) => (
                <li key={`${v.tipo}-${v.id}`} className="group relative flex flex-col border-2 border-ink bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                    {v.immagine ? (
                      <Image
                        src={v.immagine}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-stone">
                        <Heart size={32} aria-hidden="true" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5 pr-16">
                    <h3 className="font-display text-xl text-ink">
                      {/* Link esteso a tutta la card; il pulsante «Togli» resta sopra. */}
                      <Link href={v.href} className="after:absolute after:inset-0 hover:text-rosso focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-rosso">
                        {v.titolo}
                      </Link>
                    </h3>
                    {v.sottotitolo && <p className="mt-1 text-sm text-stone">{v.sottotitolo}</p>}
                  </div>
                  <button
                    type="button"
                    onClick={() => togliSalvato(v)}
                    aria-label={`Togli ${v.titolo} dai salvati`}
                    title="Togli dai salvati"
                    className="absolute bottom-4 right-4 z-10 inline-flex size-11 items-center justify-center border-2 border-ink bg-cream text-ink transition-colors duration-150 hover:bg-rosso hover:text-cream hover:border-rosso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
