import type { CreditoImmagine } from './viaggi-copertine-crediti'

/**
 * Crediti delle foto di repertorio documentate in docs/foto-licenze.md (Amazzonia, Tanzania):
 * licenza verificata sulla pagina della foto alla data indicata là. Mostrati in /crediti-fotografici.
 * Chiave = percorso in /public.
 */
export const creditiAltreFoto: Record<string, CreditoImmagine> = {
  '/images/amazzonia/leticia.jpg': { autore: 'Azzedine Rouichi (@rouichi)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/JE2UOjt6a08' },
  '/images/amazzonia/ecuador-cuyabeno.jpg': { autore: 'Simone Dinoia (@simonedna)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/lQVSYyIOVzM' },
  '/images/tanzania/serengeti-savana.jpg': { autore: 'Hu Chen (@huchenme)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/60XLoOgwkfA' },
  '/images/tanzania/grande-migrazione-mara.jpg': { autore: 'Jorge Tung (@jorgetung)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/1pZJqQlgpsY' },
  '/images/tanzania/ngorongoro-cratere.jpg': { autore: 'Matthew Stephenson (@matthewryanstephenson)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/BlQTC_JzRLY' },
  '/images/tanzania/ngorongoro-rinoceronti.jpg': { autore: 'Mwandwe Chileshe (@mwandwe16)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/q9SMUy4Hee8' },
  '/images/tanzania/tarangire-elefanti.jpg': { autore: 'Florian Müller (@floxox)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/98qV5BEQpCE' },
  '/images/tanzania/zanzibar-nungwi.jpg': { autore: 'Polly Sadler (@pols__)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/glxZAuaYH_M' },
  '/images/tanzania/stone-town.jpg': { autore: 'Polly Sadler (@pols__)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/0DDEIeraxMU' },
  '/images/tanzania/kilimanjaro.jpg': { autore: 'Smilyan Pavlov (@smilyan)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/Zi0V8CV6OS4' },
  '/images/tanzania/tende-campo.jpg': { autore: 'Andrew Kayani (@the_gallery)', licenza: 'Unsplash License', fonteUrl: 'https://unsplash.com/photos/c1mUXqK2Eww' },
}
