/**
 * Encoder QR minimo (modalità byte, correzione M, versioni 1-10), scritto a mano
 * per le guide stampabili: niente dipendenze npm. Segue la struttura
 * dell'implementazione di riferimento di Project Nayuki (ISO/IEC 18004).
 * Restituisce la matrice dei moduli (true = nero).
 */

const ECC_M_PER_BLOCCO = [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26]
const BLOCCHI_M = [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5]

function moduliDatiGrezzi(ver: number): number {
  let r = (16 * ver + 128) * ver + 64
  if (ver >= 2) {
    const n = Math.floor(ver / 7) + 2
    r -= (25 * n - 10) * n - 55
    if (ver >= 7) r -= 36
  }
  return r
}

function codewordDati(ver: number): number {
  return Math.floor(moduliDatiGrezzi(ver) / 8) - ECC_M_PER_BLOCCO[ver] * BLOCCHI_M[ver]
}

function rsMul(x: number, y: number): number {
  let z = 0
  for (let i = 7; i >= 0; i--) {
    z = (z << 1) ^ ((z >>> 7) * 0x11d)
    z ^= ((y >>> i) & 1) * x
  }
  return z & 0xff
}

function rsDivisore(grado: number): number[] {
  const r = new Array<number>(grado).fill(0)
  r[grado - 1] = 1
  let root = 1
  for (let i = 0; i < grado; i++) {
    for (let j = 0; j < r.length; j++) {
      r[j] = rsMul(r[j], root)
      if (j + 1 < r.length) r[j] ^= r[j + 1]
    }
    root = rsMul(root, 0x02)
  }
  return r
}

function rsResto(dati: number[], div: number[]): number[] {
  const r = new Array<number>(div.length).fill(0)
  for (const b of dati) {
    const f = b ^ (r.shift() as number)
    r.push(0)
    div.forEach((c, i) => (r[i] ^= rsMul(c, f)))
  }
  return r
}

function posizioniAllineamento(ver: number, size: number): number[] {
  if (ver === 1) return []
  const n = Math.floor(ver / 7) + 2
  const step = Math.ceil((ver * 4 + 4) / (n * 2 - 2)) * 2
  const r = [6]
  for (let pos = size - 7; r.length < n; pos -= step) r.splice(1, 0, pos)
  return r
}

