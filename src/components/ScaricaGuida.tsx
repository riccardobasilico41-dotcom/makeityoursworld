import { FileDown } from 'lucide-react'
import guide from '@/content/guide-pdf.json'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: 'Scarica la guida PDF',
  en: 'Download the PDF guide (in Italian)',
  es: 'Descargar la guía en PDF (en italiano)',
} satisfies Record<Lingua, string>

/**
 * Pulsante per scaricare la guida PDF del viaggio (A5, da stampare o tenere sul telefono).
 * Compare solo se il viaggio è in src/content/guide-pdf.json (slug → byte), che
 * tools/guida-pdf.cjs aggiorna insieme a public/guide-pdf/<slug>.pdf. Niente lettura del
 * disco qui: altrimenti Vercel copia tutti i PDF dentro le funzioni e la pubblicazione fallisce.
 */
export async function ScaricaGuida({ slug }: { slug: string }) {
  const lingua = await linguaCorrente()
  const byte = (guide as Record<string, number>)[slug]
  if (!byte) return null
  const mb = byte / 1_000_000
  return (
    <a
      href={`/guide-pdf/${slug}.pdf`}
      download
      className="inline-flex min-h-11 items-center gap-2 rounded-none border-2 border-ink bg-rosso px-4 text-[0.95rem] font-semibold text-cream transition-colors duration-150 hover:bg-rosso-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
    >
      <FileDown size={17} aria-hidden />
      {T[lingua]}
      <span className="text-xs font-normal text-cream/80">{lingua === 'en' ? mb.toFixed(1) : mb.toFixed(1).replace('.', ',')} MB</span>
    </a>
  )
}
