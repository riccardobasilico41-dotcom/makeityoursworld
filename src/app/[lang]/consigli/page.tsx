import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '@/components/ui/Link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, raccoltaJsonLd } from '@/lib/structured-data'
import { pageMetadata } from '@/lib/seo'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'
import { getAllConsigli } from '@/lib/consigli'

const T = {
  it: {
    home: 'Home',
    titolo: 'Consigli di viaggio',
    eyebrow: 'Le domande che mi fate',
    lead: 'Quando andare, quanto costa, come muoversi: le risposte alle domande che arrivano più spesso, da quello che ho visto nei viaggi.',
    descrizione: 'Consigli di viaggio pratici: quando andare, quanto costa, come muoversi. Le risposte alle domande più frequenti, dai viaggi fatti davvero.',
    leggi: 'Leggi',
  },
  en: {
    home: 'Home',
    titolo: 'Travel tips',
    eyebrow: 'The questions you ask me',
    lead: 'When to go, how much it costs, how to get around: answers to the questions I get most often, from what I saw on my trips.',
    descrizione: 'Practical travel tips: when to go, how much it costs, how to get around. Answers to the most common questions, from trips I actually took.',
    leggi: 'Read',
  },
  es: {
    home: 'Inicio',
    titolo: 'Consejos de viaje',
    eyebrow: 'Las preguntas que me hacéis',
    lead: 'Cuándo ir, cuánto cuesta, cómo moverse: las respuestas a las preguntas que más me llegan, a partir de lo que vi en mis viajes.',
    descrizione: 'Consejos de viaje prácticos: cuándo ir, cuánto cuesta, cómo moverse. Respuestas a las preguntas más frecuentes, de viajes hechos de verdad.',
    leggi: 'Leer',
  },
} satisfies Record<Lingua, Record<string, string>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return pageMetadata({ title: t.titolo, description: t.descrizione, path: '/consigli', lingua })
}

export default async function ConsigliPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const consigli = getAllConsigli()
  return (
    <>
      <JsonLd
        data={[
          raccoltaJsonLd(
            {
              nome: t.titolo,
              descrizione: t.descrizione,
              percorso: '/consigli',
              elementi: consigli.map((c) => ({ nome: c.testi[lingua].titolo, percorso: `/consigli/${c.slug}` })),
            },
            lingua,
          ),
          breadcrumbJsonLd([{ nome: t.home, percorso: '/' }, { nome: t.titolo, percorso: '/consigli' }], lingua),
        ]}
      />
      <PageHeader crumbs={[{ label: t.home, href: '/' }, { label: t.titolo }]} eyebrow={t.eyebrow} title={t.titolo} lead={<p>{t.lead}</p>} />
      <section className="sezione">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consigli.map((c, i) => (
              <li key={c.slug}>
                <Link
                  href={`/consigli/${c.slug}`}
                  className="group flex h-full flex-col border-2 border-ink bg-white transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                    <Image
                      src={c.immagine}
                      alt={c.imageAlt[lingua]}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-display text-xl leading-snug text-ink">{c.testi[lingua].titolo}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">{c.testi[lingua].descrizione}</p>
                    <span className="mt-4 text-sm font-semibold text-rosso group-hover:underline">{t.leggi} →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
