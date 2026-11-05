# Verifica mini guide: Sud America (Perù, Brasile, Bolivia)

Data: 05/11/2026. Correzioni fatte in it, en ed es.

Limite: il budget di ricerche web della sessione è finito a metà lavoro. Ho verificato prezzi, orari e URL dei luoghi principali (quelli chiesti più alcuni altri). Gran parte dei campi `quando` descrittivi («mattina», «tramonto») e dei testi storici resta da controllare in un secondo giro. Non ho aggiunto luoghi nuovi.

## Brasile

Corretto:
- **Iguazú, lato brasiliano**: 134 R$ per gli stranieri e 121 R$ per brasiliani e Mercosur, in vigore dal 19/12/2025. Ho messo lo stesso dato nella scheda (`costo`), nel campo `costi` di brasile.ts (prima diceva «100-110 R$»), nel viaggio `68-brasile-itinerario.md` (prima «circa 130 R$»), in `viaggi-dati/brasile-itinerario.ts` e nelle copie en/es di tutti e tre. Ho aggiornato anche la nota di redazione del viaggio.
- **Iguazú, orari** (`quando`): tutti i giorni, 9-16 dal lunedì al venerdì, 8.30-16 il sabato e la domenica.
- **Iguazú, lato argentino** nel campo `costi`: 60.000 pesos per gli stranieri non residenti (circa 40 $), dal 1/6/2026. Prima diceva «35-45 dollari».
- **Cristo Redentor**: 87 R$ con la van dal centro visitatori Paineiras, 132 R$ con la van da Copacabana o Largo do Machado, 134 R$ con il trenino. Il prezzo è unico tutto l'anno (2026). Prima `costi` diceva «85-90». Il viaggio diceva già 87, quindi non l'ho toccato.
- **Pão de Açúcar** nel campo `costi`: 205 R$ il biglietto intero. Prima diceva «180-200».
- **Lençóis Maranhenses** nel campo `costi`: ingresso gratuito e concessione ritirata, come già scritto nel viaggio. Prima parlava di un «piano di concessione in corso».

Fonti:
- https://www.h2foz.com.br/turismo/passeios/ingressos-cataratas-do-iguacu-reajuste-dezembro-2025/
- https://www.cataratasdoiguacu.com.br/ (orari)
- https://www.melhoresdestinos.com.br/cristo-redentor-rio-de-janeiro.html (27/05/2026)
- https://travel.com.br/novidades/ingresso-lado-argentino-cataratas-do-iguacu/

## Perù

Corretto:
- **Machu Picchu**: 152 soles per gli stranieri adulti sui circuiti senza montagna e 200 sulle rutas di montagna (Huayna Picchu 3-A, Montaña 1-A, Gran Caverna 3-C). Ci sono 3 circuiti e 10 rutas. Il tetto giornaliero è di 4.500 ingressi, 5.600 in alta stagione. Ho aggiunto che dal 1/5/2026 è stato annunciato un aumento di 11 soles per gli stranieri adulti (163 sui circuiti senza montagna). Non sono riuscito a confermare la cifra finale su tuboleto.cultura.pe, perché la pagina si carica con JavaScript: per questo il testo invita a controllarla al momento dell'acquisto.
- **Boleto Turístico del Cusco**: 130 soles per gli stranieri, valido 10 giorni, 16 siti; i biglietti parziali costano 70 soles. È il tariffario ufficiale COSITUC. Ho tolto la dicitura «dato di novembre 2025».
- **URL**: cosituc.gob.pe ora fa un redirect, quindi l'ho sostituito con https://cosituccusco.pe/tarifario/ (risponde 200).
- **Saline di Maras**: ho tolto «circa 10 soles». Gli operatori indicano 20 soles, ma non ho trovato una fonte ufficiale. Ora il testo dice «biglietto a parte, in contanti all'ingresso».
- **Choquequirao**: ho tolto «circa 60 soles», che non ho potuto verificare. Ora il testo dice che l'ingresso si paga al posto di controllo.
- **Monastero di Santa Catalina**: 50 soles per gli stranieri adulti. Aperto tutti i giorni 9-17, il martedì e il mercoledì fino alle 20 (ultimo ingresso alle 19). Chiuso il Venerdì Santo, il 25/12 e l'1/1. Serve il passaporto.

Lasciato com'era, perché verificato:
- Cammino Inca chiuso a febbraio.
- Bus Consettur circa 24 $ andata e ritorno.

Fonti:
- https://cosituccusco.pe/tarifario/
- https://andina.pe/ingles/noticia-planning-to-visit-machu-picchu-in-2026-check-out-new-ticket-rates-and-visitor-limits-1050546.aspx
- https://www.primicias.ec/internacional/machu-picchu-entradas-precios-turistas-peru-mayo2026-115604/
- https://trexperienceperu.com/blog/machu-picchu-tickets-guide
- https://www.santacatalina.org.pe/horarios-y-precios

## Bolivia

Corretto:
- **Mi Teleférico**: 3 bolivianos a corsa, meno di mezzo euro. Prima diceva «pochi centesimi». Ho aggiunto l'URL ufficiale https://www.miteleferico.bo/.
- **Uyuni**: la riserva Eduardo Avaroa costa circa 150 bolivianos e Isla Incahuasi circa 30, da pagare in contanti. Sono dati degli operatori: non ho trovato un tariffario SERNAP, quindi il testo li segna «da riconfermare».

Fonti:
- https://www.cadena3.com/noticia/mundo/bolivia-el-teleferico-la-paz-y-el-alto-supera-los-640-millones-de-usuarios_460470
- https://boliviatravelsite.com/tourist-attractions/potosi/eduardo-avaroa-reserve

## Controlli

- `npx tsc --noEmit`: nessun errore nei file di Perù, Brasile e Bolivia. Gli unici errori sono in `francia.ts`, che è il file di un altro gruppo.
