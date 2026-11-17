/**
 * Gli hotel con il nome scritto davvero nel testo di «Dove abbiamo dormito»: le schede
 * in grassetto «**Città — Nome hotel**» e le tabelle «| Notti | Città | Hotel |».
 * I consigli generici di zona («Monti o Trastevere…») non hanno un nome e restano fuori:
 * il link «Prenota» compare solo dove l'hotel è noto. Nessuna dipendenza da node:fs,
 * così lo usano anche i componenti client.
 */
export type HotelNoto = { hotel: string; citta: string }

const pulisci = (s: string) =>
  s
    .replace(/\*?\([^)]*\)\*?/g, '')
    .replace(/[.:;]+$/, '')
    .replace(/\s+/g, ' ')
    .trim()

/** «Regal Réseau Hotel & Spa e Goldi Sands Hotel» → due hotel. */
const separa = (s: string) => s.split(/\s+(?:e|and|y)\s+(?=\p{Lu})/u)

export function hotelNoti(doveDormito: string): HotelNoto[] {
  if (!doveDormito) return []
  const trovati: HotelNoto[] = []
  const aggiungi = (citta: string, hotel: string) => {
    const c = pulisci(citta).split(',')[0].trim()
    for (const h of separa(pulisci(hotel))) trovati.push({ citta: c, hotel: h.trim() })
  }

  for (const m of doveDormito.matchAll(/\*\*([^*\n]+?)\s+[—–]\s+([^*\n]+?)\*\*/g)) aggiungi(m[1], m[2])

  const righe = doveDormito.split('\n').filter((r) => r.trim().startsWith('|'))
  const intestazione = righe[0]?.split('|').map((c) => c.trim().toLowerCase()) ?? []
  const iHotel = intestazione.findIndex((c) => /^(hotel|alloggio|struttura|accommodation|alojamiento)/.test(c))
  const iCitta = intestazione.findIndex((c) => /^(citt|city|ciudad|luogo|place|lugar)/.test(c))
  if (iHotel > 0 && iCitta > 0)
    for (const r of righe.slice(2)) {
      const celle = r.split('|').map((x) => x.trim())
      if (celle[iHotel] && celle[iCitta]) aggiungi(celle[iCitta], celle[iHotel])
    }

  const visti = new Set<string>()
  return trovati.filter((h) => {
    const k = h.hotel.toLowerCase()
    if (!h.citta || h.hotel.length < 3 || h.hotel.length > 60 || !/^[\p{Lu}\d]/u.test(h.hotel) || visti.has(k)) return false
    visti.add(k)
    return true
  })
}

/** L'hotel noto citato in un testo (es. il pernottamento di un giorno), o undefined. */
export function hotelCitato(testo: string | undefined, hotel: HotelNoto[]): HotelNoto | undefined {
  if (!testo) return undefined
  const t = testo.toLowerCase()
  return hotel.find((h) => t.includes(h.hotel.toLowerCase()))
}
