import type { Paese } from '@/lib/types'

export const florida: Paese = {
  slug: 'florida',
  nome: 'Florida',
  continente: 'Nord America',
  tipo: 'regione',
  stato: 'Estados Unidos',
  titolo: 'Florida en 10 días: de los Cayos a Orlando, on the road entre caimanes, playas y cohetes',
  descrizione:
    'Diez días y casi 1.800 km al volante: el turquesa de los Cayos, el pantano de los Everglades, el kitsch dorado de Orlando y los cohetes de la NASA en Cabo Cañaveral, y para terminar las playas y la vida nocturna de Miami Beach.',
  periodoMigliore: 'clima cálido y húmedo todo el año, con veranos muy lluviosos y riesgo de huracanes en temporada',
  durataConsigliata: '10 días, 9 noches',
  budgetIndicativo: 'fondo común de partida 270 € por persona, más 900-1.000 $ por cabeza de gasto medio personal, sin vuelos',
  scheda: {
    documenti:
      "Pasaporte electrónico válido más allá de la fecha de regreso (mejor al menos 3 meses) y autorización ESTA para estancias turísticas de hasta 90 días. Desde el 30 de septiembre de 2025 el ESTA cuesta 40,27 $, casi el doble de los 21 $ de antes, y vale 2 años. Quien ha estado en Cuba después de 2011 no puede usarla y debe solicitar un visado de verdad (150-250 €, con plazos de 30-45 días).",
    valuta: 'Dólar estadounidense (USD).',
    pagamenti:
      'Se aceptan tarjetas en todas partes. Dos partidas que conviene presupuestar sorprenden en el primer viaje: a los precios expuestos hay que sumar alrededor de un 7 % de impuestos y un 18-20 % de propina, a menudo ya incluida en la cuenta (comprueba siempre, para no pagarla dos veces). Para la fianza de los hoteles, unos 50 $ por noche y habitación, hace falta una tarjeta de crédito personal.',
    connettivita:
      'Conviene activar un plan de datos estadounidense antes de partir (una SIM turística cuesta aproximadamente 31 € por 9 días, 40 € por 15) o comprarla allí. Con estas SIM no se hacen llamadas internacionales, solo datos: para hablar con Italia están WhatsApp o Skype. Hay wifi en todos los hoteles y en los parques de Orlando.',
    salute: 'No se exige ninguna vacuna, pero el seguro médico es indispensable: sin cobertura la atención cuesta muchísimo.',
    sicurezza:
      'Con las precauciones normales las zonas turísticas son tranquilas. La variable es el tiempo: de junio a noviembre es la temporada de huracanes y tormentas tropicales, que pueden hacer saltar alguna etapa.',
    trasportiInterni:
      'Es un road trip: el coche de alquiler es indispensable y las distancias son largas (casi 1.800 km para el recorrido completo). Atención a los peajes de la Florida Turnpike: los carriles «toll by plate» están reservados a quien tiene SunPass, y sin dispositivo es mejor evitarlos. Los límites de velocidad se controlan con rigor. En la ciudad, por la noche, Uber y Lyft. El aparcamiento casi siempre es de pago y nunca barato: conviene descargar antes las apps necesarias.',
    costoVita:
      'Caro, sobre todo la comida: una hamburguesería o una cena sencilla ronda los 20 $, un restaurante económico 35 $, uno de verdad 50 $ y más, más impuestos y propina. Luego están las entradas de los parques de Orlando (130-260 $ según la temporada y el número de parques) y el Kennedy Space Center (unos 57-70 $).',
    lingua: 'Inglés; en Miami y en buena parte del sur de Florida el español es en la práctica la segunda lengua.',
    elettricita: '120 V, 60 Hz, enchufes de tipo A y B: hace falta un adaptador desde Italia.',
    fusoOrario: 'UTC-4 en horario de verano y UTC-5 en invierno: 6 horas menos que en Italia todo el año.',
    clima:
      'Cálido y húmedo todo el año, con veranos muy lluviosos. La temporada de huracanes va de junio a noviembre y puede cambiar el itinerario sobre la marcha; el invierno es la estación más agradable para el road trip, pero también la más concurrida en Orlando y en los Cayos.',
    festivita: 'En las semanas de Navidad, Año Nuevo y Spring Break (marzo) los parques de Orlando y las playas se llenan, con precios mucho más altos y colas larguísimas.',
    emergenze: 'Número único 911. El Consulado General de Italia está en Miami.',
    primaDiPartire: {
      documento: 'Pasaporte electrónico válido durante toda la estancia.',
      visto: 'Sin visado hasta 90 días, pero hace falta la ESTA online al menos 72 horas antes (vale 2 años). Si has estado en Cuba desde el 12/1/2021, necesitas visado.',
      vaccini: 'Ninguna vacuna obligatoria. Basta con tener al día las de rutina.',
      prese: '110-120 V, enchufes americanos de clavijas planas: desde España hace falta un adaptador.',
      sim: 'La SIM española funciona en itinerancia; los principales operadores locales son Verizon, AT&T, T-Mobile y Mint Mobile.',
      pagamenti: 'Tarjetas aceptadas casi en todas partes: comprueba antes con tu banco que funciona y el límite. Cajeros abiertos 24 horas. Los impuestos se suman al precio marcado.',
      mance: 'Se espera propina: 15-20 % en restaurantes (10 % en bufé), 1 $ por bebida en el bar y 2-5 $ por noche para la limpieza del hotel.',
      lingua: 'Inglés; el español está cada vez más extendido.',
      frasi: [
        { frase: 'Hello', pronuncia: 'jeló', significato: 'Hola' },
        { frase: 'Thank you', pronuncia: 'zénk iu', significato: 'Gracias' },
        { frase: 'Please', pronuncia: 'plíis', significato: 'Por favor' },
        { frase: 'Excuse me', pronuncia: 'ekskiús mi', significato: 'Disculpe, perdone' },
        { frase: 'How much is it?', pronuncia: 'jáu mach is it', significato: '¿Cuánto cuesta?' },
      ],
      avvisi: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx',
    },
    aggiornatoAl: 'settembre 2026',
  },
  stileViaggio: ['on the road', 'road trip', 'mare', 'famiglia'],
  heroImageAlt: 'Agua turquesa y palmeras a lo largo de la costa de Florida',
  heroImage: '/images/copertine/florida-key-west-smathers-beach.jpg',
  tripPrincipaleSlug: 'florida-road-trip',
}
