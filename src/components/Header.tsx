import Link from '@/components/ui/Link'
import { getAllPaesi } from '@/lib/geo'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { Marchio } from './Marchio'
import { NavPrincipale, type GruppoMenu } from './NavPrincipale'
import { Ricerca } from './Ricerca'
import { SalvatiContatore } from './SalvatiContatore'
import { SelettoreLingua } from './SelettoreLingua'
import { linguaCorrente } from '@/lib/i18n/server'
import { LOCALE, type Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    aree: {
      Asia: 'Asia',
      Europa: 'Europa',
      'Africa e Medio Oriente': 'Africa e Medio Oriente',
      'Nord e Centro America': 'Nord e Centro America',
      'Sud America': 'Sud America',
    },
    meraviglie: 'Meraviglie',
    tuttiPaesi: 'Tutti i Paesi',
    sette: 'Le sette meraviglie',
  },
  en: {
    aree: {
      Asia: 'Asia',
      Europa: 'Europe',
      'Africa e Medio Oriente': 'Africa & Middle East',
      'Nord e Centro America': 'North & Central America',
      'Sud America': 'South America',
    },
    meraviglie: 'Wonders',
    tuttiPaesi: 'All countries',
    sette: 'The seven wonders',
  },
  es: {
    aree: {
      Asia: 'Asia',
      Europa: 'Europa',
      'Africa e Medio Oriente': 'África y Oriente Medio',
      'Nord e Centro America': 'Norte y Centroamérica',
      'Sud America': 'Sudamérica',
    },
    meraviglie: 'Maravillas',
    tuttiPaesi: 'Todos los países',
    sette: 'Las siete maravillas',
  },
} satisfies Record<Lingua, { aree: Record<string, string>; meraviglie: string; tuttiPaesi: string; sette: string }>

/** Macro-aree del menu: ogni area raccoglie uno o più `continente` dei Paesi (`nome` = chiave italiana, tradotta a schermo). */
const AREE: { nome: string; continenti: string[] }[] = [
  { nome: 'Asia', continenti: ['Asia'] },
  { nome: 'Europa', continenti: ['Europa'] },
  { nome: 'Africa e Medio Oriente', continenti: ['Africa', 'Medio Oriente'] },
  { nome: 'Nord e Centro America', continenti: ['Nord America', 'America Centrale'] },
  { nome: 'Sud America', continenti: ['Sud America'] },
]

/* Testata: marchio a macchina da scrivere a sinistra, menu per area a destra
 * (ogni area apre l'elenco dei suoi Paesi), poi «Cerca» e il cuore dei salvati,
 * filo nero sotto. Non sticky:
 * StickyTableOfContents porta l'orientamento nelle pagine lunghe. */
export async function Header() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const paesi = getAllPaesi(lingua)
  const gruppi: GruppoMenu[] = AREE.map((a) => ({
    nome: t.aree[a.nome as keyof typeof t.aree],
    voci: paesi
      .filter((p) => a.continenti.includes(p.continente))
      .sort((x, y) => x.nome.localeCompare(y.nome, LOCALE[lingua].html))
      .map((p) => ({ nome: p.nome, href: `/destinazioni/${p.slug}` })),
    tutti: { nome: t.tuttiPaesi, href: '/destinazioni' },
  })).filter((g) => g.voci.length > 0)

  gruppi.push({
    nome: t.meraviglie,
    voci: getAllMeraviglie(lingua).map((m) => ({ nome: m.nome, href: `/meraviglie/${m.slug}` })),
    tutti: { nome: t.sette, href: '/meraviglie' },
  })

  return (
    <header className="relative z-40 border-b border-ink/15 bg-cream">
      <div className="flex items-center justify-between gap-x-3 px-4 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="shrink-0 text-[1.2rem] text-ink min-[420px]:text-[1.35rem] sm:text-[1.6rem]">
          <Marchio />
        </Link>
        <div className="flex shrink-0 items-center gap-x-1 min-[420px]:gap-x-3 sm:gap-x-5 xl:gap-x-4 2xl:gap-x-5">
          <NavPrincipale gruppi={gruppi} />
          <SelettoreLingua className="hidden min-[420px]:flex" />
          <Ricerca />
          <SalvatiContatore />
        </div>
      </div>
    </header>
  )
}
