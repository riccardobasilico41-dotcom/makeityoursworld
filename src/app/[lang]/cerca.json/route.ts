import { getAllViaggi } from '@/lib/viaggi'
import { getAllDestinazioni, getAllEsperienze, getAllPaesi, getTripMeta, nomeConStato } from '@/lib/geo'
import { mesiDelViaggio, paesiDelViaggio } from '@/lib/viaggi-filtri'
import { NOMI_MESI, STILI_NOTI, stiliDaCategorie } from '@/lib/viaggi-filtri-stato'
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
  // «Transilvania · Romania»: per le regioni lo Stato accanto al nome
  const nomeCompleto = new Map(paesi.map((p) => [p.slug, nomeConStato(p)]))
  const stiliNoti = new Set<string>(STILI_NOTI)

  const voci: VoceIndice[] = [
    ...getAllViaggi(lingua).map((v) => {
      // i Paesi veri del viaggio (come il filtro ?paese= dell'archivio), non il continente
      const slugPaesi = paesiDelViaggio(v.slug)
      const nomiPaesi = slugPaesi.map((s) => nomePaese.get(s))
      // lo Stato della regione si aggiunge solo se non è già tra i Paesi del viaggio (Borneo malese + Malesia)
      const luogo = slugPaesi
        .map((s) => (nomiPaesi.includes(paesi.find((p) => p.slug === s)?.stato) ? nomePaese.get(s) : nomeCompleto.get(s)))
        .filter(Boolean)
        .join(' · ')
      const continente = etichetta(getContinente(v.categorie), lingua)
      // mesi in cui è stato fatto («luglio») e stili («trekking», «mare»), così la ricerca li trova
      const mesi = mesiDelViaggio(v.slug).map((m) => NOMI_MESI[lingua][m - 1])
      const stili = [...stiliDaCategorie(v.categorie, v.tags), ...(getTripMeta(v.slug, 'it')?.stile ?? []).filter((s) => !stiliNoti.has(s))]
      return {
        tipo: 'viaggio' as const,
        nome: v.titolo,
        href: `/viaggi/${v.slug}`,
        paese: luogo || continente,
        dettaglio: [luogo || continente, v.durataBreve || v.durata].filter(Boolean).join(' · '),
        tag: [...etichette([...v.categorie, ...v.tags, ...new Set(stili)], lingua), continente, ...mesi],
        immagine: copertineViaggi[v.slug]?.immagine,
      }
    }),
    ...paesi.map((p) => ({
      tipo: 'paese' as const,
      nome: p.nome,
      href: `/destinazioni/${p.slug}`,
      // una regione si trova anche cercando il suo Stato («Romania» → Transilvania)
      paese: [p.tipo === 'regione' ? p.stato : '', etichetta(p.continente, lingua)].filter(Boolean).join(' '),
      // sotto il nome della regione: «Romania · Europa»
      dettaglio: [p.tipo === 'regione' ? p.stato : '', etichetta(p.continente, lingua)].filter(Boolean).join(' · '),
      tag: etichette(p.stileViaggio, lingua),
      immagine: p.heroImage,
    })),
    ...getAllDestinazioni(lingua).map((d) => ({
      tipo: 'destinazione' as const,
      nome: d.nome,
      href: `/destinazioni/${d.paeseSlug}/${d.slug}`,
      paese: nomeCompleto.get(d.paeseSlug) ?? '',
      dettaglio: nomeCompleto.get(d.paeseSlug) ?? '',
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
