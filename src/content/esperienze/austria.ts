import type { Esperienza } from '@/lib/types'

// Prima uscita austriaca dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/austria.ts). Prezzi, orari e regole di
// prenotazione cambiano spesso e vanno riverificati sui canali ufficiali
// prima di prenotare.

export const esperienzeAustria: Esperienza[] = [
  {
    slug: 'vienna-schonbrunn-biglietto',
    paeseSlug: 'austria',
    destinazioneSlug: 'vienna',
    nome: 'Visita alla Reggia di Schönbrunn',
    localita: 'Schönbrunn, Vienna',
    cosE:
      'Il tour della residenza estiva della famiglia imperiale asburgica, con accesso a una selezione di stanze storiche (dalle circa 1.400 totali) tra cui gli appartamenti dell\'imperatrice Sissi e dell\'imperatore Francesco Giuseppe; i biglietti si dividono in più livelli, dal Tour Imperiale di base al Grand Tour più esteso, con o senza accesso ai giardini e alla Gloriette.',
    percheFarla:
      'Perché Schönbrunn è il monumento più visitato d\'Austria e racconta, meglio di ogni altro luogo della città, come viveva la corte asburgica: sale di rappresentanza, appartamenti privati e un parco barocco che da solo occupa mezza giornata.',
    durata: 'circa 1-1,5 ore per il tour delle stanze, mezza giornata se si aggiungono i giardini e la Gloriette',
    periodo: 'tutto l\'anno; il palazzo ha orari più ampi in estate (fino alle 18:00) e più ridotti in inverno (fino alle 17:00); il parco è gratuito e sempre accessibile durante l\'orario di apertura',
    costo: 'il tour di base parte da circa 26€ per adulto; i giardini e il parco sono gratuiti, la Gloriette e il labirinto hanno un biglietto a parte',
    comePrenotare: 'Vendita ufficiale solo online sul sito di Schönbrunn; conviene comprare in anticipo il biglietto con fascia oraria, soprattutto in alta stagione, per evitare le code in loco.',
    cosaPortare: 'Nessuna attrezzatura particolare; scarpe comode per il parco, molto esteso.',
    perChiEAdatta: 'Adatta a quasi tutti; le code non prenotate in alta stagione la rendono più faticosa con bambini piccoli.',
    giudizio: 'da-verificare',
    alternative: ['Visitare solo il parco e la Gloriette, gratuiti (a parte il biglietto per salire sulla Gloriette), per chi ha poco tempo o budget limitato'],
    tripSlugs: ['vienna-weekend'],
    imageAlt: 'La facciata gialla della Reggia di Schönbrunn a Vienna vista dai giardini, con le aiuole fiorite in primo piano',
    immagine: '/images/austria/vienna-schonbrunn-biglietto.jpg',
  },
  {
    slug: 'vienna-opera-stehplatz',
    paeseSlug: 'austria',
    destinazioneSlug: 'vienna',
    nome: 'Biglietto in piedi (Stehplatz) all\'Opera di Stato di Vienna',
    localita: 'Wiener Staatsoper, Innere Stadt, Vienna',
    cosE:
      'I biglietti in piedi della Wiener Staatsoper, venduti il giorno stesso dello spettacolo: 435 posti in piedi ripartiti su tre settori (Stehparterre a platea, Galerie in galleria, Balkon in balconata), con la particolarità che, nonostante il nome, la maggior parte del pubblico finisce seduta a terra sulla moquette per la durata dello spettacolo.',
    percheFarla:
      'Perché è uno dei modi più economici al mondo per assistere a uno spettacolo lirico o di balletto di altissimo livello in una delle sale più prestigiose d\'Europa. Ed è un\'usanza viennese consolidata, oltre che un risparmio.',
    durata: 'la durata dello spettacolo, in genere 2-3,5 ore secondo il titolo in cartellone',
    periodo: 'stagione operistica da settembre a giugno; l\'Opera resta chiusa in estate',
    costo: 'da circa 13€ (Balkon) a circa 18€ (Stehparterre) a biglietto, secondo il settore',
    comePrenotare: 'I biglietti in piedi si vendono solo il giorno stesso e non si prenotano in anticipo: una prima quota online dalle 10:00, una seconda alla biglietteria dedicata a partire da 80 minuti prima dell\'inizio dello spettacolo.',
    cosaPortare: 'Una sciarpa o un fazzoletto: è ancora in uso, tra chi fa la fila prima, legarne uno alla balaustra per "prenotare" simbolicamente un posto in piedi, un\'usanza informale rispettata dal pubblico abituale.',
    perChiEAdatta: 'Adatta a chi non ha problemi a restare in piedi (o seduto a terra) per diverse ore; meno indicata a chi ha problemi di mobilità o cerca il comfort di un posto a sedere numerato.',
    giudizio: 'da-verificare',
    alternative: ['Un biglietto a sedere nelle categorie più economiche, prenotabile in anticipo online, per chi preferisce la certezza del posto assegnato'],
    tripSlugs: ['vienna-weekend'],
    imageAlt: 'L\'edificio della Wiener Staatsoper illuminato di sera, con le scie luminose del traffico sul Ring in primo piano',
    immagine: '/images/austria/vienna-opera-stehplatz.jpg',
  },
  {
    slug: 'vienna-giro-caffe-storici',
    paeseSlug: 'austria',
    destinazioneSlug: 'vienna',
    nome: 'Giro dei caffè storici viennesi',
    localita: 'Innere Stadt, Vienna',
    cosE:
      'Un percorso tra due o tre caffè storici del centro, di solito scelti tra Café Central, Café Sacher, Café Landtmann e Café Hawelka (ognuno ha la sua identità e la sua storia), per assaggiare le principali varianti di caffè viennese (dal Melange al Einspänner) insieme alla pasticceria tradizionale, dalla Sachertorte all\'Apfelstrudel.',
    percheFarla:
      'Perché la Kaffeehauskultur viennese è patrimonio culturale immateriale UNESCO dal 2011: nella definizione della candidatura UNESCO stessa il caffè storico è "un luogo dove si consumano tempo e spazio, e solo il caffè compare sul conto". Racconta la città quanto i suoi monumenti.',
    durata: 'circa 2-3 ore per un giro di due o tre caffè con calma',
    periodo: 'tutto l\'anno, essendo un\'esperienza al chiuso',
    costo: 'un caffè con dolce in un caffè storico del centro costa indicativamente 8-14€ a persona per tappa',
    comePrenotare: 'Nessuna prenotazione necessaria per la maggior parte dei caffè, salvo occasioni particolari o gruppi numerosi; nei caffè più noti (Central, Sacher) può capitare una breve fila nelle ore di punta.',
    cosaPortare: 'Nessuna attrezzatura particolare; comodo avere contante per i caffè più tradizionali, anche se ormai le carte si accettano quasi ovunque.',
    perChiEAdatta: 'Adatta a tutti; per chi ha poco tempo, anche una sola tappa in un caffè storico basta a farsi un\'idea dell\'usanza.',
    giudizio: 'da-verificare',
    alternative: ['Un caffè di quartiere fuori dal centro più turistico, più economico e altrettanto autentico per chi vuole evitare i prezzi delle insegne più famose'],
    tripSlugs: ['vienna-weekend'],
    imageAlt: 'Le volte a crociera decorate e i lampadari a globo del Café Central di Vienna, con le colonne in stile neogotico',
    immagine: '/images/austria/vienna-giro-caffe-storici.jpg',
  },
]
