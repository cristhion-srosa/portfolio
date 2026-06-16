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
      expect(translation.about.stack).toHaveLength(baseline.about.stack.length);
      expect(
        translation.about.stack.map((group) => group.items.length),
      ).toEqual(baseline.about.stack.map((group) => group.items.length));
    }
  });

  it("uses secure external project URLs", () => {
    for (const locale of locales) {
      for (const project of translations[locale].work.projects) {
        if (!project.url) continue;
        expect(project.url).toMatch(/^https:\/\//);
      }
    }
  });

  it("keeps regional language markers in localized catalogs", () => {
    const portuguese = translations["pt-BR"];
    const spanish = translations["es-AR"];

    expect(portuguese.nav.experience).toBe("Experiência");
    expect(portuguese.about.educationLabel).toBe("Formação");
    expect(spanish.contact.whatsapp).toBe("Escribime por WhatsApp");
    expect(spanish.experience.items[1]?.highlights.join(" ")).toContain(
      "relevamiento",
    );
  });

  it("links each locale to its matching resume", () => {
    expect(translations["en-US"].hero.resumeUrl).toBe("/resume.pdf");
    expect(translations["pt-BR"].hero.resumeUrl).toBe("/resume-pt-br.pdf");
    expect(translations["es-AR"].hero.resumeUrl).toBe("/resume-es-ar.pdf");
  });
});
