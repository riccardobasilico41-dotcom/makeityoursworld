import Link from '@/components/ui/Link'
import { ArrowUpRight, BedDouble, Car, Luggage, Plane, ShieldCheck, Smartphone, Ticket, TrainFront } from 'lucide-react'
import { link, relAffiliato } from '@/lib/affiliazioni'
import type { ListaAttrezzatura } from '@/content/attrezzatura'
import { linguaCorrente } from '@/lib/i18n/server'
import { etichetta } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    prenotaTappe: 'Prenota le stesse tappe',
    organizza: 'Organizza questo viaggio',
    hotelBooking: 'Hotel su Booking',
    hotelTrip: 'Hotel su Trip.com',
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
    organizza: 'Plan this trip',
    hotelBooking: 'Hotels on Booking',
    hotelTrip: 'Hotels on Trip.com',
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
    organizza: 'Organiza este viaje',
    hotelBooking: 'Hoteles en Booking',
    hotelTrip: 'Hoteles en Trip.com',
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
  return (
    <a
      href={voce.href}
      target="_blank"
      rel={relAffiliato}
      className="group inline-flex min-h-11 items-center gap-1.5 border border-ink/20 bg-white px-3 py-1.5 text-sm text-ink transition-colors hover:border-ink hover:text-rosso"
    >
      {voce.etichetta}
      {voce.nota && <span className="text-xs text-stone">· {voce.nota}</span>}
      <ArrowUpRight size={13} aria-hidden="true" className="text-stone group-hover:text-rosso" />
    </a>
  )
}

function Riga({ icona: Icona, titolo, children }: { icona: typeof BedDouble; titolo: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink/15 py-4">
      <p className="mb-3 flex items-center gap-2 font-display text-base text-ink">
        <Icona size={18} aria-hidden="true" className="text-rosso" />
        {titolo}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

/**
 * «Organizza questo viaggio»: i link per prenotare le stesse tappe
 * dell'itinerario (alloggi, attività, assicurazione, eSIM, auto, voli) e la
 * lista dell'attrezzatura. I link sono affiliati (vedi src/lib/affiliazioni.ts)
 * e l'avviso lo dice sempre, anche prima che i programmi siano attivi.
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
  const luoghi = [...new Set(tappe)].slice(0, 6)
  if (luoghi.length === 0) luoghi.push(paese)

  return (
    <section id="organizza" aria-labelledby="organizza-titolo" className="scroll-mt-24 border-2 border-ink bg-cream p-5 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{t.prenotaTappe}</p>
      <h2 id="organizza-titolo" className="mt-2 font-display text-2xl text-ink sm:text-3xl">
        {t.organizza}
      </h2>

      <div className="mt-5">
        <Riga icona={BedDouble} titolo={t.hotelBooking}>
          {luoghi.map((l) => (
            <Esterno key={`b-${l}`} voce={{ etichetta: l, href: link.booking(`${l}, ${paese}`, lingua) }} />
          ))}
        </Riga>
        {asia && (
          <Riga icona={BedDouble} titolo={t.hotelTrip}>
            {luoghi.map((l) => (
              <Esterno key={`t-${l}`} voce={{ etichetta: l, href: link.tripcomHotel(l, lingua) }} />
            ))}
          </Riga>
        )}
        <Riga icona={Ticket} titolo={t.visite}>
          {luoghi.map((l) => (
            <Esterno key={`g-${l}`} voce={{ etichetta: l, href: link.getyourguide(l, lingua) }} />
          ))}
        </Riga>
        {cina && (
          <Riga icona={TrainFront} titolo={t.treniCina}>
            <Esterno voce={{ etichetta: t.altaVelocita, href: link.tripcomTreniCina(lingua), nota: 'Trip.com' }} />
          </Riga>
        )}
        <Riga icona={ShieldCheck} titolo={t.assicurazione}>
          <Esterno voce={{ etichetta: t.assicurazioneViaggio, href: link.assicurazione(lingua), nota: 'Heymondo' }} />
        </Riga>
        <Riga icona={Smartphone} titolo={t.internet}>
          <Esterno voce={{ etichetta: t.esimPer(paeseVisto), href: link.esim(lingua), nota: 'Airalo' }} />
          <Esterno voce={{ etichetta: t.esimIllimitata, href: link.esimAlternativa(lingua), nota: 'Holafly' }} />
        </Riga>
        <Riga icona={Car} titolo={t.auto}>
          <Esterno voce={{ etichetta: t.noleggio, href: link.auto(lingua), nota: 'DiscoverCars' }} />
        </Riga>
        <Riga icona={Plane} titolo={t.voli}>
          <Esterno voce={{ etichetta: t.voliPer(paeseVisto), href: link.voli(lingua), nota: 'Skyscanner' }} />
        </Riga>
        {lista && (
          <Riga icona={Luggage} titolo={t.cosaPortare}>
            <Link
              href={`/attrezzatura/${lista.slug}`}
              className="inline-flex min-h-11 items-center gap-1.5 border border-ink bg-ink px-3 py-2 text-sm font-semibold text-cream hover:bg-rosso"
            >
              {t.laLista} {lista.titolo}
            </Link>
          </Riga>
        )}
      </div>

      <p className="mt-4 border-t border-ink/15 pt-4 text-xs leading-relaxed text-stone">
        {t.affiliati}{' '}
        <Link href="/trasparenza" className="underline underline-offset-2 hover:text-rosso">
          {t.comeFunziona}
        </Link>
      </p>
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
      <p className="mt-3 text-xs leading-relaxed text-stone">
        {t.affiliatiBreve}{' '}
        <Link href="/trasparenza" className="underline underline-offset-2 hover:text-rosso">
          {t.comeFunziona}
        </Link>
      </p>
    </div>
  )
}
