import { lang } from 'next/root-params'
import { isLingua, LINGUA_PREDEFINITA, type Lingua } from './config'

/**
 * Lingua della pagina in corso, da qualunque Server Component (anche annidato) senza
 * passarla come prop. Non funziona nei Route Handler e nei componenti client: lì si usa
 * `params.lang` o `useLingua()`.
 */
export async function linguaCorrente(): Promise<Lingua> {
  const l = await lang()
  return isLingua(l) ? l : LINGUA_PREDEFINITA
}
