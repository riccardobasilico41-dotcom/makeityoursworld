import { AlertTriangle, ArrowUpRight, BedDouble, CalendarDays, Clock, Compass, Footprints, HelpCircle, Lightbulb, MapPin, Route, Ticket, Utensils, Wallet } from 'lucide-react'
import { TitoloSezione } from '@/components/scheda/Blocchi'
import type { Destinazione } from '@/lib/types'
import type { Lingua } from '@/lib/i18n/config'

/*
 * Blocchi della mini guida delle schede destinazione (campi facoltativi `luoghi`, `programmi`,
 * `zone`, `sapori`, `attenzioni`). Ogni luogo è una scheda con come, quando, quanto tempo,
 * quanto costa e un consiglio; il resto segue come sezioni brevi.
 */

const T = {
  it: { orari: 'Orari', mappa: 'Apri in Google Maps', fascia: 'Doppia a notte', gite: 'Gite in giornata', faq: 'Domande frequenti', luoghi: 'Cosa vedere, luogo per luogo', come: 'Come', quando: 'Quando', tempo: 'Quanto tempo', costo: 'Quanto costa', sito: 'Sito ufficiale', consiglio: 'Il consiglio', programmi: 'Se hai…', zone: 'Dove dormire, zona per zona', perChi: 'Per chi', sapori: 'Cosa assaggiare', attenzioni: 'Truffe e attenzioni' },
  en: { orari: 'Opening hours', mappa: 'Open in Google Maps', fascia: 'Double room per night', gite: 'Day trips', faq: 'Frequently asked questions', luoghi: 'What to see, place by place', come: 'How', quando: 'When', tempo: 'Time needed', costo: 'Cost', sito: 'Official website', consiglio: 'My tip', programmi: 'If you have…', zone: 'Where to stay, area by area', perChi: 'Best for', sapori: 'What to eat', attenzioni: 'Scams and things to watch' },
  es: { orari: 'Horarios', mappa: 'Abrir en Google Maps', fascia: 'Doble por noche', gite: 'Excursiones de un día', faq: 'Preguntas frecuentes', luoghi: 'Qué ver, lugar por lugar', come: 'Cómo', quando: 'Cuándo', tempo: 'Cuánto tiempo', costo: 'Cuánto cuesta', sito: 'Web oficial', consiglio: 'El consejo', programmi: 'Si tienes…', zone: 'Dónde dormir, zona por zona', perChi: 'Para quién', sapori: 'Qué probar', attenzioni: 'Timos y precauciones' },
} satisfies Record<Lingua, Record<string, string>>

function Dato({ icona: Icona, label, valore }: { icona: typeof Clock; label: string; valore?: string }) {
  if (!valore) return null
  return (
    // dl > div > dt + dd: l'icona sta dentro il dt, così la lista di definizioni resta valida
    <div>
      <dt className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-wider text-stone/85">
        <Icona size={16} aria-hidden className="shrink-0 text-rosso" />
        {label}
      </dt>
      <dd className="pl-[1.625rem] text-[0.95rem] leading-relaxed text-ink">{valore}</dd>
    </div>
  )
}

