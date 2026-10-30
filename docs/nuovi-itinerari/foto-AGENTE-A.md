# Foto agente A: Messico (Día de los Muertos, CDMX e Baja), Brasile, Croazia

Tutte le foto sono Unsplash (licenza Unsplash, nessuna Unsplash+) o Pexels (licenza Pexels): nessuna attribuzione obbligatoria, crediti tenuti per tracciabilità. Nessuna foto Wikimedia usata.
Ogni foto è stata guardata e corrisponde al luogo indicato nell'alt. Lato lungo 1600 px (1400 per due immagini molto dettagliate), max 250 KB.

## Già scritto nei file (niente da fare)

- `immagine` + `imageAlt` nei giorni di viaggi-dati/messico-dia-de-los-muertos.ts, messico-cdmx-baja-california.ts, brasile-itinerario.ts, croazia-itinerario.ts
- `immagine` (e alt allineato alla foto) di tutte le destinazioni di destinazioni/brasile.ts, croazia.ts, messico-centro-baja.ts
- `heroImage` di paesi/brasile.ts e paesi/croazia.ts = la copertina del viaggio (stessa convenzione di bulgaria/giappone)

## Da incollare in src/content/viaggi-copertine.ts

```ts
  'messico-dia-de-los-muertos': {
    immagine: '/images/copertine/messico-dia-de-los-muertos.jpg',
    imageAlt: 'Un altare del Día de Muertos con cempasúchil, papel picado, candele e fotografie dei defunti',
  },
  'messico-cdmx-baja-california': {
    immagine: '/images/copertine/messico-cdmx-baja-california.jpg',
    imageAlt: 'La baia di Balandra vicino a La Paz vista dalla collina, con le montagne del deserto e l\'acqua bassa del Mar di Cortés',
  },
  'brasile-itinerario': {
    immagine: '/images/copertine/brasile-itinerario.jpg',
    imageAlt: 'Le dune bianche e le lagune turchesi dei Lençóis Maranhenses',
  },
  'croazia-itinerario': {
    immagine: '/images/copertine/croazia-itinerario.jpg',
    imageAlt: 'La città vecchia di Dubrovnik vista dall\'alto, con le mura, il porto e i tetti rossi sul mare',
  },
```

## Da incollare in src/content/viaggi-copertine-crediti.ts

```ts
  'messico-dia-de-los-muertos': {
    autore: 'Roger Ce (Unsplash)',
    licenza: 'Unsplash License',
    fonteUrl: 'https://images.unsplash.com/photo-1667598335682-fd98c95fc80f',
  },
  'messico-cdmx-baja-california': {
    autore: 'Alejandro De Casso (Unsplash)',
    licenza: 'Unsplash License',
    fonteUrl: 'https://images.unsplash.com/photo-1650336534265-c2345016e42e',
  },
  'brasile-itinerario': {
    autore: 'Renato Nascimento (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/photo/27688583/',
  },
  'croazia-itinerario': {
    autore: 'László Tóth (Unsplash)',
    licenza: 'Unsplash License',
    fonteUrl: 'https://images.unsplash.com/photo-1589472501747-1660aeed4d80',
  },
```

## Da incollare in src/content/viaggi-giorno-foto-crediti.ts

