# Verifica viaggi nuovi: Marocco e Messico (5 novembre 2026)

Regola applicata: «solo cose sicure» (docs/mini-guide/VERIFICA-2.md). Tutte le modifiche sono fatte in it, en ed es. I ricordi in prima persona di Rick (Messico Beach Life, `miaEsperienza`) non sono stati toccati.
Controlli finali: `npx tsc --noEmit` passa. `tools/controlla-md-i18n.py` en/es: l'unico avviso riguarda 09-florida-road-trip.md, che non è di questo lavoro.

## 90 — Marocco: città imperiali (e schede chefchaouen, fes, meknes-volubilis, rabat)

**Stato: INCOMPLETO.** Mancano i ricordi personali di Rick e le foto. Tempi ONCF e CTM non confermati: sono stati tolti.

### Richieste di Rick, applicate
- È un viaggio suo: tolte l'apertura «non l'ha fatto Rick» e la dicitura «proposta». L'apertura è in prima persona ma senza ricordi inventati: dice solo che preferisce la strada. La nota finale non dice più «non vissuto».
- Le 4 schede (chefchaouen, fes, meknes-volubilis, rabat) ora hanno `visitataPersonalmente: true`. Commento di sezione aggiornato.
- Giro invariato: Tangeri → Chefchaouen → Fès → Volubilis/Moulay Idriss → Meknès → Rabat → Casablanca.
- Spostamenti tutti su strada (auto con autista o noleggio, bus CTM come alternativa sulle prime due tratte). Nessun orario ONCF. Il treno compare solo come alternativa, in una riga.
- Il giorno 7 ora va da Fès a Volubilis in auto, poi Moulay Idriss, poi notte a Meknès. Il giorno 10 va da Rabat a Casablanca in auto.
- Distanze e tempi da OSRM (router.project-osrm.org, senza soste): Tangeri-Chefchaouen 109 km/2 h; Chefchaouen-Akchour 30 km/40 min; Chefchaouen-Fès 193 km/3 h 50; Fès-Meknès 73 km/1 h; Fès-Volubilis 68 km/1 h 30; Meknès-Volubilis 29 km/35 min; Volubilis-Moulay Idriss 4 km; Meknès-Rabat 142 km/1 h 45; Rabat-Casablanca 93 km/1 h 10; Casablanca-aeroporto 32 km/35 min; Fès-Merzouga 465 km/8 h 15 (versione combinata). Nessun contatto aggiunto per la tratta Fès-Merzouga.
- Aggiornati di conseguenza: `ritmo`, `trasporti`, `stile` («on the road»), `adattoA`, `puntiForti`, `criticita`, `tratta` dei giorni, i titoli dei giorni 8 e 10 (md e dati in tre lingue) e il budget (tolti treni e taxi, aggiunta la voce auto/autista). Tag `#treno` → `#ontheroad`. Nelle schede: `comeArrivare`, Moschea Hassan II `come`, programmi di Rabat e zone «chi viaggia in treno» → «chi arriva in auto».

