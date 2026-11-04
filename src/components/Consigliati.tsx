import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { CONSIGLIATI } from '@/content/consigliati'
import { TitoloSezione } from '@/components/scheda/Blocchi'
import { HeartHandshake } from 'lucide-react'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { titolo: 'Chi consiglio',
    nota: "Quando posso, se se lo meritano e se mi ricordo il nome, lascio i contatti di chi mi ha aiutato, così diventano un punto d'appoggio anche per te. Non è un elenco completo: molto spesso ho fatto tutto in autonomia, non sempre mi sono trovato bene (e allora non lo scrivo qui) e a volte i nomi, semplicemente, li ho dimenticati.", sito: 'Sito', whatsapp: 'WhatsApp', fatto: 'Provato da me', nonFatto: 'Consigliato, non provato' },
  en: { titolo: 'Who I recommend',
    nota: "When I can, when they deserve it and when I remember the name, I leave the contacts of people who helped me, so they can be a point of support for you too. It isn't a complete list: very often I did everything on my own, I didn't always have a good experience (and then it doesn't go here), and sometimes I simply forgot the names.", sito: 'Website', whatsapp: 'WhatsApp', fatto: 'Tried myself', nonFatto: 'Recommended, not tried' },
  es: { titolo: 'A quién recomiendo',
    nota: "Cuando puedo, si se lo merecen y si recuerdo el nombre, dejo los contactos de quien me ayudó, para que también te sirvan de punto de apoyo. No es una lista completa: muy a menudo lo hice todo por mi cuenta, no siempre estuve a gusto (y entonces no aparece aquí) y a veces, sencillamente, olvidé los nombres.", sito: 'Web', whatsapp: 'WhatsApp', fatto: 'Probado por mí', nonFatto: 'Recomendado, no probado' },
} satisfies Record<Lingua, unknown>

/**
 * Guide, alloggi e operatori consigliati da Rick per una destinazione
 * (src/content/consigliati.ts, chiave `paese/slug`). Nessun link affiliato.
 */
export function Consigliati({ chiave, lingua }: { chiave: string; lingua: Lingua }) {
  const voci = CONSIGLIATI[chiave]
  if (!voci?.length) return null
  const t = T[lingua]
  return (
    <div>
      <TitoloSezione icona={HeartHandshake}>{t.titolo}</TitoloSezione>
      <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-stone">{t.nota}</p>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {voci.map((v) => (
          <li key={v.nome} className="flex flex-col border-2 border-ink bg-cream p-5 sm:p-6">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${v.fatto ? 'text-rosso' : 'text-stone/85'}`}>
              {v.cosa[lingua]} · {v.fatto ? t.fatto : t.nonFatto}
            </p>
            <h3 className="mt-1 font-display text-xl text-alpine">{v.nome}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-stone">{v.testo[lingua]}</p>
            {(v.url || v.whatsapp) && (
              <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {v.url && (
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-rosso hover:underline">
                    {t.sito} <ArrowUpRight size={15} aria-hidden />
                  </a>
                )}
                {v.whatsapp && (
                  <a
                    href={`https://wa.me/${v.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-rosso hover:underline"
                  >
                    <MessageCircle size={15} aria-hidden /> {t.whatsapp} {v.whatsapp}
                  </a>
                )}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
