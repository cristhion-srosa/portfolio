import { computed, onMounted, ref } from "vue";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          callback: (token: string) => void;
          "error-callback": () => void;
          "expired-callback": () => void;
          sitekey: string;
        },
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const turnstileScriptUrl =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export function useTurnstile() {
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const container = ref<HTMLElement | null>(null);
  const token = ref("");
  const widgetId = ref("");
  const isEnabled = computed(() => Boolean(siteKey));
  const isReady = computed(() => !isEnabled.value || Boolean(token.value));

  async function render() {
    const target = renderTarget(siteKey, container.value, widgetId.value);
    if (!target) return;

    await loadTurnstileScript();
    widgetId.value =
      window.turnstile?.render(target.container, {
        callback: (value) => {
          token.value = value;
        },
        "error-callback": () => {
          token.value = "";
        },
        "expired-callback": () => {
          token.value = "";
        },
        sitekey: target.siteKey,
      }) ?? "";
  }

  function reset() {
    token.value = "";
    if (widgetId.value) {
      window.turnstile?.reset(widgetId.value);
    }
  }

  onMounted(() => {
    void render();
  });

  return {
    container,
    isEnabled,
    isReady,
    reset,
    token,
  };
}

function renderTarget(
  siteKey: string | undefined,
  container: HTMLElement | null,
  widgetId: string,
) {
  if (!siteKey || !container || widgetId) return undefined;

  return { container, siteKey };
}

function loadTurnstileScript() {
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${turnstileScriptUrl}"]`,
  );
  if (existing) return scriptLoaded(existing);

  const script = document.createElement("script");
  script.src = turnstileScriptUrl;
  script.async = true;
  script.defer = true;
  document.head.append(script);

  return scriptLoaded(script);
}

function scriptLoaded(script: HTMLScriptElement) {
  if (window.turnstile) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("Turnstile failed")),
      {
        once: true,
      },
    );
  });
}
