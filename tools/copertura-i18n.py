"""Quanto è tradotto: file di contenuto senza copia nella lingua e voci senza slug tradotto.

    python3 tools/copertura-i18n.py en
"""
import glob, json, os, re, sys

lingua = sys.argv[1] if len(sys.argv) > 1 else 'en'
radice = os.path.join(os.path.dirname(__file__), '..', 'src', 'content')
mancanti = []
for area in ['paesi', 'destinazioni', 'esperienze', 'viaggi-dati', 'viaggi']:
    for f in sorted(glob.glob(os.path.join(radice, area, '*.*'))):
        if not os.path.exists(os.path.join(radice, 'i18n', lingua, area, os.path.basename(f))):
            mancanti.append(f'{area}/{os.path.basename(f)}')
for f in ['meraviglie.ts', 'attrezzatura.ts', 'viaggi-editorial.ts', 'seo-pagine.ts', 'viaggi-copertine.ts']:
    if not os.path.exists(os.path.join(radice, 'i18n', lingua, f)):
        mancanti.append(f)
print('file da tradurre:', len(mancanti))
for m in mancanti:
    print('  ', m)
slug = json.load(open(os.path.join(radice, 'i18n', lingua, 'slug.json')))
senza = {'paesi': [], 'viaggi': []}
for f in glob.glob(os.path.join(radice, 'paesi', '*.ts')):
    s = re.search(r"slug: '([^']+)'", open(f).read()).group(1)
    if s not in slug['paesi']:
        senza['paesi'].append(s)
for f in glob.glob(os.path.join(radice, 'viaggi', '*.md')):
    s = re.sub(r'^\d+-', '', os.path.basename(f))[:-3]
    if s not in slug['viaggi']:
        senza['viaggi'].append(s)
print('slug mancanti:', {k: v for k, v in senza.items()})
