import type { Paese } from '@/lib/types'

export const norvegia: Paese = {
  slug: 'norvegia',
  nome: 'Noruega',
  continente: 'Europa',
  titolo: 'Noruega: las Lofoten en 7 días, entre fiordos y sol de medianoche',
  descrizione:
    "Siete días on the road entre Oslo, Bodø y el archipiélago de las Lofoten: trekkings emblemáticos, una excursión en zódiac entre las águilas marinas del Trollfjord, playas polares a las que solo se llega en ferri y pueblos de pescadores que siguen como antaño. Es un itinerario que hice yo, con los senderos que vale la pena hacer y los que conviene saltarse.",
  periodoMigliore: "verano polar (junio-agosto), por la luz larguísima y el clima menos riguroso, aunque en julio hace igualmente frío y hay viento",
  durataConsigliata: '7-9 días para cubrir Oslo, Bodø y las Lofoten sin ir con prisas',
  budgetIndicativo: '500-600 € por persona solo en comidas (es lo que gastamos nosotros); a añadir vuelos, alquiler de coche, ferris y alojamientos',
  scheda: {
    documenti:
      "Noruega está en el espacio Schengen aunque no pertenece a la Unión Europea: para los ciudadanos italianos basta el documento de identidad electrónico (CIE). Permiso de conducir italiano válido.",
    valuta: 'Corona noruega (NOK). El país es casi del todo cashless, pero unas coronas en efectivo vienen bien en los pequeños establecimientos de carretera.',
    pagamenti:
      "Se paga con tarjeta casi en todas partes, ferris incluidos. Ojo con los locales más pequeños y aislados, que a veces aceptan solo efectivo o las apps de pago noruegas: ocurre, por ejemplo, en las cafeterías de la carretera hacia las Lofoten. Las bebidas alcohólicas por encima de cierta graduación solo se compran en las tiendas estatales Vinmonopolet; los supermercados venden solo cerveza, con horarios limitados.",
    connettivita:
      "Noruega está en el Espacio Económico Europeo: el roaming italiano funciona sin costes adicionales, no hace falta una SIM local. Buena cobertura también en las islas, menos en los fiordos más estrechos.",
    salute: 'Tarjeta sanitaria europea (TSE) válida. Estándares sanitarios altísimos, agua del grifo excelente en todas partes.',
    sicurezza:
      "Entre los países más seguros del mundo. Los riesgos están ligados a la naturaleza: senderos expuestos como el Reinebringen y el Festvågtind, viento fortísimo en playas y crestas, tiempo que cambia en pocas horas. Los trekkings más famosos hay que hacerlos solo con el cielo despejado; si no, se sufre para nada.",
    trasportiInterni:
      "Vuelo interno desde Oslo hacia el norte (Bodø, Tromsø) para cubrir las distancias, luego coche de alquiler y ferris locales. Una regla práctica que funciona: presentarse en los ferris con 30-40 minutos de antelación aunque se tenga la plaza reservada.",
    costoVita:
      "Entre los países más caros del mundo: en una semana se pueden gastar 500-600 € por persona solo en comidas, sin contar vuelos, alquiler de coche, ferris y alojamientos. Cocinar en el apartamento o en el rorbu reduce mucho la cuenta.",
    lingua: "Noruego; el inglés lo habla todo el mundo, con un dominio excelente.",
    elettricita: '230 V, 50 Hz, enchufes de tipo C y F: idénticos a los italianos.',
    fusoOrario: 'La misma hora que Italia todo el año.',
    clima:
      "En las Lofoten el verano polar (junio-agosto) trae luz las veinticuatro horas del día, pero el clima sigue siendo frío y ventoso incluso en julio: hacen falta capas gruesas. El invierno ártico, en Tromsø y más al norte, es la temporada de la aurora boreal, con noche polar en los meses centrales.",
    festivita: "El 17 de mayo, fiesta nacional, es el día más sentido del año: desfiles con trajes tradicionales en todas las ciudades y muchos servicios cerrados.",
    emergenze: 'Policía 112, ambulancia 113, bomberos 110. La Embajada de Italia está en Oslo.',
    primaDiPartire: {
      documento: 'DNI o pasaporte en vigor durante toda la estancia. Las Svalbard están fuera de Schengen y allí hay controles fronterizos.',
      visto: 'Sin visado para la UE. Reino Unido y EE. UU.: sin visado hasta 90 días de cada 180 en Schengen, con huellas y foto EES en la primera entrada. ETIAS aún no activo.',
      vaccini: 'Ninguna obligatoria. Vacunas de rutina al día, sarampión incluido; se pueden valorar hepatitis A y B, y la de garrapatas solo si se pasa mucho tiempo al aire libre.',
      prese: '220V, enchufes europeos continentales, como en España: no hace falta adaptador.',
      sim: 'Noruega está en el Espacio Económico Europeo: el roaming funciona como en casa, dentro de los límites de tu tarifa. Otra opción es una SIM de prepago local (kontantkort).',
      pagamenti: 'Casi sin efectivo: se paga con tarjeta incluso importes pequeños. Algunas oficinas de correos y tiendas no aceptan tarjetas de crédito extranjeras, pero sí de débito.',
      mance: 'No es muy habitual. En bares y restaurantes, por un buen servicio, se deja entre un 5 y un 15%, siempre opcional.',
      lingua: 'Noruego; casi todo el mundo habla inglés, sobre todo los jóvenes.',
      frasi: [
        { frase: 'Hei / God dag', pronuncia: 'JÉI / gu DÁAG', significato: 'Hola / Buenos días' },
        { frase: 'Takk', pronuncia: 'TAK', significato: 'Gracias' },
        { frase: 'Vær så snill', pronuncia: 'ver so SNIL', significato: 'Por favor' },
        { frase: 'Unnskyld', pronuncia: 'ÚN-shul', significato: 'Perdone, disculpe' },
        { frase: 'Hva koster det?', pronuncia: 'va KÓS-ter de', significato: '¿Cuánto cuesta?' },
      ],
      avvisi: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx',
    },
    aggiornatoAl: 'septiembre de 2026',
  },
  stileViaggio: ['natura', 'avventura', 'on the road'],
  heroImageAlt: 'Las rocas y el faro de Henningsvær, con las montañas de las Lofoten en el horizonte',
  heroImage: '/images/norvegia/henningsvaer-faro-montagne-riccardo.jpg',
  tripPrincipaleSlug: 'lofoten-estate-2025',
}