### Corretto o tolto
- **Moschea Hassan II:** confermati 140 MAD per gli adulti stranieri, il percorso (sala di preghiera, hall del minareto, abluzioni) e il dress code (fmh2.ma). Gli orari stagionali (9-10-11-12-15, il turno delle 16 da marzo a settembre) non tornavano con il sito, che indica 8-9-10-11-14 in GMT e meno turni il venerdì. Ora il testo è generico e rimanda a fmh2.ma. Tolta la frase sui «rivenditori online».
- **ONCF/Al Boraq:** oncf-voyages.ma (certificato non valido) e oncf.ma (connessione rifiutata) non si aprono. Tolti tutti i tempi: 40 min, 2 h 30, 1 h 20, «meno di un'ora», 2 h 10.
- **CTM:** ctm.ma e booking.ctm.ma non elencano le linee, e i 4-5 ore venivano solo da aggregatori. Ora: «bus CTM, corse e orari su ctm.ma» e tempi OSRM per la strada.
- **Documenti e dirham:** riscritti da Viaggiare Sicuri (scheda JSON, aggiornata al 20/04/2026). Passaporto valido per tutto il soggiorno, nessun visto fino a 3 mesi, possono chiedere il biglietto di ritorno e la prova di mezzi. È vietato portare dirham fuori dal Marocco e si riconvertono solo con le ricevute. Aggiunto: niente guida di notte fuori città (Viaggiare Sicuri).
- **Droghe:** «tolleranza zero, carcere e multe pesanti» (gov.uk).
- **Ramadan:** riscritto secondo gov.uk e Viaggiare Sicuri (orari ridotti, rispetto in pubblico).
- **Fès:** «la più grande area senza auto» → «una delle zone pedonali urbane più grandi e antiche» (Wikipedia). Qarawiyyin 857-859 «secondo la tradizione» da Fatima al-Fihri, citata dall'UNESCO come la più antica istituzione d'insegnamento superiore ancora attiva. Orologio ad acqua: completato nel 1357, meccanismo non più compreso. Chouara: la più grande della città, restaurata nel XXI secolo. Fès Jdid fondata nel 1276. Jnan Sbil: Ottocento, Moulay Hassan I. Tolta la frase sul non tornare a piedi dopo il buio alle Tombe merinidi (nessuna fonte). Aeroporto a circa 15 km.
- **Volubilis:** «forse» capitale della Mauretania; Roma annesse la Mauretania nel 44; verso il 285 cade in mano alle tribù locali. Tolti i 95 km da Fès.
- **Moulay Idriss:** il mausoleo non è aperto ai non musulmani (prima era «di norma»); fu ricostruito da Moulay Ismail all'inizio del Settecento.
- **Meknès:** tolte le date 1727-1729 del mausoleo, che ora è «luogo religioso aperto ai turisti». Mansour al-Alj era un ex schiavo cristiano. Medersa Bou Inania fondata nel 1335-36. Dar Jamai: visir di Moulay Hassan.
- **Rabat:** capitale dal 1912 (e non dal 1956). Torre Hassan iniziata nel 1191 e lasciata incompiuta nel 1199. Nel Mausoleo sono sepolti i figli Hassan II e Abdallah. «Ogni anno Jazz au Chellah» → «ha ospitato per anni».
- **Chefchaouen:** «ebrei sefarditi dalla Spagna» → «ebrei dalla Penisola iberica». Moschea spagnola costruita dagli spagnoli e oggi in disuso. Ras el-Ma sul lato est. Tolta l'idea che il riad mandi «di solito» qualcuno per i bagagli.
- I tempi di visita delle schede IT sono stati resi «circa» (sono stime, non dati). In en/es sono rimasti com'erano: il senso è lo stesso.

### Fonti
fmh2.ma; gov.uk (Morocco: entry requirements, safety); viaggiaresicuri.it (/schede_paese/MAR.json); Wikipedia EN (Al Boraq, Rail transport in Morocco, Chefchaouen, Fez, Bou Inania Madrasa, Al-Attarine, Qarawiyyin, Chouara Tannery, Volubilis, Moulay Idriss Zerhoun, Meknes, Rabat, Kasbah of the Udayas, Hassan Tower, Mausoleum of Mohammed V, Chellah); OSRM.

## 95 — Messico: Yucatán completo (e schede uxmal-ruta-puuc, palenque, calakmul, Izamal e Celestún in merida)

**Stato: INCOMPLETO.** Restano tre punti aperti. (1) L'importo di Chichén Itzá: la scheda INAH dice 105 + 548 MXN, la stampa locale 697 MXN; il testo ora rimanda a un controllo. (2) Orari e prezzi del Tren Maya e di ADO: restano generici. (3) Quote di Misol-Ha e Agua Azul e stagione dei fenicotteri di Celestún: generiche, senza fonte ufficiale.

### Confermato sulle schede INAH (lugares.inah.gob.mx, nodi trovati e citati)
- Ek Balam (4401/5751): 210 INAH + 481 CULTUR = 691 MXN, più 100 MXN di parcheggio dell'ejido; 8-17, ultimo ingresso 16. Prima c'era «circa 690».
- Chichén Itzá (5663): 105 + 548 MXN, 8-16, ultimo ingresso 15. Prima c'erano 697 MXN e 8-17: corretto e reso prudente.
- Uxmal (5797): 105 + 461 = 566 MXN, 8-16, ultimo ingresso 15.
- Kabah (5504): 155. Labná (4427): 145. Sayil (4458): **145**, prima «non riportato». Tutti 8-17, ultimo ingresso 16.
- Edzná (5755): 210, ultimo ingresso 16.30.
- Fuerte de San Miguel (4261): 145, mar-dom 8-17, maschere di giada di Calakmul confermate.
- Palenque (4853): 210 + 215 CONANP, 8-17, biglietti al CATVI o online. Museo di sito Alberto Ruz (4293): mar-dom 8.30-17, compreso nel biglietto.
- Calakmul (4376/5551): 210 + 215, bivio al km 95 della 186, sito al km 60, rivale di Tikal, patrimonio misto UNESCO nel 2014.

