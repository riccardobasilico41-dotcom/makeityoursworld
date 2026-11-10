import { Droplet } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'
import { NOMI_MESI } from '@/lib/viaggi-filtri-stato'
import type { DatiMesiPaese, VotoMese } from '@/content/paesi-mesi/tipi'

const T = {
  it: {
    titolo: (p: string) => `Quando andare in ${p}, mese per mese`,
    lead: 'Il periodo migliore in breve, con temperature indicative e quanto piove. Non è un sito di meteo: serve a scegliere il mese.',
    zona: 'Temperature e giudizi si riferiscono a',
    voti: { ideale: 'Ideale', buono: 'Buono', sconsigliato: 'Sconsigliato' },
    pioggia: { poca: 'poca pioggia', media: 'pioggia media', molta: 'molta pioggia' },
    note: 'Da sapere',
  },
  en: {
    titolo: (p: string) => `When to visit ${p}, month by month`,
    lead: 'The best time at a glance, with indicative temperatures and how much it rains. Not a weather site: it is here to help you pick the month.',
    zona: 'Temperatures and ratings refer to',
    voti: { ideale: 'Ideal', buono: 'Good', sconsigliato: 'Not recommended' },
    pioggia: { poca: 'little rain', media: 'some rain', molta: 'a lot of rain' },
    note: 'Good to know',
  },
  es: {
    titolo: (p: string) => `Cuándo ir a ${p}, mes a mes`,
    lead: 'La mejor época de un vistazo, con temperaturas orientativas y cuánto llueve. No es una web del tiempo: sirve para elegir el mes.',
    zona: 'Temperaturas y valoraciones se refieren a',
    voti: { ideale: 'Ideal', buono: 'Bueno', sconsigliato: 'Desaconsejado' },
    pioggia: { poca: 'poca lluvia', media: 'lluvia media', molta: 'mucha lluvia' },
    note: 'Conviene saber',
  },
} satisfies Record<Lingua, unknown>

const COLORE: Record<VotoMese, string> = {
  ideale: 'bg-[#2f6b3f] text-cream border-[#2f6b3f]',
  buono: 'bg-[#e9d9a6] text-ink border-[#b9a15a]',
  sconsigliato: 'bg-white text-stone border-ink/20',
}
const GOCCE = { poca: 1, media: 2, molta: 3 } as const

export async function MesiPaese({ dati, nomePaese }: { dati: DatiMesiPaese; nomePaese: string }) {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const nomi = NOMI_MESI[lingua]
  const note = dati.mesi.map((m, i) => (m.nota ? { mese: nomi[i], voto: m.voto, testo: m.nota[lingua] } : null)).filter(Boolean) as {
    mese: string
    voto: VotoMese
    testo: string
  }[]
  return (
    <section id="quando-andare" className="scroll-mt-24 border-t border-alpine/10 sezione">
      <Container>
        <SectionHeading title={t.titolo(nomePaese)} description={t.lead} />
        {dati.zona && (
          <p className="mt-3 text-sm text-stone">
            {t.zona} <strong className="font-semibold text-ink">{dati.zona[lingua]}</strong>.
          </p>
        )}
        <ol className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
          {dati.mesi.map((m, i) => (
            <li key={i} className={`flex flex-col border-2 p-3 ${COLORE[m.voto]}`}>
              <span className="text-xs font-bold uppercase tracking-[0.14em]">{nomi[i].slice(0, 3)}</span>
              <span className="mt-1 text-[0.62rem] font-semibold uppercase leading-tight tracking-normal opacity-90 [overflow-wrap:anywhere]">{t.voti[m.voto]}</span>
              <span className="mt-3 font-display text-lg leading-none tabular-nums">
                {m.tmin}°/{m.tmax}°
              </span>
              <span className="mt-2 flex gap-0.5" aria-label={t.pioggia[m.pioggia]} title={t.pioggia[m.pioggia]}>
                {Array.from({ length: 3 }, (_, k) => (
                  <Droplet key={k} size={12} aria-hidden className={k < GOCCE[m.pioggia] ? 'fill-current' : 'opacity-30'} />
                ))}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-stone">
          {(['ideale', 'buono', 'sconsigliato'] as const).map((v) => (
            <span key={v} className="inline-flex items-center gap-2">
              <span aria-hidden className={`inline-block size-3 border ${COLORE[v]}`} />
              {t.voti[v]}
            </span>
          ))}
          <span className="inline-flex items-center gap-1">
            <Droplet size={12} aria-hidden className="fill-current" /> = {t.pioggia.poca} · 3 = {t.pioggia.molta}
          </span>
        </p>
        {note.length > 0 && (
          <div className="mt-8 max-w-3xl">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">{t.note}</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone">
              {note.map((n) => (
                <li key={n.mese}>
                  <strong className="font-semibold text-ink">{n.mese.charAt(0).toUpperCase() + n.mese.slice(1)}:</strong> {n.testo}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  )
}
