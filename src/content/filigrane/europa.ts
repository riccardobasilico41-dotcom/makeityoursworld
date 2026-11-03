import type { FiligranaPaese } from '../filigrane'

const C = 'https://commons.wikimedia.org/wiki/File:'
const KOHLER = 'Franz Eugen Köhler (a cura di), Köhler\'s Medizinal-Pflanzen'

export const filigraneEuropa: Record<string, FiligranaPaese> = {
  italia: {
    a: {
      src: '/images/filigrane/italia-a.webp',
      cosa: 'Il pizzaiolo napoletano con la pala e la pizza, litografia colorata',
      fonte: { titolo: 'Pizzaiolo (Pizzaiuolo)', autore: 'Gaetano Dura', anno: 'XIX secolo', url: C + 'PizzaioloPrint.jpg', licenza: 'Pubblico dominio' },
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
      cosa: 'La Tour Eiffel nel manifesto dell\'Esposizione universale di Parigi (ritagliata sulla torre, senza titolo)',
      fonte: { titolo: 'Exposition Universelle de Paris en 1889. La Tour Eiffel, le plus haut monument du globe', autore: 'Anonimo', anno: '1889', url: C + 'Exposition_Universelle_de_Paris_en_1889._La_Tour_Eiffel,_le_plus_haut_monument_du_globe._Prix_0,20_centimes_affiche,_non_identifi%C3%A9.jpg', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/francia-b.webp',
      cosa: 'La vendemmia: vendemmiatori con i cesti tra i filari, incisione del frontespizio (ritagliata)',
      fonte: { titolo: 'Frontespizio del vol. X del Cours complet d\'agriculture (Rozier)', autore: 'Anonimo (Rijksmuseum)', anno: '1800', url: C + 'Druivenoogst_Titelpagina_voor_Rozier,_Cours_complet_d\'agriculture_(..)_ou_Dictionnaire_Universel_d\'agriculture,_1800,_RP-P-1910-4341.jpg', licenza: 'CC0' },
    },
  },
  spagna: {
    a: {
      src: '/images/filigrane/spagna-a.webp',
      cosa: 'Gitana di Granada che balla lo zorongo con il tamburello, incisione (ritagliata senza la firma)',
      fonte: { titolo: 'Gitana de Grenade dansant le zorongo (Le Tour du monde, vol. 10, p. 409)', autore: 'Gustave Doré', anno: '1864', url: C + 'Le_Tour_du_monde-10-p409.jpg', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/spagna-b.webp',
      cosa: 'La Porta della Giustizia dell\'Alhambra di Granada, litografia colorata (ritagliata senza cornice e didascalia)',
      fonte: { titolo: 'Puerta del Juicio (Alhambra), dalla serie Ruinas de Granada', autore: 'Chénot (litografo)', anno: 'XIX secolo', url: C + 'Puerta_del_Juicio_(Alhambra),_objectnr_A_14481.tif', licenza: 'Pubblico dominio' },
    },
  },
  portogallo: {
    a: {
      src: '/images/filigrane/portogallo-a.webp',
      cosa: 'La caravella reale di re Manuele I, incisione (ritagliata)',
      fonte: { titolo: 'Caravela Real de D. Manuel. «Vista de Lisboa, século XV»', autore: 'Anonimo (Album do Século)', anno: '1900 circa', url: C + 'Caravela_Real_de_D._Manuel.jpg', licenza: 'Pubblico dominio' },
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
      cosa: 'Mucca con il campanaccio al collo, disegno a matita da un taccuino (soggetto tipico, non una veduta svizzera precisa)',
      fonte: { titolo: 'Koe met een bel om de nek, van opzij gezien', autore: 'Rijksmuseum (schizzo da taccuino)', anno: '1858', url: C + 'Koe_met_een_bel_om_de_nek,_van_opzij_gezien,_RP-T-2000-108-4(R).jpg', licenza: 'CC0' },
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
      cosa: 'Il duomo di Santo Stefano a Vienna, acquerello',
      fonte: { titolo: 'Stephansdom in Wien', autore: 'Jakob Alt', anno: '1852', url: C + 'Jacob_Alt_Stephansdom_in_Wien_1852.jpg', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/austria-b.webp',
      cosa: 'Il castello di Schönbrunn con la Gloriette, acquerello (ritagliato senza didascalia)',
      fonte: { titolo: 'Ansicht des Schönbrunnerschloßes mit der Gloriette', autore: 'Balthasar Wigand', anno: 'prima del 1846', url: C + 'Balthasar_Wigand_Ansicht_des_Sch%C3%B6nbrunnerschlo%C3%9Fes.jpg', licenza: 'Pubblico dominio' },
    },
  },
  germania: {
    a: {
      src: '/images/filigrane/germania-a.webp',
      cosa: 'La Lepre di Dürer, acquerello',
      fonte: { titolo: 'Feldhase (Lepre giovane)', autore: 'Albrecht Dürer', anno: '1502', url: C + 'Albrecht_D%C3%BCrer_-_Hare,_1502_-_Google_Art_Project.jpg', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/germania-b.webp',
      cosa: 'La Porta di Brandeburgo a Berlino, litografia colorata',
      fonte: { titolo: 'Berlin, Brandenburger Tor', autore: 'K. Loeillot', anno: '1850 circa', url: C + 'Berlin_Brandenburger_Tor_c1850.jpg', licenza: 'Pubblico dominio' },
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
      cosa: 'Il castello di Kronborg (Elsinore), xilografia',
      fonte: { titolo: 'Elsinore (Kronborg Castle)', autore: 'John Skinner Prout (inciso da Joseph Swain)', anno: '1862', url: C + 'Elsinore_-_John_Skinner_Prout.png', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/danimarca-b.webp',
      cosa: 'Nave vichinga del IX secolo in mare, stampa (ritagliata dai margini)',
      fonte: { titolo: 'Kieler uit de negende eeuw', autore: 'Anonimo (Rijksmuseum)', anno: '1857-1864', url: C + 'Kieler,_9e_eeuw,_RP-P-OB-28.423.jpg', licenza: 'CC0' },
    },
  },
  svezia: {
    a: {
      src: '/images/filigrane/svezia-a.webp',
      cosa: 'Il Palazzo Reale di Stoccolma (Gamla stan), litografia',
      fonte: { titolo: 'Le château royal à Stockholm vue de la statue de Gustave III', autore: 'Auguste Mayer', anno: '1840 circa', url: C + 'Commission_scientifique_du_Nord_-_A._Mayer_-_Le_Ch%C3%A2teau_royal_%C3%A0_Stockholm_vue_de_la_statue_de_Gustave_III.jpg', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/svezia-b.webp',
      cosa: 'Alce con la femmina tra canne e betulle, incisione (ritagliata)',
      fonte: { titolo: 'Alces alces, dal Dizionario enciclopedico Brockhaus-Efron', autore: 'Richard Friese', anno: '1890-1907', url: C + 'Alces_alces_par_Richard_Friese.jpg', licenza: 'Pubblico dominio' },
    },
  },
  norvegia: {
    a: {
      src: '/images/filigrane/norvegia-a.webp',
      cosa: 'Drakkar: nave vichinga del IX secolo sulle onde, stampa (ritagliata dai margini)',
      fonte: { titolo: 'Vaartuig uit de negende eeuw', autore: 'Anonimo (Rijksmuseum)', anno: '1857-1864', url: C + 'Vaartuig,_9e_eeuw,_RP-P-OB-28.422.jpg', licenza: 'CC0' },
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
      cosa: 'Tallinn: il Vecchio Mercato (Vana turg) nella città vecchia, acquatinta colorata',
      fonte: { titolo: 'Der Alte Markt zu Reval', autore: 'Theodor Gehlhaar', anno: '1871', url: C + 'Vana_turg_Tallinnas._Der_Alte_Markt_zu_Reval_(cropped,_enhanced).jpg', licenza: 'Pubblico dominio' },
    },
  },
  lettonia: {
    a: {
      src: '/images/filigrane/lettonia-a.webp',
      cosa: 'Riga: il Municipio (Rathaus) sulla piazza della città vecchia, incisione (ritagliata)',
      fonte: { titolo: 'Das Rathaus in Riga (Raekoda Riias)', autore: 'Theodor Gehlhaar', anno: '1835', url: C + 'Raekoda_Riias._1835,_AM_7469_4_G_602_4.tif', licenza: 'Pubblico dominio' },
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
    a: {
      src: '/images/filigrane/polonia-a.webp',
      cosa: 'Cracovia: Sukiennice e torre del Municipio in piazza del Mercato, litografia (sorgente piccola, 660 px)',
      fonte: { titolo: 'Sukiennice i wieża ratuszowa w Krakowie', autore: 'H. Walter', anno: '1860-1865', url: C + 'Sukiennice_i_wie%C5%BCa_ratuszowa_w_Krakowie,_1860-1865.jpg', licenza: 'Pubblico dominio' },
    },
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
    b: {
      src: '/images/filigrane/ungheria-b.webp',
      cosa: 'Il Ponte delle catene tra Buda e Pest, fotografia d\'epoca all\'albumina (ritagliata dal cartoncino)',
      fonte: { titolo: 'Kettingbrug die Buda met Pesth verbindt', autore: 'Anonimo (Rijksmuseum)', anno: '1850-1920', url: C + 'Kettingbrug_die_Buda_met_Pesth_verbindt,_RP-F-F01904.jpg', licenza: 'CC0' },
    },
  },
  croazia: {
    a: {
      src: '/images/filigrane/croazia-a.webp',
      cosa: 'Ramo di olivo in fiore con olive, tavola botanica',
      fonte: { titolo: 'Olea europaea, tav. 109', autore: KOHLER, anno: '1890', url: C + "K%C3%B6hler%27s_Medizinal-Pflanzen_in_naturgetreuen_Abbildungen_mit_kurz_erl%C3%A4uterndem_Texte_(Plate_109)_(8232783218).jpg", licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/croazia-b.webp',
      cosa: 'Il forte Lovrijenac (San Lorenzo) accanto alle mura di Dubrovnik (Ragusa), acquerello',
      fonte: { titolo: 'Das Kastell San Lorenzo in Ragusa', autore: 'Rudolf von Alt', anno: '1840', url: C + 'Rudolf_von_Alt_-_Das_Kastell_San_Lorenzo_in_Ragusa_-_1840.jpeg', licenza: 'Pubblico dominio' },
    },
  },
  montenegro: {
    a: {
      src: '/images/filigrane/montenegro-a.webp',
      cosa: 'Cattaro (Kotor) e le Bocche, litografia colorata',
      fonte: { titolo: 'Kotor (Cattaro) intorno al 1840', autore: 'J. Alt (disegno), Joseph Zahradniczek il Giovane (litografia)', anno: '1840 circa', url: C + 'Kotor_shooting_c1840.jpg', licenza: 'Pubblico dominio' },
    },
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
    a: {
      src: '/images/filigrane/transilvania-a.webp',
      cosa: 'Il castello di Bran (Törzburg), xilografia (ritagliata dalla didascalia)',
      fonte: { titolo: 'Castle of Terzburg', autore: 'George Pearson', anno: '1865', url: C + 'Castle_of_Terzburg.jpg', licenza: 'Pubblico dominio' },
    },
    b: {
      src: '/images/filigrane/transilvania-b.webp',
      cosa: 'Il castello dei Corvino a Hunedoara (Vajdahunyad), incisione su acciaio',
      fonte: { titolo: 'Burg Vajda-Hunyad (Siebenbürgen)', autore: 'Ludwig Rohbock (disegno)', anno: 'XIX secolo', url: C + 'Burg_Vajad_Hunyad_(Siebenbuergen).jpg', licenza: 'Pubblico dominio' },
    },
  },
}
