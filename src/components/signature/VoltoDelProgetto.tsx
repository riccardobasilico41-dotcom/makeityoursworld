import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    eyebrow: 'The face behind the project',
    titolo: 'Sono Riccardo, per gli amici Rick.',
    alt: 'Riccardo Basilico sorride con la macchina fotografica in spalla davanti al Taj Mahal di Agra',
    ruoli: [
      {
        nome: 'Health professional',
        testo:
          "Di mestiere sono osteopata: Master of Science in Osteopathy all'ICOM di Milano, tra i titolari della Polimedica Sant'Egidio di Saronno. Ho seguito atleti dal calcio giovanile alle ultramaratone, e in Perù ho fatto volontariato con Osteopathy Without Borders.",
      },
      {
        nome: 'Almost-entrepreneur',
        testo:
          "Tra lo studio e i progetti digitali per la sanità c'è sempre un'idea nuova da far partire: alcune sono già diventate software che usiamo ogni giorno.",
      },
      {
        nome: 'Adrenaline junkie',
        testo: "Se c'è una cresta da salire, un fondale da esplorare o un salto da fare, voglio provarlo almeno una volta.",
      },
    ],
    soprattutto: 'Ma soprattutto, traveller.',
    diario:
      'Questo sito è il mio diario di viaggio: itinerari giorno per giorno, prezzi pagati, errori fatti e tappe che non valevano la sosta, scritti perché servano a chi quel viaggio lo deve ancora organizzare.',
  },
  en: {
    eyebrow: 'The face behind the project',
    titolo: "I'm Riccardo, Rick to my friends.",
    alt: 'Riccardo Basilico smiling with a camera over his shoulder in front of the Taj Mahal in Agra',
    ruoli: [
      {
        nome: 'Health professional',
        testo:
          "I'm an osteopath by trade: Master of Science in Osteopathy at ICOM in Milan, and one of the owners of Polimedica Sant'Egidio in Saronno. I've worked with athletes from youth soccer to ultramarathons, and in Peru I volunteered with Osteopathy Without Borders.",
      },
      {
        nome: 'Almost-entrepreneur',
        testo:
          "Between the practice and the digital projects for healthcare, there's always a new idea waiting to get started: some have already become software we use every day.",
      },
      {
        nome: 'Adrenaline junkie',
        testo: "If there's a ridge to climb, a seabed to explore or a jump to make, I want to try it at least once.",
      },
    ],
    soprattutto: 'But above all, a traveler.',
    diario:
      "This site is my travel journal: day-by-day itineraries, prices I paid, mistakes I made and stops that weren't worth it, written to help anyone who still has that trip to plan.",
  },
  es: {
    eyebrow: 'La cara detrás del proyecto',
    titolo: 'Soy Riccardo, para los amigos Rick.',
    alt: 'Riccardo Basilico sonríe con la cámara al hombro delante del Taj Mahal de Agra',
    ruoli: [
      {
        nome: 'Profesional sanitario',
        testo:
          "De profesión soy osteópata: Master of Science in Osteopathy en el ICOM de Milán, y uno de los titulares de la Polimedica Sant'Egidio de Saronno. He tratado a deportistas, desde el fútbol base hasta las ultramaratones, y en Perú hice voluntariado con Osteopathy Without Borders.",
      },
      {
        nome: 'Casi emprendedor',
        testo:
          'Entre el estudio y los proyectos digitales para la sanidad siempre hay una idea nueva por arrancar: algunas ya se han convertido en software que usamos cada día.',
      },
      {
        nome: 'Adicto a la adrenalina',
        testo: 'Si hay una cresta que subir, un fondo marino que explorar o un salto que dar, quiero probarlo al menos una vez.',
      },
    ],
    soprattutto: 'Pero sobre todo, viajero.',
    diario:
      'Este sitio es mi diario de viaje: itinerarios día a día, precios pagados, errores cometidos y paradas que no merecían la pena, escritos para que le sirvan a quien todavía tiene que organizar ese viaje.',
  },
} satisfies Record<
  Lingua,
  { eyebrow: string; titolo: string; alt: string; ruoli: { nome: string; testo: string }[]; soprattutto: string; diario: string }
>

/**
 * «The face behind the project»: chi scrive il sito, con la foto vera al
 * Taj Mahal. I quattro ruoli sono quelli scelti da Riccardo; l'ultimo,
 * viaggiatore, chiude la sezione e spiega perché il sito esiste.
 */
export async function VoltoDelProgetto() {
  const t = T[await linguaCorrente()]
  return (
    <section id="chi-sono" aria-labelledby="volto-titolo" className="border-t border-alpine/10 py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full border-2 border-rosso" />
              <Image
                src="/images/chi-sono/riccardo-basilico-taj-mahal.jpg"
                alt={t.alt}
                width={920}
                height={1150}
                sizes="(min-width: 1024px) 28rem, calc(100vw - 3rem)"
                className="relative block h-auto w-full border-2 border-ink"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{t.eyebrow}</p>
            <h2 id="volto-titolo" className="mt-3 font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] text-ink">
              {t.titolo}
            </h2>
            <dl className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-1 xl:grid-cols-3">
              {t.ruoli.map((r) => (
                <div key={r.nome} className="border-t-2 border-ink pt-4">
                  <dt className="font-display text-lg text-ink">{r.nome}</dt>
                  <dd className="mt-2 text-[0.95rem] leading-relaxed text-stone">{r.testo}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 border-l-4 border-rosso pl-6">
              <p className="font-display text-2xl text-ink sm:text-3xl">{t.soprattutto}</p>
              <p className="mt-3 max-w-[52ch] text-lg leading-relaxed text-stone">
                {t.diario}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
