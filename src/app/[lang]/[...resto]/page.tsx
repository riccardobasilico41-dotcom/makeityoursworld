import { notFound } from 'next/navigation'

// Ogni indirizzo che il proxy porta in /[lang]/… senza una pagina vera finisce qui:
// così il 404 resta dentro il layout della lingua (con header, footer e testi tradotti).
export default function NonTrovata() {
  notFound()
}
