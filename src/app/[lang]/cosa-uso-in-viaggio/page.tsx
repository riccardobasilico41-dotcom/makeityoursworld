import type { Metadata } from 'next'
import Link from '@/components/ui/Link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { LinkEsterno, AvvisoAffiliati } from '@/components/LinkPartner'
import { pageMetadata } from '@/lib/seo'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'
import { getAllViaggi, type Viaggio } from '@/lib/viaggi'
import { prenota, type LinkPartner } from '@/lib/affiliazioni'
import { GRUPPI, NOMI_TRADOTTI, RISORSE, type Risorsa } from '@/content/risorse-viaggio'

/*
 * «Cosa uso in viaggio»: app e servizi che Rick nomina davvero nei viaggi, con il viaggio
 * in cui compaiono. Non è nel menu e non è indicizzata (robots noindex) finché Rick non
 * l'ha vista: si apre solo dall'indirizzo diretto.
 */

const T = {
  it: {
    titolo: 'Cosa uso in viaggio',
    desc: 'App, servizi e strumenti che uso davvero nei miei viaggi, divisi per tema, con il viaggio in cui ne parlo.',
    lead: 'Le app, i servizi e gli strumenti che nomino negli itinerari, raccolti in una pagina. Accanto a ognuno, il viaggio in cui ne parlo: lì trovi il contesto.',
    citato: 'Ne parlo in',
    altri: (n: number) => `e altri ${n}`,
    vai: 'Vai',
    indice: 'In questa pagina',
  },
  en: {
    titolo: 'Travel resources',
    desc: 'Apps, services and tools I actually use on my trips, grouped by topic, with the trip where I mention them.',
    lead: 'The apps, services and tools I mention in the itineraries, gathered on one page. Next to each one, the trip where I talk about it: that is where you find the context.',
    citato: 'Mentioned in',
    altri: (n: number) => `and ${n} more`,
    vai: 'Go',
    indice: 'On this page',
  },
  es: {
    titolo: 'Recursos de viaje',
    desc: 'Apps, servicios y herramientas que uso de verdad en mis viajes, por temas, con el viaje en el que hablo de ellos.',
    lead: 'Las apps, los servicios y las herramientas que cito en los itinerarios, reunidos en una página. Junto a cada uno, el viaje en el que hablo de él: allí está el contexto.',
    citato: 'Lo cuento en',
    altri: (n: number) => `y ${n} más`,
    vai: 'Ir',
    indice: 'En esta página',
  },
} satisfies Record<Lingua, Record<string, string | ((n: number) => string)>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return {
    ...pageMetadata({ title: t.titolo, description: t.desc, path: '/cosa-uso-in-viaggio', lingua }),
    robots: { index: false, follow: false },
  }
}

/** Solo il testo che il lettore vede (niente note di redazione né materiale grezzo). */
function testoPubblico(v: Viaggio): string {
  return [
    v.compagni,
    v.apertura ?? '',
    v.schedaPratica,
    ...v.giorni.map((g) => `${g.titolo}\n${g.corpo}`),
    v.doveDormito,
    v.doveMangiato,
    ...v.sezioni.map((s) => s.corpo),
    v.chiusura ?? '',
  ].join('\n')
}

function linkRisorsa(r: Risorsa, lingua: Lingua): LinkPartner | null {
  switch (r.partner) {
    case 'booking':
      return prenota.hotel('', lingua)
    case 'tripcom':
      return prenota.treniCina(lingua)
    case 'airalo':
      return prenota.esim(lingua)
    case 'holafly':
      return prenota.esimAlternativa(lingua)
    case 'assicurazione':
      return prenota.assicurazione(lingua)
    default:
      return null
  }
}

const MAX_VIAGGI = 4

export default async function RisorseViaggioPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]

  // la ricerca si fa sul testo italiano (dove i nomi sono scritti così come li usa Rick);
  // titoli e link dei viaggi poi nella lingua della pagina
  const testi = getAllViaggi('it').map((v) => ({ slug: v.slug, testo: testoPubblico(v) }))
  const titoli = new Map(getAllViaggi(lingua).map((v) => [v.slug, v.titolo]))

  const voci = RISORSE.map((r) => ({
    risorsa: r,
    viaggi: testi.filter((v) => r.cerca.test(v.testo)).map((v) => ({ slug: v.slug, titolo: titoli.get(v.slug) ?? v.slug })),
    link: linkRisorsa(r, lingua),
  })).filter((v) => v.viaggi.length > 0)

  const gruppi = GRUPPI.map((g) => ({ ...g, voci: voci.filter((v) => v.risorsa.gruppo === g.id) })).filter((g) => g.voci.length > 0)
  const linkPartner = voci.flatMap((v) => (v.link ? [v.link] : []))

  return (
    <>
      <PageHeader crumbs={[{ label: 'Home', href: '/' }, { label: t.titolo }]} title={t.titolo} lead={<p>{t.lead}</p>} />
      <section className="py-12 sm:py-16">
        <Container>
          <nav aria-label={t.indice} className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {gruppi.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="text-ink underline decoration-rosso decoration-2 underline-offset-[5px] hover:text-rosso">
                {g.nome[lingua]}
              </a>
            ))}
          </nav>

          <div className="mt-10 max-w-3xl space-y-12">
            {gruppi.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-titolo`} className="scroll-mt-24">
                <h2 id={`${g.id}-titolo`} className="titolo-sezione text-alpine">
                  {g.nome[lingua]}
                </h2>
                <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                  {g.voci.map(({ risorsa: r, viaggi, link }) => {
                    const nome = NOMI_TRADOTTI[r.id]?.[lingua] ?? r.nome
                    return (
                      <li key={r.id} className="py-4">
                        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="font-display text-lg text-ink">{nome}</span>
                          {link && (
                            <LinkEsterno voce={link} className="text-xs">
                              {t.vai}
                            </LinkEsterno>
                          )}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-stone">{r.riga[lingua]}</p>
                        <p className="mt-1.5 text-xs leading-relaxed text-stone">
                          <span className="font-semibold uppercase tracking-[0.14em] text-stone/85">{t.citato}</span>{' '}
                          {viaggi.slice(0, MAX_VIAGGI).map((v, i) => (
                            <span key={v.slug}>
                              {i > 0 && ' · '}
                              <Link href={`/viaggi/${v.slug}`} className="text-ink underline decoration-ink/25 underline-offset-[3px] hover:text-rosso">
                                {v.titolo}
                              </Link>
                            </span>
                          ))}
                          {viaggi.length > MAX_VIAGGI && ` ${t.altri(viaggi.length - MAX_VIAGGI)}`}
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))}
          </div>

          <AvvisoAffiliati link={linkPartner} lingua={lingua} className="mt-10 max-w-3xl" />
        </Container>
      </section>
    </>
  )
}
