import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'

const RUOLI = [
  {
    nome: 'Health professional',
    testo:
      'Di mestiere sono osteopata: Master of Science in Osteopathy all\'ICOM di Milano, tra i titolari della Polimedica Sant\'Egidio di Saronno. Ho seguito atleti dal calcio giovanile alle ultramaratone, e in Perù ho fatto volontariato con Osteopathy Without Borders.',
  },
  {
    nome: 'Almost-entrepreneur',
    testo: 'Tra lo studio e i progetti digitali per la sanità c\'è sempre un\'idea nuova da far partire: alcune sono già diventate software che usiamo ogni giorno.',
  },
  {
    nome: 'Adrenaline junkie',
    testo: 'Se c\'è una cresta da salire, un fondale da esplorare o un salto da fare, voglio provarlo almeno una volta.',
  },
]

/**
 * «The face behind the project»: chi scrive il sito, con la foto vera al
 * Taj Mahal. I quattro ruoli sono quelli scelti da Riccardo; l'ultimo,
 * viaggiatore, chiude la sezione e spiega perché il sito esiste.
 */
export function VoltoDelProgetto() {
  return (
    <section id="chi-sono" aria-labelledby="volto-titolo" className="border-t border-alpine/10 py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full border-2 border-rosso" />
              <Image
                src="/images/chi-sono/riccardo-basilico-taj-mahal.jpg"
                alt="Riccardo Basilico sorride con la macchina fotografica in spalla davanti al Taj Mahal di Agra"
                width={920}
                height={1150}
                sizes="(min-width: 1024px) 28rem, calc(100vw - 3rem)"
                className="relative block h-auto w-full border-2 border-ink"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">The face behind the project</p>
            <h2 id="volto-titolo" className="mt-3 font-display text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] text-ink">
              Sono Riccardo, per gli amici Rick.
            </h2>
            <dl className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-1 xl:grid-cols-3">
              {RUOLI.map((r) => (
                <div key={r.nome} className="border-t-2 border-ink pt-4">
                  <dt className="font-display text-lg text-ink">{r.nome}</dt>
                  <dd className="mt-2 text-[0.95rem] leading-relaxed text-stone">{r.testo}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 border-l-4 border-rosso pl-6">
              <p className="font-display text-2xl text-ink sm:text-3xl">Ma soprattutto, traveller.</p>
              <p className="mt-3 max-w-[52ch] text-lg leading-relaxed text-stone">
                Questo sito è il mio diario di viaggio: itinerari giorno per giorno, prezzi pagati, errori fatti e tappe che
                non valevano la sosta, scritti perché servano a chi quel viaggio lo deve ancora organizzare.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
