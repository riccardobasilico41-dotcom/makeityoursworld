/**
 * Attesa fra una pagina e l'altra: il marchio con il punto rosso che pulsa e una riga che
 * scorre. Niente scheletri finti di contenuto; con riduzione del movimento resta fermo.
 */
export default function Caricamento() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6">
      <p className="font-[family-name:var(--font-typewriter)] text-2xl font-bold text-ink sm:text-3xl">
        make it yours<span className="text-rosso motion-safe:animate-pulse">.</span>world
      </p>
      <div aria-hidden className="relative h-0.5 w-48 overflow-hidden bg-ink/10">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-rosso motion-safe:animate-[scorri_1.1s_ease-in-out_infinite]" />
      </div>
      <p className="text-sm text-stone">Sto preparando lo zaino…</p>
    </div>
  )
}
