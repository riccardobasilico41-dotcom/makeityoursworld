import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { SalvatiElenco } from '@/components/SalvatiElenco'
import { linguaCorrente } from '@/lib/i18n/server'
import { localizza } from '@/lib/i18n/percorsi'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Il mio prossimo viaggio',
    desc: 'I viaggi, le destinazioni e le esperienze che hai salvato per il tuo prossimo viaggio.',
    eyebrow: 'I tuoi salvati',
    lead: 'Viaggi, destinazioni ed esperienze che hai messo da parte con il cuore. Restano in questo browser, non servono account.',
  },
  en: {
    titolo: 'My Next Trip',
    desc: "The trips, destinations and experiences you've saved for your next trip.",
    eyebrow: 'Your saved items',
    lead: "Trips, destinations and experiences you've set aside with your heart. They stay in this browser, no account needed.",
  },
  es: {
    titolo: 'Mi próximo viaje',
    desc: 'Los viajes, destinos y experiencias que has guardado para tu próximo viaje.',
    eyebrow: 'Tus guardados',
    lead: 'Viajes, destinos y experiencias que has apartado con el corazón. Se quedan en este navegador, no hace falta cuenta.',
  },
} satisfies Record<Lingua, Record<string, string>>

// Pagina personale (dati solo nel browser di chi la apre): fuori dagli indici.
export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return {
    title: t.titolo,
    description: t.desc,
    alternates: { canonical: localizza('/salvati', lingua) },
    robots: { index: false, follow: true },
  }
}

export default async function SalvatiPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: t.titolo }]}
        eyebrow={t.eyebrow}
        title={t.titolo}
        lead={<p>{t.lead}</p>}
      />
      <Container className="py-12 sm:py-16">
        <SalvatiElenco />
      </Container>
    </>
  )
}
