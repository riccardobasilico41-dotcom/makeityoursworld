/* eslint-disable @next/next/no-img-element -- pagina solo per la stampa in PDF: servono <img> semplici, caricati subito */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { guide } from '@/content/guide/giordania-itinerario'
import type { ContattoGuida, Gps, Guida, LuogoGuida, TappaMappa } from '@/content/guide/types'
import { copertineViaggi } from '@/content/viaggi-copertine'
import { creditiCopertine } from '@/content/viaggi-copertine-crediti'
import { creditiGiornoFoto } from '@/content/viaggi-giorno-foto-crediti'
import { getTripMeta } from '@/lib/geo'
import { qrPath } from '@/lib/qr'
import { siteConfig } from '@/lib/site-config'
import { stileStampa } from './stile'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(guide).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps<'/guide/[slug]/stampa'>): Promise<Metadata> {
  const { slug } = await params
  const g = guide[slug]
  if (!g) return {}
  return {
    title: `${g.titolo}, la guida da stampare`,
    robots: { index: false, follow: false },
  }
}

const mapsUrl = (gps: Gps) => `https://maps.google.com/?q=${gps[0]},${gps[1]}`
const mapsCorto = (gps: Gps) => `maps.google.com/?q=${gps[0]},${gps[1]}`
const ore = (min: number) => {
  const h = Math.floor(min / 60)
  const m = min % 60
  return h ? `${h} h ${String(m).padStart(2, '0')}` : `${m} min`
}

function Qr({ testo, mm = 17 }: { testo: string; mm?: number }) {
  const { path, size } = qrPath(testo)
  return (
    <svg className="qr" viewBox={`0 0 ${size} ${size}`} style={{ width: `${mm}mm`, height: `${mm}mm` }} shapeRendering="crispEdges" aria-label={testo}>
      <rect width={size} height={size} fill="#fff" />
      <path d={path} fill="#161412" />
    </svg>
  )
}

function Fonti({ ids, indice }: { ids: string[]; indice: Map<string, number> }) {
  const n = ids.map((id) => indice.get(id)).filter((x): x is number => x !== undefined)
  if (!n.length) return null
  return <sup className="fonti">[{n.join(', ')}]</sup>
}

const ETICHETTA_STATO: Record<ContattoGuida['stato'], string> = {
  usato: 'Nel mio viaggio',
  ufficiale: 'Ufficiale',
  'non-provato': 'Non provato personalmente',
}

function Contatto({ c, indice }: { c: ContattoGuida; indice: Map<string, number> }) {
  return (
    <div className="contatto">
      <div className="contatto-testo">
        <p className="contatto-nome">
          {c.nome} <span className={`stato stato-${c.stato}`}>{ETICHETTA_STATO[c.stato]}</span>
          <Fonti ids={c.fonti} indice={indice} />
        </p>
        <p className="contatto-cosa">{c.cosa}</p>
        {c.indirizzo && <p className="riga">{c.indirizzo}</p>}
        {(c.telefono || c.web) && (
          <p className="riga forte">
            {c.telefono}
            {c.telefono && c.web ? ' · ' : ''}
            {c.web}
          </p>
        )}
        {c.gps && <p className="riga gps">GPS {c.gps[0]}, {c.gps[1]}</p>}
        {c.avviso && <p className="avviso">{c.avviso}</p>}
      </div>
      {c.gps && <Qr testo={mapsUrl(c.gps)} mm={14} />}
    </div>
  )
}