```ts
  'messico-dia-de-los-muertos': {
    'Giorno 1 — Arrivo a Città del Messico': {
      autore: 'Primal Felines (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1622944732771-98ea30434259',
    },
    'Giorno 2 — Il Centro Histórico e la Mega Procesión de Catrinas': {
      autore: 'Sofía Olmedo (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1772049214534-8d3e8ae7d025',
    },
    'Giorno 3 — Teotihuacán all\'alba': {
      autore: 'Juliana Barquero (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1643177571935-5204362103fa',
    },
    'Giorno 4 — Museo di Antropologia, Chapultepec e Coyoacán': {
      autore: 'Chris Luengas (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1699654415302-aac79f3c8ac4',
    },
    'Giorno 5 — Puebla, la città della talavera': {
      autore: 'Anil Wasif (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1653661279002-692227e35f0f',
    },
    'Giorno 6 — Cholula, la chiesa sulla piramide e il Popocatépetl': {
      autore: 'Pedro Lastra (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1473726867722-6b8a5e529d76',
    },
    'Giorno 7 — Verso Oaxaca: mercati e prime comparsas': {
      autore: 'Angel Maldonado (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1764649841644-391fc8965f4f',
    },
    'Giorno 8 — 31 ottobre: Monte Albán e la notte di Xoxocotlán': {
      autore: 'Isai Matus (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/14288032/',
    },
    'Giorno 9 — 1° novembre: Teotitlán del Valle e la muerteada di San Agustín Etla': {
      autore: 'analuisa gamboa (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1562869929-bda0650edb1f',
    },
    'Giorno 10 — 2 novembre: il Panteón General di Oaxaca': {
      autore: 'Daniel Olivares (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/12334225/',
    },
    'Giorno 11 — La strada del mezcal: Santiago Matatlán, Mitla e Hierve el Agua': {
      autore: 'Lan Yao (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/6750618/',
    },
    'Giorno 12 — Da Oaxaca a Puerto Escondido': {
      autore: 'Zeltzin Tuxtla (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1641246092711-e0c85ffc5c0f',
    },
    'Giorno 13 — Puerto Escondido: surf, spiagge e tartarughe': {
      autore: 'sander traa (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1777903675818-bcf8ac313732',
    },
    'Giorno 15 — Mazunte, Zipolite e Punta Cometa': {
      autore: 'Amau Mexia (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1591853082864-dc81bfbdeb92',
    },
    'Giorno 16 — Rientro via Città del Messico': {
      autore: 'LARAM (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1787581078174-8df3b2487f19',
    },
  },
  'messico-cdmx-baja-california': {
    'Giorno 1 — Arrivo a Città del Messico': {
      autore: 'Carlos Aguilar (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1547686669-9a8cb1a22d91',
    },
    'Giorno 2 — Il Centro Histórico': {
      autore: 'Julio Lopez (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1657772990151-b0b9a2b77f83',
    },
    'Giorno 3 — Teotihuacán': {
      autore: 'Maciej Cisowski (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1645022175328-38e88b6f9dd6',
    },
    'Giorno 4 — Chapultepec e il Museo Nacional de Antropología': {
      autore: 'Obed Hernández (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1693925369183-a815a771f7d5',
    },
    'Giorno 5 — Coyoacán e Xochimilco': {
      autore: 'Gabriel Suazo (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1721707408664-8a31b92994a5',
    },
    'Giorno 6 — Volo per La Paz e il Malecón': {
      autore: 'Federico Mata (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1705204868268-79654d36a508',
    },
    'Giorno 7 — Lo squalo balena e Playa Balandra': {
      autore: 'Josh Withers (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1668403783639-0351085c110c',
    },
    'Giorno 8 — Isla Espíritu Santo e i leoni marini di Los Islotes': {
      autore: 'Alix Greenman (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1612643171289-3f12054961e5',
    },
    'Giorno 9 — Verso Bahía Magdalena: le balene grigie': {
      autore: 'Carlos Reyes (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/16159288/',
    },
    'Giorno 10 — Seconda uscita in laguna e strada per Loreto': {
      autore: 'Nico Marin (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/35964149/',
    },
    'Giorno 11 — Loreto: balenottera azzurra e Isla Coronado': {
      autore: 'Emilio Borraz Ortega (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1604880226021-095181c89edd',
    },
    'Giorno 12 — Da Loreto a Todos Santos': {
      autore: 'Josh Withers (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1667945861347-b35eba4abbc3',
    },
    'Giorno 13 — Todos Santos, Playa Cerritos e le tartarughe': {
      autore: 'Josh Withers (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1678210111235-085bee4772ff',
    },
    'Giorno 14 — Cabo San Lucas: El Arco e le megattere': {
      autore: 'Shahrzad Kosari (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1712886020934-b464c69445e0',
    },
    'Giorno 15 — San José del Cabo e Cabo Pulmo': {
      autore: 'Pascal van de Vendel (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1519327567471-ae47752b8089',
    },
    'Giorno 16 — Rientro da San José del Cabo': {
      autore: 'Victoria Bragg (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1580846629083-02669741360a',
    },
  },
  'brasile-itinerario': {
    'Giorno 1 — Arrivo a Rio de Janeiro': {
      autore: 'Daniel de Paola (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1705937463947-8f6f62e8953c',
    },
    'Giorno 2 — Cristo Redentor e Santa Teresa': {
      autore: 'gustavo nacht (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1700677866571-43199bcbc593',
    },
    'Giorno 3 — Pão de Açúcar, Copacabana e Ipanema': {
      autore: 'Diego Costa (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1758358042850-b5422ce2b661',
    },
    'Giorno 4 — Il centro storico e la notte di Lapa': {
      autore: 'Bruno Scramgnon (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/13185516/',
    },
    'Giorno 5 — Verso Paraty sulla Costa Verde': {
      autore: 'Guilherme Gabrielli (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1607029257863-8b2e746453f7',
    },
    'Giorno 6 — Paraty: la baia in barca e le cascate': {
      autore: 'Felipe Vieira (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1576191486028-72b35cf62b70',
    },
    'Giorno 7 — Ilha Grande: arrivo ad Abraão': {
      autore: 'Tutz Dias (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1660252473218-8f676f973969',
    },
    'Giorno 8 — Ilha Grande: Lopes Mendes': {
      autore: 'Gabriel Fontes de Sousa (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/4717002/',
    },
    'Giorno 9 — Da Ilha Grande a Foz do Iguaçu': {
      autore: 'Rafael Peier (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1781041004838-0cb4c592b1ad',
    },
    'Giorno 10 — Iguazú, il lato brasiliano e il Parque das Aves': {
      autore: 'Christhian Gruhn (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1590246185449-e9e2ddd683bb',
    },
    'Giorno 11 — Iguazú, il lato argentino e la Garganta del Diablo': {
      autore: 'Nicolás Gutiérrez Cervetto (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1710955677086-b6ce5af4f2d4',
    },
    'Giorno 12 — Volo per Salvador de Bahia': {
      autore: 'Edson Junior (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1646494835208-ba788b9a3ed5',
    },
    'Giorno 13 — Salvador: Pelourinho e Cidade Baixa': {
      autore: 'José Maldonado (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1787156154351-70adc350fcac',
    },
    'Giorno 14 — Salvador: Bonfim, Rio Vermelho e la cucina bahiana': {
      autore: 'Gabriella Ally (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/33400935/',
    },
    'Giorno 15 — Verso la Chapada Diamantina': {
      autore: 'Matheus Seiji Goto (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1591232635364-707e5827d09f',
    },
    'Giorno 16 — Chapada: Morro do Pai Inácio e le grotte': {
      autore: 'Luiza Braun (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1724710089387-c9aa4cf9c28b',
    },
    'Giorno 17 — Chapada: la Cachoeira da Fumaça o il Poço Azul': {
      autore: 'SALEM. (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1728232875709-a471152b4413',
    },
    'Giorno 18 — Da Lençóis a São Luís': {
      autore: 'r4f4soares (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/18518321/',
    },
    'Giorno 19 — Barreirinhas e il circuito della Lagoa Azul': {
      autore: 'Renato Nascimento (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/27688572/',
    },
    'Giorno 20 — Lagoa Bonita e le dune all\'alba': {
      autore: 'Marian Sol Miranda (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/9571511/',
    },
    'Giorno 21 — Il Rio Preguiças, Caburé e Atins': {
      autore: 'Bangalo (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/33163328/',
    },
    'Giorno 22 — Rientro da São Luís': {
      autore: 'Seiji Seiji (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1602587557627-1281a7b5a9a2',
    },
  },
  'croazia-itinerario': {
    'Giorno 1 — Arrivo a Zagabria': {
      autore: 'martin bennie (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1663086480502-47e1156bb594',
    },
    'Giorno 2 — Verso Plitvice: i laghi inferiori': {
      autore: 'Mike Swigunski (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1589312133722-eab40c686ebb',
    },
    'Giorno 3 — Plitvice all\'apertura e strada per Zara': {
      autore: 'Ilse (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1595171250522-ae1c060c288d',
    },
    'Giorno 4 — Zara: l\'Organo marino e il Saluto al Sole': {
      autore: 'Karl Paul Baldacchino (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1661178434473-6daf1940d913',
    },
    'Giorno 5 — Le cascate del Krka e Sebenico': {
      autore: 'Fabian Kühne (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1628271775551-22f7c9da320a',
    },
    'Giorno 6 — Trogir e arrivo a Spalato': {
      autore: 'Piotr Musioł (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1654690678364-f353444cd302',
    },
    'Giorno 7 — Spalato: il palazzo di Diocleziano e il Marjan': {
      autore: 'Timo Wielink (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1663673799938-e5795f59983d',
    },
    'Giorno 8 — In catamarano a Hvar': {
      autore: 'Aleksandra Krasinska (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1605703296515-515167084932',
    },
    'Giorno 9 — Hvar: le isole Pakleni': {
      autore: 'Ian Mackey (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1759764401172-c74feece43e7',
    },
    'Giorno 10 — Curzola, la città di Marco Polo': {
      autore: 'Joanna (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1725378158001-7d9bcb6528f5',
    },
    'Giorno 11 — Da Curzola a Dubrovnik e le mura': {
      autore: 'Ivan Ivankovic (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1414862625453-d87604a607e4',
    },
    'Giorno 12 — Dubrovnik: Stradun, Lokrum e la funivia': {
      autore: 'BGBennett (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/19884886/',
    },
    'Giorno 13 — Ston e la penisola di Sabbioncello': {
      autore: 'Kokorevas (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/10364100/',
    },
    'Giorno 14 — Rientro da Dubrovnik': {
      autore: 'Xiaoqian Shen (Unsplash)',
      licenza: 'Unsplash License',
      fonteUrl: 'https://images.unsplash.com/photo-1777924985962-907aa0d2fe15',
    },
  },
```

