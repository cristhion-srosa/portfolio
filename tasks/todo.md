# Portfolio Build

- [x] Extract and normalize resume content.
- [x] Scaffold Vue 3 + TypeScript + Vite project.
- [x] Configure Biome, Knip, Fallow, and Vitest.
- [x] Build typed i18n module for `en-US`, `pt-BR`, and `es-AR`.
- [x] Build persisted light/dark theme module.
- [x] Build responsive portfolio sections from resume data.
- [x] Add accessible navigation, controls, motion, and metadata.
- [x] Add focused unit tests for locale, theme, and content integrity.
- [x] Run lint, quality, dependency, test, and production build checks.
- [ ] Inspect final site in browser at desktop and mobile widths (browser
      automation unavailable in this session).

## Architecture

- `src/app`: application shell and global composition.
- `src/modules/i18n`: locale types, catalogs, composable, persistence.
- `src/modules/theme`: theme state, system preference, persistence.
- `src/modules/portfolio`: resume-derived domain content and UI sections.
- `src/shared`: reusable UI and browser/storage helpers.

Keep content separate from layout. Keep state modules small and framework-native.
No router or global store: one-page portfolio does not need either.

## Visual Direction

Editorial-industrial. Warm paper and near-black themes, signal-orange accent,
large condensed typography, strict rules, asymmetric portrait framing, and a
numbered career rail. Motion limited to entrance, navigation state, and tactile
control feedback.

## Review

- `npm run check` passes.
- Vitest: 4 tests pass across 2 files.
- Knip: no unused dependency or export findings.
- Fallow: no dead code or duplication; maintainability index 93.
- Vite production build succeeds; JavaScript bundle is 30.53 kB gzip.
- Development server returns `200` for the app, resume, and portrait.
- Automated visual browser inspection remains pending because the in-app
  browser execution tool was unavailable.
