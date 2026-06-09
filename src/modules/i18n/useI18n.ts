import { computed, ref } from "vue";
import { translations } from "./catalog";
import { type Locale, locales } from "./types";

const storageKey = "portfolio-locale";

function isLocale(value: string | null): value is Locale {
  return locales.includes(value as Locale);
}

function initialLocale(): Locale {
  const saved = localStorage.getItem(storageKey);
  if (isLocale(saved)) return saved;

  const browserLocale = navigator.language.toLowerCase();
  if (browserLocale.startsWith("pt")) return "pt-BR";
  if (browserLocale.startsWith("es")) return "es-AR";
  return "en-US";
}

const locale = ref<Locale>(initialLocale());

export function useI18n() {
  const t = computed(() => translations[locale.value]);

  function setLocale(nextLocale: Locale) {
    locale.value = nextLocale;
    localStorage.setItem(storageKey, nextLocale);
    document.documentElement.lang = nextLocale;
    document.title = translations[nextLocale].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translations[nextLocale].meta.description);
  }

  setLocale(locale.value);

  return { locale, locales, setLocale, t };
}
