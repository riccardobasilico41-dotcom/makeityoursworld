#!/usr/bin/env node
// Test senza server della logica pura del quiz «Dove vado?» (src/lib/dove-vado.ts): lettura e
// scrittura dell'URL, punteggio, scelta dei 3-6 migliori, riga «perché» nelle tre lingue, link
// all'archivio filtrato, interessi e compagnia dai tag. Con dati finti, niente dipendenze nuove.
// Uso: node tools/test/dove-vado.mjs
import { createJiti } from 'jiti'
import { fileURLToPath } from 'node:url'
import assert from 'node:assert/strict'

const radice = fileURLToPath(new URL('../../', import.meta.url))
const jiti = createJiti(import.meta.url, { alias: { '@': radice + 'src' } })
const Q = await jiti.import(radice + 'src/lib/dove-vado.ts')

let ok = 0
const errori = []
function prova(nome, fn) {
  try {
    fn()
    ok++
  } catch (e) {
    errori.push(`${nome}: ${e.message}`)
  }
}

const v = (slug, campi = {}) => ({
  slug,
  titolo: slug,
  giorni: 10,
  durataBreve: '10 giorni',
  mesiConsigliati: [],
  europa: false,
  interessi: [],
  compagnia: [],
  costo: 'medio',
  ...campi,
})
const risp = (campi = {}) => ({ ...Q.RISPOSTE_VUOTE, ...campi })
const params = (qs) => new URLSearchParams(qs)

prova('URL: lettura e scarto dei valori sconosciuti', () => {
  const r = Q.leggiRisposte(params('quando=3&durata=8-14&budget=alto&ama=mare,cultura,xyz,mare&con=coppia&dove=europa'))
  assert.deepEqual(r, { quando: '3', durata: '8-14', budget: 'alto', ama: ['mare', 'cultura'], con: 'coppia', dove: 'europa' })
  const vuote = Q.leggiRisposte(params('quando=13&durata=2&budget=x&con=gatto&dove=luna'))
  assert.deepEqual(vuote, Q.RISPOSTE_VUOTE)
  assert.equal(Q.leggiRisposte(params('quando=flessibile')).quando, 'flessibile')
})

prova('URL: scrittura e andata/ritorno', () => {
  const r = risp({ quando: '7', durata: '4-7', budget: 'basso', ama: ['cibo', 'mare'], con: 'amici', dove: 'ovunque' })
  const qs = Q.scriviRisposte(r)
  assert.equal(qs, 'quando=7&durata=4-7&budget=basso&ama=mare,cibo&con=amici&dove=ovunque')
  assert.deepEqual(Q.leggiRisposte(params(qs)), { ...r, ama: ['mare', 'cibo'] })
  assert.equal(Q.scriviRisposte(Q.RISPOSTE_VUOTE), '')
})

prova('passi: primo aperto', () => {
  assert.equal(Q.primoPassoAperto(Q.RISPOSTE_VUOTE), 'quando')
  assert.equal(Q.primoPassoAperto(risp({ quando: '1', durata: 'weekend' })), 'budget')
  assert.equal(Q.primoPassoAperto(risp({ quando: '1', durata: 'weekend', budget: 'medio', ama: ['neve'], con: 'solo', dove: 'europa' })), null)
})

prova('punteggio: mese, durata, interessi, distanza', () => {
  const r = risp({ quando: '3', durata: '8-14', ama: ['mare', 'cultura'], dove: 'lontano' })
  const giusto = Q.punteggio(v('giusto', { mesiConsigliati: [2, 3], interessi: ['mare', 'cultura'] }), r)
  const sbagliato = Q.punteggio(v('sbagliato', { mesiConsigliati: [7], giorni: 2, europa: true, interessi: ['neve'] }), r)
  assert.ok(giusto.punti > sbagliato.punti)
  assert.deepEqual(giusto.motivi.map((m) => m.tipo), ['mese', 'durata', 'interessi', 'distanza'])
  assert.equal(sbagliato.motivi.length, 0)
})

prova('punteggio: dati mancanti non tolgono punti', () => {
  const r = risp({ quando: '3', durata: '8-14' })
  assert.equal(Q.punteggio(v('senza', { mesiConsigliati: [], giorni: null }), r).punti, 0)
})

