import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

/*
 * Domande frequenti: l'unica fisarmonica del sito (pagina Paese, schede destinazione, guide).
 * Componente sincrono e senza dati del server, così lo usa anche <Prose> nei componenti client.
 * Funziona senza JavaScript (è un <details>).
 */

export function VoceFaq({ domanda, aperta = false, children }: { domanda: ReactNode; aperta?: boolean; children: ReactNode }) {
  return (
    <details open={aperta} className="faq-voce not-prose group border-y border-alpine/15">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
        <span className="titolo-scheda text-alpine">{domanda}</span>
        <ChevronDown size={20} aria-hidden className="shrink-0 text-rosso transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="max-w-[70ch] space-y-3 pb-6 text-base leading-relaxed text-stone">{children}</div>
    </details>
  )
}

export function ElencoFaq({ voci, primaAperta = false }: { voci: { domanda: string; risposta: ReactNode }[]; primaAperta?: boolean }) {
  return (
    <div className="mt-6">
      {voci.map((v, i) => (
        <VoceFaq key={v.domanda} domanda={v.domanda} aperta={primaAperta && i === 0}>
          {v.risposta}
        </VoceFaq>
      ))}
    </div>
  )
}
