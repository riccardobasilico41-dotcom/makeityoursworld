import { getAllViaggi } from '@/lib/viaggi'
import { getAllDestinazioni, getAllEsperienze, getAllPaesi } from '@/lib/geo'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { getContinente } from '@/lib/utils'
import { copertineViaggi } from '@/content/viaggi-copertine'
import type { VoceIndice } from '@/lib/ricerca'

// Indice della ricerca nel sito: generato al build, scaricato dal client
// alla prima apertura del pannello «Cerca».
export const dynamic = 'force-static'

export function GET() {
  const paesi = getAllPaesi()
  const nomePaese = new Map(paesi.map((p) => [p.slug, p.nome]))

  const voci: VoceIndice[] = [
    ...getAllViaggi().map((v) => ({
      tipo: 'viaggio' as const,
      nome: v.titolo,
      href: `/viaggi/${v.slug}`,
      paese: getContinente(v.categorie),
      dettaglio: [getContinente(v.categorie), v.durataBreve || v.durata].filter(Boolean).join(' · '),
      tag: [...v.categorie, ...v.tags],
      immagine: copertineViaggi[v.slug]?.immagine,
    })),
    ...paesi.map((p) => ({
      tipo: 'paese' as const,
      nome: p.nome,
      href: `/destinazioni/${p.slug}`,
      paese: p.continente,
      dettaglio: p.continente,
      tag: p.stileViaggio,
      immagine: p.heroImage,
    })),
    ...getAllDestinazioni().map((d) => ({
      tipo: 'destinazione' as const,
      nome: d.nome,
      href: `/destinazioni/${d.paeseSlug}/${d.slug}`,
      paese: nomePaese.get(d.paeseSlug) ?? '',
      dettaglio: nomePaese.get(d.paeseSlug) ?? '',
      tag: d.tipologia,
      immagine: d.immagine,
    })),
    ...getAllEsperienze().map((e) => ({
      tipo: 'esperienza' as const,
      nome: e.nome,
      href: `/esperienze/${e.paeseSlug}/${e.slug}`,
      paese: nomePaese.get(e.paeseSlug) ?? '',
      dettaglio: [e.localita, nomePaese.get(e.paeseSlug)].filter(Boolean).join(' · '),
      tag: [e.localita],
      immagine: e.immagine,
    })),
    ...getAllMeraviglie().map((m) => ({
      tipo: 'meraviglia' as const,
      nome: m.nome,
      href: `/meraviglie/${m.slug}`,
      paese: m.paese,
      dettaglio: [m.citta, m.paese].filter(Boolean).join(' · '),
      tag: [m.citta, m.nomeLocale ?? ''].filter(Boolean),
      immagine: m.heroImage,
    })),
  ]

  return Response.json(voci)
}
