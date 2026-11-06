# Prezzi vaghi nelle schede

Censimento del 6/11/2026 (brief §8-10: «niente biglietto modesto vago»). Cercati nei campi di prezzo (`costo`, `costi`, `costiNoti`, `valore` del budget, `budgetIndicativo`, `costoVita`) di `src/content/{destinazioni,paesi,esperienze,viaggi-dati}` e delle copie `i18n/en`, `i18n/es`: «biglietto modesto/contenuto», «costa poco», «prezzi bassi/contenuti/ragionevoli», «relativamente economico», «abbordabile» e gli equivalenti inglesi e spagnoli («modest ticket», «costs little», «low prices», «cuesta poco», «módico», «asequible»…).

Regola applicata: si corregge solo dove la stessa scheda ha già una cifra con fonte. Nessuna cifra inventata. Le righe sono quelle del momento del censimento.

## Corretti

| File | Campo | Prima | Dopo | Fonte della cifra |
|---|---|---|---|---|
| src/content/destinazioni/italia.ts (+ en, es) — Milano | costi | «il Cenacolo costa poco» | «il Cenacolo costa 15 euro intero (sito ufficiale, 2026)» | stessa scheda, luogo «Cenacolo Vinciano»: «15 euro intero… (sito ufficiale, 2026)», url cenacolovinciano.org |

## Non corretti: manca una cifra con fonte nella scheda

Da completare quando c'è il dato ufficiale (importo, valuta, fonte, data). Casi vicini: il Mémorial de Caen ha «20,80 € intero (2026)» nel luogo della scheda Normandia ma senza fonte indicata, quindi i «biglietti contenuti» di francia.ts (costi Normandia), esperienze/francia.ts e viaggi-dati/normandia-bretagna.ts restano da sistemare dopo la verifica.

