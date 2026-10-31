/* eslint-disable @next/next/no-img-element -- pagina solo per la stampa in PDF: servono <img> semplici, caricati subito */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { guide } from '@/content/guide'
import type { ContattoGuida, GiornoGuida, Gps, Guida, LuogoGuida } from '@/content/guide/types'
import { copertineViaggi } from '@/content/viaggi-copertine'
import { creditiCopertine } from '@/content/viaggi-copertine-crediti'
import { creditiGiornoFoto } from '@/content/viaggi-giorno-foto-crediti'
import { getTripMeta } from '@/lib/geo'
import { qrPath } from '@/lib/qr'
import { siteConfig } from '@/lib/site-config'
import { stileStampa } from './stile'

export const dynamicParams = false

/**
 * Le guide sono un prodotto a pagamento: questa pagina serve solo in locale
 * (dev server) per generare il PDF. In produzione non esiste.
 */
const SOLO_LOCALE = process.env.NODE_ENV === 'production'

export function generateStaticParams() {
  return SOLO_LOCALE ? [] : Object.keys(guide).map((slug) => ({ slug }))
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

function Luogo({ l, indice, nomePass }: { l: LuogoGuida; indice: Map<string, number>; nomePass?: string }) {
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
          {l.pass && (<><dt>{nomePass ?? 'Pass'}</dt><dd>{l.pass}</dd></>)}
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

type Proiezione = { px: (g: Gps) => [number, number]; w: number; h: number; kmPx: number }

/** Adatta tappe e acque in un riquadro di larghezza fissa, con margini per le etichette. */
function proiezione(punti: Gps[]): Proiezione {
  const lats = punti.map((p) => p[0])
  const lngs = punti.map((p) => p[1])
  const [la0, la1, ln0, ln1] = [Math.min(...lats), Math.max(...lats), Math.min(...lngs), Math.max(...lngs)]
  const cos = Math.cos((((la0 + la1) / 2) * Math.PI) / 180)
  const larg = Math.max((ln1 - ln0) * cos, 0.01)
  const alt = Math.max(la1 - la0, 0.01)
  const W = 460
  const M = { l: 105, r: 115, t: 50, b: 50 }
  const H = Math.min(700, Math.max(300, ((W - M.l - M.r) * alt) / larg + M.t + M.b))
  const s = Math.min((W - M.l - M.r) / larg, (H - M.t - M.b) / alt)
  const ox = M.l + (W - M.l - M.r - larg * s) / 2
  const oy = M.t + (H - M.t - M.b - alt * s) / 2
  return { px: ([lat, lng]) => [ox + (lng - ln0) * cos * s, oy + (la1 - lat) * s], w: W, h: H, kmPx: s / 111 }
}

function Mappa({ g }: { g: Guida }) {
  const { tappe, mappa } = g
  const acque = mappa.acque ?? []
  const { px, w, h, kmPx } = proiezione([...tappe.map((t) => t.gps), ...acque.flatMap((a) => a.punti)])
  const p = (nome: string) => {
    const t = tappe.find((t) => t.nome.startsWith(nome))
    return t ? px(t.gps) : undefined
  }
  const linea = (nomi: string[]) => nomi.map(p).filter((q): q is [number, number] => Boolean(q)).map((q) => q.join(',')).join(' ')
  const poly = (pts: Gps[]) => pts.map((q) => px(q).join(',')).join(' ')
  const km = mappa.scalaKm ?? 50
  const kmLen = km * kmPx
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mappa" role="img" aria-label="Mappa schematica del percorso">
      {acque.map((a) => (<polygon key={a.nome} points={poly(a.punti)} fill="#cfdde3" />))}
      {acque.map((a) => {
        const [x, y] = px(a.etichetta)
        return <text key={a.nome + 't'} x={x} y={y} className="m-acqua" textAnchor={a.allinea ?? 'start'}>{a.nome}</text>
      })}
      {mappa.ritorno && <polyline points={linea(mappa.ritorno)} fill="none" stroke="#B3261E" strokeWidth="1.6" strokeDasharray="4 3" />}
      <polyline points={linea(mappa.percorso)} fill="none" stroke="#B3261E" strokeWidth="2.4" strokeLinejoin="round" />
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
      <g transform={`translate(${w - 20 - kmLen} ${h - 22})`}>
        <line x1="0" y1="0" x2={kmLen} y2="0" stroke="#161412" strokeWidth="1.5" />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#161412" />
        <line x1={kmLen} y1="-4" x2={kmLen} y2="4" stroke="#161412" />
        <text x={kmLen / 2} y="14" textAnchor="middle" className="m-giorno">{km} km</text>
      </g>
      <g transform={`translate(${w - 20} 30)`}>
        <path d="M0 -16 L6 4 L0 0 L-6 4 Z" fill="#161412" />
        <text x="0" y="16" textAnchor="middle" className="m-nome">N</text>
      </g>
    </svg>
  )
}

const etichettaGiorno = (d: GiornoGuida) => (d.fino ? `Giorni ${d.numero}-${d.fino}` : `Giorno ${d.numero}`)

/* ---------- Pagina ---------- */

export default async function GuidaStampa({ params, searchParams }: PageProps<'/guide/[slug]/stampa'>) {
  if (SOLO_LOCALE) notFound()
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
  const totali = g.pass?.calcolo?.reduce(
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
          {g.pass && <li>{g.pass.titolo}</li>}
          <li>Prima di partire</li>
          {g.giorni.map((d) => (<li key={d.numero}>{etichettaGiorno(d)} · {d.titolo}</li>))}
          <li>Emergenze</li>
          <li>Contatti utili</li>
          <li>Budget</li>
          <li>Valigia</li>
          <li>Frasario</li>
          {g.pagineSito && <li>Sul sito</li>}
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
          <Mappa g={g} />
          <div className="mappa-legenda">
            <p className="piccolo">{g.mappa.legenda}</p>
            <table className="tabella stretta">
              <thead><tr><th>G</th><th>Tratta</th><th>km</th><th>tempo</th></tr></thead>
              <tbody>
                {g.giorni.flatMap((d) =>
                  d.tratte.map((t, i) => (
                    <tr key={`${d.numero}-${i}`}>
                      <td>{i === 0 ? d.numero : ''}</td>
                      <td>{t.da} → {t.a}{t.mezzo && <span className="piccolo"> · {t.mezzo}</span>}</td>
                      <td className="num">{t.km}</td>
                      <td className="num">{ore(t.minuti)}</td>
                    </tr>
                  )),
                )}
                <tr className="totale"><td></td><td>Totale su strada</td><td className="num">{kmTotali}</td><td></td></tr>
              </tbody>
            </table>
            <p className="piccolo">{g.mappa.notaTempi}{g.mappa.notaTempiFonti && <Fonti ids={g.mappa.notaTempiFonti} indice={indice} />}</p>
          </div>
        </div>
      </section>

      {/* Pass o decisione principale */}
      {g.pass && (
        <section className="pagina">
          <p className="occhiello rosso">{g.pass.occhiello ?? 'La prima decisione'}</p>
          <h2>{g.pass.titolo}</h2>
          <p className="testo">{g.pass.regola}<Fonti ids={g.pass.fonti} indice={indice} /></p>
          <table className="tabella">
            <thead><tr><th>Se…</th><th>allora</th></tr></thead>
            <tbody>
              {g.pass.scenari.map((s) => (<tr key={s.situazione}><td>{s.situazione}</td><td className="forte">{s.scelta}</td></tr>))}
            </tbody>
          </table>
          {g.pass.calcolo && totali && (<>
            <h3>{g.pass.calcoloTitolo ?? 'Il conto su questo itinerario'}</h3>
            <table className="tabella">
              <thead><tr><th>Voce</th><th className="num">senza pass</th><th className="num">con pass</th></tr></thead>
              <tbody>
                {g.pass.calcolo.map((r) => (<tr key={r.voce}><td>{r.voce}</td><td className="num">{r.senzaPass ? r.senzaPass.toLocaleString('it-IT') : '—'}</td><td className="num">{r.conPass ? r.conPass.toLocaleString('it-IT') : '—'}</td></tr>))}
                <tr className="totale"><td>Totale</td><td className="num">{totali.senza.toLocaleString('it-IT')}</td><td className="num">{totali.con.toLocaleString('it-IT')}</td></tr>
              </tbody>
            </table>
          </>)}
          {g.pass.esito && <p className="esito">{g.pass.esito}</p>}
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
              <span className="giorno-num">{d.numero}{d.fino ? <span className="giorno-fino">-{d.fino}</span> : null}</span>
              <div className="giorno-titolo">
                <p className="occhiello rosso">{etichettaGiorno(d)}</p>
                <h2>{d.titolo}</h2>
              </div>
              {d.paginaSito && (
                <div className="giorno-sito">
                  <Qr testo={siteConfig.url + d.paginaSito} mm={12} />
                  <p>sul sito</p>
                </div>
              )}
            </div>
            {gm?.immagine && (
              <figure className="giorno-foto">
                <img src={gm.immagine} alt={gm.imageAlt ?? ''} />
                {credito && <figcaption>Foto: {credito.autore}, {credito.licenza}</figcaption>}
              </figure>
            )}
            <p className="testo racconto">{d.racconto}</p>
            <h3>La strada</h3>
            {d.tratte.length === 0 && <p className="testo">{d.senzaStrada ?? 'Nessuno spostamento lungo in questa giornata.'}</p>}
            {d.tratte.length > 0 && <table className="tabella stretta">
              <tbody>
                {d.tratte.map((t) => (
                  <tr key={t.da + t.a}>
                    <td>{t.da} → {t.a}</td>
                    <td className="num">{t.km} km</td>
                    <td className="num">{ore(t.minuti)}</td>
                    <td className="piccolo">{[t.mezzo, t.nelMioViaggio ? `io: ${t.nelMioViaggio}` : ''].filter(Boolean).join(' · ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>}
            {d.luoghi.length > 0 && <h3>I posti</h3>}
            {d.luoghi.map((l) => (<Luogo key={l.nome} l={l} indice={indice} nomePass={g.pass?.nome} />))}
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
            {gr.nota && <p className="piccolo">{gr.nota}{gr.notaFonti && <Fonti ids={gr.notaFonti} indice={indice} />}</p>}
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
        {g.budget.cambio && <p className="piccolo">{g.budget.cambio}{g.budget.cambioFonti && <Fonti ids={g.budget.cambioFonti} indice={indice} />}</p>}
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
        <p className="occhiello rosso">{g.lingua.nome}</p>
        <h2>Frasario</h2>
        <p className="piccolo">{g.lingua.pronuncia}</p>
        <div className="colonne">
          {g.frasario.map((gr) => (
            <div key={gr.gruppo} className="blocco">
              <h3>{gr.gruppo}</h3>
              <table className="tabella frasi">
                <tbody>
                  {gr.frasi.map((f) => (
                    <tr key={f.it}><td>{f.it}</td><td className="ar">{f.loc}{f.scritto && <span className="scritto"><br />{f.scritto}</span>}{f.nota && <span className="piccolo"><br />{f.nota}</span>}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          <div className="blocco">
            <h3>Numeri</h3>
            <table className="tabella frasi">
              <tbody>
                {g.numeri.map((f) => (<tr key={f.it}><td className="num">{f.it}</td><td className="ar">{f.loc}{f.scritto && <span className="scritto"> {f.scritto}</span>}</td></tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pagine del sito */}
      {g.pagineSito && (
        <section className="pagina">
          <p className="occhiello rosso">Per approfondire</p>
          <h2>Sul sito</h2>
          <p className="piccolo">Inquadra il QR: apre la pagina del sito con foto, racconto completo e aggiornamenti.</p>
          <div className="qr-griglia">
            {g.pagineSito.map((ps) => (
              <div key={ps.path} className="qr-voce">
                <Qr testo={siteConfig.url + ps.path} mm={20} />
                <p className="forte">{ps.titolo}</p>
                <p className="url">{siteConfig.url.replace(/^https?:\/\//, '')}{ps.path}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Fonti */}
      <section className="pagina fonti-pagina">
        <p className="occhiello rosso">Appendice</p>
        <h2>Fonti e crediti</h2>
        <p className="piccolo">{g.consultate}</p>
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
