import { describe, expect, it, vi } from "vitest";
import { askPortfolioAssistant } from "./portfolioAssistant";

describe("askPortfolioAssistant", () => {
  it("returns unavailable message when API is unavailable", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("network down")),
    );

    const reply = await askPortfolioAssistant(
      "Which projects matter?",
      "en-US",
    );

    expect(reply.source).toBe("local");
    expect(reply.tools).toEqual(["chat.unavailable"]);
    expect(reply.text).toContain("chat endpoint is unavailable");

    vi.unstubAllGlobals();
  });

  it("uses remote answer when the chat API returns one", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          answer: "Remote Groq answer",
          context: ["q:What stack? | tools:stack.list"],
          mode: "model",
          sessionId: "session-1",
          tools: ["mcp.route", "groq.chat"],
        }),
      }),
    );

    const reply = await askPortfolioAssistant("What stack?", "en-US");

    expect(reply.source).toBe("remote");
    expect(reply.text).toBe("Remote Groq answer");
    expect(reply.context).toEqual(["q:What stack? | tools:stack.list"]);
    expect(reply.sessionId).toBe("session-1");
    expect(reply.tools).toEqual(["mcp.route", "groq.chat"]);

    vi.unstubAllGlobals();
  });

  it("uses Worker local answer when Groq is unavailable", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          answer: "Local Worker answer",
          mode: "local",
          tools: ["hiring.fit"],
        }),
      }),
    );

    const reply = await askPortfolioAssistant("Why hire you?", "en-US");

    expect(reply.source).toBe("local");
    expect(reply.text).toBe("Local Worker answer");
    expect(reply.tools).toEqual(["hiring.fit"]);

    vi.unstubAllGlobals();
  });

  it("sends Turnstile token when provided", async () => {
    const fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        answer: "Remote answer",
        tools: [],
      }),
    });
    vi.stubGlobal("fetch", fetch);

    await askPortfolioAssistant("What stack?", "en-US", {
      turnstileToken: "turnstile-token",
    });

    expect(JSON.parse(fetch.mock.calls[0]?.[1]?.body as string)).toMatchObject({
      turnstileToken: "turnstile-token",
    });

    vi.unstubAllGlobals();
  });

  it("sends compact context and session id when provided", async () => {
    const fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        answer: "Remote answer",
        tools: [],
      }),
    });
    vi.stubGlobal("fetch", fetch);

    await askPortfolioAssistant("And what changed there?", "en-US", {
      context: ["q:What changed at Minha Visita? | focus:Minha Visita"],
      sessionId: "session-1",
    });

    expect(JSON.parse(fetch.mock.calls[0]?.[1]?.body as string)).toMatchObject({
      context: ["q:What changed at Minha Visita? | focus:Minha Visita"],
      sessionId: "session-1",
    });

    vi.unstubAllGlobals();
  });
});
