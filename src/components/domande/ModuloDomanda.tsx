'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import Link from '@/components/ui/Link'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import type { Lingua } from '@/lib/i18n/config'
import { inviaDomanda, type EsitoInvio } from '@/lib/domande/azioni'
import { MAX_INVII_PAGINA, MAX_NOME, MAX_TESTO, MIN_TESTO } from '@/lib/domande/tipi'

const T = {
  it: {
    titolo: 'Fai una domanda su questo viaggio',
    lead: 'Rispondo io, Rick. Le domande compaiono qui sotto solo dopo la mia risposta.',
    nome: 'Il tuo nome',
    nomeAiuto: 'Anche solo il nome di battesimo o un soprannome: verrà mostrato accanto alla domanda.',
    testo: 'La tua domanda',
    testoAiuto: 'Niente email, telefoni o dati personali: la domanda sarà pubblica.',
    consenso: 'Ho letto l’',
    privacy: 'informativa privacy',
    consensoCoda: ' e acconsento alla pubblicazione del nome e della domanda insieme alla risposta.',
    invia: 'Invia la domanda',
    invio: 'Invio in corso…',
    grazie: 'Grazie! La domanda comparirà qui quando avrò risposto.',
    altra: 'Fai un’altra domanda',
    caratteri: (n: number, max: number) => `${n} di ${max} caratteri`,
    lasciaVuoto: 'Lascia vuoto questo campo',
    erroriTitolo: 'Controlla il modulo:',
    err: {
      nome: { vuoto: 'Scrivi un nome.', lungo: `Il nome può avere al massimo ${MAX_NOME} caratteri.` },
      testo: {
        vuoto: 'Scrivi la domanda.',
        corto: `La domanda è troppo corta (almeno ${MIN_TESTO} caratteri).`,
        lungo: `La domanda può avere al massimo ${MAX_TESTO} caratteri.`,
      },
      consenso: { manca: 'Serve il consenso per inviare la domanda.' },
      veloce: 'Inviata troppo in fretta: aspetta qualche secondo e riprova.',
      troppi: 'Hai inviato molte domande di seguito: riprova più tardi.',
      server: 'Non sono riuscito a salvare la domanda. Riprova tra poco.',
      pagina: 'Questa pagina non accetta domande. Ricarica e riprova.',
    },
  },
  en: {
    titolo: 'Ask a question about this trip',
    lead: 'I, Rick, answer them myself. Questions appear below only once I have replied.',
    nome: 'Your name',
    nomeAiuto: 'A first name or a nickname is fine: it will be shown next to the question.',
    testo: 'Your question',
    testoAiuto: 'No emails, phone numbers or personal details: the question will be public.',
    consenso: 'I have read the ',
    privacy: 'privacy notice',
    consensoCoda: ' and agree to my name and question being published together with the answer.',
    invia: 'Send the question',
    invio: 'Sending…',
    grazie: 'Thank you! Your question will appear here once I have answered it.',
    altra: 'Ask another question',
    caratteri: (n: number, max: number) => `${n} of ${max} characters`,
    lasciaVuoto: 'Leave this field empty',
    erroriTitolo: 'Please check the form:',
    err: {
      nome: { vuoto: 'Write a name.', lungo: `The name can be at most ${MAX_NOME} characters.` },
      testo: {
        vuoto: 'Write your question.',
        corto: `The question is too short (at least ${MIN_TESTO} characters).`,
        lungo: `The question can be at most ${MAX_TESTO} characters.`,
      },
      consenso: { manca: 'Your consent is needed to send the question.' },
      veloce: 'Sent too quickly: wait a few seconds and try again.',
      troppi: 'You have sent many questions in a row: please try again later.',
      server: 'I could not save the question. Please try again shortly.',
      pagina: 'This page does not accept questions. Reload and try again.',
    },
  },
  es: {
    titolo: 'Haz una pregunta sobre este viaje',
    lead: 'Respondo yo, Rick. Las preguntas aparecen aquí debajo solo después de mi respuesta.',
    nome: 'Tu nombre',
    nomeAiuto: 'Basta con el nombre de pila o un apodo: se mostrará junto a la pregunta.',
    testo: 'Tu pregunta',
    testoAiuto: 'Sin correos, teléfonos ni datos personales: la pregunta será pública.',
    consenso: 'He leído la ',
    privacy: 'política de privacidad',
    consensoCoda: ' y acepto que se publiquen el nombre y la pregunta junto con la respuesta.',
    invia: 'Enviar la pregunta',
    invio: 'Enviando…',
    grazie: '¡Gracias! La pregunta aparecerá aquí cuando la haya respondido.',
    altra: 'Haz otra pregunta',
    caratteri: (n: number, max: number) => `${n} de ${max} caracteres`,
    lasciaVuoto: 'Deja este campo vacío',
    erroriTitolo: 'Revisa el formulario:',
    err: {
      nome: { vuoto: 'Escribe un nombre.', lungo: `El nombre puede tener como máximo ${MAX_NOME} caracteres.` },
      testo: {
        vuoto: 'Escribe la pregunta.',
        corto: `La pregunta es demasiado corta (al menos ${MIN_TESTO} caracteres).`,
        lungo: `La pregunta puede tener como máximo ${MAX_TESTO} caracteres.`,
      },
      consenso: { manca: 'Hace falta el consentimiento para enviar la pregunta.' },
      veloce: 'Enviada demasiado rápido: espera unos segundos y vuelve a intentarlo.',
      troppi: 'Has enviado muchas preguntas seguidas: vuelve a intentarlo más tarde.',
      server: 'No he podido guardar la pregunta. Vuelve a intentarlo dentro de poco.',
      pagina: 'Esta página no acepta preguntas. Recarga y vuelve a intentarlo.',
    },
  },
} satisfies Record<Lingua, unknown>

