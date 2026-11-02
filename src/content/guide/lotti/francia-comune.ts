import type { ContattoGuida, FonteGuida, FraseGuida, Guida, RigaTabella, SezioneTesto } from '../types'

/**
 * Blocchi di Paese per le guide della Francia del lotto «francia-alpi».
 * Ogni guida li copia dentro di sé (spread), così il PDF sta in piedi da solo.
 * Verificati sul web il 2 novembre 2026: Viaggiare Sicuri (scheda FRA aggiornata al
 * 20/10/2026) e service-public.gouv.fr per i numeri di emergenza.
 */

export const fontiFrancia: FonteGuida[] = [
  { id: 'vs-fra', titolo: 'Viaggiare Sicuri (Farnesina), scheda Francia (agg. 20/10/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/FRA.json' },
  { id: 'sp-urgences', titolo: 'Service-Public.fr, numeri di emergenza', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F33954' },
  { id: 'critair', titolo: 'Certificat qualité de l\'air (Crit\'Air), sito ufficiale', url: 'https://www.certificat-air.gouv.fr/' },
  { id: 'prese-fr', titolo: 'WorldStandards, prese elettriche in Francia', url: 'https://www.worldstandards.eu/electricity/plug-voltage-by-country/france/' },
  { id: 'roaming-ue', titolo: 'Commissione europea, roaming nell\'UE («Roam like at home»)', url: 'https://digital-strategy.ec.europa.eu/it/policies/roaming' },
  { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi, traffico libero)', url: 'https://router.project-osrm.org' },
  { id: 'ban', titolo: 'Base Adresse Nationale (coordinate degli indirizzi francesi)', url: 'https://adresse.data.gouv.fr' },
  { id: 'osm', titolo: 'OpenStreetMap (coordinate dei luoghi)', url: 'https://www.openstreetmap.org' },
]

export const numeriFrancia: RigaTabella[] = [
  { voce: 'Emergenze, numero unico europeo', valore: '112', fonti: ['sp-urgences', 'vs-fra'] },
  { voce: 'Emergenza medica (SAMU)', valore: '15', fonti: ['sp-urgences'] },
  { voce: 'Polizia (Police secours)', valore: '17', fonti: ['sp-urgences'] },
  { voce: 'Vigili del fuoco (pompiers)', valore: '18', fonti: ['sp-urgences'] },
  { voce: 'Soccorso in mare (CROSS)', valore: '196 (in mare: canale VHF 16)', fonti: ['sp-urgences'] },
  { voce: 'Persone sorde o con difficoltà di parola', valore: '114 (SMS, app o sito)', fonti: ['sp-urgences'] },
  { voce: 'Numero che richiama chi ha chiesto soccorso', valore: '0 800 112 112: rispondi, è gratuito', fonti: ['sp-urgences'] },
]

/** Ambasciata a Parigi: compare in tutte le guide francesi; il consolato competente lo aggiunge ogni guida. */
export const ambasciataParigi: ContattoGuida = {
  nome: 'Ambasciata d\'Italia a Parigi',
  cosa: 'Centralino e cellulare di emergenza',
  indirizzo: '51 rue de Varenne, 75007 Parigi',
  telefono: '+33 1 49 54 03 00 · emergenze +33 6 59 41 03 89 · ambasciata.parigi@esteri.it',
  web: 'ambparigi.esteri.it',
  stato: 'ufficiale',
  fonti: ['vs-fra'],
}

export const consolati: Record<'parigi' | 'nizza' | 'marsiglia' | 'lione' | 'bordeaux' | 'metz', ContattoGuida> = {
  parigi: {
    nome: 'Consolato Generale d\'Italia a Parigi',
    cosa: 'Passaporti, documenti persi, assistenza ai cittadini (Île-de-France, Normandia, Bretagna, Loira e buona parte del nord)',
    indirizzo: '5 boulevard Émile Augier, 75016 Parigi',
    telefono: '+33 1 44 30 47 00 · emergenze +33 6 07 22 72 56 (venerdì 18-22, sabato, domenica e festivi 8-22) · informazioni.parigi@esteri.it',
    web: 'consparigi.esteri.it',
    stato: 'ufficiale',
    avviso: 'La competenza esatta per dipartimento è sul sito del consolato.',
    fonti: ['vs-fra'],
  },
  nizza: {
    nome: 'Consolato Generale d\'Italia a Nizza',
    cosa: 'Competente per le Alpi Marittime (Costa Azzurra)',
    indirizzo: '72 boulevard Gambetta, 06048 Nizza',
    telefono: '+33 4 92 14 40 90 · emergenze +33 6 03 69 03 57 (notte +33 7 68 05 48 04) · connizz.mail@esteri.it',
    web: 'consnizza.esteri.it',
    gps: [43.70376, 7.25623],
    stato: 'ufficiale',
    fonti: ['vs-fra', 'ban'],
  },
  marsiglia: {
    nome: 'Consolato Generale d\'Italia a Marsiglia',
    cosa: 'Provenza, Camargue e sud-est (escluse le Alpi Marittime)',
    indirizzo: '56 rue d\'Alger, 13005 Marsiglia',
    telefono: '+33 4 91 18 49 18 · emergenze +33 6 07 52 04 18 · consolato.marsiglia@esteri.it',
    web: 'consmarsiglia.esteri.it',
    stato: 'ufficiale',
    avviso: 'La competenza esatta per dipartimento è sul sito del consolato.',
    fonti: ['vs-fra'],
  },
  lione: {
    nome: 'Consolato Generale d\'Italia a Lione',
    cosa: 'Auvergne-Rhône-Alpes (Savoia e Alta Savoia comprese) e Borgogna',
    indirizzo: '5 rue Commandant Faurax, 69006 Lione',
    telefono: '+33 4 78 93 00 17 · emergenze +33 6 63 63 05 53 (tutti i giorni) · consolato.lione@esteri.it',
    web: 'conslione.esteri.it',
    stato: 'ufficiale',
    avviso: 'La competenza esatta per dipartimento è sul sito del consolato.',
    fonti: ['vs-fra'],
  },
  bordeaux: {
    nome: 'Vice Consolato onorario d\'Italia a Bordeaux',
    cosa: 'Solo su appuntamento, il giovedì 8:30-13:00',
    indirizzo: '36 cours du Maréchal Foch, 33000 Bordeaux',
    telefono: '+33 7 63 11 03 96 · bordeaux.onorario@esteri.it',
    stato: 'ufficiale',
    avviso: 'Ufficio onorario: per passaporti ed emergenze vere fa capo al Consolato Generale di Parigi.',
    fonti: ['vs-fra'],
  },
  metz: {
    nome: 'Consolato Generale d\'Italia a Metz',
    cosa: 'Grand Est (Alsazia e Champagne comprese)',
    indirizzo: '7 boulevard Georges Clemenceau, 57000 Metz',
    telefono: '+33 3 87 38 58 70 · emergenze +33 6 80 71 03 43 (notte +33 7 81 95 40 72) · consolato.metz@esteri.it',
    web: 'consmetz.esteri.it',
    stato: 'ufficiale',
    avviso: 'La competenza esatta per dipartimento è sul sito del consolato.',
    fonti: ['vs-fra'],
  },
}

/** Sezioni «Prima di partire» comuni; ogni guida aggiunge le sue (stagione, trasporti locali). */
export const primaDiPartireFrancia = (conAuto: boolean): SezioneTesto[] => [
  {
    titolo: 'Documenti e salute',
    righe: [
      { voce: 'Documento', valore: 'Carta d\'identità valida per l\'espatrio oppure passaporto, in corso di validità. Nessun visto.', fonti: ['vs-fra'] },
      { voce: 'Tessera sanitaria (TEAM)', valore: 'Portala, ma non basta: in Francia il 20% delle spese mediche, ricovero compreso, resta a carico del paziente. Viaggiare Sicuri raccomanda un\'assicurazione con le spese mediche.', fonti: ['vs-fra'] },
      { voce: 'Vaccini', valore: 'Nessuno obbligatorio.', fonti: ['vs-fra'] },
      { voce: 'Dove Siamo nel Mondo', valore: 'Registra il viaggio su dovesiamonelmondo.it o nell\'app Viaggiare Sicuri.', fonti: ['vs-fra'] },
    ],
  },
  {
    titolo: 'Soldi, telefono, corrente',
    righe: [
      { voce: 'Valuta', valore: 'Euro. Carte accettate quasi ovunque; tieni qualche moneta per mercati e bagni pubblici.', fonti: ['vs-fra'] },
      { voce: 'Telefono', valore: 'Roaming UE a tariffa di casa: SIM italiana senza costi extra, nei limiti dell\'uso «ragionevole» del tuo piano. Prefisso per chiamare in Italia: 0039.', fonti: ['roaming-ue', 'vs-fra'] },
      { voce: 'Corrente', valore: '230 V, 50 Hz. Prese di tipo E (con lo spinotto di terra che sporge): le spine italiane sottili entrano, le Schuko vanno quasi sempre; la spina grossa a tre poli in linea no, serve un adattatore.', fonti: ['prese-fr'] },
      { voce: 'Fuso orario', valore: 'Stessa ora dell\'Italia.', fonti: ['vs-fra'] },
    ],
  },
  {
    titolo: 'Sicurezza e regole',
    righe: [
      { voce: 'Borseggi', valore: 'Viaggiare Sicuri segnala furti e borseggi ai danni dei turisti soprattutto a Parigi, Marsiglia, Lione, Montpellier e in Costa Azzurra, Nizza in particolare.', fonti: ['vs-fra'] },
      { voce: 'Allerta terrorismo', valore: 'Il piano Vigipirate è al livello massimo «Urgence attentat» da marzo 2024: controlli rafforzati in stazioni, aeroporti, musei e mercati. Segui le indicazioni delle autorità.', fonti: ['vs-fra'] },
      { voce: 'Fumo all\'aperto', valore: 'Dal 29 giugno 2025 è vietato fumare in parchi e giardini pubblici, sulle spiagge in stagione balneare e alle fermate dei bus. Multa da 135 a 750 €.', fonti: ['vs-fra'] },
      { voce: 'Droghe', valore: 'Legislazione severa anche sulle droghe leggere, con controlli frequenti.', fonti: ['vs-fra'] },
    ],
  },
  ...(conAuto
    ? [
        {
          titolo: 'In auto',
          righe: [
            { voce: 'Patente e assicurazione', valore: 'Patente italiana; vale l\'assicurazione italiana senza Carta Verde. Con un\'auto non tua conviene una delega firmata dal proprietario.', fonti: ['vs-fra'] },
            { voce: 'Alcol', valore: 'Limite 0,5 g/l (0,2 per i neopatentati da meno di tre anni).', fonti: ['vs-fra'] },
            { voce: 'In dotazione', valore: 'Giubbotto catarifrangente e triangolo obbligatori. Telefono solo in vivavoce Bluetooth.', fonti: ['vs-fra'] },
            { voce: 'Crit\'Air', valore: 'Il bollino ambientale serve nelle zone a basse emissioni (ZFE) delle grandi città e può essere richiesto con poco preavviso in caso di smog. Si ordina solo su certificat-air.gouv.fr (diffida dei siti che lo rivendono) e arriva per posta: ordinalo settimane prima. Costa pochi euro; il prezzo per targa estera lo vedi al momento dell\'ordine.', fonti: ['vs-fra', 'critair'] },
            { voce: 'Pedaggi', valore: 'Al casello con contanti o carta. Su alcune autostrade c\'è il pedaggio «en flux libre», senza casello: si paga online entro 72 ore.', fonti: ['vs-fra'] },
            { voce: 'Inverno', valore: 'Dal 1° novembre al 31 marzo, nei comuni di montagna segnalati, servono gomme invernali con il simbolo alpino (3PMSF) oppure catene a bordo.', fonti: ['vs-fra'] },
          ],
        },
      ]
    : []),
]

export const linguaFrancese: Guida['lingua'] = {
  nome: 'Francese, con la pronuncia',
  pronuncia: 'Pronuncia scritta all\'italiana. «ö» è la «eu» francese (tra «e» e «o»), «ü» la «u» francese (labbra a «u», si dice «i»), «ã» e «õ» sono vocali nasali, «j» come la «g» di «garage» detta alla francese.',
}

export const frasarioFrancese: Guida['frasario'] = [
  {
    gruppo: 'Saluti e cortesia',
    frasi: [
      { it: 'Buongiorno', loc: 'bonjùr', scritto: 'Bonjour', nota: 'si dice entrando in ogni negozio' },
      { it: 'Buonasera', loc: 'bonsuàr', scritto: 'Bonsoir' },
      { it: 'Arrivederci', loc: 'o revuàr', scritto: 'Au revoir' },
      { it: 'Grazie (mille)', loc: 'merssì (bocù)', scritto: 'Merci (beaucoup)' },
      { it: 'Per favore', loc: 's\'il vu plè', scritto: 'S\'il vous plaît' },
      { it: 'Mi scusi', loc: 'ekskuzé muà', scritto: 'Excusez-moi' },
      { it: 'Sì · No', loc: 'uì · nõ', scritto: 'Oui · Non' },
      { it: 'Parla inglese?', loc: 'parlé vu anglè?', scritto: 'Parlez-vous anglais ?' },
      { it: 'Non capisco', loc: 'je ne cõprã pa', scritto: 'Je ne comprends pas' },
    ],
  },
  {
    gruppo: 'Muoversi e comprare',
    frasi: [
      { it: 'Dov\'è…?', loc: 'u è…?', scritto: 'Où est… ?' },
      { it: 'La stazione', loc: 'la gar', scritto: 'La gare' },
      { it: 'Un biglietto per…', loc: 'õ biié pur…', scritto: 'Un billet pour…' },
      { it: 'Andata e ritorno', loc: 'alé-rötur', scritto: 'Aller-retour' },
      { it: 'Quanto costa?', loc: 'sa kut kõbiẽ?', scritto: 'Ça coûte combien ?' },
      { it: 'A che ora apre / chiude?', loc: 'a kel ör uvr / ferm?', scritto: 'À quelle heure ça ouvre / ferme ?' },
      { it: 'Posso pagare con la carta?', loc: 'je pö peié par kart?', scritto: 'Je peux payer par carte ?' },
    ],
  },
  {
    gruppo: 'A tavola',
    frasi: [
      { it: 'Un tavolo per quattro', loc: 'üne tabl pur katr', scritto: 'Une table pour quatre' },
      { it: 'Il menù del giorno', loc: 'lö menü dü jur / la formül', scritto: 'Le menu du jour / la formule' },
      { it: 'Una caraffa d\'acqua', loc: 'üne karaf d\'o', scritto: 'Une carafe d\'eau', nota: 'acqua del rubinetto, gratuita' },
      { it: 'Un bicchiere di vino rosso / bianco', loc: 'õ verr dö vẽ ruj / blã', scritto: 'Un verre de vin rouge / blanc' },
      { it: 'Il conto, per favore', loc: 'l\'adisiõ, s\'il vu plè', scritto: 'L\'addition, s\'il vous plaît' },
    ],
  },
  {
    gruppo: 'Emergenze',
    frasi: [
      { it: 'Aiuto!', loc: 'o skur!', scritto: 'Au secours !' },
      { it: 'Chiamate un medico', loc: 'apelé õ medsẽ', scritto: 'Appelez un médecin' },
      { it: 'Ospedale · Farmacia', loc: 'opital · farmassì', scritto: 'Hôpital · Pharmacie' },
      { it: 'Mi hanno rubato il portafoglio', loc: 'õ m\'a volé mõ portföi', scritto: 'On m\'a volé mon portefeuille' },
      { it: 'Mi sono perso', loc: 'je mö sui perdü', scritto: 'Je me suis perdu(e)' },
    ],
  },
]

export const numeriFrancese: FraseGuida[] = [
  { it: '1', loc: 'õ', scritto: 'un' },
  { it: '2', loc: 'dö', scritto: 'deux' },
  { it: '3', loc: 'truà', scritto: 'trois' },
  { it: '4', loc: 'katr', scritto: 'quatre' },
  { it: '5', loc: 'sẽk', scritto: 'cinq' },
  { it: '6', loc: 'sis', scritto: 'six' },
  { it: '7', loc: 'set', scritto: 'sept' },
  { it: '8', loc: 'uit', scritto: 'huit' },
  { it: '9', loc: 'nöf', scritto: 'neuf' },
  { it: '10', loc: 'dis', scritto: 'dix' },
  { it: '20', loc: 'vẽ', scritto: 'vingt' },
  { it: '100', loc: 'sã', scritto: 'cent' },
]

/** Lista valigia: le voci comuni; ogni guida aggiunge i gruppi del suo viaggio. */
export const valigiaDocumentiFrancia = {
  gruppo: 'Documenti e soldi',
  voci: ['Carta d\'identità valida per l\'espatrio o passaporto', 'Tessera sanitaria (TEAM)', 'Polizza con spese mediche', 'Carta di credito e una di riserva', 'Qualche moneta per mercati e bagni', 'Questa guida stampata'],
}
