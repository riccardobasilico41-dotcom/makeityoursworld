import type { Paese } from '@/lib/types'

// Il Borneo malese (Sabah e Sarawak) è tenuto separato dalla Malesia
// peninsulare di proposito: logistica, costi, tempi e ragioni di viaggio sono
// completamente diversi, e trattarlo come un\'appendice della penisola è il
// modo più rapido per sottodimensionarlo in itinerario. Nessun nome di lodge,
// resort o operatore è stato inventato.

export const borneo: Paese = {
  slug: 'borneo',
  nome: 'Borneo malese',
  continente: 'Asia',
  titolo: 'Borneo: oranghi, foresta primaria e uno dei reef più belli del pianeta',
  descrizione:
    'È la terza isola più grande del mondo, divisa fra tre paesi: Malesia (Sabah e Sarawak), Brunei e Indonesia (Kalimantan). Questa scheda copre la parte malese. Qui si vedono gli oranghi, si sale la montagna più alta del sud-est asiatico tra l\'Himalaya e la Nuova Guinea e ci si immerge a Sipadan, che per molti è il miglior sito di immersione al mondo. Qui si vede anche, meglio che altrove, cosa ha fatto la palma da olio: si atterra su un tappeto verde che sembra foresta e non lo è.',
  periodoMigliore:
    'da marzo a ottobre, e i mesi migliori sono tra aprile e settembre: mare calmo a Semporna, visibilità alta a Sipadan e meno probabilità di pioggia sul Kinabalu. Da novembre a febbraio piove più spesso e il mare è più mosso; d\'altra parte in foresta piove tutto l\'anno.',
  durataConsigliata:
    '10-12 giorni per fare bene il Sabah (Kinabalu, Sepilok, Kinabatangan, Semporna); 14-16 per aggiungere la Danum Valley o il Sarawak. Con meno di una settimana si passa più tempo negli aeroporti che nella foresta.',
  budgetIndicativo:
    'la parte più cara di qualsiasi viaggio in Malesia. I lodge nella foresta si pagano a pacchetto con i pasti compresi (da 100€ a notte in su, molto di più alla Danum Valley), i permessi per il Kinabalu e per Sipadan sono a numero chiuso e cari, e i trasferimenti interni sono lunghi. Però è l\'unico modo di vedere queste cose.',
  stileViaggio: ['natura', 'fauna selvatica', 'diving', 'trekking'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità e **MDAC** obbligatoria, come in tutta la Malesia. C\'è però una cosa che spiazza quasi tutti: **Sabah e Sarawak hanno un controllo dell\'immigrazione proprio**, eredità degli accordi con cui entrarono nella Federazione nel 1963. Chi arriva dalla penisola, pur restando nello stesso paese, passa un controllo passaporti a Kota Kinabalu o a Kuching e riceve un nuovo timbro, con un permesso di soggiorno separato. Lo stesso succede passando da Sabah a Sarawak. Basta il passaporto, ma meglio saperlo prima.',
    valuta: 'Ringgit malese (MYR), come nel resto del paese.',
    pagamenti:
      'In città (Kota Kinabalu, Sandakan, Kuching) le carte funzionano normalmente. Fuori la regola cambia: i lodge sul Kinabatangan, i villaggi lungo i fiumi e molti operatori di Semporna prendono solo contanti, e i bancomat diventano rari e poco affidabili. I ringgit vanno presi prima di lasciare la città: chi arriva dalla penisola lo dimentica spesso.',
    connettivita:
      'Buona in città, a tratti lungo il Kinabatangan, quasi assente alla Danum Valley e nelle grotte del Mulu, dove fa parte del fascino. Chi deve restare raggiungibile se lo organizzi prima: in certi lodge il segnale c\'è solo in un punto e il wi-fi funziona a orari.',
    salute:
      'Il Borneo è l\'unica parte della Malesia dove la malaria va presa sul serio: il rischio c\'è nelle zone interne e nelle foreste, e la profilassi va decisa con un medico prima di partire. Proprio qui c\'è anche la malaria da Plasmodium knowlesi, trasmessa dai macachi. La dengue è diffusa tutto l\'anno. Repellente ad alta concentrazione, maniche lunghe la sera e calze antisanguisughe per i trekking in foresta sono indispensabili. Gli ospedali buoni sono a Kota Kinabalu e a Kuching: da un lodge sul fiume un\'evacuazione richiede ore, e l\'assicurazione va scelta di conseguenza.',
    sicurezza:
      'Sabah e Sarawak sono tranquilli. L\'unica zona con una storia diversa è la costa orientale del Sabah, intorno a Semporna e alle isole vicine, dove in passato ci sono stati rapimenti da parte di gruppi armati arrivati dalle Filippine meridionali. Oggi l\'area è presidiata da una zona di sicurezza apposita, con coprifuoco marittimo notturno, e il turismo funziona regolarmente; prima di prenotare conviene comunque controllare gli avvisi di viaggio aggiornati. In foresta i rischi sono altri e più banali: sanguisughe, disidratazione e distorsioni sui sentieri fangosi.',
    trasportiInterni:
      'Si vola. Kota Kinabalu e Kuching hanno decine di voli al giorno per Kuala Lumpur a prezzi bassissimi, e anche tra i due stati ci si sposta in aereo, perché via terra è impensabile. Sul posto le distanze sono lunghe e le strade lente: da Kota Kinabalu a Sandakan sono sei ore di auto, da Sandakan al Kinabatangan altre due. Quasi tutto si organizza a pacchetto con i trasferimenti compresi, ed è la scelta sensata. Il Mulu si raggiunge solo in aereo.',
    costoVita:
      'In città i prezzi sono quelli malesi, bassi. Fuori cambia tutto: i lodge si pagano a pacchetto con pasti e attività compresi, i permessi sono a numero chiuso e la concorrenza è poca. Nel Borneo si decide il budget del viaggio, e va calcolato prima.',
    lingua: 'Malese e inglese, molto diffuso. Nell\'interno si parlano decine di lingue indigene, come il kadazan-dusun in Sabah e l\'iban in Sarawak, e le guide dei lodge vengono quasi sempre da queste comunità.',
    elettricita: '240V, prese di tipo G a tre poli rettangolari, come nel resto della Malesia.',
    fusoOrario: 'UTC+8, come tutta la Malesia: 6 ore avanti rispetto all\'Italia con l\'ora legale, 7 in inverno.',
    clima:
      'Equatoriale: caldo, umido e piovoso tutto l\'anno, con la stagione più secca tra marzo e ottobre. Un periodo asciutto all\'europea non esiste, perché in foresta piove comunque; da novembre a febbraio, però, il monsone di nord-est rende più mosso il mare a Semporna e più difficili le piste nella foresta. Sul Kinabalu, sopra i 3.000 metri, di notte si arriva vicino allo zero.',
    festivita:
      'Oltre alle feste malesi, il Borneo ha le sue: il Kaamatan in Sabah (maggio) e il Gawai Dayak in Sarawak (inizio giugno), feste del raccolto delle comunità indigene, con giorni di celebrazioni nei villaggi. Sono i momenti più interessanti dell\'anno per venire qui, e anche quelli in cui trasporti e alloggi si riempiono.',
    emergenze: 'Polizia e ambulanza 999. Il Consolato italiano più vicino è a Kuala Lumpur: in caso di emergenza dal Borneo si passa comunque da lì.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Le guglie di granito di Donkey Ears e del Tunku Abdul Rahman sulla vetta del Monte Kinabalu, Sabah',
  heroImage: '/images/borneo/borneo-paese.jpg',
  tripPrincipaleSlug: 'borneo-itinerario',
}
