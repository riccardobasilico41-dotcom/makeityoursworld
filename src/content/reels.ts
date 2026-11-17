import type { Lingua } from '@/lib/i18n/config'

/**
 * Reel verticali girati da Rick (dal portfolio UGC, ~/Desktop/CLAUDE/ugc-portfolio),
 * mostrati nelle pagine viaggio e destinazione con «Reel dal viaggio».
 * Ogni file è ricodificato per il web: 9:16, 720px di altezza, H.264 + AAC, poster JPG.
 * Sottotitoli in inglese impressi nel video (non c'è una traccia separata).
 *
 * Solo abbinamenti certi: i reel che mescolano più paesi (Move, One step,
 * Adventure, Food, Destinations) restano fuori.
 */
export type Reel = {
  id: string
  src: string
  poster: string
  titolo: Record<Lingua, string>
  /** luogo mostrato sotto il titolo */
  luogo: Record<Lingua, string>
  durata: number
  viaggi: string[]
  /** 'paese/slug' delle schede destinazione */
  destinazioni: string[]
}

export const REELS: Reel[] = [
  {
    id: 'titicaca-uros',
    src: '/videos/reels/titicaca-uros.mp4',
    poster: '/videos/reels/titicaca-uros-poster.jpg',
    titolo: { it: 'Scritte nel cuore', en: 'Written in the heart', es: 'Escritas en el corazón' },
    luogo: { it: 'Isole degli Uros, lago Titicaca', en: 'Uros islands, Lake Titicaca', es: 'Islas de los Uros, lago Titicaca' },
    durata: 18,
    viaggi: ['peru-itinerario', 'peru-due-settimane'],
    destinazioni: ['peru/lago-titicaca'],
  },
  {
    id: 'giappone-mille-storie',
    src: '/videos/reels/giappone-mille-storie.mp4',
    poster: '/videos/reels/giappone-mille-storie-poster.jpg',
    titolo: { it: 'Mille storie', en: 'A thousand stories', es: 'Mil historias' },
    luogo: { it: 'Tokyo e Kyoto', en: 'Tokyo and Kyoto', es: 'Tokio y Kioto' },
    durata: 49,
    viaggi: ['giappone-itinerario', 'classic-japan'],
    destinazioni: ['giappone/tokyo', 'giappone/kyoto'],
  },
]

export const reelsPerViaggio = (slug: string) => REELS.filter((r) => r.viaggi.includes(slug))
export const reelsPerDestinazione = (paese: string, slug: string) =>
  REELS.filter((r) => r.destinazioni.includes(`${paese}/${slug}`))
