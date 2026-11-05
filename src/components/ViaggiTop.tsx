import Image from 'next/image'
import Link from '@/components/ui/Link'
import { ArrowRight, CalendarDays, Clock, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'
import { BinarioCard } from '@/components/BinarioCard'
import { getViaggioBySlug } from '@/lib/viaggi'
import { getPaese, getTripMeta } from '@/lib/geo'
import { copertina } from '@/lib/i18n/contenuti'
import { PREFISSO_TAPPA } from '@/lib/riepilogo-viaggio'
import { plain } from '@/components/ui/Rich'
import { coloreArea } from '@/lib/colori-etichette'
import { areaDelPaese } from '@/lib/viaggi-filtri'
import type { Lingua } from '@/lib/i18n/config'

/** I nostri viaggi migliori, nell'ordine in cui compaiono nella fila. */
export const TOP = [
  'lofoten-estate-2025',
  'islanda-2024',
  'india-rajasthan-varanasi',
  'cina-classica',
  'giappone-itinerario',
  'messico-beach-life',
  'peru-due-settimane',
  'giava-bali-gili',
  'sumatra-mentawai',
  'costa-rica-itinerario',
  'sri-lanka-2023',
  'giordania-itinerario',
  'egitto-completo',
]

const T = {
  it: { eyebrow: 'I nostri viaggi top', titolo: 'Da qui si parte', sotto: 'I viaggi che rifarei domani: ognuno con l’itinerario giorno per giorno e la guida del Paese.', leggi: "Leggi l'itinerario", paese: 'Il Paese', fila: 'I nostri viaggi top' },
  en: { eyebrow: 'Our top trips', titolo: 'Start here', sotto: 'The trips I would do again tomorrow, each with a day-by-day itinerary and a guide to the country.', leggi: 'Read the itinerary', paese: 'The country', fila: 'Our top trips' },
  es: { eyebrow: 'Nuestros viajes top', titolo: 'Empieza por aquí', sotto: 'Los viajes que repetiría mañana, cada uno con el itinerario día a día y la guía del país.', leggi: 'Lee el itinerario', paese: 'El país', fila: 'Nuestros viajes top' },
} satisfies Record<Lingua, Record<string, string>>

// altezza della foto che cambia un poco da card a card, come nelle schede delle specialità
const ALTEZZE = ['h-64', 'h-56', 'h-72', 'h-60']

/**
 * Fila dei viaggi top in home: card grandi con foto, Paese, tappe principali, durata e periodo,
 * che scorrono in orizzontale (frecce e barra di avanzamento).
 */
export function ViaggiTop({ lingua }: { lingua: Lingua }) {
  const t = T[lingua]
  const schede = TOP.flatMap((slug) => {
    const v = getViaggioBySlug(slug, lingua)
    const meta = getTripMeta(slug, lingua)
    if (!v || !meta) return []
    const paese = getPaese(meta.paeseSlug, lingua)
    const tappe = meta.tappeMappa.map((tp) => tp.nome.replace(PREFISSO_TAPPA, '')).filter((n, i, a) => a.indexOf(n) === i)
    return [{ v, meta, paese, tappe, cop: copertina(slug, lingua) }]
  })

  return (
    <section className="border-t border-alpine/10 sezione">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{t.eyebrow}</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-lg font-display text-[clamp(2rem,3.4vw,3rem)] text-balance text-ink">{t.titolo}</h2>
            <p className="max-w-sm text-sm leading-relaxed text-stone">{t.sotto}</p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <BinarioCard etichetta={t.fila}>
            {schede.map(({ v, meta, paese, tappe, cop }, i) => (
              <article
                key={v.slug}
                className="scheda scheda-link group relative flex h-full flex-col overflow-hidden bg-white"
              >
                {/* tutta la card porta all'itinerario; il link al Paese resta cliccabile sopra */}
                <Link href={`/viaggi/${v.slug}`} aria-label={`${t.leggi}: ${v.titolo}`} className="absolute inset-0 z-10 focus-visible:-outline-offset-4" />
                <div className={`relative w-full shrink-0 overflow-hidden border-b-2 border-ink bg-alpine-dark ${ALTEZZE[i % ALTEZZE.length]}`}>
                  {cop && (
                    <Image
                      src={cop.immagine}
                      alt={cop.imageAlt}
                      fill
                      sizes="(min-width: 640px) 22rem, 82vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  {paese && (
                    <p className="absolute bottom-4 left-5 px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream" style={{ backgroundColor: coloreArea(areaDelPaese(meta.paeseSlug)) }}>{paese.nome}</p>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-medium leading-tight text-alpine">{v.titolo}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone">{plain(v.descrizione)}</p>
                  {tappe.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {tappe.slice(0, 4).map((n) => (
                        <li key={n} className="bg-alpine/5 px-2 py-0.5 text-[11px] font-medium text-alpine">
                          {n}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 space-y-2 border-t-2 border-ink pt-5 text-xs text-stone">
                    {v.durataBreve && (
                      <p className="flex items-center gap-2">
                        <Clock size={14} aria-hidden className="text-rosso" />
                        {v.durataBreve}
                      </p>
                    )}
                    {v.periodoBreve && (
                      <p className="flex items-center gap-2">
                        <CalendarDays size={14} aria-hidden className="text-rosso" />
                        {v.periodoBreve}
                      </p>
                    )}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-rosso">
                      {t.leggi}
                      <ArrowRight size={15} aria-hidden className="transition-transform group-hover:translate-x-1" />
                    </span>
                    {paese && (
                      <Link
                        href={`/destinazioni/${meta.paeseSlug}`}
                        aria-label={`${t.paese}: ${paese.nome}`}
                        className="relative z-20 -my-3 inline-flex min-h-11 items-center gap-1 text-sm text-stone underline-offset-4 hover:text-ink hover:underline"
                      >
                        <MapPin size={13} aria-hidden />
                        {t.paese}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </BinarioCard>
        </Reveal>
      </Container>
    </section>
  )
}