prova('punteggio: flessibile e ovunque sono neutri', () => {
  const r = risp({ quando: 'flessibile', dove: 'ovunque' })
  assert.equal(Q.punteggio(v('a', { europa: true }), r).punti, Q.punteggio(v('b', { europa: false }), r).punti)
})

prova('migliori: da 3 a 6, in ordine', () => {
  const viaggi = Array.from({ length: 20 }, (_, i) => v(`v${i}`, { interessi: i < 8 ? ['mare'] : [], europa: i % 2 === 0 }))
  const r = risp({ ama: ['mare'], dove: 'europa' })
  const top = Q.migliori(viaggi, r)
  assert.ok(top.length >= 3 && top.length <= 6, `lunghezza ${top.length}`)
  assert.ok(top.every((x) => x.viaggio.europa && x.viaggio.interessi.includes('mare')))
  for (let i = 1; i < top.length; i++) assert.ok(top[i - 1].punti >= top[i].punti)
  // pochi viaggi: tutti, ma mai più di quelli che ci sono
  assert.equal(Q.migliori(viaggi.slice(0, 2), r).length, 2)
  // tutti uguali: almeno 3 risultati, nell'ordine dell'archivio
  assert.deepEqual(Q.migliori(viaggi, risp()).slice(0, 3).map((x) => x.viaggio.slug), ['v0', 'v1', 'v2'])
})

prova('perché: tre lingue', () => {
  const motivi = Q.punteggio(v('x', { mesiConsigliati: [3], interessi: ['mare', 'cultura'] }), risp({ quando: '3', durata: '8-14', ama: ['mare', 'cultura'] })).motivi
  assert.equal(Q.perche(motivi, 'it'), 'Marzo è uno dei mesi migliori, 10 giorni, mare e cultura')
  assert.equal(Q.perche(motivi, 'en'), 'March is one of the best months, 10 days, sea and culture')
  assert.equal(Q.perche(motivi, 'es'), 'Marzo es uno de los mejores meses, 10 días, mar y cultura')
  assert.equal(Q.perche([], 'it'), '')
})

prova('perché: tre interessi, compagnia e budget', () => {
  const m = [{ tipo: 'interessi', interessi: ['mare', 'cibo', 'citta'] }, { tipo: 'compagnia', con: 'famiglia' }, { tipo: 'budget', budget: 'basso' }]
  assert.equal(Q.perche(m, 'it'), 'Mare, cibo e città, adatto alle famiglie, costi contenuti sul posto')
})

prova('link all\'archivio', () => {
  assert.equal(Q.linkArchivio(risp({ quando: '3', durata: '8-14', dove: 'europa', ama: ['mare'] })), '/viaggi?quando=3&durata=8-14&area=europa&stile=mare')
  assert.equal(Q.linkArchivio(risp({ quando: 'flessibile', ama: ['mare', 'cultura'], dove: 'lontano' })), '/viaggi')
  assert.equal(Q.linkArchivio(risp({ ama: ['cibo'] })), '/viaggi?stile=gastronomia')
})

prova('interessi e compagnia dai testi', () => {
  assert.deepEqual(Q.interessiDa(['Mare', 'Cultura andina', 'Città', 'Street food']), ['mare', 'cultura', 'cibo', 'citta'])
  assert.deepEqual(Q.interessiDa(['Sci', 'Aurora boreale']), ['natura', 'neve'])
  assert.deepEqual(Q.compagniaDa(['con amici', 'coppie / famiglie con bambini']), ['coppia', 'amici', 'famiglia'])
  assert.deepEqual(Q.compagniaDa(['in autonomia']), [])
  assert.equal(Q.costoDelPaese('peru'), 'basso')
  assert.equal(Q.costoDelPaese('norvegia'), 'alto')
  assert.equal(Q.costoDelPaese('francia'), 'medio')
})

for (const e of errori) console.log(`  ✗ ${e}`)
console.log(`Quiz «Dove vado?»: ${ok} ok, ${errori.length} errori`)
process.exit(errori.length ? 1 : 0)
