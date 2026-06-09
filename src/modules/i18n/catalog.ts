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
            "Built a secure, controlled gateway that lets Make and Zapier communicate with the backend without requiring a separate API.",
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
        "Engenheiro full-stack que desenvolve produtos web, mobile e APIs confiáveis.",
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
        "Desenvolvo produtos essenciais para o negócio, sem abrir mão de confiabilidade, segurança e uma arquitetura bem estruturada.",
      cta: "Ver projetos",
      secondaryCta: "Baixar currículo",
      photoAlt: "Retrato de Cristhion Rosa",
      location: "Brasil · Trabalho remoto para qualquer lugar",
    },
    metrics: [
      {
        value: "85%",
        label: "de redução na latência média de queries GraphQL",
      },
      { value: "59%", label: "de redução no tempo de CI" },
      { value: "4+ anos", label: "entregando software em produção" },
    ],
    work: {
      index: "01",
      title: "Projetos selecionados",
      intro:
        "Produtos desenvolvidos para desafios reais: integridade dos dados, desempenho e facilidade de manutenção.",
      projects: [
        {
          name: "DB Data Migrator",
          eyebrow: "Ferramenta desktop de engenharia",
          description:
            "Aplicativo para migrar dados entre bancos, com introspecção de schema, mapeamento inteligente, validação e monitoramento em tempo real.",
          technologies: ["Go 1.26", "Vue 3", "Wails", "MySQL", "PostgreSQL"],
          linkLabel: "Ver repositório",
          url: shared.projectLinks.migrator,
        },
        {
          name: "Ozio Piscinas",
          eyebrow: "Plataforma web comercial",
          description:
            "Site completo para uma empresa de piscinas, do desenvolvimento à otimização de performance e deploy.",
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
        "Trabalhar em startups me ensinou a assumir a responsabilidade pelo problema, questionar premissas e entregar a solução.",
      items: [
        {
          company: "Minha Visita",
          role: "Engenheiro de Software Full-stack",
          period: "Nov 2024 — Atual",
          location: "Novo Hamburgo, Brasil · Híbrido",
          summary:
            "Desenvolvo APIs voltadas aos clientes e aprimoro a arquitetura backend de uma plataforma de gestão de equipes externas.",
          highlights: [
            "Reduzi em cerca de 85% a latência média das queries GraphQL com cache por requisição e batching via microtasks.",
            "Reduzi em cerca de 59% o tempo de CI ao criar uma suíte de testes E2E com Vitest e migrar os testes unitários do Jest.",
            "Liderei uma refatoração da arquitetura backend que melhorou a consistência dos endpoints, a segurança, a manutenção e o controle de regressões.",
            "Criei uma solução segura e controlada para o Make e o Zapier se comunicarem com o backend sem exigir uma API separada.",
          ],
          url: shared.experienceLinks.minhaVisita,
        },
        {
          company: "Scopi",
          role: "Engenheiro de Software Full-stack",
          period: "Jan 2022 — Nov 2024",
          location: "Taquara, Brasil · Híbrido",
          summary:
            "Entreguei funcionalidades web, mobile e backend em uma plataforma de planejamento estratégico e execução operacional.",
          highlights: [
            "Implementei mais da metade de uma nova API pública com centenas de endpoints.",
            "Refatorei uma grande base AngularJS usando ESLint e Airbnb Style Guide.",
            "Conduzi funcionalidades desde o levantamento de requisitos e a pesquisa técnica até a implementação em uma plataforma essencial de planejamento.",
            "Entreguei funcionalidades end-to-end com Rails, Node.js, Firebase, MongoDB e React Native.",
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
        "Faço meu melhor trabalho em produtos nos quais a precisão importa. Encontro a causa raiz, deixo o trade-off claro e preparo o código para evoluir.",
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
      body: "Tenho interesse em vagas full-stack e de backend com padrões sólidos de engenharia e desafios de produto relevantes.",
      email: "Iniciar conversa",
      whatsapp: "Conversar pelo WhatsApp",
      socialLabel: "Outros canais",
    },
    footer: "Design e desenvolvimento por Cristhion Rosa.",
  },
  "es-AR": {
    meta: {
      title: "Cristhion Rosa | Ingeniero de Software Full-stack",
      description:
        "Ingeniero full-stack que desarrolla productos web, mobile y APIs confiables.",
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
        "Desarrollo productos esenciales para el negocio sin resignar confiabilidad, seguridad ni una arquitectura sólida.",
      cta: "Ver proyectos",
      secondaryCta: "Descargar CV",
      photoAlt: "Retrato de Cristhion Rosa",
      location: "Brasil · Trabajo remoto para cualquier lugar",
    },
    metrics: [
      {
        value: "85%",
        label: "de reducción en la latencia promedio de queries GraphQL",
      },
      { value: "59%", label: "de reducción en el tiempo de CI" },
      { value: "4+ años", label: "entregando software en producción" },
    ],
    work: {
      index: "01",
      title: "Proyectos seleccionados",
      intro:
        "Productos desarrollados para desafíos reales: integridad de datos, rendimiento y facilidad de mantenimiento.",
      projects: [
        {
          name: "DB Data Migrator",
          eyebrow: "Herramienta de ingeniería de escritorio",
          description:
            "Aplicación para migrar datos entre bases, con introspección de schemas, mapeo inteligente, validación y monitoreo en tiempo real.",
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
        "Trabajar en startups me enseñó a hacerme cargo del problema, cuestionar supuestos y entregar la solución.",
      items: [
        {
          company: "Minha Visita",
          role: "Ingeniero de Software Full-stack",
          period: "Nov 2024 — Actualidad",
          location: "Novo Hamburgo, Brasil · Híbrido",
          summary:
            "Desarrollo APIs para clientes y mejoro la arquitectura backend de una plataforma de gestión de equipos de campo.",
          highlights: [
            "Reduje cerca de un 85% la latencia promedio de las queries GraphQL con caché por request y batching mediante microtasks.",
            "Reduje cerca de un 59% el tiempo de CI al crear una suite de tests E2E con Vitest y migrar los tests unitarios desde Jest.",
            "Lideré una refactorización de la arquitectura backend que mejoró la consistencia de los endpoints, la seguridad, el mantenimiento y el control de regresiones.",
            "Creé una solución segura y controlada para que Make y Zapier se comuniquen con el backend sin requerir una API separada.",
          ],
          url: shared.experienceLinks.minhaVisita,
        },
        {
          company: "Scopi",
          role: "Ingeniero de Software Full-stack",
          period: "Ene 2022 — Nov 2024",
          location: "Taquara, Brasil · Híbrido",
          summary:
            "Entregué funcionalidades web, mobile y backend para una plataforma de planificación estratégica y ejecución operativa.",
          highlights: [
            "Implementé más de la mitad de una nueva API pública con cientos de endpoints.",
            "Refactoricé una gran base AngularJS usando ESLint y Airbnb Style Guide.",
            "Me ocupé de funcionalidades desde el relevamiento de requisitos y la investigación técnica hasta su implementación en una plataforma esencial de planificación.",
            "Entregué funcionalidades de punta a punta con Rails, Node.js, Firebase, MongoDB y React Native.",
          ],
          url: shared.experienceLinks.scopi,
        },
      ],
    },
    about: {
      index: "03",
      title: "Ingeniería con responsabilidad",
      body: [
        "Trabajo en arquitectura backend, APIs para clientes, sistemas frontend, aplicaciones mobile, tests y pipelines de entrega.",
        "Hago mi mejor trabajo en productos donde la precisión importa. Encuentro la causa raíz, dejo claro el trade-off y preparo el código para evolucionar.",
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
      body: "Busco puestos full-stack y de backend con estándares sólidos de ingeniería y desafíos de producto relevantes.",
      email: "Hablemos",
      whatsapp: "Escribime por WhatsApp",
      socialLabel: "Otros canales",
    },
    footer: "Diseño y desarrollo por Cristhion Rosa.",
  },
};
