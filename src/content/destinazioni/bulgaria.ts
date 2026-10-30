import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Bulgaria on the snow" (src/content/viaggi/11-bulgaria-bansko-rila.md).

export const destinazioniBulgaria: Destinazione[] = [
  {
    slug: 'bansko',
    paeseSlug: 'bulgaria',
    ordine: 1,
    nome: 'Bansko',
    tipologia: ['sci', 'montagna'],
    giorniConsigliati: '4 giorni, tre pieni sulle piste',
    visitataPersonalmente: true,
    introduzione: 'Il comprensorio sciistico più famoso di Bulgaria: circa 70-75 km di piste sui Monti Pirin e un centro storico di case in pietra e legno.',
    percheAndarci: 'Per sciare in un angolo d\'Europa che compare di rado nei programmi delle vacanze bianche, a prezzi molto più bassi delle Alpi.',
    cosaVedere: ['Il centro storico di Bansko, tra le case della "scuola di Bansko" e la parte più moderna', 'La vista dal Todorka Peak (2.560 metri)'],
    cosaFare: [
      'Sci sulle piste di Bansko Ski Zone (c\'è la scheda esperienza dedicata)',
      'La discesa illuminata di 7,5 km per lo sci notturno (c\'è la scheda esperienza dedicata)',
      'Après-ski da Sopranos o all\'Happy End Bar, alla base della gondola',
      'Cena in una mehana tipica del centro storico',
    ],
    doveDormire:
      'Ho scelto un hotel a pochi minuti a piedi dalla stazione della gondola: la mattina arrivavo alle piste in fretta e la sera ero a due passi dal centro storico. Non era una struttura di marca né particolarmente ricercata, solo una base pratica per la settimana sulla neve.\n\nAlternative vicino alla gondola. Economiche: Hotel Dumanov (circa 150 metri dalla stazione a valle), La Vien Guest House (5 minuti a piedi, gestione familiare). Fascia media: Hotel Ida (piscina interna e idromassaggio), MPM Hotel Sport (accesso quasi diretto alle piste). Lusso: Kempinski Hotel Grand Arena Bansko (l\'unico vero ski-in/ski-out del paese), Premier Luxury Mountain Resort.',
    doveMangiare: 'Abbiamo mangiato nelle mehane del centro storico: kapama, banitsa e shopska salata, sempre con la rakia.',
    comeArrivare: 'Da Sofia sono circa 2-2h30 di auto (160 km). In alternativa ci sono shuttle e transfer privati, il bus pubblico o il treno più minibus.',
    comeSpostarsi: 'Una gondola a 8 posti porta dal centro alle piste; tra una pista e l\'altra ci si sposta con gli sci.',
    periodoMigliore: '1 dicembre - metà aprile, con innevamento artificiale garantito su oltre il 90% delle piste',
    costi: 'Skipass giornaliero 35-40€ (online fino al 25% in meno); birra al rifugio 1,50-2€; cena in mehana 15-20€ a testa.',
    erroriDaEvitare: ['Comprare lo skipass alla cassa: online, con qualche giorno di anticipo, costa meno', 'Aspettarsi piste da Alpi: a Bansko si va per l\'esperienza e per il prezzo, non per il livello del comprensorio'],
    miaEsperienza:
      'Non mi aspettavo grandi cose dallo sci in Bulgaria, ed è quello che ho trovato: piste carine e ben tenute, niente di esagerato rispetto alle Alpi. Il bello sta proprio qui. Ci si va per l\'esperienza esotica di sciare in un angolo d\'Europa fuori dai soliti circuiti, più che per lo sci in sé.',
    esperienzeSlugs: ['sci-bansko', 'discesa-notturna-bansko'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'Le piste innevate del comprensorio sciistico di Bansko, Bulgaria',
    immagine: '/images/bulgaria/bansko-stock.jpg',
  },
  {
    slug: 'monastero-rila',
    paeseSlug: 'bulgaria',
    ordine: 2,
    nome: 'Monastero di Rila',
    tipologia: ['religione', 'storia', 'unesco'],
    giorniConsigliati: 'mezza giornata, lungo il tragitto di rientro',
    visitataPersonalmente: true,
    introduzione: 'Il più grande e importante monastero ortodosso di Bulgaria, fondato nel X secolo dall\'eremita Ivan di Rila e Patrimonio UNESCO dal 1983.',
    percheAndarci: 'È stato il colpo di scena del viaggio. Dopo le giornate sulla neve il contrasto è totale, ed è probabilmente il ricordo più forte di tutto il tour.',
    cosaVedere: [
      'La Chiesa della Natività della Vergine, a cinque cupole, coperta di affreschi coloratissimi',
      'Le mura di pietra alte 24 metri che chiudono il complesso',
      'Il Museo di Storia Ecclesiastica, con la Croce di Rafail intagliata con oltre 1.500 figure bibliche',
    ],
    cosaFare: ['Visita al complesso monastico e alla chiesa (c\'è la scheda esperienza dedicata)', 'Visita al Museo di Storia Ecclesiastica'],
    doveDormire: 'Non ci ho dormito: è stata una tappa di mezza giornata sulla strada del rientro verso Sofia.',
    doveMangiare: 'Non ho indirizzi da segnalare: la tappa era tutta per la visita.',
    comeArrivare: 'Con una deviazione dalla strada principale tra Bansko e Sofia.',
    comeSpostarsi: 'A piedi, dentro il complesso monastico.',
    periodoMigliore: 'tutto l\'anno',
    costi: 'Ingresso al complesso e alla chiesa gratuito; Museo di Storia Ecclesiastica circa 8 BGN (4€).',
    erroriDaEvitare: ['Entrare in chiesa con spalle e ginocchia scoperte', 'Fare foto o video dentro gli edifici religiosi: non è permesso'],
    miaEsperienza:
      'Dopo le giornate sulla neve, il monastero è stato il colpo di scena del viaggio. Gli affreschi coloratissimi della Chiesa della Natività della Vergine e il silenzio della montagna intorno sono il ricordo più vivido di tutto il tour.',
    esperienzeSlugs: ['visita-monastero-rila'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'La facciata affrescata della Chiesa della Natività della Vergine al Monastero di Rila, Bulgaria',
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
  },
]
