import type { Paese } from '@/lib/types'

// Scheda "Paese" per il Canada, centrata sul Canada orientale (Ontario e
// Québec) della guida "canada-itinerario" (80), più Churchill in Manitoba.
// Viaggio fatto da Rick; scheda costruita su fonti ufficiali verificate a
// ottobre 2026: canada.ca (eTA), governo dell'Ontario e SAAQ (patente),
// 407etr.com (pedaggi).

export const canada: Paese = {
  slug: 'canada',
  nome: 'Canada',
  continente: 'Nord America',
  titolo: 'Canada orientale on the road: il Niagara, Montréal, Québec e il San Lorenzo',
  descrizione:
    'Un giro in auto tra Ontario e Québec: Toronto, le cascate del Niagara dal battello e dall\'alto, Ottawa, Montréal, la città fortificata di Québec e le balene di Tadoussac. Per chi vuole di più, gli orsi polari di Churchill sulla baia di Hudson.',
  periodoMigliore: 'da giugno a metà ottobre; da metà ottobre a metà novembre per gli orsi polari di Churchill',
  durataConsigliata: '2-3 settimane',
  budgetIndicativo:
    'da preventivare sulla stagione: auto a noleggio e alloggi sono le voci che pesano di più, e ai prezzi esposti si aggiungono tasse del 13-15 % e mance del 15-20 %; l\'estensione a Churchill costa da sola diverse migliaia di dollari',
  scheda: {
    documenti:
      'Passaporto valido per tutto il soggiorno ed eTA (Autorizzazione elettronica di viaggio) per chi arriva in aereo: costa 7 CAD, vale fino a cinque anni o fino alla scadenza del passaporto e si chiede solo su canada.ca, possibilmente prima di comprare il volo. Non serve a chi entra via terra dagli Stati Uniti. Patente italiana valida per guidare da turisti fino a tre mesi in Ontario e fino a sei mesi in Québec; il permesso internazionale è utile e si fa solo in Italia.',
    valuta: 'Dollaro canadese (CAD).',
    pagamenti:
      'Carte accettate quasi ovunque, anche per piccoli importi; per il noleggio auto serve una carta di credito intestata al conducente. I prezzi esposti sono quasi sempre senza tasse: HST del 13 % in Ontario, circa il 15 % in Québec. Al ristorante mancia del 15-20 %, spesso proposta sul terminale.',
    connettivita:
      'eSIM o SIM prepagate degli operatori canadesi; copertura buona in città e lungo le autostrade, più debole nei parchi delle Laurentides e lungo il Saguenay.',
    salute:
      'Nessuna vaccinazione richiesta. Assicurazione sanitaria indispensabile: le cure per i non residenti sono care. A Churchill, tra ottobre e novembre, freddo e vento richiedono abbigliamento invernale.',
    sicurezza:
      'Le città e le strade dell\'itinerario si visitano con normale prudenza. Attenzione agli animali sulle strade di notte fuori città. A Churchill gli orsi polari entrano anche in paese: non si cammina fuori dal centro abitato né al buio.',
    trasportiInterni:
      'L\'auto a noleggio è il modo più comodo: autostrade belle e gratuite, salvo la 407 ETR intorno a Toronto, a pedaggio elettronico addebitato dal noleggiatore con commissioni. Riconsegnare l\'auto in un\'altra provincia comporta un supplemento. In città metro e tram a Toronto e Montréal, UP Express dall\'aeroporto di Toronto. Churchill si raggiunge solo in aereo o in treno da Winnipeg.',
    costoVita:
      'Alto, simile al Nord Europa, con tasse e mance da aggiungere a quasi ogni conto; alloggi più cari in estate, nelle settimane del foliage e a Churchill nella stagione degli orsi.',
    lingua: 'Inglese in Ontario e Manitoba, francese in Québec, dove la segnaletica stradale è solo in francese.',
    elettricita: '120 V, 60 Hz, prese di tipo A e B: serve un adattatore.',
    fusoOrario: 'Ontario e Québec 6 ore indietro rispetto all\'Italia, Manitoba 7.',
    clima:
      'Estati calde e umide a Toronto e Montréal, autunni brevi e colorati, inverni lunghi e nevosi: in Québec le gomme invernali sono obbligatorie dal 1° dicembre al 15 marzo. Il battello del Niagara e le crociere delle balene navigano da maggio all\'autunno.',
    festivita:
      'Canada Day il 1° luglio, la festa del Québec il 24 giugno, Thanksgiving canadese il secondo lunedì di ottobre: alloggi pieni e prezzi più alti.',
    emergenze: 'Numero unico 911. Ambasciata d\'Italia a Ottawa, Consolati Generali a Toronto e Montréal.',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['road trip', 'città', 'cascate', 'natura', 'balene'],
  heroImageAlt: 'Le Horseshoe Falls del Niagara viste dal lato canadese, con la nebbia d\'acqua che sale dal salto',
  heroImage: '/images/copertine/canada-itinerario.jpg',
  tripPrincipaleSlug: 'canada-itinerario',
}
