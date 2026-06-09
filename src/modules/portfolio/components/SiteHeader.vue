<script setup lang="ts">
import type { Locale } from "@/modules/i18n/types";
import { useI18n } from "@/modules/i18n/useI18n";
import { useTheme } from "@/modules/theme/useTheme";

const { locale, locales, setLocale, t } = useI18n();
const { theme, toggleTheme } = useTheme();

const localeLabels: Record<Locale, string> = {
  "en-US": "EN",
  "pt-BR": "PT",
  "es-AR": "ES",
};
</script>

<template>
  <header class="site-header">
    <a class="wordmark" href="#main" aria-label="Cristhion Rosa, home">
      <span>CR</span>
      <span class="wordmark__full">Cristhion Rosa</span>
    </a>

    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#work">{{ t.nav.work }}</a>
      <a href="#experience">{{ t.nav.experience }}</a>
      <a href="#about">{{ t.nav.about }}</a>
      <a href="#contact">{{ t.nav.contact }}</a>
    </nav>

    <div class="header-controls">
      <label class="sr-only" for="language">{{ t.controls.language }}</label>
      <select
        id="language"
        :value="locale"
        :aria-label="t.controls.language"
        @change="setLocale(($event.target as HTMLSelectElement).value as Locale)"
      >
        <option v-for="item in locales" :key="item" :value="item">
          {{ localeLabels[item] }}
        </option>
      </select>

      <button
        class="theme-toggle"
        type="button"
        :aria-label="theme === 'light' ? t.controls.dark : t.controls.light"
        :title="theme === 'light' ? t.controls.dark : t.controls.light"
        @click="toggleTheme"
      >
        <span aria-hidden="true">{{ theme === "light" ? "DARK" : "LIGHT" }}</span>
        <i aria-hidden="true" />
      </button>
    </div>
  </header>
</template>