/** `giro` cambia a ogni risposta del server: i campi si rimontano con i valori restituiti
 *  (React azzera il form dopo ogni azione, i campi controllati resterebbero sfasati). */
type EsitoLocale = EsitoInvio & { giro: number }
const INIZIALE: EsitoLocale = { stato: 'vuoto', giro: 0 }

const CAMPO =
  'mt-2 block w-full border-2 border-ink bg-white px-3 py-2.5 text-base text-ink placeholder:text-stone/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2 focus-visible:ring-offset-cream aria-[invalid=true]:border-rosso'

/** Modulo «Fai una domanda» sotto l'articolo. Server action con honeypot, tempo minimo e limiti. */
export function ModuloDomanda({ viaggio }: { viaggio: string }) {
  const lingua = useLingua()
  const t = T[lingua]
  const [inviate, setInviate] = useState(0)
  const [giro, setGiro] = useState(0)
  const [mostraGrazie, setMostraGrazie] = useState(false)
  const grazieRef = useRef<HTMLParagraphElement>(null)

  if (mostraGrazie) {
    return (
      <div className="border-2 border-ink bg-cream p-6 sm:p-8">
        <p ref={grazieRef} tabIndex={-1} role="status" className="font-display text-xl text-ink focus:outline-none">
          {t.grazie}
        </p>
        {inviate < MAX_INVII_PAGINA && (
          <button
            type="button"
            onClick={() => {
              setMostraGrazie(false)
              setGiro((g) => g + 1)
            }}
            className="mt-5 inline-flex min-h-11 items-center border-2 border-ink bg-cream px-4 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
          >
            {t.altra}
          </button>
        )}
      </div>
    )
  }

  return (
    <Modulo
      key={giro}
      viaggio={viaggio}
      lingua={lingua}
      onInviata={() => {
        setInviate((n) => n + 1)
        setMostraGrazie(true)
        requestAnimationFrame(() => grazieRef.current?.focus())
      }}
    />
  )
}

