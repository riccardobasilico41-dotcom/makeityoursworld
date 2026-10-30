import type { Paese } from '@/lib/types'

// Scheda Paese costruita su ricerca documentale (Viaggiare Sicuri, Ministero
// del Turismo e delle Antichità egiziano, siti ufficiali di musei e trasporti,
// guide recenti). Nessuna esperienza diretta: i viaggi collegati sono guide
// in lavorazione (egitto-mare-luxor-cairo, egitto-completo).

export const egitto: Paese = {
  slug: 'egitto',
  nome: 'Egitto',
  continente: 'Africa',
  titolo: 'Egitto: piramidi, Nilo e Mar Rosso',
  descrizione:
    'Il Cairo e le piramidi di Giza, Saqqara e Dahshur, i templi di Luxor e Assuan lungo il Nilo, Abu Simbel ai margini del deserto nubiano, l\'oasi di Siwa e la barriera corallina del Mar Rosso: un Paese che si gira in dieci giorni o in tre settimane, e che chiede di essere organizzato bene per evitare caldo, code e truffe.',
  periodoMigliore: 'da ottobre ad aprile per i siti archeologici; da maggio a novembre per il mare più caldo',
  durataConsigliata: '10-12 giorni per Cairo, Luxor e mare; 18-21 giorni per il giro completo',
  budgetIndicativo:
    'indicativamente 70-120 € al giorno a persona in fascia media, esclusi voli internazionali; i biglietti dei siti pesano più del previsto (il Grand Egyptian Museum costa da solo circa 35 $)',
  scheda: {
    documenti:
      'Ai cittadini italiani serve il passaporto con almeno 6 mesi di validità residua, oppure la carta d\'identità valida per l\'espatrio con 6 mesi di validità residua più due fototessere (la carta elettronica è accettata, ma alcune compagnie aeree e alcuni controlli fanno storie: il passaporto evita problemi). Visto turistico obbligatorio: si compra all\'arrivo in aeroporto, prima dei controlli, per 25 $ in contanti o carta, oppure in anticipo come e-visa sul portale ufficiale visa2egypt.gov.eg (25 $ ingresso singolo, 60 $ multiplo). Chi resta solo a Sharm el-Sheikh, Dahab o Nuweiba fino a 15 giorni riceve un timbro gratuito valido per il solo Sinai meridionale, che non consente di andare al Cairo o a Luxor.',
    valuta:
      'Lira egiziana (EGP, LE). Dopo le svalutazioni del 2023-2024 il cambio si è stabilizzato su valori indicativi di 55-60 EGP per un euro (fine 2026, indicativo). Prezzi turistici spesso espressi in dollari, che restano utili in contanti per mance e tour.',
    pagamenti:
      'Carte accettate in hotel, ristoranti di fascia media, catene e quasi tutte le biglietterie dei siti archeologici, molte delle quali ormai accettano solo carta. Contanti indispensabili per mercati, taxi, feluche, mance (il baksheesh) e bagni pubblici: conviene prelevare a ATM di banche dentro hotel o centri commerciali e tenere sempre banconote da 10, 20 e 50 EGP.',
    connettivita:
      'SIM di Vodafone, Orange, Etisalat (e&) e WE acquistabili in aeroporto al Cairo col passaporto, a prezzi bassi. Copertura buona in città e lungo il Nilo, debole nel deserto occidentale e in mezzo al mare. Diffuse anche le eSIM turistiche.',
    salute:
      'Nessuna vaccinazione obbligatoria arrivando dall\'Italia. Acqua solo in bottiglia, anche per lavare i denti nei posti più spartani; la diarrea del viaggiatore è il disturbo più frequente. Caldo estremo da maggio a settembre nell\'Alto Egitto (Luxor e Assuan superano spesso i 40 °C): visite all\'alba, acqua e copricapo. Assicurazione sanitaria con rimpatrio consigliata, e obbligatoria di fatto per chi fa immersioni (serve una copertura specifica).',
    sicurezza:
      'Le mete turistiche principali (Cairo, Giza, Luxor, Assuan, Abu Simbel, i resort del Mar Rosso e il Sinai meridionale) si visitano con normale prudenza e una presenza di polizia turistica molto visibile. Il Sinai settentrionale è vietato e le zone di confine con Libia e Sudan sono sconsigliate; il deserto occidentale (Siwa, Bahariya, Deserto Bianco) si visita con agenzie autorizzate e permessi. Il rischio concreto per il turista sono le truffe e l\'insistenza dei procacciatori, non la criminalità violenta. Prima di partire va controllata la scheda aggiornata su viaggiaresicuri.it e conviene registrarsi su Dove siamo nel mondo.',
    trasportiInterni:
      'Voli interni EgyptAir (Cairo-Luxor circa 1 ora, Cairo-Assuan 1h25, Assuan-Abu Simbel 45 minuti) e voli low cost di Air Cairo e Nile Air verso il Mar Rosso. Treni tra Cairo, Luxor e Assuan, compreso il treno notte con cabine letto. Bus Go Bus e Blue Bus per Hurghada, Marsa Alam e Sharm; minivan con autista per i tragitti Luxor-mare. In città Uber e Careem sono il modo più semplice per evitare trattative con i taxi.',
    costoVita:
      'Basso per cibo e trasporti (un piatto di koshari costa meno di 2 €, una cena in un buon ristorante 10-20 €), alto per i biglietti dei siti archeologici, che dal 2024 sono aumentati più volte e sono fissati per i turisti stranieri: in una giornata a Luxor si spendono facilmente 40-60 € solo di ingressi.',
    lingua:
      'Arabo (dialetto egiziano). Inglese diffuso in hotel, siti e resort; nelle località del Mar Rosso molti operatori parlano anche italiano.',
    elettricita: '220V, 50Hz, prese di tipo C e F: le spine italiane entrano quasi sempre, le tripolari no.',
    fusoOrario:
      'UTC+2 d\'inverno e UTC+3 con l\'ora legale (reintrodotta nel 2023, da fine aprile a fine ottobre): un\'ora avanti rispetto all\'Italia quasi tutto l\'anno, con qualche giorno di scarto nei cambi d\'ora.',
    clima:
      'Desertico. Inverni miti e soleggiati (20-25 °C di giorno, notti fredde al Cairo e nel deserto), estati torride, quasi zero pioggia. Mar Rosso a 22-23 °C d\'inverno e 27-29 °C in estate, con vento forte da novembre a marzo.',
    festivita:
      'Durante il Ramadan (indicativamente dall\'8 febbraio al 9 marzo 2027) i siti restano aperti con orari ridotti e molti ristoranti aprono solo dopo il tramonto. Natale, Capodanno e le vacanze di Pasqua europee riempiono crociere e resort.',
    emergenze:
      'Polizia turistica 126, polizia 122, ambulanza 123, vigili del fuoco 180. Ambasciata d\'Italia al Cairo (Garden City), Consolato onorario a Hurghada e a Sharm el-Sheikh.',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['archeologia', 'mare', 'immersioni', 'deserto', 'crociera sul Nilo'],
  heroImageAlt: 'Le piramidi di Giza nel deserto, viste dalla piana sabbiosa a sud',
  heroImage: '/images/viaggi/egitto-completo/giorno-02-piramidi.jpg',
  tripPrincipaleSlug: 'egitto-completo',
}
