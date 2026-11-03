import type { Lingua } from './i18n/config'

/**
 * Macro-regioni del menu e delle pagine /aree/<slug>: ogni area raccoglie uno o più
 * `continente` dei Paesi (chiavi italiane). Lo slug canonico è italiano; gli indirizzi
 * tradotti sono in `slug` (li usa src/lib/i18n/percorsi.ts).
 */
export type Area = {
  slug: string
  continenti: string[]
  nome: Record<Lingua, string>
  slugTradotto: Record<'en' | 'es', string>
  /** Foto di Rick (o già usata nel sito) per l'intestazione. */
  immagine: string
  imageAlt: Record<Lingua, string>
}

export const AREE: Area[] = [
  {
    slug: 'asia',
    continenti: ['Asia'],
    nome: { it: 'Asia', en: 'Asia', es: 'Asia' },
    slugTradotto: { en: 'asia', es: 'asia' },
    immagine: '/images/giappone/miyajima-torii-tramonto-riccardo.jpg',
    imageAlt: {
      it: 'Il torii galleggiante di Miyajima al tramonto, in Giappone',
      en: 'The floating torii of Miyajima at sunset, Japan',
      es: 'El torii flotante de Miyajima al atardecer, Japón',
    },
  },
  {
    slug: 'europa',
    continenti: ['Europa'],
    nome: { it: 'Europa', en: 'Europe', es: 'Europa' },
    slugTradotto: { en: 'europe', es: 'europa' },
    immagine: '/images/italia/italia-paese.jpg',
    imageAlt: { it: "Un paesaggio d'Italia", en: 'A landscape in Italy', es: 'Un paisaje de Italia' },
  },
  {
    slug: 'africa-e-medio-oriente',
    continenti: ['Africa', 'Medio Oriente'],
    nome: { it: 'Africa e Medio Oriente', en: 'Africa & Middle East', es: 'África y Oriente Medio' },
    slugTradotto: { en: 'africa-middle-east', es: 'africa-oriente-medio' },
    immagine: '/images/giordania/petra-tesoro-cammello-riccardo.jpg',
    imageAlt: {
      it: 'Il Tesoro di Petra con un cammello davanti, in Giordania',
      en: 'The Treasury of Petra with a camel in front, Jordan',
      es: 'El Tesoro de Petra con un camello delante, Jordania',
    },
  },
  {
    slug: 'nord-e-centro-america',
    continenti: ['Nord America', 'America Centrale'],
    nome: { it: 'Nord e Centro America', en: 'North & Central America', es: 'Norte y Centroamérica' },
    slugTradotto: { en: 'north-central-america', es: 'norte-centroamerica' },
    immagine: '/images/new-york/lower-manhattan-skyline-riccardo.jpg',
    imageAlt: {
      it: 'Lo skyline di Lower Manhattan, New York',
      en: 'The Lower Manhattan skyline, New York',
      es: 'El skyline de Lower Manhattan, Nueva York',
    },
  },
  {
    slug: 'sud-america',
    continenti: ['Sud America'],
    nome: { it: 'Sud America', en: 'South America', es: 'Sudamérica' },
    slugTradotto: { en: 'south-america', es: 'sudamerica' },
    immagine: '/images/peru/machu-picchu-lama-terrazze-riccardo.jpg',
    imageAlt: {
      it: 'Un lama sulle terrazze di Machu Picchu, in Perù',
      en: 'A llama on the terraces of Machu Picchu, Peru',
      es: 'Una llama en las terrazas de Machu Picchu, Perú',
    },
  },
]

export const getArea = (slug: string) => AREE.find((a) => a.slug === slug)
