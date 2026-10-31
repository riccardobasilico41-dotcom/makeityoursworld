"""Prepara una filigrana da un'opera di pubblico dominio (stampa, acquerello, litografia).

Uso: <python con Pillow e numpy> tools/filigrana.py <immagine sorgente> <uscita.webp> [--desatura 0.35] [--max 1600]

Toglie lo sfondo chiaro (carta) trasformandolo in trasparenza: più un punto è chiaro, più è
trasparente; il colore resta, un po' spento, così sul sito la filigrana ha i toni tenui
dell'acquerello. Va mostrata a bassa opacità (vedi src/components/Filigrana.tsx).
"""
import argparse

import numpy as np
from PIL import Image, ImageFilter, ImageOps

ap = argparse.ArgumentParser()
ap.add_argument('src')
ap.add_argument('out')
ap.add_argument('--desatura', type=float, default=0.35, help='0 = colori pieni, 1 = grigio')
ap.add_argument('--max', type=int, default=1600)
ap.add_argument('--soglia', type=float, default=0.10, help='quanto della carta diventa trasparente del tutto')
a = ap.parse_args()

im = ImageOps.exif_transpose(Image.open(a.src)).convert('RGB')
im.thumbnail((a.max, a.max))
rgb = np.asarray(im, dtype=np.float32) / 255

# la carta: il colore chiaro più diffuso, stimato dal 92° percentile della luminosità
lum = rgb @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
carta = np.percentile(lum, 92)
inchiostro = np.clip((carta - lum) / max(carta, 1e-3), 0, 1)
inchiostro = np.clip((inchiostro - a.soglia) / (1 - a.soglia), 0, 1) ** 0.8

# colore: mescolato verso il grigio caldo e un po' scurito, per restare tenue sulla panna
grigio = lum[..., None] * np.array([1.0, 0.97, 0.92], dtype=np.float32)
col = rgb * (1 - a.desatura) + grigio * a.desatura
col = np.clip(col * 0.9, 0, 1)

out = np.dstack([col, inchiostro])
img = Image.fromarray((out * 255).astype(np.uint8), 'RGBA')
img = img.filter(ImageFilter.SMOOTH)
img.save(a.out, 'WEBP', quality=72, method=6)
print(a.out, img.size)
