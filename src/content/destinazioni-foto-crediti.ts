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
  'scozia/glasgow': { autore: 'Euan Nelson (Wikimedia Commons)', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Glasgow_Cathedral_from_the_Necropolis_-_geograph.org.uk_-_4859898.jpg' },
  'scozia/loch-lomond-glencoe': { autore: 'rboed* (Wikimedia Commons)', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Three_Sisters,_Glencoe,_Scotland.jpg' },
  'scozia/north-coast-500': { autore: 'Jooniur (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bealach_na_ba.jpg' },
  'irlanda/dublino': { autore: 'P. Hughes', licenza: 'CC BY 4.0', fonteUrl: "https://commons.wikimedia.org/wiki/File:Dubln_-_River_Liffey_with_Ha%27Penny_Bridge_in_distance.jpg" },
  'irlanda/wicklow-glendalough': { autore: 'Manuel Osdoba', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Upper_Lake_Glendalough.jpg' },
  'irlanda/kilkenny-cashel': { autore: 'Berthold Werner', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ireland_Rock_of_Cashel_BW_2025-09-14_15-39-31.jpg' },
  'irlanda/cork-kinsale': { autore: 'David Hawgood', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Boats_in_Kinsale_Harbour_-_geograph.org.uk_-_3041141.jpg' },
  'irlanda/ring-of-kerry-dingle': { autore: 'Marco Ober', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ladies_View_in_summer,_Ring_of_Kerry,_Killarney_National_Park.jpg' },
  'irlanda/cliffs-of-moher-burren': { autore: 'Berthold Werner', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ireland_Cliffs_of_Moher_BW_2025-09-11_13-47-21.jpg' },
  'irlanda/galway': { autore: 'Robert Linsdell', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Spanish_Arch,_Spanish_Parade,_Galway_(506206)_(25836766954).jpg' },
  'irlanda/connemara': { autore: 'Roy Murray', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Twelve_Bens_II,_Connemara,_Ireland.jpg' },
  'irlanda-del-nord/belfast': { autore: 'Simon Burchell', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Belfast_City_Hall_007.jpg' },
  'irlanda-del-nord/causeway-coastal-route': { autore: 'Chmee2', licenza: 'CC BY 3.0', fonteUrl: "https://commons.wikimedia.org/wiki/File:Giant%27s_Causeway_(14).JPG" },
  'irlanda-del-nord/derry-londonderry': { autore: 'Simon Burchell', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Peace_Bridge,_Derry_01.jpg' },
  // Hero delle pagine Paese (`heroImage`): non c'è un registro dedicato, la pagina crediti legge solo i valori.
  'irlanda/_hero': { autore: 'Berthold Werner', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ireland_Cliffs_of_Moher_BW_2025-09-11_14-27-51.jpg' },
  'irlanda-del-nord/_hero': { autore: 'Iain Irwin', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Dunluce_Castle_Northern_Ireland_1.jpg' },
  'marocco/chefchaouen': { autore: 'Fbrandao.1963', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:2018_01_(Blue)_-_Chaouen.jpg' },
  'marocco/fes': { autore: 'Casual Builder', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Zawiya_of_Moulay_Idris_II_2.jpg' },
  'marocco/meknes-volubilis': { autore: 'Mustang Joe', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Triumphal_Arch_of_Caracalla,_Volubilis.jpg' },
  'marocco/rabat': { autore: 'R Prazeres', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bab_Oudaya_DSCF2501.jpg' },
  'giappone/magome-tsumago': { autore: 'lumoplank', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tsumago-juku_-_Tsumago686.jpg' },
  'giappone/matsumoto-kamikochi': { autore: 'lumoplank', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kamikochi_-_Kamikochi6538.jpg' },
  'giappone/takayama': { autore: 'Maarten Heerlien', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:One_of_the_three_main_streets_in_Sanmachi-Suji_(6156038234).jpg' },
  'giappone/shirakawa-go': { autore: 'Alpsdake', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Shirakawa-go_from_Shiroyama.JPG' },
  'giappone/kanazawa': { autore: 'Andrea Schaffer', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Higashi_Chaya_district,_Kanazawa_(3810704024).jpg' },
  'giappone/koya-san': { autore: 'Josep M. Gracia', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:OKU_-_Stone_memorials_among_cedar_trees_at_Okunoin_Cemetery,_Koyasan,_Japan,_2015.jpg' },
  'giappone/okinawa-naha': { autore: 'CEphoto, Uwe Aranas', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Nago_Okinawa_Kouri-Bridge-01.jpg' },
  'giappone/isole-kerama': { autore: 'SteFou!', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kerama_Island_-_6081216280.jpg' },
  'giappone/miyako': { autore: 'Paipateroma', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Miyako_sunayama_beach_1.jpg' },
  'giappone/ishigaki-yaeyama': { autore: 'Minamie', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:TaketomiMinamie2.jpg' },
  'giappone/sapporo': { autore: 'Marc Rockwell-Pate, U.S. Navy', licenza: 'Public Domain', fonteUrl: 'https://commons.wikimedia.org/wiki/File:US_Navy_060209-N-7526R-205_Illuminated_trees_and_ice_sculptures_line_the_streets_leading_up_to_Sapporo%27s_TV_Tower_during_the_Sapporo_Ice_Festival.jpg' },
  'giappone/niseko': { autore: 'T DMY', licenza: 'CC BY 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mt.Yotei_in_Hirahu_ski_resort%EF%BC%8F%E3%83%92%E3%83%A9%E3%83%95%E3%82%B9%E3%82%AD%E3%83%BC%E5%A0%B4%E3%81%8B%E3%82%89%E7%BE%8A%E8%B9%84%E5%B1%B1_-_panoramio.jpg' },
  'giappone/furano': { autore: 'wakimasa', licenza: 'Public Domain', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Furano_Snow_Resort_view1.JPG' },
  'giappone/hakuba': { autore: 'Raita Futo', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Hakuba_ski_resort_(51845936156).jpg' },
  'thailandia/chiang-rai': { autore: 'Misharim', licenza: 'CC BY 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Wat_Rong_Khun_2.jpg' },
  'thailandia/triangolo-d-oro': { autore: 'Slleong', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ruak_River_4.jpg' },
  'thailandia/pai-mae-hong-son': { autore: 'Vyacheslav Argenberg', licenza: 'CC BY 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pai_countryside,_Thailand.jpg' },
  'messico/palenque': { autore: 'Arian Zwegers', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Palenque,_Temple_of_the_Inscriptions_(20498755918).jpg' },
  'messico/calakmul': { autore: 'Oogstweg', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Calakmul_Mexico,_Structure_I.jpg' },
}
