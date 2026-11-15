import { lang } from 'next/root-params'
import { headers } from 'next/headers'
import { isLingua, LINGUA_PREDEFINITA, type Lingua } from './config'
import { HEADER_LINGUA } from './lingua-header'

/**
 * Lingua della pagina in corso, da qualunque Server Component (anche annidato) senza
 * passarla come prop. Non funziona nei Route Handler e nei componenti client: lì si usa
 * `params.lang` o `useLingua()`.
 *
 * Fuori da app/[lang] (la 404 globale, global-not-found.tsx) il parametro non c'è: lì la lingua
 * arriva dall'header del proxy. Nelle pagine di app/[lang] `headers()` non si chiama mai, quindi
 * restano statiche.
 */
export async function linguaCorrente(): Promise<Lingua> {
  const l = await lang()
  if (isLingua(l)) return l
  // niente try/catch: `headers()` segnala a Next che la 404 globale va renderizzata a ogni richiesta
  const h = (await headers()).get(HEADER_LINGUA)
  return isLingua(h) ? h : LINGUA_PREDEFINITA
}
