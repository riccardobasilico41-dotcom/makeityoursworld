import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { linguaCorrente } from '@/lib/i18n/server'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { localizza } from '@/lib/i18n/percorsi'
import { getViaggioBySlug } from '@/lib/viaggi'
import { archivioLocale, elencaTutte, elimina } from '@/lib/domande/archivio'
import { isAdmin, passwordImpostata } from '@/lib/domande/sicurezza'
import { MAX_RISPOSTA, STATI, type Domanda, type StatoDomanda } from '@/lib/domande/tipi'
import { Accesso } from './Accesso'
import { cancella, esci, pubblica, rimettiInAttesa, scarta } from './azioni'

/*
 * Moderazione delle domande sotto i viaggi. Indirizzi: /admin/domande, /it/admin/domande,
 * /es/admin/domande. Fuori da sitemap (non è in sitemap.ts), noindex, protetta da password.
 */

export const metadata: Metadata = {
  title: 'Domande · moderazione',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
}

const T = {
  it: {
    titolo: 'Domande dei lettori',
    manca: 'Per usare la moderazione imposta la variabile DOMANDE_PASSWORD nelle Environment Variables del progetto su Vercel (e in .env.local in sviluppo), poi rifai il deploy. Finché manca, questa pagina non fa nulla.',
    accedi: 'Accedi con la password della moderazione.',
    esci: 'Esci',
    locale: 'Archivio locale: file in .data/domande/ (manca BLOB_READ_WRITE_TOKEN).',
    stati: { 'in-attesa': 'In attesa', pubblicata: 'Pubblicate', scartata: 'Scartate' } as Record<StatoDomanda, string>,
    vuoto: 'Nessuna domanda qui.',
    lingua: 'Lingua',
    risposta: 'Risposta',
    pubblica: 'Salva risposta e pubblica',
    aggiorna: 'Aggiorna risposta',
    scarta: 'Scarta',
    attesa: 'Rimetti in attesa',
    elimina: 'Elimina per sempre…',
    conferma: 'Sì, cancella il file',
    eliminaOra: 'Elimina',
    risposto: 'Risposto il',
  },
  en: {
    titolo: 'Reader questions',
    manca: 'To use moderation, set the DOMANDE_PASSWORD variable in the project Environment Variables on Vercel (and in .env.local for development), then redeploy. Until then this page does nothing.',
    accedi: 'Sign in with the moderation password.',
    esci: 'Sign out',
    locale: 'Local storage: files in .data/domande/ (BLOB_READ_WRITE_TOKEN missing).',
    stati: { 'in-attesa': 'Pending', pubblicata: 'Published', scartata: 'Discarded' } as Record<StatoDomanda, string>,
    vuoto: 'No questions here.',
    lingua: 'Language',
    risposta: 'Answer',
    pubblica: 'Save answer and publish',
    aggiorna: 'Update answer',
    scarta: 'Discard',
    attesa: 'Back to pending',
    elimina: 'Delete forever…',
    conferma: 'Yes, delete the file',
    eliminaOra: 'Delete',
    risposto: 'Answered on',
  },
  es: {
    titolo: 'Preguntas de los lectores',
    manca: 'Para usar la moderación configura la variable DOMANDE_PASSWORD en las Environment Variables del proyecto en Vercel (y en .env.local en desarrollo) y vuelve a desplegar. Mientras falte, esta página no hace nada.',
    accedi: 'Entra con la contraseña de moderación.',
    esci: 'Salir',
    locale: 'Archivo local: ficheros en .data/domande/ (falta BLOB_READ_WRITE_TOKEN).',
    stati: { 'in-attesa': 'Pendientes', pubblicata: 'Publicadas', scartata: 'Descartadas' } as Record<StatoDomanda, string>,
    vuoto: 'No hay preguntas aquí.',
    lingua: 'Idioma',
    risposta: 'Respuesta',
    pubblica: 'Guardar respuesta y publicar',
    aggiorna: 'Actualizar respuesta',
    scarta: 'Descartar',
    attesa: 'Volver a pendiente',
    elimina: 'Borrar para siempre…',
    conferma: 'Sí, borrar el fichero',
    eliminaOra: 'Borrar',
    risposto: 'Respondida el',
  },
} satisfies Record<Lingua, unknown>

const BOTTONE =
  'inline-flex min-h-10 items-center border-2 border-ink px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2'

