import type { Paese } from '@/lib/types'

// Terza e ultima tappa dell'itinerario combinato "Capitali baltiche in 9
// giorni" (src/content/viaggi/61-capitali-baltiche.md). Stesso trattamento
// delle altre due schede baltiche: nessuna destinazione o esperienza è stata
// vissuta di persona, visitataPersonalmente resta false e miaEsperienza è
// assente di proposito. tripPrincipaleSlug punta all'itinerario combinato,
// come su lituania.ts e lettonia.ts.

export const estonia: Paese = {
  slug: 'estonia',
  nome: 'Estonia',
  continente: 'Europa',
  titolo: 'Estonia: la Tallinn medievale, il parco di Kadriorg e il contrasto di Telliskivi',
  descrizione:
    'Tallinn ha uno dei centri storici medievali meglio conservati del nord Europa, patrimonio UNESCO: parte dalla collina di Toompea e scende nella città bassa dei mercanti anseatici. A pochi minuti di tram ci sono il parco e il palazzo barocco di Kadriorg, voluti da Pietro il Grande, che raccontano l\'Estonia zarista. Poco più in là l\'ex complesso industriale sovietico di Telliskivi è oggi il quartiere creativo più vivo della città. L\'Estonia ha costruito la propria immagine attorno al digitale più di qualunque altro paese europeo: qui è nato Skype, e qui per la prima volta al mondo è stata offerta la e-Residency, un\'identità digitale per chiunque voglia aprire un\'impresa europea online. Sul sito l\'Estonia è la terza e ultima tappa dell\'itinerario combinato delle tre capitali baltiche, dopo Vilnius e Riga.',
  periodoMigliore:
    'maggio-settembre. Giugno-agosto è il periodo più caldo, con le giornate più lunghe (quasi 19 ore di luce a fine giugno), ma anche il più affollato nella Città Vecchia; maggio e settembre restano miti e con meno turisti. Da novembre a marzo fa molto freddo, spesso sotto zero, e da dicembre a febbraio nevica spesso. La Città Vecchia innevata e i mercatini di Natale hanno comunque il loro fascino.',
  durataConsigliata:
    '3 giorni per Tallinn, la Città Vecchia, Toompea, Kadriorg e Telliskivi, come tappa finale di un itinerario più ampio da Vilnius e Riga.',
  budgetIndicativo:
    'un po\' più caro di Vilnius e Riga, ma ancora contenuto per gli standard nordici: pasto normale 10-18€, ingresso alle quattro torri delle mura cittadine 12€, ingresso al museo Kumu di Kadriorg 12-16€ secondo la mostra.',
  stileViaggio: ['città', 'storia', 'architettura', 'innovazione'],
  scheda: {
    documenti:
      'L\'Estonia è nell\'Unione Europea, nell\'area Schengen e nell\'eurozona: ai cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i novanta giorni.',
    valuta: 'Euro, dal 2011: la prima delle tre capitali baltiche ad adottarlo, prima di Lettonia (2014) e Lituania (2015).',
    pagamenti:
      'È il paese più avanzato al mondo per pagamenti e servizi digitali: carta e contactless si usano quasi ovunque, dai mercati ai bus, e il contante serve poco anche per i piccoli acquisti.',
    connettivita: 'Con una SIM italiana il roaming UE è incluso nelle tariffe normali. Ottima copertura 4G/5G a Tallinn e sulla costa.',
    salute: 'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto potabile a Tallinn.',
    sicurezza:
      'Tallinn è una capitale sicura per gli standard europei; nella Città Vecchia più turistica basta la normale attenzione ai borseggi. A est l\'Estonia confina con la Russia lungo il fiume Narva: quella zona di frontiera, all\'estremo nord-est del paese, resta fuori da questo itinerario, che si concentra su Tallinn e sul collegamento in bus da Riga.',
    trasportiInterni:
      'Il centro storico si gira tutto a piedi. Tram e bus della rete Tallinna Linnatransport (gratuiti per i residenti registrati, a pagamento per i visitatori, con biglietti economici) collegano Kadriorg e Telliskivi al centro in pochi minuti. L\'auto a noleggio non serve.',
    costoVita:
      'È il più caro dei tre Baltici, ma resta ben sotto le capitali nordiche trattate altrove su questo sito (Oslo, Stoccolma, Reykjavík): pasto in un locale informale 10-15€, cena normale 15-20€ a testa.',
    lingua:
      'Estone, lingua ugrofinnica. È imparentata con il finlandese (i due popoli, vicini da sempre, si capiscono solo in parte) e non ha nulla a che vedere con il lituano e il lettone, che appartengono alla famiglia linguistica baltica. Fra le tre capitali di questo itinerario è la differenza linguistica più netta. Alfabeto latino con lettere proprie (õ, ä, ö, ü). L\'inglese è molto diffuso a Tallinn, specie tra i giovani, anche grazie alla forte scena tech del paese.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano senza problemi.',
    fusoOrario: 'UTC+2 in inverno, UTC+3 in estate (EET/EEST): un\'ora avanti rispetto all\'Italia tutto l\'anno, come Lettonia e Lituania.',
    clima:
      'Continentale umido, il più fresco dei tre Baltici perché è il più a nord e si affaccia sul Golfo di Finlandia. Inverni freddi e bui, spesso sotto zero da dicembre a febbraio; estati miti, con giornate lunghissime intorno al solstizio.',
    festivita:
      'Il Festival della Canzone estone (Laulupidu), patrimonio culturale immateriale UNESCO insieme a quelli di Lettonia e Lituania, si tiene ogni cinque anni e riunisce decine di migliaia di coristi. Il 24 giugno si festeggia Jaanipäev (San Giovanni), la festa più sentita del paese, con falò fino a notte fonda. A dicembre in Piazza del Municipio c\'è uno dei mercatini di Natale più noti del nord Europa.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Tallinn.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Panorama della Città Vecchia di Tallinn tra il verde, con le torri medievali, i tetti rossi e la guglia di Sant\'Olaf, e il mare sullo sfondo',
  heroImage: '/images/estonia/estonia-paese.jpg',
  tripPrincipaleSlug: 'capitali-baltiche',
}
