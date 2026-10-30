import type { Paese } from '@/lib/types'

// Scheda Paese costruita con ricerca documentale (ottobre 2026), senza un
// viaggio dell'autore alle spalle: tutte le destinazioni collegate hanno
// visitataPersonalmente: false e nessuna ha il campo miaEsperienza (vedi
// src/content/destinazioni/croazia.ts). Prezzi di parchi e traghetti e
// regole dei centri storici vanno riverificati prima di partire.

export const croazia: Paese = {
  slug: 'croazia',
  nome: 'Croazia',
  continente: 'Europa',
  titolo: 'Croazia: laghi a cascata, città romane e veneziane e isole dell\'Adriatico',
  descrizione:
    'Il paese dell\'Adriatico più vicino all\'Italia per abitudini e distanze, con euro e area Schengen. Questa sezione va dall\'interno di Zagabria e Plitvice alla costa dalmata di Zara, Sebenico e Spalato, fino alle isole di Hvar e Curzola e alle mura di Dubrovnik, con l\'Istria e Vis come varianti.',
  periodoMigliore:
    'fine maggio-giugno e settembre, con mare a 22-25 °C, traghetti estivi attivi e meno folla; luglio-agosto sono il picco di caldo, prezzi e affollamento; da novembre a marzo molte strutture sulle isole chiudono.',
  durataConsigliata:
    'una settimana per Spalato, Hvar, Curzola e Dubrovnik; due settimane per partire da Zagabria e passare da Plitvice, Zara e Krka; tre con l\'Istria.',
  budgetIndicativo:
    'medio-alto: 70-100 € al giorno a persona viaggiando economici, 130-200 € nella fascia media, con Dubrovnik e Hvar ai livelli delle località più care del Mediterraneo in luglio-agosto.',
  stileViaggio: ['mare', 'isole', 'natura', 'città storiche', 'roadtrip'],
  scheda: {
    documenti:
      'Unione Europea e, dal 2023, area Schengen: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio. Per uscire verso Bosnia o Montenegro serve un documento valido per l\'espatrio e, con un\'auto a noleggio, l\'autorizzazione del noleggiatore e la carta verde.',
    valuta: 'Euro dal 1° gennaio 2023.',
    pagamenti:
      'Carte e contactless accettati quasi ovunque. Contanti utili per piccoli bar sulle isole, mercati e affittacamere. Evitare i bancomat indipendenti con commissioni alte e rifiutare la conversione nella valuta di casa.',
    connettivita: 'Roaming «come a casa» dell\'Unione Europea con le SIM italiane. Copertura buona sulla costa e sulle isole principali.',
    salute:
      'Tessera sanitaria europea (TEAM) valida nelle strutture pubbliche. Nessuna vaccinazione richiesta. Attenzione a caldo e sole d\'estate e ai ricci di mare sugli scogli.',
    sicurezza:
      'Paese molto sicuro. I rischi principali sono il traffico sulle strade costiere d\'estate, la bora che può fermare i traghetti e i ricci di mare. Spalato, Hvar e Dubrovnik multano chi gira in costume nel centro storico, beve per strada o si siede sui monumenti.',
    trasportiInterni:
      'Autostrade a pagamento con caselli (free flow previsto dal 1° marzo 2027); bus frequenti tra le città della costa; catamarani e traghetti Jadrolinija, TP Line e Krilo tra le isole, da prenotare in luglio-agosto. Dal 2022 il ponte di Pelješac evita il passaggio da Neum (Bosnia) per arrivare a Dubrovnik.',
    costoVita:
      'Simile all\'Italia nelle città dell\'interno, più alto sulla costa in alta stagione, molto alto a Dubrovnik e Hvar. Tassa di soggiorno di circa 1,50-3 € a persona a notte in estate.',
    lingua: 'Croato. Inglese diffuso ovunque nel turismo; italiano capito spesso in Istria e in Dalmazia.',
    elettricita: '230 V, 50 Hz, prese di tipo C e F come in Italia.',
    fusoOrario: 'UTC+1, UTC+2 in ora legale: stesso fuso dell\'Italia.',
    clima:
      'Mediterraneo sulla costa, con estati calde e secche (30-35 °C in luglio-agosto) e inverni miti e ventosi; continentale nell\'interno, con inverni freddi a Zagabria e Plitvice, dove può nevicare.',
    festivita:
      'Festival estivi di Dubrovnik (luglio-agosto) e di Spalato; mercatino di Natale di Zagabria a dicembre. Il 15 agosto, l\'Assunzione, è uno dei giorni più affollati della costa.',
    emergenze: 'Numero unico europeo 112; 192 polizia, 194 ambulanza, 195 soccorso in mare.',
    aggiornatoAl: 'ottobre 2026',
  },
  heroImageAlt: 'Le mura di Dubrovnik e i tetti rossi della città vecchia sul mare',
  heroImage: '/images/copertine/croazia-itinerario.jpg',
  tripPrincipaleSlug: 'croazia-itinerario',
}
