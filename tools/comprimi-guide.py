"""Comprime i PDF delle guide pubblicati sul sito (public/guide-pdf/*.pdf).

Uso: <python con pypdf e Pillow> tools/comprimi-guide.py [slug ...]

Riduce le foto dentro il PDF (lato lungo al massimo 1400 px, JPEG qualità 68), così il file
si scarica in fretta anche sul telefono. Gli originali in alta qualità restano nella cartella
«Make It Yours - Guide PDF» sulla SanDisk. Un file già compresso viene saltato (guarda i metadati).
"""
import os
import sys

from PIL import Image
from pypdf import PdfReader, PdfWriter

DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public', 'guide-pdf')
MARCA = '/MakeItYoursCompresso'
MAX = 1400


def comprimi(path: str) -> None:
    prima = os.path.getsize(path)
    reader = PdfReader(path)
    if reader.metadata and reader.metadata.get(MARCA):
        print('già compresso', os.path.basename(path))
        return
    writer = PdfWriter(clone_from=reader)
    for page in writer.pages:
        for img in page.images:
            im = img.image
            if im.width * im.height < 300 * 300:
                continue  # icone, QR: lasciati come sono
            if im.mode not in ('RGB', 'L'):
                im = im.convert('RGB')
            im.thumbnail((MAX, MAX))
            img.replace(im, quality=68)
        page.compress_content_streams()
    # pdfunite e Chrome ripetono font e immagini identiche: si tengono una volta sola
    writer.compress_identical_objects(remove_duplicates=True, remove_unreferenced=True)
    writer.add_metadata({MARCA: 'si'})
    tmp = path + '.tmp'
    with open(tmp, 'wb') as f:
        writer.write(f)
    os.replace(tmp, path)
    print(f'{os.path.basename(path)}: {prima / 1e6:.1f} MB → {os.path.getsize(path) / 1e6:.1f} MB')


if __name__ == '__main__':
    nomi = sys.argv[1:] or [f[:-4] for f in sorted(os.listdir(DIR)) if f.endswith('.pdf')]
    for n in nomi:
        comprimi(os.path.join(DIR, f'{n}.pdf'))
