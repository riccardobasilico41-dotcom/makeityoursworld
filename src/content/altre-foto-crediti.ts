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
  '/images/giappone/shibuya-incrocio-sera.jpg': { autore: 'Benh LIEU SONG (Flickr)', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg' },
  '/images/meraviglie/colosseo/colosseo-ipogei-sotterranei.jpg': { autore: 'Jebulon', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseum_ovale_sous-sol_Rome_Italy.jpg' },
  '/images/meraviglie/colosseo/foro-romano-dal-vittoriano.jpg': { autore: 'Wolfgang Moroder', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Foro_Romano_visto_dal_Vittoriano_Roma.jpg' },
  '/images/meraviglie/colosseo/palatino-dal-circo-massimo.jpg': { autore: 'Jebulon', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Palatine_Hill_from_Circus_Maximus_Rome.jpg' },
  '/images/meraviglie/colosseo/colosseo-arco-costantino-dal-palatino.jpg': { autore: 'Livioandronico2013', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseum_and_Arch_of_Constantine_seen_from_Palatine.jpg' },
  '/images/meraviglie/colosseo/colosseo-interno-panoramica.jpg': { autore: 'Paolo Costa Baldi', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseo_di_Roma_panoramic.jpg' },
  '/images/meraviglie/machu-picchu/vista-da-intipunku.jpg': { autore: 'Christoph Strässler', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Machu_Picchu_seen_from_Intipunku_(the_Gate_of_the_Sun),_Peru.jpg' },
  '/images/meraviglie/machu-picchu/aguas-calientes-paese.jpg': { autore: 'Diego Delso', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Aguas_Calientes,_Cuzco,_Per%C3%BA,_2015-07-30,_DD_68.JPG' },
  '/images/meraviglie/chichen-itza/tempio-dei-guerrieri.jpg': { autore: 'edenpictures', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Temple_of_the_Warriors_-_Chichen_Itza_2024.jpg' },
  '/images/meraviglie/chichen-itza/el-caracol-osservatorio.jpg': { autore: 'Mariordo (Mario Roberto Durán Ortiz)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:El_Caracol_Chichen_Itza_03_2011_1488.jpg' },
}
