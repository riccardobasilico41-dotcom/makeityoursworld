"""Unisce gli slug tradotti dei gruppi (src/content/i18n/<lingua>/slug/*.json) in
src/content/i18n/<lingua>/slug.json, letto da src/lib/i18n/percorsi.ts. Segnala doppioni.

    python3 tools/unisci-slug.py en
"""
import glob, json, os, sys

lingua = sys.argv[1] if len(sys.argv) > 1 else 'en'
base = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'i18n', lingua)
aree = ['paesi', 'destinazioni', 'esperienze', 'viaggi', 'meraviglie', 'attrezzatura']
tutto = {a: {} for a in aree}
for f in sorted(glob.glob(os.path.join(base, 'slug', '*.json'))):
    d = json.load(open(f))
    for a in aree:
        tutto[a].update(d.get(a, {}))
# doppioni: due voci diverse con lo stesso slug tradotto nello stesso ambito
for a, m in tutto.items():
    visti = {}
    for k, v in m.items():
        ambito = k.split('/')[0] if '/' in k else ''
        if (ambito, v) in visti:
            print(f'doppione in {a}: {visti[(ambito, v)]} e {k} → {v}')
        visti[(ambito, v)] = k
json.dump(tutto, open(os.path.join(base, 'slug.json'), 'w'), indent=1, ensure_ascii=False, sort_keys=True)
print(lingua, {a: len(m) for a, m in tutto.items()})
