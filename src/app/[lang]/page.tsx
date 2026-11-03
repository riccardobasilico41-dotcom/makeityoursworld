import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { MeravigliaCard } from '@/components/MeravigliaCard'
import { Scorrimento } from '@/components/MeraviglieScorrimento'
import { Reveal } from '@/components/Reveal'
import { CinematicHero } from '@/components/signature/CinematicHero'
import { VoltoDelProgetto } from '@/components/signature/VoltoDelProgetto'
import { MappaMondoSezione } from '@/components/MappaMondoSezione'
import { GeographyIndex } from '@/components/signature/GeographyIndex'
import { FeaturedJourney } from '@/components/signature/FeaturedJourney'
import { VisualArchive } from '@/components/signature/VisualArchive'
import { getAllViaggi, type Viaggio } from '@/lib/viaggi'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { getAllPaesi, getDestinazioniByPaese, getTripMeta } from '@/lib/geo'
import { raggruppaPerContinente } from '@/lib/utils'
import { copertine } from '@/lib/i18n/contenuti'
import { linguaCorrente } from '@/lib/i18n/server'
import { SITO } from '@/lib/i18n/sito'
import { pageMetadata } from '@/lib/seo'
import type { Lingua } from '@/lib/i18n/config'
import { JsonLd } from '@/components/JsonLd'
import { autoreJsonLd } from '@/lib/structured-data'
import Link from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'

const T = {
  it: {
    sottotitolo: 'Diario di viaggio con itinerari giorno per giorno, verificati e riverificati, non copiati da altre guide.',
    apertura: 'Apertura',
    ritmo: 'Il ritmo',
    puntoForte: 'Il punto forte',
    otto: (n: number) => `Questi sono otto viaggi scelti a mano. L'archivio completo ne racconta ${n}.`,
    esplora: (n: number) => `Esplora tutti i ${n} viaggi`,
    meraviglieTitolo: 'Le sette meraviglie del mondo',
    meraviglieTesto:
      'Guida pratica monumento per monumento: prenotazione, prezzi, come arrivare, tour o autonomia, truffe da evitare e cosa vedere — e perché.',
    vediMeraviglie: 'Vedi tutte le meraviglie',
    scorrimento: 'Le meraviglie, una per scheda',
    prossimo: 'Il prossimo viaggio da dove comincia?',
    vediViaggi: 'Vedi tutti i viaggi',
  },
  en: {
    sottotitolo: 'A travel journal with day-by-day itineraries, checked and double-checked, not copied from other guides.',
    apertura: 'Opening',
    ritmo: 'The pace',
    puntoForte: 'The highlight',
    otto: (n: number) => `These are eight trips picked by hand. The full archive tells the story of ${n}.`,
    esplora: (n: number) => `Explore all ${n} trips`,
    meraviglieTitolo: 'The seven wonders of the world',
    meraviglieTesto:
      'A practical guide, monument by monument: booking, prices, how to get there, tour or on your own, scams to avoid and what to see — and why.',
    vediMeraviglie: 'See all the wonders',
    scorrimento: 'The wonders, one card each',
    prossimo: 'Where does your next trip begin?',
    vediViaggi: 'See all trips',
  },
  es: {
    sottotitolo: 'Diario de viaje con itinerarios día a día, comprobados y recomprobados, no copiados de otras guías.',
    apertura: 'Apertura',
    ritmo: 'El ritmo',
    puntoForte: 'Lo mejor',
    otto: (n: number) => `Estos son ocho viajes elegidos a mano. El archivo completo cuenta ${n}.`,
    esplora: (n: number) => `Explora los ${n} viajes`,
    meraviglieTitolo: 'Las siete maravillas del mundo',
    meraviglieTesto:
      'Guía práctica monumento por monumento: reserva, precios, cómo llegar, tour o por tu cuenta, estafas que evitar y qué ver — y por qué.',
    vediMeraviglie: 'Ver todas las maravillas',
    scorrimento: 'Las maravillas, una por ficha',
    prossimo: '¿Por dónde empieza tu próximo viaje?',
    vediViaggi: 'Ver todos los viajes',
  },
} satisfies Record<Lingua, Record<string, string | ((n: number) => string)>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  return pageMetadata({ title: SITO[lingua].tagline, description: SITO[lingua].description, path: '/', lingua })
}

// Rotta decorativa dell'apertura cinematica: solo nomi, nessuna coordinata —
// è sfondo (aria-hidden), non un percorso reale da leggere, quindi resta
// dichiaratamente schematico. Cinque Paesi reali dell'archivio, un continente
// diverso ciascuno, scelti per varietà visiva.
const ROTTA_DECORATIVA = [
  { nome: 'Norvegia' },
  { nome: 'Marocco' },
  { nome: 'Giordania' },
  { nome: 'Giappone' },
  { nome: 'Messico' },
]

// Selezione editoriale per l'archivio visivo della Home: 8 viaggi scelti a
// mano (non i 47 al completo, che restano su /viaggi) per varietà geografica
// e narrativa. Il "viaggio in evidenza" ruota tra questi (vedi `viaggioDelGiorno`)
// non è duplicato qui. Aggiornare questa lista è una decisione editoriale,
// non un criterio automatico (durata, data, ecc.).
const VIAGGI_HOME_SLUGS = [
  'lofoten-estate-2025', // Lofoten
  'islanda-2024', // Islanda in tenda / Ring Road
  'giappone-itinerario', // Giappone
  'cina-paesaggi', // "L'altra Cina" — Zhangjiajie, Sichuan, Yunnan, Yangshuo
  'giordania-itinerario', // Giordania
  'costa-rica-itinerario', // Costa Rica
  'marocco-itinerario', // Marocco / Sahara
  'sicilia-itinerario', // Sicilia orientale
]

