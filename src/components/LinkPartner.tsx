import { ArrowUpRight } from 'lucide-react'
import Link from '@/components/ui/Link'
import { prenota, type LinkPartner } from '@/lib/affiliazioni'
import type { HotelNoto } from '@/lib/hotel-noti'
import type { Lingua } from '@/lib/i18n/config'

/*
 * Link contestuali verso i partner (Booking, GetYourGuide…), in tono editoriale: testo
 * piccolo sottolineato, niente pulsanti colorati. Nessun hook: funziona sia nei componenti
 * server sia in quelli client, la lingua arriva come prop.
 */

export const TESTI_PARTNER = {
  it: {
    prenota: 'Prenota',
    cercaTour: 'Cerca tour',
    avviso: 'Link affiliati: se prenoti, il sito riceve una piccola commissione, senza costi in più per te.',
    comeFunziona: 'Come funziona',
  },
  en: {
    prenota: 'Book',
    cercaTour: 'Find tours',
    avviso: 'Affiliate links: if you book, the site earns a small commission at no extra cost to you.',
    comeFunziona: 'How it works',
  },
  es: {
    prenota: 'Reservar',
    cercaTour: 'Buscar tours',
    avviso: 'Enlaces de afiliados: si reservas, el sitio recibe una pequeña comisión, sin coste adicional para ti.',
    comeFunziona: 'Cómo funciona',
  },
} satisfies Record<Lingua, Record<string, string>>

export function LinkEsterno({ voce, children, className = '' }: { voce: LinkPartner; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={voce.href}
      target="_blank"
      rel={voce.rel}
      className={`group inline-flex items-center gap-0.5 text-ink underline decoration-ink/25 decoration-1 underline-offset-[3px] transition-colors hover:text-rosso hover:decoration-rosso ${className}`}
    >
      {children}
      <ArrowUpRight size={12} aria-hidden="true" className="shrink-0 text-stone group-hover:text-rosso" />
    </a>
  )
}

/** Una riga «Prenota · Hotel A, Città · Hotel B, Città» (o «Cerca tour · …»). */
export function RigaPartner({
  etichetta,
  voci,
  lingua,
  className = '',
}: {
  etichetta: string
  voci: { testo: string; link: LinkPartner }[]
  lingua: Lingua
  className?: string
}) {
  if (voci.length === 0) return null
  return (
    <div className={`text-xs leading-relaxed text-stone ${className}`}>
      <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-semibold uppercase tracking-[0.14em] text-stone/85">{etichetta}</span>
        {voci.map((v, i) => (
          <span key={v.link.href} className="inline-flex items-baseline gap-2">
            {i > 0 && <span aria-hidden="true">·</span>}
            <LinkEsterno voce={v.link} className="min-h-6">
              {v.testo}
            </LinkEsterno>
          </span>
        ))}
      </p>
      <AvvisoAffiliati link={voci.map((v) => v.link)} lingua={lingua} className="mt-1" />
    </div>
  )
}

/** Avviso di una riga, solo se tra i link mostrati ce n'è almeno uno affiliato. */
export function AvvisoAffiliati({ link, lingua, className = '' }: { link: LinkPartner[]; lingua: Lingua; className?: string }) {
  if (!link.some((l) => l.affiliato)) return null
  const t = TESTI_PARTNER[lingua]
  return (
    <p className={`text-[0.7rem] leading-relaxed text-stone ${className}`}>
      {t.avviso}{' '}
      <Link href="/trasparenza" className="underline underline-offset-2 hover:text-rosso">
        {t.comeFunziona}
      </Link>
    </p>
  )
}

/** Riga «Prenota» sotto «Dove abbiamo dormito»: una ricerca Booking per ogni hotel con il nome noto. */
export function PrenotaHotelNoti({ hotel, lingua }: { hotel: HotelNoto[]; lingua: Lingua }) {
  return (
    <RigaPartner
      className="mt-5 border-t border-ink/10 pt-3"
      lingua={lingua}
      etichetta={TESTI_PARTNER[lingua].prenota}
      voci={hotel.map((h) => ({ testo: `${h.hotel}, ${h.citta}`, link: prenota.hotel(`${h.hotel}, ${h.citta}`, lingua) }))}
    />
  )
}
