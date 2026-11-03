"""Controlla i markdown tradotti: etichette dei metadati e titoli fissi devono restare in
italiano (il parser in src/lib/viaggi.ts li riconosce così), e i giorni devono essere tanti
quanti nell'originale. Con --correggi rimette in italiano le etichette tradotte note.

    python3 tools/controlla-md-i18n.py es [--correggi]
"""
import glob, os, re, sys

lingua = sys.argv[1]
correggi = '--correggi' in sys.argv
radice = os.path.join(os.path.dirname(__file__), '..', 'src', 'content')
ETICHETTE = ['Stato bozza', 'Periodo del viaggio', 'Durata', 'Compagni di viaggio', 'Categoria']
# forme tradotte viste nelle copie → etichetta italiana
TRADOTTE = {
    'Estado del borrador': 'Stato bozza', 'Estado de borrador': 'Stato bozza', 'Draft status': 'Stato bozza',
    'Periodo del viaje': 'Periodo del viaggio', 'Época del viaje': 'Periodo del viaggio', 'Trip period': 'Periodo del viaggio', 'Travel period': 'Periodo del viaggio',
    'Duración': 'Durata', 'Duration': 'Durata', 'Length': 'Durata',
    'Compañeros de viaje': 'Compagni di viaggio', 'Travel companions': 'Compagni di viaggio',
    'Categoría': 'Categoria', 'Category': 'Categoria',
}
FISSI = {'Apertura personale', 'Scheda pratica', 'Chiusura personale', 'Tag', 'Dove abbiamo dormito', 'Dove abbiamo mangiato'}
FISSI_TRADOTTI = {
    'Apertura personal': 'Apertura personale', 'Personal opening': 'Apertura personale',
    'Ficha práctica': 'Scheda pratica', 'Practical sheet': 'Scheda pratica', 'Practical info': 'Scheda pratica',
    'Cierre personal': 'Chiusura personale', 'Personal closing': 'Chiusura personale',
    'Etiquetas': 'Tag', 'Tags': 'Tag',
    'Dónde dormimos': 'Dove abbiamo dormito', 'Where we stayed': 'Dove abbiamo dormito', 'Where we slept': 'Dove abbiamo dormito',
    'Dónde comimos': 'Dove abbiamo mangiato', 'Where we ate': 'Dove abbiamo mangiato',
    'Itinerario día a día': 'Itinerario giorno per giorno', 'Day-by-day itinerary': 'Itinerario giorno per giorno', 'Itinerary day by day': 'Itinerario giorno per giorno',
}
problemi = 0
for f in sorted(glob.glob(os.path.join(radice, 'i18n', lingua, 'viaggi', '*.md'))):
    nome = os.path.basename(f)
    orig = open(os.path.join(radice, 'viaggi', nome), encoding='utf8').read()
    s = open(f, encoding='utf8').read()
    nuovo = s
    for tr, it in TRADOTTE.items():
        nuovo = re.sub(r'\*\*' + re.escape(tr) + r':\*\*', f'**{it}:**', nuovo)
    for tr, it in FISSI_TRADOTTI.items():
        nuovo = re.sub(r'^## ' + re.escape(tr) + r'\s*$', f'## {it}', nuovo, flags=re.M)
    avvisi = []
    testa = nuovo[: nuovo.find('\n---\n')]
    for e in ETICHETTE:
        if f'**{e}:**' in orig[: orig.find('\n---\n')] and f'**{e}:**' not in testa:
            avvisi.append(f'manca etichetta {e}')
    for t in FISSI:
        if re.search(r'^## ' + re.escape(t) + r'\s*$', orig, re.M) and not re.search(r'^## ' + re.escape(t) + r'\s*$', nuovo, re.M):
            avvisi.append(f'manca titolo fisso {t}')
    if re.search(r'^## Itinerario', orig, re.M) and not re.search(r'^## Itinerario', nuovo, re.M):
        avvisi.append('manca ## Itinerario…')
    g_or = len(re.findall(r'^### ', orig.split('## Itinerario', 1)[-1].split('\n## ', 1)[0], re.M)) if '## Itinerario' in orig else 0
    g_tr = len(re.findall(r'^### ', nuovo.split('## Itinerario', 1)[-1].split('\n## ', 1)[0], re.M)) if '## Itinerario' in nuovo else 0
    if g_or != g_tr:
        avvisi.append(f'giorni {g_tr} invece di {g_or}')
    if nuovo != s and correggi:
        open(f, 'w', encoding='utf8').write(nuovo)
        avvisi.append('etichette rimesse in italiano')
    elif nuovo != s:
        avvisi.append('etichette tradotte da correggere')
    if avvisi:
        problemi += 1
        print(nome, '→', '; '.join(avvisi))
print(lingua, 'file con avvisi:', problemi)
