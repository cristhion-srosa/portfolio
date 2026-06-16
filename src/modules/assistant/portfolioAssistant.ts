import { translations } from "@/modules/i18n/catalog";
import type { Locale, Translation } from "@/modules/i18n/types";

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
  sessionId?: string;
  tools?: string[];
}

export interface AskPortfolioAssistantOptions {
  context?: string[];
  sessionId?: string;
  turnstileToken?: string;
}

interface AnswerContext {
  and: string;
  locale: Locale;
  question: string;
  t: Translation;
}

interface LocalAnswerIntent {
  pattern: RegExp;
  answer: (context: AnswerContext) => AssistantReply;
}

const contact = {
  email: "mailto:cristhion.srosa@gmail.com",
  whatsapp: "https://wa.me/5551991859923",
  github: "https://github.com/cristhion-srosa",
  linkedin: "https://www.linkedin.com/in/cristhion-rosa/",
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function joinList(items: string[], conjunction: string) {
  if (items.length < 2) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} ${conjunction} ${items.at(-1)}`;
}

function stackTools(t: Translation) {
  return t.about.stack.flatMap((group) => group.items);
}

function contactAnswer({ locale }: AnswerContext): AssistantReply {
  return {
    context: [],
    source: "local",
    tools: ["contact.lookup", "profile.links"],
    text:
      locale === "en-US"
        ? `Use email (${contact.email.replace("mailto:", "")}), WhatsApp, LinkedIn, or GitHub. The contact section has the direct links.`
        : locale === "pt-BR"
          ? `Use email (${contact.email.replace("mailto:", "")}), WhatsApp, LinkedIn ou GitHub. A seção de contato tem os links diretos.`
          : `Usá email (${contact.email.replace("mailto:", "")}), WhatsApp, LinkedIn o GitHub. La sección de contacto tiene los links directos.`,
  };
}

function stackAnswer({ and, locale, t }: AnswerContext): AssistantReply {
  const tools = stackTools(t);
  return {
    context: [],
    source: "local",
    tools: ["stack.list", "profile.match"],
    text:
      locale === "en-US"
        ? `Cristhion works across ${joinList(
            t.about.stack.map((group) => group.label),
            and,
          )}. Core tools include ${joinList(tools.slice(0, 10), and)}.`
        : locale === "pt-BR"
          ? `Cristhion atua em ${joinList(
              t.about.stack.map((group) => group.label),
              and,
            )}. Ferramentas centrais incluem ${joinList(tools.slice(0, 10), and)}.`
          : `Cristhion trabaja en ${joinList(
              t.about.stack.map((group) => group.label),
              and,
            )}. Herramientas centrales: ${joinList(tools.slice(0, 10), and)}.`,
  };
}

function projectsAnswer({ locale, t }: AnswerContext): AssistantReply {
  const projects = t.work.projects
    .map(
      (project) =>
        `${project.name}: ${project.description} (${project.technologies.join(", ")})`,
    )
    .join("\n");

  return {
    context: [],
    source: "local",
    tools: ["projects.search", "projects.rank"],
    text:
      locale === "en-US"
        ? `Best project signals:\n${projects}`
        : locale === "pt-BR"
          ? `Principais sinais de projeto:\n${projects}`
          : `Señales principales de proyecto:\n${projects}`,
  };
}

function experienceAnswer({ locale, t }: AnswerContext): AssistantReply {
  const items = t.experience.items
    .map((item) => `${item.company}: ${item.summary} ${item.highlights[0]}`)
    .join("\n");

  return {
    context: [],
    source: "local",
    tools: ["experience.search", "impact.extract"],
    text:
      locale === "en-US"
        ? `Relevant experience:\n${items}`
        : locale === "pt-BR"
          ? `Experiência relevante:\n${items}`
          : `Experiencia relevante:\n${items}`,
  };
}

function resumeAnswer({ locale, t }: AnswerContext): AssistantReply {
  return {
    context: [],
    source: "local",
    tools: ["resume.resolve", "locale.detect"],
    text:
      locale === "en-US"
        ? `Download the resume here: ${t.hero.resumeUrl}.`
        : locale === "pt-BR"
          ? `Baixe o currículo aqui: ${t.hero.resumeUrl}.`
          : `Descargá el CV acá: ${t.hero.resumeUrl}.`,
  };
}

function fallbackAnswer({ locale, t }: AnswerContext): AssistantReply {
  return {
    context: [],
    source: "local",
    tools: ["profile.summary", "intent.fallback"],
    text:
      locale === "en-US"
        ? `${t.hero.intro} Ask about projects, experience, stack, resume, or contact for a sharper answer.`
        : locale === "pt-BR"
          ? `${t.hero.intro} Pergunte sobre projetos, experiência, stack, currículo ou contato para uma resposta mais precisa.`
          : `${t.hero.intro} Preguntá sobre proyectos, experiencia, stack, CV o contacto para una respuesta más precisa.`,
  };
}

const localIntents: LocalAnswerIntent[] = [
  {
    pattern: /(contact|email|whatsapp|linkedin|github|contato|contacto)/,
    answer: contactAnswer,
  },
  {
    pattern:
      /(stack|tech|skill|tool|backend|frontend|mobile|cloud|dados|data|tecnolog|habilidad)/,
    answer: stackAnswer,
  },
  {
    pattern: /(project|work|portfolio|projeto|proyecto|migrator|ozio)/,
    answer: projectsAnswer,
  },
  {
    pattern:
      /(experience|job|company|minha visita|scopi|experiencia|trabalho|trabajo)/,
    answer: experienceAnswer,
  },
  {
    pattern: /(resume|cv|curriculo|currículo)/,
    answer: resumeAnswer,
  },
];

function answerLocally(question: string, locale: Locale): AssistantReply {
  const context: AnswerContext = {
    and: locale === "en-US" ? "and" : locale === "pt-BR" ? "e" : "y",
    locale,
    question: normalize(question),
    t: translations[locale],
  };

  for (const intent of localIntents) {
    if (intent.pattern.test(context.question)) {
      return intent.answer(context);
    }
  }

  return fallbackAnswer(context);
}

export async function askPortfolioAssistant(
  question: string,
  locale: Locale,
  options: AskPortfolioAssistantOptions = {},
): Promise<AssistantReply> {
  const localReply = answerLocally(question, locale);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        locale,
        contextVersion: "portfolio-v1",
        context: options.context,
        localTools: localReply.tools,
        sessionId: options.sessionId,
        turnstileToken: options.turnstileToken,
      }),
    });

    if (!response.ok) return localReply;

    const data = (await response.json()) as ChatApiReply;
    if (!data.answer) return localReply;

    return {
      context: Array.isArray(data.context) ? data.context : [],
      sessionId: data.sessionId,
      source: "remote",
      text: data.answer,
      tools: data.tools?.length ? data.tools : localReply.tools,
    };
  } catch {
    return localReply;
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
