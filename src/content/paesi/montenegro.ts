import type { Paese } from '@/lib/types'

// Il Montenegro entra nell'archivio con un roadtrip di 10 giorni
// (montenegro-itinerario) tra Bocche di Cattaro, costa, lago di Scutari,
// Ostrog, Durmitor e Tara, con varianti combinate con Croazia, Bosnia e
// Albania. Nessuna esperienza vissuta in questa fase: i ricordi dell'autore si
// aggiungono dal diario. Fatti verificati a ottobre 2026.

export const montenegro: Paese = {
  slug: 'montenegro',
  nome: 'Montenegro',
  continente: 'Europa',
  titolo: 'Montenegro: le Bocche di Cattaro, il Durmitor e il canyon del Tara in un paese grande come l\'Abruzzo',
  descrizione:
    'Un piccolo paese dei Balcani che passa in poche decine di chilometri dal mare alle montagne: le Bocche di Cattaro con Kotor e Perast, la riviera di Budva, il lago di Scutari, il monastero di Ostrog nella roccia, il Durmitor con i suoi laghi glaciali e il canyon del Tara. Si gira in auto, si paga in euro e si combina facilmente con Dubrovnik, Mostar e l\'Albania del nord.',
  periodoMigliore:
    'giugno e settembre per mare e montagna insieme; luglio-agosto caldi e affollati sulla costa; inverno con neve sul Durmitor e piogge sulla costa',
  durataConsigliata: '7-10 giorni, 14 combinando Croazia, Bosnia o Albania',
  budgetIndicativo:
    '50-70 € al giorno a persona in fascia economica, 90-140 € in fascia media, da 200 € nei resort; voli esclusi',
  scheda: {
    documenti:
      'Per i cittadini italiani basta la carta d\'identità valida per l\'espatrio o il passaporto, per soggiorni turistici fino a 90 giorni. Il Montenegro non è nell\'Unione europea né nell\'area Schengen: alla frontiera con la Croazia si passa il controllo biometrico EES. Le strutture ricettive registrano gli ospiti presso le autorità. Controllare la scheda Montenegro di Viaggiare Sicuri.',
    valuta: 'Euro, adottato unilateralmente pur non facendo parte dell\'eurozona.',
    pagamenti:
      'Carte accettate in hotel, ristoranti e supermercati delle città; contanti per parcheggi, mura di Kotor, barche, parchi nazionali e trattorie di montagna. Tassa di soggiorno di circa 1-1,5 € a persona a notte.',
    connettivita:
      'Il roaming europeo a tariffa nazionale non si applica: con le SIM italiane i dati possono costare molto. SIM turistiche One, Crnogorski Telekom e m:tel in aeroporto e nei chioschi, o eSIM. Copertura buona sulla costa e nelle città, scarsa in alcune zone del Durmitor e nel canyon del Tara.',
    salute:
      'Nessuna vaccinazione richiesta. La tessera sanitaria europea non è valida; esiste una convenzione sanitaria bilaterale con l\'Italia, ma un\'assicurazione di viaggio è consigliata. Zecche nei prati di montagna; sole forte d\'estate.',
    sicurezza:
      'Paese sicuro per i turisti. Piccoli furti nelle località affollate della costa in estate; il rischio principale è la guida su strade di montagna strette, con sorpassi azzardati e velocità alte dei locali.',
    trasportiInterni:
      'Auto a noleggio da Tivat o Podgorica (30-60 € al giorno in estate), con fari accesi di giorno, limite di alcol 0,3 g/l e controlli frequenti. Per uscire dal paese servono autorizzazione scritta del noleggio e carta verde. Traghetto Kamenari-Lepetane sulle Bocche, circa 5 € per l\'auto, giorno e notte. Bus tra le città principali, treno Bar-Podgorica-nord. Traghetti notturni Bari-Bar dall\'Italia.',
    costoVita:
      'Più economico della Croazia e dell\'Italia, ma con prezzi alti sulla costa in luglio-agosto. Un pasto in konoba 15-30 €, una doppia 40-150 € secondo la fascia.',
    lingua:
      'Montenegrino, molto vicino a serbo, croato e bosniaco, scritto in alfabeto latino e cirillico. L\'inglese si parla nel turismo, l\'italiano capita spesso sulla costa.',
    elettricita: '230V, 50Hz, prese di tipo C e F, compatibili con le spine italiane.',
    fusoOrario: 'Lo stesso dell\'Italia (UTC+1, UTC+2 con l\'ora legale).',
    clima:
      'Mediterraneo sulla costa, con estati calde e secche e inverni miti ma molto piovosi; continentale e di montagna all\'interno, con estati fresche al Durmitor e neve da novembre ad aprile. Podgorica in luglio e agosto supera spesso i 35-40 °C.',
    festivita:
      'Festa dell\'indipendenza il 21-22 maggio e festa della statualità il 13 luglio. Pasqua e Natale ortodossi (il Natale si festeggia il 7 gennaio). Il pellegrinaggio a Ostrog è particolarmente affollato a metà maggio, per la festa di San Basilio.',
    emergenze:
      'Polizia 122, ambulanza 124, vigili del fuoco 123, numero unico europeo 112. Ambasciata d\'Italia a Podgorica.',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['roadtrip', 'mare', 'montagna', 'trekking'],
  heroImageAlt: 'Il faro e la chiesa della Madonna dello Scarpello sull\'isolotto davanti a Perast, nelle Bocche di Cattaro',
  heroImage: '/images/copertine/montenegro-itinerario.jpg',
  tripPrincipaleSlug: 'montenegro-itinerario',
}
