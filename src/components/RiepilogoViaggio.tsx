import { CalendarDays, Clock, Gauge, Globe2, MapPinned, Route, Sparkles, Users, Wallet, Heart } from 'lucide-react'
import { InfoPratiche } from '@/components/scheda/Blocchi'
import { datiRiepilogo, PREFISSO_TAPPA } from '@/lib/riepilogo-viaggio'
import { getPaese } from '@/lib/geo'
import { AREE } from '@/lib/aree'
import { areaDelPaese, paesiDelViaggio } from '@/lib/viaggi-filtri'
import { etichetta } from '@/lib/i18n/etichette'
import type { Viaggio } from '@/lib/viaggi'
import type { TripMeta } from '@/lib/types'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    durata: 'Durata',
    quando: 'Quando',
    budget: 'Budget indicativo',
    ritmo: 'Ritmo',
    muoversi: 'Come ci si muove',
    tappe: 'Tappe principali',
    paesi: 'Paesi e area',
    stile: 'Tipo di viaggio',
    altre: (n: number) => `e altre ${n}`,
    conChi: 'Con chi',
    adattoA: 'Adatto a',
  },
  en: {
    durata: 'Length',
    quando: 'When',
    budget: 'Estimated budget',
    ritmo: 'Pace',
    muoversi: 'Getting around',
    tappe: 'Main stops',
    paesi: 'Countries and area',
    stile: 'Type of trip',
    altre: (n: number) => `and ${n} more`,
    conChi: 'Traveling with',
    adattoA: 'Good for',
  },
  es: {
    durata: 'Duración',
    quando: 'Cuándo',
    budget: 'Presupuesto orientativo',
    ritmo: 'Ritmo',
    muoversi: 'Cómo moverse',
    tappe: 'Paradas principales',
    paesi: 'Países y zona',
    stile: 'Tipo de viaje',
    altre: (n: number) => `y ${n} más`,
    conChi: 'Con quién',
    adattoA: 'Ideal para',
  },
} satisfies Record<Lingua, Record<string, string | ((n: number) => string)>>

const MAX_TAPPE = 6

/** Paesi del viaggio con il link alla loro pagina, poi l'area con il link alla pagina dell'area. */
function paesiEArea(slug: string, lingua: Lingua): string | undefined {
  const paesi = paesiDelViaggio(slug)
  const link = paesi
    .map((p) => {
      const nome = getPaese(p, lingua)?.nome
      return nome ? `[${nome}](/destinazioni/${p})` : null
    })
    .filter(Boolean)
  const aree = [...new Set(paesi.map(areaDelPaese).filter((a): a is string => !!a))]
    .map((a) => AREE.find((x) => x.slug === a))
    .filter((a) => !!a)
    .map((a) => `[${a.nome[lingua]}](/aree/${a.slug})`)
  const parti = [link.join(' · '), aree.join(' · ')].filter(Boolean)
  return parti.length ? parti.join(' — ') : undefined
}

/** Le tappe della mappa nell'ordine di visita, senza ripetizioni («Rientro a Tokyo» è Tokyo). */
function tappePrincipali(meta: TripMeta, altre: (n: number) => string): string | undefined {
  const visti = new Set<string>()
  const nomi: string[] = []
  for (const t of meta.tappeMappa) {
    const nome = t.nome.replace(PREFISSO_TAPPA, '').trim()
    const k = nome.toLowerCase()
    if (!nome || visti.has(k)) continue
    visti.add(k)
    nomi.push(nome)
  }
  if (nomi.length === 0) return undefined
  const resto = nomi.length - MAX_TAPPE
  return nomi.slice(0, MAX_TAPPE).join(' → ') + (resto > 0 ? ` ${altre(resto)}` : '')
}

/** Lo stile del viaggio (TripMeta.stile), tradotto e senza doppioni. */
function stile(meta: TripMeta, lingua: Lingua): string | undefined {
  const voci = [...new Set(meta.stile.map((s) => etichetta(s.trim(), lingua)).filter(Boolean))]
  if (voci.length === 0) return undefined
  const testo = voci.join(' · ')
  return testo.charAt(0).toUpperCase() + testo.slice(1)
}

/**
 * Riepilogo in cima al viaggio, subito sotto l'intestazione: stessa griglia con
 * icone delle schede destinazione/esperienza (`InfoPratiche`), così le pagine si
 * somigliano. Le voci senza dato non compaiono. L'id `scheda-riassuntiva` resta
 * quello a cui puntano i link «Quando andare» / «Come spostarsi» delle pagine Paese.
 * È l'unica sintesi della pagina: Paesi (con link alle pagine Paese) e area, tappe
 * principali e tipo di viaggio stanno qui e non si ripetono altrove.
 */
export async function RiepilogoViaggio({ viaggio, meta }: { viaggio: Viaggio; meta: TripMeta }) {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const d = datiRiepilogo(viaggio, meta, lingua)
  return (
    <div id="scheda-riassuntiva" className="scroll-mt-4">
      <InfoPratiche
        voci={[
          { label: t.durata, value: d.durata, icona: Clock },
          { label: t.quando, value: d.quando, icona: CalendarDays },
          { label: t.budget, value: d.budget, icona: Wallet },
          { label: t.ritmo, value: d.ritmo, icona: Gauge },
          { label: t.muoversi, value: d.muoversi, icona: Route },
          { label: t.paesi, value: paesiEArea(viaggio.slug, lingua), icona: Globe2 },
          { label: t.tappe, value: tappePrincipali(meta, t.altre) ?? d.tappe, icona: MapPinned },
          { label: t.stile, value: stile(meta, lingua), icona: Sparkles },
          { label: t.conChi, value: d.conChi, icona: Users },
          { label: t.adattoA, value: d.adattoA, icona: Heart },
        ]}
      />
    </div>
  )
}
