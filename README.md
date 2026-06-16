# Cristhion Rosa Portfolio

Vue 3 portfolio for Cristhion Rosa.

## Local development

```bash
npm install
npm run dev
```

Run every project check:

```bash
npm run check
```

## Assistant Turnstile

Set the public Turnstile site key when the chat Worker has
`TURNSTILE_SECRET_KEY` configured:

```bash
VITE_TURNSTILE_SITE_KEY=0x...
```

If the variable is absent, the assistant skips the widget for local development.
