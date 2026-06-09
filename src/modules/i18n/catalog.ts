import type { Locale, Translation } from "./types";

const shared = {
  projectLinks: {
    ozio: "https://oziopiscinas.com.br/",
    migrator: "https://github.com/cristhion-srosa/db-migrator",
  },
  experienceLinks: {
    minhaVisita: "https://minhavisita.app/",
    scopi: "https://scopi.com.br/",
  },
};

export const translations: Record<Locale, Translation> = {
  "en-US": {
    meta: {
      title: "Cristhion Rosa | Full-stack Software Engineer",
      description:
        "Full-stack engineer building reliable web, mobile, and API-driven products.",
    },
    nav: {
      work: "Selected work",
      experience: "Experience",
      about: "About",
      contact: "Contact",
    },
    controls: {
      language: "Change language",
      theme: "Change color theme",
      light: "Use light theme",
      dark: "Use dark theme",
    },
    hero: {
      status: "Available for international opportunities",
      role: "Full-stack software engineer",
      intro:
        "I build business-critical products where speed cannot compromise reliability, security, or clean architecture.",
      cta: "View selected work",
      secondaryCta: "Download resume",
      photoAlt: "Portrait of Cristhion Rosa",
      location: "Brazil · Remote worldwide",
    },
    metrics: [
      { value: "85%", label: "lower average GraphQL query latency" },
      { value: "59%", label: "faster CI after Vitest migration" },
      { value: "4+ yr", label: "shipping production software" },
    ],
    work: {
      index: "01",
      title: "Selected work",
      intro:
        "Products built around real operational constraints: data integrity, speed, and maintainability.",
      projects: [
        {
          name: "DB Data Migrator",
          eyebrow: "Desktop engineering tool",
          description:
            "Cross-database migration app with schema introspection, intelligent mapping, validation, and live migration monitoring.",
          technologies: ["Go 1.26", "Vue 3", "Wails", "MySQL", "PostgreSQL"],
          linkLabel: "View repository",
          url: shared.projectLinks.migrator,
        },
        {
          name: "Ozio Piscinas",
          eyebrow: "Commercial web platform",
          description:
            "A complete website for a swimming pool company, from implementation through performance optimization and deployment.",
          technologies: ["Next.js", "Web performance", "Deployment"],
          linkLabel: "Visit live site",
          url: shared.projectLinks.ozio,
        },
      ],
    },
    experience: {
      index: "02",
      title: "Experience",
      intro:
        "Startup teams taught me to own the problem, challenge assumptions, and ship the fix.",
      items: [
        {
          company: "Minha Visita",
          role: "Full-stack Software Engineer",
          period: "Nov 2024 — Present",
          location: "Novo Hamburgo, Brazil · Hybrid",
          summary:
            "Building customer-facing APIs and evolving backend architecture for an external team management platform.",
          highlights: [
            "Reduced average GraphQL query latency by about 85% using request caching and microtask-based batching.",
            "Cut CI time by about 59% by creating a Vitest E2E suite and migrating unit tests from Jest.",
            "Led a backend architecture refactor that improved endpoint consistency, security, maintainability, and regression control.",
            "Built integrations that connect customer workflows to Make and Zapier.",
          ],
          url: shared.experienceLinks.minhaVisita,
        },
        {
          company: "Scopi",
          role: "Full-stack Software Engineer",
          period: "Jan 2022 — Nov 2024",
          location: "Taquara, Brazil · Hybrid",
          summary:
            "Shipped web, mobile, and backend features for a strategic planning platform used to run company operations.",
          highlights: [
            "Implemented more than half of a new public API containing hundreds of endpoints.",
            "Refactored a large AngularJS codebase around ESLint and the Airbnb Style Guide.",
            "Owned features from requirement discovery and technical research through implementation across a business-critical planning platform.",
            "Delivered features end to end across Rails, Node.js, Firebase, MongoDB, and React Native.",
          ],
          url: shared.experienceLinks.scopi,
        },
      ],
    },
    about: {
      index: "03",
      title: "Engineering with ownership",
      body: [
        "I work across backend architecture, customer-facing APIs, frontend systems, mobile apps, testing, and delivery pipelines.",
        "My strongest work happens in products where correctness matters. I trace the root cause, make the tradeoff explicit, and leave the code easier to change.",
      ],
      stackLabel: "Core toolkit",
      stack: [
        "TypeScript",
        "Node.js",
        "NestJS",
        "Go",
        "Ruby on Rails",
        "Vue",
        "PostgreSQL",
        "GraphQL",
        "Docker",
        "AWS",
      ],
      educationLabel: "Education",
      education:
        "Internet Systems, Unisinos · Expected 2026 · Average above 90%",
    },
    contact: {
      index: "04",
      title: "Let’s build software that holds up.",
      body: "Open to full-stack and backend roles with strong engineering standards and meaningful product problems.",
      email: "Start a conversation",
      whatsapp: "Message on WhatsApp",
      socialLabel: "Find me online",
    },
    footer: "Designed and built by Cristhion Rosa.",
  },
  "pt-BR": {
    meta: {
      title: "Cristhion Rosa | Engenheiro de Software Full-stack",
      description:
        "Engenheiro full-stack criando produtos web, mobile e APIs confiáveis.",
    },
    nav: {
      work: "Projetos",
      experience: "Experiência",
      about: "Sobre",
      contact: "Contato",
    },
    controls: {
      language: "Trocar idioma",
      theme: "Trocar tema de cores",
      light: "Usar tema claro",
      dark: "Usar tema escuro",
    },
    hero: {
      status: "Disponível para oportunidades internacionais",
      role: "Engenheiro de software full-stack",
      intro:
        "Construo produtos críticos para o negócio, onde velocidade não pode comprometer confiabilidade, segurança ou arquitetura limpa.",
      cta: "Ver projetos",
      secondaryCta: "Baixar currículo",
      photoAlt: "Retrato de Cristhion Rosa",
      location: "Brasil · Remoto para o mundo",
    },
    metrics: [
      { value: "85%", label: "menos latência média em queries GraphQL" },
      { value: "59%", label: "CI mais rápido após migração para Vitest" },
      { value: "4+ anos", label: "entregando software em produção" },
    ],
    work: {
      index: "01",
      title: "Projetos selecionados",
      intro:
        "Produtos criados sob restrições reais: integridade dos dados, velocidade e facilidade de manutenção.",
      projects: [
        {
          name: "DB Data Migrator",
          eyebrow: "Ferramenta desktop de engenharia",
          description:
            "Aplicativo de migração entre bancos com introspecção de schema, mapeamento inteligente, validação e monitoramento em tempo real.",
          technologies: ["Go 1.26", "Vue 3", "Wails", "MySQL", "PostgreSQL"],
          linkLabel: "Ver repositório",
          url: shared.projectLinks.migrator,
        },
        {
          name: "Ozio Piscinas",
          eyebrow: "Plataforma web comercial",
          description:
            "Site completo para uma empresa de piscinas, da implementação à otimização de desempenho e deploy.",
          technologies: ["Next.js", "Performance web", "Deploy"],
          linkLabel: "Visitar site",
          url: shared.projectLinks.ozio,
        },
      ],
    },
    experience: {
      index: "02",
      title: "Experiência",
      intro:
        "Trabalhar em startups me ensinou a assumir o problema, questionar premissas e entregar a solução.",
      items: [
        {
          company: "Minha Visita",
          role: "Engenheiro de Software Full-stack",
          period: "Nov 2024 — Atual",
          location: "Novo Hamburgo, Brasil · Híbrido",
          summary:
            "Desenvolvimento de APIs para clientes e evolução da arquitetura backend de uma plataforma de gestão de equipes externas.",
          highlights: [
            "Reduzi em cerca de 85% a latência média de queries GraphQL com cache por requisição e batching via microtasks.",
            "Reduzi o tempo de CI em cerca de 59% com uma suíte E2E em Vitest e a migração dos testes unitários de Jest.",
            "Liderei uma refatoração da arquitetura backend que melhorou consistência dos endpoints, segurança, manutenção e controle de regressões.",
            "Criei integrações que conectam fluxos de clientes ao Make e Zapier.",
          ],
          url: shared.experienceLinks.minhaVisita,
        },
        {
          company: "Scopi",
          role: "Engenheiro de Software Full-stack",
          period: "Jan 2022 — Nov 2024",
          location: "Taquara, Brasil · Híbrido",
          summary:
            "Entreguei recursos web, mobile e backend para uma plataforma de planejamento estratégico e execução operacional.",
          highlights: [
            "Implementei mais da metade de uma nova API pública com centenas de endpoints.",
            "Refatorei uma grande base AngularJS usando ESLint e Airbnb Style Guide.",
            "Conduzi recursos desde a descoberta de requisitos e pesquisa técnica até a implementação em uma plataforma crítica de planejamento.",
            "Entreguei recursos ponta a ponta com Rails, Node.js, Firebase, MongoDB e React Native.",
          ],
          url: shared.experienceLinks.scopi,
        },
      ],
    },
    about: {
      index: "03",
      title: "Engenharia com responsabilidade",
      body: [
        "Atuo em arquitetura backend, APIs para clientes, sistemas frontend, aplicativos mobile, testes e pipelines de entrega.",
        "Meu melhor trabalho acontece em produtos onde precisão importa. Encontro a causa raiz, explicito o trade-off e deixo o código mais fácil de evoluir.",
      ],
      stackLabel: "Ferramentas principais",
      stack: [
        "TypeScript",
        "Node.js",
        "NestJS",
        "Go",
        "Ruby on Rails",
        "Vue",
        "PostgreSQL",
        "GraphQL",
        "Docker",
        "AWS",
      ],
      educationLabel: "Formação",
      education:
        "Sistemas para Internet, Unisinos · Conclusão em 2026 · Média acima de 90%",
    },
    contact: {
      index: "04",
      title: "Vamos construir software que resiste.",
      body: "Aberto a posições full-stack e backend com alto padrão de engenharia e problemas de produto relevantes.",
      email: "Iniciar conversa",
      whatsapp: "Conversar pelo WhatsApp",
      socialLabel: "Encontre-me online",
    },
    footer: "Design e desenvolvimento por Cristhion Rosa.",
  },
  "es-AR": {
    meta: {
      title: "Cristhion Rosa | Ingeniero de Software Full-stack",
      description:
        "Ingeniero full-stack que desarrolla productos web, móviles y APIs confiables.",
    },
    nav: {
      work: "Proyectos",
      experience: "Experiencia",
      about: "Perfil",
      contact: "Contacto",
    },
    controls: {
      language: "Cambiar idioma",
      theme: "Cambiar tema de colores",
      light: "Usar tema claro",
      dark: "Usar tema oscuro",
    },
    hero: {
      status: "Disponible para oportunidades internacionales",
      role: "Ingeniero de software full-stack",
      intro:
        "Desarrollo productos críticos para el negocio, donde la velocidad no puede comprometer confiabilidad, seguridad ni una arquitectura limpia.",
      cta: "Ver proyectos",
      secondaryCta: "Descargar CV",
      photoAlt: "Retrato de Cristhion Rosa",
      location: "Brasil · Remoto global",
    },
    metrics: [
      { value: "85%", label: "menos latencia promedio en queries GraphQL" },
      { value: "59%", label: "CI más rápido después de migrar a Vitest" },
      { value: "4+ años", label: "entregando software en producción" },
    ],
    work: {
      index: "01",
      title: "Proyectos seleccionados",
      intro:
        "Productos desarrollados con restricciones reales: integridad de datos, velocidad y mantenibilidad.",
      projects: [
        {
          name: "DB Data Migrator",
          eyebrow: "Herramienta de ingeniería de escritorio",
          description:
            "Aplicación de migración entre bases con introspección de esquemas, mapeo inteligente, validación y monitoreo en tiempo real.",
          technologies: ["Go 1.26", "Vue 3", "Wails", "MySQL", "PostgreSQL"],
          linkLabel: "Ver repositorio",
          url: shared.projectLinks.migrator,
        },
        {
          name: "Ozio Piscinas",
          eyebrow: "Plataforma web comercial",
          description:
            "Sitio completo para una empresa de piscinas, desde la implementación hasta la optimización y el despliegue.",
          technologies: ["Next.js", "Rendimiento web", "Despliegue"],
          linkLabel: "Visitar sitio",
          url: shared.projectLinks.ozio,
        },
      ],
    },
    experience: {
      index: "02",
      title: "Experiencia",
      intro:
        "Los equipos de startups me enseñaron a asumir el problema, cuestionar supuestos y entregar la solución.",
      items: [
        {
          company: "Minha Visita",
          role: "Ingeniero de Software Full-stack",
          period: "Nov 2024 — Actualidad",
          location: "Novo Hamburgo, Brasil · Híbrido",
          summary:
            "Desarrollo de APIs para clientes y evolución de la arquitectura backend de una plataforma de gestión de equipos externos.",
          highlights: [
            "Reduje cerca del 85% la latencia promedio de queries GraphQL con caché por petición y batching basado en microtasks.",
            "Reduje cerca del 59% el tiempo de CI con una suite E2E en Vitest y la migración de tests unitarios desde Jest.",
            "Lideré una refactorización de la arquitectura backend que mejoró la consistencia de endpoints, seguridad, mantenibilidad y control de regresiones.",
            "Creé integraciones que conectan flujos de clientes con Make y Zapier.",
          ],
          url: shared.experienceLinks.minhaVisita,
        },
        {
          company: "Scopi",
          role: "Ingeniero de Software Full-stack",
          period: "Ene 2022 — Nov 2024",
          location: "Taquara, Brasil · Híbrido",
          summary:
            "Entregué funciones web, móviles y backend para una plataforma de planificación estratégica y ejecución operativa.",
          highlights: [
            "Implementé más de la mitad de una nueva API pública con cientos de endpoints.",
            "Refactoricé una gran base AngularJS usando ESLint y Airbnb Style Guide.",
            "Lideré funcionalidades desde el descubrimiento de requisitos y la investigación técnica hasta su implementación en una plataforma crítica de planificación.",
            "Entregué funciones completas con Rails, Node.js, Firebase, MongoDB y React Native.",
          ],
          url: shared.experienceLinks.scopi,
        },
      ],
    },
    about: {
      index: "03",
      title: "Ingeniería con responsabilidad",
      body: [
        "Trabajo en arquitectura backend, APIs para clientes, sistemas frontend, aplicaciones móviles, tests y pipelines de entrega.",
        "Mi mejor trabajo ocurre en productos donde la precisión importa. Encuentro la causa raíz, hago explícito el trade-off y dejo el código más fácil de cambiar.",
      ],
      stackLabel: "Herramientas principales",
      stack: [
        "TypeScript",
        "Node.js",
        "NestJS",
        "Go",
        "Ruby on Rails",
        "Vue",
        "PostgreSQL",
        "GraphQL",
        "Docker",
        "AWS",
      ],
      educationLabel: "Formación",
      education:
        "Sistemas para Internet, Unisinos · Finalización en 2026 · Promedio superior al 90%",
    },
    contact: {
      index: "04",
      title: "Construyamos software que perdure.",
      body: "Busco posiciones full-stack y backend con estándares sólidos de ingeniería y problemas de producto relevantes.",
      email: "Iniciar conversación",
      whatsapp: "Escribir por WhatsApp",
      socialLabel: "Encontrame online",
    },
    footer: "Diseño y desarrollo por Cristhion Rosa.",
  },
};
