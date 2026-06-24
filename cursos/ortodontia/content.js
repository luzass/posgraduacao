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
    eyebrow: "CFO e MEC com 4 certificações complementares",
    title: "Especialização em Ortodontia",
    description:
      "Uma pós-graduação desenvolvida para cirurgiões-dentistas que querem unir formação completa, prática clínica contínua e protocolos exclusivos para atuar com mais segurança e retorno profissional.",
    quickPoints: [
      "Curso com 4 capacitações e certificações adicionais ao longo da formação.",
      "Preparação clínica progressiva com consultorias individuais após os primeiros meses.",
      "Conteúdo do básico ao avançado com foco em biomecânica, alinhadores, ancoragem e ortopedia."
    ],
    stats: [
      {
        value: "32 meses",
        label: "Formação extensa para consolidar técnica, experiência clínica e visão de longo prazo"
      },
      {
        value: "Mensal",
        label: "Aulas de quinta a sábado para encaixar melhor na rotina profissional"
      },
      {
        value: "13/08/2026",
        label: "Início previsto da turma 1 no campus Asa Sul"
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
      alt: "Especialização em ortodontia"
    },
    coordinator: {
      src: "./assets/coordenadora.webp",
      alt: "Marcelo S. Gomes"
    },
    note: {
      title: "Formação clínica com protocolos próprios",
      description:
        "A proposta combina base teórica, prática laboratorial, atendimento clínico, consultoria individual e diferenciais técnicos desenvolvidos pela coordenação."
    }
  },
  value: {
    eyebrow: "Diferenciais do curso",
    title: "Uma especialização pensada para unir prática clínica, protocolos exclusivos e oportunidades reais de retorno profissional.",
    description:
      "Os diferenciais foram organizados para mostrar que o curso vai além da formação tradicional, acelerando a capacidade de atuação do aluno e ampliando seu repertório técnico e comercial.",
    items: [
      {
        title: "4 certificações complementares",
        description:
          "O curso inclui formações adicionais em odontologia digital e alinhadores estéticos, ortopedia mecanofuncional, toxina botulínica estética e funcional e odontologia do sono."
      },
      {
        title: "Preparação para atuar cedo na clínica",
        description:
          "Após os primeiros 4 meses, o aluno já recebe consultorias individuais para estruturar a atuação clínica e gerar retorno sobre o investimento."
      },
      {
        title: "Protocolos biomecânicos exclusivos",
        description:
          "A formação traz sistemas, braquetes e protocolos desenvolvidos pela equipe docente e pelo coordenador do curso."
      },
      {
        title: "Prática clínica durante todo o curso",
        description:
          "O atendimento a pacientes ao longo da especialização fortalece segurança, experiência e aplicação imediata do conhecimento."
      },
      {
        title: "Ancoragem esquelética e hands-on",
        description:
          "O aluno treina mini-implantes ortodônticos e sua aplicação no sistema biomecânico, conectando teoria e execução clínica."
      },
      {
        title: "Formação com foco em eficiência e resultado",
        description:
          "A proposta valoriza protocolos preventivos, interceptativos e estratégias clínicas que combinam simplicidade, eficiência e resultados."
      }
    ],
    impact: {
      title: "Mais do que um título, uma formação para atuar com segurança, diferencial técnico e visão de crescimento.",
      description: ""
    }
  },
  program: {
    eyebrow: "Conteúdo programático",
    title: "Conteúdo do curso",
    description: "",
    modules: [
      {
        title: "Biomecânica, Braquetes e Protocolos Clínicos",
        topics: [
          "Protocolos biomecânicos com aparelhos convencionais",
          "Protocolos biomecânicos com aparelhos autoligados",
          "Uso de braquetes desenvolvidos pelo coordenador do curso",
          "Protocolos próprios desenvolvidos pela equipe docente",
          "Aplicação clínica imediata com metodologia ativa"
        ]
      },
      {
        title: "Ortodontia Digital e Alinhadores Estéticos",
        topics: [
          "Odontologia digital",
          "Planejamento com alinhadores estéticos",
          "Integração entre recursos digitais e prática clínica",
          "Aplicação em tratamentos contemporâneos"
        ]
      },
      {
        title: "Ancoragem Esquelética e Mini-implantes",
        topics: [
          "Hands-on de mini-implantes ortodônticos",
          "Protocolos de ancoragem esquelética",
          "Uso clínico no sistema biomecânico",
          "Segurança e previsibilidade na prática"
        ]
      },
      {
        title: "Ortopedia e Abordagens Funcionais",
        topics: [
          "Ortodontia preventiva e interceptativa",
          "Ortopedia mecanofuncional dos maxilares",
          "Protocolo S.E.R. de simplicidade, eficiência e resultados",
          "Odontologia do sono"
        ]
      },
      {
        title: "Áreas Complementares e Clínica Integrada",
        topics: [
          "Toxina botulínica estética e funcional",
          "Ortodontia e HOF",
          "Consultorias clínicas individuais",
          "Atendimento a pacientes durante todo o curso",
          "Discussão de casos e aplicação clínica imediata"
        ]
      }
    ]
  },
  timeline: {
    eyebrow: "Formato da pós",
    title: "Uma especialização planejada para aprofundar técnica, prática e organização profissional sem perder consistência.",
    description:
      "O curso combina longa duração, encontros mensais e vivência clínica contínua para acelerar desenvolvimento técnico e segurança de atuação.",
    items: [
      {
        label: "Duração",
        title: "32 meses de formação",
        description:
          "Tempo estruturado para consolidar teoria, prática clínica e diferenciais técnicos em ortodontia."
      },
      {
        label: "Cronograma",
        title: "Aulas mensais de quinta a sábado",
        description:
          "Formato pensado para aprofundamento técnico sem comprometer totalmente a rotina de consultório."
      },
      {
        label: "Ingresso",
        title: "Início em 13 de agosto de 2026",
        description:
          "Turma 1 com abertura prevista no campus UNIEURO Asa Sul, às 8h30, com receptivo e apresentação do curso."
      }
    ]
  },
  audience: {
    eyebrow: "Público-alvo",
    title: "Para quem esta formação faz mais sentido",
    description:
      "A especialização foi desenhada para cirurgiões-dentistas que querem entrar ou crescer na ortodontia com protocolos sólidos, prática clínica e visão de mercado.",
    items: [
      {
        title: "Cirurgiões-dentistas com registro no CRO-DF",
        items: [
          "Desejam iniciar ou aprofundar atuação em ortodontia com formação reconhecida",
          "Buscam prática clínica contínua e contato com pacientes ao longo do curso",
          "Querem dominar biomecânica, alinhadores, ancoragem e ortopedia"
        ]
      },
      {
        title: "Profissionais que querem retorno e diferenciação",
        items: [
          "Buscam ampliar repertório técnico e comercial dentro do consultório",
          "Querem acelerar capacidade de atendimento com consultorias individuais",
          "Precisam de formação que una segurança clínica, inovação e competitividade"
        ]
      }
    ]
  },
  faculty: {
    eyebrow: "Corpo docente",
    title: "Docentes experientes, protocolos próprios e convidados de áreas conexas.",
    description:
      "O curso reúne professores com forte trajetória acadêmica e clínica, além de uma equipe ampliada para sustentar uma formação aplicada e multidisciplinar.",
    items: [
      {
        title: "Professores especialistas, mestres e doutores",
        description:
          "Corpo docente com experiência em ortodontia, ortopedia facial e áreas complementares da prática clínica."
      },
      {
        title: "Equipe ampliada e convidados experientes",
        description:
          "A formação conta com nomes da equipe fixa e convidados com vivência relevante em áreas conexas."
      },
      {
        title: "Base científica com aplicação real",
        description:
          "Os docentes conectam teoria, biomecânica, protocolos e rotina clínica para fortalecer a tomada de decisão do aluno."
      }
    ]
  },
  coordinator: {
    eyebrow: "Coordenação",
    title: "Coordenação do curso",
    name: "Marcelo S. Gomes",
    highlight:
      "Coordenação com forte trajetória em ortodontia, ortopedia facial, harmonização orofacial e desenvolvimento de biomateriais e protocolos próprios.",
    description: "",
    credentials: [
      "Pós-doutor em Odontologia",
      "Doutor e mestre em Ortodontia e Ortopedia Facial",
      "Especialista em Ortodontia e Ortopedia Facial",
      "Especialista em Harmonização Orofacial",
      "Coordenador e docente de cursos de pós-graduação há 25 anos em Brasília e Minas Gerais",
      "Desenvolvedor de biomateriais e patentes na área",
      "Idealizador do sistema de braquetes Opty Sistem - MSG",
      "Idealizador do aparelho Sound Sleep em Odontologia do Sono",
      "Revisor das revistas Ortoscience e Simetria",
      "Consultor e mentor há 15 anos nas áreas de Ortodontia e Ortopedia Funcional dos Maxilares"
    ]
  },
  lead: {
    title: "O próximo passo para atuar com mais técnica, segurança e retorno em Ortodontia começa aqui.",
    description: "",
    points: [
      "Entenda valores, cronograma e condições da turma com início em 13/08/2026.",
      "Saiba mais sobre as 4 certificações complementares incluídas na formação.",
      "Receba atendimento rápido por WhatsApp."
    ],
    buttonLabel: "Quero me inscrever",
    note:
      "Fale com a equipe para receber orientação sobre inscrição, investimento e início das aulas."
  },
  mobileCta: {
    title: "Quer saber valores e próxima turma?",
    description: "Receba atendimento rápido por WhatsApp.",
    buttonLabel: "Quero me inscrever"
  },
  footer: {
    left: "Pós-graduação Unieuro | Especialização em Ortodontia",
    right: "Base pronta para receber imagens oficiais e link final de atendimento"
  }
};

renderCoursePage(course);
