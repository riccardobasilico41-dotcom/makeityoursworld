import Image from 'next/image'
import Link from 'next/link'

/**
 * Firma in fondo agli articoli, come in una rivista: tondo con la faccia di
 * Rick, nome e due parole su chi è, con il link alla sezione «The face behind
 * the project» in Home.
 */
export function FirmaAutore({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 border-t-2 border-ink pt-6 ${className}`}>
      <Image
        src="/images/chi-sono/rick-avatar.jpg"
        alt="Riccardo Basilico, detto Rick"
        width={64}
        height={64}
        className="size-16 shrink-0 rounded-full border-2 border-ink object-cover"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Scritto da</p>
        <p className="mt-0.5 font-display text-xl text-ink">
          <Link href="/#chi-sono" rel="author" className="hover:text-rosso">
            Rick
          </Link>
        </p>
        <p className="text-sm text-stone">Riccardo Basilico · osteopata, ma soprattutto viaggiatore</p>
      </div>
    </div>
  )
}

/** Firma corta sotto il titolo dell'articolo: tondo piccolo e «di Rick». */
export function FirmaBreve() {
  return (
    <span className="mt-4 flex items-center gap-2.5 font-sans text-base font-normal tracking-normal text-stone">
      <Image
        src="/images/chi-sono/rick-avatar.jpg"
        alt=""
        width={32}
        height={32}
        className="size-8 rounded-full border border-ink object-cover"
      />
      <span>
        di{' '}
        <Link href="/#chi-sono" rel="author" className="font-semibold text-ink hover:text-rosso">
          Rick
        </Link>
      </span>
    </span>
  )
}
