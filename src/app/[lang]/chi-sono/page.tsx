import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site-config'
import { linguaCorrente } from '@/lib/i18n/server'
import { localizza } from '@/lib/i18n/percorsi'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { autore } from '@/lib/structured-data'
import { getAllViaggi } from '@/lib/viaggi'
import { getAllPaesi } from '@/lib/geo'

/*
 * Chi scrive il sito (E-E-A-T): la persona, cosa fa di mestiere, come viaggia e perché
 * scrive. Solo fatti già confermati da Riccardo (gli stessi della sezione in home).
 */

const T = {
  it: {
    titoloSeo: 'Chi sono: Riccardo «Rick» Basilico, viaggiatore e osteopata',
    descrizione:
      'Sono Riccardo, per gli amici Rick: osteopata, viaggiatore e autore di Make It Yours World. Chi c’è dietro gli itinerari, come viaggio e perché li scrivo.',
    briciola: 'Chi sono',
    eyebrow: 'Chi c’è dietro il diario',
    titolo: 'Sono Riccardo, per gli amici Rick.',
    lead: 'Questo sito è il mio diario di viaggio: itinerari giorno per giorno, prezzi pagati, errori fatti e tappe che non valevano la sosta, scritti perché servano a chi quel viaggio lo deve ancora organizzare.',
    alt: 'Riccardo Basilico sorride con la macchina fotografica in spalla davanti al Taj Mahal di Agra',
    mestiere: 'Di mestiere',
    mestiereTesto:
      'Sono osteopata: Master of Science in Osteopathy all’ICOM di Milano, tra i titolari della Polimedica Sant’Egidio di Saronno. Ho seguito atleti dal calcio giovanile alle ultramaratone, e in Perù ho fatto volontariato con Osteopathy Without Borders.',
    progetti: 'Tra uno studio e un viaggio',
    progettiTesto:
      'Tra lo studio e i progetti digitali per la sanità c’è sempre un’idea nuova da far partire. E se c’è una cresta da salire, un fondale da esplorare o un salto da fare, voglio provarlo almeno una volta.',
    viaggio: 'Come viaggio',
    viaggioTesto: (v: number, p: number) =>
      `Di solito con amici, organizzando tutto da me. Sul sito ci sono ${v} itinerari in ${p} Paesi: per ognuno scrivo cosa ho fatto davvero, cosa rifarei e cosa cambierei.`,
    numeri: (v: number, p: number) => [`${v} itinerari`, `${p} Paesi`, 'giorno per giorno'],
    link: [
      { href: '/come-lavoro', testo: 'Come scrivo e verifico le pagine' },
      { href: '/trasparenza', testo: 'Link affiliati e collaborazioni' },
      { href: '/viaggi', testo: 'Tutti i viaggi' },
    ],
  },
  en: {
    titoloSeo: 'About me: Riccardo “Rick” Basilico, traveler and osteopath',
    descrizione:
      'I’m Riccardo, Rick to my friends: osteopath, traveler and the writer behind Make It Yours World. Who writes these itineraries, how I travel and why.',
    briciola: 'About',
    eyebrow: 'The person behind the journal',
    titolo: 'I’m Riccardo, Rick to my friends.',
    lead: 'This site is my travel journal: day-by-day itineraries, the prices I paid, the mistakes I made and the stops that weren’t worth it, written for whoever still has that trip to plan.',
    alt: 'Riccardo Basilico smiling with a camera on his shoulder in front of the Taj Mahal in Agra',
    mestiere: 'What I do for a living',
    mestiereTesto:
      'I’m an osteopath: Master of Science in Osteopathy at ICOM in Milan, and one of the owners of Polimedica Sant’Egidio in Saronno, Italy. I’ve worked with athletes from youth soccer to ultramarathons, and in Peru I volunteered with Osteopathy Without Borders.',
    progetti: 'Between the clinic and the road',
    progettiTesto:
      'Between the clinic and digital health projects there’s always a new idea to get off the ground. And if there’s a ridge to climb, a reef to explore or a jump to take, I want to try it at least once.',
    viaggio: 'How I travel',
    viaggioTesto: (v: number, p: number) =>
      `Usually with friends, planning everything myself. The site has ${v} itineraries across ${p} countries: for each one I write what I actually did, what I’d do again and what I’d change.`,
    numeri: (v: number, p: number) => [`${v} itineraries`, `${p} countries`, 'day by day'],
    link: [
      { href: '/come-lavoro', testo: 'How I write and check these pages' },
      { href: '/trasparenza', testo: 'Affiliate links and partnerships' },
      { href: '/viaggi', testo: 'All trips' },
    ],
  },
  es: {
    titoloSeo: 'Sobre mí: Riccardo «Rick» Basilico, viajero y osteópata',
    descrizione:
      'Soy Riccardo, Rick para los amigos: osteópata, viajero y autor de Make It Yours World. Quién escribe estos itinerarios, cómo viajo y por qué.',
    briciola: 'Sobre mí',
    eyebrow: 'Quién hay detrás del diario',
    titolo: 'Soy Riccardo, Rick para los amigos.',
    lead: 'Esta web es mi diario de viaje: itinerarios día a día, precios pagados, errores cometidos y paradas que no merecían la pena, escritos para quien todavía tiene ese viaje por organizar.',
    alt: 'Riccardo Basilico sonríe con la cámara al hombro delante del Taj Mahal de Agra',
    mestiere: 'A qué me dedico',
    mestiereTesto:
      'Soy osteópata: Master of Science in Osteopathy en el ICOM de Milán y uno de los titulares de la Polimedica Sant’Egidio de Saronno, en Italia. He tratado a deportistas desde el fútbol juvenil hasta las ultramaratones, y en Perú hice voluntariado con Osteopathy Without Borders.',
    progetti: 'Entre la consulta y el viaje',
    progettiTesto:
      'Entre la consulta y los proyectos digitales para la sanidad siempre hay una idea nueva por arrancar. Y si hay una cresta que subir, un fondo marino que explorar o un salto que dar, quiero probarlo al menos una vez.',
    viaggio: 'Cómo viajo',
    viaggioTesto: (v: number, p: number) =>
      `Normalmente con amigos, organizándolo todo yo. En la web hay ${v} itinerarios en ${p} países: en cada uno cuento lo que hice de verdad, lo que repetiría y lo que cambiaría.`,
    numeri: (v: number, p: number) => [`${v} itinerarios`, `${p} países`, 'día a día'],
    link: [
      { href: '/come-lavoro', testo: 'Cómo escribo y compruebo las páginas' },
      { href: '/trasparenza', testo: 'Enlaces de afiliado y colaboraciones' },
      { href: '/viaggi', testo: 'Todos los viajes' },
    ],
  },
} satisfies Record<Lingua, unknown>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return pageMetadata({ title: t.titoloSeo, description: t.descrizione, path: '/chi-sono', type: 'website', lingua })
}

