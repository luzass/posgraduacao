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
    eyebrow: "CFO e MEC com 2 certificações complementares",
    title: "Especialização em Harmonização Orofacial",
    description:
      "Uma pós-graduação desenvolvida para cirurgiões-dentistas que querem formação progressiva do básico ao avançado, segurança clínica e posicionamento forte no mercado de harmonização orofacial.",
    quickPoints: [
      "Curso em conformidade com CFO e reconhecimento MEC.",
      "Duas capacitações e certificações adicionais ao longo da formação.",
      "Ensino teórico, laboratorial e clínico com foco em novas tendências e atuação segura."
    ],
    stats: [
      {
        value: "20 meses",
        label: "Formação extensa para consolidar técnica, raciocínio clínico e segurança na prática"
      },
      {
        value: "Mensal",
        label: "Aulas de quinta a sábado para favorecer organização da rotina profissional"
      },
      {
        value: "03/09/2026",
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
      alt: "Especialização em harmonização orofacial"
    },
    coordinator: {
      src: "./assets/coordenadora.webp",
      alt: "Marcelo S. Gomes"
    },
    note: {
      title: "Formação clínica com visão de mercado",
      description:
        "A proposta combina base científica, prática clínica supervisionada, tecnologias atuais, encantamento institucional e preparação para atuação competitiva."
    }
  },
  value: {
    eyebrow: "Diferenciais do curso",
    title: "Uma especialização pensada para unir formação clínica completa, certificações extras e preparo real para o mercado.",
    description: "",
    items: [
      {
        title: "Formação do básico ao avançado",
        description:
          "O aluno percorre uma trilha progressiva que começa nos fundamentos essenciais e avança até técnicas clínicas mais atuais da harmonização orofacial."
      },
      {
        title: "Metodologia altamente prática",
        description:
          "A ampla carga horária clínica e o contato com pacientes reais desenvolvem confiança, precisão técnica e raciocínio clínico."
      },
      {
        title: "Reconhecimento CFO e MEC",
        description:
          "O curso foi estruturado em conformidade com as resoluções do Conselho Federal de Odontologia e com chancela acadêmica valorizada pelo mercado."
      },
      {
        title: "Duas certificações complementares",
        description:
          "O aluno também recebe capacitação em agregados plaquetários com habilitação em venopunção e capacitação em laserterapia."
      },
      {
        title: "Docentes de renome nacional e internacional",
        description:
          "O corpo docente reúne especialistas, mestres e doutores com vivência clínica e participação relevante em módulos específicos da área."
      },
      {
        title: "Acompanhamento próximo e excelência clínica",
        description:
          "Turmas reduzidas, feedback individualizado e foco em resultados naturais e harmônicos elevam o padrão da formação."
      }
    ],
    impact: {
      title: "Mais do que um título, uma preparação para atuar com segurança, credibilidade e diferencial competitivo.",
      description: ""
    }
  },
  program: {
    eyebrow: "Conteúdo programático",
    title: "Conteúdo do curso",
    description: "",
    modules: [
      {
        title: "Fundamentos, Diagnóstico e Planejamento",
        topics: [
          "Anatomia e histofisiologia da cabeça e pescoço",
          "Anatomia e histofisiologia da pele",
          "Farmacologia, terapêutica e técnicas anestésicas",
          "Diagnóstico e planejamento",
          "Visagismo e análise facial",
          "Fotografia em harmonização facial e orofacial"
        ]
      },
      {
        title: "Capacitações Complementares e Recursos Avançados",
        topics: [
          "Agregados leuco-plaquetários com certificação extra MEC",
          "Laserterapia na harmonização orofacial com certificação extra MEC",
          "Ozonioterapia",
          "Odontologia ortomolecular e saúde integrativa",
          "Sedação em odontologia"
        ]
      },
      {
        title: "Indução de Colágeno, Bioestimulação e Tecnologias",
        topics: [
          "Terapias de indução de colágeno e preparo de pele físico",
          "Terapias de indução de colágeno e preparo de pele térmico",
          "Terapias de indução de colágeno e preparo de pele químico",
          "Bioestimuladores de colágeno injetáveis",
          "Fios faciais"
        ]
      },
      {
        title: "Injetáveis, Cosmiatria e Clínica Integrada",
        topics: [
          "Preenchedores orofaciais",
          "Toxina botulínica",
          "Cosmiatria e cosmetologia",
          "Clínica integrada em harmonização orofacial",
          "HOF cirúrgica e lipoescultura facial"
        ]
      },
      {
        title: "Segurança, Intercorrências e Emergências",
        topics: [
          "Intercorrências em HOF",
          "Emergências médicas",
          "Bioética",
          "Ética e legislação odontológica",
          "Metodologia científica"
        ]
      }
    ]
  },
  timeline: {
    eyebrow: "Formato da pós",
    title: "Uma especialização planejada para aprofundar técnica e prática com calendário compatível com a rotina do dentista.",
    description:
      "O curso combina longa duração, encontros mensais e estrutura clínica para entregar formação consistente e progressiva em harmonização orofacial.",
    items: [
      {
        label: "Duração",
        title: "20 meses de formação",
        description:
          "Tempo adequado para consolidar conteúdo, treinar técnica e amadurecer a atuação clínica em HOF."
      },
      {
        label: "Cronograma",
        title: "Aulas mensais de quinta a sábado",
        description:
          "Modelo que favorece a organização da agenda profissional sem abrir mão da profundidade da formação."
      },
      {
        label: "Ingresso",
        title: "Início em 03 de setembro de 2026",
        description:
          "Turma 1 com abertura prevista no campus UNIEURO Asa Sul, às 8h30, com receptivo e apresentação do curso."
      }
    ]
  },
  audience: {
    eyebrow: "Público-alvo",
    title: "Para quem esta formação faz mais sentido",
    description:
      "A especialização foi desenhada para profissionais da odontologia que querem atuar com segurança, atualização técnica e posicionamento forte em HOF.",
    items: [
      {
        title: "Cirurgiões-dentistas com registro no CRO-DF",
        items: [
          "Desejam iniciar atuação em harmonização orofacial com base técnica sólida",
          "Buscam formação reconhecida e alinhada às exigências do CFO",
          "Querem ampliar repertório clínico em injetáveis, tecnologias e terapêuticas faciais"
        ]
      },
      {
        title: "Profissionais que querem crescer e se diferenciar",
        items: [
          "Buscam aperfeiçoar habilidades clínicas e atualizar técnicas",
          "Querem fortalecer credibilidade, segurança e competitividade no mercado",
          "Precisam de uma formação que una ciência, prática e visão de carreira"
        ]
      }
    ]
  },
  faculty: {
    eyebrow: "Corpo docente",
    title: "Docentes experientes e conectados às tendências mais atuais da harmonização orofacial.",
    description:
      "O curso reúne coordenação consolidada, equipe premium e convidados com grande experiência em áreas conexas para fortalecer a formação clínica do aluno.",
    items: [
      {
        title: "Especialistas, mestres e doutores",
        description:
          "Professores com sólida base científica e vivência prática que conectam teoria, clínica e tendências do mercado."
      },
      {
        title: "Equipe HOF Premium DF e convidados",
        description:
          "Participação de profissionais experientes em módulos específicos e áreas complementares da formação."
      },
      {
        title: "Vivência clínica e reconhecimento de mercado",
        description:
          "O corpo docente leva para a sala de aula a realidade do consultório, da clínica e da atuação especializada em HOF."
      }
    ]
  },
  coordinator: {
    eyebrow: "Coordenação",
    title: "Coordenação do curso",
    name: "Marcelo S. Gomes",
    highlight:
      "Coordenação com trajetória sólida em odontologia, pós-graduação e harmonização orofacial, unindo experiência acadêmica e prática clínica.",
    description: "",
    credentials: [
      "Pós-doutor em Odontologia",
      "Doutor e mestre em Ortodontia e Ortopedia Facial",
      "Especialista em Ortodontia e Ortopedia Facial",
      "Especialista em Harmonização Orofacial",
      "Coordenador e docente de cursos de pós-graduação há 25 anos em Brasília e Minas Gerais",
      "Revisor da revista HOF Simetria"
    ]
  },
  lead: {
    title: "O próximo passo para atuar com mais técnica, segurança e reconhecimento em HOF começa aqui.",
    description: "",
    points: [
      "Entenda valores, calendário e condições da turma com início em 03/09/2026.",
      "Saiba mais sobre as duas certificações complementares incluídas na formação.",
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
    left: "Pós-graduação Unieuro | Especialização em Harmonização Orofacial",
    right: "Base pronta para receber imagens oficiais e link final de atendimento"
  }
};

renderCoursePage(course);
