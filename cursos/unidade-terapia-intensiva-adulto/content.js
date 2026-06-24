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
    eyebrow: "Paciente crítico, prática intensiva e segurança assistencial",
    title: "Unidade de Terapia Intensiva Adulto",
    description:
      "Uma pós-graduação pensada para enfermeiros que querem aprofundar o cuidado ao paciente crítico, dominar tecnologias da UTI e atuar com mais segurança clínica.",
    quickPoints: [
      "Aulas presenciais quinzenais para conciliar formação, trabalho e vida pessoal.",
      "Simulação realística e laboratório moderno com tecnologia de ponta.",
      "Conteúdo voltado à tomada de decisão e à prática de alta complexidade."
    ],
    stats: [
      {
        value: "15 meses",
        label: "Tempo de formação para consolidar base clínica, prática e segurança em UTI adulto"
      },
      {
        value: "Quinzenal",
        label: "Encontros presenciais desenhados para caber na rotina profissional"
      },
      {
        value: "Agosto/2026",
        label: "Início previsto ou imediato após a formação da turma"
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
      alt: "Formação em terapia intensiva para cuidado ao paciente crítico"
    },
    coordinator: {
      src: "./assets/coordenadora.webp",
      alt: "Patrícia Silva de Figueiredo"
    },
    note: {
      title: "Estrutura para aprender fazendo",
      description:
        "A formação destaca prática presencial, simuladores de alta fidelidade e infraestrutura preparada para reproduzir situações reais da UTI adulto."
    }
  },
  value: {
    eyebrow: "Diferenciais do curso",
    title: "Uma especialização construída para unir base clínica, prática real e segurança no cuidado intensivo.",
    description:
      "Os diferenciais foram organizados para destacar flexibilidade, infraestrutura e desenvolvimento técnico de quem quer atuar com mais consistência na UTI adulto.",
    items: [
      {
        title: "Aulas presenciais quinzenais",
        description:
          "Formato que favorece a continuidade dos estudos sem comprometer plantões, trabalho e rotina pessoal."
      },
      {
        title: "Infraestrutura de alto nível",
        description:
          "Laboratório moderno, tecnologia de ponta e ambiente preparado para treino técnico em cenários de alta complexidade."
      },
      {
        title: "Simulação realística do início ao fim",
        description:
          "Aprendizado centrado na prática para desenvolver raciocínio clínico, segurança e tomada de decisão no cuidado ao paciente crítico."
      },
      {
        title: "Tecnologias e dispositivos da terapia intensiva",
        description:
          "Abordagem de dispositivos invasivos como PAI jugular, PICC, PVC, Swan-Ganz, CVC e Port-a-Cath, além de curativos e rotinas assistenciais."
      },
      {
        title: "Base clínica aplicada ao paciente crítico",
        description:
          "Conteúdo estruturado para leitura de sistemas cardiovascular, respiratório, neurológico e renal com foco em aplicação prática."
      },
      {
        title: "Formação mais prática que modelos concorrentes",
        description:
          "A proposta valoriza presença, simulação e frequência quinzenal, em contraste com ofertas mais espaçadas e com menor ênfase prática."
      }
    ],
    impact: {
      title: "Mais do que uma titulação, uma preparação sólida para atuar em ambientes críticos.",
      description: ""
    }
  },
  program: {
    eyebrow: "Conteúdo programático",
    title: "Conteúdo do curso",
    description: "",
    modules: [
      {
        title: "Fundamentos Éticos, Legais e Humanização do Cuidado",
        topics: [
          "Direito do paciente e bioética",
          "Cuidados paliativos",
          "Morte encefálica e manutenção do potencial doador de órgãos"
        ]
      },
      {
        title: "Bases Clínicas do Paciente Crítico",
        topics: [
          "Doenças do sistema cardiovascular",
          "Doenças do sistema respiratório",
          "Doenças do sistema neurológico",
          "Nefrologia e hemodiálise"
        ]
      },
      {
        title: "Urgência, Emergência e Trauma",
        topics: [
          "Paciente crítico vítima de traumas",
          "Leitura de prioridades assistenciais em situações agudas",
          "Condutas iniciais em cenários de instabilidade clínica"
        ]
      },
      {
        title: "Procedimentos e Tecnologias em Terapia Intensiva",
        topics: [
          "PAI jugular",
          "PICC",
          "PVC",
          "Swan-Ganz",
          "CVC e Port-a-Cath",
          "Curativos"
        ]
      },
      {
        title: "Farmacologia e Terapêutica Intensiva",
        topics: [
          "Farmacologia intensiva",
          "Cálculo de medicamentos",
          "Segurança no preparo e administração em contextos críticos"
        ]
      },
      {
        title: "Segurança do Paciente e Controle de Infecção",
        topics: [
          "Prevenção de infecção hospitalar",
          "Segurança do paciente em terapia intensiva",
          "Boas práticas assistenciais em UTI adulto"
        ]
      },
      {
        title: "Gestão e Organização do Trabalho em UTI",
        topics: [
          "Gestão e dimensionamento de enfermagem",
          "Organização da assistência em terapia intensiva",
          "Tomada de decisão com foco em qualidade e continuidade do cuidado"
        ]
      }
    ]
  },
  timeline: {
    eyebrow: "Formato da pós",
    title: "Uma especialização feita para aprofundar a prática sem travar a rotina do enfermeiro.",
    description:
      "O curso combina duração adequada, calendário quinzenal e início próximo para acelerar a entrada ou a evolução na terapia intensiva adulto.",
    items: [
      {
        label: "Duração",
        title: "15 meses de formação",
        description:
          "Período pensado para amadurecer o raciocínio clínico, consolidar fundamentos e ampliar segurança assistencial."
      },
      {
        label: "Cronograma",
        title: "Aulas presenciais quinzenais",
        description:
          "Modelo que favorece a conciliação entre especialização, trabalho hospitalar e rotina pessoal."
      },
      {
        label: "Ingresso",
        title: "Início imediato após turma ou em agosto de 2026",
        description:
          "Opção alinhada para quem quer se organizar e começar a especialização sem adiar o próximo passo."
      }
    ]
  },
  audience: {
    eyebrow: "Público-alvo",
    title: "Para quem esta formação foi pensada",
    description:
      "O curso é direcionado a enfermeiros que querem desenvolver competência técnica, leitura clínica e segurança para atuar na UTI adulto.",
    items: [
      {
        title: "Enfermeiros que desejam ingressar na terapia intensiva",
        items: [
          "Buscam formação prática para entrar em um ambiente de alta complexidade",
          "Querem fortalecer base clínica voltada ao paciente crítico",
          "Precisam ganhar segurança em tecnologias e protocolos assistenciais"
        ]
      },
      {
        title: "Enfermeiros que já atuam no ambiente hospitalar",
        items: [
          "Desejam aprofundar condutas em situações críticas e traumáticas",
          "Querem atualizar conhecimentos em farmacologia, segurança e infecção",
          "Buscam diferenciação profissional com mais prática presencial e simulação"
        ]
      }
    ]
  },
  faculty: {
    eyebrow: "Corpo docente",
    title: "Docentes com experiência em assistência e formação em enfermagem.",
    description:
      "O curso reúne professores com trajetória acadêmica e vivência prática, conectando teoria, conduta clínica e realidade da assistência.",
    items: [
      {
        title: "Especialistas, mestres e doutores",
        description:
          "Corpo docente formado por profissionais com sólida qualificação acadêmica e visão atualizada da área."
      },
      {
        title: "Experiência em docência e assistência",
        description:
          "Professores com atuação tanto na formação de profissionais quanto na prática de enfermagem."
      },
      {
        title: "Foco em competências aplicadas",
        description:
          "A condução das aulas prioriza desenvolvimento técnico, segurança assistencial e tomada de decisão em cenários críticos."
      }
    ]
  },
  coordinator: {
    eyebrow: "Coordenação",
    title: "Coordenação do curso",
    name: "Patrícia Silva de Figueiredo",
    highlight:
      "Experiência assistencial, formação sólida e atuação voltada ao desenvolvimento de competências em enfermagem para contextos clínicos de maior complexidade.",
    description: "",
    credentials: [
      "Enfermeira graduada pela EERP-USP em Bacharelado e Licenciatura em Enfermagem",
      "Mestranda pela Faculdade de Saúde da Universidade de Brasília (FS/UnB)",
      "Especialista em Centro Cirúrgico, CME e SRPA",
      "Sólida experiência assistencial com atuação voltada à prática clínica",
      "Experiência na formação de profissionais e no desenvolvimento de competências em enfermagem"
    ]
  },
  lead: {
    title: "O próximo passo para atuar com mais segurança na UTI adulto pode começar agora.",
    description: "",
    points: [
      "Tire dúvidas sobre valores, condições e próxima abertura de turma.",
      "Confirme documentação necessária para matrícula, como RG, CPF e comprovante de residência.",
      "Receba atendimento rápido por WhatsApp."
    ],
    buttonLabel: "Quero me inscrever",
    note:
      "Fale com a equipe para receber orientação sobre inscrição, valores do curso e início das aulas."
  },
  mobileCta: {
    title: "Quer saber valores e próxima turma?",
    description: "Receba atendimento rápido por WhatsApp.",
    buttonLabel: "Quero me inscrever"
  },
  footer: {
    left: "Pós-graduação Unieuro | Unidade de Terapia Intensiva Adulto",
    right: "Base pronta para receber imagens oficiais e link final de atendimento"
  }
};

renderCoursePage(course);