| File:riga | Campo | Espressione | Contesto |
|---|---|---|---|
| **IT** (59) | | | |
| src/content/destinazioni/arabia-saudita.ts:45 | costi | biglietti contenuti | …costi: 'Camminare per Al-Balad non costa niente; le case-museo hanno biglietti contenuti. Gli hotel hanno prezzi da capitale.',… |
| src/content/destinazioni/arabia-saudita.ts:370 | costi | costa poco | …Diriyah ha un biglietto d\'ingresso per At-Turaif; il Museo Nazionale costa poco; l\'escursione all\'Edge of the World 300-600 riyal secondo… |
| src/content/destinazioni/arabia-saudita.ts:623 | costi | prezzi contenuti | …costi: 'uscite in barca a prezzi contenuti rispetto al Mar Rosso egiziano; alloggi economici finché i… |
| src/content/destinazioni/borneo.ts:259 | costo | prezzi bassi | …costo: 'di gran lunga il più economico: trekking guidati a prezzi bassi',… |
| src/content/destinazioni/borneo.ts:947 | costi | costa poco | …costi: 'l\'ingresso al parco costa poco, ma ogni grotta e ogni escursione guidata si pagano a parte… |
| src/content/destinazioni/corea-del-sud.ts:49 | costi | costa poco | …l biglietto combinato per quattro palazzi più il santuario di Jongmyo costa poco più di 10.000 won. Metropolitana poco più di un euro, pasti… |
| src/content/destinazioni/francia.ts:53 | costi | costano poco | …care di Francia; da ottobre a marzo i prezzi tornano normali. I musei costano poco (il Picasso di Antibes e i musei municipali di Nizza hanno… |
| src/content/destinazioni/francia.ts:53 | costi | prezzi contenuti | …stano poco (il Picasso di Antibes e i musei municipali di Nizza hanno prezzi contenuti), i trasporti regionali pochissimo, gli alloggi molto. Le d… |
| src/content/destinazioni/francia.ts:400 | costi | costano poco | …'Alti, e la voce che pesa di più è l\'alloggio. I singoli musei costano poco. Il **Paris Museum Pass** da 2, 4 o 6 giorni conviene da ci… |
| src/content/destinazioni/francia.ts:733 | costi | biglietti contenuti | …e du Hoc e batterie non si pagano, mentre i musei e il Mémorial hanno biglietti contenuti. La voce che sorprende è navetta più parcheggio al Mont-Sai… |
| src/content/destinazioni/francia.ts:986 | costi | costano poco | …e località di mare più note in agosto. Il GR34 è gratuito, i megaliti costano poco, i traghetti per le isole hanno prezzi contenuti.',… |
| src/content/destinazioni/francia.ts:986 | costi | prezzi contenuti | …4 è gratuito, i megaliti costano poco, i traghetti per le isole hanno prezzi contenuti.',… |
| src/content/destinazioni/francia.ts:2209 | costi | biglietti contenuti | …sono gratuiti, il parco ornitologico e le mura di Aigues-Mortes hanno biglietti contenuti. La spesa principale sono le passeggiate a cavallo e le vis… |
| src/content/destinazioni/india.ts:2039 | costi | biglietti modesti | …costi: "Kathakali, palazzo e sinagoga hanno biglietti modesti; tariffe alle biglietterie.",… |
| src/content/destinazioni/indonesia.ts:61 | costo | prezzi contenuti | …costo: 'il più economico: trekking guidati a prezzi contenuti, alloggi semplici sul fiume',… |
| src/content/destinazioni/italia.ts:1447 | costi | biglietti contenuti | …'Museo Archeologico e siti vesuviani hanno biglietti contenuti rispetto al nord Italia. Il biglietto cumulativo per Pompei… |
| src/content/destinazioni/italia.ts:3570 | costi | biglietti contenuti | …o degli Dei è gratuito; Villa Cimbrone e Villa Rufolo a Ravello hanno biglietti contenuti; i traghetti costano pochi euro a tratta e sono il miglior… |
| src/content/destinazioni/italia.ts:4298 | costi | ingressi contenuti | …ti separati per duomo, chiostro e terrazze; Segesta e Selinunte hanno ingressi contenuti; i mercati non costano niente oltre a quello che si mangia.… |
| src/content/destinazioni/malesia.ts:963 | costi | prezzi bassi | …"chalet semplici a prezzi bassi, speedboat andata e ritorno da Kuala Besut; immersioni a pr… |
| src/content/destinazioni/malesia.ts:963 | costi | prezzi bassi | …prezzi bassi, speedboat andata e ritorno da Kuala Besut; immersioni a prezzi bassi.",… |
| src/content/destinazioni/messico.ts:285 | costi | costa poco | …ese di Mérida non me le sono segnate; come il resto dell\'entroterra, costa poco.',… |
| src/content/destinazioni/peru.ts:879 | costi | costa poco | …è il pacchetto del lodge; il volo interno da Cusco a Puerto Maldonado costa poco se prenotato per tempo.',… |
| src/content/destinazioni/qatar.ts:45 | costi | biglietti contenuti | …'Museo di Arte Islamica e Museo Nazionale hanno biglietti contenuti; il Souq Waqif è gratuito; la metropolitana costa pochi riy… |
| src/content/paesi/corea-del-sud.ts:37 | costoVita | costa poco | …sempre inclusi e riportati gratis quando finiscono. La metropolitana costa poco più di un euro. Il caffè invece costa quanto in Europa, a v… |
| src/content/paesi/emirati-arabi-uniti.ts:22 | budgetIndicativo | costa poco | …elle zone vecchie a cifre senza limite sul lungomare. Mangiare invece costa poco: nei quartieri indiani e pakistani si mangia benissimo con… |
| src/content/paesi/italia.ts:24 | budgetIndicativo | costa poco | …nno prezzi accessibili, in primavera no. L\'Italia inesplorata invece costa poco sempre: nell\'Appennino interno si mangia e si dorme con ci… |
| src/content/paesi/polonia.ts:42 | costoVita | prezzi contenuti | …iche) pochi euro, cena normale 10-15€ a testa, birra o vodka locale a prezzi contenuti.',… |
| src/content/paesi/qatar.ts:20 | budgetIndicativo | costano poco | …gramma gli alloggi costano come in una capitale europea. Musei e souq costano poco o niente.',… |
| src/content/paesi/qatar.ts:35 | costoVita | costano poco | …hotel ed è tassato pesantemente. Trasporti, musei e cibo di quartiere costano poco. Il souq Waqif ha ristoranti per tutte le tasche.',… |
| src/content/paesi/spagna.ts:37 | budgetIndicativo | abbordabili | …dei prezzi più alti d\'Europa per alloggi e voli. Le Canarie restano abbordabili anche quando altrove è bassa stagione. Andalusia e Nord son… |
| src/content/paesi/turchia.ts:34 | costoVita | costano poco | …'Cibo di strada e trasporti costano poco; ristoranti e hotel nelle zone turistiche sono ormai ai liv… |
| src/content/esperienze/arabia-saudita.ts:53 | costo | biglietti contenuti | …costo: 'girare il quartiere non costa niente; le case-museo hanno biglietti contenuti',… |
| src/content/esperienze/bulgaria.ts:16 | costo | prezzi bassi | …ino al 25% in meno comprandolo online); noleggio dell\'attrezzatura a prezzi bassi nei negozi del centro',… |
| src/content/esperienze/francia.ts:171 | costo | costo contenuto | …costo: 'traghetto di andata e ritorno a costo contenuto; ingresso al forte e al museo di Sainte-Marguerite a pagame… |
| src/content/esperienze/francia.ts:352 | costo | biglietti contenuti | …terie sono **a ingresso libero**; i musei e il Mémorial de Caen hanno biglietti contenuti',… |
| src/content/esperienze/francia.ts:505 | costo | costo contenuto | …del perimetro è gratuito; le visite guidate dentro i recinti hanno un costo contenuto',… |
| src/content/esperienze/francia.ts:609 | costo | prezzo contenuto | …costo: 'noleggio bici a prezzo contenuto, con un supplemento per la riconsegna a senso unico',… |
| src/content/esperienze/francia.ts:633 | costo | prezzo contenuto | …costo: 'degustazione a prezzo contenuto, spesso gratuita se si compra',… |
| src/content/esperienze/francia.ts:827 | costo | prezzo contenuto | …'guardare dalla strada è gratis; alcune distillerie offrono visite a prezzo contenuto',… |
| src/content/esperienze/francia.ts:925 | costo | prezzo contenuto | …costo: 'prezzo contenuto per un\'ora, più alto per un\'escursione di mezza giornata'… |
| src/content/esperienze/francia.ts:1021 | costo | prezzo contenuto | …costo: 'noleggio bici a prezzo contenuto; noleggio barca (a settimana o a giornata) a prezzo medio-a… |
| src/content/esperienze/italia.ts:179 | costo | ingressi contenuti | …costo: 'ingressi contenuti per San Clemente e le Case Romane; la Domus Aurea ha una vi… |
| src/content/esperienze/italia.ts:422 | costo | ingresso contenuto | …costo: 'ingresso contenuto alla gola; il percorso guidato oltre il primo tratto ha un… |
| src/content/esperienze/italia.ts:759 | costo | prezzi contenuti | …costo: 'degustazioni con prezzi contenuti rispetto alle grandi denominazioni continentali',… |
| src/content/viaggi-dati/arabia-saudita-itinerario.ts:51 | costiNoti | biglietti contenuti | …', intensita: 'medio', costiNoti: 'quartiere gratuito; case-museo con biglietti contenuti', destinazioneSlug: 'jeddah', immagine: '/images/viaggi/ara… |
| src/content/viaggi-dati/arabia-saudita-itinerario.ts:66 | valore | prezzi bassi | …{ etichetta: 'Tre voli interni', valore: 'Saudia e flynas, prezzi bassi ma da sommare' },… |
| src/content/viaggi-dati/castelli-loira.ts:112 | valore | prezzo contenuto | …{ etichetta: 'Noleggio bici', valore: 'prezzo contenuto, supplemento per il ritiro a senso unico' },… |
| src/content/viaggi-dati/costa-azzurra.ts:136 | valore | biglietti contenuti | …{ etichetta: 'Musei', valore: 'Musée Picasso e Fondation Maeght hanno biglietti contenuti' },… |
| src/content/viaggi-dati/costiera-e-isole.ts:83 | costiNoti | biglietti contenuti | …costiNoti: 'Villa Rufolo e Villa Cimbrone hanno biglietti contenuti',… |
| src/content/viaggi-dati/eolie-in-vela.ts:146 | valore | costano poco | …ssi', valore: 'bassi: il Museo Archeologico Eoliano e il Gran Cratere costano poco' },… |
| src/content/viaggi-dati/grandi-citta-italia.ts:84 | costiNoti | ingresso contenuto | …costiNoti: 'San Clemente ingresso contenuto; Appia Antica gratuita',… |
| src/content/viaggi-dati/lisbona-weekend.ts:99 | valore | relativamente economico | …{ etichetta: 'Alloggio', valore: 'ancora relativamente economico per l\'Europa occidentale, in crescita per la pressione tur… |
| src/content/viaggi-dati/provenza-camargue.ts:156 | valore | biglietti contenuti | …{ etichetta: 'Pont du Gard e Nîmes', valore: 'biglietti contenuti, cumulativi disponibili' },… |
| src/content/viaggi-dati/rotte-dei-vini-francia.ts:134 | valore | prezzo contenuto | …{ etichetta: 'Noleggio bici', valore: 'prezzo contenuto per il giorno in Alsazia' },… |
| src/content/viaggi-dati/sardegna-due-anime.ts:140 | costiNoti | prezzi bassissimi | …costiNoti: 'in Barbagia gli agriturismi hanno prezzi bassissimi rispetto alla costa e la cucina migliore dell\'isola',… |
| src/content/viaggi-dati/sicilia-completa.ts:247 | valore | prezzi contenuti | …{ etichetta: 'Siti archeologici', valore: 'prezzi contenuti, con cumulativi che convengono quasi sempre' },… |
| src/content/viaggi-dati/sicilia-itinerario.ts:157 | valore | prezzi contenuti | …{ etichetta: 'Siti archeologici', valore: 'prezzi contenuti, con cumulativi che convengono quasi sempre' },… |
| src/content/viaggi-dati/venezia-3-giorni.ts:89 | valore | costa poco | …{ etichetta: 'Ingressi', valore: 'San Marco costa poco, Palazzo Ducale è cumulativo con i musei della piazza, il C… |
| **EN** (78) | | | |
| src/content/i18n/en/destinazioni/arabia-saudita.ts:40 | costi | modest tickets | …costi: "Walking around Al-Balad costs nothing; the house-museums have modest tickets. Hotels have capital-city prices.",… |
| src/content/i18n/en/destinazioni/arabia-saudita.ts:365 | costi | costs little | …: 'Diriyah has an admission ticket for At-Turaif; the National Museum costs little; the excursion to the Edge of the World 300-600 riyals depe… |
| src/content/i18n/en/destinazioni/arabia-saudita.ts:618 | costi | modest prices | …costi: 'boat trips at modest prices compared to the Egyptian Red Sea; cheap accommodation until… |
| src/content/i18n/en/destinazioni/bolivia.ts:51 | costo | Cheap ticket | …"costo": "Cheap ticket, bought at the station: fares on the official website",… |
| src/content/i18n/en/destinazioni/borneo.ts:255 | costo | low prices | …costo: 'by far the cheapest: guided treks at low prices',… |
| src/content/i18n/en/destinazioni/borneo.ts:942 | costi | costs little | …costi: 'park entrance costs little, but every cave and every guided excursion is paid separate… |
| src/content/i18n/en/destinazioni/cina.ts:757 | costi | inexpensive | …eservation; Leshan around 80 yuan; hot pot 60-120 yuan per person. An inexpensive city compared to the coast.",… |
| src/content/i18n/en/destinazioni/francia.ts:47 | costi | low prices | …s are cheap (the Picasso in Antibes and Nice's municipal museums have low prices), regional transport very cheap, lodging very expensive. Th… |
| src/content/i18n/en/destinazioni/francia.ts:394 | costi | cost little | …"High, and the item that weighs most is lodging. Individual museums cost little. The **Paris Museum Pass** for 2, 4 or 6 days pays off from… |
| src/content/i18n/en/destinazioni/francia.ts:727 | costi | modest tickets | …he batteries are not charged, while the museums and the Mémorial have modest tickets. The item that surprises is shuttle plus parking at Mont-Sa… |
| src/content/i18n/en/destinazioni/francia.ts:980 | costi | cost little | …best-known seaside resorts in August. The GR34 is free, the megaliths cost little, the ferries to the islands have modest prices.",… |
| src/content/i18n/en/destinazioni/francia.ts:980 | costi | modest prices | …4 is free, the megaliths cost little, the ferries to the islands have modest prices.",… |
| src/content/i18n/en/destinazioni/francia.ts:2203 | costi | modest tickets | …are free, the ornithological park and the walls of Aigues-Mortes have modest tickets. The main expense is horseback rides and visits to the mana… |
| src/content/i18n/en/destinazioni/germania.ts:42 | costi | affordable | …costi: "a mid-range city for Western Europe, more affordable than Paris or London: regular dinner 15-25€ per person, sin… |
| src/content/i18n/en/destinazioni/india.ts:2027 | costi | modest ticket | …costi: "Kathakali, the palace and the synagogue have modest ticket prices; rates at the ticket offices.",… |
| src/content/i18n/en/destinazioni/indonesia.ts:49 | costo | modest prices | …costo: "the cheapest: guided treks at modest prices, simple accommodation on the river",… |
| src/content/i18n/en/destinazioni/italia.ts:169 | costo | affordable | …costo: "affordable compared with hotels, but you need to book months ahead",… |
| src/content/i18n/en/destinazioni/italia.ts:1441 | costi | modest tickets | …"The Archaeological Museum and the Vesuvian sites have modest tickets compared with northern Italy. The combined ticket for Pompe… |
| src/content/i18n/en/destinazioni/italia.ts:3355 | costi | modest ticket | …"The Egyptian Museum has a modest ticket for its caliber; the **Torino+Piemonte Card** covers dozens… |
| src/content/i18n/en/destinazioni/italia.ts:3564 | costi | modest tickets | …of the Gods is free; Villa Cimbrone and Villa Rufolo in Ravello have modest tickets; ferries cost a few euros a ride and are the best investmen… |
| src/content/i18n/en/destinazioni/italia.ts:4292 | costi | modest entrance | …for the cathedral, cloister and terraces; Segesta and Selinunte have modest entrance fees; the markets cost nothing beyond what you eat.",… |
| src/content/i18n/en/destinazioni/lettonia.ts:40 | costi | inexpensive | …costi: "an inexpensive city by Western European standards: admissions, restaurants… |
| src/content/i18n/en/destinazioni/lettonia.ts:205 | costi | inexpensive | …costi: "an inexpensive trip: cheap train, free beach, cafés and restaurants on the… |
| src/content/i18n/en/destinazioni/malesia.ts:228 | costo | inexpensive | …costo: 'bus from KL, inexpensive',… |
| src/content/i18n/en/destinazioni/malesia.ts:960 | costi | low prices | …"simple chalets at low prices, return speedboat from Kuala Besut; diving at low prices.",… |
| src/content/i18n/en/destinazioni/malesia.ts:960 | costi | low prices | …e chalets at low prices, return speedboat from Kuala Besut; diving at low prices.",… |
| src/content/i18n/en/destinazioni/messico.ts:278 | costi | costs little | …'t note down my spending in Mérida; like the rest of the interior, it costs little.",… |
| src/content/i18n/en/destinazioni/peru.ts:872 | costi | costs little | …the lodge package; the domestic flight from Cusco to Puerto Maldonado costs little if booked in time.',… |
| src/content/i18n/en/destinazioni/polonia.ts:39 | costi | inexpensive | …costi: 'an inexpensive city: museums, restaurants and public transport cost less t… |
| src/content/i18n/en/destinazioni/portogallo.ts:39 | costi | inexpensive | …costi: "a still fairly inexpensive city for Western Europe, although prices are rising: simple… |
| src/content/i18n/en/paesi/emirati-arabi-uniti.ts:15 | budgetIndicativo | costs little | …he old areas to unlimited figures on the waterfront. Eating, instead, costs little: in the Indian and Pakistani neighborhoods you eat very wel… |
| src/content/i18n/en/paesi/germania.ts:15 | budgetIndicativo | inexpensive | …"even though it's in the eurozone, it's a fairly inexpensive capital compared to other big Western European cities like… |
| src/content/i18n/en/paesi/germania.ts:15 | budgetIndicativo | affordable | …cities like Paris or London: public transport and casual dining stay affordable, while tickets to the big museums (Museum Island) and some… |
| src/content/i18n/en/paesi/germania.ts:32 | costoVita | affordable | …costoVita: "Medium by Western European standards, still more affordable than Paris, London or Amsterdam: casual meal 8-15€, dinner… |
| src/content/i18n/en/paesi/italia.ts:15 | budgetIndicativo | affordable | …mid-January or late March cost forty percent less. The art cities are affordable off season, not in spring. Undiscovered Italy, on the other… |
| src/content/i18n/en/paesi/polonia.ts:32 | costoVita | modest prices | …few euros, a normal dinner 10-15€ per person, local beer or vodka at modest prices.',… |
| src/content/i18n/en/paesi/qatar.ts:15 | budgetIndicativo | cost little | …lodging costs as much as in a European capital. Museums and the souq cost little or nothing.",… |
| src/content/i18n/en/paesi/qatar.ts:30 | costoVita | cost little | …hotels and is heavily taxed. Transport, museums and neighborhood food cost little. Souq Waqif has restaurants for every budget.",… |
| src/content/i18n/en/paesi/spagna.ts:15 | budgetIndicativo | affordable | …e highest prices in Europe for lodging and flights. The Canaries stay affordable even when it is low season elsewhere. Andalusia and the Nor… |
| src/content/i18n/en/paesi/spagna.ts:32 | costoVita | affordable | …ations in Europe, while the Canaries and Andalusia in low season stay affordable all year.",… |
| src/content/i18n/en/paesi/turchia.ts:30 | costoVita | cost little | …"Street food and transport cost little; restaurants and hotels in tourist areas are by now at Ital… |
| src/content/i18n/en/esperienze/arabia-saudita.ts:49 | costo | modest tickets | …walking around the neighborhood costs nothing; the house-museums have modest tickets',… |
| src/content/i18n/en/esperienze/francia.ts:76 | costo | modest ticket | …costo: "modest ticket, among the lowest for a museum of this weight; free entry a… |
| src/content/i18n/en/esperienze/francia.ts:105 | costo | modest ticket | …costo: 'the path is free; the Jardin Exotique at the top has a modest ticket',… |
| src/content/i18n/en/esperienze/francia.ts:225 | costo | modest ticket | …costo: "modest ticket; **there's a combined ticket with the Conciergerie**, which… |
| src/content/i18n/en/esperienze/francia.ts:255 | costo | modest ticket | …as a metro ticket, and the climb to the dome of the Sacré-Cœur has a modest ticket',… |
| src/content/i18n/en/esperienze/francia.ts:346 | costo | modest tickets | …ries are **free to enter**; the museums and the Mémorial de Caen have modest tickets',… |
| src/content/i18n/en/esperienze/francia.ts:410 | costo | modest ticket | …costo: 'modest ticket, with combined tickets for the museums of Bayeux',… |
| src/content/i18n/en/esperienze/francia.ts:603 | costo | modest price | …costo: 'bike rental at a modest price, with a supplement for one-way drop-off',… |
| src/content/i18n/en/esperienze/francia.ts:627 | costo | modest price | …costo: 'tasting at a modest price, often free if you buy',… |
| src/content/i18n/en/esperienze/francia.ts:821 | costo | modest price | …: 'looking from the road is free; some distilleries offer visits at a modest price',… |
| src/content/i18n/en/esperienze/francia.ts:919 | costo | modest price | …costo: 'modest price for an hour, higher for a half-day excursion',… |
| src/content/i18n/en/esperienze/francia.ts:943 | costo | modest ticket | …costo: 'modest ticket',… |
| src/content/i18n/en/esperienze/francia.ts:967 | costo | modest ticket | …costo: 'modest ticket to climb the walls',… |
| src/content/i18n/en/esperienze/francia.ts:991 | costo | modest ticket | …costo: 'modest ticket or free depending on the site',… |
| src/content/i18n/en/esperienze/francia.ts:1015 | costo | modest price | …costo: 'bike rental at a modest price; boat rental (by the week or by the day) at a medium-high p… |
| src/content/i18n/en/esperienze/italia.ts:328 | costo | modest ticket | …costo: 'modest ticket, with guided tour included',… |
| src/content/i18n/en/esperienze/italia.ts:419 | costo | modest entrance | …costo: 'modest entrance to the gorge; the guided route beyond the first stretch has… |
| src/content/i18n/en/esperienze/italia.ts:542 | costo | modest ticket | …costo: 'modest ticket relative to the level of the collection; included in the To… |
| src/content/i18n/en/esperienze/italia.ts:756 | costo | modest prices | …costo: 'tastings with modest prices compared to the great continental denominations',… |
| src/content/i18n/en/viaggi-dati/andalusia-itinerario.ts:145 | valore | inexpensive | …and meals', valore: 'around the Spanish average; the tapeo remains an inexpensive way to have dinner at every stop' },… |
| src/content/i18n/en/viaggi-dati/arabia-saudita-itinerario.ts:44 | costiNoti | modest tickets | …intensita: 'medio', costiNoti: 'free neighborhood; house-museums with modest tickets', destinazioneSlug: 'jeddah', immagine: '/images/viaggi/ara… |
| src/content/i18n/en/viaggi-dati/arabia-saudita-itinerario.ts:59 | valore | low prices | …{ etichetta: 'Three domestic flights', valore: 'Saudia and flynas, low prices but they add up' },… |
| src/content/i18n/en/viaggi-dati/berlino-weekend.ts:92 | valore | affordable | …ichetta: 'Accommodation', valore: 'mid-range for Western Europe, more affordable than Paris or London' },… |
| src/content/i18n/en/viaggi-dati/castelli-loira.ts:105 | valore | modest price | …{ etichetta: 'Bike rental', valore: 'modest price, supplement for one-way pickup' },… |
| src/content/i18n/en/viaggi-dati/costa-azzurra.ts:129 | valore | modest tickets | …tichetta: 'Museums', valore: 'Musée Picasso and Fondation Maeght have modest tickets' },… |
| src/content/i18n/en/viaggi-dati/costiera-e-isole.ts:76 | costiNoti | modest ticket | …costiNoti: 'Villa Rufolo and Villa Cimbrone have modest ticket prices',… |
| src/content/i18n/en/viaggi-dati/eolie-in-vela.ts:139 | valore | cost little | …valore: 'low: the Aeolian Archaeological Museum and the Gran Cratere cost little' },… |
| src/content/i18n/en/viaggi-dati/lisbona-weekend.ts:90 | valore | relatively cheap | …{ etichetta: 'Accommodation', valore: 'still relatively cheap for Western Europe, rising under the pressure of tourism' }… |
| src/content/i18n/en/viaggi-dati/normandia-bretagna.ts:169 | valore | modest ticket | …eums and sites', valore: 'mostly free, with the Mémorial de Caen at a modest ticket' },… |
| src/content/i18n/en/viaggi-dati/rotte-dei-vini-francia.ts:127 | valore | low price | …{ etichetta: 'Bike rental', valore: 'low price for the day in Alsace' },… |
| src/content/i18n/en/viaggi-dati/sardegna-due-anime.ts:133 | costiNoti | low prices | …costiNoti: "in the Barbagia the agriturismi have very low prices compared with the coast and the best cooking on the island"… |
| src/content/i18n/en/viaggi-dati/sardegna-due-anime.ts:205 | valore | modest fees | …{ etichetta: 'Capped-entry beaches', valore: "modest fees, but they must be booked months ahead in high season" },… |
| src/content/i18n/en/viaggi-dati/sicilia-completa.ts:240 | valore | low prices | …{ etichetta: 'Archaeological sites', valore: "low prices, with combined tickets that almost always pay off" },… |
| src/content/i18n/en/viaggi-dati/sicilia-itinerario.ts:150 | valore | low prices | …{ etichetta: 'Archaeological sites', valore: "low prices, with combined tickets that almost always pay off" },… |
| src/content/i18n/en/viaggi-dati/venezia-3-giorni.ts:82 | valore | costs little | …{ etichetta: 'Admissions', valore: "San Marco costs little, the Doge's Palace is combined with the square's museums, t… |
| **ES** (70) | | | |
| src/content/i18n/es/destinazioni/arabia-saudita.ts:365 | costi | cuesta poco | …costi: "Diriyah tiene una entrada para At-Turaif; el Museo Nacional cuesta poco; la excursión al Edge of the World 300-600 riales según la… |
| src/content/i18n/es/destinazioni/arabia-saudita.ts:618 | costi | precios contenidos | …costi: "salidas en barca a precios contenidos comparados con el Mar Rojo egipcio; alojamiento económico h… |
| src/content/i18n/es/destinazioni/borneo.ts:255 | costo | precios bajos | …costo: "con diferencia el más económico: trekkings guiados a precios bajos",… |
| src/content/i18n/es/destinazioni/borneo.ts:942 | costi | cuesta poco | …costi: "la entrada al parque cuesta poco, pero cada cueva y cada excursión guiada se paga aparte; la… |
| src/content/i18n/es/destinazioni/cina.ts:43 | costi | cuesta poco | …trada a la Muralla 40-45 yuanes más teleférico donde lo hay. El metro cuesta pocos yuanes por viaje.",… |
| src/content/i18n/es/destinazioni/corea-del-sud.ts:43 | costi | cuesta poco | …la entrada combinada para cuatro palacios más el santuario de Jongmyo cuesta poco más de 10.000 won. Metro algo más de un euro, comidas 6-15… |
| src/content/i18n/es/destinazioni/francia.ts:47 | costi | cuestan poco | …a; de octubre a marzo los precios vuelven a la normalidad. Los museos cuestan poco (el Picasso de Antibes y los museos municipales de Niza tie… |
| src/content/i18n/es/destinazioni/francia.ts:47 | costi | precios contenidos | …n poco (el Picasso de Antibes y los museos municipales de Niza tienen precios contenidos), el transporte regional poquísimo, los alojamientos mucho.… |
| src/content/i18n/es/destinazioni/francia.ts:394 | costi | cuestan poco | …ltos, y la partida que más pesa es el alojamiento. Los museos sueltos cuestan poco. El **Paris Museum Pass** de 2, 4 o 6 días compensa a parti… |
| src/content/i18n/es/destinazioni/francia.ts:980 | costi | cuestan poco | …es de mar más conocidas en agosto. El GR34 es gratuito, los megalitos cuestan poco, los ferris a las islas tienen precios contenidos.",… |
| src/content/i18n/es/destinazioni/francia.ts:980 | costi | precios contenidos | …s gratuito, los megalitos cuestan poco, los ferris a las islas tienen precios contenidos.",… |
| src/content/i18n/es/destinazioni/india.ts:2024 | costi | entradas modestas | …costi: "Kathakali, palacio y sinagoga tienen entradas modestas; tarifas en las taquillas.",… |
| src/content/i18n/es/destinazioni/indonesia.ts:49 | costo | precios contenidos | …costo: "el más barato: trekkings guiados a precios contenidos, alojamientos sencillos junto al río",… |
| src/content/i18n/es/destinazioni/italia.ts:169 | costo | asequible | …costo: "asequible comparado con los hoteles, pero hay que reservar con meses… |
| src/content/i18n/es/destinazioni/italia.ts:3564 | costi | cuestan poco | …one y Villa Rufolo en Ravello tienen entradas contenidas; los ferries cuestan pocos euros por tramo y son la mejor inversión del viaje.",… |
| src/content/i18n/es/destinazioni/italia.ts:3768 | costi | cuestan poco | …de Italia. Ischia tiene precios normales, Procida bajos. Los ferries cuestan pocos euros; la Gruta Azul requiere entrada más el paso en la ba… |
| src/content/i18n/es/destinazioni/malesia.ts:41 | costi | cuesta poco | …es Islámicas con entrada (tarifas en la web del museo). El transporte cuesta pocos ringgit.",… |
| src/content/i18n/es/destinazioni/malesia.ts:960 | costi | precios bajos | …"chalets sencillos a precios bajos, lancha rápida de ida y vuelta desde Kuala Besut; inmersion… |
| src/content/i18n/es/destinazioni/malesia.ts:960 | costi | precios bajos | …bajos, lancha rápida de ida y vuelta desde Kuala Besut; inmersiones a precios bajos.",… |
| src/content/i18n/es/destinazioni/messico.ts:278 | costi | cuesta poco | …costi: 'No apunté los gastos de Mérida; como el resto del interior, cuesta poco.',… |
| src/content/i18n/es/destinazioni/peru.ts:872 | costi | cuesta poco | …es el paquete del lodge; el vuelo interno de Cusco a Puerto Maldonado cuesta poco si se reserva con tiempo.",… |
| src/content/i18n/es/destinazioni/qatar.ts:41 | costi | cuesta poco | …acional tienen entradas contenidas; el Souq Waqif es gratis; el metro cuesta pocos riyales. Con el programa de escala el hotel parte de cifra… |
| src/content/i18n/es/destinazioni/singapore.ts:207 | costi | cuesta poco | …los templos no hay entrada y una comida completa en un centro hawker cuesta pocos euros. Es el Singapur que se puede hacer con poco dinero."… |
| src/content/i18n/es/paesi/emirati-arabi-uniti.ts:15 | budgetIndicativo | cuesta poco | …as viejas a cifras sin límite en el paseo marítimo. Comer, en cambio, cuesta poco: en los barrios indios y paquistaníes se come muy bien por… |
| src/content/i18n/es/paesi/guatemala.ts:31 | costoVita | cuestan poco | …e Centroamérica: una cama en un hostal y las comidas en los comedores cuestan pocos euros, los shuttles entre las paradas principales sobre lo… |
| src/content/i18n/es/paesi/italia.ts:15 | budgetIndicativo | asequibles | …ciento menos. Las ciudades de arte fuera de temporada tienen precios asequibles, en primavera no. La Italia inexplorada, en cambio, siempre… |
| src/content/i18n/es/paesi/polonia.ts:32 | costoVita | precios contenidos | …pocos euros, cena normal 10-15 € por persona, cerveza o vodka local a precios contenidos.",… |
| src/content/i18n/es/paesi/qatar.ts:15 | budgetIndicativo | cuestan poco | …lojamientos cuestan como en una capital europea. Los museos y el zoco cuestan poco o nada.",… |
| src/content/i18n/es/paesi/qatar.ts:30 | costoVita | cuestan poco | …s y está muy gravado. El transporte, los museos y la comida de barrio cuestan poco. El zoco Waqif tiene restaurantes para todos los bolsillos.… |
| src/content/i18n/es/paesi/singapore.ts:15 | budgetIndicativo | cuesta poco | …itación decente) y en alcohol, muy gravado. El transporte, en cambio, cuesta pocos céntimos y una comida completa en un centro de hawkers est… |
| src/content/i18n/es/paesi/singapore.ts:31 | costoVita | cuesta poco | …en un bar cuesta fácilmente 12-15 euros), mientras que el transporte cuesta pocos céntimos y los centros de hawkers sirven platos completos… |
| src/content/i18n/es/paesi/spagna.ts:15 | budgetIndicativo | asequibles | …s altos de Europa en alojamiento y vuelos. Las Canarias siguen siendo asequibles incluso cuando en otros sitios es temporada baja. Andalucía… |
| src/content/i18n/es/paesi/turchia.ts:30 | costoVita | cuestan poco | …'La comida callejera y el transporte cuestan poco; restaurantes y hoteles en las zonas turísticas están ya a… |
| src/content/i18n/es/esperienze/bulgaria.ts:14 | costo | precios bajos | …0 € (hasta un 25 % menos comprándolo en línea); alquiler del equipo a precios bajos en las tiendas del centro',… |
| src/content/i18n/es/esperienze/cina.ts:353 | costo | cuesta poco | …ico sobre el Yangtsé, que da otra perspectiva de la ciudad iluminada, cuesta pocos yuanes',… |
| src/content/i18n/es/esperienze/francia.ts:76 | costo | entrada económica | …costo: 'entrada económica, de las más bajas para un museo de este peso; gratuidad y r… |
| src/content/i18n/es/esperienze/francia.ts:105 | costo | entrada económica | …osto: 'el sendero es gratuito; el Jardin Exotique de arriba tiene una entrada económica',… |
| src/content/i18n/es/esperienze/francia.ts:165 | costo | precio contenido | …costo: 'ferri de ida y vuelta a precio contenido; entrada al fuerte y al museo de Sainte-Marguerite de pago;… |
| src/content/i18n/es/esperienze/francia.ts:225 | costo | entrada económica | …costo: 'entrada económica; **hay una entrada conjunta con la Conciergerie**, que está… |
| src/content/i18n/es/esperienze/francia.ts:255 | costo | entrada económica | …un billete de metro, y la subida a la cúpula del Sacré-Cœur tiene una entrada económica',… |
| src/content/i18n/es/esperienze/francia.ts:346 | costo | entradas económicas | …ías son **de entrada libre**; los museos y el Mémorial de Caen tienen entradas económicas',… |
| src/content/i18n/es/esperienze/francia.ts:410 | costo | entrada económica | …costo: 'entrada económica, con entradas conjuntas para los museos de Bayeux',… |
| src/content/i18n/es/esperienze/francia.ts:603 | costo | precio contenido | …costo: 'alquiler de bici a precio contenido, con un suplemento por la devolución en sentido único',… |
| src/content/i18n/es/esperienze/francia.ts:627 | costo | precio contenido | …costo: 'cata a precio contenido, a menudo gratuita si se compra',… |
| src/content/i18n/es/esperienze/francia.ts:821 | costo | precio contenido | …r desde la carretera es gratis; algunas destilerías ofrecen visitas a precio contenido',… |
| src/content/i18n/es/esperienze/francia.ts:919 | costo | precio contenido | …costo: 'precio contenido por una hora, más alto para una excursión de media jornada'… |
| src/content/i18n/es/esperienze/francia.ts:943 | costo | entrada económica | …costo: 'entrada económica',… |
| src/content/i18n/es/esperienze/francia.ts:967 | costo | entrada económica | …costo: 'entrada económica para subir a las murallas',… |
| src/content/i18n/es/esperienze/francia.ts:991 | costo | entrada económica | …costo: 'entrada económica o gratuita según el sitio',… |
| src/content/i18n/es/esperienze/francia.ts:1015 | costo | precio contenido | …costo: 'alquiler de bici a precio contenido; alquiler de barco (por semana o por día) a precio medio-al… |
| src/content/i18n/es/esperienze/italia.ts:176 | costo | entradas económicas | …costo: "entradas económicas para San Clemente y las Casas Romanas; la Domus Aurea tiene… |
| src/content/i18n/es/esperienze/italia.ts:328 | costo | entrada económica | …costo: "entrada económica, con visita guiada incluida",… |
| src/content/i18n/es/esperienze/italia.ts:357 | costo | cuesta poco | …costo: "una margarita en una pizzería de barrio cuesta pocos euros: en Nápoles la pizza es comida popular, no un plato… |
| src/content/i18n/es/esperienze/italia.ts:419 | costo | entrada económica | …costo: "entrada económica a la garganta; el recorrido guiado más allá del primer tram… |
| src/content/i18n/es/esperienze/italia.ts:542 | costo | entrada económica | …costo: "entrada económica en relación con el nivel de la colección; incluida en la To… |
| src/content/i18n/es/viaggi-dati/arabia-saudita-itinerario.ts:59 | valore | precios bajos | …{ etichetta: 'Tres vuelos internos', valore: 'Saudia y flynas, precios bajos pero que hay que sumar' },… |
| src/content/i18n/es/viaggi-dati/castelli-loira.ts:105 | valore | precio contenido | …{ etichetta: 'Alquiler de bici', valore: 'precio contenido, suplemento por la recogida en sentido único' },… |
| src/content/i18n/es/viaggi-dati/costa-azzurra.ts:129 | valore | entradas económicas | …etichetta: 'Museos', valore: 'Musée Picasso y Fondation Maeght tienen entradas económicas' },… |
| src/content/i18n/es/viaggi-dati/costiera-e-isole.ts:76 | costiNoti | entradas económicas | …costiNoti: "Villa Rufolo y Villa Cimbrone tienen entradas económicas",… |
| src/content/i18n/es/viaggi-dati/eolie-in-vela.ts:139 | valore | cuestan poco | …adas', valore: "bajas: el Museo Arqueológico Eoliano y el Gran Cráter cuestan poco" },… |
| src/content/i18n/es/viaggi-dati/grandi-citta-italia.ts:77 | costiNoti | entrada económica | …costiNoti: 'San Clemente con entrada económica; Vía Apia Antigua gratuita',… |
| src/content/i18n/es/viaggi-dati/napoli-3-giorni.ts:80 | valore | cuesta poco | …: 'bajísimas respecto al resto de Italia: el Caravaggio del Pio Monte cuesta pocos euros' },… |
| src/content/i18n/es/viaggi-dati/normandia-bretagna.ts:169 | valore | entrada económica | …embarco', valore: 'en gran parte gratuitos, con el Mémorial de Caen a entrada económica' },… |
| src/content/i18n/es/viaggi-dati/provenza-camargue.ts:149 | valore | entradas económicas | …{ etichetta: 'Pont du Gard y Nimes', valore: 'entradas económicas, hay entradas combinadas' },… |
| src/content/i18n/es/viaggi-dati/rotte-dei-vini-francia.ts:127 | valore | precio contenido | …{ etichetta: 'Alquiler de bici', valore: 'precio contenido para el día en Alsacia' },… |
| src/content/i18n/es/viaggi-dati/sicilia-completa.ts:240 | valore | precios contenidos | …{ etichetta: 'Sitios arqueológicos', valore: 'precios contenidos, con entradas combinadas que casi siempre compensan' },… |
| src/content/i18n/es/viaggi-dati/sicilia-itinerario.ts:150 | valore | precios contenidos | …{ etichetta: 'Sitios arqueológicos', valore: 'precios contenidos, con entradas combinadas que casi siempre compensan' },… |
| src/content/i18n/es/viaggi-dati/venezia-3-giorni.ts:82 | valore | cuesta poco | …{ etichetta: 'Entradas', valore: 'San Marcos cuesta poco, el Palacio Ducal es combinado con los museos de la plaza,… |
