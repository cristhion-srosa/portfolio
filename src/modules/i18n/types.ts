export const locales = ["en-US", "pt-BR", "es-AR"] as const;

export type Locale = (typeof locales)[number];

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  url: string;
}

interface Project {
  name: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  linkLabel: string;
  url: string;
}

export interface Translation {
  meta: { title: string; description: string };
  nav: { work: string; experience: string; about: string; contact: string };
  controls: {
    language: string;
    theme: string;
    light: string;
    dark: string;
  };
  hero: {
    status: string;
    role: string;
    intro: string;
    cta: string;
    secondaryCta: string;
    photoAlt: string;
    location: string;
  };
  metrics: Array<{ value: string; label: string }>;
  work: { index: string; title: string; intro: string; projects: Project[] };
  experience: {
    index: string;
    title: string;
    intro: string;
    items: Experience[];
  };
  about: {
    index: string;
    title: string;
    body: string[];
    stackLabel: string;
    stack: string[];
    educationLabel: string;
    education: string;
  };
  contact: {
    index: string;
    title: string;
    body: string;
    email: string;
    socialLabel: string;
  };
  footer: string;
}
