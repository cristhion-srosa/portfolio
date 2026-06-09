import { describe, expect, it } from "vitest";
import { translations } from "@/modules/i18n/catalog";
import { stackLinks } from "./stackLinks";

describe("stack links", () => {
  it("uses secure URLs", () => {
    for (const url of Object.values(stackLinks)) {
      expect(url).toMatch(/^https:\/\//);
    }
  });

  it("only references technologies present in the catalog", () => {
    const stackItems = new Set(
      translations["en-US"].about.stack.flatMap((group) => group.items),
    );

    for (const technology of Object.keys(stackLinks)) {
      expect(stackItems.has(technology)).toBe(true);
    }
  });
});
