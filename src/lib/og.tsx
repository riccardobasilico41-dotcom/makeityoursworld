import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { siteConfig } from './site-config'

export const OG_SIZE = { width: 1200, height: 630 }
// JPEG e non PNG: con una foto a tutto campo il PNG pesa 1-2 MB, troppo per
// WhatsApp; il JPEG sta sui 100-200 KB. Se sharp manca si torna al PNG.
export const OG_CONTENT_TYPE = 'image/jpeg'

type Sharp = typeof import('sharp').default
let sharpCache: Promise<Sharp | null> | null = null
/** sharp arriva con Next (ottimizzazione immagini); se non c'è si lavora senza. */
const caricaSharp = () =>
  (sharpCache ??= import('sharp').then((m): Sharp => m.default).catch(() => null))

// Colori del sito in esadecimale: Satori non legge oklch() né le variabili CSS.
const PANNA = '#F4EEE3'
const INCHIOSTRO = '#161412'
const ROSSO = '#B3261E'

/*
 * Font del sito in versione statica TTF (Satori non legge woff2 né i font
 * variabili): istanze ricavate con fontTools dai woff2 di src/app/fonts.
 * Bricolage 800 per il titolo, Schibsted 600 per etichetta e firma, Courier
 * Prime 700 per il marchio a macchina da scrivere come nell'header.
 */
const FONT_DIR = path.join(process.cwd(), 'src/lib/og-fonts')
let fontCache: Promise<{ name: string; data: Buffer; weight: 600 | 700 | 800; style: 'normal' }[]> | null = null
function caricaFont() {
  fontCache ??= Promise.all([
    readFile(path.join(FONT_DIR, 'BricolageGrotesque-ExtraBold.ttf')),
    readFile(path.join(FONT_DIR, 'SchibstedGrotesk-SemiBold.ttf')),
    readFile(path.join(FONT_DIR, 'CourierPrime-Bold.ttf')),
  ]).then(([bricolage, schibsted, courier]) => [
    { name: 'Bricolage', data: bricolage, weight: 800, style: 'normal' },
    { name: 'Schibsted', data: schibsted, weight: 600, style: 'normal' },
    { name: 'Courier', data: courier, weight: 700, style: 'normal' },
  ])
  return fontCache
}

const MIME: Record<string, string> = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png' }

/**
 * Foto da /public come data URL. Solo JPEG e PNG (gli unici che Satori
 * decodifica in modo affidabile): per altri formati o file mancanti torna
 * null e la card passa al fondo panna, senza rompere la generazione.
 */
async function fotoDataUrl(src?: string, lato?: { width: number; height: number }): Promise<string | null> {
  if (!src || !src.startsWith('/')) return null
  const mime = MIME[path.extname(src).toLowerCase()]
  if (!mime) return null
  try {
    const dati = await leggiPubblico(src)
    // Le copertine arrivano fino a 5 MB: ridotte prima a misura di card,
    // Satori le decodifica in pochi millisecondi invece che in secondi.
    const sharp = lato ? await caricaSharp() : null
    if (sharp && lato) {
      const ridotta = await sharp(dati).rotate().resize(lato.width, lato.height, { fit: 'cover' }).jpeg({ quality: 88 }).toBuffer()
      return `data:image/jpeg;base64,${ridotta.toString('base64')}`
    }
    return `data:${mime};base64,${dati.toString('base64')}`
  } catch {
    return null
  }
}

/**
 * Legge un file di /public. In locale e al build c'è sul disco; nelle funzioni
 * Vercel (anteprime generate su richiesta) /public non viene incluso, quindi
 * si prende lo stesso file dal sito pubblicato, con la cache di fetch.
 */
async function leggiPubblico(src: string): Promise<Buffer> {
  try {
    return await readFile(path.join(process.cwd(), 'public', src))
  } catch {
    const res = await fetch(new URL(src, siteConfig.url), { cache: 'force-cache' })
    if (!res.ok) throw new Error(`Foto non trovata: ${src}`)
    return Buffer.from(await res.arrayBuffer())
  }
}

let avatarCache: Promise<string | null> | null = null
const avatar = () => (avatarCache ??= fotoDataUrl('/images/chi-sono/rick-avatar.jpg', { width: 184, height: 184 }))

