import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { MeravigliaCard } from '@/components/MeravigliaCard'
import { Scorrimento } from '@/components/MeraviglieScorrimento'
import { Reveal } from '@/components/Reveal'
import { CinematicHero } from '@/components/signature/CinematicHero'
import { VoltoDelProgetto } from '@/components/signature/VoltoDelProgetto'
import { MappaMondoSezione } from '@/components/MappaMondoSezione'
import { ViaggiTop, TOP } from '@/components/ViaggiTop'
import { FeaturedJourney } from '@/components/signature/FeaturedJourney'
import { EsploraAree } from '@/components/EsploraAree'
import { QuestoMese } from '@/components/QuestoMese'
import { getAllViaggi, type Viaggio } from '@/lib/viaggi'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { getTripMeta } from '@/lib/geo'
import { copertine } from '@/lib/i18n/contenuti'
import { linguaCorrente } from '@/lib/i18n/server'
import { SITO } from '@/lib/i18n/sito'
import { pageMetadata } from '@/lib/seo'
import type { Lingua } from '@/lib/i18n/config'
import { JsonLd } from '@/components/JsonLd'
import { autoreJsonLd } from '@/lib/structured-data'
import Link from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import { PREFISSO_TAPPA } from '@/lib/riepilogo-viaggio'
import { plain } from '@/components/ui/Rich'

