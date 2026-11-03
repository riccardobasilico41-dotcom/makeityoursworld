import { ArrowUpRight } from 'lucide-react'
import type { SchedaPaese } from '@/lib/types'
import { Reveal } from './Reveal'
import { richNodes } from '@/components/ui/Rich'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    prima: 'Prima di partire', documenti: 'Documenti e visto', salute: 'Salute e vaccinazioni', valuta: 'Valuta', pagamenti: 'Pagamenti e contanti',
    posto: 'Una volta sul posto', trasporti: 'Trasporti interni', sim: 'SIM e connettività', costo: 'Quanto costa', lingua: 'Lingua', elettricita: 'Elettricità e prese', fuso: 'Fuso orario',
    comunque: 'Da sapere comunque', sicurezza: 'Sicurezza', clima: 'Clima e stagioni', feste: 'Feste e date da segnare', numeri: 'Numeri utili',
    verificata: (data: string) => `Scheda verificata a ${data}. Regole d'ingresso, prezzi e livelli di sicurezza cambiano: controlla sempre le fonti ufficiali del tuo paese prima di partire.`,
  },
  en: {
    prima: 'Before you go', documenti: 'Documents and visa', salute: 'Health and vaccinations', valuta: 'Currency', pagamenti: 'Payments and cash',
    posto: 'Once you are there', trasporti: 'Getting around', sim: 'SIM and connectivity', costo: 'What things cost', lingua: 'Language', elettricita: 'Electricity and plugs', fuso: 'Time zone',
    comunque: 'Good to know anyway', sicurezza: 'Safety', clima: 'Climate and seasons', feste: 'Holidays and dates to note', numeri: 'Useful numbers',
    verificata: (data: string) => `Guide checked in ${data}. Entry rules, prices and safety levels change: always check the official sources of your own country before you go.`,
  },
  es: {
    prima: 'Antes de salir', documenti: 'Documentos y visado', salute: 'Salud y vacunas', valuta: 'Moneda', pagamenti: 'Pagos y efectivo',
    posto: 'Una vez allí', trasporti: 'Transporte interno', sim: 'SIM y conectividad', costo: 'Cuánto cuesta', lingua: 'Idioma', elettricita: 'Electricidad y enchufes', fuso: 'Huso horario',
    comunque: 'Conviene saber', sicurezza: 'Seguridad', clima: 'Clima y estaciones', feste: 'Fiestas y fechas que apuntar', numeri: 'Teléfonos útiles',
    verificata: (data: string) => `Ficha verificada en ${data}. Las normas de entrada, los precios y los niveles de seguridad cambian: consulta siempre las fuentes oficiales de tu país antes de salir.`,
  },
} satisfies Record<Lingua, Record<string, string | ((data: string) => string)>>

type Blocco = { titolo: string; voci: { label: string; valore?: string }[] }

/**
 * Scheda pratica di Paese, divisa nei tre momenti in cui servono davvero le
 * informazioni: prima di partire, una volta sul posto, e le cose da sapere
 * comunque. Le voci senza valore vengono semplicemente omesse.
 */
export async function CountrySheet({ scheda }: { scheda: SchedaPaese }) {
  const t = T[await linguaCorrente()]
  const blocchi: Blocco[] = [
    {
      titolo: t.prima,
      voci: [
        { label: t.documenti, valore: scheda.documenti },
        { label: t.salute, valore: scheda.salute },
        { label: t.valuta, valore: scheda.valuta },
        { label: t.pagamenti, valore: scheda.pagamenti },
      ],
    },
    {
      titolo: t.posto,
      voci: [
        { label: t.trasporti, valore: scheda.trasportiInterni },
        { label: t.sim, valore: scheda.connettivita },
        { label: t.costo, valore: scheda.costoVita },
        { label: t.lingua, valore: scheda.lingua },
        { label: t.elettricita, valore: scheda.elettricita },
        { label: t.fuso, valore: scheda.fusoOrario },
      ],
    },
    {
      titolo: t.comunque,
      voci: [
        { label: t.sicurezza, valore: scheda.sicurezza },
        { label: t.clima, valore: scheda.clima },
        { label: t.feste, valore: scheda.festivita },
        { label: t.numeri, valore: scheda.emergenze },
      ],
    },
  ]

  return (
    <div className="mt-10 space-y-12">
      {blocchi.map((blocco) => {
        const voci = blocco.voci.filter((v) => v.valore)
        if (voci.length === 0) return null

        return (
          <Reveal key={blocco.titolo}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{blocco.titolo}</h3>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {voci.map((voce) => (
                <div key={voce.label} className="rounded-none border border-alpine/10 bg-white p-5">
                  <dt className="font-display text-base text-alpine">{voce.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-stone">{richNodes(voce.valore)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )
      })}

      <p className="flex items-start gap-1.5 text-xs text-stone/85">
        <ArrowUpRight size={12} className="mt-0.5 shrink-0" />
        {t.verificata(scheda.aggiornatoAl)}
      </p>
    </div>
  )
}
