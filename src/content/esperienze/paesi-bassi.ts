import type { Esperienza } from '@/lib/types'

// Prima uscita olandese dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/paesi-bassi.ts). Prezzi, orari e regole di
// prenotazione — soprattutto quelli della Casa di Anna Frank — cambiano
// spesso e vanno riverificati sui canali ufficiali prima di prenotare.

export const esperienzePaesiBassi: Esperienza[] = [
  {
    slug: 'casa-di-anna-frank',
    paeseSlug: 'paesi-bassi',
    destinazioneSlug: 'amsterdam',
    nome: 'Casa di Anna Frank (Anne Frank Huis)',
    localita: 'Prinsengracht 263-267, Amsterdam',
    cosE:
      'Il museo nell\'edificio dove Anne Frank, la sua famiglia e altri quattro rifugiati si nascosero dal luglio 1942 all\'agosto 1944, prima di essere scoperti e deportati. Il percorso attraversa l\'«Achterhuis», l\'alloggio segreto sul retro, dietro la libreria girevole che ne nascondeva l\'accesso, rimasto in gran parte spoglio per volontà di Otto Frank, l\'unico sopravvissuto della famiglia. La vicenda è ricostruita con il diario di Anne e materiali storici originali.',
    percheFarla:
      'È uno dei luoghi della memoria più visitati d\'Europa, e uno dei più diretti, sulla persecuzione degli ebrei durante l\'occupazione nazista dei Paesi Bassi, resa universale dal diario di una ragazza di tredici anni. Come altri luoghi della memoria va visitata con la disposizione giusta, diversa da quella di una normale tappa turistica.',
    durata: 'circa 1-1,5 ore per il percorso completo, con ingresso a fascia oraria prenotata',
    periodo: 'tutto l\'anno; gli spazi interni sono ristretti e la visita può risultare affollata anche fuori stagione',
    costo: 'circa 16€ per gli adulti, con riduzioni per bambini e ragazzi; l\'ingresso online prevede una piccola commissione di prenotazione',
    comePrenotare:
      'Solo online, sul sito ufficiale annefrank.org: i biglietti si aprono con settimane di anticipo (in genere il primo martedì di ogni mese per i due mesi successivi) e finiscono in fretta, soprattutto nei weekend e d\'estate. Ogni giorno online esce una piccola quota di biglietti last-minute, ma per chi ha un weekend breve non è una strategia su cui contare.',
    cosaPortare: 'Un documento d\'identità (il nome sul biglietto deve corrispondere); zaini e borse grandi non sono ammessi e vanno lasciati al guardaroba.',
    perChiEAdatta:
      'Va bene per un pubblico ampio, adolescenti compresi, sapendo che gli spazi interni sono stretti, con scale ripide all\'olandese, e che la visita può essere emotivamente intensa.',
    giudizio: 'da-verificare',
    alternative: ['Non c\'è un\'alternativa equivalente: chi non trova biglietti può comunque vedere l\'esterno dell\'edificio sul Prinsengracht e visitare il centro di documentazione accanto'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'Il cortile interno in mattoni tra la casa principale e il retro, visto dall\'alto da una finestra della Casa di Anna Frank ad Amsterdam',
    immagine: '/images/paesi-bassi/casa-di-anna-frank.jpg',
  },
  {
    slug: 'amsterdam-in-bicicletta',
    paeseSlug: 'paesi-bassi',
    destinazioneSlug: 'amsterdam',
    nome: 'Noleggio bici e giro in bicicletta per la città',
    localita: 'Amsterdam, punti di noleggio diffusi in tutto il centro',
    cosE:
      'Si noleggia una bicicletta in uno dei tanti punti della città (catene o negozi indipendenti) e ci si sposta come la maggior parte degli amsterdammer. Più che un\'attività turistica è il modo più naturale di vivere la città per uno o più giorni, con piste ciclabili su quasi tutte le strade principali.',
    percheFarla:
      'Amsterdam è disegnata per la bicicletta più che per qualunque altro mezzo, ed è probabilmente l\'unico modo di entrare nel ritmo della città invece di guardarlo da fuori. Bisogna però imparare in fretta alcune regole non scritte, diverse da quelle di una città italiana.',
    durata: 'variabile, da poche ore a un\'intera giornata; il noleggio è tipicamente giornaliero',
    periodo: 'tutto l\'anno, con l\'accortezza di vestirsi per la pioggia (frequente) e il vento',
    costo: 'circa 10-15€ al giorno per una bici standard, con cauzione richiesta; ombrellone/casco raramente inclusi (i ciclisti locali quasi mai indossano il casco)',
    comePrenotare: 'Non serve prenotare: i punti di noleggio sono tanti, concentrati vicino alla Stazione Centrale e nel centro storico; nei weekend di alta stagione conviene comunque arrivare presto per avere scelta.',
    cosaPortare: 'Un documento d\'identità o una carta di credito per la cauzione; abiti a strati e, se possibile, una mantellina antipioggia leggera.',
    perChiEAdatta:
      'A chiunque sappia andare in bicicletta nel traffico con un minimo di sicurezza; meno a chi non ha mai pedalato tra auto e pedoni, visto quante bici girano in centro.',
    giudizio: 'da-verificare',
    alternative: ['Un tour in bici con una guida locale, per chi preferisce muoversi in gruppo con qualcuno che spiega le regole sul momento, invece di impararle da solo'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'Biciclette parcheggiate alla ringhiera di un ponte sul canale Binnenkant ad Amsterdam, con le case storiche sull\'altra riva',
    immagine: '/images/paesi-bassi/amsterdam-in-bicicletta.jpg',
  },
  {
    slug: 'crociera-sui-canali-amsterdam',
    paeseSlug: 'paesi-bassi',
    destinazioneSlug: 'amsterdam',
    nome: 'Crociera sui canali',
    localita: 'Partenze da diversi punti di imbarco nel centro di Amsterdam',
    cosE:
      'Un giro in barca, aperta o coperta secondo la stagione, lungo l\'anello dei canali del Grachtengordel e spesso anche sull\'IJ (il grande bacino d\'acqua a nord della Stazione Centrale), con commento audio o guida dal vivo sulla storia dei canali e delle case che ci si affacciano.',
    percheFarla:
      'Dall\'acqua l\'anello dei canali, patrimonio UNESCO, si legge in un altro modo: le case che dai ponti sembrano tutte uguali mostrano dalla barca la varietà dei gable (frontoni) e delle decorazioni, secoli di storia mercantile della città.',
    durata: 'circa 1-1,5 ore per il giro classico; esistono anche crociere serali con aperitivo o al tramonto, più lunghe',
    periodo: 'tutto l\'anno; le partenze serali d\'estate, con luce lunga fino a tardi, restano le più richieste',
    costo: 'circa 15-20€ a persona per il giro standard; le crociere serali con aperitivo o cena costano di più',
    comePrenotare: 'Online in anticipo nei weekend e in alta stagione, oppure direttamente al punto di imbarco fuori stagione; diversi operatori hanno partenze frequenti per tutto il giorno.',
    cosaPortare: 'Uno strato in più anche d\'estate: per il vento, sull\'acqua fa sempre più fresco che a terra.',
    perChiEAdatta: 'Quasi chiunque, compresi bambini e persone con mobilità ridotta: si sta seduti e non si fa fatica.',
    giudizio: 'da-verificare',
    alternative: ['Una barca elettrica a noleggio senza skipper, per cui non serve la patente nautica, per chi vuole più libertà di percorso e meno commento storico'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'Fotografia d\'epoca in bianco e nero di un battello turistico carico di passeggeri su un canale di Amsterdam, con la torre della Zuiderkerk sullo sfondo',
    immagine: '/images/paesi-bassi/crociera-sui-canali-amsterdam.jpg',
  },
]
