import type { Metadata } from 'next'
import { PaginaNonTrovata, titoloNonTrovata } from '@/components/PaginaNonTrovata'
import { linguaCorrente } from '@/lib/i18n/server'

/*
 * 404 quando una pagina chiama notFound() (per esempio una scheda che non esiste in quella lingua).
 * Gli indirizzi che non corrispondono a nessuna rotta, compresi gli slug sconosciuti delle sezioni
 * con dynamicParams = false, li serve invece src/app/global-not-found.tsx, già renderizzata sul server.
 */

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  return { title: titoloNonTrovata(lingua), robots: { index: false } }
}

export default async function NotFound() {
  return <PaginaNonTrovata lingua={await linguaCorrente()} />
}