function Luogo({ l, indice }: { l: LuogoGuida; indice: Map<string, number> }) {
  return (
    <div className="luogo">
      <div className="luogo-testo">
        <p className="luogo-nome">
          {l.nome}
          <Fonti ids={l.fonti} indice={indice} />
        </p>
        <dl>
          {l.indirizzo && (<><dt>Dove</dt><dd>{l.indirizzo}</dd></>)}
          {l.orari && (<><dt>Orari</dt><dd>{l.orari}</dd></>)}
          {l.biglietto && (<><dt>Biglietto</dt><dd>{l.biglietto}</dd></>)}
          {l.jordanPass && (<><dt>Jordan Pass</dt><dd>{l.jordanPass}</dd></>)}
          {l.telefono && (<><dt>Contatti</dt><dd>{l.telefono}{l.web ? ` · ${l.web}` : ''}</dd></>)}
          {!l.telefono && l.web && (<><dt>Sito</dt><dd>{l.web}</dd></>)}
          {l.gps && (<><dt>GPS</dt><dd>{l.gps[0]}, {l.gps[1]} <span className="url">{mapsCorto(l.gps)}</span></dd></>)}
        </dl>
        {l.nota && <p className="avviso">{l.nota}</p>}
      </div>
      {l.gps && <Qr testo={mapsUrl(l.gps)} />}
    </div>
  )
}

/* ---------- Mappa del percorso (SVG schematico, proiezione equirettangolare) ---------- */

const LNG0 = 34.72
const LAT1 = 32.42
const S = 178
const COS = Math.cos((31 * Math.PI) / 180)
const px = ([lat, lng]: Gps): [number, number] => [(lng - LNG0) * COS * S + 30, (LAT1 - lat) * S + 20]

const MAR_MORTO: Gps[] = [
  [31.77, 35.555], [31.72, 35.59], [31.6, 35.585], [31.45, 35.585], [31.3, 35.56], [31.2, 35.53], [31.1, 35.5],
  [31.05, 35.44], [31.12, 35.4], [31.3, 35.42], [31.5, 35.46], [31.65, 35.48], [31.75, 35.52],
]
const GOLFO: Gps[] = [[29.555, 34.975], [29.5, 34.99], [29.38, 34.96], [29.3, 34.93], [29.3, 34.84], [29.45, 34.88], [29.54, 34.93]]

function Mappa({ tappe }: { tappe: TappaMappa[] }) {
  const p = (nome: string) => px(tappe.find((t) => t.nome.startsWith(nome))!.gps)
  const percorso = ['Aeroporto', 'Amman', 'Jerash', 'Mar Morto', 'Monte Nebo', 'Madaba', 'Karak', 'Petra', 'Little Petra', 'Petra', 'Wadi Rum', 'Aqaba']
  const linea = percorso.map((n) => p(n).join(',')).join(' ')
  const ritorno = [p('Aqaba'), p('Amman'), p('Aeroporto')].map((q) => q.join(',')).join(' ')
  const poly = (pts: Gps[]) => pts.map((g) => px(g).join(',')).join(' ')
  const km50 = (50 / 111) * S
  return (
    <svg viewBox="40 22 330 560" className="mappa" role="img" aria-label="Mappa schematica del percorso">
      <polygon points={poly(MAR_MORTO)} fill="#cfdde3" />
      <polygon points={poly(GOLFO)} fill="#cfdde3" />
      <text x={px([31.4, 35.3])[0]} y={px([31.4, 35.3])[1]} className="m-acqua" textAnchor="end">Mar Morto</text>
      <text x={px([29.36, 34.99])[0]} y={px([29.36, 34.99])[1]} className="m-acqua">Golfo di Aqaba</text>
      <polyline points={ritorno} fill="none" stroke="#B3261E" strokeWidth="1.6" strokeDasharray="4 3" />
      <polyline points={linea} fill="none" stroke="#B3261E" strokeWidth="2.4" strokeLinejoin="round" />
      {tappe.map((t) => {
        const [x, y] = px(t.gps)
        const pos = t.etichetta ?? 'destra'
        const dx = pos === 'destra' ? 8 : pos === 'sinistra' ? -8 : 0
        const dy = pos === 'sopra' ? -18 : pos === 'sotto' ? 15 : 3
        const anchor = pos === 'sinistra' ? 'end' : pos === 'destra' ? 'start' : 'middle'
        return (
          <g key={t.nome}>
            <circle cx={x} cy={y} r="4.2" fill="#fff" stroke="#161412" strokeWidth="1.6" />
            <text x={x + dx} y={y + dy} textAnchor={anchor} className="m-nome">{t.nome}</text>
            <text x={x + dx} y={y + dy + 10} textAnchor={anchor} className="m-giorno">{t.giorno}</text>
          </g>
        )
      })}
      <g transform="translate(260 520)">
        <line x1="0" y1="0" x2={km50} y2="0" stroke="#161412" strokeWidth="1.5" />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#161412" />
        <line x1={km50} y1="-4" x2={km50} y2="4" stroke="#161412" />
        <text x={km50 / 2} y="14" textAnchor="middle" className="m-giorno">50 km</text>
      </g>
      <g transform="translate(350 60)">
        <path d="M0 -16 L6 4 L0 0 L-6 4 Z" fill="#161412" />
        <text x="0" y="16" textAnchor="middle" className="m-nome">N</text>
      </g>
    </svg>
  )
}

