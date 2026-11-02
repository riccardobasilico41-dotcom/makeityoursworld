import fs from 'node:fs'
import path from 'node:path'
import { FileDown } from 'lucide-react'

/**
 * Pulsante per scaricare la guida PDF del viaggio (A5, da stampare o tenere sul telefono).
 * Compare solo se il file esiste in public/guide-pdf/<slug>.pdf: lo crea tools/guida-pdf.cjs.
 */
export function ScaricaGuida({ slug }: { slug: string }) {
  const file = path.join(process.cwd(), 'public', 'guide-pdf', `${slug}.pdf`)
  if (!fs.existsSync(file)) return null
  const mb = fs.statSync(file).size / 1_000_000
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
