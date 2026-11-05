# Foto dei viaggi nuovi 84-95 e delle schede nuove (5/11/2026)

Viaggi: 84 bali-nusa-komodo, 85 bali-sulawesi-raja-ampat, 86 indonesia-isola-per-isola, 90 marocco-citta-imperiali, 91 classic-japan, 92 okinawa-estate, 93 hokkaido-sci-giappone, 94 thailandia-nord, 95 messico-yucatan-completo. Schede: 14 Giappone, 4 Marocco, 3 Thailandia, 3 Messico.

## Da dove vengono

**Foto di Rick prima.** Niente scansione del disco: ho usato il catalogo delle clip già descritte (`VIAGGI/sito/_catalogo/clips.json`, con Paese, luogo e descrizione di ogni clip) e le foto di `VIAGGI/sito/FOTO-PER-TEMA`, poi ho estratto con ffmpeg pochi fotogrammi (il più nitido su cinque, misurato sui bordi) da una ventina di file. ffprobe solo su 10 MOV del Messico per la data/GPS (nessun GPS).

- Indonesia: i video DJI di agosto 2024 in `memry card/.../DCIM/103MEDIA` (Bali: porta di Handara, Jatiluwih, vulcano al tramonto; isolotto di sabbia al largo di Lombok). Niente Nusa, Komodo, Sulawesi o Raja Ampat nel girato.
- Giappone: Shinjuku (iPhone), Fiamma della Pace di Hiroshima (Sony), Fushimi Inari, Kiyomizu-dera e Tōdai-ji dalle foto web di FOTO-PER-TEMA; più le foto di Rick già nel sito (Tokyo Tower, Kinkaku-ji, Miyajima).
- Messico: GoPro di Uxmal (Piramide dell'Indovino, Quadrilatero delle Monache, trono del giaguaro) e la foto di Chichén Itzá già nel sito.
- Thailandia: solo Bangkok (Wat Pho, già nel sito). Il resto del girato è il sud (Khao Sok, Krabi, Phi Phi).
- **Marocco: il materiale di Rick è solo il deserto e la valle delle rose** (`VIAGGI/video/Marocco`, 7 clip Sony, e le foto di Merzouga già nel sito; in `BASI/WEROAD/6.MAROCCO` solo PDF). Di Tangeri, Chefchaouen, Fès, Meknès, Rabat e Casablanca non ho trovato niente: se Rick ha quelle foto, sono altrove (telefono o un disco non collegato).
- Okinawa, Hokkaido, nord della Thailandia, Palenque e Calakmul: Rick non c'è stato, tutto da Commons.

**Poi Wikimedia Commons.** Autore e licenza letti dall'API di ogni file (extmetadata `Artist` e `LicenseShortName`), solo CC BY, CC BY-SA, CC0 e pubblico dominio. Paesaggi e siti; ho scartato una foto della danza Kecak con i volti dei danzatori in primo piano e ho tagliato in alto Misol-Ha per togliere i turisti. Restano persone piccole o di spalle in alcune foto di folla (Bab Bou Jeloud, Dar al-Makhzen, Churaumi) e due operai a media distanza nella conceria Chouara.

**Riuso.** Dove il giorno era già coperto da una foto del sito con credito tracciato, l'ho riusata (Sidemen, Uluwatu, Labuan Bajo, drago di Komodo, Kete Kesu, lago Toba, Mentawai) e ho copiato il credito sotto la chiave del viaggio nuovo. Non ho riusato le foto senza fonte tracciata (Tegalalang, Padar e Nusa Penida di indonesia-itinerario, le `-stock.jpg`, le immagini delle esperienze).

## Formato e collegamenti

WebP sotto i 200 KB in `public/images/viaggi/<slug>/` (copertine `copertina-*.webp`, giorni `giorno-NN-*.webp`, zone della guida 86 `zona-*.webp`) e in `public/images/<paese>/<slug>.webp` per le schede. Giorni e schede 1920×1080, copertine 1920×1280; le foto molto dettagliate che a 1920 non stavano nei 200 KB sono a 1600×900 (codificate con `cwebp -size`), le foto web di Rick a 1800×1013 o 1800×1200, Otaru e Niseko a 1600×900 perché l'originale è di quella misura. I file di Rick hanno `-riccardo` nel nome e nessun credito.

- Copertine: `viaggi-copertine.ts` + `i18n/en` + `i18n/es`; crediti in `viaggi-copertine-crediti.ts` (solo quelle da Commons).
- Giorni: campi `immagine`/`imageAlt` nei `viaggi-dati` it/en/es; crediti in `viaggi-giorno-foto-crediti.ts`. Nel Messico c'era già un `imageAlt` per giorno senza foto: l'ho sostituito con l'alt della foto messa.
- Schede: `immagine` aggiunto e `imageAlt` riscritto per descrivere la foto nei `destinazioni/*.ts` it/en/es; crediti in `destinazioni-foto-crediti.ts` (chiave `<paese>/<slug>`).

## Senza foto

L'ultimo giorno di partenza di ogni viaggio (come negli altri viaggi) e il Giorno 8 di hokkaido-sci-giappone (Rusutsu): su Commons c'erano solo foto estive o di strade, nessuna delle piste d'inverno.

## bali-nusa-komodo

| Uso | File | Fonte | Autore | Licenza |
|---|---|---|---|---|
| Copertina | `/images/viaggi/bali-nusa-komodo/copertina-padar.webp` | [Padar Island, Komodo National Park, Indonesia, 20250822 0929 2659.jpg](https://commons.wikimedia.org/wiki/File:Padar_Island,_Komodo_National_Park,_Indonesia,_20250822_0929_2659.jpg) | Jakub Hałun | CC BY 4.0 |
| Giorno 1 | `/images/viaggi/bali-nusa-komodo/giorno-01-vulcano-tramonto-riccardo.webp` | Rick: `memry card/memori card camera sony/DCIM/103MEDIA/DJI_0904.MP4` a 9.6 s | Rick | — |
| Giorno 2 | `/images/viaggi/bali-nusa-komodo/giorno-02-tegalalang.webp` | [Tegalalang Rice Terrace - Subak Ceking on Bali 31.jpg](https://commons.wikimedia.org/wiki/File:Tegalalang_Rice_Terrace_-_Subak_Ceking_on_Bali_31.jpg) | Anggabuana | CC BY 4.0 |
| Giorno 3 | `/images/viaggi/indonesia-itinerario/giorno-14-sidemen.jpg` | [RICE TERRACE OF SIDEMEN EAST BALI.jpg](https://commons.wikimedia.org/wiki/File:RICE_TERRACE_OF_SIDEMEN_EAST_BALI.jpg) (già nel sito) | Adimelali Bali | CC BY-SA 3.0 |
| Giorno 4 | `/images/viaggi/bali-nusa-komodo/giorno-04-fast-boat-sanur.webp` | [Fast boat transportation at Sanur harbor.jpg](https://commons.wikimedia.org/wiki/File:Fast_boat_transportation_at_Sanur_harbor.jpg) | Imadedana | CC BY-SA 4.0 |
| Giorno 5 | `/images/viaggi/bali-nusa-komodo/giorno-05-manta-nusa-penida.webp` | [Manta Ray - Shot by Lamadjido.jpg](https://commons.wikimedia.org/wiki/File:Manta_Ray_-_Shot_by_Lamadjido.jpg) | Rilando June Lamadjido | CC BY-SA 4.0 |
| Giorno 6 | `/images/viaggi/bali-nusa-komodo/giorno-06-kelingking.webp` | [Kelingking Beach aerial 2026 03.jpg](https://commons.wikimedia.org/wiki/File:Kelingking_Beach_aerial_2026_03.jpg) | FBilula | CC BY 4.0 |
| Giorno 7 | `/images/viaggi/indonesia-itinerario/giorno-26-labuan-bajo.jpg` | [Labuan Bajo Harbour - 43602513235.jpg](https://commons.wikimedia.org/wiki/File:Labuan_Bajo_Harbour_-_43602513235.jpg) (già nel sito) | Isabell Schulz | CC BY-SA 2.0 |
| Giorno 8 | `/images/viaggi/bali-nusa-komodo/giorno-08-rinca.webp` | [View from a hill on Rinca Island, Komodo National Park, Indonesia, 20250826 1013 3519.jpg](https://commons.wikimedia.org/wiki/File:View_from_a_hill_on_Rinca_Island,_Komodo_National_Park,_Indonesia,_20250826_1013_3519.jpg) | Jakub Hałun | CC BY 4.0 |
| Giorno 9 | `/images/viaggi/bali-nusa-komodo/giorno-09-padar.webp` | [Padar Island, Komodo National Park, Indonesia, 20250822 0911 2638.jpg](https://commons.wikimedia.org/wiki/File:Padar_Island,_Komodo_National_Park,_Indonesia,_20250822_0911_2638.jpg) | Jakub Hałun | CC BY 4.0 |
| Giorno 10 | `/images/viaggi/bali-nusa-komodo/giorno-10-taka-makassar.webp` | [Taka Makassar.jpg](https://commons.wikimedia.org/wiki/File:Taka_Makassar.jpg) | AuroZephyr | CC BY-SA 4.0 |
| Giorno 11 | `/images/viaggi/bali-nusa-komodo/giorno-11-porto-labuan-bajo.webp` | [Labuan Bajo, a port in West Flores, Nusa Tenggara, Indonesia; January 2020.jpg](https://commons.wikimedia.org/wiki/File:Labuan_Bajo,_a_port_in_West_Flores,_Nusa_Tenggara,_Indonesia;_January_2020.jpg) | Tiket2 | CC BY 2.0 |
| Giorno 12 | `/images/viaggi/indonesia-itinerario/giorno-18-uluwatu.jpg` | [Cliffs of Uluwatu, Bali, Indonesia, 20220826 1006 1038.jpg](https://commons.wikimedia.org/wiki/File:Cliffs_of_Uluwatu,_Bali,_Indonesia,_20220826_1006_1038.jpg) (già nel sito) | Jakub Hałun | CC BY-SA 4.0 |
| Giorno 13 | `/images/viaggi/bali-nusa-komodo/giorno-13-tramonto-uluwatu.webp` | [Sunset at Uluwatu Temple.jpg](https://commons.wikimedia.org/wiki/File:Sunset_at_Uluwatu_Temple.jpg) | Bruce Cowan | CC BY-SA 4.0 |

## bali-sulawesi-raja-ampat

| Uso | File | Fonte | Autore | Licenza |
|---|---|---|---|---|
| Copertina | `/images/viaggi/bali-sulawesi-raja-ampat/copertina-piaynemo.webp` | [Piaynemo Raja Ampat.jpg](https://commons.wikimedia.org/wiki/File:Piaynemo_Raja_Ampat.jpg) | Rolandandika | CC BY-SA 4.0 |
| Giorno 1 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-01-porta-handara-riccardo.webp` | Rick: `memry card/memori card camera sony/DCIM/103MEDIA/DJI_0906.MP4` a 0.9 s | Rick | — |
| Giorno 2 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-02-risaie-jatiluwih-riccardo.webp` | Rick: `memry card/memori card camera sony/DCIM/103MEDIA/DJI_0910.MP4` a 3.4 s | Rick | — |
| Giorno 3 | `/images/viaggi/indonesia-itinerario/giorno-18-uluwatu.jpg` | [Cliffs of Uluwatu, Bali, Indonesia, 20220826 1006 1038.jpg](https://commons.wikimedia.org/wiki/File:Cliffs_of_Uluwatu,_Bali,_Indonesia,_20220826_1006_1038.jpg) (già nel sito) | Jakub Hałun | CC BY-SA 4.0 |
| Giorno 4 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-04-tomohon.webp` | [Tomohon Overview.jpg](https://commons.wikimedia.org/wiki/File:Tomohon_Overview.jpg) | Kondephy | CC BY-SA 4.0 |
| Giorno 5 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-05-tarsio-tangkoko.webp` | [Tarsius tarsier Tangkoko National Park.JPG](https://commons.wikimedia.org/wiki/File:Tarsius_tarsier_Tangkoko_National_Park.JPG) | Sakurai Midori | CC BY-SA 3.0 |
| Giorno 6 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-06-bunaken.webp` | [Sunset at Bunaken Island, Sulawesi, 2016.jpg](https://commons.wikimedia.org/wiki/File:Sunset_at_Bunaken_Island,_Sulawesi,_2016.jpg) | Niek van Son | CC BY 2.0 |
| Giorno 7 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-07-kri.webp` | [20170909 Kri island beach.jpg](https://commons.wikimedia.org/wiki/File:20170909_Kri_island_beach.jpg) | Lasthib | CC BY-SA 4.0 |
| Giorno 8 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-08-reef-arborek.webp` | [Coral in Raja Ampat.jpg](https://commons.wikimedia.org/wiki/File:Coral_in_Raja_Ampat.jpg) | Akbar raf | CC BY-SA 4.0 |
| Giorno 9 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-09-piaynemo.webp` | [Piaynemo, Raja Ampat (31683906917).jpg](https://commons.wikimedia.org/wiki/File:Piaynemo,_Raja_Ampat_(31683906917).jpg) | peter harris | CC0 |
| Giorno 10 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-10-reef-raja-ampat.webp` | [Pulau Piaynemo, Raja Ampat.jpg](https://commons.wikimedia.org/wiki/File:Pulau_Piaynemo,_Raja_Ampat.jpg) | Rizalubun | CC BY-SA 4.0 |
| Giorno 11 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-11-porto-waisai.webp` | [Waisai view.jpg](https://commons.wikimedia.org/wiki/File:Waisai_view.jpg) | Lord Mountbatten | CC BY-SA 4.0 |

## indonesia-isola-per-isola

| Uso | File | Fonte | Autore | Licenza |
|---|---|---|---|---|
| Copertina | `/images/viaggi/indonesia-isola-per-isola/copertina-gili-tramonto-riccardo.webp` | Rick: `memry card/memori card camera sony/DCIM/103MEDIA/DJI_0925.MP4` a 0.8 s | Rick | — |
| Zona 1 | `/images/indonesia/jatiluwih-terrazze-riccardo.jpg` | Rick (foto già nel sito) | — | — |
| Zona 2 | `/images/viaggi/bali-nusa-komodo/giorno-06-kelingking.webp` | [Kelingking Beach aerial 2026 03.jpg](https://commons.wikimedia.org/wiki/File:Kelingking_Beach_aerial_2026_03.jpg) | FBilula | CC BY 4.0 |
| Zona 3 | `/images/indonesia/gili-isolotto-barche-riccardo.jpg` | Rick (foto già nel sito) | — | — |
| Zona 4 | `/images/indonesia/bromo-alba-drone-riccardo.jpg` | Rick (foto già nel sito) | — | — |
| Zona 5 | `/images/viaggi/indonesia-itinerario/giorno-04-lago-toba.jpg` | [Panorama of Parapat seen from Lake Toba 01.JPG](https://commons.wikimedia.org/wiki/File:Panorama_of_Parapat_seen_from_Lake_Toba_01.JPG) (già nel sito) | Christian Advs Sltg | CC BY-SA 3.0 |
| Zona 6 | `/images/indonesia/mentawai-costa-foresta.webp` | [Ekosistem Pesisir Hutan Hujan Tropis Mentawai.jpg](https://commons.wikimedia.org/wiki/File:Ekosistem_Pesisir_Hutan_Hujan_Tropis_Mentawai.jpg) (già nel sito) | Naila Fathinah | CC BY 4.0 |
| Zona 7 | `/images/viaggi/indonesia-itinerario/giorno-28-komodo-dragon.jpg` | [Komodo dragon (Varanus komodoensis) 2.jpg](https://commons.wikimedia.org/wiki/File:Komodo_dragon_(Varanus_komodoensis)_2.jpg) (già nel sito) | Charles J. Sharp | CC BY-SA 4.0 |
| Zona 8 | `/images/viaggi/indonesia-itinerario/giorno-33-kete-kesu-tongkonan.jpg` | [Tana Toraja, Kete Kesu, tongkonan (6823113962).jpg](https://commons.wikimedia.org/wiki/File:Tana_Toraja,_Kete_Kesu,_tongkonan_(6823113962).jpg) (già nel sito) | Arian Zwegers | CC BY 2.0 |
| Zona 9 | `/images/viaggi/bali-sulawesi-raja-ampat/giorno-09-piaynemo.webp` | [Piaynemo, Raja Ampat (31683906917).jpg](https://commons.wikimedia.org/wiki/File:Piaynemo,_Raja_Ampat_(31683906917).jpg) | peter harris | CC0 |
| Zona 10 | `/images/viaggi/indonesia-isola-per-isola/zona-borneo-tanjung-puting.webp` | [Tanjung Puting National Park.jpg](https://commons.wikimedia.org/wiki/File:Tanjung_Puting_National_Park.jpg) | Jorge Franganillo | CC BY 2.0 |

## marocco-citta-imperiali

| Uso | File | Fonte | Autore | Licenza |
|---|---|---|---|---|
| Copertina | `/images/viaggi/marocco-citta-imperiali/copertina-chefchaouen-tramonto.webp` | [Chefchaouen-blue-city-during-thesunset.jpg](https://commons.wikimedia.org/wiki/File:Chefchaouen-blue-city-during-thesunset.jpg) | Badr Rachadi | CC BY-SA 4.0 |
| Giorno 1 | `/images/viaggi/marocco-citta-imperiali/giorno-01-medina-tangeri.webp` | [Panorama Medina Tanger Marokko.jpg](https://commons.wikimedia.org/wiki/File:Panorama_Medina_Tanger_Marokko.jpg) | Herbert wie | CC BY-SA 4.0 |
| Giorno 2 | `/images/viaggi/marocco-citta-imperiali/giorno-02-vicolo-chefchaouen.webp` | [Chefchaouen Street B.jpg](https://commons.wikimedia.org/wiki/File:Chefchaouen_Street_B.jpg) | Mark Fischer | CC BY-SA 2.0 |
| Giorno 3 | `/images/viaggi/marocco-citta-imperiali/giorno-03-moschea-spagnola.webp` | [Mosque-bouzaafer-or-spanish-mosque-chefchaouen-morocco.jpg](https://commons.wikimedia.org/wiki/File:Mosque-bouzaafer-or-spanish-mosque-chefchaouen-morocco.jpg) | Badr Rachadi | CC BY-SA 4.0 |
| Giorno 4 | `/images/viaggi/marocco-citta-imperiali/giorno-04-bab-bou-jeloud.webp` | [Bab Bou Jeloud(js)1.jpg](https://commons.wikimedia.org/wiki/File:Bab_Bou_Jeloud(js)1.jpg) | Jerzystrzelecki | CC BY 3.0 |
| Giorno 5 | `/images/viaggi/marocco-citta-imperiali/giorno-05-conceria-chouara.webp` | [Fez Chouara Tannery (54259975625).jpg](https://commons.wikimedia.org/wiki/File:Fez_Chouara_Tannery_(54259975625).jpg) | Jorge Franganillo | CC BY 2.0 |
| Giorno 6 | `/images/viaggi/marocco-citta-imperiali/giorno-06-dar-al-makhzen.webp` | [Dar al-Makhzen.jpg](https://commons.wikimedia.org/wiki/File:Dar_al-Makhzen.jpg) | Ciell | CC BY-SA 4.0 |
| Giorno 7 | `/images/viaggi/marocco-citta-imperiali/giorno-07-volubilis-basilica.webp` | [Volubilis - Basilica romana.jpg](https://commons.wikimedia.org/wiki/File:Volubilis_-_Basilica_romana.jpg) | Mhobl | CC BY-SA 4.0 |
| Giorno 8 | `/images/viaggi/marocco-citta-imperiali/giorno-08-bab-mansour.webp` | [Bab Mansour Meknes 2018 1.jpg](https://commons.wikimedia.org/wiki/File:Bab_Mansour_Meknes_2018_1.jpg) | Steven Lek | CC BY-SA 4.0 |
| Giorno 9 | `/images/viaggi/marocco-citta-imperiali/giorno-09-torre-hassan.webp` | [Hassan Tower Columns Rabat Nov25 A7CR 08839.jpg](https://commons.wikimedia.org/wiki/File:Hassan_Tower_Columns_Rabat_Nov25_A7CR_08839.jpg) | Timothy A. Gonsalves | CC BY-SA 4.0 |
| Giorno 10 | `/images/viaggi/marocco-citta-imperiali/giorno-10-moschea-hassan-ii.webp` | [Sunshine on mosque Hassan II in Casablanca, Morocco - Flickr - Milamber's portfolio.jpg](https://commons.wikimedia.org/wiki/File:Sunshine_on_mosque_Hassan_II_in_Casablanca,_Morocco_-_Flickr_-_Milamber%27s_portfolio.jpg) | Milamber's portfolio | CC BY 2.0 |

## classic-japan

| Uso | File | Fonte | Autore | Licenza |
|---|---|---|---|---|
| Copertina | `/images/viaggi/classic-japan/copertina-fushimi-inari-riccardo.webp` | Rick: `VIAGGI/sito/FOTO-PER-TEMA/Riti/17 Fushimi Inari-taisha, Kyoto - DSC06199 (web).webp` | Rick | — |
| Giorno 1 | `/images/giappone/tokyo-tower-dall-alto-riccardo.jpg` | Rick (foto già nel sito) | — | — |
| Giorno 2 | `/images/viaggi/classic-japan/giorno-02-shinjuku-riccardo.webp` | Rick: `VIAGGI/video/Giappone/IMG_1649.MOV` a 5.5 s | Rick | — |
| Giorno 3 | `/images/viaggi/classic-japan/giorno-03-lago-ashi.webp` | [A view of Lake Ashi with Peace Torii gate, Hakone, Japan1.jpg](https://commons.wikimedia.org/wiki/File:A_view_of_Lake_Ashi_with_Peace_Torii_gate,_Hakone,_Japan1.jpg) | Joli Rumi | CC BY-SA 4.0 |
| Giorno 4 | `/images/viaggi/classic-japan/giorno-04-magome.webp` | [Sett of Magome-juku 6.JPG](https://commons.wikimedia.org/wiki/File:Sett_of_Magome-juku_6.JPG) | そらみみ | CC BY-SA 3.0 |
| Giorno 5 | `/images/viaggi/classic-japan/giorno-05-castello-matsumoto.webp` | [130608 Matsumoto Castle Matsumoto Nagano pref Japan01bs5.jpg](https://commons.wikimedia.org/wiki/File:130608_Matsumoto_Castle_Matsumoto_Nagano_pref_Japan01bs5.jpg) | 663highland | CC BY 2.5 |
| Giorno 6 | `/images/viaggi/classic-japan/giorno-06-taisho-ike.webp` | [150920 Taisho-ike Kamikochi Japan02n.jpg](https://commons.wikimedia.org/wiki/File:150920_Taisho-ike_Kamikochi_Japan02n.jpg) | 663highland | CC BY 2.5 |
| Giorno 7 | `/images/viaggi/classic-japan/giorno-07-nakabashi-takayama.webp` | [Nakabashi at hida takayama.jpg](https://commons.wikimedia.org/wiki/File:Nakabashi_at_hida_takayama.jpg) | K.F. | CC BY 2.5 |
| Giorno 8 | `/images/viaggi/classic-japan/giorno-08-shirakawa-go.webp` | [Shirakawa Gassho-zukuri 16.jpg](https://commons.wikimedia.org/wiki/File:Shirakawa_Gassho-zukuri_16.jpg) | Zairon | CC BY-SA 4.0 |
| Giorno 9 | `/images/viaggi/classic-japan/giorno-09-kenrokuen.webp` | [Kotojitoro (lantern) in Kenrokuen garden, Kanazawa, Japan (2621644979).jpg](https://commons.wikimedia.org/wiki/File:Kotojitoro_(lantern)_in_Kenrokuen_garden,_Kanazawa,_Japan_(2621644979).jpg) | KimonBerlin | CC BY-SA 2.0 |
| Giorno 10 | `/images/viaggi/classic-japan/giorno-10-kiyomizu-dera-riccardo.webp` | Rick: `VIAGGI/sito/FOTO-PER-TEMA/Pietre/23  - DSC06030 (web).webp` | Rick | — |
| Giorno 11 | `/images/giappone/kyoto-kinkaku-ji-riccardo.jpg` | Rick (foto già nel sito) | — | — |
| Giorno 12 | `/images/viaggi/classic-japan/giorno-12-todaiji-riccardo.webp` | Rick: `VIAGGI/sito/FOTO-PER-TEMA/Pietre/31 Tōdai-ji, Nara - DSC06690 (web).webp` | Rick | — |
| Giorno 13 | `/images/viaggi/classic-japan/giorno-13-konpon-daito.webp` | [Konpon Daito at Danjo Garan.jpg](https://commons.wikimedia.org/wiki/File:Konpon_Daito_at_Danjo_Garan.jpg) | Christophe95 | CC BY-SA 4.0 |
| Giorno 14 | `/images/viaggi/classic-japan/giorno-14-okunoin.webp` | [OKU - Stone bridge in Okunoin Cemetery, Koyasan, Japan, 2015.jpg](https://commons.wikimedia.org/wiki/File:OKU_-_Stone_bridge_in_Okunoin_Cemetery,_Koyasan,_Japan,_2015.jpg) | Josep M. Gracia | CC BY-SA 4.0 |
| Giorno 15 | `/images/viaggi/classic-japan/giorno-15-fiamma-pace-hiroshima-riccardo.webp` | Rick: `VIAGGI/video/Giappone/C0020.MP4` a 1.0 s | Rick | — |
| Giorno 16 | `/images/giappone/miyajima-torii-bassa-marea-riccardo.jpg` | Rick (foto già nel sito) | — | — |

## okinawa-estate

| Uso | File | Fonte | Autore | Licenza |
|---|---|---|---|---|
| Copertina | `/images/viaggi/okinawa-estate/copertina-ama-beach-zamami.webp` | [Ama beach in Zamami Island.jpg](https://commons.wikimedia.org/wiki/File:Ama_beach_in_Zamami_Island.jpg) | Hashi photo | CC BY 3.0 |
| Giorno 1 | `/images/viaggi/okinawa-estate/giorno-01-naminoue.webp` | [Naha Naminoue Beach & Naminoue-gu 33.jpg](https://commons.wikimedia.org/wiki/File:Naha_Naminoue_Beach_%26_Naminoue-gu_33.jpg) | Zairon | CC BY 4.0 |
| Giorno 2 | `/images/viaggi/okinawa-estate/giorno-02-shureimon.webp` | [Naha Shuri Castle32bs5s4592.jpg](https://commons.wikimedia.org/wiki/File:Naha_Shuri_Castle32bs5s4592.jpg) | 663highland | CC BY 2.5 |
| Giorno 3 | `/images/viaggi/okinawa-estate/giorno-03-mare-zamami.webp` | [View of the ocean from Zamami Island, Okinawa, Japan (1) - October 2015.jpg](https://commons.wikimedia.org/wiki/File:View_of_the_ocean_from_Zamami_Island,_Okinawa,_Japan_(1)_-_October_2015.jpg) | Rickard Törnblad | CC BY-SA 4.0 |
| Giorno 4 | `/images/viaggi/okinawa-estate/giorno-04-furuzamami.webp` | [Furuzamami beach Okinawa Zamami.jpg](https://commons.wikimedia.org/wiki/File:Furuzamami_beach_Okinawa_Zamami.jpg) | Hashi photo | CC BY 3.0 |
| Giorno 5 | `/images/viaggi/okinawa-estate/giorno-05-churaumi.webp` | [Okinawa Aquarium.jpg](https://commons.wikimedia.org/wiki/File:Okinawa_Aquarium.jpg) | Jordy Meow | CC BY-SA 3.0 |
| Giorno 6 | `/images/viaggi/okinawa-estate/giorno-06-nakijin.webp` | [Nakijin Castle 20221229.jpg](https://commons.wikimedia.org/wiki/File:Nakijin_Castle_20221229.jpg) | Suicasmo | CC BY-SA 4.0 |
| Giorno 7 | `/images/viaggi/okinawa-estate/giorno-07-yanbaru.webp` | [Subtropical Forest of Yanbaru National Park Okinawa 2018.jpg](https://commons.wikimedia.org/wiki/File:Subtropical_Forest_of_Yanbaru_National_Park_Okinawa_2018.jpg) | kohei sasabuchi | CC BY 2.0 |
| Giorno 8 | `/images/viaggi/okinawa-estate/giorno-08-ponte-irabu.webp` | [Irabu Bridge panorama (52203265122).jpg](https://commons.wikimedia.org/wiki/File:Irabu_Bridge_panorama_(52203265122).jpg) | Raita Futo | CC BY 2.0 |
| Giorno 9 | `/images/viaggi/okinawa-estate/giorno-09-higashi-hennazaki.webp` | [Cape Higashi-Hennazaki (51923939821).jpg](https://commons.wikimedia.org/wiki/File:Cape_Higashi-Hennazaki_(51923939821).jpg) | Raita Futo | CC BY 2.0 |
| Giorno 10 | `/images/viaggi/okinawa-estate/giorno-10-kabira.webp` | [Kabira Bay Ishigaki Island40bs3s4592.jpg](https://commons.wikimedia.org/wiki/File:Kabira_Bay_Ishigaki_Island40bs3s4592.jpg) | 663highland | CC BY 2.5 |
| Giorno 11 | `/images/viaggi/okinawa-estate/giorno-11-mangrovie-iriomote.webp` | [Iriomote mangroves (52117082031).jpg](https://commons.wikimedia.org/wiki/File:Iriomote_mangroves_(52117082031).jpg) | Raita Futo | CC BY 2.0 |
| Giorno 12 | `/images/viaggi/okinawa-estate/giorno-12-kondoi-taketomi.webp` | [Taketomi kondoi hama 2022 2.jpg](https://commons.wikimedia.org/wiki/File:Taketomi_kondoi_hama_2022_2.jpg) | Paipateroma | CC BY-SA 4.0 |

## hokkaido-sci-giappone

| Uso | File | Fonte | Autore | Licenza |
|---|---|---|---|---|
| Copertina | `/images/viaggi/hokkaido-sci-giappone/copertina-yotei-niseko.webp` | [Namara Slope.jpg](https://commons.wikimedia.org/wiki/File:Namara_Slope.jpg) | Excellent moniteur de ski | CC BY-SA 4.0 |
| Giorno 1 | `/images/viaggi/hokkaido-sci-giappone/giorno-01-tv-tower-sapporo.webp` | [Winter Night- Sapporo TV Tower.JPG](https://commons.wikimedia.org/wiki/File:Winter_Night-_Sapporo_TV_Tower.JPG) | Chiranthi W. | CC BY-SA 4.0 |
| Giorno 2 | `/images/viaggi/hokkaido-sci-giappone/giorno-02-yuki-matsuri.webp` | [This is Sapporo (6960447275).jpg](https://commons.wikimedia.org/wiki/File:This_is_Sapporo_(6960447275).jpg) | Cesar I. Martins | CC BY 2.0 |
| Giorno 3 | `/images/viaggi/hokkaido-sci-giappone/giorno-03-otaru.webp` | [小樽雪あかりの路2013（Otaru Snow Light Path 2013） - panoramio (3).jpg](https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E6%A8%BD%E9%9B%AA%E3%81%82%E3%81%8B%E3%82%8A%E3%81%AE%E8%B7%AF2013%EF%BC%88Otaru_Snow_Light_Path_2013%EF%BC%89_-_panoramio_(3).jpg) | t-konno | CC BY-SA 3.0 |
| Giorno 4 | `/images/viaggi/hokkaido-sci-giappone/giorno-04-yotei-annupuri.webp` | [Mount Yōtei from Niseko Annupuri (33253188670).jpg](https://commons.wikimedia.org/wiki/File:Mount_Y%C5%8Dtei_from_Niseko_Annupuri_(33253188670).jpg) | MIKI Yoshihito | CC BY 2.0 |
| Giorno 5 | `/images/viaggi/hokkaido-sci-giappone/giorno-05-grand-hirafu.webp` | [Niseko Mt.Resort Grand Hirafu.JPG](https://commons.wikimedia.org/wiki/File:Niseko_Mt.Resort_Grand_Hirafu.JPG) | wakimasa | Public domain |
| Giorno 6 | `/images/viaggi/hokkaido-sci-giappone/giorno-06-annupuri.webp` | [2010-02.niseko annupuri.jpg](https://commons.wikimedia.org/wiki/File:2010-02.niseko_annupuri.jpg) | Douglas P Perkins | CC BY 3.0 |
| Giorno 7 | `/images/viaggi/hokkaido-sci-giappone/giorno-07-fuoripista.webp` | [Mount Yōtei and Mount Niseko-Annupuri.jpg](https://commons.wikimedia.org/wiki/File:Mount_Y%C5%8Dtei_and_Mount_Niseko-Annupuri.jpg) | ShakyIsles | CC BY-SA 4.0 |
| Giorno 9 | `/images/viaggi/hokkaido-sci-giappone/giorno-09-biei.webp` | [Blue Sky And White World (131608635).jpeg](https://commons.wikimedia.org/wiki/File:Blue_Sky_And_White_World_(131608635).jpeg) | Yascolo | CC BY 3.0 |
| Giorno 10 | `/images/viaggi/hokkaido-sci-giappone/giorno-10-furano.webp` | [Furano Snow Resort view2.JPG](https://commons.wikimedia.org/wiki/File:Furano_Snow_Resort_view2.JPG) | wakimasa | Public domain |

## thailandia-nord

| Uso | File | Fonte | Autore | Licenza |
|---|---|---|---|---|
| Copertina | `/images/viaggi/thailandia-nord/copertina-pai-canyon.webp` | [Pai canyon 1.jpg](https://commons.wikimedia.org/wiki/File:Pai_canyon_1.jpg) | Sgroey | CC BY-SA 4.0 |
| Giorno 1 | `/images/viaggi/thailandia-nord/giorno-01-chao-phraya.webp` | [Bangkok along the Chao Phraya and Wat Arun (14881669620).jpg](https://commons.wikimedia.org/wiki/File:Bangkok_along_the_Chao_Phraya_and_Wat_Arun_(14881669620).jpg) | Clay Gilliland | CC BY-SA 2.0 |
| Giorno 2 | `/images/thailandia/wat-pho-buddha-riccardo.jpg` | Rick (foto già nel sito) | — | — |
| Giorno 3 | `/images/viaggi/thailandia-nord/giorno-03-wat-chedi-luang.webp` | [Wat Chedi Luang, Stupa, Chiang Mai, Thailand.jpg](https://commons.wikimedia.org/wiki/File:Wat_Chedi_Luang,_Stupa,_Chiang_Mai,_Thailand.jpg) | Vyacheslav Argenberg | CC BY 4.0 |
| Giorno 4 | `/images/viaggi/thailandia-nord/giorno-04-doi-suthep.webp` | [Wat Phra That Doi Suthep (I).jpg](https://commons.wikimedia.org/wiki/File:Wat_Phra_That_Doi_Suthep_(I).jpg) | Supanut Arunoprayote | CC BY 4.0 |
| Giorno 5 | `/images/viaggi/thailandia-nord/giorno-05-doi-inthanon.webp` | [Twin Pagodas of Doi Inthanon.JPG](https://commons.wikimedia.org/wiki/File:Twin_Pagodas_of_Doi_Inthanon.JPG) | ElliotJW | CC BY-SA 4.0 |
| Giorno 6 | `/images/viaggi/thailandia-nord/giorno-06-elephant-nature-park.webp` | [Elephant d'Asie (Elephant nature park, Thaïlande).jpg](https://commons.wikimedia.org/wiki/File:Elephant_d%27Asie_(Elephant_nature_park,_Tha%C3%AFlande).jpg) | Christelle El Jamali | CC BY 4.0 |
| Giorno 7 | `/images/viaggi/thailandia-nord/giorno-07-campagna-pai.webp` | [Thailand Pai (111310263).jpeg](https://commons.wikimedia.org/wiki/File:Thailand_Pai_(111310263).jpeg) | Andreas Gante | CC BY 3.0 |
| Giorno 8 | `/images/viaggi/thailandia-nord/giorno-08-pai-canyon.webp` | [Pai Canyon 4.jpg](https://commons.wikimedia.org/wiki/File:Pai_Canyon_4.jpg) | Christophe95 | CC BY-SA 4.0 |
| Giorno 9 | `/images/viaggi/thailandia-nord/giorno-09-wat-phra-singh.webp` | [Chiang Mai - Wat Phra Singh - 0006.jpg](https://commons.wikimedia.org/wiki/File:Chiang_Mai_-_Wat_Phra_Singh_-_0006.jpg) | Stefan Fussan | CC BY-SA 3.0 |
| Giorno 10 | `/images/viaggi/thailandia-nord/giorno-10-tempio-bianco.webp` | [White Temple XXI.jpg](https://commons.wikimedia.org/wiki/File:White_Temple_XXI.jpg) | Hans-Jürgen Neubert | CC BY 4.0 |
| Giorno 11 | `/images/viaggi/thailandia-nord/giorno-11-tempio-blu.webp` | [Wat Rong Suea Ten (Blue Temple, Chiang Rai) วัดร่องเสือเต้น (October 2021) - img 01.jpg](https://commons.wikimedia.org/wiki/File:Wat_Rong_Suea_Ten_(Blue_Temple,_Chiang_Rai)_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B9%89%E0%B8%99_(October_2021)_-_img_01.jpg) | Chainwit. | CC BY-SA 4.0 |
| Giorno 12 | `/images/viaggi/thailandia-nord/giorno-12-triangolo-d-oro.webp` | [Sop-Ruak Thailand Golden-Triangle-03.jpg](https://commons.wikimedia.org/wiki/File:Sop-Ruak_Thailand_Golden-Triangle-03.jpg) | CEphoto, Uwe Aranas | CC BY-SA 3.0 |

## messico-yucatan-completo

| Uso | File | Fonte | Autore | Licenza |
|---|---|---|---|---|
| Copertina | `/images/viaggi/messico-yucatan-completo/copertina-uxmal-indovino-riccardo.webp` | Rick: `VIAGGI/video/Messico/GH010251.MP4` a 6.1 s | Rick | — |
| Giorno 1 | `/images/viaggi/messico-yucatan-completo/giorno-01-cancun.webp` | [Cancun Strand Luftbild (22179809191).jpg](https://commons.wikimedia.org/wiki/File:Cancun_Strand_Luftbild_(22179809191).jpg) | dronepicr | CC BY 2.0 |
| Giorno 2 | `/images/viaggi/messico-yucatan-completo/giorno-02-ek-balam.webp` | [The Acropolis - Ek Balam Yucatan 2020.jpg](https://commons.wikimedia.org/wiki/File:The_Acropolis_-_Ek_Balam_Yucatan_2020.jpg) | Bernard DUPONT | CC BY-SA 2.0 |
| Giorno 3 | `/images/messico/chichen-itza-castillo-riccardo.jpg` | Rick (foto già nel sito) | — | — |
| Giorno 4 | `/images/viaggi/messico-yucatan-completo/giorno-04-cattedrale-merida.webp` | [Merida Cathedral - Yucatan Feb 2002.jpg](https://commons.wikimedia.org/wiki/File:Merida_Cathedral_-_Yucatan_Feb_2002.jpg) | Gary Todd | CC0 |
| Giorno 5 | `/images/viaggi/messico-yucatan-completo/giorno-05-fenicotteri-celestun.webp` | [Flamingos, Celestún Mayo 2014.jpg](https://commons.wikimedia.org/wiki/File:Flamingos,_Celest%C3%BAn_Mayo_2014.jpg) | Gildardo Sánchez | CC BY 2.0 |
| Giorno 6 | `/images/viaggi/messico-yucatan-completo/giorno-06-uxmal-monache-riccardo.webp` | Rick: `VIAGGI/video/Messico/GH010258.MP4` a 3.6 s | Rick | — |
| Giorno 7 | `/images/viaggi/messico-yucatan-completo/giorno-07-arco-labna.webp` | [Mexico-6564 - Labná Arch (4723520005).jpg](https://commons.wikimedia.org/wiki/File:Mexico-6564_-_Labn%C3%A1_Arch_(4723520005).jpg) | Dennis G. Jarvis | CC BY-SA 2.0 |
| Giorno 8 | `/images/viaggi/messico-yucatan-completo/giorno-08-edzna.webp` | [Edzna Palace View.jpg](https://commons.wikimedia.org/wiki/File:Edzna_Palace_View.jpg) | Gary Todd | CC0 |
| Giorno 9 | `/images/viaggi/messico-yucatan-completo/giorno-09-palazzo-palenque.webp` | [The Palenque Palace Aqueduct Beautiful.jpg](https://commons.wikimedia.org/wiki/File:The_Palenque_Palace_Aqueduct_Beautiful.jpg) | Jan Harenburg | CC BY 4.0 |
| Giorno 10 | `/images/viaggi/messico-yucatan-completo/giorno-10-tempio-iscrizioni.webp` | [Temple of the Inscriptions, view from The Palace - Palenque Maya Site, Feb 2020.jpg](https://commons.wikimedia.org/wiki/File:Temple_of_the_Inscriptions,_view_from_The_Palace_-_Palenque_Maya_Site,_Feb_2020.jpg) | Bernard DUPONT | CC BY-SA 2.0 |
| Giorno 11 | `/images/viaggi/messico-yucatan-completo/giorno-11-misol-ha.webp` | [Misol-Ha Waterfall - Chiapas - Mexico - 2021.jpg](https://commons.wikimedia.org/wiki/File:Misol-Ha_Waterfall_-_Chiapas_-_Mexico_-_2021.jpg) | Adam Jones | CC BY 2.0 |
| Giorno 12 | `/images/viaggi/messico-yucatan-completo/giorno-12-becan.webp` | [T09 Becan (115695783).jpeg](https://commons.wikimedia.org/wiki/File:T09_Becan_(115695783).jpeg) | Valentina Tosi | CC BY 3.0 |
| Giorno 13 | `/images/viaggi/messico-yucatan-completo/giorno-13-calakmul.webp` | [Calakmul, Structure II (14386305393).jpg](https://commons.wikimedia.org/wiki/File:Calakmul,_Structure_II_(14386305393).jpg) | Arian Zwegers | CC BY 2.0 |
| Giorno 14 | `/images/viaggi/messico-yucatan-completo/giorno-14-fuerte-bacalar.webp` | [Fuerte San Felipe - Bacalar Feb 2020.jpg](https://commons.wikimedia.org/wiki/File:Fuerte_San_Felipe_-_Bacalar_Feb_2020.jpg) | Bernard DUPONT | CC BY-SA 2.0 |
| Giorno 15 | `/images/viaggi/messico-yucatan-completo/giorno-15-laguna-bacalar.webp` | [Bacalar lagoon.jpg](https://commons.wikimedia.org/wiki/File:Bacalar_lagoon.jpg) | Yosef Ben Melamed | CC BY-SA 4.0 |

## Schede destinazione

| Scheda | File | Fonte | Autore | Licenza |
|---|---|---|---|---|
| marocco/chefchaouen | `/images/marocco/chefchaouen.webp` | [2018 01 (Blue) - Chaouen.jpg](https://commons.wikimedia.org/wiki/File:2018_01_(Blue)_-_Chaouen.jpg) | Fbrandao.1963 | CC BY-SA 4.0 |
| marocco/fes | `/images/marocco/fes.webp` | [Zawiya of Moulay Idris II 2.jpg](https://commons.wikimedia.org/wiki/File:Zawiya_of_Moulay_Idris_II_2.jpg) | Casual Builder | CC BY-SA 4.0 |
| marocco/meknes-volubilis | `/images/marocco/meknes-volubilis.webp` | [The Triumphal Arch of Caracalla, Volubilis.jpg](https://commons.wikimedia.org/wiki/File:The_Triumphal_Arch_of_Caracalla,_Volubilis.jpg) | Mustang Joe | CC0 |
| marocco/rabat | `/images/marocco/rabat.webp` | [Bab Oudaya DSCF2501.jpg](https://commons.wikimedia.org/wiki/File:Bab_Oudaya_DSCF2501.jpg) | R Prazeres | CC BY-SA 4.0 |
| giappone/magome-tsumago | `/images/giappone/magome-tsumago.webp` | [Tsumago-juku - Tsumago686.jpg](https://commons.wikimedia.org/wiki/File:Tsumago-juku_-_Tsumago686.jpg) | lumoplank | CC0 |
| giappone/matsumoto-kamikochi | `/images/giappone/matsumoto-kamikochi.webp` | [Kamikochi - Kamikochi6538.jpg](https://commons.wikimedia.org/wiki/File:Kamikochi_-_Kamikochi6538.jpg) | lumoplank | CC0 |
| giappone/takayama | `/images/giappone/takayama.webp` | [One of the three main streets in Sanmachi-Suji (6156038234).jpg](https://commons.wikimedia.org/wiki/File:One_of_the_three_main_streets_in_Sanmachi-Suji_(6156038234).jpg) | Maarten Heerlien | CC BY 2.0 |
| giappone/shirakawa-go | `/images/giappone/shirakawa-go.webp` | [Shirakawa-go from Shiroyama.JPG](https://commons.wikimedia.org/wiki/File:Shirakawa-go_from_Shiroyama.JPG) | Alpsdake | CC BY-SA 3.0 |
| giappone/kanazawa | `/images/giappone/kanazawa.webp` | [Higashi Chaya district, Kanazawa (3810704024).jpg](https://commons.wikimedia.org/wiki/File:Higashi_Chaya_district,_Kanazawa_(3810704024).jpg) | Andrea Schaffer | CC BY 2.0 |
| giappone/koya-san | `/images/giappone/koya-san.webp` | [OKU - Stone memorials among cedar trees at Okunoin Cemetery, Koyasan, Japan, 2015.jpg](https://commons.wikimedia.org/wiki/File:OKU_-_Stone_memorials_among_cedar_trees_at_Okunoin_Cemetery,_Koyasan,_Japan,_2015.jpg) | Josep M. Gracia | CC BY-SA 4.0 |
| giappone/okinawa-naha | `/images/giappone/okinawa-naha.webp` | [Nago Okinawa Kouri-Bridge-01.jpg](https://commons.wikimedia.org/wiki/File:Nago_Okinawa_Kouri-Bridge-01.jpg) | CEphoto, Uwe Aranas | CC BY-SA 3.0 |
| giappone/isole-kerama | `/images/giappone/isole-kerama.webp` | [Kerama Island - 6081216280.jpg](https://commons.wikimedia.org/wiki/File:Kerama_Island_-_6081216280.jpg) | SteFou! | CC BY 2.0 |
| giappone/miyako | `/images/giappone/miyako.webp` | [Miyako sunayama beach 1.jpg](https://commons.wikimedia.org/wiki/File:Miyako_sunayama_beach_1.jpg) | Paipateroma | CC BY-SA 4.0 |
| giappone/ishigaki-yaeyama | `/images/giappone/ishigaki-yaeyama.webp` | [TaketomiMinamie2.jpg](https://commons.wikimedia.org/wiki/File:TaketomiMinamie2.jpg) | Minamie | CC BY 2.0 |
| giappone/sapporo | `/images/giappone/sapporo.webp` | [US Navy 060209-N-7526R-205 Illuminated trees and ice sculptures line the streets leading up to Sapporo's TV Tower during the Sapporo Ice Festival.jpg](https://commons.wikimedia.org/wiki/File:US_Navy_060209-N-7526R-205_Illuminated_trees_and_ice_sculptures_line_the_streets_leading_up_to_Sapporo%27s_TV_Tower_during_the_Sapporo_Ice_Festival.jpg) | Marc Rockwell-Pate, U.S. Navy | Public domain |
| giappone/niseko | `/images/giappone/niseko.webp` | [Mt.Yotei in Hirahu ski resort／ヒラフスキー場から羊蹄山 - panoramio.jpg](https://commons.wikimedia.org/wiki/File:Mt.Yotei_in_Hirahu_ski_resort%EF%BC%8F%E3%83%92%E3%83%A9%E3%83%95%E3%82%B9%E3%82%AD%E3%83%BC%E5%A0%B4%E3%81%8B%E3%82%89%E7%BE%8A%E8%B9%84%E5%B1%B1_-_panoramio.jpg) | T DMY | CC BY 3.0 |
| giappone/furano | `/images/giappone/furano.webp` | [Furano Snow Resort view1.JPG](https://commons.wikimedia.org/wiki/File:Furano_Snow_Resort_view1.JPG) | wakimasa | Public domain |
| giappone/hakuba | `/images/giappone/hakuba.webp` | [Hakuba ski resort (51845936156).jpg](https://commons.wikimedia.org/wiki/File:Hakuba_ski_resort_(51845936156).jpg) | Raita Futo | CC BY 2.0 |
| thailandia/chiang-rai | `/images/thailandia/chiang-rai.webp` | [Wat Rong Khun 2.jpg](https://commons.wikimedia.org/wiki/File:Wat_Rong_Khun_2.jpg) | Misharim | CC BY 4.0 |
| thailandia/triangolo-d-oro | `/images/thailandia/triangolo-d-oro.webp` | [Ruak River 4.jpg](https://commons.wikimedia.org/wiki/File:Ruak_River_4.jpg) | Slleong | CC0 |
| thailandia/pai-mae-hong-son | `/images/thailandia/pai-mae-hong-son.webp` | [Pai countryside, Thailand.jpg](https://commons.wikimedia.org/wiki/File:Pai_countryside,_Thailand.jpg) | Vyacheslav Argenberg | CC BY 4.0 |
| messico/uxmal-ruta-puuc | `/images/messico/uxmal-ruta-puuc-riccardo.webp` | Rick: `VIAGGI/video/Messico/GH010275.MP4` a 6.6 s | Rick | — |
| messico/palenque | `/images/messico/palenque.webp` | [Palenque, Temple of the Inscriptions (20498755918).jpg](https://commons.wikimedia.org/wiki/File:Palenque,_Temple_of_the_Inscriptions_(20498755918).jpg) | Arian Zwegers | CC BY 2.0 |
| messico/calakmul | `/images/messico/calakmul.webp` | [Calakmul Mexico, Structure I.jpg](https://commons.wikimedia.org/wiki/File:Calakmul_Mexico,_Structure_I.jpg) | Oogstweg | CC BY-SA 4.0 |
