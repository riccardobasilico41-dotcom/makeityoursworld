import type { CSSProperties, ReactNode } from 'react'

/*
 * Comparsa allo scorrimento in solo CSS (animation-timeline: view(), vedi globals.css § .rivela).
 * Prima era motion/react: il contenuto arrivava invisibile (opacity 0) e compariva solo dopo il
 * download del JavaScript, testo d'apertura compreso, e il primo disegno della pagina slittava di
 * 1-2 secondi sui telefoni. Ora il contenuto è visibile da subito; i browser che supportano le
 * animazioni legate allo scorrimento lo fanno salire mentre entra nello schermo, gli altri lo mostrano
 * fermo. Con «riduci movimento» non si anima nulla.
 */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const style = delay ? ({ '--rivela-ritardo': `${Math.round(delay * 100)}%` } as CSSProperties) : undefined
  return (
    <div className={className ? `rivela ${className}` : 'rivela'} style={style}>
      {children}
    </div>
  )
}

export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return <div className={className}>{children}</div>
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className ? `rivela ${className}` : 'rivela'}>{children}</div>
}
