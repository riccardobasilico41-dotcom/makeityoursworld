#!/usr/bin/env node
// Test senza server della logica pura del Travel Finder (src/lib/viaggi-filtri-stato.ts):
// filtri singoli e combinati, reset, zero risultati, lettura/scrittura dell'URL, Paesi-regione
// raggruppati sotto lo Stato, stagione breve e budget delle card. Con dati finti; in fondo una
// verifica sui dati reali (src/lib/viaggi-filtri.ts), saltata se i contenuti non si caricano.
// Uso: node tools/test/finder-filtri.mjs
import { createJiti } from 'jiti'
import { fileURLToPath } from 'node:url'
import assert from 'node:assert/strict'

const radice = fileURLToPath(new URL('../../', import.meta.url))
const jiti = createJiti(import.meta.url, { alias: { '@': radice + 'src' } })
const F = await jiti.import(radice + 'src/lib/viaggi-filtri-stato.ts')
const { AREE } = await jiti.import(radice + 'src/lib/aree.ts')

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

const viaggio = (slug, campi) => ({
  slug,
  titolo: slug,
  descrizione: '',
  categorie: [],
  tags: [],
  durata: '',
  durataBreve: '',
  periodoBreve: '',
  paesi: [],
  aree: [],
  giorni: null,
  stili: [],
  mesi: [],
  mesiConsigliati: [],
  ricerca: F.normalizza(slug),
  ...campi,
})

const VIAGGI = [
  viaggio('lofoten', { paesi: ['norvegia'], aree: ['europa'], giorni: 8, stili: ['trekking', 'montagna'], mesi: [7], mesiConsigliati: [6, 7, 8], ricerca: 'lofoten norvegia reine' }),
  viaggio('tromso', { paesi: ['norvegia'], aree: ['europa'], giorni: 5, stili: ['aurora boreale'], mesiConsigliati: [9, 10, 11, 12, 1, 2, 3], ricerca: 'tromso norvegia aurora' }),
  viaggio('giappone', { paesi: ['giappone'], aree: ['asia'], giorni: 12, stili: ['gastronomia'], mesi: [4], mesiConsigliati: [4], ricerca: 'giappone tokyo kyoto' }),
  viaggio('california', { paesi: ['california'], aree: ['americhe'], giorni: 15, stili: [], mesiConsigliati: [5, 6, 7, 8, 9], ricerca: 'california stati uniti' }),
  viaggio('praga', { paesi: ['repubblica-ceca'], aree: ['europa'], giorni: 3, stili: [], ricerca: 'praga' }),
]
const PAESI = new Set(['norvegia', 'giappone', 'california', 'repubblica-ceca'])
const filtra = (s) => VIAGGI.filter((v) => F.passaFiltri(v, s)).map((v) => v.slug)
const stato = (qs) => F.leggiStato(new URLSearchParams(qs), PAESI)
const area = AREE[0].slug // un'area esistente qualsiasi, per la lettura dell'URL

// --- filtri singoli ---
prova('nessun filtro = tutti', () => assert.deepEqual(filtra(F.NESSUN_FILTRO), VIAGGI.map((v) => v.slug)))
prova('paese', () => assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, paese: 'norvegia' }), ['lofoten', 'tromso']))
prova('area', () => assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, area: 'asia' }), ['giappone']))
prova('durata weekend', () => assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, durata: 'weekend' }), ['praga']))
prova('durata 15+', () => assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, durata: '15+' }), ['california']))
prova('stile', () => assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, stile: 'trekking' }), ['lofoten']))
prova('quando andare (mesi consigliati)', () => assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, quando: '7' }), ['lofoten', 'california']))
prova('quando andare a cavallo dell’anno', () => assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, quando: '1' }), ['tromso']))
prova('quando ci sono andato (mesi reali) ≠ quando andare', () => {
  assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, mese: '7' }), ['lofoten'])
  assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, mese: '1' }), [])
})
prova('ricerca senza accenti, tutte le parole', () => {
  assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, q: 'norvegia aurora' }), ['tromso'])
  assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, q: 'Stati Uniti' }), ['california'])
})

