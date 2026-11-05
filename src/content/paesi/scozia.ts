import type { Paese } from '@/lib/types'

// Scheda verificata a novembre 2026 su gov.uk (ETA, ingresso dei cittadini UE, patente,
// limiti alcol), visitscotland.com (guida, strade a una corsia, prese, mance, moscerini),
// edinburgh.gov.uk (tassa di soggiorno), calmac.co.uk (traghetti per Islay).

export const scozia: Paese = {
  slug: 'scozia',
  nome: 'Scozia',
  continente: 'Europa',
  tipo: 'regione',
  stato: 'Regno Unito',
  titolo: 'Scozia in auto: Edimburgo, Highlands, isole e distillerie',
  descrizione:
    'Edimburgo, poi la strada: Loch Lomond, Glencoe, il viadotto di Glenfinnan, l\'Isola di Skye, Oban, Loch Ness e lo Speyside delle distillerie. Chi ha qualche giorno in più sale fino alla North Coast 500, la strada costiera dell\'estremo nord.',
  periodoMigliore: 'da maggio a settembre, con le giornate più lunghe; il meteo resta imprevedibile tutto l\'anno',
  durataConsigliata: '10-12 giorni, più 4-5 per la North Coast 500',
  budgetIndicativo: 'medio-alto: noleggio auto, carburante e hotel nelle Highlands d\'estate pesano',
  scheda: {
    documenti:
      'La Scozia fa parte del Regno Unito, che non è nell\'Unione Europea. Dal 2 aprile 2025 i cittadini italiani hanno bisogno dell\'ETA, l\'autorizzazione elettronica di viaggio: si chiede online su gov.uk o con l\'app ufficiale UK ETA, costa 20 sterline (2026), vale 2 anni o fino alla scadenza del passaporto e copre più viaggi fino a 6 mesi ciascuno. Serve il passaporto: la carta d\'identità è accettata solo in casi particolari, per esempio per chi ha lo status di residente.',
    valuta: 'Sterlina britannica (GBP).',
    pagamenti:
      'Le carte funzionano quasi ovunque, anche nelle distillerie e nei pub. Nei villaggi delle Highlands e sulle isole conviene avere un po\' di contante. La mancia non è obbligatoria; per un buon servizio al ristorante o in taxi si parte di solito dal 10%.',
    connettivita:
      'Il roaming «come a casa» dell\'UE non vale nel Regno Unito: va controllata l\'offerta del proprio operatore. Nelle Highlands e sulla North Coast 500 ci sono tratti senza segnale: meglio scaricare le mappe offline.',
    salute:
      'La TEAM copre le cure che diventano necessarie durante il soggiorno nel servizio sanitario pubblico; un\'assicurazione di viaggio resta consigliata. D\'estate, nelle Highlands e sulle isole, ci sono i midges, moscerini che pungono ma sono innocui: serve un repellente.',
    sicurezza:
      'Paese sicuro. Il rischio vero è la strada: si guida a sinistra, e nelle Highlands molte strade sono a una sola corsia, con le piazzole di scambio (passing places). In Scozia il limite di alcol alla guida è più basso che nel resto del Regno Unito: 50 mg per 100 ml di sangue, contro 80 in Inghilterra. Il consiglio di Rick è tolleranza zero: chi guida non beve, nemmeno un assaggio in distilleria.',
    trasportiInterni:
      'Per le Highlands serve l\'auto. Si noleggia a Edimburgo o a Glasgow; la patente italiana vale senza permesso internazionale. Sulle strade a una corsia ci si ferma nella piazzola alla propria sinistra, o si aspetta davanti a quella sulla destra, e si ringrazia con un cenno. Nelle piazzole non si parcheggia. Le distanze sembrano brevi, ma i tempi si allungano: va programmato anche il carburante. I traghetti per le isole sono della CalMac: con l\'auto si prenota prima.',
    costoVita:
      'Medio-alto. Dal 24 luglio 2026 Edimburgo applica una tassa di soggiorno del 5% sul prezzo dell\'alloggio, per le prime 5 notti. I tour classici delle distillerie costano di solito 20-25 sterline (2026).',
    lingua: 'Inglese. Nei cartelli delle Highlands e delle isole compare anche il gaelico scozzese.',
    elettricita: '230V, 50Hz, prese di tipo G a tre poli rettangolari: serve un adattatore.',
    fusoOrario: 'Un\'ora indietro rispetto all\'Italia, tutto l\'anno.',
    clima:
      'Imprevedibile. Nella stessa ora si passa dal sole alla pioggia e al vento, soprattutto sulla costa ovest e sulle isole. D\'estate le massime stanno di solito tra 12 e 19 gradi, d\'inverno tra 2 e 6. Giacca impermeabile e strati anche ad agosto.',
    festivita: 'Ad agosto Edimburgo ospita i festival, con il Fringe: hotel pieni e prezzi alti, da prenotare molto prima.',
    emergenze: 'Numero di emergenza 999.',
    aggiornatoAl: 'novembre 2026',
  },
  stileViaggio: ['on the road', 'montagna', 'isole', 'distillerie'],
  heroImageAlt: 'Il cottage di Lagangarbh ai piedi del Buachaille Etive Mòr, all\'ingresso di Glencoe',
  heroImage: '/images/viaggi/scozia-highlands-distillerie/giorno-05-glencoe.webp',
  tripPrincipaleSlug: 'scozia-highlands-distillerie',
}
