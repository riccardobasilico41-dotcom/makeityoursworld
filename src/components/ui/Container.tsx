import type { ReactNode } from 'react'

export function Container({
  children,
  className = '',
  largo = false,
}: {
  children: ReactNode
  className?: string
  /** pagine con tre colonne (indice, testo, mappa): più spazio al testo */
  largo?: boolean
}) {
  return (
    <div className={`mx-auto w-full ${largo ? 'max-w-[84rem]' : 'max-w-6xl'} px-6 sm:px-8 ${className}`}>{children}</div>
  )
}
