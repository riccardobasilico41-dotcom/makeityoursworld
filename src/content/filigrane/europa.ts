import type { FiligranaPaese } from '../filigrane'

const C = 'https://commons.wikimedia.org/wiki/File:'
const KOHLER = 'Franz Eugen Köhler (a cura di), Köhler\'s Medizinal-Pflanzen'

export const filigraneEuropa: Record<string, FiligranaPaese> = {
  italia: {
    a: {
      src: '/images/filigrane/italia-a.webp',
      cosa: 'Ramo di limone in fiore con frutti, tavola botanica',
      fonte: { titolo: 'Citrus limonum, tav. 3', autore: KOHLER, anno: '1887', url: C + "K%C3%B6hler%27s_Medizinal-Pflanzen_in_naturgetreuen_Abbildungen_mit_kurz_erl%C3%A4uterndem_Texte_(Plate_3)_BHL303566.jpg", licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/italia-b.webp',
      cosa: 'Il Colosseo, incisione dalle Vedute di Roma',
      fonte: { titolo: "Veduta dell'Anfiteatro Flavio detto il Colosseo", autore: 'Giovanni Battista Piranesi', anno: '1757 circa', url: C + "Veduta_dell%27Anfiteatro_Flavio_-_Giovanni_Battista_Piranesi.jpg", licenza: 'Pubblico dominio' },
    },
  },
  francia: {
    a: {
      src: '/images/filigrane/francia-a.webp',
      cosa: 'Lavanda in fiore, tavola botanica',
      fonte: { titolo: 'Lavandula vera, tav. 60', autore: KOHLER, anno: '1887', url: C + "K%C3%B6hler%27s_Medizinal-Pflanzen_in_naturgetreuen_Abbildungen_mit_kurz_erl%C3%A4uterndem_Texte_(Plate_60)_BHL303684.jpg", licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/francia-b.webp',
      cosa: 'La chimera di Notre-Dame che guarda Parigi, acquaforte',
      fonte: { titolo: 'Le Stryge', autore: 'Charles Meryon', anno: '1853', url: C + 'Le_Stryge_(The_Vampire)_-_Vanderbilt_Fine_Arts_Gallery_-_1957.032.tif', licenza: 'Pubblico dominio' },
    },
  },
  spagna: {
    a: {
      src: '/images/filigrane/spagna-a.webp',
      cosa: 'Ramo di melograno in fiore (la granada), tavola botanica',
      fonte: { titolo: 'Punica granatum, tav. 110', autore: KOHLER, anno: '1890', url: C + "K%C3%B6hler%27s_Medizinal-Pflanzen_in_naturgetreuen_Abbildungen_mit_kurz_erl%C3%A4uterndem_Texte_(Plate_110_I)_(8232783720).jpg", licenza: 'Pubblico dominio' },
    },
  },
  portogallo: {
    a: {
      src: '/images/filigrane/portogallo-a.webp',
      cosa: 'Ramo di quercia da sughero con ghiande, tavola botanica',
      fonte: { titolo: 'Quercus suber, tav. 152', autore: KOHLER, anno: '1890', url: C + "K%C3%B6hler%27s_Medizinal-Pflanzen_in_naturgetreuen_Abbildungen_mit_kurz_erl%C3%A4uterndem_Texte_(Plate_152)_(8232804174).jpg", licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/portogallo-b.webp',
      cosa: 'La Torre di Belém con i velieri sul Tago, incisione acquerellata',
      fonte: { titolo: 'Der Thurn Belem oder Bethlehem', autore: 'Anonimo tedesco', anno: 'XVII secolo', url: C + 'Torre_de_Bel%C3%A9m_-_gravura_alem%C3%A3_aguarelada,_s%C3%A9c_XVII.png', licenza: 'Pubblico dominio' },
    },
  },
  svizzera: {
    a: {
      src: '/images/filigrane/svizzera-a.webp',
      cosa: 'Stelle alpine, tavola botanica',
      fonte: { titolo: 'Gnaphalium leontopodium (Edelweiss), Atlas der Alpenflora', autore: 'Anton Hartinger', anno: '1882', url: C + 'Leontopodium_alpinum001.jpg', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/svizzera-b.webp',
      cosa: 'Il Cervino visto dal Riffel, litografia',
      fonte: { titolo: 'Hôtel du Riffel & le Mont Cervin, Valais', autore: 'Anonimo (Collezione Gugelmann, Biblioteca nazionale svizzera)', anno: '1860-1870 circa', url: C + 'CH-NB_-_Grafiken_Orts-_und_Landschaftsansichten_-_GS-GRAF-ANSI-VS-189.tif', licenza: 'Pubblico dominio' },
    },
  },
  austria: {
    a: {
      src: '/images/filigrane/austria-a.webp',
      cosa: 'Genziana alpina, tavola botanica',
      fonte: { titolo: 'Gentiana acaulis, Atlas der Alpenflora, tav. 335', autore: 'Anton Hartinger', anno: '1882', url: C + 'Atlas_der_Alpenflora_(Pl._335)_BHL10384610.jpg', licenza: 'Pubblico dominio' },
    },
  },
  germania: {
    a: {
      src: '/images/filigrane/germania-a.webp',
      cosa: 'La Lepre di Dürer, acquerello',
      fonte: { titolo: 'Feldhase (Lepre giovane)', autore: 'Albrecht Dürer', anno: '1502', url: C + 'Albrecht_D%C3%BCrer_-_Hare,_1502_-_Google_Art_Project.jpg', licenza: 'Pubblico dominio' },
    },
  },
  'paesi-bassi': {
    a: {
      src: '/images/filigrane/paesi-bassi-a.webp',
      cosa: 'Due tulipani screziati, acquerello da un libro di tulipani',
      fonte: { titolo: 'Twee tulpen met insecten (RP-T-1967-87)', autore: 'Anonimo olandese, Rijksmuseum', anno: '1624-1681', url: C + 'Twee_tulpen_met_insecten_Ensemble_van_dubbelgevouwen_en_op_beide_zijden_met_tulpen_betekende_bladen_(serietitel),_RP-T-1967-87.jpg', licenza: 'CC0' },
    },
    b: {
      src: '/images/filigrane/paesi-bassi-b.webp',
      cosa: 'Il mulino a vento, acquaforte',
      fonte: { titolo: 'De molen', autore: 'Rembrandt van Rijn', anno: '1641', url: C + 'De_molen,_RP-P-OB-473.jpg', licenza: 'CC0' },
    },
  },
  danimarca: {
    a: {
      src: '/images/filigrane/danimarca-a.webp',
      cosa: 'Ramo di faggio, albero nazionale danese, tavola della Flora Danica',
      fonte: { titolo: 'Flora Danica, fasc. 22, tav. 1283', autore: 'Flora Danica (Copenaghen)', anno: '1806', url: C + 'Flora_Danica_Hft_22_Tab_1283.tif', licenza: 'Pubblico dominio' },
    },
  },
  svezia: {
    a: {
      src: '/images/filigrane/svezia-a.webp',
      cosa: 'Linnaea borealis, il fiore di Linneo, tavola botanica',
      fonte: { titolo: 'Svensk botanik, tav. 1', autore: 'Johan Wilhelm Palmstruch', anno: '1815', url: C + 'Svensk_botanik_(Plate_1)_(6120311694).jpg', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/svezia-b.webp',
      cosa: 'Donna in un viale autunnale, acquerello',
      fonte: { titolo: 'Hösten (Autunno)', autore: 'Carl Larsson', anno: '1884', url: C + 'Autumn_(Carl_Larsson)_-_Nationalmuseum_-_24343.tif', licenza: 'Pubblico dominio' },
    },
  },
  norvegia: {
    a: {
      src: '/images/filigrane/norvegia-a.webp',
      cosa: 'Portale intagliato di una chiesa di legno (stavkirke), litografia',
      fonte: { titolo: 'Denkmale einer sehr ausgebildeten Holzbaukunst … Norwegens, fasc. 1, tav. 5', autore: 'Johan Christian Dahl', anno: '1837', url: C + 'Dahl_1.Heft_Tafel_5_600dpi.png', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/norvegia-b.webp',
      cosa: 'Una stavkirke tra le montagne, litografia',
      fonte: { titolo: 'Denkmale einer sehr ausgebildeten Holzbaukunst … Norwegens, fasc. 2, tav. 2', autore: 'Johan Christian Dahl', anno: '1837', url: C + 'Dahl_2.Heft_Tafel_2_600dpi.png', licenza: 'Pubblico dominio' },
    },
  },
  islanda: {
    a: {
      src: '/images/filigrane/islanda-a.webp',
      cosa: 'Pulcinelle di mare, tavola ornitologica',
      fonte: { titolo: 'Naturgeschichte der Vögel Deutschlands, tav. 335 (Lunda arctica)', autore: 'Johann Andreas e Johann Friedrich Naumann', anno: '1820-1860', url: C + 'Johann_Andreas_Naumann%27s_..._Naturgeschichte_der_V%C3%B6gel_Deutschlands,_nach_einigen_Erfahrungen_entworfen_(Taf._335)_(6058937141).jpg', licenza: 'Pubblico dominio' },
    },
  },
  estonia: {
    a: {
      src: '/images/filigrane/estonia-a.webp',
      cosa: 'Fiordaliso, fiore nazionale estone, tavola botanica',
      fonte: { titolo: 'Centaurea cyanus, Flora von Deutschland, Österreich und der Schweiz', autore: 'Otto Wilhelm Thomé', anno: '1885', url: C + 'Centaurea_cyanus001.jpg', licenza: 'Pubblico dominio' },
    },
  },
  lettonia: {
    a: {
      src: '/images/filigrane/lettonia-a.webp',
      cosa: 'Margherita, fiore nazionale lettone, tavola botanica',
      fonte: { titolo: 'Chrysanthemum leucanthemum, Flora von Deutschland, Österreich und der Schweiz', autore: 'Otto Wilhelm Thomé', anno: '1885', url: C + 'Illustration_Chrysanthemum_leucanthemum0.jpg', licenza: 'Pubblico dominio' },
    },
  },
  lituania: {
    a: {
      src: '/images/filigrane/lituania-a.webp',
      cosa: 'Ruta, pianta nazionale lituana, tavola botanica',
      fonte: { titolo: 'Ruta graveolens, tav. 24', autore: KOHLER, anno: '1887', url: C + "K%C3%B6hler%27s_Medizinal-Pflanzen_in_naturgetreuen_Abbildungen_mit_kurz_erl%C3%A4uterndem_Texte_(Plate_24)_BHL303610.jpg", licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/lituania-b.webp',
      cosa: 'Il castello di Trakai sul lago, litografia',
      fonte: { titolo: 'Troki', autore: 'Napoleon Orda', anno: '1875-1877', url: C + 'Orda_Troki.jpg', licenza: 'Pubblico dominio' },
    },
  },
  polonia: {
    b: {
      src: '/images/filigrane/polonia-b.webp',
      cosa: 'Il castello del Wawel visto dalla Vistola, incisione su acciaio',
      fonte: { titolo: 'Krakovie, le Château royal du côté de la Wistule', autore: 'Anonimo, da «La Pologne historique» di Leonard Chodźko', anno: 'prima del 1836', url: C + 'Krakovie,_le_Chateau_royal_du_cote_de_la_Wistule._nie_po_1836_(87362083).jpg', licenza: 'Pubblico dominio' },
    },
  },
  'repubblica-ceca': {
    a: {
      src: '/images/filigrane/repubblica-ceca-a.webp',
      cosa: 'La Rosa dalla serie I Fiori, pannello decorativo liberty',
      fonte: { titolo: 'Les Fleurs: La Rose', autore: 'Alfons Mucha', anno: '1898', url: C + 'Alfons_Mucha_-_The_Flowers-Rose,_1898.jpg', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/repubblica-ceca-b.webp',
      cosa: 'Veduta di Praga e della Moldava, incisione',
      fonte: { titolo: 'Ansicht von Prag', autore: 'Wilhelm Kandler (disegno), C. F. Merkel (incisione)', anno: '1837 circa', url: C + 'Ansicht_Prag_um_1850.jpg', licenza: 'Pubblico dominio' },
    },
  },
  ungheria: {
    a: {
      src: '/images/filigrane/ungheria-a.webp',
      cosa: 'Pianta di paprika con il frutto rosso, tavola botanica',
      fonte: { titolo: 'Capsicum annuum, tav. 127', autore: KOHLER, anno: '1890', url: C + "K%C3%B6hler%27s_Medizinal-Pflanzen_in_naturgetreuen_Abbildungen_mit_kurz_erl%C3%A4uterndem_Texte_(Plate_127)_(8231730035).jpg", licenza: 'Pubblico dominio' },
    },
  },
  croazia: {
    a: {
      src: '/images/filigrane/croazia-a.webp',
      cosa: 'Ramo di olivo in fiore con olive, tavola botanica',
      fonte: { titolo: 'Olea europaea, tav. 109', autore: KOHLER, anno: '1890', url: C + "K%C3%B6hler%27s_Medizinal-Pflanzen_in_naturgetreuen_Abbildungen_mit_kurz_erl%C3%A4uterndem_Texte_(Plate_109)_(8232783218).jpg", licenza: 'Pubblico dominio' },
    },
  },
  montenegro: {
    b: {
      src: '/images/filigrane/montenegro-b.webp',
      cosa: 'Perast sulle Bocche di Cattaro, acquerello',
      fonte: { titolo: 'Perasto, Bocche di Cattaro', autore: 'Fritz Lach', anno: '1927', url: C + 'Fritz_Lach_Perasto_Bocche_di_Cattaro_1927.jpg', licenza: 'Pubblico dominio' },
    },
  },
  bulgaria: {
    a: {
      src: '/images/filigrane/bulgaria-a.webp',
      cosa: 'Rosa damascena, la rosa delle valli bulgare, incisione acquerellata',
      fonte: { titolo: 'Les Roses: Rosa damascena subalba', autore: 'Pierre-Joseph Redouté', anno: '1817', url: C + 'Henry_Joseph_Redout%C3%A9_-_Les_Roses-_Rosa_Damascena,_subalba_-_1965.291_-_Cleveland_Museum_of_Art.jpg', licenza: 'CC0' },
    },
    b: {
      src: '/images/filigrane/bulgaria-b.webp',
      cosa: 'La raccolta delle rose in Bulgaria, incisione',
      fonte: { titolo: 'Rosenernte (da «Donau-Bulgarien und der Balkan»)', autore: 'Felix Philipp Kanitz', anno: '1875-1879', url: C + 'Rose-picking_in_Bulgaria_1870ies.jpg', licenza: 'Pubblico dominio' },
    },
  },
  transilvania: {
    b: {
      src: '/images/filigrane/transilvania-b.webp',
      cosa: 'Il castello dei Corvino a Hunedoara (Vajdahunyad), incisione su acciaio',
      fonte: { titolo: 'Burg Vajda-Hunyad (Siebenbürgen)', autore: 'Ludwig Rohbock (disegno)', anno: 'XIX secolo', url: C + 'Burg_Vajad_Hunyad_(Siebenbuergen).jpg', licenza: 'Pubblico dominio' },
    },
  },
}
