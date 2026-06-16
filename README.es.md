# Mi Portfolio [![en](https://img.shields.io/badge/lang-en-red.svg)](README.md) [![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md) [![es](https://img.shields.io/badge/lang-es-yellow.svg)](README.es.md)

## Qué es

Este es mi sitio de portfolio. Muestra trabajos seleccionados, experiencia, stack, canales de contacto, CVs en PDF y la entrada a un pequeño asistente de chat.

## Cómo funciona

La app es una single-page app en Vue 3 con Vite. El contenido vive en componentes Vue y módulos locales de datos. La interfaz soporta inglés, portugués y español con el catálogo local de i18n. El tema cambia entre claro y oscuro en el navegador.

La UI del asistente llama al Worker separado `portfolio-chat` cuando está configurada. Sin una clave pública de Turnstile, el desarrollo local omite el widget.

## Partes principales

- `src/app/App.vue`: estructura de la página.
- `src/app/styles.css`: layout global, reglas responsivas, tokens de tema.
- `src/modules/portfolio/components/`: secciones de la página.
- `src/modules/i18n/`: catálogo de idiomas y estado del locale.
- `src/modules/assistant/`: cliente del chat en el navegador y helper de Turnstile.
- `public/`: favicon y CVs en PDF.

## Comandos locales

```bash
npm install
npm run dev
npm run check
```

Clave opcional del widget del asistente:

```bash
VITE_TURNSTILE_SITE_KEY=0x...
```
