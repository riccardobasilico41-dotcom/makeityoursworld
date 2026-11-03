import { getAllViaggi } from '@/lib/viaggi'
import { getAllDestinazioni, getAllEsperienze, getAllPaesi } from '@/lib/geo'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { getContinente } from '@/lib/utils'
import { copertine } from '@/lib/i18n/contenuti'
import { etichetta, etichette } from '@/lib/i18n/etichette'
import { isLingua } from '@/lib/i18n/config'
import type { VoceIndice } from '@/lib/ricerca'

// Indice della ricerca nel sito: generato al build, scaricato dal client
// alla prima apertura del pannello «Cerca».
export const dynamic = 'force-static'

export async function GET(_req: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const lingua = isLingua(lang) ? lang : 'en'
  const paesi = getAllPaesi(lingua)
  const copertineViaggi = copertine(lingua)
  const nomePaese = new Map(paesi.map((p) => [p.slug, p.nome]))

  const voci: VoceIndice[] = [
    ...getAllViaggi(lingua).map((v) => ({
      tipo: 'viaggio' as const,
      nome: v.titolo,
      href: `/viaggi/${v.slug}`,
      paese: etichetta(getContinente(v.categorie), lingua),
      dettaglio: [etichetta(getContinente(v.categorie), lingua), v.durataBreve || v.durata].filter(Boolean).join(' · '),
      tag: etichette([...v.categorie, ...v.tags], lingua),
      immagine: copertineViaggi[v.slug]?.immagine,
    })),
    ...paesi.map((p) => ({
      tipo: 'paese' as const,
      nome: p.nome,
      href: `/destinazioni/${p.slug}`,
      paese: etichetta(p.continente, lingua),
      dettaglio: etichetta(p.continente, lingua),
      tag: etichette(p.stileViaggio, lingua),
      immagine: p.heroImage,
    })),
    ...getAllDestinazioni(lingua).map((d) => ({
      tipo: 'destinazione' as const,
      nome: d.nome,
      href: `/destinazioni/${d.paeseSlug}/${d.slug}`,
      paese: nomePaese.get(d.paeseSlug) ?? '',
      dettaglio: nomePaese.get(d.paeseSlug) ?? '',
      tag: etichette(d.tipologia, lingua),
      immagine: d.immagine,
    })),
    ...getAllEsperienze(lingua).map((e) => ({
      tipo: 'esperienza' as const,
      nome: e.nome,
      href: `/esperienze/${e.paeseSlug}/${e.slug}`,
      paese: nomePaese.get(e.paeseSlug) ?? '',
      dettaglio: [e.localita, nomePaese.get(e.paeseSlug)].filter(Boolean).join(' · '),
      tag: [e.localita],
      immagine: e.immagine,
    })),
    ...getAllMeraviglie(lingua).map((m) => ({
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
