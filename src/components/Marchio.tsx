/**
 * Marchio «make it yours.world» in stile macchina da scrivere, come il titolo
 * del video «Runaway»: le lettere compaiono una alla volta al caricamento,
 * poi il punto rosso lampeggia. Solo CSS (vedi .marchio-* in globals.css);
 * il nome completo resta leggibile ai lettori di schermo.
 */
const PRIMA = 'make it yours'
const DOPO = 'world'
const PASSO = 0.07
const INIZIO = 0.2

function Lettere({ testo, da, battuta }: { testo: string; da: number; battuta: boolean }) {
  return (
    <>
      {testo.split('').map((c, i) => (
        <span
          key={i}
          className={battuta ? 'marchio-lettera' : undefined}
          style={battuta ? { animationDelay: `${INIZIO + (da + i) * PASSO}s` } : undefined}
        >
          {c}
        </span>
      ))}
    </>
  )
}

export function Marchio({ battuta = true, className = '' }: { battuta?: boolean; className?: string }) {
  const ritardoPunto = INIZIO + PRIMA.length * PASSO
  return (
    <span className={`whitespace-pre font-[family-name:var(--font-typewriter)] font-bold tracking-[0.01em] ${className}`}>
      <span className="sr-only">Make It Yours World</span>
      <span aria-hidden="true">
        <Lettere testo={PRIMA} da={0} battuta={battuta} />
        <span
          className={battuta ? 'marchio-lettera' : undefined}
          style={battuta ? { animationDelay: `${ritardoPunto}s` } : undefined}
        >
          <span className="marchio-punto text-rosso">.</span>
        </span>
        <Lettere testo={DOPO} da={PRIMA.length + 1} battuta={battuta} />
      </span>
    </span>
  )
}
