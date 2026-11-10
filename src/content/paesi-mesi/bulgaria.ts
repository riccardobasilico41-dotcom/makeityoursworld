import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'bulgaria',
  zona: {"it": "Tutto il Paese (temperature di Sofia; sul Mar Nero d'estate 2-3 °C in più, a Bansko d'inverno molto più freddo)", "en": "Whole country (Sofia temperatures; the Black Sea is 2-3 °C warmer in summer, Bansko much colder in winter)", "es": "Todo el país (temperaturas de Sofía; en el mar Negro 2-3 °C más en verano, en Bansko mucho más frío en invierno)"},
  mesi: [
    { voto: 'buono', tmax: 3, tmin: -4, pioggia: 'poca', nota: {"it": "Inverno da sci: Bansko, Borovets e Pamporovo; città fredde e grigie", "en": "Ski winter: Bansko, Borovets and Pamporovo; cities cold and grey", "es": "Invierno de esquí: Bansko, Borovets y Pamporovo; ciudades frías y grises"} },
    { voto: 'buono', tmax: 6, tmin: -3, pioggia: 'poca', nota: {"it": "Piena stagione sciistica, neve sicura anche con l'innevamento artificiale", "en": "Peak ski season, snow guaranteed thanks to snowmaking", "es": "Plena temporada de esquí, nieve asegurada con cañones"} },
    { voto: 'buono', tmax: 11, tmin: 1, pioggia: 'media', nota: {"it": "Ultime settimane buone per sciare, città ancora fresche", "en": "Last good weeks for skiing, cities still cool", "es": "Últimas semanas buenas para esquiar, ciudades aún frescas"} },
    { voto: 'buono', tmax: 17, tmin: 5, pioggia: 'media', nota: {"it": "Sci fino a metà aprile a Bansko; Sofia e Plovdiv in fiore", "en": "Skiing until mid-April in Bansko; Sofia and Plovdiv in bloom", "es": "Esquí hasta mediados de abril en Bansko; Sofía y Plovdiv en flor"} },
    { voto: 'ideale', tmax: 22, tmin: 10, pioggia: 'media', nota: {"it": "Città, monasteri e Valle delle Rose (fioritura a fine mese)", "en": "Cities, monasteries and the Valley of Roses (blooming late in the month)", "es": "Ciudades, monasterios y el Valle de las Rosas (floración a final de mes)"} },
    { voto: 'ideale', tmax: 26, tmin: 14, pioggia: 'media', nota: {"it": "Trekking su Rila e Pirin, mare ancora tranquillo; qualche temporale", "en": "Hiking in Rila and Pirin, quiet seaside; some thunderstorms", "es": "Senderismo en Rila y Pirin, mar aún tranquilo; alguna tormenta"} },
    { voto: 'ideale', tmax: 28, tmin: 16, pioggia: 'poca', nota: {"it": "Mar Nero in piena stagione, montagne fresche; a Plovdiv fa caldo", "en": "Black Sea in full season, cool mountains; Plovdiv gets hot", "es": "Mar Negro en plena temporada, montañas frescas; en Plovdiv hace calor"} },
    { voto: 'buono', tmax: 28, tmin: 15, pioggia: 'poca', nota: {"it": "Il mese più affollato e caro sul Mar Nero", "en": "The busiest and priciest month on the Black Sea", "es": "El mes más concurrido y caro en el mar Negro"} },
    { voto: 'ideale', tmax: 24, tmin: 11, pioggia: 'poca', nota: {"it": "Mare ancora caldo, vendemmia e città senza folla", "en": "Sea still warm, grape harvest and uncrowded cities", "es": "Mar aún cálido, vendimia y ciudades sin multitudes"} },
    { voto: 'buono', tmax: 17, tmin: 6, pioggia: 'poca', nota: {"it": "Foliage su Rila e Pirin; località di mare chiuse", "en": "Autumn colours in Rila and Pirin; seaside resorts closed", "es": "Colores de otoño en Rila y Pirin; playas cerradas"} },
    { voto: 'sconsigliato', tmax: 10, tmin: 2, pioggia: 'media', nota: {"it": "Grigio e piovoso, impianti ancora chiusi", "en": "Grey and rainy, lifts still closed", "es": "Gris y lluvioso, remontes aún cerrados"} },
    { voto: 'buono', tmax: 4, tmin: -3, pioggia: 'media', nota: {"it": "Gli impianti aprono a dicembre: inverno solo per sciare", "en": "Lifts open in December: winter is for skiing", "es": "Los remontes abren en diciembre: el invierno es para esquiar"} },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 25, trasporti: 10, attivita: 10 },
    medio: { dormire: 40, mangiare: 40, trasporti: 15, attivita: 20 },
    comfort: { dormire: 80, mangiare: 70, trasporti: 30, attivita: 40 },
    nota: {"it": "Tra le mete sciistiche più economiche d'Europa: skipass 35-40 € al giorno, cena in mehana 15-20 €. Le attività non includono lo sci: in settimana bianca aggiungere skipass e noleggio.", "en": "One of Europe's cheapest ski destinations: lift pass 35-40 € a day, dinner in a mehana 15-20 €. Activities exclude skiing: on a ski week add lift pass and rental.", "es": "Uno de los destinos de esquí más baratos de Europa: forfait 35-40 € al día, cena en una mehana 15-20 €. Las actividades no incluyen el esquí: en una semana de esquí hay que sumar forfait y alquiler."},
  },
  aggiornato: '2026-11',
}
