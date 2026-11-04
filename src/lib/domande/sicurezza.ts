import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto'
import { cookies, headers } from 'next/headers'

/*
 * Accesso alla moderazione e limiti di invio.
 * - La password è solo nella variabile DOMANDE_PASSWORD (Vercel). Il cookie di sessione
 *   è «scadenza.firma», firma = HMAC-SHA256 con la password: cambiando la password tutte
 *   le sessioni aperte decadono.
 * - I limiti di invio stanno solo in memoria del server, con un hash dell'IP salato da un
 *   sale casuale che cambia a ogni avvio: niente IP su disco, niente IP in chiaro.
 */

export const COOKIE_ADMIN = 'domande_admin'
const DURATA_SESSIONE = 60 * 60 * 24 * 30 // 30 giorni

export const passwordImpostata = () => Boolean(process.env.DOMANDE_PASSWORD)

function firma(valore: string): string {
  return createHmac('sha256', process.env.DOMANDE_PASSWORD ?? '').update(`domande-admin.${valore}`).digest('base64url')
}

function uguali(a: string, b: string): boolean {
  // confronto a tempo costante anche con lunghezze diverse
  const ha = createHash('sha256').update(a).digest()
  const hb = createHash('sha256').update(b).digest()
  return timingSafeEqual(ha, hb) && a.length === b.length
}

export function passwordGiusta(tentativo: string): boolean {
  const vera = process.env.DOMANDE_PASSWORD
  return Boolean(vera) && uguali(tentativo, vera!)
}

export async function apriSessione(): Promise<void> {
  const scadenza = Math.floor(Date.now() / 1000) + DURATA_SESSIONE
  const valore = `${scadenza}.${firma(String(scadenza))}`
  ;(await cookies()).set(COOKIE_ADMIN, valore, {
    httpOnly: true,
    // in sviluppo su http://localhost Safari scarta i cookie Secure: Secure solo in produzione
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: DURATA_SESSIONE,
  })
}

export async function chiudiSessione(): Promise<void> {
  ;(await cookies()).delete(COOKIE_ADMIN)
}

/** true solo con password impostata e cookie valido e non scaduto. */
export async function isAdmin(): Promise<boolean> {
  if (!passwordImpostata()) return false
  const v = (await cookies()).get(COOKIE_ADMIN)?.value
  if (!v) return false
  const [scadenza, f] = v.split('.')
  if (!scadenza || !f || !/^\d+$/.test(scadenza)) return false
  if (Number(scadenza) < Date.now() / 1000) return false
  return uguali(f, firma(scadenza))
}

/* ---------- limiti in memoria ---------- */

const SALE = randomBytes(32)
const contatori = new Map<string, number[]>()

async function chiaveClient(ambito: string): Promise<string> {
  const h = await headers()
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() || h.get('x-real-ip') || 'sconosciuto'
  return ambito + ':' + createHmac('sha256', SALE).update(ip).digest('base64url')
}

/**
 * Registra un tentativo e dice se è dentro il limite (`max` tentativi in `finestraSec`).
 * In serverless ogni istanza ha la sua memoria: è un freno, non una garanzia.
 */
export async function dentroIlLimite(ambito: string, max: number, finestraSec: number): Promise<boolean> {
  const chiave = await chiaveClient(ambito)
  const ora = Date.now()
  const recenti = (contatori.get(chiave) ?? []).filter((t) => ora - t < finestraSec * 1000)
  if (recenti.length >= max) {
    contatori.set(chiave, recenti)
    return false
  }
  recenti.push(ora)
  contatori.set(chiave, recenti)
  // pulizia: oltre 24 h non resta niente
  if (contatori.size > 5000) {
    for (const [k, ts] of contatori) if (ts.every((t) => ora - t > 86_400_000)) contatori.delete(k)
  }
  return true
}