### Corretto o tolto
- Documenti: tolti i «6 mesi di validità», che Viaggiare Sicuri non riporta. Restano i 180 giorni senza visto e la possibile richiesta del biglietto di uscita e dell'alloggio.
- Tolto il cambio «1 € = 20 MXN». «Si paga con carta nei siti principali» → «a Chichén Itzá Rick ha pagato con carta» (dal suo ricordo).
- Foreign Office: la frase sui bus di prima classe ora confronta con quelli di seconda e terza classe, come dice gov.uk, e non con quelli «su strade libere». Strade isolate e autostrade a pedaggio riscritte come nel testo di gov.uk.
- Tren Maya: aggiunta la stazione di Escárcega. Canali di vendita presi dalla FAQ. Bagagli: 3 pezzi per 50 kg più il bagaglio a mano. La citazione «in alcune località» è stata tolta, perché non è il testo della FAQ.
- Siti INAH: Uxmal **e Chichén Itzá** chiudono alle 16.
- Cenote Ik Kil: tolto «chiude alle 17».
- Celestún: tolta la «regola» sulla distanza delle barche, che non ha fonte. Ora è un consiglio.
- Sayil: «palazzo a tre piani» → Gran Palazzo su due terrazze che sembrano tre piani (Wikipedia, INAH).
- Kabah: tolto «secondo sito per grandezza». Labná: tolto «ombreggiato», aggiunte le date dalla scheda INAH.
- Palenque: tolti «torre di quattro piani» e «stazione di testa»; aggiunto il 1952 per la scoperta della tomba di Pakal.
- Calakmul: tolta la frase «l'INAH ricorda che è vietato uscire dai sentieri» (nessuna fonte trovata), e la fauna «spesso» è diventata «capita».
- Fuerte de San Miguel: tolto «a sud-ovest».
- Misol-Ha e Agua Azul: «sulla strada per Ocosingo, Federale 199». Agua Azul circa 60 km più una deviazione; l'acqua perde il colore con le piogge (Wikipedia ES). Non è confermato che Misol-Ha stia dentro il tratto sconsigliato: il testo ora lo dice solo per Agua Azul.
- Budget ingressi ricalcolato: circa 2.900 MXN più Chichén Itzá da controllare. Prima erano 3.450.
- Confermati da Viaggiare Sicuri (aggiornata al 27/05/2026): Visitax 20,99 USD solo online, nessuna vaccinazione obbligatoria, chikungunya, congiuntivite, rapine e «pedaggi» in Chiapas, niente guida la sera e di notte, solo bus di prima categoria, furti di soldi e documenti nei centri turistici.
- Confermati da gov.uk: Federale 199 (blocchi, proteste, sequestri), fascia di 40 km dal Guatemala, Tabasco «extremely cautious».
- Campeche: UNESCO 1999 e mura del 1686-1704 (Wikipedia).
- Note di redazione aggiornate (tolto Sayil, aggiunta Chichén Itzá).

### Fonti
lugares.inah.gob.mx (nodi sopra); trenmaya.gob.mx e preguntas.php; gov.uk (Mexico, regional risks, safety and security); viaggiaresicuri.it (/schede_paese/MEX.json); Wikipedia (Sayil, Campeche, Cascadas de Agua Azul, Misol-Ha ES); per Chichén Itzá anche la stampa locale (yucatan.com.mx, cronista.com), solo per segnalare la differenza.

## Non toccati (di altri agenti)
geo.ts, slug, indice, coordinate, ProssimaDestinazione, viaggi Asia, UK/Irlanda. Da controllare per chi gestisce i registri: se qualche indice o editoriale descrive ancora 90-marocco come «proposta non vissuta».
