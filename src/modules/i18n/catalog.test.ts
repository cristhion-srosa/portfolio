import { describe, expect, it } from "vitest";
import { translations } from "./catalog";
import { locales } from "./types";

describe("translation catalog", () => {
  it("contains every supported locale", () => {
    expect(Object.keys(translations)).toEqual([...locales]);
  });

  it("keeps portfolio collections aligned across locales", () => {
    const baseline = translations["en-US"];

    for (const locale of locales) {
      const translation = translations[locale];
      expect(translation.metrics).toHaveLength(baseline.metrics.length);
      expect(translation.work.projects).toHaveLength(
        baseline.work.projects.length,
      );
      expect(translation.experience.items).toHaveLength(
        baseline.experience.items.length,
      );
      expect(translation.about.stack).toEqual(baseline.about.stack);
    }
  });

  it("uses secure external project URLs", () => {
    for (const locale of locales) {
      for (const project of translations[locale].work.projects) {
        expect(project.url).toMatch(/^https:\/\//);
      }
    }
  });
});
