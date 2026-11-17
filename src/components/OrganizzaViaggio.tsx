import Link from '@/components/ui/Link'
import { ArrowUpRight, BedDouble, Car, Luggage, ShieldCheck, Smartphone, Ticket, TrainFront } from 'lucide-react'
import { linkDaHref, prenota, type LinkPartner } from '@/lib/affiliazioni'
import { AvvisoAffiliati, LinkEsterno } from '@/components/LinkPartner'
import type { ListaAttrezzatura } from '@/content/attrezzatura'
import { linguaCorrente } from '@/lib/i18n/server'
import { etichetta } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    prenotaTappe: 'Prenota le stesse tappe',
    organizza: 'Organizza il viaggio',
    hotelIn: 'Hotel',
    tour: 'Tour',
    altro: 'Altro',
    hotelBooking: 'Hotel su Booking',
    hotelTrip: 'anche su Trip.com',
    visite: 'Visite e attività su GetYourGuide',
    treniCina: 'Treni in Cina',
    altaVelocita: 'Alta velocità cinese',
    assicurazione: 'Assicurazione',
    assicurazioneViaggio: 'Assicurazione di viaggio',
    internet: 'Internet',
    esimPer: (paese: string) => `eSIM per ${paese}`,
    esimIllimitata: 'eSIM dati illimitati',
    auto: 'Auto',
    noleggio: 'Noleggio auto',
    voli: 'Voli',
    voliPer: (paese: string) => `Voli per ${paese}`,
    cosaPortare: 'Cosa portare',
    laLista: 'La lista:',
    affiliati:
      'Alcuni link sono affiliati: se prenoti, il sito riceve una piccola commissione, senza costi in più per te.',
    comeFunziona: 'Come funziona',
    prenota: 'Prenota',
    affiliatiBreve: 'Link affiliati, senza costi in più per te.',
  },
  en: {
    prenotaTappe: 'Book the same stops',
    organizza: 'Plan the trip',
    hotelIn: 'Hotels',
    tour: 'Tours',
    altro: 'More',
    hotelBooking: 'Hotels on Booking',
    hotelTrip: 'also on Trip.com',
    visite: 'Tours and activities on GetYourGuide',
    treniCina: 'Trains in China',
    altaVelocita: 'Chinese high-speed rail',
    assicurazione: 'Insurance',
    assicurazioneViaggio: 'Travel insurance',
    internet: 'Internet',
    esimPer: (paese: string) => `eSIM for ${paese}`,
    esimIllimitata: 'Unlimited data eSIM',
    auto: 'Car',
    noleggio: 'Car rental',
    voli: 'Flights',
    voliPer: (paese: string) => `Flights to ${paese}`,
    cosaPortare: 'What to pack',
    laLista: 'The list:',
    affiliati:
      'Some links are affiliate links: if you book, the site earns a small commission at no extra cost to you.',
    comeFunziona: 'How it works',
    prenota: 'Book',
    affiliatiBreve: 'Affiliate links, at no extra cost to you.',
  },
  es: {
    prenotaTappe: 'Reserva las mismas paradas',
    organizza: 'Organiza el viaje',
    hotelIn: 'Hoteles',
    tour: 'Tours',
    altro: 'Más',
    hotelBooking: 'Hoteles en Booking',
    hotelTrip: 'también en Trip.com',
    visite: 'Visitas y actividades en GetYourGuide',
    treniCina: 'Trenes en China',
    altaVelocita: 'Alta velocidad china',
    assicurazione: 'Seguro',
    assicurazioneViaggio: 'Seguro de viaje',
    internet: 'Internet',
    esimPer: (paese: string) => `eSIM para ${paese}`,
    esimIllimitata: 'eSIM de datos ilimitados',
    auto: 'Coche',
    noleggio: 'Alquiler de coche',
    voli: 'Vuelos',
    voliPer: (paese: string) => `Vuelos a ${paese}`,
    cosaPortare: 'Qué llevar',
    laLista: 'La lista:',
    affiliati:
      'Algunos enlaces son de afiliados: si reservas, el sitio recibe una pequeña comisión, sin coste adicional para ti.',
    comeFunziona: 'Cómo funciona',
    prenota: 'Reservar',
    affiliatiBreve: 'Enlaces de afiliados, sin coste adicional para ti.',
  },
} satisfies Record<Lingua, Record<string, string | ((paese: string) => string)>>

type Voce = { etichetta: string; href: string; nota?: string }

function Esterno({ voce }: { voce: Voce }) {
  const l = linkDaHref(voce.href)
  return (
    <a
      href={l.href}
      target="_blank"
      rel={l.rel}
      className="group inline-flex min-h-11 items-center gap-1.5 border border-ink/20 bg-white px-3 py-1.5 text-sm text-ink transition-colors hover:border-ink hover:text-rosso"
    >
      {voce.etichetta}
      {voce.nota && <span className="text-xs text-stone">· {voce.nota}</span>}
      <ArrowUpRight size={13} aria-hidden="true" className="text-stone group-hover:text-rosso" />
    </a>
  )
}

