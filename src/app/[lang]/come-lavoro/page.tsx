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
 * Metodo editoriale (E-E-A-T): tutti i viaggi nascono da esperienze personali di Rick, alcuni
 * itinerari ne combinano più d'uno (brief 6/11/2026, sezione 1); come si verificano prezzi e
 * documenti, da dove vengono le foto, come funzionano link affiliati e traduzioni.
 * Descrive come il sito è fatto davvero, senza promesse e senza ricordi inventati.
 */

type Voce = { titolo: string; testo: string; link?: { href: string; testo: string } }

const T: Record<Lingua, { titoloSeo: string; descrizione: string; briciola: string; eyebrow: string; titolo: string; lead: string; voci: Voce[] }> = {
  it: {
    titoloSeo: 'Come lavoro: da dove vengono itinerari, prezzi e foto',
    descrizione:
      'Come nascono le pagine di Make It Yours World: viaggi fatti di persona, itinerari che a volte ne uniscono più d’uno, come controllo prezzi e documenti, da dove vengono le foto e come funzionano i link affiliati.',
    briciola: 'Come lavoro',
    eyebrow: 'Il metodo',
    titolo: 'Come scrivo e controllo queste pagine',
    lead: 'Un diario di viaggio serve se ci si può fidare. Qui spiego da dove nascono gli itinerari, come li costruisco e come tengo aggiornate le informazioni pratiche.',
    voci: [
      { titolo: 'Viaggi fatti, scritti da chi li ha fatti', testo: 'Ogni viaggio raccontato su questo sito nasce da luoghi che ho visitato di persona e da esperienze che ho vissuto davvero, di solito con amici: tappe, alloggi, spostamenti, costi e anche gli errori. I ricordi personali stanno nei riquadri «La mia esperienza».' },
      { titolo: 'Itinerari che uniscono più viaggi', testo: 'Alcuni itinerari combinano più viaggi in un unico percorso pratico, per aiutarti a scoprire il meglio di una destinazione. I luoghi li ho visitati tutti, ma non sempre in quella esatta sequenza di giorni: l’ordine delle tappe è pensato per chi parte adesso.' },
      { titolo: 'Prezzi, orari e documenti', testo: 'Le informazioni pratiche le controllo sui canali ufficiali (siti dei musei, dei parchi, dei trasporti e delle ambasciate) quando scrivo o aggiorno la pagina. Cambiano spesso: per questo ogni pagina invita a ricontrollarle prima di partire, e dove un dato affidabile non c’è, lo lascio vuoto invece di stimarlo.' },
      { titolo: 'Foto', testo: 'Molte foto sono mie, scattate durante i viaggi. Le altre sono immagini di repertorio con licenze che ne permettono l’uso: autori e licenze sono elencati nella pagina dei crediti.', link: { href: '/crediti-fotografici', testo: 'Crediti fotografici' } },
      { titolo: 'Link affiliati', testo: 'I link per alloggi, tour, assicurazioni ed eSIM possono essere di affiliazione: la pagina Trasparenza dice quali programmi sono attivi. Per te il prezzo non cambia, e non decidono cosa consiglio né in che ordine.', link: { href: '/trasparenza', testo: 'Trasparenza' } },
      { titolo: 'Guide e contatti che consiglio', testo: 'Quando posso, se se lo meritano e se mi ricordo il nome, nelle schede lascio i contatti di guide, alloggi e operatori che mi hanno aiutato, come punto d’appoggio. Non è un elenco completo: spesso ho fatto tutto in autonomia, chi non mi ha convinto non compare, e a volte i nomi li ho dimenticati. Se ho un legame con qualcuno (per esempio ho fatto il suo sito) lo scrivo.' },
      { titolo: 'Traduzioni', testo: 'Scrivo in italiano. Le versioni in inglese e spagnolo sono traduzioni fedeli dei miei testi: se trovi una differenza, fa fede la pagina italiana.' },
    ],
  },
  en: {
    titoloSeo: 'How I work: where itineraries, prices and photos come from',
    descrizione:
      'How the pages of Make It Yours World are made: trips taken in person, itineraries that sometimes combine more than one, how I check prices and documents, where the photos come from and how affiliate links work.',
    briciola: 'How I work',
    eyebrow: 'The method',
    titolo: 'How I write and check these pages',
    lead: 'A travel journal is only useful if you can trust it. Here I explain where the itineraries come from, how I put them together and how I keep the practical information up to date.',
    voci: [
      { titolo: 'Trips taken, written by the person who took them', testo: 'Every journey featured on this website is rooted in places I’ve personally visited and experiences I’ve actually lived, usually with friends: stops, places to stay, transport, costs and the mistakes too. Personal memories are in the “My experience” boxes.' },
      { titolo: 'Itineraries that combine several trips', testo: 'Some itineraries bring together different trips into one practical route, so you can make the most of each destination. I have visited all the places, but not always in that exact sequence of days: the order of the stops is designed for whoever sets off now.' },
      { titolo: 'Prices, opening hours and documents', testo: 'I check practical information against official sources (museum, park, transport and embassy websites) when I write or update a page. It changes often: that’s why every page asks you to double-check before you go, and where there’s no reliable figure I leave it blank instead of guessing.' },
      { titolo: 'Photos', testo: 'Many photos are mine, taken during the trips. The others are stock images under licenses that allow their use: authors and licenses are listed on the credits page.', link: { href: '/crediti-fotografici', testo: 'Photo credits' } },
      { titolo: 'Affiliate links', testo: 'Links for hotels, tours, insurance and eSIMs may be affiliate links: the Transparency page says which programs are active. The price doesn’t change for you, and they don’t decide what I recommend or in what order.', link: { href: '/trasparenza', testo: 'Transparency' } },
      { titolo: 'Guides and contacts I recommend', testo: 'When I can, when they deserve it and when I remember the name, I leave on the pages the contacts of guides, places to stay and operators who helped me, as a point of support. It isn’t a complete list: I often did everything on my own, the ones who didn’t convince me aren’t listed, and sometimes I forgot the names. If I have a link with someone (for example I built their website) I say so.' },
      { titolo: 'Translations', testo: 'I write in Italian. The English and Spanish versions are faithful translations of my texts: if you spot a difference, the Italian page is the reference.' },
    ],
  },
  es: {
    titoloSeo: 'Cómo trabajo: de dónde salen itinerarios, precios y fotos',
    descrizione:
      'Cómo nacen las páginas de Make It Yours World: viajes hechos en persona, itinerarios que a veces unen más de uno, cómo compruebo precios y documentos, de dónde salen las fotos y cómo funcionan los enlaces de afiliado.',
    briciola: 'Cómo trabajo',
    eyebrow: 'El método',
    titolo: 'Cómo escribo y compruebo estas páginas',
    lead: 'Un diario de viaje solo sirve si uno se puede fiar. Aquí explico de dónde nacen los itinerarios, cómo los construyo y cómo mantengo al día la información práctica.',
    voci: [
      { titolo: 'Viajes hechos, escritos por quien los hizo', testo: 'Cada viaje de esta web nace de lugares que he visitado personalmente y de experiencias que he vivido, normalmente con amigos: etapas, alojamientos, desplazamientos, costes y también los errores. Los recuerdos personales están en los recuadros «Mi experiencia».' },
      { titolo: 'Itinerarios que unen varios viajes', testo: 'Algunos itinerarios combinan varios viajes en una sola ruta práctica para ayudarte a descubrir lo mejor de cada destino. He visitado todos los lugares, pero no siempre en esa secuencia exacta de días: el orden de las etapas está pensado para quien sale ahora.' },
      { titolo: 'Precios, horarios y documentos', testo: 'Compruebo la información práctica en los canales oficiales (webs de museos, parques, transportes y embajadas) cuando escribo o actualizo la página. Cambia a menudo: por eso cada página invita a revisarla antes de salir, y donde no hay un dato fiable lo dejo vacío en lugar de estimarlo.' },
      { titolo: 'Fotos', testo: 'Muchas fotos son mías, hechas durante los viajes. Las demás son imágenes de archivo con licencias que permiten usarlas: autores y licencias están en la página de créditos.', link: { href: '/crediti-fotografici', testo: 'Créditos fotográficos' } },
      { titolo: 'Enlaces de afiliado', testo: 'Los enlaces de alojamientos, tours, seguros y eSIM pueden ser de afiliado: la página Transparencia indica qué programas están activos. Para ti el precio no cambia, y no deciden qué recomiendo ni en qué orden.', link: { href: '/trasparenza', testo: 'Transparencia' } },
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