/* ---------- Pagina ---------- */

export default async function GuidaStampa({ params, searchParams }: PageProps<'/guide/[slug]/stampa'>) {
  const { slug } = await params
  const { parte: p } = await searchParams
  const parte = typeof p === 'string' ? p : undefined
  const g: Guida | undefined = guide[slug]
  if (!g) notFound()

  const indice = new Map(g.fonti.map((f, i) => [f.id, i + 1]))
  const copertina = copertineViaggi[g.tripSlug]
  const creditoCopertina = creditiCopertine[g.tripSlug]
  const meta = getTripMeta(g.tripSlug)
  const crediti = creditiGiornoFoto[g.tripSlug] ?? {}
  const totali = g.jordanPass?.calcolo.reduce(
    (a, r) => ({ senza: a.senza + r.senzaPass, con: a.con + r.conPass }),
    { senza: 0, con: 0 },
  )
  const kmTotali = g.giorni.flatMap((d) => d.tratte).reduce((a, t) => a + t.km, 0)

  return (
    <div className="guida">
      <style dangerouslySetInnerHTML={{ __html: stileStampa({ paese: g.paese, marchio: siteConfig.brandName, autore: g.autore, verificatoAl: g.verificatoAl, parte }) }} />

      {/* Copertina */}
      {parte !== 'interno' && (<section className="copertina">
        {copertina && <img src={copertina.immagine} alt={copertina.imageAlt} className="copertina-foto" />}
        <div className="copertina-velo" />
        <div className="copertina-testo">
          <p className="marchio">make it yours.world</p>
          <div>
            <p className="occhiello">Guida pratica · {g.giorni.length} giorni</p>
            <h1>{g.titolo}</h1>
            <p className="copertina-sotto">{g.sottotitolo}</p>
            <p className="firma">di {g.autore}</p>
            <p className="verificato">Prezzi, orari e regole verificati a {g.verificatoAl}</p>
          </div>
        </div>
      </section>)}

      {parte !== 'copertina' && (<>
      {/* Introduzione e indice */}
      <section className="pagina">
        <p className="occhiello rosso">Prima di cominciare</p>
        <h2>Come usare questa guida</h2>
        {g.intro.map((p, i) => (<p key={i} className="testo">{p}</p>))}
        <h3>Cosa c&apos;è qui e non sul sito</h3>
        <ul className="puntini">
          {g.cosaInPiu.map((c) => (<li key={c}>{c}</li>))}
        </ul>
        <h3 className="a-capo">Indice</h3>
        <ol className="indice">
          <li>Il percorso in una pagina</li>
          <li>Jordan Pass: conviene?</li>
          <li>Prima di partire</li>
          {g.giorni.map((d) => (<li key={d.numero}>Giorno {d.numero} · {d.titolo}</li>))}
          <li>Emergenze</li>
          <li>Contatti utili</li>
          <li>Budget</li>
          <li>Valigia</li>
          <li>Frasario</li>
          <li>Fonti e crediti</li>
        </ol>
        <h3>Come leggere le schede</h3>
        <div className="legenda">
          <p><strong>QR</strong> Inquadralo con la fotocamera: apre il punto esatto su Google Maps. Sotto c&apos;è anche l&apos;indirizzo breve da digitare.</p>
          <p><strong>[3]</strong> I numeri tra parentesi quadre rimandano alle fonti in fondo alla guida.</p>
          <p><span className="stato stato-usato">Nel mio viaggio</span> posto che era nel mio programma · <span className="stato stato-non-provato">Non provato personalmente</span> nome preso da un registro ufficiale, senza esperienza diretta.</p>
        </div>
      </section>

      {/* Mappa */}
      <section className="pagina">
        <p className="occhiello rosso">Mappa offline</p>
        <h2>Il percorso in una pagina</h2>
        <div className="mappa-griglia">
          <Mappa tappe={g.tappe} />
          <div className="mappa-legenda">
            <p className="piccolo">Linea piena: andata verso sud. Tratteggio: rientro sulla Desert Highway. Schema non in scala per le coste.</p>
            <table className="tabella stretta">
              <thead><tr><th>G</th><th>Tratta</th><th>km</th><th>guida</th></tr></thead>
              <tbody>
                {g.giorni.flatMap((d) =>
                  d.tratte.map((t, i) => (
                    <tr key={`${d.numero}-${i}`}>
                      <td>{i === 0 ? d.numero : ''}</td>
                      <td>{t.da} → {t.a}</td>
                      <td className="num">{t.km}</td>
                      <td className="num">{ore(t.minuti)}</td>
                    </tr>
                  )),
                )}
                <tr className="totale"><td></td><td>Totale su strada</td><td className="num">{kmTotali}</td><td></td></tr>
              </tbody>
            </table>
            <p className="piccolo">Tempi stimati senza traffico (OSRM su OpenStreetMap)<Fonti ids={['osrm']} indice={indice} />: aggiungi un 15-25% per traffico e soste.</p>
          </div>
        </div>
      </section>

      {/* Jordan Pass */}
      {g.jordanPass && totali && (
        <section className="pagina">
          <p className="occhiello rosso">La prima decisione</p>
          <h2>Jordan Pass: conviene?</h2>
          <p className="testo">{g.jordanPass.regola}<Fonti ids={g.jordanPass.fonti} indice={indice} /></p>
          <table className="tabella">
            <thead><tr><th>Se…</th><th>allora</th></tr></thead>
            <tbody>
              {g.jordanPass.scenari.map((s) => (<tr key={s.situazione}><td>{s.situazione}</td><td className="forte">{s.scelta}</td></tr>))}
            </tbody>
          </table>
          <h3>Il conto su questo itinerario (JOD)</h3>
          <table className="tabella">
            <thead><tr><th>Voce</th><th className="num">senza pass</th><th className="num">con pass</th></tr></thead>
            <tbody>
              {g.jordanPass.calcolo.map((r) => (<tr key={r.voce}><td>{r.voce}</td><td className="num">{r.senzaPass || '—'}</td><td className="num">{r.conPass || '—'}</td></tr>))}
              <tr className="totale"><td>Totale</td><td className="num">{totali.senza}</td><td className="num">{totali.con}</td></tr>
            </tbody>
          </table>
          <p className="esito">Con il Wanderer risparmi {totali.senza - totali.con} JOD, circa {Math.round((totali.senza - totali.con) * 1.23)} € al cambio di ottobre 2026. Visto e Petra da soli costano più del pass.</p>
        </section>
      )}

      {/* Prima di partire */}
      <section className="pagina">
        <p className="occhiello rosso">Da fare a casa</p>
        <h2>Prima di partire</h2>
        {g.primaDiPartire.map((s) => (
          <div key={s.titolo} className="blocco">
            <h3>{s.titolo}</h3>
            <table className="tabella righe">
              <tbody>
                {s.righe.map((r) => (
                  <tr key={r.voce}><th>{r.voce}</th><td>{r.valore}{r.fonti && <Fonti ids={r.fonti} indice={indice} />}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      {/* Giorni */}
      {g.giorni.map((d) => {
        const gm = meta?.giorni[d.numero - 1]
        const credito = gm ? crediti[gm.titoloGiorno] : undefined
        return (
          <section key={d.numero} className="pagina giorno">
            <div className="giorno-testa">
              <span className="giorno-num">{d.numero}</span>
              <div>
                <p className="occhiello rosso">Giorno {d.numero}</p>
                <h2>{d.titolo}</h2>
              </div>
            </div>
            {gm?.immagine && (
              <figure className="giorno-foto">
                <img src={gm.immagine} alt={gm.imageAlt ?? ''} />
                {credito && <figcaption>Foto: {credito.autore}, {credito.licenza}</figcaption>}
              </figure>
            )}
            <p className="testo racconto">{d.racconto}</p>
            <h3>La strada</h3>
            {d.tratte.length === 0 && <p className="testo">{"Niente auto: dall'hotel di Wadi Musa all'ingresso di Petra sono pochi minuti a piedi o in navetta, poi si cammina tutto il giorno."}</p>}
            {d.tratte.length > 0 && <table className="tabella stretta">
              <tbody>
                {d.tratte.map((t) => (
                  <tr key={t.da + t.a}>
                    <td>{t.da} → {t.a}</td>
                    <td className="num">{t.km} km</td>
                    <td className="num">{ore(t.minuti)}</td>
                    <td className="piccolo">{t.nelMioViaggio ? `io: ${t.nelMioViaggio}` : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>}
            {d.luoghi.length > 0 && <h3>I posti</h3>}
            {d.luoghi.map((l) => (<Luogo key={l.nome} l={l} indice={indice} />))}
            {d.mangiare.length > 0 && <h3>Mangiare e bere</h3>}
            {d.mangiare.map((c) => (<Contatto key={c.nome} c={c} indice={indice} />))}
            <div className="riquadri">
              <div className="riquadro">
                <p className="riquadro-titolo">Dormire</p>
                <p>{d.dormire}</p>
              </div>
              {d.costiNoti && (
                <div className="riquadro">
                  <p className="riquadro-titolo">Spese annotate</p>
                  {d.costiNoti.map((c) => (<p key={c}>{c}</p>))}
                </div>
              )}
            </div>
            {d.nota && <p className="nota"><strong>Nota pratica.</strong> {d.nota}</p>}
          </section>
        )
      })}

      {/* Emergenze */}
      <section className="pagina">
        <p className="occhiello rosso">Da tenere a portata di mano</p>
        <h2>Emergenze</h2>
        <table className="tabella righe numeri">
          <tbody>
            {g.emergenze.numeri.map((r) => (
              <tr key={r.voce}><th>{r.voce}</th><td className="forte">{r.valore}{r.fonti && <Fonti ids={r.fonti} indice={indice} />}</td></tr>
            ))}
          </tbody>
        </table>
        <h3>Ambasciata d&apos;Italia</h3>
        {g.emergenze.ambasciata.map((c) => (<Contatto key={c.nome} c={c} indice={indice} />))}
        <h3>Ospedali lungo il percorso</h3>
        <table className="tabella">
          <tbody>
            {g.emergenze.ospedali.map((o) => (
              <tr key={o.nome}>
                <td><span className="forte">{o.nome}</span><br /><span className="piccolo">{o.cosa}{o.indirizzo ? ` · ${o.indirizzo}` : ''}</span>{o.avviso && <><br /><span className="piccolo">{o.avviso}</span></>}</td>
                <td className="num forte">{o.telefono ?? '—'}<Fonti ids={o.fonti} indice={indice} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Contatti */}
      <section className="pagina">
        <p className="occhiello rosso">Rubrica</p>
        <h2>Contatti utili</h2>
        {g.contatti.map((gr) => (
          <div key={gr.gruppo} className="blocco">
            <h3>{gr.gruppo}</h3>
            {gr.nota && <p className="piccolo">{gr.nota}<Fonti ids={['jitoa', 'aseza-campi']} indice={indice} /></p>}
            {gr.voci.map((c) => (<Contatto key={c.nome} c={c} indice={indice} />))}
          </div>
        ))}
      </section>

      {/* Budget */}
      <section className="pagina">
        <p className="occhiello rosso">Da compilare</p>
        <h2>Budget</h2>
        <p className="piccolo">{g.budget.nota}</p>
        <table className="tabella budget">
          <thead><tr><th>Voce</th><th>Costo noto</th><th>Previsto</th><th>Speso</th></tr></thead>
          <tbody>
            {g.budget.righe.map((r) => (
              <tr key={r.voce}>
                <td>{r.voce}{r.nota && <span className="piccolo"> · {r.nota}</span>}</td>
                <td className="num">{r.costo ?? ''}</td>
                <td className="vuoto"></td>
                <td className="vuoto"></td>
              </tr>
            ))}
            <tr className="totale"><td>Totale</td><td></td><td className="vuoto"></td><td className="vuoto"></td></tr>
          </tbody>
        </table>
        <p className="piccolo">Cambio di riferimento: 1 JOD ≈ 1,23 € (estate 2026)<Fonti ids={['eur-jod']} indice={indice} />. Per 10 JOD conta 12-13 €.</p>
      </section>

      {/* Valigia */}
      <section className="pagina">
        <p className="occhiello rosso">Da spuntare</p>
        <h2>Valigia</h2>
        <div className="colonne">
          {g.valigia.map((gr) => (
            <div key={gr.gruppo} className="blocco">
              <h3>{gr.gruppo}</h3>
              <ul className="spunta">
                {gr.voci.map((v) => (<li key={v}><span className="casella" />{v}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Frasario */}
      <section className="pagina">
        <p className="occhiello rosso">Arabo giordano, traslitterato</p>
        <h2>Frasario</h2>
        <p className="piccolo">Trascrizione semplificata dell&apos;arabo parlato in Giordania. «kh» come la jota spagnola, «ʿ» è un suono di gola, «ʾ» una breve pausa.</p>
        <div className="colonne">
          {g.frasario.map((gr) => (
            <div key={gr.gruppo} className="blocco">
              <h3>{gr.gruppo}</h3>
              <table className="tabella frasi">
                <tbody>
                  {gr.frasi.map((f) => (
                    <tr key={f.it}><td>{f.it}</td><td className="ar">{f.ar}{f.nota && <span className="piccolo"><br />{f.nota}</span>}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          <div className="blocco">
            <h3>Numeri</h3>
            <table className="tabella frasi">
              <tbody>
                {g.numeri.map((f) => (<tr key={f.it}><td className="num">{f.it}</td><td className="ar">{f.ar}</td></tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fonti */}
      <section className="pagina fonti-pagina">
        <p className="occhiello rosso">Appendice</p>
        <h2>Fonti e crediti</h2>
        <p className="piccolo">Consultate tra il 27 e il 30 ottobre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.</p>
        <ol className="elenco-fonti">
          {g.fonti.map((f) => (<li key={f.id}>{f.titolo} · <span className="url">{f.url.replace(/^https?:\/\/(www\.)?/, '')}</span></li>))}
        </ol>
        <h3>Cosa non sono riuscito a verificare</h3>
        <ul className="puntini piccolo">
          {g.nonVerificato.map((n) => (<li key={n}>{n}</li>))}
        </ul>
        <h3>Foto</h3>
        <p className="piccolo">
          {creditoCopertina ? `Copertina: ${creditoCopertina.autore}, ${creditoCopertina.licenza}. ` : ''}
          {meta?.giorni.map((gm, i) => {
            const c = crediti[gm.titoloGiorno]
            return c ? `Giorno ${i + 1}: ${c.autore}, ${c.licenza}. ` : ''
          })}
        </p>
        <p className="piccolo colophon">
          {siteConfig.brandName} · {siteConfig.url.replace(/^https?:\/\//, '')}/viaggi/{g.tripSlug} · Guida per uso personale. I contatti di terzi sono riportati a titolo informativo: nessun accordo commerciale con i posti citati.
        </p>
      </section>
      </>)}
    </div>
  )
}
