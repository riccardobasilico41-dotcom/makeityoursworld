import {
  ChevronDown,
  CreditCard,
  HandCoins,
  IdCard,
  Languages,
  MessageCircle,
  PlugZap,
  ShieldAlert,
  Smartphone,
  Stamp,
  Syringe,
  type LucideIcon,
} from 'lucide-react'
import type { PrimaDiPartire as Dati } from '@/lib/types'
import { richNodes } from '@/components/ui/Rich'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Prima di partire',
    sottotitolo: 'I promemoria per chi viaggia con passaporto italiano o UE, con le differenze per UK e USA.',
    apri: 'Apri', chiudi: 'Chiudi',
    documento: 'Documento', visto: 'Visto e ingresso', vaccini: 'Vaccini', prese: 'Prese elettriche', sim: 'SIM ed eSIM',
    pagamenti: 'Soldi e pagamenti', mance: 'Mance', lingua: 'Lingua', frasi: 'Cinque frasi utili', sicurezza: 'Sicurezza',
    avvisi: 'Controlla gli [avvisi ufficiali aggiornati]',
    avvisiFine: ': cambiano più spesso di questa scheda.',
  },
  en: {
    titolo: 'Before you go',
    sottotitolo: 'Quick reminders for EU passport holders, with the differences for UK and US travellers.',
    apri: 'Open', chiudi: 'Close',
    documento: 'Passport', visto: 'Visa and entry', vaccini: 'Vaccinations', prese: 'Plugs and voltage', sim: 'SIM and eSIM',
    pagamenti: 'Money and payments', mance: 'Tipping', lingua: 'Language', frasi: 'Five useful phrases', sicurezza: 'Safety',
    avvisi: 'Before you travel, read the [latest official travel advice]',
    avvisiFine: ': it changes more often than this page.',
  },
  es: {
    titolo: 'Antes de viajar',
    sottotitolo: 'Recordatorios para quien viaja con pasaporte italiano o de la UE, con las diferencias para Reino Unido y EE. UU.',
    apri: 'Abrir', chiudi: 'Cerrar',
    documento: 'Documento', visto: 'Visado y entrada', vaccini: 'Vacunas', prese: 'Enchufes', sim: 'SIM y eSIM',
    pagamenti: 'Dinero y pagos', mance: 'Propinas', lingua: 'Idioma', frasi: 'Cinco frases útiles', sicurezza: 'Seguridad',
    avvisi: 'Antes de salir, lee las [recomendaciones oficiales actualizadas]',
    avvisiFine: ': cambian más a menudo que esta ficha.',
  },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Riquadro «Prima di partire» della pagina Paese: una riga per voce (icona, etichetta, una o due
 * righe di testo), nello stile di InfoPratiche. Su telefono è chiuso a tendina (<details>, senza
 * JavaScript); da lg in su il contenuto resta sempre visibile dove il browser supporta
 * ::details-content, altrimenti si apre al clic anche lì. Le voci assenti non compaiono.
 */
export async function PrimaDiPartire({ dati }: { dati?: Dati }) {
  if (!dati) return null
  const t = T[await linguaCorrente()]
  const voci: { label: string; value?: string; icona: LucideIcon }[] = [
    { label: t.documento, value: dati.documento, icona: IdCard },
    { label: t.visto, value: dati.visto, icona: Stamp },
    { label: t.vaccini, value: dati.vaccini, icona: Syringe },
    { label: t.prese, value: dati.prese, icona: PlugZap },
    { label: t.sim, value: dati.sim, icona: Smartphone },
    { label: t.pagamenti, value: dati.pagamenti, icona: CreditCard },
    { label: t.mance, value: dati.mance, icona: HandCoins },
    { label: t.lingua, value: dati.lingua, icona: Languages },
    ...(dati.avvisi
      ? [{ label: t.sicurezza, value: `${t.avvisi.replace(/\]$/, `](${dati.avvisi})`)}${t.avvisiFine}`, icona: ShieldAlert }]
      : []),
  ].filter((v) => v.value && v.value.trim())
  const frasi = dati.frasi ?? []
  if (voci.length === 0 && frasi.length === 0) return null

  return (
    <section aria-labelledby="prima-di-partire" className="mt-10">
      <details
        id="prima-di-partire-box"
        // da lg il contenuto resta aperto: il sommario fa da titolo e «Apri/Chiudi» sparisce (classi scritte per intero, Tailwind le legge solo così)
        className="group scroll-mt-24 border-2 border-ink bg-ink lg:supports-[selector(::details-content)]:[&::details-content]:[content-visibility:visible]"
      >
        <summary
          className={`flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 bg-cream px-4 py-3 sm:px-5 [&::-webkit-details-marker]:hidden lg:supports-[selector(::details-content)]:pointer-events-none lg:supports-[selector(::details-content)]:cursor-default`}
        >
          <span>
            <h3 id="prima-di-partire" className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">
              {t.titolo}
            </h3>
            <span className="mt-1 block text-sm text-stone">{t.sottotitolo}</span>
          </span>
          <span className={`inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-rosso lg:supports-[selector(::details-content)]:hidden`}>
            <span className="group-open:hidden">{t.apri}</span>
            <span className="hidden group-open:inline">{t.chiudi}</span>
            <ChevronDown size={18} aria-hidden className="transition-transform duration-200 group-open:rotate-180" />
          </span>
        </summary>
        <dl className="mt-px grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {voci.map(({ label, value, icona: Icona }) => (
            <div key={label} className="relative min-w-0 bg-cream p-3.5 pl-11 sm:p-4 sm:pl-12">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-stone/85 sm:text-xs">
                <Icona size={18} aria-hidden className="absolute left-3.5 top-4 text-rosso sm:left-4" />
                {label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink [overflow-wrap:anywhere]">{richNodes(value!)}</dd>
            </div>
          ))}
          {/* riempie l'ultima riga della griglia a tre colonne, così non resta un buco nero */}
          {voci.length % 3 !== 0 && (
            <div aria-hidden className={`hidden bg-cream lg:block ${voci.length % 3 === 1 ? 'lg:col-span-2' : ''}`} />
          )}
          {voci.length % 2 === 1 && <div aria-hidden className="hidden bg-cream sm:block lg:hidden" />}
          {frasi.length > 0 && (
            <div className="relative min-w-0 bg-cream p-3.5 pl-11 sm:col-span-2 sm:p-4 sm:pl-12 lg:col-span-3">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-stone/85 sm:text-xs">
                <MessageCircle size={18} aria-hidden className="absolute left-3.5 top-4 text-rosso sm:left-4" />
                {t.frasi}
              </dt>
              <dd className="mt-2">
                <ul className="grid gap-x-6 gap-y-2 text-sm leading-snug sm:grid-cols-2 lg:grid-cols-5">
                  {frasi.map((f) => (
                    <li key={f.frase} className="min-w-0">
                      <span className="font-semibold text-ink">{f.frase}</span>
                      <span className="block text-xs text-stone">
                        <span className="italic">{f.pronuncia}</span> · {f.significato}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}
        </dl>
      </details>
    </section>
  )
}
