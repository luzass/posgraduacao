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
    eyebrow: "Feridas, estomias, prática clínica e visão de mercado",
    title: "Enfermagem Dermatológica com Ênfase no Tratamento de Feridas e Estomias",
    description:
      "Uma pós-graduação criada para enfermeiros que querem aprofundar o cuidado dermatológico, dominar terapias modernas e ampliar sua atuação clínica com mais segurança e autonomia.",
    quickPoints: [
      "Formação prática com foco em feridas, curativos, estomias e raciocínio clínico.",
      "Estágio supervisionado na clínica escola do Unieuro com atendimento à comunidade.",
      "Simulações realísticas, tecnologias modernas e visão empreendedora para o mercado."
    ],
    stats: [
      {
        value: "15 meses",
        label: "Tempo de formação para consolidar conhecimento técnico, prática assistencial e posicionamento profissional"
      },
      {
        value: "Quinzenal",
        label: "Formato pensado para conciliar estudos, rotina de trabalho e evolução profissional"
      },
      {
        value: "Agosto/2026",
        label: "Previsão de início para a próxima turma"
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
      alt: "Formação prática em feridas e estomias"
    },
    coordinator: {
      src: "./assets/coordenadora.webp",
      alt: "Patrícia Silva de Figueiredo"
    },
    note: {
      title: "Estrutura moderna e prática supervisionada",
      description:
        "A formação destaca simulações realísticas, tecnologia aplicada ao cuidado dermatológico e estágio supervisionado para fortalecer a atuação profissional."
    }
  },
  value: {
    eyebrow: "Diferenciais do curso",
    title: "Uma especialização pensada para unir técnica, prática supervisionada e expansão de carreira.",
    description:
      "Os diferenciais foram organizados para mostrar por que a pós atende tanto quem quer iniciar na área quanto quem deseja crescer com mais autonomia em feridas e estomias.",
    items: [
      {
        title: "Conteúdo atualizado e voltado para a prática",
        description:
          "A formação prioriza aplicação clínica real, raciocínio assistencial e decisões técnicas conectadas à rotina do enfermeiro."
      },
      {
        title: "Formação completa do técnico ao profissional",
        description:
          "O curso cobre fundamentos clínicos, assistência especializada, gestão e caminhos de atuação no mercado."
      },
      {
        title: "Ênfase em tecnologias modernas",
        description:
          "Abordagem de recursos contemporâneos no tratamento de feridas e no cuidado com estomias, alinhando atualização técnica e empregabilidade."
      },
      {
        title: "Estágio supervisionado na clínica escola",
        description:
          "Vivência prática com atendimento à comunidade para fortalecer segurança, experiência e aplicação do conhecimento."
      },
      {
        title: "Simulação realística em estrutura de alto nível",
        description:
          "Treinamentos em ambiente moderno para desenvolver raciocínio clínico, manejo da dor e cuidado humanizado."
      },
      {
        title: "Competências clínicas e empreendedoras",
        description:
          "Além da assistência, o aluno desenvolve visão de mercado, liderança e caminhos para estruturar sua própria prática profissional."
      }
    ],
    impact: {
      title: "Mais do que um título, uma formação para cuidar melhor e crescer com mais autonomia.",
      description:
        "A página posiciona o curso como uma escolha para quem busca preparo técnico, experiência prática, diferenciação profissional e oportunidades de atuação em um mercado especializado."
    }
  },
  program: {
    eyebrow: "Conteúdo programático",
    title: "Conteúdo do curso",
    description:
      "Os módulos foram organizados para desenvolver base clínica em pele e cicatrização, assistência em estomias, habilidades técnicas, visão humanizada e expansão profissional.",
    modules: [
      {
        title: "Fundamentos e Terapias em Enfermagem Dermatológica",
        topics: [
          "Anatomia e fisiologia da pele aplicada à prática clínica",
          "Processo de cicatrização e fatores que interferem na reparação tecidual",
          "Técnicas avançadas de curativos",
          "Desbridamento de feridas: indicações e métodos",
          "Tecnologias inovadoras no tratamento de feridas"
        ]
      },
      {
        title: "Cuidado Integral: Aspectos Psicossociais e Educacionais",
        topics: [
          "Assistência de enfermagem ao paciente com estomias",
          "Abordagem humanizada e impacto psicossocial",
          "Manejo da dor no cuidado com feridas e estomas",
          "Educação em saúde para pacientes e familiares"
        ]
      },
      {
        title: "Gestão e Empreendedorismo em Enfermagem",
        topics: [
          "Gestão e liderança na enfermagem dermatológica",
          "Organização de serviços especializados",
          "Empreendedorismo e oportunidades de atuação na área",
          "Como estruturar e expandir sua prática profissional"
        ]
      },
      {
        title: "Projeto Integrador e Prática Profissional",
        topics: [
          "Estágio supervisionado",
          "Desenvolvimento do raciocínio clínico",
          "Discussão e apresentação de casos clínicos",
          "Aplicação prática do cuidado em contextos reais"
        ]
      }
    ]
  },
  timeline: {
    eyebrow: "Formato da pós",
    title: "Uma especialização desenhada para aprofundar a prática sem travar a rotina profissional.",
    description:
      "O curso combina calendário quinzenal, duração adequada e prática supervisionada para desenvolver técnica, confiança e possibilidades de atuação.",
    items: [
      {
        label: "Duração",
        title: "15 meses de formação",
        description:
          "Tempo estruturado para consolidar conhecimentos, treinar condutas e amadurecer a atuação em feridas e estomias."
      },
      {
        label: "Cronograma",
        title: "Aulas quinzenais",
        description:
          "Formato que favorece a conciliação entre especialização, rotina de trabalho e desenvolvimento contínuo."
      },
      {
        label: "Ingresso",
        title: "Início em agosto de 2026",
        description:
          "Planejamento claro para quem quer se organizar e entrar em uma área com forte potencial de crescimento."
      }
    ]
  },
  audience: {
    eyebrow: "Público-alvo",
    title: "Para quem esta formação faz mais sentido",
    description:
      "A oferta foi organizada para deixar claro como essa pós atende enfermeiros que querem entrar, se atualizar ou empreender na área dermatológica.",
    items: [
      {
        title: "Enfermeiros que querem iniciar ou se especializar",
        items: [
          "Desejam atuar com feridas, curativos e estomias",
          "Buscam atualização técnica com forte componente prático",
          "Querem ampliar competências clínicas em uma área especializada"
        ]
      },
      {
        title: "Profissionais que buscam crescimento e autonomia",
        items: [
          "Querem diferenciação profissional e avanço na carreira",
          "Buscam empreender e estruturar seus próprios atendimentos",
          "Precisam unir segurança assistencial, visão estratégica e mercado"
        ]
      }
    ]
  },
  faculty: {
    eyebrow: "Corpo docente",
    title: "Docentes com vivência acadêmica, assistencial e visão de mercado.",
    description:
      "O curso reúne professores qualificados e profissionais atuantes que conectam ensino, prática clínica e caminhos reais de atuação na área.",
    items: [
      {
        title: "Especialistas, mestres e doutores",
        description:
          "Corpo docente com sólida experiência na docência e na assistência em enfermagem."
      },
      {
        title: "Aprendizado com quem atua no mercado",
        description:
          "O aluno também aprende com enfermeiros empreendedores que compartilham experiências práticas de atuação e gestão."
      },
      {
        title: "Foco em autonomia e segurança",
        description:
          "As aulas reforçam competências clínicas, tomada de decisão e organização profissional para atendimentos seguros."
      }
    ]
  },
  coordinator: {
    eyebrow: "Coordenação",
    title: "Coordenação do curso",
    name: "Patrícia Silva de Figueiredo",
    highlight:
      "Formação sólida, experiência assistencial e atuação voltada ao desenvolvimento de competências clínicas e profissionais em enfermagem.",
    description:
      "A coordenação reforça a credibilidade da especialização ao unir trajetória acadêmica, prática clínica e compromisso com a formação aplicada do enfermeiro.",
    credentials: [
      "Enfermeira graduada pela EERP-USP em Bacharelado e Licenciatura em Enfermagem",
      "Mestranda pela Faculdade de Saúde da Universidade de Brasília (FS/UnB)",
      "Especialista em Centro Cirúrgico, CME e SRPA",
      "Sólida experiência assistencial com atuação voltada à prática clínica",
      "Experiência na formação de profissionais e no desenvolvimento de competências em enfermagem"
    ]
  },
  lead: {
    title: "O próximo passo para atuar com mais segurança em feridas e estomias começa aqui.",
    description:
      "A página já está pronta para apresentar a proposta do curso, esclarecer dúvidas e levar o interessado para o atendimento comercial.",
    points: [
      "Entenda valores, cronograma e condições para ingresso na próxima turma.",
      "Confirme a documentação necessária para matrícula, como RG, CPF e comprovante de residência.",
      "Receba atendimento rápido para avaliar se essa especialização combina com seu momento profissional."
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
    left: "Pós-graduação Unieuro | Enfermagem Dermatológica com Ênfase no Tratamento de Feridas e Estomias",
    right: "Base pronta para receber imagens oficiais e link final de atendimento"
  }
};

renderCoursePage(course);
