// Carica i contenuti TypeScript del sito (Paesi, Destinazioni, Esperienze, tappe) con jiti,
// già presente in node_modules come dipendenza di Tailwind/ESLint: nessun pacchetto nuovo.
import { createJiti } from 'jiti'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')

export async function caricaContenuti() {
  const jiti = createJiti(import.meta.url, { alias: { '@': path.join(ROOT, 'src') }, interopDefault: true })
  const geo = await jiti.import(path.join(ROOT, 'src/lib/geo.ts'))
  const paesi = geo.getAllPaesi()
  const destinazioni = geo.getAllDestinazioni()
  const esperienze = geo.getAllEsperienze()
  // tappe con lat/lng già verificate a mano nei viaggi-dati
  const tappe = []
  for (const p of paesi) {
    for (const d of geo.getDestinazioniByPaese(p.slug)) {
      for (const t of d.tripSlugs ?? []) {
        const meta = geo.getTripMeta(t)
        for (const tp of meta?.tappeMappa ?? []) {
          if (typeof tp.lat === 'number' && typeof tp.lng === 'number' && tp.destinazioneSlug) {
            tappe.push({ paese: p.slug, ...tp })
          }
        }
      }
    }
  }
  return { ROOT, paesi, destinazioni, esperienze, tappe }
}
