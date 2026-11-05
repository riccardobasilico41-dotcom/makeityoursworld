import type { Metadata } from 'next'
import Link from '@/components/ui/Link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site-config'
import { linguaCorrente } from '@/lib/i18n/server'
import { localizza } from '@/lib/i18n/percorsi'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { autore } from '@/lib/structured-data'

/*
 * Metodo editoriale (E-E-A-T): cosa nasce da un viaggio fatto, cosa da una ricerca, come si
 * verificano prezzi e documenti, da dove vengono le foto, come funzionano link affiliati e
 * traduzioni. Descrive come il sito è fatto davvero, senza promesse.
 */

type Voce = { titolo: string; testo: string; link?: { href: string; testo: string } }

const T: Record<Lingua, { titoloSeo: string; descrizione: string; briciola: string; eyebrow: string; titolo: string; lead: string; voci: Voce[] }> = {
  it: {
    titoloSeo: 'Come lavoro: da dove vengono itinerari, prezzi e foto',
    descrizione:
      'Come nascono le pagine di Make It Yours World: cosa ho visto di persona, come controllo prezzi e documenti, da dove vengono le foto e come funzionano i link affiliati.',
    briciola: 'Come lavoro',
    eyebrow: 'Il metodo',
    titolo: 'Come scrivo e controllo queste pagine',
    lead: 'Un diario di viaggio serve se ci si può fidare. Qui spiego cosa nasce da un viaggio fatto, cosa da una ricerca e come tengo aggiornate le informazioni pratiche.',
    voci: [
      { titolo: 'Viaggi fatti, scritti da chi li ha fatti', testo: 'Gli itinerari giorno per giorno raccontano viaggi che ho fatto io, di solito con amici: tappe, alloggi, spostamenti, costi e anche gli errori. I ricordi personali stanno nei riquadri «La mia esperienza».' },
      { titolo: 'Cosa ho visto e cosa ho solo studiato', testo: 'Nelle schede di destinazioni ed esperienze dico chiaramente se ci sono stato o no. Le parti che non nascono da una visita sono ricerca: lo scrivo, invece di inventare un ricordo.' },
      { titolo: 'Prezzi, orari e documenti', testo: 'Le informazioni pratiche le controllo sui canali ufficiali (siti dei musei, dei parchi, dei trasporti e delle ambasciate) quando scrivo o aggiorno la pagina. Cambiano spesso: per questo ogni pagina invita a ricontrollarle prima di partire, e dove un dato affidabile non c’è, lo lascio vuoto invece di stimarlo.' },
      { titolo: 'Foto', testo: 'Le foto sono mie o con licenze libere che ne permettono l’uso. Autori e licenze sono elencati nella pagina dei crediti.', link: { href: '/crediti-fotografici', testo: 'Crediti fotografici' } },
      { titolo: 'Link affiliati', testo: 'Alcuni link per alloggi, tour, assicurazioni ed eSIM sono di affiliazione: per te il prezzo non cambia e non decidono cosa consiglio né in che ordine.', link: { href: '/trasparenza', testo: 'Trasparenza' } },
      { titolo: 'Guide e contatti che consiglio', testo: 'Quando posso, se se lo meritano e se mi ricordo il nome, nelle schede lascio i contatti di guide, alloggi e operatori che mi hanno aiutato, come punto d’appoggio. Non è un elenco completo: spesso ho fatto tutto in autonomia, chi non mi ha convinto non compare, e a volte i nomi li ho dimenticati. Se ho un legame con qualcuno (per esempio ho fatto il suo sito) lo scrivo.' },
      { titolo: 'Traduzioni', testo: 'Scrivo in italiano. Le versioni in inglese e spagnolo sono traduzioni fedeli dei miei testi: se trovi una differenza, fa fede la pagina italiana.' },
    ],
  },
  en: {
    titoloSeo: 'How I work: where itineraries, prices and photos come from',
    descrizione:
      'How the pages of Make It Yours World are made: what I saw firsthand, how I check prices and documents, where the photos come from and how affiliate links work.',
    briciola: 'How I work',
    eyebrow: 'The method',
    titolo: 'How I write and check these pages',
    lead: 'A travel journal is only useful if you can trust it. Here I explain what comes from a trip I took, what comes from research, and how I keep the practical information up to date.',
    voci: [
      { titolo: 'Trips taken, written by the person who took them', testo: 'The day-by-day itineraries describe trips I took myself, usually with friends: stops, places to stay, transport, costs and the mistakes too. Personal memories are in the “My experience” boxes.' },
      { titolo: 'What I saw and what I only researched', testo: 'On destination and experience pages I say clearly whether I’ve been there or not. The parts that don’t come from a visit are research: I say so instead of making up a memory.' },
      { titolo: 'Prices, opening hours and documents', testo: 'I check practical information against official sources (museum, park, transport and embassy websites) when I write or update a page. It changes often: that’s why every page asks you to double-check before you go, and where there’s no reliable figure I leave it blank instead of guessing.' },
      { titolo: 'Photos', testo: 'The photos are mine or under free licenses that allow their use. Authors and licenses are listed on the credits page.', link: { href: '/crediti-fotografici', testo: 'Photo credits' } },
      { titolo: 'Affiliate links', testo: 'Some links for hotels, tours, insurance and eSIMs are affiliate links: the price doesn’t change for you, and they don’t decide what I recommend or in what order.', link: { href: '/trasparenza', testo: 'Transparency' } },
      { titolo: 'Guides and contacts I recommend', testo: 'When I can, when they deserve it and when I remember the name, I leave on the pages the contacts of guides, places to stay and operators who helped me, as a point of support. It isn’t a complete list: I often did everything on my own, the ones who didn’t convince me aren’t listed, and sometimes I forgot the names. If I have a link with someone (for example I built their website) I say so.' },
      { titolo: 'Translations', testo: 'I write in Italian. The English and Spanish versions are faithful translations of my texts: if you spot a difference, the Italian page is the reference.' },
    ],
  },
  es: {
    titoloSeo: 'Cómo trabajo: de dónde salen itinerarios, precios y fotos',
    descrizione:
      'Cómo nacen las páginas de Make It Yours World: qué he visto en persona, cómo compruebo precios y documentos, de dónde salen las fotos y cómo funcionan los enlaces de afiliado.',
    briciola: 'Cómo trabajo',
    eyebrow: 'El método',
    titolo: 'Cómo escribo y compruebo estas páginas',
    lead: 'Un diario de viaje solo sirve si uno se puede fiar. Aquí explico qué nace de un viaje hecho, qué de una investigación y cómo mantengo al día la información práctica.',
    voci: [
      { titolo: 'Viajes hechos, escritos por quien los hizo', testo: 'Los itinerarios día a día cuentan viajes que hice yo, normalmente con amigos: etapas, alojamientos, desplazamientos, costes y también los errores. Los recuerdos personales están en los recuadros «Mi experiencia».' },
      { titolo: 'Lo que vi y lo que solo estudié', testo: 'En las fichas de destinos y experiencias digo claramente si he estado o no. Lo que no nace de una visita es investigación: lo digo, en lugar de inventarme un recuerdo.' },
      { titolo: 'Precios, horarios y documentos', testo: 'Compruebo la información práctica en los canales oficiales (webs de museos, parques, transportes y embajadas) cuando escribo o actualizo la página. Cambia a menudo: por eso cada página invita a revisarla antes de salir, y donde no hay un dato fiable lo dejo vacío en lugar de estimarlo.' },
      { titolo: 'Fotos', testo: 'Las fotos son mías o con licencias libres que permiten usarlas. Autores y licencias están en la página de créditos.', link: { href: '/crediti-fotografici', testo: 'Créditos fotográficos' } },
      { titolo: 'Enlaces de afiliado', testo: 'Algunos enlaces de alojamientos, tours, seguros y eSIM son de afiliado: para ti el precio no cambia y no deciden qué recomiendo ni en qué orden.', link: { href: '/trasparenza', testo: 'Transparencia' } },
      { titolo: 'Guías y contactos que recomiendo', testo: 'Cuando puedo, si se lo merecen y si recuerdo el nombre, dejo en las fichas los contactos de guías, alojamientos y operadores que me ayudaron, como punto de apoyo. No es una lista completa: a menudo lo hice todo por mi cuenta, quien no me convenció no aparece y a veces olvidé los nombres. Si tengo un vínculo con alguien (por ejemplo, hice su web) lo digo.' },
      { titolo: 'Traducciones', testo: 'Escribo en italiano. Las versiones en inglés y español son traducciones fieles de mis textos: si encuentras una diferencia, vale la página italiana.' },
    ],
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return pageMetadata({ title: t.titoloSeo, description: t.descrizione, path: '/come-lavoro', lingua })
}

export default async function ComeLavoroPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          url: `${siteConfig.url}${localizza('/come-lavoro', lingua)}`,
          name: t.titolo,
          description: t.descrizione,
          inLanguage: LOCALE[lingua].html,
          author: autore(lingua),
        }}
      />
      <PageHeader crumbs={[{ label: 'Home', href: '/' }, { label: t.briciola }]} eyebrow={t.eyebrow} title={t.titolo} lead={t.lead} />
      <section className="sezione">
        <Container>
          <ol className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {t.voci.map((v, i) => (
              <li key={v.titolo} className="flex gap-5 border-t-2 border-ink pt-5">
                <span aria-hidden className="font-display text-3xl leading-none text-rosso tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-display text-2xl text-alpine">{v.titolo}</h2>
                  <p className="mt-3 leading-relaxed text-stone">{v.testo}</p>
                  {v.link && (
                    <Link href={v.link.href} className="mt-3 inline-block font-semibold text-rosso hover:underline">
                      {v.link.testo} →
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  )
}