export default async function ChiSonoPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const nViaggi = getAllViaggi(lingua).length
  const nPaesi = getAllPaesi(lingua).length
  const url = `${siteConfig.url}${localizza('/chi-sono', lingua)}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          url,
          inLanguage: LOCALE[lingua].html,
          mainEntity: autore(lingua),
        }}
      />
      <PageHeader crumbs={[{ label: 'Home', href: '/' }, { label: t.briciola }]} eyebrow={t.eyebrow} title={t.titolo} lead={t.lead} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full border-2 border-rosso" />
              <Image
                src="/images/chi-sono/riccardo-basilico-taj-mahal.jpg"
                alt={t.alt}
                width={920}
                height={1150}
                sizes="(min-width: 1024px) 28rem, calc(100vw - 3rem)"
                className="relative border-2 border-ink object-cover"
                preload
              />
            </div>

            <div className="space-y-10">
              <ul className="flex flex-wrap gap-3">
                {t.numeri(nViaggi, nPaesi).map((n) => (
                  <li key={n} className="border-2 border-ink px-4 py-2 font-display text-lg text-ink">
                    {n}
                  </li>
                ))}
              </ul>
              {[
                [t.viaggio, t.viaggioTesto(nViaggi, nPaesi)],
                [t.mestiere, t.mestiereTesto],
                [t.progetti, t.progettiTesto],
              ].map(([titolo, testo]) => (
                <div key={titolo} className="border-t-2 border-ink pt-5">
                  <h2 className="font-display text-2xl text-alpine">{titolo}</h2>
                  <p className="mt-3 max-w-[60ch] text-lg leading-relaxed text-stone">{testo}</p>
                </div>
              ))}

              <ul className="grid gap-3 sm:grid-cols-3">
                {t.link.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group flex min-h-14 items-center justify-between gap-3 border border-ink/20 bg-white px-4 py-3 font-semibold text-ink transition-colors hover:border-ink"
                    >
                      {l.testo}
                      <ArrowRight size={16} aria-hidden className="shrink-0 text-rosso transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
