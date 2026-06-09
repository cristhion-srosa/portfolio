import { onBeforeUnmount, onMounted } from "vue";

const selector = "[data-reveal]";

function show(target: Element) {
  (target as HTMLElement).dataset.visible = "true";
}

function shouldRevealImmediately() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  return reducedMotion || !("IntersectionObserver" in window);
}

function revealIntersecting(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
) {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      show(entry.target);
      observer.unobserve(entry.target);
    });
}

export function useScrollReveal() {
  let observer: IntersectionObserver | undefined;

  onMounted(() => {
    const targets = document.querySelectorAll<HTMLElement>(selector);

    if (shouldRevealImmediately()) {
      targets.forEach(show);
      return;
    }

    document.documentElement.classList.add("reveal-ready");
    observer = new IntersectionObserver(revealIntersecting, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12,
    });

    targets.forEach((target) => {
      observer?.observe(target);
    });
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    document.documentElement.classList.remove("reveal-ready");
  });
}
