"""Controlla i link `url:` dei luoghi delle mini guide e toglie quelli che non rispondono.

    python3 tools/controlla-url-guide.py [--correggi] [paese …]

Senza paesi controlla tutte le schede. Un link è buono se risponde 2xx o 3xx (anche 401/403,
che di solito sono siti veri che bloccano i bot). Con --correggi toglie la riga `url:` dei link
morti (404, 410, dominio inesistente, nessuna risposta) dai file italiani e dalle copie en/es,
e scrive l'elenco in docs/mini-guide/url-tolti.md.
"""
import concurrent.futures as cf
import glob
import os
import re
import sys
import urllib.error
import urllib.request

RADICE = os.path.join(os.path.dirname(__file__), '..')
correggi = '--correggi' in sys.argv
paesi = [a for a in sys.argv[1:] if not a.startswith('--')]

file_it = sorted(glob.glob(os.path.join(RADICE, 'src/content/destinazioni/*.ts')))
if paesi:
    file_it = [f for f in file_it if os.path.basename(f)[:-3] in paesi]

def tutti_i_file(f):
    nome = os.path.basename(f)
    return [f] + [p for p in (os.path.join(RADICE, f'src/content/i18n/{l}/destinazioni/{nome}') for l in ('en', 'es')) if os.path.exists(p)]

RE_URL = re.compile(r"^\s*[\"']?url[\"']?: ['\"](https?://[^'\"]+)['\"],\n", re.M)
urls = set()
for f in file_it:
    for p in tutti_i_file(f):
        urls.update(RE_URL.findall(open(p, encoding='utf8').read()))

def prova(u):
    for metodo in ('HEAD', 'GET'):
        try:
            req = urllib.request.Request(u, method=metodo, headers={'User-Agent': 'Mozilla/5.0 (Macintosh) makeityoursworld-linkcheck'})
            with urllib.request.urlopen(req, timeout=20) as r:
                return u, r.status
        except urllib.error.HTTPError as e:
            if e.code in (401, 403, 405, 429) and metodo == 'GET':
                return u, e.code
            if e.code in (405, 403) and metodo == 'HEAD':
                continue
            if metodo == 'GET':
                return u, e.code
        except Exception as e:  # dominio inesistente, timeout, certificato
            if metodo == 'GET':
                return u, f'errore: {type(e).__name__}'
    return u, 'errore'

with cf.ThreadPoolExecutor(12) as ex:
    esiti = dict(ex.map(prova, sorted(urls)))

morti = {u: s for u, s in esiti.items() if not (isinstance(s, int) and (s < 400 or s in (401, 403, 405, 429)))}
print(f'link controllati: {len(esiti)}, morti: {len(morti)}')
for u, s in sorted(morti.items()):
    print(' ', s, u)

if correggi and morti:
    for f in file_it:
        for p in tutti_i_file(f):
            s = open(p, encoding='utf8').read()
            n = RE_URL.sub(lambda m: '' if m.group(1) in morti else m.group(0), s)
            if n != s:
                open(p, 'w', encoding='utf8').write(n)
    out = os.path.join(RADICE, 'docs/mini-guide/url-tolti.md')
    with open(out, 'a', encoding='utf8') as o:
        for u, s in sorted(morti.items()):
            o.write(f'- {u} ({s})\n')
    print('tolti e annotati in docs/mini-guide/url-tolti.md')
