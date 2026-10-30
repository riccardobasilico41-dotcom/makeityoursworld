export const siteConfig = {
  name: 'Make It Yours World',
  brandName: 'Make It Yours World',
  shortName: 'Make It Yours',
  tagline: 'Itinerari e appunti di viaggio, un continente alla volta',
  description:
    'Diario di viaggio con itinerari giorno per giorno, consigli pratici e schede utili per organizzare il prossimo viaggio: dal Marocco alla Costa Rica, dalla Transilvania alla Florida.',
  // URL pubblico del sito. È la base di canonical, sitemap, anteprime social e
  // dati strutturati: se punta a un dominio che non risponde, Google indicizza
  // male o non indicizza affatto.
  //
  // Si imposta con la variabile d'ambiente NEXT_PUBLIC_SITE_URL (su Vercel:
  // Project Settings → Environment Variables), così si cambia dominio senza
  // toccare il codice. Il dominio scelto è makeityoursworld.com (non ancora
  // comprato): finché non è attivo il fallback resta l'indirizzo Vercel.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://makeityoursworld.vercel.app',

  flags: {
    showInstagram: false,
  },

  contact: {
    instagram: '',
  },
} as const

export type SiteConfig = typeof siteConfig
