import localFont from 'next/font/local'

// Stile A "Ghat": grotesk espressivo per i titoli, grotesk sobrio per il testo.
// Font variabili ospitati sul sito (src/app/fonts): niente richieste a Google, niente errori di build.
// In un modulo a parte perché li usano sia il layout delle lingue sia la 404 globale (global-not-found.tsx).
const bricolage = localFont({
  src: './fonts/BricolageGrotesque-normal-500-800.woff2',
  variable: '--font-bricolage',
  weight: '500 800',
  display: 'swap',
})

const schibsted = localFont({
  src: './fonts/SchibstedGrotesk-normal-400-700.woff2',
  variable: '--font-schibsted',
  weight: '400 700',
  display: 'swap',
})

// Macchina da scrivere solo per il marchio, come il titolo del video «Runaway».
// Su Mac e iPhone si usa American Typewriter (lo stesso del video), altrove Courier Prime.
const courierPrime = localFont({
  src: './fonts/CourierPrime-700-latin.woff2',
  variable: '--font-courier-prime',
  weight: '700',
  display: 'swap',
})

/** Classi di <html>: variabili dei tre font più le classi di base. */
export const classiHtml = `${bricolage.variable} ${schibsted.variable} ${courierPrime.variable} h-full antialiased`
