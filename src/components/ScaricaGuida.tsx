import { FileDown } from 'lucide-react'
import guide from '@/content/guide-pdf.json'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

/**
 * Lingua dei PDF: tools/guida-pdf.cjs stampa sempre /it/guide/<slug>/stampa, quindi oggi
 * esistono solo in italiano. Nelle pagine en/es il pulsante lo dice, mai «tradotto».
 */
const LINGUA_PDF: Lingua = 'it'

const T = {
  it: { scarica: 'Scarica la guida PDF', lingua: { it: 'PDF', en: 'PDF in inglese', es: 'PDF in spagnolo' } },
  en: { scarica: 'Download the PDF guide', lingua: { it: 'PDF in Italian', en: 'PDF', es: 'PDF in Spanish' } },
  es: { scarica: 'Descargar la guía en PDF', lingua: { it: 'PDF en italiano', en: 'PDF en inglés', es: 'PDF' } },
} satisfies Record<Lingua, { scarica: string; lingua: Record<Lingua, string> }>

/**
 * Pulsante per scaricare la guida PDF del viaggio (A5, da stampare o tenere sul telefono).
 * Compare solo se il viaggio è in src/content/guide-pdf.json (slug → byte), che
 * tools/guida-pdf.cjs aggiorna insieme a public/guide-pdf/<slug>.pdf (coerenza file ↔ elenco:
 * `node tools/controlla-guide-pdf.mjs`). Niente lettura del
 * disco qui: altrimenti Vercel copia tutti i PDF dentro le funzioni e la pubblicazione fallisce.
 */
export async function ScaricaGuida({ slug }: { slug: string }) {
  const lingua = await linguaCorrente()
  const byte = (guide as Record<string, number>)[slug]
  if (!byte) return null
  const t = T[lingua]
  const mb = (byte / 1_000_000).toFixed(1)
  return (
    <a
      href={`/guide-pdf/${slug}.pdf`}
      download
      type="application/pdf"
      hrefLang={LINGUA_PDF}
      className="btn btn-primario"
    >
      <FileDown size={17} aria-hidden />
      {t.scarica}
      <span className="text-xs font-normal text-cream">
        {t.lingua[LINGUA_PDF]} · {lingua === 'en' ? mb : mb.replace('.', ',')} MB
      </span>
    </a>
  )
}
