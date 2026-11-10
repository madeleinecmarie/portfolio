# Madeleine Bergvik – portefølje

Personlig portefølje laget med Nuxt 4 og TypeScript.

## Kom i gang

```bash
pnpm install
pnpm dev
```

## Bygg og publiser

```bash
pnpm generate
```

Siden bygges som statiske filer i `.output/public` lokalt og i `dist` på Netlify. `netlify.toml` er satt opp, så på Netlify holder det å koble til repoet.

## Struktur

- `app/data/portfolio.ts` – alt innhold (arbeid, prosjekter, ferdigheter, kontakt)
- `app/types/portfolio.ts` – typene for innholdet
- `app/components/` – én komponent per seksjon
- `app/assets/main.css` – farger, typografi og felles stiler (lys og mørk modus)
- `public/` – bilde, CV og skjermbilder av prosjektene
