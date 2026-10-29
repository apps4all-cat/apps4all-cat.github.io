# Web d'Apps4All

Lloc web d'Apps4All: https://apps4all-cat.github.io

Fet amb [Astro](https://astro.build), en català (arrel) i castellà (`/es/`). Es publica sol a GitHub Pages
en cada push a `main` (`.github/workflows/deploy.yml`).

## Treballar-hi

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## On és cada cosa

| Què | On |
|---|---|
| Apps (textos, versió, captures, enllaços) | `src/data/apps.json` (es valida a `src/data/apps.ts`) |
| Liberapay, PayPal, GoatCounter, correu | `src/config.ts` (si un valor és buit, no surt) |
| Textos de les pàgines (ca/es) i adreces | `src/i18n.ts` |
| Colors de la marca | `src/styles/global.css` |
| Pàgines | `src/views/` (una per pàgina) i `src/pages/` (rutes de cada idioma) |
| Imatges | `public/img/` (captures 540×960 en WebP, icones 256 px) |

## Afegir una app

1. Copia l'icona (`marca/icones/<app>-botiga-512.png` del monorepo) a `public/img/<id>/icona.webp` (256 px) i les
   captures a `public/img/<id>/captura-N.webp` (540×960).
2. Afegeix-la a `src/data/apps.json`. Si un enllaç encara no existeix, posa `null` i el botó no surt.
3. `npm run build`: si falta algun camp, la compilació diu quin.

## Domini propi (més endavant)

1. DNS: registre `CNAME` cap a `apps4all-cat.github.io`.
2. Crea `public/CNAME` amb el domini i canvia `site` a `astro.config.mjs`.
3. A *Settings › Pages*, escriu el domini i activa *Enforce HTTPS*. Les adreces antigues es redirigeixen soles.