// La Home si rigenera una volta al giorno: il viaggio in evidenza cambia ogni giorno.
export const revalidate = 86400

/** Il viaggio in evidenza ruota tra le scelte della Home, uno al giorno, in ordine. */
function viaggioDelGiorno(viaggi: Viaggio[], lingua: Lingua): Viaggio | undefined {
  const candidati = VIAGGI_HOME_SLUGS.map((slug) => viaggi.find((v) => v.slug === slug)).filter(
    (v): v is Viaggio => v !== undefined && (getTripMeta(v.slug, lingua)?.tappeMappa.length ?? 0) > 1
  )
  if (candidati.length === 0) return viaggi[0]
  const giorno = Math.floor(Date.now() / 86_400_000)
  return candidati[giorno % candidati.length]
}

/* Signature Editorial · macrostructure: Field Archive
 * Sostituisce l'homepage fotografica singola (Hallmark, 08 Photographic) con
 * una sequenza a più registri: apertura tipografica su campo scuro, manifesto
 * asimmetrico, indice di geografia, viaggio in evidenza a scena fissa,
 * archivio orizzontale, meraviglie (invariate, fuori scope di questa
 * iterazione), chiusura silenziosa. Vedi la direzione creativa approvata
 * "VIAGGI 360 — SIGNATURE EDITORIAL" per il razionale sezione per sezione. */
export default async function HomePage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const copertineViaggi = copertine(lingua)
  const viaggi = getAllViaggi(lingua)
  const primo = viaggioDelGiorno(viaggi, lingua)
  const selezioneHome = VIAGGI_HOME_SLUGS.map((slug) => viaggi.find((v) => v.slug === slug)).filter(
    (v): v is Viaggio => v !== undefined && v.slug !== primo?.slug
  )
  const meraviglie = getAllMeraviglie(lingua)
  const paesi = getAllPaesi(lingua)
  const gruppiPaesi = raggruppaPerContinente(paesi, (p) => p.continente)
  const primoMeta = primo ? getTripMeta(primo.slug, lingua) : undefined

  return (
    <>
      <JsonLd data={autoreJsonLd(lingua)} />
      <CinematicHero
        tagline={SITO[lingua].tagline}
        subtext={t.sottotitolo}
        routeTappe={ROTTA_DECORATIVA}
      />

      <VoltoDelProgetto />

      <MappaMondoSezione />

      <GeographyIndex
        gruppi={gruppiPaesi}
        conteggioDestinazioni={(slug) => getDestinazioniByPaese(slug, lingua).length}
      />

      {primo && primoMeta && (
        <FeaturedJourney
          titolo={primo.titolo}
          href={`/viaggi/${primo.slug}`}
          tappe={primoMeta.tappeMappa}
          paeseSlug={primoMeta.paeseSlug}
          copertina={copertineViaggi[primo.slug]}
          battute={[
            {
              eyebrow: t.apertura,
              contenuto: (
                <p className="font-display text-xl italic leading-relaxed text-alpine sm:text-2xl lg:text-3xl">
                  {primo.apertura ?? primo.descrizione}
                </p>
              ),
            },
            {
              eyebrow: t.ritmo,
              contenuto: <p className="text-lg leading-relaxed text-stone">{primoMeta.ritmo}</p>,
            },
            {
              eyebrow: t.puntoForte,
              contenuto: (
                <p className="text-lg leading-relaxed text-stone">
                  {primoMeta.puntiForti[0] ?? primo.descrizione}
                </p>
              ),
            },
          ]}
        />
      )}

      <VisualArchive viaggi={selezioneHome} copertine={copertineViaggi} />

      <section className="border-t border-alpine/10 py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center gap-5 text-center">
              <p className="max-w-md text-base leading-relaxed text-stone">
                {t.otto(viaggi.length)}
              </p>
              <Link
                href="/viaggi"
                className="inline-flex items-center gap-2 rounded-none bg-alpine px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-150 hover:bg-alpine-dark"
              >
                {t.esplora(viaggi.length)}
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-alpine/10 bg-cream-dark/40 py-24 sm:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] text-balance text-alpine">
                {t.meraviglieTitolo}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone">
                {t.meraviglieTesto}
              </p>
            </div>
            <Link
              href="/meraviglie"
              className="group inline-flex items-center gap-2 text-sm font-medium text-rosso hover:underline"
            >
              {t.vediMeraviglie}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10">
            <Scorrimento etichetta={t.scorrimento}>
              {meraviglie.map((m) => (
                <li key={m.slug} className="flex w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">
                  <MeravigliaCard meraviglia={m} />
                </li>
              ))}
            </Scorrimento>
          </div>
        </Container>
      </section>

      <section className="border-t border-alpine/10 py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="max-w-md font-display text-3xl font-medium leading-tight text-balance text-alpine sm:text-4xl">
              {t.prossimo}
            </p>
            <Link
              href="/viaggi"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-rosso hover:underline"
            >
              {t.vediViaggi}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
