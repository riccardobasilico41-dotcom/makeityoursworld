# Da confermare

## Pagine legali (30/10/2026)

Pagine nuove: `/privacy`, `/cookie`, `/trasparenza` (link nel footer). Finché i dati mancano, le pagine mostrano un segnaposto rosso evidente.

- [ ] **Email pubblica**: compilare `siteConfig.contact.email` in `src/lib/site-config.ts` (oggi in privacy e trasparenza compare «[email da inserire]»). Serve per l'esercizio dei diritti GDPR e per le collaborazioni.
- [ ] **Indirizzo / recapito del titolare**: compilare `siteConfig.titolare.indirizzo` (oggi «[indirizzo da inserire]» nell'informativa privacy). Basta un recapito a cui si possa scrivere; valutare se usare un domicilio diverso dalla residenza.
- [ ] **Fornitore della casella email**: l'informativa cita genericamente «il fornitore della casella di posta». Quando l'email esiste, si può nominare (es. Google, Proton…).
- [ ] **Conservazione email**: scritto «al più tardi entro 24 mesi dall'ultimo scambio». Confermare o cambiare.
- [ ] **Iscrizione ai programmi di affiliazione**: Booking.com, Trip.com, GetYourGuide, Viator, Amazon EU Associates, Heymondo, Airalo, Holafly, DiscoverCars, Skyscanner. Dopo l'iscrizione incollare gli ID in `src/lib/affiliazioni.ts`. Se un programma non viene attivato o se ne aggiunge uno, aggiornare l'elenco in `src/app/trasparenza/page.tsx` (e i nomi citati in privacy e cookie).
- [ ] **Amazon**: la frase obbligatoria «In qualità di Affiliato Amazon io ricevo un guadagno dagli acquisti idonei.» è già in `/trasparenza`; controllare che le regole del programma non chiedano di metterla anche altrove (es. vicino ai link o nel footer).
- [ ] **Contenuti sponsorizzati**: la pagina dice che oggi non ce ne sono. Se uno esiste già, correggere e etichettarlo.
- [ ] **Prima di aggiungere analytics, pubblicità, newsletter, modulo contatti, mappe o video incorporati**: riscrivere privacy e cookie policy (e aggiornare la data «Ultimo aggiornamento»), e valutare il banner cookie con consenso preventivo.
- [ ] **Dominio makeityoursworld.com**: quando è attivo, le pagine si aggiornano da sole (usano `siteConfig.url`); ricontrollare solo il testo.
