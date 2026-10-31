'use client'

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Compass, Landmark, MapPin, Search, Sparkles, Route, X, type LucideIcon } from 'lucide-react'
import { GRUPPI, cerca, preparaIndice, type TipoVoce, type VoceIndice } from '@/lib/ricerca'

type Indice = ReturnType<typeof preparaIndice>

// L'indice si scarica una volta sola, alla prima apertura.
let promessaIndice: Promise<Indice> | null = null
function caricaIndice(): Promise<Indice> {
  promessaIndice ??= fetch('/cerca.json')
    .then((r) => {
      if (!r.ok) throw new Error(String(r.status))
      return r.json() as Promise<VoceIndice[]>
    })
    .then(preparaIndice)
    .catch((e) => {
      promessaIndice = null
      throw e
    })
  return promessaIndice
}

const ICONE: Record<TipoVoce, LucideIcon> = {
  paese: Compass,
  destinazione: MapPin,
  viaggio: Route,
  esperienza: Sparkles,
  meraviglia: Landmark,
}

function campoModificabile(t: EventTarget | null) {
  if (!(t instanceof HTMLElement)) return false
  return t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName)
}

/**
 * Pulsante «Cerca» in testata + pannello di ricerca (dialog modale nativo:
 * a tutto schermo su mobile, centrato da sm in su). `/` e Cmd/Ctrl+K aprono,
 * Esc chiude; focus intrappolato nel pannello e restituito al pulsante.
 */
