import Image from 'next/image'
import Link from '@/components/ui/Link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'
import { AREE } from '@/lib/aree'
import { contaPaesi, getAllPaesi } from '@/lib/geo'
import { contaViaggiNellArea } from '@/lib/viaggi-filtri'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    eyebrow: 'Esplora per area',
    titolo: 'Da che parte del mondo?',
    paesi: (n: number) => `${n} ${n === 1 ? 'Paese' : 'Paesi'}`,
    viaggi: (n: number) => `${n} ${n === 1 ? 'viaggio' : 'viaggi'}`,
  },
  en: {
    eyebrow: 'Explore by region',
    titolo: 'Which part of the world?',
    paesi: (n: number) => `${n} ${n === 1 ? 'country' : 'countries'}`,
    viaggi: (n: number) => `${n} ${n === 1 ? 'trip' : 'trips'}`,
  },
  es: {
    eyebrow: 'Explora por región',
    titolo: '¿Hacia qué parte del mundo?',
    paesi: (n: number) => `${n} ${n === 1 ? 'país' : 'países'}`,
    viaggi: (n: number) => `${n} ${n === 1 ? 'viaje' : 'viajes'}`,
  },
} satisfies Record<Lingua, Record<string, string | ((n: number) => string)>>

/**
 * Porte d'ingresso della Home: le cinque aree di src/lib/aree.ts in riquadri compatti,
 * con il numero di Paesi (lo stesso della pagina /aree/<slug>) e di viaggi (lo stesso
 * del filtro ?area= dell'archivio). Ogni riquadro apre la pagina dell'area.
 */
export function EsploraAree({ lingua }: { lingua: Lingua }) {
  const t = T[lingua]
  const paesi = getAllPaesi(lingua)
  const aree = AREE.map((a) => ({
    area: a,
    nPaesi: contaPaesi(paesi.filter((p) => a.continenti.includes(p.continente))),
    nViaggi: contaViaggiNellArea(a.slug),
  }))

  return (
    <section aria-labelledby="aree-titolo" className="border-t border-alpine/10 sezione">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{t.eyebrow}</p>
          <h2 id="aree-titolo" className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] text-balance text-ink">
            {t.titolo}
          </h2>
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {aree.map(({ area, nPaesi, nViaggi }, i) => (
            // con cinque riquadri su due colonne l'ultimo prende la riga intera
            <li key={area.slug} className={i === aree.length - 1 ? 'col-span-2 lg:col-span-1' : ''}>
              <Link
                href={`/aree/${area.slug}`}
                className="group flex h-full min-h-11 flex-col overflow-hidden border-2 border-ink bg-white shadow-[4px_4px_0_var(--color-rosso)] transition-[transform,box-shadow] duration-150 hover:shadow-[6px_6px_0_var(--color-rosso)] focus-visible:shadow-[6px_6px_0_var(--color-rosso)] motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b-2 border-ink bg-alpine-dark lg:aspect-[4/3]">
                  <Image
                    src={area.immagine}
                    alt={area.imageAlt[lingua]}
                    fill
                    sizes="(min-width: 1024px) 14rem, (min-width: 640px) 45vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-3.5 sm:p-4">
                  <h3 className="flex items-start justify-between gap-2 font-display text-base leading-tight text-alpine sm:text-lg">
                    {area.nome[lingua]}
                    <ArrowUpRight size={16} aria-hidden className="mt-0.5 shrink-0 text-rosso transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                  <p className="text-xs text-stone">
                    {t.paesi(nPaesi)}
                    {nViaggi > 0 && <> · {t.viaggi(nViaggi)}</>}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
