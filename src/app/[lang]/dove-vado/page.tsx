import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { DoveVadoQuiz } from '@/components/DoveVadoQuiz'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import { pageMetadata } from '@/lib/seo'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'
import { viaggiPerQuiz } from '@/lib/dove-vado-dati'

const T = {
  it: {
    titolo: 'Dove vado?',
    meta: 'Dove andare in vacanza? Sei domande veloci (quando, quanto tempo, budget, interessi, con chi, quanto lontano) e i viaggi dell’archivio che fanno per te.',
    eyebrow: 'Il quiz',
    lead: 'Sei domande, meno di un minuto. Alla fine trovi gli itinerari dell’archivio più adatti a te, con il perché.',
    home: 'Home',
  },
  en: {
    titolo: 'Where should I go?',
    meta: 'Not sure where to travel? Six quick questions (when, how long, budget, interests, who with, how far) and the trips from the archive that suit you.',
    eyebrow: 'The quiz',
    lead: 'Six questions, under a minute. At the end you get the itineraries from the archive that suit you best, and why.',
    home: 'Home',
  },
  es: {
    titolo: '¿A dónde voy?',
    meta: '¿No sabes a dónde viajar? Seis preguntas rápidas (cuándo, cuánto tiempo, presupuesto, intereses, con quién, cómo de lejos) y los viajes del archivo que van contigo.',
    eyebrow: 'El test',
    lead: 'Seis preguntas, menos de un minuto. Al final encuentras los itinerarios del archivo que mejor te encajan, con el porqué.',
    home: 'Inicio',
  },
} satisfies Record<Lingua, Record<string, string>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return pageMetadata({ title: t.titolo, description: t.meta, path: '/dove-vado', lingua })
}

export default async function DoveVadoPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ nome: t.home, percorso: '/' }, { nome: t.titolo, percorso: '/dove-vado' }], lingua)} />
      <PageHeader crumbs={[{ label: t.home, href: '/' }, { label: t.titolo }]} eyebrow={t.eyebrow} title={t.titolo} lead={<p>{t.lead}</p>} />
      <section className="sezione">
        <Container>
          <DoveVadoQuiz viaggi={viaggiPerQuiz(lingua)} />
        </Container>
      </section>
    </>
  )
}
