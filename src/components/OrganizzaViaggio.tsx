import Link from 'next/link'
import { ArrowUpRight, BedDouble, Car, Luggage, Plane, ShieldCheck, Smartphone, Ticket, TrainFront } from 'lucide-react'
import { link, relAffiliato } from '@/lib/affiliazioni'
import type { ListaAttrezzatura } from '@/content/attrezzatura'

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
export function OrganizzaViaggio({
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
  const luoghi = [...new Set(tappe)].slice(0, 6)
  if (luoghi.length === 0) luoghi.push(paese)

  return (
    <section id="organizza" aria-labelledby="organizza-titolo" className="scroll-mt-24 border-2 border-ink bg-cream p-5 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Prenota le stesse tappe</p>
      <h2 id="organizza-titolo" className="mt-2 font-display text-2xl text-ink sm:text-3xl">
        Organizza questo viaggio
      </h2>

      <div className="mt-5">
        <Riga icona={BedDouble} titolo="Hotel su Booking">
          {luoghi.map((l) => (
            <Esterno key={`b-${l}`} voce={{ etichetta: l, href: link.booking(`${l}, ${paese}`) }} />
          ))}
        </Riga>
        {asia && (
          <Riga icona={BedDouble} titolo="Hotel su Trip.com">
            {luoghi.map((l) => (
              <Esterno key={`t-${l}`} voce={{ etichetta: l, href: link.tripcomHotel(l) }} />
            ))}
          </Riga>
        )}
        <Riga icona={Ticket} titolo="Visite e attività su GetYourGuide">
          {luoghi.map((l) => (
            <Esterno key={`g-${l}`} voce={{ etichetta: l, href: link.getyourguide(l) }} />
          ))}
        </Riga>
        {cina && (
          <Riga icona={TrainFront} titolo="Treni in Cina">
            <Esterno voce={{ etichetta: 'Alta velocità cinese', href: link.tripcomTreniCina(), nota: 'Trip.com' }} />
          </Riga>
        )}
        <Riga icona={ShieldCheck} titolo="Assicurazione">
          <Esterno voce={{ etichetta: 'Assicurazione di viaggio', href: link.assicurazione(), nota: 'Heymondo' }} />
        </Riga>
        <Riga icona={Smartphone} titolo="Internet">
          <Esterno voce={{ etichetta: `eSIM per ${paese}`, href: link.esim(), nota: 'Airalo' }} />
          <Esterno voce={{ etichetta: 'eSIM dati illimitati', href: link.esimAlternativa(), nota: 'Holafly' }} />
        </Riga>
        <Riga icona={Car} titolo="Auto">
          <Esterno voce={{ etichetta: 'Noleggio auto', href: link.auto(), nota: 'DiscoverCars' }} />
        </Riga>
        <Riga icona={Plane} titolo="Voli">
          <Esterno voce={{ etichetta: `Voli per ${paese}`, href: link.voli(), nota: 'Skyscanner' }} />
        </Riga>
        {lista && (
          <Riga icona={Luggage} titolo="Cosa portare">
            <Link
              href={`/attrezzatura/${lista.slug}`}
              className="inline-flex min-h-11 items-center gap-1.5 border border-ink bg-ink px-3 py-2 text-sm font-semibold text-cream hover:bg-rosso"
            >
              La lista: {lista.titolo}
            </Link>
          </Riga>
        )}
      </div>

      <p className="mt-4 border-t border-ink/15 pt-4 text-xs leading-relaxed text-stone">
        Alcuni link sono affiliati: se prenoti, il sito riceve una piccola commissione, senza costi in più per te.{' '}
        <Link href="/trasparenza" className="underline underline-offset-2 hover:text-rosso">
          Come funziona
        </Link>
      </p>
    </section>
  )
}

/** Pulsante compatto per esperienze e destinazioni. */
export function PrenotaQui({ voci }: { voci: Voce[] }) {
  return (
    <div className="border-2 border-ink bg-cream p-5">
      <p className="font-display text-lg text-ink">Prenota</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {voci.map((v) => (
          <Esterno key={v.href} voce={v} />
        ))}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-stone">
        Link affiliati, senza costi in più per te.{' '}
        <Link href="/trasparenza" className="underline underline-offset-2 hover:text-rosso">
          Come funziona
        </Link>
      </p>
    </div>
  )
}