export default async function AdminDomandePage({ searchParams }: { searchParams: Promise<{ stato?: string }> }) {
  const lingua = await linguaCorrente()
  const t = T[lingua]

  if (!passwordImpostata()) {
    return (
      <Guscio titolo={t.titolo}>
        <p className="max-w-2xl border-2 border-rosso bg-white p-5 text-ink">{t.manca}</p>
      </Guscio>
    )
  }

  if (!(await isAdmin())) {
    return (
      <Guscio titolo={t.titolo}>
        <p className="mb-4 text-stone">{t.accedi}</p>
        <Accesso />
      </Guscio>
    )
  }

  const { stato: s } = await searchParams
  const stato: StatoDomanda = STATI.includes(s as StatoDomanda) ? (s as StatoDomanda) : 'in-attesa'
  // come promesso nella privacy: scartate o senza risposta si cancellano dopo 12 mesi
  const limite = Date.now() - 365 * 24 * 60 * 60 * 1000
  const elenco0 = await elencaTutte()
  const vecchie = elenco0.filter((d) => d.stato !== 'pubblicata' && new Date(d.data).getTime() < limite)
  await Promise.all(vecchie.map((d) => elimina(d.viaggio, d.id)))
  const tutte = elenco0.filter((d) => !vecchie.includes(d))
  const conteggi = Object.fromEntries(STATI.map((x) => [x, tutte.filter((d) => d.stato === x).length])) as Record<StatoDomanda, number>
  const elenco = tutte.filter((d) => d.stato === stato)
  const base = localizza('/admin/domande', lingua)

  return (
    <Guscio titolo={t.titolo}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <nav aria-label={t.titolo} className="flex flex-wrap gap-2">
          {STATI.map((x) => (
            <a
              key={x}
              href={`${base}?stato=${x}`}
              aria-current={x === stato ? 'page' : undefined}
              className={`${BOTTONE} ${x === stato ? 'bg-ink text-cream' : 'bg-cream text-ink hover:bg-ink hover:text-cream'}`}
            >
              {t.stati[x]} ({conteggi[x]})
            </a>
          ))}
        </nav>
        <form action={esci}>
          <button type="submit" className={`${BOTTONE} bg-cream text-ink hover:bg-ink hover:text-cream`}>
            {t.esci}
          </button>
        </form>
      </div>
      {archivioLocale() && <p className="mt-4 text-xs text-stone">{t.locale}</p>}

      {elenco.length === 0 ? (
        <p className="mt-10 text-stone">{t.vuoto}</p>
      ) : (
        <ol className="mt-8 space-y-6">
          {elenco.map((d) => (
            <Voce key={d.id} d={d} lingua={lingua} />
          ))}
        </ol>
      )}
    </Guscio>
  )
}

function Guscio({ titolo, children }: { titolo: string; children: React.ReactNode }) {
  return (
    <section className="py-16">
      <Container>
        <h1 className="mb-8 font-display text-4xl text-alpine">{titolo}</h1>
        {children}
      </Container>
    </section>
  )
}

function Voce({ d, lingua }: { d: Domanda; lingua: Lingua }) {
  const t = T[lingua]
  const titoloViaggio = getViaggioBySlug(d.viaggio, d.lingua)?.titolo ?? d.viaggio
  const data = (iso: string) =>
    new Date(iso).toLocaleString(LOCALE[lingua].html, { dateStyle: 'medium', timeStyle: 'short' })
  const nascosti = (
    <>
      <input type="hidden" name="viaggio" value={d.viaggio} />
      <input type="hidden" name="id" value={d.id} />
    </>
  )
  const idRisposta = `risposta-${d.id}`

  return (
    <li className="border-2 border-ink bg-white">
      <div className="space-y-2 p-5">
        <p className="text-sm text-stone">
          <a
            href={`${localizza(`/viaggi/${d.viaggio}`, d.lingua)}#domande`}
            target="_blank"
            rel="noopener"
            className="font-semibold text-rosso underline underline-offset-2"
          >
            {titoloViaggio}
          </a>{' '}
          · {t.lingua}: {LOCALE[d.lingua].breve} · <time dateTime={d.data}>{data(d.data)}</time>
        </p>
        <p className="font-semibold text-ink">{d.nome}</p>
        <p className="whitespace-pre-line text-ink">{d.testo}</p>
        {d.risposta && d.stato === 'pubblicata' && (
          <p className="text-xs text-stone">
            {t.risposto} {data(d.risposta.data)}
          </p>
        )}
      </div>
      <div className="space-y-4 border-t-2 border-ink bg-cream p-5">
        <form action={pubblica} className="space-y-3">
          {nascosti}
          <label htmlFor={idRisposta} className="text-sm font-semibold text-ink">
            {t.risposta}
          </label>
          <textarea
            id={idRisposta}
            name="risposta"
            required
            rows={5}
            maxLength={MAX_RISPOSTA}
            defaultValue={d.risposta?.testo ?? ''}
            className="block w-full border-2 border-ink bg-white px-3 py-2.5 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
          />
          <button type="submit" className={`${BOTTONE} bg-rosso text-cream hover:bg-rosso-dark`}>
            {d.stato === 'pubblicata' ? t.aggiorna : t.pubblica}
          </button>
        </form>
        <div className="flex flex-wrap items-start gap-3">
          {d.stato !== 'scartata' && (
            <form action={scarta}>
              {nascosti}
              <button type="submit" className={`${BOTTONE} bg-cream text-ink hover:bg-ink hover:text-cream`}>
                {t.scarta}
              </button>
            </form>
          )}
          {d.stato !== 'in-attesa' && (
            <form action={rimettiInAttesa}>
              {nascosti}
              <button type="submit" className={`${BOTTONE} bg-cream text-ink hover:bg-ink hover:text-cream`}>
                {t.attesa}
              </button>
            </form>
          )}
          <details className="group">
            <summary className={`${BOTTONE} cursor-pointer list-none bg-cream text-rosso hover:bg-rosso hover:text-cream`}>
              {t.elimina}
            </summary>
            <form action={cancella} className="mt-3 flex flex-wrap items-center gap-3">
              {nascosti}
              <label className="flex items-center gap-2 text-sm text-ink">
                <input type="checkbox" name="conferma" value="si" required className="size-4" />
                {t.conferma}
              </label>
              <button type="submit" className={`${BOTTONE} bg-rosso text-cream hover:bg-rosso-dark`}>
                {t.eliminaOra}
              </button>
            </form>
          </details>
        </div>
      </div>
    </li>
  )
}