export function Ricerca() {
  const [aperto, setAperto] = useState(false)
  const [query, setQuery] = useState('')
  const [attivo, setAttivo] = useState(0)
  const [indice, setIndice] = useState<Indice | null>(null)
  const [errore, setErrore] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottoneRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const uid = useId()
  const idLista = `${uid}-risultati`
  const idOpzione = (i: number) => `${uid}-opzione-${i}`

  function apri() {
    const d = dialogRef.current
    if (!d || d.open) return
    setAperto(true)
    d.showModal()
    inputRef.current?.focus()
    inputRef.current?.select()
    if (!indice) {
      setErrore(false)
      caricaIndice().then(setIndice, () => setErrore(true))
    }
  }

  function chiudi() {
    dialogRef.current?.close()
  }

  // Chiusura (Esc, pulsante X, clic sullo sfondo, navigazione): focus al pulsante.
  function suChiusura() {
    setAperto(false)
    bottoneRef.current?.focus()
  }

  // Cambio pagina (anche col tasto Indietro): pannello chiuso. close() su un
  // dialog già chiuso non fa nulla; lo stato si aggiorna nell'evento close.
  useEffect(() => {
    dialogRef.current?.close()
  }, [pathname])

  // Scorciatoie globali: «/» (fuori dai campi di testo) e Cmd/Ctrl+K.
  const apriRef = useRef(apri)
  useEffect(() => {
    apriRef.current = apri
  })
  useEffect(() => {
    function tasto(e: globalThis.KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        apriRef.current()
      } else if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey && !campoModificabile(e.target)) {
        e.preventDefault()
        apriRef.current()
      }
    }
    document.addEventListener('keydown', tasto)
    return () => document.removeEventListener('keydown', tasto)
  }, [])

  // Pagina sotto ferma mentre il pannello è aperto.
  useEffect(() => {
    if (!aperto) return
    const prima = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prima
    }
  }, [aperto])

  const gruppi = useMemo(() => (indice ? cerca(indice, query) : new Map<TipoVoce, VoceIndice[]>()), [indice, query])
  const piatti = useMemo(() => GRUPPI.flatMap((g) => gruppi.get(g.tipo) ?? []), [gruppi])
  const totale = piatti.length
  const corrente = Math.min(attivo, Math.max(totale - 1, 0))

  useEffect(() => {
    if (totale) document.getElementById(idOpzione(corrente))?.scrollIntoView({ block: 'nearest' })
    // idOpzione dipende solo da uid, stabile
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [corrente, totale])

  function tastiInput(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown' && totale) {
      e.preventDefault()
      setAttivo((corrente + 1) % totale)
    } else if (e.key === 'ArrowUp' && totale) {
      e.preventDefault()
      setAttivo((corrente - 1 + totale) % totale)
    } else if (e.key === 'Home' && totale && e.ctrlKey) {
      e.preventDefault()
      setAttivo(0)
    } else if (e.key === 'End' && totale && e.ctrlKey) {
      e.preventDefault()
      setAttivo(totale - 1)
    } else if (e.key === 'Enter' && totale) {
      e.preventDefault()
      const voce = piatti[corrente]
      chiudi()
      router.push(voce.href)
    }
  }

  // Trappola del focus: Tab e Shift+Tab girano fra gli elementi del pannello.
  function tastiDialog(e: KeyboardEvent<HTMLDialogElement>) {
    // Esc chiude sempre: in un input type=search Chrome lo userebbe solo per svuotare il campo.
    if (e.key === 'Escape') {
      e.preventDefault()
      chiudi()
      return
    }
    if (e.key !== 'Tab') return
    const elementi = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>('input, button, a[href]:not([tabindex="-1"])') ?? [],
    )
    if (!elementi.length) return
    const primo = elementi[0]
    const ultimo = elementi[elementi.length - 1]
    if (e.shiftKey && document.activeElement === primo) {
      e.preventDefault()
      ultimo.focus()
    } else if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault()
      primo.focus()
    }
  }

  const q = query.trim()
  // Posizione del primo risultato di ogni gruppo nella lista piatta.
  const inizi = new Map<TipoVoce, number>()
  GRUPPI.reduce((acc, g) => {
    inizi.set(g.tipo, acc)
    return acc + (gruppi.get(g.tipo)?.length ?? 0)
  }, 0)

  return (
    <>
      <button
        ref={bottoneRef}
        type="button"
        onClick={apri}
        aria-haspopup="dialog"
        aria-expanded={aperto}
        aria-keyshortcuts="/ Control+K Meta+K"
        aria-label="Cerca nel sito (scorciatoia: / oppure Ctrl+K)"
        title="Cerca nel sito ( / oppure Ctrl+K )"
        className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap text-[0.95rem] font-semibold text-ink transition-colors duration-150 hover:text-rosso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
      >
        <Search size={20} aria-hidden="true" />
        {/* Testo e tasto solo da 1440px: sotto, il menu non ci sta su una riga. */}
        <span aria-hidden="true" className="hidden min-[1440px]:inline">Cerca</span>
        <kbd aria-hidden="true" className="hidden border border-ink/30 px-1.5 font-sans text-xs font-medium text-stone min-[1440px]:inline">
          /
        </kbd>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Cerca nel sito"
        onClose={suChiusura}
        onKeyDown={tastiDialog}
        onClick={(e) => {
          // Clic sullo sfondo (fuori dal contenuto) chiude.
          if (e.target === dialogRef.current) chiudi()
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none rounded-none bg-cream p-0 text-ink backdrop:bg-ink/60 sm:mx-auto sm:mt-[10vh] sm:h-auto sm:max-h-[80vh] sm:w-[calc(100%-4rem)] sm:max-w-2xl sm:border-2 sm:border-ink sm:shadow-[8px_8px_0_0_var(--color-ink)]"
      >
        <div className="flex h-full max-h-[inherit] flex-col">
          <div className="flex items-center gap-3 border-b-2 border-ink px-4 sm:px-5">
            <Search size={20} aria-hidden="true" className="shrink-0 text-stone" />
            <input
              ref={inputRef}
              type="search"
              role="combobox"
              aria-label="Cerca viaggi, Paesi, destinazioni, esperienze e meraviglie"
              aria-expanded={totale > 0}
              aria-controls={idLista}
              aria-autocomplete="list"
              aria-activedescendant={totale ? idOpzione(corrente) : undefined}
              autoComplete="off"
              spellCheck={false}
              enterKeyHint="go"
              placeholder="Cerca un Paese, una città, un viaggio…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setAttivo(0)
              }}
              onKeyDown={tastiInput}
              className="min-h-16 w-full min-w-0 flex-1 bg-transparent font-display text-xl text-ink outline-none placeholder:font-sans placeholder:text-base placeholder:text-stone [&::-webkit-search-cancel-button]:hidden"
            />
            <button
              type="button"
              onClick={chiudi}
              className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-ink hover:text-rosso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
            >
              <X size={18} aria-hidden="true" />
              <span className="sr-only sm:not-sr-only">Esc</span>
              <span className="sr-only">Chiudi la ricerca</span>
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <p aria-live="polite" className="sr-only">
              {q && indice ? (totale ? `${totale} risultati` : `Nessun risultato per "${q}"`) : ''}
            </p>

            {errore ? (
              <p className="px-5 py-8 text-stone">Non riesco a caricare la ricerca. Riprova fra poco.</p>
            ) : !indice ? (
              aperto && <p className="px-5 py-8 text-stone">Carico l&apos;indice…</p>
            ) : !q ? (
              <p className="px-5 py-8 text-sm leading-relaxed text-stone">
                Scrivi il nome di un Paese, di una città, di un viaggio o di una meraviglia. Frecce per scegliere, Invio
                per aprire.
              </p>
            ) : !totale ? (
              <p className="px-5 py-8 text-stone">
                Nessun risultato per <span className="font-semibold text-ink">&ldquo;{q}&rdquo;</span>
              </p>
            ) : null}

            <div id={idLista} role="listbox" aria-label="Risultati" hidden={!totale} className="pb-3">
              {GRUPPI.map((g) => {
                const voci = gruppi.get(g.tipo)
                if (!voci?.length) return null
                const idTitolo = `${uid}-gruppo-${g.tipo}`
                return (
                  <div key={g.tipo} role="group" aria-labelledby={idTitolo} className="pt-3">
                    <p
                      id={idTitolo}
                      role="presentation"
                      className="px-5 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-rosso"
                    >
                      {g.etichetta}
                    </p>
                    {voci.map((v, j) => {
                      const i = (inizi.get(g.tipo) ?? 0) + j
                      const sel = i === corrente
                      const Icona = ICONE[v.tipo]
                      return (
                        <Link
                          key={v.href}
                          id={idOpzione(i)}
                          href={v.href}
                          role="option"
                          aria-selected={sel}
                          tabIndex={-1}
                          onMouseMove={() => i !== corrente && setAttivo(i)}
                          onClick={chiudi}
                          className={`flex items-center gap-4 border-l-4 px-4 py-2 sm:px-5 ${
                            sel ? 'border-rosso bg-cream-dark' : 'border-transparent'
                          }`}
                        >
                          <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden border border-ink/15 bg-cream-dark text-stone">
                            {v.immagine ? (
                              <Image src={v.immagine} alt="" fill sizes="48px" className="object-cover" />
                            ) : (
                              <Icona size={20} aria-hidden="true" />
                            )}
                          </span>
                          <span className="min-w-0">
                            <span className={`block truncate font-medium ${sel ? 'text-rosso' : 'text-ink'}`}>{v.nome}</span>
                            {v.dettaglio && <span className="block truncate text-sm text-stone">{v.dettaglio}</span>}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}