function corpoTitolo(titolo: string, conFoto: boolean) {
  const n = titolo.length
  if (!conFoto) return n > 70 ? 70 : n > 45 ? 82 : 96
  return n > 70 ? 54 : n > 45 ? 62 : 72
}

/**
 * Anteprima social 1200×630 di tutte le pagine: la foto della pagina a tutto
 * campo con una sfumatura d'inchiostro in basso, etichetta rossa, titolo
 * (al massimo tre righe), marchio «make it yours.world» e la firma di Rick.
 * Senza foto: fondo panna con il titolo grande.
 */
export async function ogImage({
  eyebrow,
  titolo,
  immagine,
}: {
  /** Etichetta breve: Paese o continente. */
  eyebrow: string
  titolo: string
  /** Percorso in /public della foto di copertina. */
  immagine?: string
  /** Non più mostrato: tenuto per compatibilità con le chiamate esistenti. */
  sottotitolo?: string
}) {
  const [fonts, foto, faccia] = await Promise.all([caricaFont(), fotoDataUrl(immagine, OG_SIZE), avatar()])
  const conFoto = Boolean(foto)
  const testo = conFoto ? PANNA : INCHIOSTRO
  const size = corpoTitolo(titolo, conFoto)

  const png = new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: conFoto ? INCHIOSTRO : PANNA,
          fontFamily: 'Schibsted',
        }}
      >
        {foto && (
          // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
          <img
            src={foto}
            width={1200}
            height={630}
            style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, objectFit: 'cover' }}
          />
        )}
        {foto && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 1200,
              height: 630,
              display: 'flex',
              backgroundImage:
                'linear-gradient(180deg, rgba(22,20,18,0.55) 0%, rgba(22,20,18,0) 24%, rgba(22,20,18,0) 38%, rgba(22,20,18,0.72) 68%, rgba(22,20,18,0.94) 100%)',
            }}
          />
        )}
        {!foto && (
          <div
            style={{ position: 'absolute', left: 0, top: 0, width: 14, height: 630, display: 'flex', backgroundColor: ROSSO }}
          />
        )}

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '48px 64px 52px 72px',
          }}
        >
          {/* Marchio */}
          <div
            style={{
              display: 'flex',
              fontFamily: 'Courier',
              fontSize: 34,
              color: testo,
              letterSpacing: 0.5,
              textShadow: conFoto ? '0 1px 12px rgba(22,20,18,0.55)' : 'none',
            }}
          >
            <span>make it yours</span>
            <span style={{ color: ROSSO }}>.</span>
            <span>world</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48 }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: conFoto ? 860 : 900 }}>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: ROSSO,
                    color: PANNA,
                    fontSize: 22,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    padding: '8px 14px 7px',
                  }}
                >
                  {eyebrow}
                </div>
              </div>
              <div
                style={{
                  display: 'block',
                  marginTop: 22,
                  fontFamily: 'Bricolage',
                  fontSize: size,
                  lineHeight: 1.04,
                  letterSpacing: -1.5,
                  color: testo,
                  lineClamp: 3,
                }}
              >
                {titolo}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              {faccia ? (
                // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                <img
                  src={faccia}
                  width={92}
                  height={92}
                  style={{ width: 92, height: 92, borderRadius: 46, border: `3px solid ${conFoto ? PANNA : INCHIOSTRO}`, objectFit: 'cover' }}
                />
              ) : null}
              <div style={{ display: 'flex', fontSize: 24, color: testo }}>di Rick</div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  )

  const sharp = await caricaSharp()
  if (!sharp) return png
  const jpeg = await sharp(Buffer.from(await png.arrayBuffer())).jpeg({ quality: 82 }).toBuffer()
  return new Response(new Uint8Array(jpeg), {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': png.headers.get('Cache-Control') ?? 'public, immutable, no-transform, max-age=31536000',
    },
  })
}

/** Taglia un testo lungo alla lunghezza utile per una card social. */
export function ogTesto(testo: string, max = 120): string {
  if (testo.length <= max) return testo
  return testo.slice(0, max).replace(/\s+\S*$/, '') + '…'
}