export function LuoghiGuida({ d, lingua }: { d: Destinazione; lingua: Lingua }) {
  if (!d.luoghi?.length) return null
  const t = T[lingua]
  return (
    <div>
      <TitoloSezione icona={MapPin}>{t.luoghi}</TitoloSezione>
      <ol className="mt-6 space-y-5">
        {d.luoghi.map((l, i) => (
          <li key={l.nome} id={`luogo-${i + 1}`} className="scroll-mt-24 border-2 border-ink bg-cream p-5 sm:p-7">
            <div className="flex items-baseline gap-3">
              <span aria-hidden className="font-display text-2xl leading-none text-rosso tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-xl text-alpine sm:text-2xl">{l.nome}</h3>
            </div>
            <p className="mt-3 max-w-[70ch] leading-relaxed text-stone">{l.testo}</p>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <Dato icona={Footprints} label={t.come} valore={l.come} />
              <Dato icona={CalendarDays} label={t.quando} valore={l.quando} />
              <Dato icona={Clock} label={t.tempo} valore={l.tempo} />
              <Dato icona={Ticket} label={t.costo} valore={l.costo} />
              <Dato icona={CalendarDays} label={t.orari} valore={l.orari} />
            </dl>
            {l.consiglio && (
              <p className="mt-5 flex gap-2.5 border-l-4 border-rosso bg-rosso/[0.05] p-3 text-[0.95rem] leading-relaxed text-ink">
                <Lightbulb size={16} aria-hidden className="mt-1 shrink-0 text-rosso" />
                <span><strong className="font-semibold">{t.consiglio}:</strong> {l.consiglio}</span>
              </p>
            )}
            {(l.url || typeof l.lat === 'number') && (
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {l.url && (
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-rosso hover:underline">
                    {t.sito} <ArrowUpRight size={14} aria-hidden />
                  </a>
                )}
                {typeof l.lat === 'number' && typeof l.lng === 'number' && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${l.lat},${l.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-rosso hover:underline"
                  >
                    <MapPin size={14} aria-hidden /> {t.mappa}
                  </a>
                )}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export function ProgrammiGuida({ d, lingua }: { d: Destinazione; lingua: Lingua }) {
  if (!d.programmi?.length) return null
  const t = T[lingua]
  return (
    <div>
      <TitoloSezione icona={Route}>{t.programmi}</TitoloSezione>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {d.programmi.map((p) => (
          <div key={p.titolo} className="border border-alpine/15 bg-white p-5">
            <h3 className="font-display text-lg text-alpine">{p.titolo}</h3>
            <ol className="mt-3 space-y-2">
              {p.tappe.map((x, i) => (
                <li key={x} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink">
                  <span aria-hidden className="font-semibold text-rosso tabular-nums">{i + 1}.</span>
                  <span>{x}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ZoneSaporiAttenzioni({ d, lingua }: { d: Destinazione; lingua: Lingua }) {
  const t = T[lingua]
  return (
    <>
      {d.zone?.length ? (
        <div>
          <TitoloSezione icona={BedDouble}>{t.zone}</TitoloSezione>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {d.zone.map((z) => (
              <li key={z.nome} className="border border-alpine/15 bg-white p-5">
                <h3 className="font-display text-lg text-alpine">{z.nome}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-rosso">
                  {t.perChi}: <span className="normal-case tracking-normal text-stone">{z.perChi}</span>
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-stone">{z.testo}</p>
                {z.fascia && (
                  <p className="mt-3 inline-flex items-center gap-2 text-sm text-ink">
                    <Wallet size={15} aria-hidden className="text-rosso" />
                    <span className="text-stone">{t.fascia}:</span> <strong className="font-semibold">{z.fascia}</strong>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {d.sapori?.length ? (
        <div>
          <TitoloSezione icona={Utensils}>{t.sapori}</TitoloSezione>
          <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {d.sapori.map((x) => (
              <li key={x.nome}>
                <p className="font-semibold text-ink">{x.nome}</p>
                <p className="text-[0.95rem] leading-relaxed text-stone">{x.testo}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {d.attenzioni?.length ? (
        <div className="border-2 border-rosso bg-rosso/[0.04] p-5 sm:p-6">
          <h2 className="flex items-center gap-2.5 font-display text-xl text-rosso sm:text-2xl">
            <AlertTriangle size={20} aria-hidden /> {t.attenzioni}
          </h2>
          <ul className="mt-4 space-y-3">
            {d.attenzioni.map((x) => (
              <li key={x} className="flex gap-3 leading-relaxed text-ink">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-rosso" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  )
}

export function GiteGuida({ d, lingua }: { d: Destinazione; lingua: Lingua }) {
  if (!d.gite?.length) return null
  const t = T[lingua]
  return (
    <div>
      <TitoloSezione icona={Compass}>{t.gite}</TitoloSezione>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {d.gite.map((g) => (
          <li key={g.nome} className="border border-alpine/15 bg-white p-5">
            <h3 className="font-display text-lg text-alpine">{g.nome}</h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-rosso">
              {g.distanza} · <span className="normal-case tracking-normal text-stone">{g.come}</span>
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-stone">{g.testo}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FaqGuida({ d, lingua }: { d: Destinazione; lingua: Lingua }) {
  if (!d.faq?.length) return null
  const t = T[lingua]
  return (
    <div className="max-w-4xl">
      <TitoloSezione icona={HelpCircle}>{t.faq}</TitoloSezione>
      <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
        {d.faq.map((f) => (
          <details key={f.domanda} className="group py-4">
            <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">
              <span className="mr-2 text-rosso group-open:hidden">+</span>
              <span className="mr-2 hidden text-rosso group-open:inline">−</span>
              {f.domanda}
            </summary>
            <p className="mt-3 leading-relaxed text-stone">{f.risposta}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
