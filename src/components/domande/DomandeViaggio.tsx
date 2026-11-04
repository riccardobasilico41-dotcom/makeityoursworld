import Image from 'next/image'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import type { Domanda } from '@/lib/domande/tipi'
import { ModuloDomanda } from './ModuloDomanda'

const T = {
  it: { titolo: 'Domande e risposte', chiede: 'chiede', risponde: 'Risponde Rick', alt: 'Rick' },
  en: { titolo: 'Questions and answers', chiede: 'asks', risponde: 'Rick replies', alt: 'Rick' },
  es: { titolo: 'Preguntas y respuestas', chiede: 'pregunta', risponde: 'Responde Rick', alt: 'Rick' },
} satisfies Record<Lingua, Record<string, string>>

function Paragrafi({ testo, className }: { testo: string; className?: string }) {
  return (
    <div className={className}>
      {testo.split(/\n{2,}/).map((p, i) => (
        <p key={i} className="whitespace-pre-line [&+p]:mt-3">
          {p}
        </p>
      ))}
    </div>
  )
}

/**
 * Modulo per fare una domanda e, sotto, le domande pubblicate con la risposta di Rick.
 * Le domande arrivano già lette dalla pagina (statica, rigenerata dalla moderazione).
 */
export function DomandeViaggio({ viaggio, lingua, domande }: { viaggio: string; lingua: Lingua; domande: Domanda[] }) {
  const t = T[lingua]
  const data = (iso: string) =>
    new Date(iso).toLocaleDateString(LOCALE[lingua].html, { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <section id="domande" aria-label={t.titolo} className="scroll-mt-24 space-y-10">
      <ModuloDomanda viaggio={viaggio} />

      {domande.length > 0 && (
        <div>
          <h2 className="font-display text-2xl text-alpine">{t.titolo}</h2>
          <ol className="mt-6 space-y-6">
            {domande.map((d) => (
              <li key={d.id} id={`domanda-${d.id}`} className="scroll-mt-24 border-2 border-ink bg-white">
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone/85">
                    <span className="text-ink">{d.nome}</span> {t.chiede} ·{' '}
                    <time dateTime={d.data}>{data(d.data)}</time>
                  </p>
                  <Paragrafi testo={d.testo} className="mt-2 font-display text-lg leading-snug text-ink" />
                </div>
                {d.risposta && (
                  <div className="flex gap-4 border-t-2 border-ink bg-cream p-5 sm:p-6">
                    <Image
                      src="/images/chi-sono/rick-avatar.jpg"
                      alt={t.alt}
                      width={48}
                      height={48}
                      className="size-12 shrink-0 rounded-full border-2 border-ink object-cover"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rosso">
                        {t.risponde} · <time dateTime={d.risposta.data}>{data(d.risposta.data)}</time>
                      </p>
                      <Paragrafi testo={d.risposta.testo} className="mt-2 text-base leading-relaxed text-ink" />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  )
}
