import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '@/components/ui/Link'
import { AlertTriangle, ArrowRight, ArrowUpRight, CalendarDays, Clock, Compass, Wallet, ShieldCheck, Ship, Backpack, FileText, Ban } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/JsonLd'
import { InfoPratiche, Ricordo, TitoloSezione } from '@/components/scheda/Blocchi'
import { Tendina } from '@/components/Tendina'
import { AMAZZONIA } from '@/content/amazzonia'
import { pageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/structured-data'
import { linguaCorrente } from '@/lib/i18n/server'

/*
 * Sezione Amazzonia: porte d'ingresso per Paese (con link alle schede che esistono già) e la
 * traversata in barca lenta Perù–Colombia–Brasile. Testi in src/content/amazzonia*.ts.
 */

const ICONE_IN_BREVE = [Clock, CalendarDays, Wallet, ShieldCheck]

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = AMAZZONIA[lingua]
  return pageMetadata({ title: t.seoTitle, description: t.seoDescription, path: '/amazzonia', type: 'article', lingua })
}

function Elenco({ titolo, voci, icona: Icona, rosso = false }: { titolo: string; voci: string[]; icona: typeof Ship; rosso?: boolean }) {
  return (
    <div className={`border p-5 sm:p-6 ${rosso ? 'border-2 border-rosso bg-rosso/[0.04]' : 'border-alpine/15 bg-white'}`}>
      <h3 className={`flex items-center gap-2.5 font-display text-xl ${rosso ? 'text-rosso' : 'text-alpine'}`}>
        <Icona size={19} aria-hidden className="text-rosso" />
        {titolo}
      </h3>
      <ul className="mt-4 space-y-3">
        {voci.map((v) => (
          <li key={v} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink">
            <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-rosso" />
            <span>{v}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default async function AmazzoniaPage() {
  const lingua = await linguaCorrente()
  const t = AMAZZONIA[lingua]
  const e = t.etichette
  const faq = faqJsonLd(t.faq, lingua)

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ nome: 'Home', percorso: '/' }, { nome: t.titolo, percorso: '/amazzonia' }], lingua),
          ...(faq ? [faq] : []),
        ]}
      />
      <PageHeader
        pieno
        crumbs={[{ label: 'Home', href: '/' }, { label: t.titolo.split(':')[0] }]}
        eyebrow={t.eyebrow}
        title={t.titolo}
        lead={t.lead}
        media={{ tipo: 'foto', src: '/images/amazzonia/fiume-alba.jpg', alt: t.heroAlt }}
      />

      <InfoPratiche titolo={{ it: 'In breve', en: 'At a glance', es: 'En resumen' }[lingua]} voci={t.inBreve.map((v, i) => ({ ...v, icona: ICONE_IN_BREVE[i] ?? Compass }))} />

      <section className="py-14 sm:py-20">
        <Container className="space-y-12">
          <Ricordo testo={t.ricordo} />

          <div className="max-w-3xl">
            <TitoloSezione icona={Compass}>{t.citta.titolo}</TitoloSezione>
            {t.citta.paragrafi.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-stone">
                {p}
              </p>
            ))}
          </div>

          <div>
            <TitoloSezione icona={ShieldCheck}>{t.sicurezza.titolo}</TitoloSezione>
            <p className="mt-4 max-w-[70ch] text-lg leading-relaxed text-stone">{t.sicurezza.testo}</p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {t.sicurezza.agenzie.map((a) => (
                <li key={a.nome} className="flex flex-col border-2 border-ink bg-cream p-5 sm:p-6">
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${a.fatta ? 'text-rosso' : 'text-stone/85'}`}>
                    {a.fatta ? e.fatta : e.nonFatta}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-alpine">{a.nome}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-stone">{a.testo}</p>
                  {a.url && (
                    <a href={a.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-rosso hover:underline">
                      {e.sitoUfficiale} <ArrowUpRight size={15} aria-hidden />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="porte" aria-labelledby="porte-titolo" className="scroll-mt-24 border-t border-alpine/10 bg-cream-dark/30 py-14 sm:py-20">
        <Container>
          <h2 id="porte-titolo" className="font-display text-[clamp(1.9rem,3.2vw,2.8rem)] text-alpine">
            {t.porte.titolo}
          </h2>
          <p className="mt-3 max-w-[65ch] text-lg leading-relaxed text-stone">{t.porte.intro}</p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.porte.voci.map((p) => (
              <li key={p.id} id={p.id} className="flex scroll-mt-24 flex-col overflow-hidden border-2 border-ink bg-cream">
                {p.immagine ? (
                  <div className="relative aspect-[16/10] bg-cream-dark">
                    <Image src={p.immagine} alt={p.imageAlt ?? p.nome} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                ) : (
                  <div aria-hidden className="flex aspect-[16/10] items-end bg-alpine p-5">
                    <span className="font-display text-3xl text-cream/90">{p.paese}</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rosso">{p.paese}</p>
                  <h3 className="mt-1 font-display text-xl leading-tight text-alpine">{p.nome}</h3>
                  <dl className="mt-4 space-y-2.5 text-[0.93rem] leading-relaxed">
                    {[
                      [e.perChi, p.perChi],
                      [e.comeArrivare, p.comeArrivare],
                      [e.giorni, p.giorni],
                      [e.costo, p.costo],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-stone/85">{k}</dt>
                        <dd className="text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  {p.attenzione && (
                    <p className="mt-4 flex gap-2 border-l-4 border-rosso bg-rosso/[0.05] p-3 text-sm leading-relaxed text-ink">
                      <AlertTriangle size={16} aria-hidden className="mt-0.5 shrink-0 text-rosso" />
                      {p.attenzione}
                    </p>
                  )}
                  {p.href && (
                    <Link href={p.href} className="group mt-5 inline-flex items-center gap-1.5 self-start font-semibold text-rosso hover:underline">
                      {t.porte.vediScheda}
                      <ArrowRight size={15} aria-hidden className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="traversata" aria-labelledby="traversata-titolo" className="scroll-mt-24 border-t border-alpine/10 py-14 sm:py-20">
        <Container>
          <h2 id="traversata-titolo" className="flex items-start gap-3 font-display text-[clamp(1.9rem,3.2vw,2.8rem)] text-alpine">
            <Ship size={30} aria-hidden className="mt-2 shrink-0 text-rosso" />
            {t.traversata.titolo}
          </h2>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-[3fr_2fr]">
            <p className="text-lg leading-relaxed text-stone">{t.traversata.intro}</p>
            <div className="relative aspect-[16/10] overflow-hidden border-2 border-ink">
              <Image src="/images/amazzonia/fiume-nuvole.jpg" alt={t.heroAlt} fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" />
            </div>
          </div>

          <p className="mt-8 flex gap-3 border-2 border-rosso bg-rosso/[0.05] p-5 leading-relaxed text-ink">
            <AlertTriangle size={20} aria-hidden className="mt-0.5 shrink-0 text-rosso" />
            {t.traversata.avvertenza}
          </p>

          <ol className="mt-10 space-y-4">
            {t.traversata.tratte.map((r, i) => (
              <li key={r.tratta} className="grid gap-4 border border-alpine/15 bg-white p-5 sm:p-6 md:grid-cols-[auto_1fr]">
                <span aria-hidden className="font-display text-3xl leading-none text-rosso tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-xl text-alpine">{r.tratta}</h3>
                  <dl className="mt-3 grid gap-3 text-[0.93rem] leading-relaxed sm:grid-cols-3">
                    {[
                      [e.come, r.come],
                      [e.durata, r.durata],
                      [e.costo, r.costo],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-stone/85">{k}</dt>
                        <dd className="text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{r.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Elenco titolo={t.traversata.documentiTitolo} voci={t.traversata.documenti} icona={FileText} />
            <Elenco titolo={t.traversata.portareTitolo} voci={t.traversata.portare} icona={Backpack} />
            <Elenco titolo={t.traversata.truffeTitolo} voci={t.traversata.truffe} icona={AlertTriangle} rosso />
            <Elenco titolo={t.traversata.zoneTitolo} voci={t.traversata.zone} icona={Ban} rosso />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-stone/85">{t.traversata.fonti}</p>
        </Container>
      </section>

      <section id="domande-frequenti" aria-labelledby="faq-amazzonia" className="scroll-mt-24 border-t border-alpine/10 py-14 sm:py-20">
        <Container>
          <h2 id="faq-amazzonia" className="font-display text-[clamp(1.8rem,3vw,2.6rem)] text-alpine">
            {e.faqTitolo}
          </h2>
          <div className="mt-8 [&>details+details]:border-t-0">
            {t.faq.map((f, i) => (
              <Tendina key={f.domanda} titolo={f.domanda} aperta={i === 0}>
                <p className="max-w-[70ch] text-base leading-relaxed text-stone">{f.risposta}</p>
              </Tendina>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