export function qrMatrice(testo: string): boolean[][] {
  const bytes = Array.from(new TextEncoder().encode(testo))
  let ver = 1
  for (; ver <= 10; ver++) {
    const ccBits = ver < 10 ? 8 : 16
    if (4 + ccBits + bytes.length * 8 <= codewordDati(ver) * 8) break
  }
  if (ver > 10) throw new Error('Testo troppo lungo per il QR')
  const size = ver * 4 + 17
  const capBits = codewordDati(ver) * 8

  // Flusso di bit
  const bits: number[] = []
  const push = (val: number, len: number) => {
    for (let i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1)
  }
  push(0b0100, 4)
  push(bytes.length, ver < 10 ? 8 : 16)
  bytes.forEach((b) => push(b, 8))
  push(0, Math.min(4, capBits - bits.length))
  push(0, (8 - (bits.length % 8)) % 8)
  for (let pad = 0xec; bits.length < capBits; pad ^= 0xec ^ 0x11) push(pad, 8)
  const dati: number[] = []
  for (let i = 0; i < bits.length; i += 8) dati.push(parseInt(bits.slice(i, i + 8).join(''), 2))

  // Blocchi e correzione d'errore, poi interleaving
  const nBlocchi = BLOCCHI_M[ver]
  const eccLen = ECC_M_PER_BLOCCO[ver]
  const rawCw = Math.floor(moduliDatiGrezzi(ver) / 8)
  const nCorti = nBlocchi - (rawCw % nBlocchi)
  const lenCorto = Math.floor(rawCw / nBlocchi)
  const div = rsDivisore(eccLen)
  const blocchi: number[][] = []
  for (let i = 0, k = 0; i < nBlocchi; i++) {
    const d = dati.slice(k, k + lenCorto - eccLen + (i < nCorti ? 0 : 1))
    k += d.length
    const ecc = rsResto(d, div)
    if (i < nCorti) d.push(0)
    blocchi.push(d.concat(ecc))
  }
  const finale: number[] = []
  for (let i = 0; i < blocchi[0].length; i++) {
    blocchi.forEach((b, j) => {
      if (i !== lenCorto - eccLen || j >= nCorti) finale.push(b[i])
    })
  }

  // Matrice e pattern fissi
  const m: boolean[][] = Array.from({ length: size }, () => new Array<boolean>(size).fill(false))
  const fn: boolean[][] = Array.from({ length: size }, () => new Array<boolean>(size).fill(false))
  const set = (x: number, y: number, v: boolean) => {
    m[y][x] = v
    fn[y][x] = true
  }
  for (let i = 0; i < size; i++) {
    set(6, i, i % 2 === 0)
    set(i, 6, i % 2 === 0)
  }
  const finder = (cx: number, cy: number) => {
    for (let dy = -4; dy <= 4; dy++)
      for (let dx = -4; dx <= 4; dx++) {
        const d = Math.max(Math.abs(dx), Math.abs(dy))
        const x = cx + dx
        const y = cy + dy
        if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, d !== 2 && d !== 4)
      }
  }
  finder(3, 3)
  finder(size - 4, 3)
  finder(3, size - 4)
  const al = posizioniAllineamento(ver, size)
  al.forEach((ax, i) =>
    al.forEach((ay, j) => {
      if ((i === 0 && j === 0) || (i === 0 && j === al.length - 1) || (i === al.length - 1 && j === 0)) return
      for (let dy = -2; dy <= 2; dy++)
        for (let dx = -2; dx <= 2; dx++) set(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1)
    }),
  )

  const disegnaFormato = (mask: number) => {
    const data = (0 << 3) | mask // livello M = 00
    let rem = data
    for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537)
    const b = ((data << 10) | rem) ^ 0x5412
    const bit = (i: number) => ((b >>> i) & 1) === 1
    for (let i = 0; i <= 5; i++) set(8, i, bit(i))
    set(8, 7, bit(6))
    set(8, 8, bit(7))
    set(7, 8, bit(8))
    for (let i = 9; i < 15; i++) set(14 - i, 8, bit(i))
    for (let i = 0; i < 8; i++) set(size - 1 - i, 8, bit(i))
    for (let i = 8; i < 15; i++) set(8, size - 15 + i, bit(i))
    set(8, size - 8, true)
  }
  disegnaFormato(0)
  if (ver >= 7) {
    let rem = ver
    for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25)
    const b = (ver << 12) | rem
    for (let i = 0; i < 18; i++) {
      const v = ((b >>> i) & 1) === 1
      const a = size - 11 + (i % 3)
      const c = Math.floor(i / 3)
      set(a, c, v)
      set(c, a, v)
    }
  }

  // Posa dei codeword a zig-zag
  let i = 0
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5
    for (let vert = 0; vert < size; vert++)
      for (let j = 0; j < 2; j++) {
        const x = right - j
        const upward = ((right + 1) & 2) === 0
        const y = upward ? size - 1 - vert : vert
        if (!fn[y][x] && i < finale.length * 8) {
          m[y][x] = ((finale[i >>> 3] >>> (7 - (i & 7))) & 1) === 1
          i++
        }
      }
  }

  const applicaMaschera = (mask: number) => {
    for (let y = 0; y < size; y++)
      for (let x = 0; x < size; x++) {
        if (fn[y][x]) continue
        let inv: boolean
        switch (mask) {
          case 0: inv = (x + y) % 2 === 0; break
          case 1: inv = y % 2 === 0; break
          case 2: inv = x % 3 === 0; break
          case 3: inv = (x + y) % 3 === 0; break
          case 4: inv = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0; break
          case 5: inv = ((x * y) % 2) + ((x * y) % 3) === 0; break
          case 6: inv = (((x * y) % 2) + ((x * y) % 3)) % 2 === 0; break
          default: inv = (((x + y) % 2) + ((x * y) % 3)) % 2 === 0
        }
        if (inv) m[y][x] = !m[y][x]
      }
  }

  const penalita = (): number => {
    let p = 0
    const righe = (get: (a: number, b: number) => boolean) => {
      for (let a = 0; a < size; a++) {
        let run = 1
        for (let b = 1; b <= size; b++) {
          if (b < size && get(a, b) === get(a, b - 1)) run++
          else {
            if (run >= 5) p += run - 2
            run = 1
          }
        }
        for (let b = 0; b + 10 < size + 1; b++) {
          const s = Array.from({ length: 11 }, (_, k) => (b + k < size ? get(a, b + k) : false))
          const pat = [true, false, true, true, true, false, true]
          const okA = pat.every((v, k) => s[k] === v) && !s[7] && !s[8] && !s[9] && !s[10]
          const okB = !s[0] && !s[1] && !s[2] && !s[3] && pat.every((v, k) => s[k + 4] === v)
          if (okA || okB) p += 40
        }
      }
    }
    righe((a, b) => m[a][b])
    righe((a, b) => m[b][a])
    for (let y = 0; y < size - 1; y++)
      for (let x = 0; x < size - 1; x++) {
        const c = m[y][x]
        if (c === m[y][x + 1] && c === m[y + 1][x] && c === m[y + 1][x + 1]) p += 3
      }
    let neri = 0
    m.forEach((r) => r.forEach((v) => v && neri++))
    const tot = size * size
    p += Math.floor(Math.abs(neri * 20 - tot * 10) / tot) * 10
    return p
  }

  let migliore = 0
  let minP = Infinity
  for (let mask = 0; mask < 8; mask++) {
    applicaMaschera(mask)
    disegnaFormato(mask)
    const p = penalita()
    if (p < minP) {
      minP = p
      migliore = mask
    }
    applicaMaschera(mask)
  }
  applicaMaschera(migliore)
  disegnaFormato(migliore)
  return m
}

/** Path SVG (un quadrato per modulo nero), con 4 moduli di margine. */
export function qrPath(testo: string): { path: string; size: number } {
  const m = qrMatrice(testo)
  const q = 4
  let d = ''
  m.forEach((riga, y) =>
    riga.forEach((v, x) => {
      if (v) d += `M${x + q} ${y + q}h1v1h-1z`
    }),
  )
  return { path: d, size: m.length + q * 2 }
}
