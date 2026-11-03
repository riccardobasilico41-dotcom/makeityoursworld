import { Sparkles, Repeat, Smile, HelpCircle } from 'lucide-react'
import type { GiudizioEsperienza } from '@/lib/types'
import { GIUDIZIO } from '@/lib/i18n/etichette'
import { linguaCorrente } from '@/lib/i18n/server'

const STYLE: Record<GiudizioEsperienza, { classes: string; icon: typeof Sparkles }> = {
  imperdibile: { classes: 'bg-rosso text-cream', icon: Sparkles },
  'la-rifarei': { classes: 'bg-alpine text-cream', icon: Repeat },
  'bella-non-essenziale': { classes: 'bg-alpine/10 text-alpine', icon: Smile },
  'da-verificare': { classes: 'bg-stone/10 text-stone', icon: HelpCircle },
}

export async function PersonalVerdict({
  giudizio,
  className = '',
}: {
  giudizio: GiudizioEsperienza
  className?: string
}) {
  // «Da verificare» è uno stato di lavoro: al lettore non si mostra.
  if (giudizio === 'da-verificare') return null
  const lingua = await linguaCorrente()
  const { classes, icon: Icon } = STYLE[giudizio]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-none px-3 py-1.5 text-xs font-semibold uppercase tracking-wider ${classes} ${className}`}
    >
      <Icon size={13} />
      {GIUDIZIO[lingua][giudizio]}
    </span>
  )
}
