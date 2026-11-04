'use server'

import { revalidatePath, updateTag } from 'next/cache'
import { LINGUE } from '@/lib/i18n/config'
import { elimina, leggi, salva, TAG_PUBBLICATE } from '@/lib/domande/archivio'
import { apriSessione, chiudiSessione, dentroIlLimite, isAdmin, passwordGiusta, passwordImpostata } from '@/lib/domande/sicurezza'
import { ID_VALIDO, MAX_RISPOSTA } from '@/lib/domande/tipi'

/*
 * Azioni della moderazione. Ognuna ricontrolla il cookie: la pagina nascosta non basta,
 * un'azione è un POST che chiunque può mandare.
 */

export type EsitoAccesso = { errore?: 'password' | 'troppi' | 'manca' }

export async function accedi(_prec: EsitoAccesso, form: FormData): Promise<EsitoAccesso> {
  if (!passwordImpostata()) return { errore: 'manca' }
  // 10 tentativi ogni 15 minuti dalla stessa connessione
  if (!(await dentroIlLimite('accesso', 10, 900))) return { errore: 'troppi' }
  const pw = form.get('password')
  if (typeof pw !== 'string' || !passwordGiusta(pw)) return { errore: 'password' }
  await apriSessione()
  return {}
}

export async function esci(): Promise<void> {
  await chiudiSessione()
}

/** Rigenera la pagina del viaggio in tutte le lingue (rotte interne /<lingua>/viaggi/<slug>). */
function aggiornaPagine(viaggio: string) {
  updateTag(TAG_PUBBLICATE)
  for (const l of LINGUE) revalidatePath(`/${l}/viaggi/${viaggio}`)
}

async function domandaDa(form: FormData) {
  if (!(await isAdmin())) throw new Error('Non autorizzato')
  const viaggio = form.get('viaggio')
  const id = form.get('id')
  if (typeof viaggio !== 'string' || typeof id !== 'string' || !ID_VALIDO.test(viaggio) || !ID_VALIDO.test(id))
    throw new Error('Domanda non valida')
  const d = await leggi(viaggio, id)
  if (!d) throw new Error('Domanda non trovata')
  return d
}

/** Salva la risposta e pubblica (anche per correggere una risposta già pubblicata). */
export async function pubblica(form: FormData): Promise<void> {
  const d = await domandaDa(form)
  const testo = String(form.get('risposta') ?? '')
    .replace(/\r\n/g, '\n')
    .trim()
    .slice(0, MAX_RISPOSTA)
  if (!testo) return
  await salva({
    ...d,
    stato: 'pubblicata',
    risposta: { testo, data: d.risposta && d.stato === 'pubblicata' ? d.risposta.data : new Date().toISOString() },
  })
  aggiornaPagine(d.viaggio)
}

/** Toglie la domanda dalla pagina senza cancellarla (resta la bozza di risposta). */
export async function scarta(form: FormData): Promise<void> {
  const d = await domandaDa(form)
  await salva({ ...d, stato: 'scartata' })
  aggiornaPagine(d.viaggio)
}

/** Rimette in attesa una domanda scartata o pubblicata. */
export async function rimettiInAttesa(form: FormData): Promise<void> {
  const d = await domandaDa(form)
  await salva({ ...d, stato: 'in-attesa' })
  aggiornaPagine(d.viaggio)
}

/** Cancella il file della domanda per sempre. */
export async function cancella(form: FormData): Promise<void> {
  const d = await domandaDa(form)
  if (form.get('conferma') !== 'si') return
  await elimina(d.viaggio, d.id)
  aggiornaPagine(d.viaggio)
}