// --- combinati ---
prova('paese + quando', () => assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, paese: 'norvegia', quando: '10' }), ['tromso']))
prova('area + durata + stile', () =>
  assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, area: 'europa', durata: '8-14', stile: 'montagna' }), ['lofoten']))
prova('quando + mese insieme', () => assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, quando: '4', mese: '4' }), ['giappone']))
prova('ignora un filtro (conteggi delle opzioni)', () => {
  const s = { ...F.NESSUN_FILTRO, paese: 'norvegia', quando: '4' }
  assert.equal(VIAGGI.filter((v) => F.passaFiltri(v, s, 'quando')).length, 2)
})

// --- zero risultati e reset ---
prova('zero risultati', () => assert.deepEqual(filtra({ ...F.NESSUN_FILTRO, paese: 'giappone', quando: '8' }), []))
prova('togliere un filtro dallo stato vuoto lo riempie', () => {
  const s = { ...F.NESSUN_FILTRO, paese: 'giappone', quando: '8' }
  assert.deepEqual(filtra({ ...s, quando: '' }), ['giappone'])
})
prova('reset: NESSUN_FILTRO svuota l’URL tranne le chiavi estranee e l’ordine', () => {
  const qs = F.scriviQuery('utm=x&paese=norvegia&quando=7&q=lofoten&mese=7&ordine=durata-asc', F.NESSUN_FILTRO)
  assert.equal(qs, 'utm=x&ordine=durata-asc')
  assert.deepEqual(F.STATO_VUOTO.sequenza, [])
  for (const k of F.CHIAVI_FILTRO) assert.equal(F.STATO_VUOTO[k], '')
})

// --- URL: lettura ---
prova('lettura URL valida', () => {
  const s = stato(`paese=norvegia&quando=10&durata=4-7&area=${area}&stile=aurora%20boreale&mese=12&ordine=durata-desc&q=%20tromso%20`)
  assert.equal(s.paese, 'norvegia')
  assert.equal(s.quando, '10')
  assert.equal(s.durata, '4-7')
  assert.equal(s.area, area)
  assert.equal(s.stile, 'aurora boreale')
  assert.equal(s.mese, '12')
  assert.equal(s.ordine, 'durata-desc')
  assert.equal(s.q, 'tromso')
  assert.deepEqual(s.sequenza, ['paese', 'quando', 'durata', 'area', 'stile', 'mese', 'q'])
})
prova('lettura URL: valori sconosciuti scartati', () => {
  const s = stato('paese=atlantide&quando=13&mese=0&durata=lunga&area=luna&stile=sushi&ordine=caso')
  for (const k of F.CHIAVI_FILTRO) assert.equal(s[k], '', k)
  assert.equal(s.ordine, 'consigliati')
  assert.deepEqual(s.sequenza, [])
})
prova('lettura URL: ricerca tagliata a 80 caratteri', () => assert.equal(stato(`q=${'a'.repeat(200)}`).q.length, 80))

// --- URL: scrittura ---
prova('scrittura: la chiave cambiata va in fondo', () =>
  assert.equal(F.scriviQuery('quando=7&paese=norvegia', { quando: '8' }), 'paese=norvegia&quando=8'))
prova('scrittura: valore vuoto toglie la chiave', () => assert.equal(F.scriviQuery('quando=7&paese=norvegia', { quando: '' }), 'paese=norvegia'))
prova('scrittura: ordine predefinito non va nell’URL', () => assert.equal(F.scriviQuery('ordine=durata-asc', { ordine: 'consigliati' }), ''))
prova('andata e ritorno URL → stato → URL', () => {
  const qs = F.scriviQuery('', { paese: 'giappone', quando: '4', stile: 'gastronomia' })
  const s = stato(qs)
  assert.deepEqual(filtra(s), ['giappone'])
  assert.deepEqual(s.sequenza, ['paese', 'quando', 'stile'])
})

