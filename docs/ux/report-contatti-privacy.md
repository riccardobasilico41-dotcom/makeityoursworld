# Contatti, privacy e pagine istituzionali — 6 novembre 2026

## Contatti
- Config tipizzata in `src/lib/site-config.ts`: `contact { email, phone, address, bookingUrl, social, contactEnabled: false }`, `titolare { nome, indirizzo, emailPrivacy, partitaIva }`, `funzioni { moduloDomande: false }`; valori derivati `emailPubblica`, `bookingPubblico`, `socialPubblici`, `emailPrivacy`, `datiTitolareMancanti`, `domandeAttive`.
- Tolti «[email da inserire]» da Lavoriamo insieme, Privacy, Trasparenza (it/en/es). Nessun `href="#"`, mailto vuoto o example.com nel sorgente o sul live.
- «Lavoriamo insieme»: servizi chiari (consulenza itinerario, itinerari per gruppi, guide PDF, collaborazioni), riquadro «Cosa non faccio» (niente pacchetti/prenotazioni), nessun pulsante finché i contatti sono spenti: «I contatti saranno disponibili a breve». Tolta la card delle liste Google Maps (prodotto inesistente).

## Domande sotto i viaggi
- Salvano nome, testo, lingua, viaggio, data su Vercel Blob privato; niente email; IP solo come hash in memoria per il limite di invii.
- `domandeAttive = funzioni.moduloDomande && titolare completo`, spento di default: modulo sostituito da una frase, domande pubblicate visibili, server rifiuta gli invii, moderazione con avviso.

## Privacy e cookie (verificati su codice e live)
- Cookie `lingua` (1 anno, scritto dal selettore, non letto) e `domande_admin` (solo moderazione); localStorage `miy-salvati`, `miy-valigia:<lista>`; sessionStorage `marchio`, `intro-vista`; nessuna statistica né script/iframe/font esterni.
- Cookie policy con tabella completa (array `VOCI`), nessun banner necessario. Privacy con riquadro «Dati del titolare ancora mancanti» letto dalla config; tolte regione Blob non verificata e frase sul DPO.

## Pagine istituzionali
- Come lavoro: tolta «dico se ci sono stato o no»; testo di riferimento sull'autenticità + itinerari che combinano più viaggi.
- Chi sono: aggiunta la stessa frase; qualifiche già confermate da Riccardo lasciate.
- Trasparenza: stato reale di ogni affiliazione (ID oggi vuoti); frase Amazon solo con tag compilato.
- Crediti fotografici: 1117 crediti completi, raggruppati; +11 foto Unsplash in `src/content/altre-foto-crediti.ts`; link ai crediti nel footer. Asset senza origine in `docs/ux/foto-senza-origine.md`.

## Da sistemare altrove
- `OrganizzaViaggio.tsx` dichiara sempre «link affiliati»: renderlo condizionale su `affiliazioniAttive`.
- Ogni nuova voce salvata nel browser va aggiunta a `VOCI` della cookie policy.

## Manca dal titolare
1. Recapito privacy (`titolare.emailPrivacy` o `contact.email` con `contactEnabled: true`).
2. Indirizzo o sede.
3. Conferma «persona fisica a titolo personale»; con affiliazioni o consulenze attive probabilmente P.IVA e revisione legale.
4. Email pubblica, eventuale pagina di prenotazione, social.
5. Regione dello store Vercel Blob.
6. Origine delle foto elencate e riconferma delle qualifiche in «Chi sono».
Le domande si riaprono con `moduloDomande = true` dopo i punti 1 e 2.
