import type { Paese } from '@/lib/types'
import { Container } from '@/components/ui/Container'
import { JsonLd } from '@/components/JsonLd'
import { Tendina } from '@/components/Tendina'
import { richNodes } from '@/components/ui/Rich'
import { faqJsonLd } from '@/lib/structured-data'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

/*
 * Domande frequenti della pagina Paese: le domande che si fanno davvero prima di partire,
 * con le risposte già scritte nella scheda del Paese (niente testo nuovo). Visibili in
 * pagina e in JSON-LD FAQPage, per Google e per le risposte delle AI.
 */

const T = {
  it: {
    titolo: (p: string) => `${p}: domande frequenti`,
    periodo: (p: string) => `Qual è il periodo migliore per andare in ${p}?`,
    durata: (p: string) => `Quanti giorni servono per visitare ${p}?`,
    budget: (p: string) => `Quanto costa un viaggio in ${p}?`,
    documenti: (p: string) => `Che documenti servono per entrare in ${p}?`,
    soldi: (p: string) => `Che moneta si usa in ${p} e come si paga?`,
    sicurezza: (p: string) => `${p} è un Paese sicuro per viaggiare?`,
    internet: (p: string) => `Come si resta connessi a internet in ${p}?`,
  },
  en: {
    titolo: (p: string) => `${p}: frequently asked questions`,
    periodo: (p: string) => `When is the best time to visit ${p}?`,
    durata: (p: string) => `How many days do you need in ${p}?`,
    budget: (p: string) => `How much does a trip to ${p} cost?`,
    documenti: (p: string) => `What documents do you need to enter ${p}?`,
    soldi: (p: string) => `What currency is used in ${p}, and how do you pay?`,
    sicurezza: (p: string) => `Is ${p} safe to travel?`,
    internet: (p: string) => `How do you stay connected to the internet in ${p}?`,
  },
  es: {
    titolo: (p: string) => `${p}: preguntas frecuentes`,
    periodo: (p: string) => `¿Cuál es la mejor época para viajar a ${p}?`,
    durata: (p: string) => `¿Cuántos días hacen falta para visitar ${p}?`,
    budget: (p: string) => `¿Cuánto cuesta un viaje a ${p}?`,
    documenti: (p: string) => `¿Qué documentos hacen falta para entrar en ${p}?`,
    soldi: (p: string) => `¿Qué moneda se usa en ${p} y cómo se paga?`,
    sicurezza: (p: string) => `¿Es ${p} un país seguro para viajar?`,
    internet: (p: string) => `¿Cómo estar conectado a internet en ${p}?`,
  },
} satisfies Record<Lingua, Record<string, (p: string) => string>>

const maiuscola = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export async function FaqPaese({ paese }: { paese: Paese }) {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const n = paese.nome
  const s = paese.scheda
  const voci = [
    { domanda: t.periodo(n), risposta: paese.periodoMigliore },
    { domanda: t.durata(n), risposta: paese.durataConsigliata },
    { domanda: t.budget(n), risposta: paese.budgetIndicativo },
    { domanda: t.documenti(n), risposta: s?.documenti },
    { domanda: t.soldi(n), risposta: s ? [s.valuta, s.pagamenti].filter(Boolean).join(' ') : undefined },
    { domanda: t.sicurezza(n), risposta: s?.sicurezza },
    { domanda: t.internet(n), risposta: s?.connettivita },
  ]
    .filter((v): v is { domanda: string; risposta: string } => !!v.risposta && v.risposta.trim().length > 0)
    .map((v) => ({ ...v, risposta: maiuscola(v.risposta.trim()) }))
  if (voci.length < 2) return null

  return (
    <section id="domande-frequenti" aria-labelledby="faq-titolo" className="scroll-mt-24 border-t border-alpine/10 py-16 sm:py-20">
      <JsonLd data={faqJsonLd(voci, lingua)} />
      <Container>
        <h2 id="faq-titolo" className="font-display text-[clamp(1.8rem,3vw,2.6rem)] text-alpine">
          {t.titolo(n)}
        </h2>
        <div className="mt-8 [&>details+details]:border-t-0">
          {voci.map((v, i) => (
            <Tendina key={v.domanda} titolo={v.domanda} aperta={i === 0}>
              <div className="max-w-[70ch] space-y-3 text-base leading-relaxed text-stone">
                {v.risposta.split(/\n\n+/).map((p, j) => (
                  <p key={j}>{richNodes(p)}</p>
                ))}
              </div>
            </Tendina>
          ))}
        </div>
      </Container>
    </section>
  )
}
