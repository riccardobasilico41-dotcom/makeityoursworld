import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { SalvatiElenco } from '@/components/SalvatiElenco'

// Pagina personale (dati solo nel browser di chi la apre): fuori dagli indici.
export const metadata: Metadata = {
  title: 'Il mio prossimo viaggio',
  description: 'I viaggi, le destinazioni e le esperienze che hai salvato per il tuo prossimo viaggio.',
  alternates: { canonical: '/salvati' },
  robots: { index: false, follow: true },
}

export default function SalvatiPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Il mio prossimo viaggio' }]}
        eyebrow="I tuoi salvati"
        title="Il mio prossimo viaggio"
        lead={
          <p>
            Viaggi, destinazioni ed esperienze che hai messo da parte con il cuore. Restano in questo browser, non
            servono account.
          </p>
        }
      />
      <Container className="py-12 sm:py-16">
        <SalvatiElenco />
      </Container>
    </>
  )
}
