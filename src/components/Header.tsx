import Link from 'next/link'
import { getAllPaesi } from '@/lib/geo'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { Marchio } from './Marchio'
import { NavPrincipale, type GruppoMenu } from './NavPrincipale'

/** Macro-aree del menu: ogni area raccoglie uno o più `continente` dei Paesi. */
const AREE: { nome: string; continenti: string[] }[] = [
  { nome: 'Asia', continenti: ['Asia'] },
  { nome: 'Europa', continenti: ['Europa'] },
  { nome: 'Africa e Medio Oriente', continenti: ['Africa', 'Medio Oriente'] },
  { nome: 'Nord e Centro America', continenti: ['Nord America', 'America Centrale'] },
  { nome: 'Sud America', continenti: ['Sud America'] },
]

/* Testata: marchio a macchina da scrivere a sinistra, menu per area a destra
 * (ogni area apre l'elenco dei suoi Paesi), filo nero sotto. Non sticky:
 * StickyTableOfContents porta l'orientamento nelle pagine lunghe. */
export function Header() {
  const paesi = getAllPaesi()
  const gruppi: GruppoMenu[] = AREE.map((a) => ({
    nome: a.nome,
    voci: paesi
      .filter((p) => a.continenti.includes(p.continente))
      .sort((x, y) => x.nome.localeCompare(y.nome, 'it'))
      .map((p) => ({ nome: p.nome, href: `/destinazioni/${p.slug}` })),
    tutti: { nome: 'Tutti i Paesi', href: '/destinazioni' },
  })).filter((g) => g.voci.length > 0)

  gruppi.push({
    nome: 'Meraviglie',
    voci: getAllMeraviglie().map((m) => ({ nome: m.nome, href: `/meraviglie/${m.slug}` })),
    tutti: { nome: 'Le sette meraviglie', href: '/meraviglie' },
  })

  return (
    <header className="relative z-40 border-b border-ink/15 bg-cream">
      <div className="flex items-center justify-between gap-x-8 px-4 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="text-[1.35rem] text-ink sm:text-[1.6rem]">
          <Marchio />
        </Link>
        <NavPrincipale gruppi={gruppi} />
      </div>
    </header>
  )
}
