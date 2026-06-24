import { renderCoursePage } from "../../shared/course-page.js";

const course = {
  theme: {
    bg: "#ffffff",
    surface: "#f4f7fb",
    "surface-strong": "#ffffff",
    "surface-dark": "#002b57",
    text: "#0f2238",
    muted: "#5b6878",
    primary: "#004181",
    "primary-dark": "#002b57",
    accent: "#ba9008",
    "accent-soft": "rgba(186, 144, 8, 0.16)",
    line: "rgba(0, 65, 129, 0.16)",
    danger: "#c11c1d"
  },
  hero: {
    eyebrow: "Prática intensiva e protocolos atuais",
    title: "Enfermagem em Urgência e Emergência",
    description:
      "Uma pós-graduação criada para enfermeiros que querem atuar com mais segurança clínica, domínio técnico e rapidez de decisão em cenários críticos.",
    quickPoints: [
      "Treinamento prático em laboratório moderno e simulação realística.",
      "Habilidades avançadas valorizadas no pronto atendimento.",
      "Formação pensada para diferenciar o profissional no mercado."
    ],
    sideList: [
      "Sutura em ambiente de urgência",
      "Punção arterial invasiva e montagem de sistema",
      "Punção intraóssea e punção de jugular",
      "Inserção de máscara laríngea",
      "Técnicas avançadas de punção venosa periférica"
    ],
    stats: [
      {
        value: "15 meses",
        label: "Formação completa para aprofundamento técnico e prático"
      },
      {
        value: "Quinzenal",
        label: "Cronograma desenhado para conciliar com plantões e rotina profissional"
      },
      {
        value: "Início imediato",
        label: "Turma com início após fechamento do grupo"
      }
    ]
  },
  cta: {
    primary: {
      label: "Quero falar com a equipe",
      href: "#lead-form"
    },
    secondary: {
      label: "Ver diferenciais do curso",
      href: "#diferenciais"
    }
  },
  media: {
    logo: {
      src: "./assets/logo_azul.webp",
      alt: "Logo Unieuro"
    },
    hero: {
      src: "./assets/hero.webp",
      alt: "Prática de enfermagem em urgência e emergência"
    },
    coordinator: {
      src: "./assets/coordenadora.webp",
      alt: "Patrícia Silva de Figueiredo"
    },
    note: {
      title: "Infraestrutura e prática aplicada",
      description:
        "Aulas realizadas em laboratórios modernos, com equipamentos de ponta e metodologia voltada à aplicação prática em urgência e emergência."
    }
  },
  strip: {
    title: "Formação para quem quer sair da teoria e ganhar consistência real na atuação em urgência e emergência.",
    description:
      "O posicionamento do curso foi organizado para destacar segurança, prática supervisionada, atualização e diferenciação profissional."
  },
  value: {
    eyebrow: "Diferenciais do curso",
    title: "Diferenciais que tornam a formação mais prática, atual e valorizada no mercado.",
    description: "",
    items: [
      {
        title: "Prática regulamentada e segura",
        description:
          "Todos os procedimentos ensinados seguem normativas do Conselho Federal de Enfermagem, reforçando segurança profissional e respaldo técnico."
      },
      {
        title: "Simulação realística de alta fidelidade",
        description:
          "Treinamento em cenários críticos para desenvolver raciocínio clínico, tomada de decisão rápida e atuação em equipe."
      },
      {
        title: "Classificação de risco",
        description:
          "Aula exclusiva voltada ao desenvolvimento das competências exigidas para triagem e tomada de decisão em ambiente hospitalar."
      },
      {
        title: "Formação completa para pronto atendimento",
        description:
          "Conteúdo estruturado para apoiar o profissional desde a recepção do caso até a estabilização do paciente crítico."
      },
      {
        title: "Integração real entre teoria e prática",
        description:
          "O aluno aprende o fundamento, treina a execução e amplia autonomia para agir com mais consistência na rotina assistencial."
      },
      {
        title: "Habilidades avançadas de alto valor de mercado",
        description:
          "Procedimentos e competências que ampliam a diferenciação profissional e aumentam a segurança em situações complexas."
      }
    ],
    impact: {
      title: "Mais do que um título, uma evolução de presença profissional.",
      description: ""
    }
  },
  program: {
    eyebrow: "Conteúdo programático",
    title: "Conteúdo do curso",
    description: "",
    modules: [
      {
        title: "Fundamentos em Urgência e Emergência",
        topics: [
          "Bioética e direito do paciente",
          "Conceitos fundamentais de urgência e emergência",
          "Organização dos serviços como UPA, SAMU e pronto-socorro",
          "Tomada de decisão clínica segura",
          "Introdução à enfermagem forense"
        ]
      },
      {
        title: "Urgência e Emergência Traumática",
        topics: [
          "Atendimento ao paciente politraumatizado",
          "Diretrizes nacionais e internacionais no trauma",
          "Abordagem de acidentes automobilísticos, quedas, queimaduras e desastres",
          "Manejo de situações críticas com foco em protocolos atualizados"
        ]
      },
      {
        title: "Urgência e Emergência Clínica",
        topics: [
          "Emergências clínicas de alta complexidade",
          "Protocolos atualizados de infarto agudo do miocárdio",
          "Protocolos atualizados de acidente vascular encefálico",
          "Intervenções rápidas e raciocínio clínico avançado",
          "Estabilização do paciente crítico"
        ]
      },
      {
        title: "Prática Avançada e Simulação Realística",
        topics: [
          "Simulação realística em emergência obstétrica",
          "Simulação realística em emergência pediátrica",
          "Simulação realística em emergência cirúrgica",
          "Treinamento em equipe e gestão de crises",
          "Desenvolvimento de habilidades técnicas e comportamentais"
        ]
      },
      {
        title: "Habilidades Avançadas em Urgência e Emergência",
        topics: [
          "Sutura em ambiente de urgência",
          "Punção arterial invasiva",
          "Inserção e manejo de PICC",
          "Inserção e manejo de Port-a-Cath",
          "Punção de jugular",
          "Punção intraóssea",
          "Acesso venoso avançado em situações críticas"
        ]
      },
      {
        title: "Qualidade, Segurança e Acreditação em Saúde",
        topics: [
          "Cultura de segurança do paciente",
          "Protocolos assistenciais e gestão de riscos",
          "Indicadores de qualidade em urgência e emergência",
          "Processos de acreditação hospitalar",
          "Melhoria contínua da assistência"
        ]
      }
    ]
  },
  timeline: {
    eyebrow: "Formato da pós",
    title: "Uma especialização planejada para aprofundar sem travar sua rotina profissional.",
    description: "",
    items: [
      {
        label: "Duração",
        title: "15 meses de formação",
        description:
          "Tempo adequado para consolidar conhecimento, praticar procedimentos e construir mais segurança de atuação."
      },
      {
        label: "Cronograma",
        title: "Aulas quinzenais",
        description:
          "Modelo que facilita a conciliação entre especialização, plantões e rotina profissional."
      },
      {
        label: "Ingresso",
        title: "Início imediato após formação da turma",
        description:
          "Ideal para quem quer começar a especialização sem adiar o próximo passo da carreira."
      }
    ]
  },
  audience: {
    eyebrow: "Público-alvo",
    title: "Para quem esta formação faz mais sentido",
    description: "",
    items: [
      {
        title: "Enfermeiros recém-formados",
        items: [
          "Querem construir segurança para atuar em cenários críticos",
          "Buscam especialização com forte componente prático",
          "Desejam acelerar a preparação para urgência e emergência"
        ]
      },
      {
        title: "Profissionais com experiência",
        items: [
          "Querem atualizar conhecimentos com base em protocolos atuais",
          "Precisam desenvolver habilidades práticas avançadas",
          "Buscam diferenciação competitiva no mercado de trabalho"
        ]
      }
    ]
  },
  faculty: {
    eyebrow: "Corpo docente",
    title: "Docentes com vivência acadêmica e prática assistencial.",
    description: "",
    items: [
      {
        title: "Especialistas, mestres e doutores",
        description:
          "Docentes com sólida experiência acadêmica e assistencial, preparados para conduzir uma formação atual e consistente."
      },
      {
        title: "Vivência real na prática clínica",
        description:
          "Os professores atuam diretamente nos serviços de saúde e levam para a sala de aula situações reais do cotidiano assistencial."
      },
      {
        title: "Participação de palestrantes renomados",
        description:
          "Convidados agregam atualização, visão de mercado e experiências que enriquecem a formação do aluno."
      }
    ]
  },
  coordinator: {
    eyebrow: "Coordenação",
    title: "Coordenação do curso",
    name: "Patrícia Silva de Figueiredo",
    highlight:
      "Formação sólida, experiência assistencial e atuação voltada à prática clínica, formação de profissionais e desenvolvimento de competências em enfermagem.",
    description: "",
    credentials: [
      "Enfermeira graduada pela EERP-USP em Bacharelado e Licenciatura em Enfermagem",
      "Mestranda pela Faculdade de Saúde da Universidade de Brasília",
      "Especialista em Centro Cirúrgico, CME e SRPA",
      "Experiência assistencial voltada à prática clínica e à formação de profissionais",
      "Atuação no desenvolvimento de competências em enfermagem"
    ]
  },
  lead: {
    title: "O próximo passo para atuar com mais segurança, técnica e reconhecimento começa aqui.",
    description: "",
    points: [
      "Entenda valores, condições de ingresso e início da próxima turma.",
      "Fale com a equipe para tirar dúvidas sobre perfil e aplicação do curso.",
      "Receba atendimento rápido por WhatsApp."
    ],
    buttonLabel: "Quero me inscrever",
    note:
      "Fale com a equipe para receber orientação sobre inscrição, valores e início da próxima turma."
  },
  mobileCta: {
    title: "Quer saber valores e próxima turma?",
    description: "Fale com a equipe e receba atendimento rápido.",
    buttonLabel: "Quero me inscrever"
  },
  footer: {
    left: "Pós-graduação Unieuro | Enfermagem em Urgência e Emergência",
    right: "Base pronta para receber fotos, logo oficial e link final de atendimento"
  }
};

renderCoursePage(course);
