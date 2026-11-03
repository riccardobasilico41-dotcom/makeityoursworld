import type { TripMeta } from '@/lib/types'

const IMG = '/images/viaggi/canada-itinerario'

export const canadaItinerarioMeta: TripMeta = {
  tripSlug: 'canada-itinerario',
  paeseSlug: 'canada',
  ritmo:
    'Regular: dos o tres noches en las ciudades (Toronto, Niágara, Ottawa, Montréal, Quebec) alternadas con jornadas de conducción de 2-4 horas; una sola etapa larga, el regreso de Tadoussac a Montréal (unas 5 horas y media).',
  trasporti:
    "Pick-up o coche de alquiler recogidos en Toronto y devueltos en Montréal (suplemento de solo ida que hay que pedir en el presupuesto), unos 1.900-2.000 km; UP Express desde el aeropuerto de Toronto, metro en Montréal, ferri gratuito sobre el Saguenay, barco y helicóptero en el Niágara.",
  stile: ['road trip', 'città', 'natura', 'cascate', 'nord america'],
  adattoA: [
    'quien quiere un primer viaje a Canadá fácil de conducir, con ciudades y naturaleza a la vez',
    'quien quiere ver las cataratas del Niágara tanto desde el barco como desde el aire',
    'quien viaja entre junio y mediados de octubre, con el barco y los cruceros de ballenas en servicio',
    'quien quiere añadir los osos polares de Churchill y acepta un presupuesto mucho más alto',
  ],
  puntiForti: [
    'Las Horseshoe Falls vistas desde abajo en el barco y desde arriba en helicóptero',
    'Montréal y Vieux-Québec, las dos ciudades francófonas sobre el San Lorenzo',
    'Las ballenas y los belugas en la desembocadura del fiordo del Saguenay, en Tadoussac',
    'Carreteras buenas y distancias regulares, cómodas con una pick-up de alquiler',
    'Una extensión lista para los osos polares de Churchill, en tundra buggy',
  ],
  criticita: [
    'Suplemento de solo ida si se devuelve el coche en Quebec',
    'Peajes electrónicos de la 407 ETR alrededor de Toronto cobrados por la empresa de alquiler con comisiones',
    'Impuestos (13-15 %) y propinas (15-20 %) que se suman a casi todos los precios',
    'Barco del Niágara y cruceros de ballenas solo de mayo al otoño',
    'A Churchill solo se llega en avión o con 45 horas de tren desde Winnipeg, y es muy cara',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito: 'por nuestra cuenta, con una pick-up de alquiler',
  },
  tappeMappa: [
    { nome: 'Toronto', destinazioneSlug: 'toronto' },
    { nome: 'Cataratas del Niágara', destinazioneSlug: 'niagara' },
    { nome: 'Mil Islas y Kingston', destinazioneSlug: 'mille-isole' },
    { nome: 'Ottawa', destinazioneSlug: 'ottawa' },
    { nome: 'Mont-Tremblant', destinazioneSlug: 'mont-tremblant' },
    { nome: 'Montréal', destinazioneSlug: 'montreal' },
    { nome: 'Quebec', destinazioneSlug: 'quebec' },
    { nome: 'Charlevoix y Tadoussac', destinazioneSlug: 'charlevoix-tadoussac' },
    { nome: 'Extensión: Churchill y los osos polares', destinazioneSlug: 'churchill' },
  ],
  giorni: [
    { titoloGiorno: 'Día 1 — Llegada a Toronto', tratta: 'Aeropuerto Pearson → Union Station, UP Express (unos 25 minutos)', pernottamento: 'Toronto, centro o paseo marítimo', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'toronto', immagine: `${IMG}/giorno-01-toronto.jpg`, imageAlt: 'El skyline de Toronto con la CN Tower visto desde las Toronto Islands, al otro lado del lago' },
    { titoloGiorno: 'Día 2 — Toronto: la CN Tower, el lago y los mercados', pernottamento: 'Toronto, centro o paseo marítimo', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'CN Tower unos 43 CAD (entrada básica)', destinazioneSlug: 'toronto', immagine: `${IMG}/giorno-02-toronto.jpg`, imageAlt: 'La CN Tower de Toronto vista desde abajo' },
    { titoloGiorno: 'Día 3 — Las cataratas del Niágara desde el barco', tratta: 'Toronto → Niagara Falls, unos 130 km (1 hora y media)', pernottamento: "Niagara Falls, Fallsview o Lundy's Lane", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Voyage to the Falls 47,95 CAD más HST; Journey Behind the Falls unos 30 CAD más HST', destinazioneSlug: 'niagara', immagine: `${IMG}/giorno-03-niagara.jpg`, imageAlt: 'El barco con los pasajeros en poncho rojo en las aguas agitadas bajo las cataratas del Niágara' },
    { titoloGiorno: 'Día 4 — El Niágara en helicóptero y Niagara-on-the-Lake', tratta: 'Niagara Falls → Niagara-on-the-Lake por la Niagara Parkway, unos 25 km', pernottamento: 'Niagara Falls o Niagara-on-the-Lake', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'vuelo en helicóptero desde unos 171 CAD más HST por persona', destinazioneSlug: 'niagara', immagine: `${IMG}/giorno-04-niagara.jpg`, imageAlt: 'Las Horseshoe Falls y la torre Skylon vistas desde arriba, con la niebla de agua que sube de la herradura' },
    { titoloGiorno: 'Día 5 — Las Mil Islas', tratta: 'Niagara Falls → Gananoque, unos 380 km (4 horas)', pernottamento: 'Gananoque o Kingston', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'mille-isole', immagine: `${IMG}/giorno-05-mille-isole.jpg`, imageAlt: 'Una isla boscosa con un cobertizo para barcas en el San Lorenzo, en las Mil Islas' },
    { titoloGiorno: 'Día 6 — Kingston y llegada a Ottawa', tratta: 'Gananoque → Kingston → Ottawa, unos 225 km', pernottamento: 'Ottawa, ByWard Market o centro', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'ottawa', immagine: `${IMG}/giorno-06-ottawa.jpg`, imageAlt: 'Los edificios neogóticos de la Parliament Hill de Ottawa bajo un cielo de invierno' },
    { titoloGiorno: 'Día 7 — Ottawa: el Parlamento, el canal Rideau y los museos', pernottamento: 'Ottawa, ByWard Market o centro', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'visitas al Parlamento gratuitas con reserva', destinazioneSlug: 'ottawa', immagine: `${IMG}/giorno-07-ottawa.jpg`, imageAlt: 'El West Block del Parlamento de Ottawa con las torres neogóticas y la nieve en el césped' },
    { titoloGiorno: 'Día 8 — Mont-Tremblant y los Laurentides', tratta: 'Ottawa → Mont-Tremblant, unos 150 km (2 horas)', pernottamento: 'Mont-Tremblant, pueblo o alrededores', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'mont-tremblant', immagine: `${IMG}/giorno-08-mont-tremblant.jpg`, imageAlt: 'Las colinas boscosas de Mont-Tremblant con los colores del otoño' },
    { titoloGiorno: 'Día 9 — Montréal: la ciudad vieja y la basílica de Notre-Dame', tratta: 'Mont-Tremblant → Montréal, unos 130 km (1 hora y media)', pernottamento: 'Montréal, Vieux-Montréal o Plateau', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-09-montreal.jpg`, imageAlt: 'El interior azul y oro de la basílica de Notre-Dame de Montréal' },
    { titoloGiorno: 'Día 10 — Montréal: Mont Royal, el Plateau y los mercados', pernottamento: 'Montréal, Vieux-Montréal o Plateau', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-10-montreal.jpg`, imageAlt: 'Los rascacielos del centro de Montréal vistos desde el Mont Royal' },
    { titoloGiorno: 'Día 11 — De Montréal a Quebec: la ciudad vieja', tratta: 'Montréal → Quebec, unos 255 km (2 horas y 45 minutos-3 horas)', pernottamento: 'Quebec, dentro o justo fuera de las murallas', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'quebec', immagine: `${IMG}/giorno-11-quebec.jpg`, imageAlt: 'El Château Frontenac iluminado al anochecer sobre la ciudad vieja de Quebec' },
    { titoloGiorno: "Día 12 — Las cataratas de Montmorency y la Île d'Orléans", pernottamento: 'Quebec, dentro o justo fuera de las murallas', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'aparcamiento y teleférico de Montmorency de pago (Sépaq)', destinazioneSlug: 'quebec', immagine: `${IMG}/giorno-12-quebec.jpg`, imageAlt: 'Las cataratas de Montmorency con el puente colgante sobre el salto' },
    { titoloGiorno: 'Día 13 — Charlevoix: Baie-Saint-Paul y la carretera junto al río', tratta: 'Quebec → Baie-Saint-Paul → La Malbaie → ferri Baie-Sainte-Catherine-Tadoussac, unos 225 km', pernottamento: 'Tadoussac', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'ferri sobre el Saguenay gratuito', destinazioneSlug: 'charlevoix-tadoussac', immagine: `${IMG}/giorno-13-charlevoix-tadoussac.jpg`, imageAlt: 'Bosques y campos alrededor de Baie-Saint-Paul vistos desde arriba' },
    { titoloGiorno: 'Día 14 — Tadoussac y las ballenas del San Lorenzo', pernottamento: 'Tadoussac', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'crucero de ballenas de 3 horas desde 134,99 CAD más impuestos (Croisières AML, 2026)', destinazioneSlug: 'charlevoix-tadoussac', immagine: `${IMG}/giorno-14-charlevoix-tadoussac.jpg`, imageAlt: 'Las paredes boscosas del fiordo del Saguenay vistas desde el agua' },
    { titoloGiorno: 'Día 15 — Regreso a Montréal', tratta: 'Tadoussac → Montréal, unos 470 km (5 horas y media)', pernottamento: 'Montréal o cerca del aeropuerto', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-15-montreal.jpg`, imageAlt: 'El skyline de Montréal visto desde el Kondiaronk Boulevard en el Mont Royal' },
    { titoloGiorno: 'Día 16 — Salida desde Montréal', tratta: 'Montréal → aeropuerto Montréal-Trudeau (YUL)', intensita: 'leggero', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-16-montreal.jpg`, imageAlt: 'Visitantes en el mirador Kondiaronk del Mont Royal, con los rascacielos de Montréal nevados' },
  ],
  budget: [
    { etichetta: 'Vuelos intercontinentales', valore: undefined },
    { etichetta: 'eTA', valore: '7 CAD por persona' },
    { etichetta: 'Niágara', valore: 'barco Voyage to the Falls 47,95 CAD más HST; helicóptero desde unos 171 CAD más HST; Journey Behind the Falls unos 30 CAD más HST' },
    { etichetta: 'Otras entradas', valore: 'CN Tower unos 43 CAD; crucero de ballenas en Tadoussac desde 134,99 CAD más impuestos' },
    { etichetta: 'Coche de alquiler y alojamientos', valore: 'por presupuestar según el periodo elegido, incluido el suplemento de solo ida Toronto-Montréal' },
    { etichetta: 'Impuestos y propinas', valore: 'HST 13 % en Ontario, cerca del 15 % en Quebec; propinas en el restaurante 15-20 %' },
    { etichetta: 'Extensión a Churchill', valore: 'vuelo Winnipeg-Churchill a título indicativo 700-1.400 CAD ida y vuelta; paquetes de varios días desde varios miles de dólares por persona' },
  ],
}