const T = {
  it: {
    sottotitolo: 'Diario di viaggio con itinerari giorno per giorno, verificati e riverificati, non copiati da altre guide.',
    archivio: (n: number) => `L'archivio completo racconta ${n} viaggi, filtrabili per area, Paese, durata, periodo consigliato e stile.`,
    esplora: (n: number) => `Esplora tutti i ${n} viaggi`,
    meraviglieTitolo: 'Le sette meraviglie del mondo',
    meraviglieTesto:
      'Guida pratica monumento per monumento: prenotazione, prezzi, come arrivare, tour o autonomia, truffe da evitare e cosa vedere — e perché.',
    vediMeraviglie: 'Vedi tutte le meraviglie',
    scorrimento: 'Le meraviglie, una per scheda',
    prossimo: 'Il prossimo viaggio da dove comincia?',
  },
  en: {
    sottotitolo: 'A travel journal with day-by-day itineraries, checked and double-checked, not copied from other guides.',
    archivio: (n: number) => `The full archive tells the story of ${n} trips, filterable by region, country, length, best time to go and style.`,
    esplora: (n: number) => `Explore all ${n} trips`,
    meraviglieTitolo: 'The seven wonders of the world',
    meraviglieTesto:
      'A practical guide, monument by monument: booking, prices, how to get there, tour or on your own, scams to avoid and what to see — and why.',
    vediMeraviglie: 'See all the wonders',
    scorrimento: 'The wonders, one card each',
    prossimo: 'Where does your next trip begin?',
  },
  es: {
    sottotitolo: 'Diario de viaje con itinerarios día a día, comprobados y recomprobados, no copiados de otras guías.',
    archivio: (n: number) => `El archivo completo cuenta ${n} viajes, que se pueden filtrar por región, país, duración, mejor época y estilo.`,
    esplora: (n: number) => `Explora los ${n} viajes`,
    meraviglieTitolo: 'Las siete maravillas del mundo',
    meraviglieTesto:
      'Guía práctica monumento por monumento: reserva, precios, cómo llegar, tour o por tu cuenta, estafas que evitar y qué ver — y por qué.',
    vediMeraviglie: 'Ver todas las maravillas',
    scorrimento: 'Las maravillas, una por ficha',
    prossimo: '¿Por dónde empieza tu próximo viaje?',
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

// Viaggi che possono andare «in evidenza» in Home, uno al giorno a rotazione. Erano anche
// la selezione di VisualArchive, tolta dalla Home perché 5 viaggi su 8 erano già nella fila
// ViaggiTop: qui restano solo quelli che la fila non mostra (vedi `viaggioDelGiorno`), così
// Cina dei paesaggi, Marocco e Sicilia hanno ancora un posto in Home senza doppioni.
// Aggiornare la lista è una decisione editoriale, non un criterio automatico.
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

/** Il viaggio in evidenza ruota, uno al giorno, tra le scelte della Home che non sono già in ViaggiTop. */
function viaggioDelGiorno(viaggi: Viaggio[], lingua: Lingua): Viaggio | undefined {
  const inFila = new Set(TOP)
  const valide = (slugs: string[]) =>
    slugs
      .map((slug) => viaggi.find((v) => v.slug === slug))
      .filter((v): v is Viaggio => v !== undefined && (getTripMeta(v.slug, lingua)?.tappeMappa.length ?? 0) > 1)
  // se la lista editoriale finisse tutta dentro la fila, meglio un doppione che nessun viaggio
  const candidati = valide(VIAGGI_HOME_SLUGS.filter((s) => !inFila.has(s)))
  const lista = candidati.length > 0 ? candidati : valide(VIAGGI_HOME_SLUGS)
  if (lista.length === 0) return viaggi[0]
  const giorno = Math.floor(Date.now() / 86_400_000)
  return lista[giorno % lista.length]
}

/* Ordine della Home (audit UX P1): apertura con il cercaviaggi (che ha anche le quattro porte:
 * viaggi, destinazioni, mappa, meraviglie, e il «Quando andare») → viaggi top → porte per
 * area → mappa del mondo → un viaggio in evidenza in una schermata → meraviglie → chi
 * scrive → una sola chiusura. Niente sezioni che ripetono gli stessi viaggi: l'archivio
 * orizzontale (VisualArchive) è uscito perché ridondante con ViaggiTop. */
export default async function HomePage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const copertineViaggi = copertine(lingua)
  const viaggi = getAllViaggi(lingua)
  const primo = viaggioDelGiorno(viaggi, lingua)
  const meraviglie = getAllMeraviglie(lingua)
  const primoMeta = primo ? getTripMeta(primo.slug, lingua) : undefined
  const primoTappe = primoMeta
    ? primoMeta.tappeMappa.map((tp) => tp.nome.replace(PREFISSO_TAPPA, '')).filter((n, i, a) => a.indexOf(n) === i)
    : []

  return (
    <>
      <JsonLd data={autoreJsonLd(lingua)} />
      <CinematicHero
        tagline={SITO[lingua].tagline}
        subtext={t.sottotitolo}
        routeTappe={ROTTA_DECORATIVA}
      />

      {/* subito dopo l'apertura: la fila dei viaggi top («Da qui si parte») */}
      <ViaggiTop lingua={lingua} />

      {/* le cinque aree, con quanti Paesi e viaggi: la porta per chi parte dalla geografia */}
      <EsploraAree lingua={lingua} />

      {/* il mese corrente in una sezione sola: «Dove andare» (mesi consigliati) e «Dove ero» (mesi reali) */}
      <QuestoMese lingua={lingua} />

      <MappaMondoSezione />

      {primo && (
        <FeaturedJourney
          lingua={lingua}
          titolo={primo.titolo}
          href={`/viaggi/${primo.slug}`}
          apertura={plain(primo.apertura ?? primo.descrizione)}
          tappe={primoTappe}
          durata={primo.durataBreve || undefined}
          periodo={primo.periodoBreve || undefined}
          copertina={copertineViaggi[primo.slug]}
        />
      )}

      <section className="border-t border-alpine/10 bg-cream-dark/40 sezione">
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
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-rosso hover:underline"
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

      <VoltoDelProgetto />

      {/* una sola chiusura: prima c'erano due CTA in fila («tutti i viaggi» e «per Paese»);
          la porta per Paese ora è la sezione delle aree, qui resta l'archivio completo */}
      <section className="border-t border-alpine/10 sezione">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-6 scheda bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <p className="max-w-md font-display text-3xl font-medium leading-tight text-balance text-alpine sm:text-4xl">
                  {t.prossimo}
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">{t.archivio(viaggi.length)}</p>
              </div>
              <Link
                href="/viaggi"
                className="btn btn-primario shrink-0"
              >
                {t.esplora(viaggi.length)}
                <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
