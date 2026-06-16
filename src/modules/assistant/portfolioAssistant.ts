import type { Locale } from "@/modules/i18n/types";

export interface AssistantMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  tools?: string[];
  source: "local" | "remote";
}

export interface AssistantReply {
  context: string[];
  sessionId?: string;
  text: string;
  tools: string[];
  source: "local" | "remote";
}

interface ChatApiReply {
  answer?: string;
  context?: string[];
  mode?: "local" | "model";
  sessionId?: string;
  tools?: string[];
}

export interface AskPortfolioAssistantOptions {
  context?: string[];
  sessionId?: string;
  turnstileToken?: string;
}

function unavailableAnswer(
  locale: Locale,
  context: string[] = [],
): AssistantReply {
  return {
    context,
    source: "local",
    tools: ["chat.unavailable"],
    text:
      locale === "en-US"
        ? "The chat endpoint is unavailable. Try again in a moment."
        : locale === "pt-BR"
          ? "O endpoint do chat está indisponível. Tente de novo em instantes."
          : "El endpoint del chat no está disponible. Probá de nuevo en un momento.",
  };
}

export async function askPortfolioAssistant(
  question: string,
  locale: Locale,
  options: AskPortfolioAssistantOptions = {},
): Promise<AssistantReply> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        locale,
        contextVersion: "portfolio-v1",
        context: options.context,
        sessionId: options.sessionId,
        turnstileToken: options.turnstileToken,
      }),
    });

    if (!response.ok) return unavailableAnswer(locale, options.context);

    const data = (await response.json()) as ChatApiReply;
    if (!data.answer) return unavailableAnswer(locale, options.context);

    return {
      context: Array.isArray(data.context) ? data.context : [],
      sessionId: data.sessionId,
      source: data.mode === "model" ? "remote" : "local",
      text: data.answer,
      tools: data.tools ?? [],
    };
  } catch {
    return unavailableAnswer(locale, options.context);
  }
}

export function createMessage(
  role: AssistantMessage["role"],
  text: string,
  source: AssistantMessage["source"] = "local",
  tools?: string[],
): AssistantMessage {
  return {
    id: crypto.randomUUID(),
    role,
    text,
    source,
    tools,
  };
}