/** Una riga della striscia: icona, etichetta e link testuali separati da un punto. */
function Riga({
  icona: Icona,
  titolo,
  voci,
}: {
  icona: typeof BedDouble
  titolo: string
  voci: { testo: string; nota?: string; link: LinkPartner }[]
}) {
  return (
    <div className="grid gap-1 border-t border-ink/10 py-2.5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
      <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone">
        <Icona size={15} aria-hidden="true" className="text-rosso" />
        {titolo}
      </dt>
      <dd className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
        {voci.map((v, i) => (
          <span key={v.link.href} className="inline-flex items-baseline gap-2">
            {i > 0 && <span aria-hidden="true" className="text-stone/60">·</span>}
            <LinkEsterno voce={v.link} className="min-h-8">
              {v.testo}
              {v.nota && <span className="ml-1 text-xs text-stone no-underline">{v.nota}</span>}
            </LinkEsterno>
          </span>
        ))}
      </dd>
    </div>
  )
}

/**
 * «Organizza il viaggio»: una striscia compatta, in tono editoriale, con i link per
 * cercare hotel e tour nelle tappe dell'itinerario, l'eSIM per il Paese e l'assicurazione.
 * Con gli ID di affiliazione vuoti (site-config `affiliati`) sono link normali; l'avviso
 * «link affiliati» compare da solo quando almeno uno dei link mostrati è affiliato.
 */
export async function OrganizzaViaggio({
  tappe,
  paese,
  asia,
  cina,
  lista,
}: {
  /** Luoghi dove dormire e cosa prenotare, nell'ordine del viaggio. */
  tappe: string[]
  paese: string
  asia: boolean
  cina: boolean
  lista?: ListaAttrezzatura
}) {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const paeseVisto = etichetta(paese, lingua)
  const luoghi = [...new Set(tappe)].slice(0, 5)
  if (luoghi.length === 0) luoghi.push(paeseVisto)

  const hotel = luoghi.map((l) => ({ testo: l, link: prenota.hotel(`${l}, ${paese}`, lingua) }))
  if (asia) hotel.push({ testo: t.hotelTrip, link: prenota.hotelAsia(luoghi[0], lingua) })
  const tour = luoghi.map((l) => ({ testo: l, link: prenota.tour(l, lingua) }))
  const esim = [
    { testo: t.esimPer(paeseVisto), nota: 'Airalo', link: prenota.esim(lingua) },
    { testo: t.esimIllimitata, nota: 'Holafly', link: prenota.esimAlternativa(lingua) },
  ]
  const assicurazione = [{ testo: t.assicurazioneViaggio, nota: 'Heymondo', link: prenota.assicurazione(lingua) }]
  const treni = cina ? [{ testo: t.altaVelocita, nota: 'Trip.com', link: prenota.treniCina(lingua) }] : []
  const altro = [
    { testo: t.noleggio, nota: 'DiscoverCars', link: prenota.auto(lingua) },
    { testo: t.voliPer(paeseVisto), nota: 'Skyscanner', link: prenota.voli(lingua) },
  ]
  const tutti = [...hotel, ...tour, ...esim, ...assicurazione, ...treni, ...altro].map((v) => v.link)

  return (
    <section id="organizza" aria-labelledby="organizza-titolo" className="scroll-mt-24 border-y-2 border-ink py-5">
      <h2 id="organizza-titolo" className="font-display text-xl text-ink sm:text-2xl">
        {t.organizza}
      </h2>
      <dl className="mt-3">
        <Riga icona={BedDouble} titolo={t.hotelIn} voci={hotel} />
        <Riga icona={Ticket} titolo={t.tour} voci={tour} />
        <Riga icona={Smartphone} titolo={t.internet} voci={esim} />
        <Riga icona={ShieldCheck} titolo={t.assicurazione} voci={assicurazione} />
        {treni.length > 0 && <Riga icona={TrainFront} titolo={t.treniCina} voci={treni} />}
        <Riga icona={Car} titolo={t.altro} voci={altro} />
        {lista && (
          <div className="grid gap-1 border-t border-ink/10 py-2.5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
            <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone">
              <Luggage size={15} aria-hidden="true" className="text-rosso" />
              {t.cosaPortare}
            </dt>
            <dd className="text-sm">
              <Link href={`/attrezzatura/${lista.slug}`} className="text-ink underline decoration-rosso decoration-2 underline-offset-[3px] hover:text-rosso">
                {t.laLista} {lista.titolo}
              </Link>
            </dd>
          </div>
        )}
      </dl>
      <AvvisoAffiliati link={tutti} lingua={lingua} className="mt-2 border-t border-ink/10 pt-3" />
    </section>
  )
}

/** Pulsante compatto per esperienze e destinazioni. */
export async function PrenotaQui({ voci }: { voci: Voce[] }) {
  const t = T[await linguaCorrente()]
  return (
    <div className="border-2 border-ink bg-cream p-5">
      <p className="font-display text-lg text-ink">{t.prenota}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {voci.map((v) => (
          <Esterno key={v.href} voce={v} />
        ))}
      </div>
      {voci.some((v) => linkDaHref(v.href).affiliato) && (
        <p className="mt-3 text-xs leading-relaxed text-stone">
          {t.affiliatiBreve}{' '}
          <Link href="/trasparenza" className="underline underline-offset-2 hover:text-rosso">
            {t.comeFunziona}
          </Link>
        </p>
      )}
    </div>
  )
}
