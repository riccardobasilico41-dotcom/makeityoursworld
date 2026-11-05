import type { CreditoImmagine } from './viaggi-copertine-crediti'

/**
 * Crediti delle foto di repertorio nelle schede destinazione ed esperienza (campo
 * `immagine`), dove la licenza chiede o consiglia di citare l'autore. Mostrati nella
 * pagina /crediti-fotografici. Chiave = `<paese>/<slug>`.
 */
export const creditiDestinazioni: Record<string, CreditoImmagine> = {
  'peru/choquequirao': {
    autore: 'Jose Galarza',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/photo/closeup-of-llama-terraces-in-peru-19276487/',
  },
  'borneo/gunung-mulu': {
    autore: 'Nur Nafis Naim',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mulu_Pinnacles.jpg',
  },
  'indonesia/mentawai': {
    autore: 'Naila Fathinah',
    licenza: 'CC BY 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ekosistem_Pesisir_Hutan_Hujan_Tropis_Mentawai.jpg',
  },
}
