<script setup lang="ts">
import { ref } from "vue";
import type { Locale } from "@/modules/i18n/types";
import { useI18n } from "@/modules/i18n/useI18n";
import { useTheme } from "@/modules/theme/useTheme";

const { locale, locales, setLocale, t } = useI18n();
const { theme, toggleTheme } = useTheme();
const isMenuOpen = ref(false);

const localeLabels: Record<Locale, string> = {
  "en-US": "EN",
  "pt-BR": "PT",
  "es-AR": "ES",
};
</script>

<template>
  <header class="site-header" :data-menu-open="isMenuOpen">
    <a class="wordmark" href="#main" aria-label="Cristhion Rosa, home" @click="isMenuOpen = false">
      <span>CR</span>
      <span class="wordmark__full">Cristhion Rosa</span>
    </a>

    <nav id="primary-navigation" class="desktop-nav" aria-label="Primary navigation">
      <a href="#assistant" @click="isMenuOpen = false">{{ t.nav.chat }}</a>
      <a href="#work" @click="isMenuOpen = false">{{ t.nav.work }}</a>
      <a href="#experience" @click="isMenuOpen = false">{{ t.nav.experience }}</a>
      <a href="#about" @click="isMenuOpen = false">{{ t.nav.about }}</a>
      <a href="#contact" @click="isMenuOpen = false">{{ t.nav.contact }}</a>

      <div class="mobile-nav-controls">
        <label class="sr-only" for="mobile-language">{{ t.controls.language }}</label>
        <select
          id="mobile-language"
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
    </nav>

    <div class="header-controls">
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

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
