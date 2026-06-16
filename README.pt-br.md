# Meu Portfólio [![en](https://img.shields.io/badge/lang-en-red.svg)](README.md) [![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md) [![es](https://img.shields.io/badge/lang-es-yellow.svg)](README.es.md)

## O que é

Este é meu site de portfólio. Ele mostra trabalhos selecionados, experiência, stack, canais de contato, currículos em PDF e a entrada para um pequeno assistente de chat.

## Como funciona

O app é uma single-page app em Vue 3 com Vite. O conteúdo fica em componentes Vue e módulos locais de dados. A interface tem inglês, português e espanhol pelo catálogo local de i18n. O tema alterna entre claro e escuro no navegador.

A UI do assistente chama o Worker separado `portfolio-chat` quando configurada. Sem uma chave pública do Turnstile, o desenvolvimento local ignora o widget.

## Partes principais

- `src/app/App.vue`: estrutura da página.
- `src/app/styles.css`: layout global, regras responsivas, tokens de tema.
- `src/modules/portfolio/components/`: seções da página.
- `src/modules/i18n/`: catálogo de idiomas e estado do locale.
- `src/modules/assistant/`: cliente do chat no navegador e helper do Turnstile.
- `public/`: favicon e currículos em PDF.

## Comandos locais

```bash
npm install
npm run dev
npm run check
```

Chave opcional do widget do assistente:

```bash
VITE_TURNSTILE_SITE_KEY=0x...
```
