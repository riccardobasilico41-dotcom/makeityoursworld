import { FileDown } from 'lucide-react'
import guide from '@/content/guide-pdf.json'

/**
 * Pulsante per scaricare la guida PDF del viaggio (A5, da stampare o tenere sul telefono).
 * Compare solo se il viaggio è in src/content/guide-pdf.json (slug → byte), che
 * tools/guida-pdf.cjs aggiorna insieme a public/guide-pdf/<slug>.pdf. Niente lettura del
 * disco qui: altrimenti Vercel copia tutti i PDF dentro le funzioni e la pubblicazione fallisce.
 */
export function ScaricaGuida({ slug }: { slug: string }) {
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
      Scarica la guida PDF
      <span className="text-xs font-normal text-cream/80">{mb.toFixed(1).replace('.', ',')} MB</span>
    </a>
  )
}