function Modulo({ viaggio, lingua, onInviata }: { viaggio: string; lingua: Lingua; onInviata: () => void }) {
  const t = T[lingua]
  const [esito, azione, inCorso] = useActionState<EsitoLocale, FormData>(
    async (prec, form) => ({ ...(await inviaDomanda(prec, form)), giro: prec.giro + 1 }),
    INIZIALE,
  )
  const inizio = useRef<number | null>(null)
  const secondiRef = useRef<HTMLInputElement>(null)
  const riepilogoRef = useRef<HTMLDivElement>(null)
  const errore = esito.stato === 'errore' ? esito : null
  const valori = errore?.valori
  // conteggio caratteri: vale per il «giro» corrente, altrimenti la lunghezza del testo restituito
  const [digitato, setDigitato] = useState({ giro: -1, n: 0 })
  const lunghezza = digitato.giro === esito.giro ? digitato.n : (valori?.testo.length ?? 0)

  useEffect(() => {
    inizio.current = performance.now()
  }, [])

  useEffect(() => {
    if (esito.stato === 'ok') onInviata()
    if (esito.stato === 'errore') riepilogoRef.current?.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [esito])

  const errNome = errore?.campi.nome ? t.err.nome[errore.campi.nome as keyof typeof t.err.nome] : undefined
  const errTesto = errore?.campi.testo ? t.err.testo[errore.campi.testo as keyof typeof t.err.testo] : undefined
  const errConsenso = errore?.campi.consenso ? t.err.consenso.manca : undefined
  const errGenerale = errore?.generale ? t.err[errore.generale] : undefined
  const messaggi = [errGenerale, errNome, errTesto, errConsenso].filter(Boolean)
  const id = (s: string) => `domanda-${s}`

  return (
    <form
      action={azione}
      onSubmit={() => {
        if (secondiRef.current && inizio.current !== null)
          secondiRef.current.value = String(Math.floor((performance.now() - inizio.current) / 1000))
      }}
      noValidate
      className="border-2 border-ink bg-cream p-6 sm:p-8"
      aria-labelledby={id('titolo')}
    >
      <h2 id={id('titolo')} className="font-display text-2xl text-alpine">
        {t.titolo}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">{t.lead}</p>

      <div ref={riepilogoRef} tabIndex={-1} role="alert" aria-live="assertive" className="focus:outline-none">
        {messaggi.length > 0 && (
          <div className="mt-6 border-2 border-rosso bg-white p-4 text-sm text-rosso-dark">
            <p className="font-semibold">{t.erroriTitolo}</p>
            <ul className="mt-1 list-disc pl-5">
              {messaggi.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <input type="hidden" name="viaggio" value={viaggio} />
      <input type="hidden" name="lingua" value={lingua} />
      <input ref={secondiRef} type="hidden" name="secondi" defaultValue="0" />
      {/* honeypot: fuori schermo e fuori dal tab, le persone non lo vedono */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id('sito')}>{t.lasciaVuoto}</label>
        <input id={id('sito')} type="text" name="sito" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="mt-6 grid gap-6">
        <div className="max-w-md">
          <label htmlFor={id('nome')} className="text-sm font-semibold text-ink">
            {t.nome}
          </label>
          <p id={id('nome-aiuto')} className="mt-1 text-xs text-stone">
            {t.nomeAiuto}
          </p>
          <input
            id={id('nome')}
            name="nome"
            type="text"
            required
            maxLength={MAX_NOME}
            autoComplete="nickname"
            key={`nome-${esito.giro}`}
            defaultValue={valori?.nome ?? ''}
            aria-invalid={errNome ? true : undefined}
            aria-describedby={`${id('nome-aiuto')}${errNome ? ` ${id('nome-errore')}` : ''}`}
            className={CAMPO}
          />
          {errNome && (
            <p id={id('nome-errore')} className="mt-1.5 text-sm font-medium text-rosso">
              {errNome}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={id('testo')} className="text-sm font-semibold text-ink">
            {t.testo}
          </label>
          <p id={id('testo-aiuto')} className="mt-1 text-xs text-stone">
            {t.testoAiuto}
          </p>
          <textarea
            id={id('testo')}
            name="testo"
            required
            rows={5}
            minLength={MIN_TESTO}
            maxLength={MAX_TESTO}
            key={`testo-${esito.giro}`}
            defaultValue={valori?.testo ?? ''}
            onChange={(e) => setDigitato({ giro: esito.giro, n: e.target.value.length })}
            aria-invalid={errTesto ? true : undefined}
            aria-describedby={`${id('testo-aiuto')} ${id('testo-conta')}${errTesto ? ` ${id('testo-errore')}` : ''}`}
            className={`${CAMPO} resize-y`}
          />
          <p id={id('testo-conta')} className="mt-1 text-right text-xs text-stone">
            {t.caratteri(lunghezza, MAX_TESTO)}
          </p>
          {errTesto && (
            <p id={id('testo-errore')} className="text-sm font-medium text-rosso">
              {errTesto}
            </p>
          )}
        </div>

        <div>
          <div className="flex items-start gap-3">
            <input
              id={id('consenso')}
              name="consenso"
              type="checkbox"
              value="si"
              required
              key={`consenso-${esito.giro}`}
              defaultChecked={valori?.consenso ?? false}
              aria-invalid={errConsenso ? true : undefined}
              aria-describedby={errConsenso ? id('consenso-errore') : undefined}
              className="mt-0.5 size-5 shrink-0 cursor-pointer appearance-none border-2 border-ink bg-white checked:bg-rosso checked:[background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%20fill=%22none%22%20stroke=%22%23F4EEE3%22%20stroke-width=%222.5%22%3E%3Cpath%20d=%22M3%208.5l3%203%207-7%22/%3E%3C/svg%3E')] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2 aria-[invalid=true]:border-rosso"
            />
            <label htmlFor={id('consenso')} className="text-sm leading-relaxed text-ink">
              {t.consenso}
              <Link href="/privacy#domande" className="font-semibold text-rosso underline underline-offset-2 hover:text-rosso-dark">
                {t.privacy}
              </Link>
              {t.consensoCoda}
            </label>
          </div>
          {errConsenso && (
            <p id={id('consenso-errore')} className="mt-1.5 pl-8 text-sm font-medium text-rosso">
              {errConsenso}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={inCorso}
            aria-disabled={inCorso}
            className="inline-flex min-h-12 items-center border-2 border-ink bg-rosso px-6 text-sm font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-rosso-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
          >
            {inCorso ? t.invio : t.invia}
          </button>
        </div>
      </div>
    </form>
  )
}
