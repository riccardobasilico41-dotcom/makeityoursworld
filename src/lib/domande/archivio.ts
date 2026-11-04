import { promises as fs } from 'node:fs'
import path from 'node:path'
import { del, get, list, put } from '@vercel/blob'
import { unstable_cache } from 'next/cache'
import { isLingua, type Lingua } from '@/lib/i18n/config'
import { ID_VALIDO, STATI, type Domanda } from './tipi'

/*
 * Archivio delle domande: una domanda = un file JSON `domande/<viaggio>/<id>.json`.
 * - Con BLOB_READ_WRITE_TOKEN (Vercel): store Vercel Blob privato.
 * - Senza token (sviluppo locale): file in .data/domande/ (in .gitignore).
 * Solo lato server: lo importano azioni e Server Component.
 */

const PREFISSO = 'domande/'
const CARTELLA_LOCALE = path.join(process.cwd(), '.data')
/** tag della cache delle domande pubblicate (svuotata dalla moderazione) */
export const TAG_PUBBLICATE = 'domande-pubblicate'

const usaBlob = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN)
export const archivioLocale = () => !usaBlob()

function percorso(viaggio: string, id: string) {
  if (!ID_VALIDO.test(viaggio) || !ID_VALIDO.test(id)) throw new Error('percorso non valido')
  return `${PREFISSO}${viaggio}/${id}.json`
}

/** Controlla la forma di un file letto dall'archivio: quello che non torna si scarta. */
function valida(x: unknown): Domanda | null {
  if (!x || typeof x !== 'object') return null
  const d = x as Record<string, unknown>
  if (typeof d.id !== 'string' || typeof d.viaggio !== 'string' || typeof d.nome !== 'string') return null
  if (typeof d.testo !== 'string' || typeof d.data !== 'string') return null
  if (!isLingua(d.lingua as string) || !STATI.includes(d.stato as Domanda['stato'])) return null
  const r = d.risposta as Record<string, unknown> | undefined
  const risposta =
    r && typeof r.testo === 'string' && typeof r.data === 'string' ? { testo: r.testo, data: r.data } : undefined
  return {
    id: d.id,
    viaggio: d.viaggio,
    lingua: d.lingua as Lingua,
    nome: d.nome,
    testo: d.testo,
    data: d.data,
    stato: d.stato as Domanda['stato'],
    ...(risposta ? { risposta } : {}),
  }
}

export async function salva(d: Domanda): Promise<void> {
  const p = percorso(d.viaggio, d.id)
  const corpo = JSON.stringify(d, null, 2)
  if (usaBlob()) {
    await put(p, corpo, {
      access: 'private',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 60,
    })
    return
  }
  const file = path.join(CARTELLA_LOCALE, p)
  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.writeFile(file, corpo, 'utf8')
}

export async function leggi(viaggio: string, id: string): Promise<Domanda | null> {
  const p = percorso(viaggio, id)
  try {
    if (usaBlob()) {
      // useCache: false → sempre la versione appena scritta, non quella in CDN
      const r = await get(p, { access: 'private', useCache: false })
      if (!r || r.statusCode !== 200) return null
      return valida(JSON.parse(await new Response(r.stream).text()))
    }
    return valida(JSON.parse(await fs.readFile(path.join(CARTELLA_LOCALE, p), 'utf8')))
  } catch {
    return null
  }
}

export async function elimina(viaggio: string, id: string): Promise<void> {
  const p = percorso(viaggio, id)
  if (usaBlob()) {
    await del(p)
    return
  }
  await fs.rm(path.join(CARTELLA_LOCALE, p), { force: true })
}

/** Percorsi di tutti i file delle domande (di un viaggio, se indicato). */
async function percorsi(viaggio?: string): Promise<string[]> {
  const prefisso = viaggio ? percorso(viaggio, 'x').replace(/x\.json$/, '') : PREFISSO
  if (usaBlob()) {
    const out: string[] = []
    let cursor: string | undefined
    do {
      const r = await list({ prefix: prefisso, cursor, limit: 1000 })
      out.push(...r.blobs.map((b) => b.pathname).filter((n) => n.endsWith('.json')))
      cursor = r.hasMore ? r.cursor : undefined
    } while (cursor)
    return out
  }
  const base = path.join(CARTELLA_LOCALE, PREFISSO)
  const cartelle = viaggio ? [viaggio] : await fs.readdir(base).catch(() => [] as string[])
  const out: string[] = []
  for (const c of cartelle) {
    const file = await fs.readdir(path.join(base, c)).catch(() => [] as string[])
    out.push(...file.filter((f) => f.endsWith('.json')).map((f) => `${PREFISSO}${c}/${f}`))
  }
  return out
}

/** Tutte le domande (moderazione), più recenti prima. Mai in cache. */
export async function elencaTutte(viaggio?: string): Promise<Domanda[]> {
  const lette = await Promise.all(
    (await percorsi(viaggio)).map((p) => {
      const m = p.match(/^domande\/([^/]+)\/([^/]+)\.json$/)
      return m && ID_VALIDO.test(m[1]) && ID_VALIDO.test(m[2]) ? leggi(m[1], m[2]) : Promise.resolve(null)
    }),
  )
  return lette.filter((d): d is Domanda => d !== null).sort((a, b) => b.data.localeCompare(a.data))
}

/**
 * Domande pubblicate con risposta, di tutti i viaggi, in cache (una sola lettura dell'archivio
 * per tutta la build e per tutte le pagine; la svuota la moderazione con updateTag).
 */
const pubblicateInCache = unstable_cache(
  async (): Promise<Domanda[]> =>
    (await elencaTutte())
      .filter((d) => d.stato === 'pubblicata' && d.risposta?.testo)
      .sort((a, b) => a.data.localeCompare(b.data)),
  ['domande-pubblicate-v2'],
  { tags: [TAG_PUBBLICATE] },
)

/** Domande pubblicate di un viaggio nella lingua della pagina. Se l'archivio non risponde: nessuna. */
export async function domandePubblicate(viaggio: string, lingua: Lingua): Promise<Domanda[]> {
  try {
    const tutte = await pubblicateInCache()
    return tutte.filter((d) => d.viaggio === viaggio && d.lingua === lingua)
  } catch (e) {
    console.error('[domande] archivio non raggiungibile', e)
    return []
  }
}
