# My Portfolio [![en](https://img.shields.io/badge/lang-en-red.svg)](README.md) [![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md) [![es](https://img.shields.io/badge/lang-es-yellow.svg)](README.es.md)

## What it is

This is my portfolio website. It presents selected work, experience, stack, contact channels, downloadable resumes, and a small chat assistant entry point.

## How it works

The app is a Vue 3 single-page site built with Vite. Content lives in Vue components and local data modules. The interface supports English, Portuguese, and Spanish through the local i18n catalog. Theme state switches between light and dark modes in the browser.

The assistant UI calls the separate `portfolio-chat` Worker when configured. Without a public Turnstile key, local development skips the Turnstile widget.

## Main parts

- `src/app/App.vue`: page shell.
- `src/app/styles.css`: global layout, responsive rules, theme tokens.
- `src/modules/portfolio/components/`: page sections.
- `src/modules/i18n/`: language catalog and locale state.
- `src/modules/assistant/`: browser chat client and Turnstile helper.
- `public/`: favicon and resume PDFs.

## Local commands

```bash
npm install
npm run dev
npm run check
```

Optional assistant widget key:

```bash
VITE_TURNSTILE_SITE_KEY=0x...
```
