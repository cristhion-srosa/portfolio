import { ref } from "vue";

type Theme = "light" | "dark";

const storageKey = "portfolio-theme";

function initialTheme(): Theme {
  const saved = localStorage.getItem(storageKey);
  if (saved === "light" || saved === "dark") return saved;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const theme = ref<Theme>(initialTheme());

function applyTheme(nextTheme: Theme) {
  theme.value = nextTheme;
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem(storageKey, nextTheme);
}

export function useTheme() {
  function toggleTheme() {
    applyTheme(theme.value === "light" ? "dark" : "light");
  }

  applyTheme(theme.value);
  return { theme, toggleTheme };
}
