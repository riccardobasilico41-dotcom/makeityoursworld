'use server'

import { randomUUID } from 'node:crypto'
import { isLingua } from '@/lib/i18n/config'
import { getViaggioBySlug } from '@/lib/viaggi'
import { salva } from './archivio'
import { dentroIlLimite } from './sicurezza'
import { ID_VALIDO, MAX_NOME, MAX_TESTO, MIN_SECONDI_COMPILAZIONE, MIN_TESTO } from './tipi'

export type ErroreCampo = 'nome' | 'testo' | 'consenso'
export type EsitoInvio =
  | { stato: 'vuoto' }
  | { stato: 'ok' }
  | {
      stato: 'errore'
      campi: Partial<Record<ErroreCampo, 'vuoto' | 'lungo' | 'corto' | 'manca'>>
      generale?: 'veloce' | 'troppi' | 'server' | 'pagina'
      /** quello che la persona aveva scritto, per non farglielo riscrivere */
      valori: { nome: string; testo: string; consenso: boolean }
    }

const pulisci = (v: FormDataEntryValue | null) =>
  typeof v === 'string'
    ? v
        .normalize('NFC')
        // caratteri di controllo via, gli a capo restano
        .replace(/[\u0000-\u0009\u000B\u000C\u000E-\u001F\u007F\u200B-\u200F\u202A-\u202E\u2066-\u2069]/g, '')
        .trim()
    : ''

/** Invio pubblico di una domanda sotto un viaggio. Entra sempre «in attesa». */
export async function inviaDomanda(_prec: EsitoInvio, form: FormData): Promise<EsitoInvio> {
  const nome = pulisci(form.get('nome')).replace(/\s+/g, ' ')
  const testo = pulisci(form.get('testo')).replace(/\n{3,}/g, '\n\n')
  const valori = { nome: nome.slice(0, MAX_NOME), testo: testo.slice(0, MAX_TESTO), consenso: form.get('consenso') === 'si' }

  // honeypot: un campo che le persone non vedono. Se è pieno fingiamo che sia andata bene.
  if (pulisci(form.get('sito'))) return { stato: 'ok' }

  const viaggio = pulisci(form.get('viaggio'))
  const lingua = pulisci(form.get('lingua'))
  if (!ID_VALIDO.test(viaggio) || !isLingua(lingua) || !getViaggioBySlug(viaggio, lingua))
    return { stato: 'errore', campi: {}, generale: 'pagina', valori }

  const secondi = Number(form.get('secondi'))
  if (!Number.isFinite(secondi) || secondi < MIN_SECONDI_COMPILAZIONE)
    return { stato: 'errore', campi: {}, generale: 'veloce', valori }

  const campi: Extract<EsitoInvio, { stato: 'errore' }>['campi'] = {}
  if (!nome) campi.nome = 'vuoto'
  else if (nome.length > MAX_NOME) campi.nome = 'lungo'
  if (!testo) campi.testo = 'vuoto'
  else if (testo.length < MIN_TESTO) campi.testo = 'corto'
  else if (testo.length > MAX_TESTO) campi.testo = 'lungo'
  if (form.get('consenso') !== 'si') campi.consenso = 'manca'
  if (Object.keys(campi).length) return { stato: 'errore', campi, valori }

  // 5 domande all'ora e 15 al giorno dalla stessa connessione (solo in memoria)
  if (!(await dentroIlLimite('ora', 5, 3600)) || !(await dentroIlLimite('giorno', 15, 86400)))
    return { stato: 'errore', campi: {}, generale: 'troppi', valori }

  try {
    await salva({
      id: `${Date.now().toString(36)}-${randomUUID().slice(0, 8)}`,
      viaggio,
      lingua,
      nome,
      testo,
      data: new Date().toISOString(),
      stato: 'in-attesa',
    })
  } catch (e) {
    console.error('[domande] salvataggio non riuscito', e)
    return { stato: 'errore', campi: {}, generale: 'server', valori }
  }
  return { stato: 'ok' }
}
