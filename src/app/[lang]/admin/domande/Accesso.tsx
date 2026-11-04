'use client'

import { useActionState } from 'react'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import type { Lingua } from '@/lib/i18n/config'
import { accedi, type EsitoAccesso } from './azioni'

const T = {
  it: {
    password: 'Password',
    entra: 'Entra',
    entrando: 'Controllo…',
    err: { password: 'Password sbagliata.', troppi: 'Troppi tentativi: riprova tra 15 minuti.', manca: 'DOMANDE_PASSWORD non è impostata.' },
  },
  en: {
    password: 'Password',
    entra: 'Sign in',
    entrando: 'Checking…',
    err: { password: 'Wrong password.', troppi: 'Too many attempts: try again in 15 minutes.', manca: 'DOMANDE_PASSWORD is not set.' },
  },
  es: {
    password: 'Contraseña',
    entra: 'Entrar',
    entrando: 'Comprobando…',
    err: { password: 'Contraseña incorrecta.', troppi: 'Demasiados intentos: vuelve a intentarlo en 15 minutos.', manca: 'DOMANDE_PASSWORD no está configurada.' },
  },
} satisfies Record<Lingua, unknown>

export function Accesso() {
  const t = T[useLingua()]
  const [esito, azione, inCorso] = useActionState<EsitoAccesso, FormData>(accedi, {})
  return (
    <form action={azione} className="max-w-sm border-2 border-ink bg-cream p-6">
      <label htmlFor="admin-password" className="text-sm font-semibold text-ink">
        {t.password}
      </label>
      <input
        id="admin-password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
        aria-invalid={esito.errore ? true : undefined}
        aria-describedby={esito.errore ? 'admin-errore' : undefined}
        className="mt-2 block w-full border-2 border-ink bg-white px-3 py-2.5 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
      />
      <p id="admin-errore" role="alert" className="mt-2 min-h-5 text-sm font-medium text-rosso">
        {esito.errore ? t.err[esito.errore] : ''}
      </p>
      <button
        type="submit"
        disabled={inCorso}
        className="mt-2 inline-flex min-h-11 items-center border-2 border-ink bg-rosso px-5 text-sm font-semibold text-cream hover:bg-rosso-dark disabled:opacity-70"
      >
        {inCorso ? t.entrando : t.entra}
      </button>
    </form>
  )
}