// --- Paesi-regione sotto lo Stato ---
prova('etichetta e ordine dei Paesi-regione', () => {
  const paesi = [
    { slug: 'stati-uniti-florida', nome: 'Florida', area: 'americhe', stato: 'Stati Uniti' },
    { slug: 'malesia', nome: 'Malesia', area: 'asia' },
    { slug: 'california', nome: 'California', area: 'americhe', stato: 'Stati Uniti' },
    { slug: 'borneo', nome: 'Borneo', area: 'asia', stato: 'Malesia' },
    { slug: 'messico', nome: 'Messico', area: 'americhe' },
    { slug: 'transilvania', nome: 'Transilvania', area: 'europa', stato: 'Romania' },
  ]
  const ordinati = F.ordinaPaesi(paesi, 'it').map(F.etichettaPaese)
  assert.deepEqual(ordinati, ['Malesia', 'Malesia › Borneo', 'Messico', 'Romania › Transilvania', 'Stati Uniti › California', 'Stati Uniti › Florida'])
  assert.equal(new Set(ordinati).size, ordinati.length)
})

// --- card ---
prova('stagione breve', () => {
  assert.equal(F.stagioneBreve([5, 6, 7, 8, 9], 'it'), 'Mag–Set')
  assert.equal(F.stagioneBreve([9, 10, 11, 12, 1, 2, 3], 'it'), 'Set–Mar')
  assert.equal(F.stagioneBreve([12, 1], 'en'), 'Dec–Jan')
  assert.equal(F.stagioneBreve([4, 5, 9, 10], 'es'), 'Abr–May, Sep–Oct')
  assert.equal(F.stagioneBreve([4], 'it'), 'Apr')
  assert.equal(F.stagioneBreve([4, 10, 11], 'it'), 'Apr, Ott–Nov')
  assert.equal(F.stagioneBreve([], 'it'), '')
  assert.equal(F.stagioneBreve(undefined, 'it'), '')
  assert.equal(F.stagioneBreve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'en'), 'All year')
})
prova('budget breve: testo pubblicato, niente cifre inventate', () => {
  assert.equal(
    F.budgetBreve('indicativamente 2.000-3.000 € a persona in due, voli internazionali esclusi'),
    '2.000-3.000 € a persona in due, voli internazionali esclusi'
  )
  assert.equal(F.budgetBreve('1.500€ (budget base) - 1.800€ (livello ottimo) a persona'), '1.500€ - 1.800€ a persona')
  assert.equal(F.budgetBreve(undefined), undefined)
  assert.equal(F.budgetBreve('dipende'), undefined)
})

// --- dati reali (facoltativo) ---
let reali = 'saltato'
try {
  const R = await jiti.import(radice + 'src/lib/viaggi-filtri.ts')
  const { getAllViaggi } = await jiti.import(radice + 'src/lib/viaggi.ts')
  const tutti = getAllViaggi('it').map((v) => ({ slug: v.slug, ...R.datiFiltroViaggio(v, 'it') }))
  const paesi = R.opzioniPaesi('it')
  prova('reali: ogni Paese compare una volta', () => assert.equal(new Set(paesi.map((p) => p.slug)).size, paesi.length))
  prova('reali: le regioni hanno lo Stato', () => {
    const cal = paesi.find((p) => p.slug === 'california')
    if (cal) assert.equal(F.etichettaPaese(cal), `${cal.stato} › ${cal.nome}`)
  })
  prova('reali: ogni mese ha almeno un viaggio consigliato', () => {
    for (let m = 1; m <= 12; m++) assert.ok(tutti.some((v) => F.passaFiltri(v, { ...F.NESSUN_FILTRO, quando: String(m) })), `mese ${m}`)
  })
  const conQuando = tutti.filter((v) => v.mesiConsigliati.length).length
  const conMese = tutti.filter((v) => v.mesi.length).length
  const conBudget = tutti.filter((v) => v.budget).length
  reali = `${tutti.length} viaggi, ${conQuando} con mesi consigliati, ${conMese} con mese reale, ${conBudget} con budget, ${paesi.length} Paesi nel filtro`
} catch (e) {
  reali = `saltato (${e.message.split('\n')[0]})`
}

console.log(`Dati reali: ${reali}`)
if (errori.length) {
  console.error(`${errori.length} errori su ${ok + errori.length} prove:\n- ${errori.join('\n- ')}`)
  process.exit(1)
}
console.log(`OK: ${ok} prove passate`)
