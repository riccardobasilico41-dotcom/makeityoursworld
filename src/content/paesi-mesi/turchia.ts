import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'turchia',
  zona: { it: "Istanbul (Cappadocia più fredda d'inverno, costa più calda d'estate)", en: "Istanbul (Cappadocia colder in winter, coast hotter in summer)", es: "Estambul (Capadocia más fría en invierno, costa más cálida en verano)" },
  mesi: [
    { voto: 'sconsigliato', tmax: 9, tmin: 4, pioggia: 'media', nota: { it: "Costa spenta e mongolfiere spesso annullate; Cappadocia innevata", en: "Coast shut and balloons often cancelled; snowy Cappadocia", es: "Costa apagada y globos a menudo cancelados; Capadocia nevada" } },
    { voto: 'sconsigliato', tmax: 9, tmin: 4, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 12, tmin: 5, pioggia: 'media' },
    { voto: 'ideale', tmax: 16, tmin: 8, pioggia: 'media', nota: { it: "Festival dei tulipani a Istanbul, mare ancora freddo", en: "Tulip festival in Istanbul, sea still cold", es: "Festival de los tulipanes en Estambul, mar todavía frío" } },
    { voto: 'ideale', tmax: 21, tmin: 13, pioggia: 'poca' },
    { voto: 'ideale', tmax: 26, tmin: 17, pioggia: 'poca' },
    { voto: 'buono', tmax: 28, tmin: 20, pioggia: 'poca', nota: { it: "Oltre 35 °C a Pamukkale ed Efeso, costa piena e cara", en: "Over 35 °C at Pamukkale and Ephesus, coast busy and pricey", es: "Más de 35 °C en Pamukkale y Éfeso, costa llena y cara" } },
    { voto: 'buono', tmax: 28, tmin: 21, pioggia: 'poca' },
    { voto: 'ideale', tmax: 25, tmin: 17, pioggia: 'media', nota: { it: "Mare più caldo dell'anno e meno folla", en: "Warmest sea of the year and fewer crowds", es: "El mar más cálido del año y menos gente" } },
    { voto: 'ideale', tmax: 20, tmin: 14, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 15, tmin: 9, pioggia: 'media', nota: { it: "La costa chiude, prezzi bassi in città", en: "The coast closes, low prices in the cities", es: "La costa cierra, precios bajos en las ciudades" } },
    { voto: 'sconsigliato', tmax: 11, tmin: 6, pioggia: 'media' },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 20, trasporti: 15, attivita: 20 },
    medio: { dormire: 55, mangiare: 35, trasporti: 25, attivita: 45 },
    comfort: { dormire: 120, mangiare: 60, trasporti: 45, attivita: 80 },
    nota: { it: "I musei principali si pagano in euro e sono cari; la mongolfiera in Cappadocia costa da sola 150-350 €.", en: "Major museums are priced in euros and are expensive; a Cappadocia balloon ride alone costs €150-350.", es: "Los grandes museos se pagan en euros y son caros; el globo en Capadocia cuesta por sí solo 150-350 €." },
  },
  aggiornato: '2026-11',
}