## Foto delle sole destinazioni (non in un giorno, nessun file di crediti dedicato)

- public/images/messico/loreto-mision-stock.jpg: Roque Estrada (Unsplash), Unsplash License, https://images.unsplash.com/photo-1681702466191-454203e784f3
- public/images/brasile/pantanal-stock.jpg: Mateus Rauber (Pexels), Pexels License, https://www.pexels.com/photo/26605601/
- public/images/brasile/manaus-stock.jpg: Daniel Magalhães (Pexels), Pexels License, https://www.pexels.com/photo/32940351/
- public/images/messico/janitzio-stock.jpg: Luis Rodriguez (Pexels), Pexels License, https://www.pexels.com/photo/14690556/
- Le altre destinazioni riusano le foto dei giorni (percorsi /images/viaggi/<slug>/giorno-NN-…).

## Giorni senza foto

- messico-dia-de-los-muertos, Giorno 14 (Laguna di Manialtepec e la bioluminescenza): nessuna foto libera della laguna o delle mangrovie; le uniche «Manialtepec» trovate mostrano la costa rocciosa sul mare. `imageAlt` lasciato com'era, `immagine` assente.

## Note

- Giorno 2 Día de los Muertos: niente foto della Mega Procesión (tutte con volti truccati riconoscibili in primo piano); c'è il Centro Histórico dal Balcón del Zócalo, alt aggiornato.
- Giorno 9 Día de los Muertos: tessuti zapotechi generici di Oaxaca, l'alt non afferma che siano di Teotitlán.
- Giorno 10 Baja (seconda uscita in laguna): balena grigia in Baja California Sur, località precisa non indicata dall'autore; alt generico.
- Giorno 15 Brasile: nessuna foto libera del paese di Lençóis (Bahia); messo il paesaggio di mesas della Chapada, alt aggiornato.
- Giorno 18 Brasile: São Luís senza azulejos visibili, alt aggiornato. Giorni 9 e 22 Brasile e 14 Croazia e 16 Messico/Baja non avevano alt: aggiunto.
- Destinazione amazzonia-manaus: alt cambiato da «Incontro delle Acque» a barche sul Rio Negro (nessuna foto libera verificata dell'Incontro delle Acque).
