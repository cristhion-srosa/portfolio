import { beforeEach, describe, expect, it, vi } from "vitest";

describe("useTheme", () => {
  beforeEach(() => {
    vi.resetModules();
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({ matches: false })),
    );
  });

  it("uses and persists the system theme", async () => {
    const { useTheme } = await import("./useTheme");
    const { theme, toggleTheme } = useTheme();

    expect(theme.value).toBe("light");
    toggleTheme();
    expect(theme.value).toBe("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
