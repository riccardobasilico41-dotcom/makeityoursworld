import { CONSIGLI } from '@/content/consigli'
import type { Consiglio } from '@/content/consigli/tipi'

export function getAllConsigli(): Consiglio[] {
  return CONSIGLI
}

export function getConsiglio(slug: string): Consiglio | undefined {
  return CONSIGLI.find((c) => c.slug === slug)
}

/** Le guide di una destinazione («paese/slug»), per la sezione nella pagina della destinazione. */
export function consigliDellaDestinazione(chiave: string): Consiglio[] {
  return CONSIGLI.filter((c) => c.destinazione === chiave)
}
