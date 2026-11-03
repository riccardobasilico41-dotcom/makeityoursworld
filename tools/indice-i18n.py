"""Scrive src/content/i18n/<lingua>/indice.ts: raccoglie i contenuti tradotti presenti
(Paesi, destinazioni, esperienze, dati dei viaggi, meraviglie, liste valigia, testi SEO)
in pochi array/oggetti che src/lib/i18n/contenuti.ts sovrappone a quelli italiani.
Un contenuto non ancora tradotto resta semplicemente in italiano.

    python3 tools/indice-i18n.py en
"""
import glob, os, re, subprocess, sys

lingua = sys.argv[1] if len(sys.argv) > 1 else 'en'
base = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'i18n', lingua)

def valido(f):
    # un file ancora a metà (agente al lavoro) o con errori di sintassi resta fuori: il sito usa l'italiano
    return subprocess.run(['node', '--check', f], capture_output=True).returncode == 0

def esportati(f):
    return re.findall(r'^export const (\w+)', open(f, encoding='utf8').read(), re.M)

righe = ["// File generato da tools/indice-i18n.py: non modificare a mano.",
         "import type { Destinazione, Esperienza, Paese, TripMeta } from '@/lib/types'"]
gruppi = {'paesi': [], 'destinazioni': [], 'esperienze': [], 'viaggi-dati': []}
for area in gruppi:
    for f in sorted(glob.glob(os.path.join(base, area, '*.ts'))):
        nomi = esportati(f) if valido(f) else []
        if not nomi:
            continue
        modulo = f"./{area}/{os.path.basename(f)[:-3]}"
        alias = [f"{n} as {re.sub(r'[^A-Za-z0-9]', '_', area)}_{n}" for n in nomi]
        righe.append(f"import {{ {', '.join(alias)} }} from '{modulo}'")
        gruppi[area] += [f"{re.sub(r'[^A-Za-z0-9]', '_', area)}_{n}" for n in nomi]

righe.append(f"export const paesi: Paese[] = [{', '.join(gruppi['paesi'])}]")
righe.append(f"export const destinazioni: Destinazione[] = [{', '.join('...' + n for n in gruppi['destinazioni'])}]")
righe.append(f"export const esperienze: Esperienza[] = [{', '.join('...' + n for n in gruppi['esperienze'])}]")
righe.append(f"export const tripMeta: TripMeta[] = [{', '.join(gruppi['viaggi-dati'])}]")

singoli = [('meraviglie', 'meraviglie', 'Meraviglia[]', "import type { Meraviglia } from '@/lib/types'"),
           ('attrezzatura', 'listeAttrezzatura', 'ListaAttrezzatura[]', "import type { ListaAttrezzatura } from '@/content/attrezzatura'"),
           ('viaggi-editorial', 'editorialViaggi', 'Record<string, EditorialMeta>', "import type { EditorialMeta } from '@/content/viaggi-editorial'"),
           ('seo-pagine', 'seoPaesi', 'Record<string, SeoPagina>', "import type { SeoPagina } from '@/content/seo-pagine'"),
           ('seo-pagine', 'seoMeraviglie', 'Record<string, SeoPagina>', None),
           ('viaggi-copertine', 'copertineViaggi', 'Record<string, CopertinaViaggio>', "import type { CopertinaViaggio } from '@/content/viaggi-copertine'")]
for file, nome, tipo, tipo_import in singoli:
    f = os.path.join(base, f'{file}.ts')
    if tipo_import:
        righe.insert(2, tipo_import)
    if os.path.exists(f) and valido(f) and nome in esportati(f):
        righe.append(f"import {{ {nome} as _{nome} }} from './{file}'")
        righe.append(f"export const {nome}: {tipo} | undefined = _{nome}")
    else:
        righe.append(f"export const {nome}: {tipo} | undefined = undefined")

open(os.path.join(base, 'indice.ts'), 'w', encoding='utf8').write('\n'.join(righe) + '\n')
print(lingua, {k: len(v) for k, v in gruppi.items()})
