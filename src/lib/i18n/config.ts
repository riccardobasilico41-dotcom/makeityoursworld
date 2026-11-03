/*
 * Lingue del sito. L'inglese è la lingua principale e sta senza prefisso (/trips/…),
 * italiano e spagnolo hanno il prefisso (/it/viaggi/…, /es/viajes/…).
 *
 * Nel codice ogni percorso interno si scrive nella forma «canonica», cioè quella italiana
 * di sempre senza prefisso (/viaggi/giappone-itinerario): la traduce `localizza()` di
 * percorsi.ts, la usano il componente Link, le sitemap e gli hreflang. Il proxy fa il
 * cammino inverso e porta ogni indirizzo pubblico alla rotta interna app/[lang]/<canonico>.
 */

export const LINGUE = ['en', 'it', 'es'] as const
export type Lingua = (typeof LINGUE)[number]

export const LINGUA_PREDEFINITA: Lingua = 'en'

/**
 * Lingue già online: le altre esistono nel codice ma il proxy non le serve e non finiscono
 * in sitemap, hreflang e selettore (lo spagnolo si accende quando è tradotto tutto).
 */
export const LINGUE_PUBBLICATE: readonly Lingua[] = ['en', 'it', 'es']

export const isLingua = (v: string | undefined | null): v is Lingua => !!v && (LINGUE as readonly string[]).includes(v)

/** Prefisso dell'indirizzo pubblico. */
export const PREFISSO: Record<Lingua, string> = { en: '', it: '/it', es: '/es' }

/** Per <html lang>, hreflang, og:locale e JSON-LD. */
export const LOCALE: Record<Lingua, { html: string; og: string; nome: string; breve: string }> = {
  en: { html: 'en', og: 'en_US', nome: 'English', breve: 'EN' },
  it: { html: 'it', og: 'it_IT', nome: 'Italiano', breve: 'IT' },
  es: { html: 'es', og: 'es_ES', nome: 'Español', breve: 'ES' },
}

/**
 * Primo segmento del percorso: cartella in app/[lang] (forma canonica italiana) →
 * parola usata nell'indirizzo pubblico di ogni lingua. Le voci assenti restano uguali.
 */
export const SEGMENTI: Record<Lingua, Record<string, string>> = {
  it: {},
  en: {
    viaggi: 'trips',
    destinazioni: 'destinations',
    esperienze: 'experiences',
    meraviglie: 'wonders',
    attrezzatura: 'packing-lists',
    salvati: 'saved',
    trasparenza: 'transparency',
    'lavoriamo-insieme': 'work-with-me',
    'crediti-fotografici': 'photo-credits',
    cookie: 'cookies',
    'chi-sono': 'about',
    'come-lavoro': 'how-i-work',
  },
  es: {
    viaggi: 'viajes',
    destinazioni: 'destinos',
    esperienze: 'experiencias',
    meraviglie: 'maravillas',
    attrezzatura: 'equipaje',
    salvati: 'guardados',
    trasparenza: 'transparencia',
    'lavoriamo-insieme': 'trabajemos-juntos',
    'crediti-fotografici': 'creditos-fotograficos',
    privacy: 'privacidad',
    cookie: 'cookies',
    'chi-sono': 'sobre-mi',
    'come-lavoro': 'como-trabajo',
  },
}
