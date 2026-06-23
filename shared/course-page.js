function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function applyTheme(theme = {}) {
  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    if (value) {
      root.style.setProperty(`--${key}`, value);
    }
  });
}

function renderList(items, className = "list") {
  return `
    <ul class="${className}">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderStats(items) {
  return items
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
        </article>
      `
    )
    .join("");
}

function renderImageBlock(image, fallbackTitle, fallbackText, options = {}) {
  const {
    loading = "lazy",
    decoding = "async",
    fetchpriority,
    width,
    height
  } = options;

  if (image?.src) {
    const fetchPriorityAttr = fetchpriority ? ` fetchpriority="${escapeHtml(fetchpriority)}"` : "";
    const widthAttr = image.width || width ? ` width="${escapeHtml(image.width || width)}"` : "";
    const heightAttr = image.height || height ? ` height="${escapeHtml(image.height || height)}"` : "";
    return `<img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || fallbackTitle)}" loading="${escapeHtml(loading)}" decoding="${escapeHtml(decoding)}"${widthAttr}${heightAttr}${fetchPriorityAttr} />`;
  }

  return `
    <div class="image-placeholder">
      <div>
        <strong>${escapeHtml(fallbackTitle)}</strong>
        <span>${escapeHtml(fallbackText)}</span>
      </div>
    </div>
  `;
}

function getInitials(name) {
  return String(name || "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function renderCoordinatorAvatar(image, name) {
  if (image?.src) {
    const widthAttr = image.width ? ` width="${escapeHtml(image.width)}"` : ` width="400"`;
    const heightAttr = image.height ? ` height="${escapeHtml(image.height)}"` : ` height="400"`;
    return `<img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || name)}" loading="lazy" decoding="async"${widthAttr}${heightAttr} />`;
  }

  return `<span class="coordinator-avatar-placeholder">${escapeHtml(getInitials(name) || "PF")}</span>`;
}

function renderLogo(logo) {
  if (!logo?.src) {
    return "";
  }

  const widthAttr = logo.width ? ` width="${escapeHtml(logo.width)}"` : ` width="474"`;
  const heightAttr = logo.height ? ` height="${escapeHtml(logo.height)}"` : ` height="100"`;

  return `
    <div class="hero-logo-wrap">
      <img class="hero-logo" src="${escapeHtml(logo.src)}" alt="${escapeHtml(logo.alt || "Logo Unieuro")}"${widthAttr}${heightAttr} />
    </div>
  `;
}

function renderFeatureCards(items) {
  return items
    .map(
      (item, index) => `
        <article class="feature-card">
          <span class="feature-badge">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderTimeline(items) {
  return items
    .map(
      (item) => `
        <article class="timeline-card">
          <span class="timeline-label">${escapeHtml(item.label)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderInfoBlocks(items) {
  return items
    .map(
      (item) => `
        <article class="info-card">
          <h3>${escapeHtml(item.title)}</h3>
          ${item.items ? renderList(item.items, "list") : `<p>${escapeHtml(item.description)}</p>`}
        </article>
      `
    )
    .join("");
}

function renderModules(items) {
  return items
    .map(
      (item, index) => `
        <article class="module-card${index === 0 ? " is-open" : ""}" data-module-card>
          <button
            class="module-button"
            type="button"
            aria-expanded="${index === 0 ? "true" : "false"}"
            aria-controls="module-panel-${index}"
          >
            <span class="module-badge">${String(index + 1).padStart(2, "0")}</span>
            <span class="module-title">${escapeHtml(item.title)}</span>
          </button>
          <div class="module-content" id="module-panel-${index}"${index === 0 ? "" : " hidden"}>
            ${renderList(item.topics, "module-list")}
          </div>
        </article>
      `
    )
    .join("");
}

function initModules() {
  const cards = Array.from(document.querySelectorAll("[data-module-card]"));

  if (!cards.length) {
    return;
  }

  const openCard = (targetCard) => {
    cards.forEach((card) => {
      const button = card.querySelector(".module-button");
      const content = card.querySelector(".module-content");
      const isCurrent = card === targetCard;

      card.classList.toggle("is-open", isCurrent);
      button?.setAttribute("aria-expanded", String(isCurrent));

      if (content) {
        content.hidden = !isCurrent;
      }
    });
  };

  cards.forEach((card) => {
    const button = card.querySelector(".module-button");

    button?.addEventListener("click", () => {
      openCard(card);
    });
  });
}

function initStickyCta() {
  const sticky = document.querySelector(".mobile-sticky-cta");
  const trigger = document.querySelector("#diferenciais");

  if (!sticky || !trigger) {
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      sticky.classList.toggle("is-visible", !entry.isIntersecting);
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0
    }
  );

  observer.observe(trigger);
}

export function renderCoursePage(course) {
  applyTheme(course.theme);
  document.title = `${course.hero.title} | Pós-graduação`;

  const app = document.querySelector("[data-course-app]");

  app.innerHTML = `
    <div class="page-shell">
      <header class="hero">
        <div class="hero-inner">
          <div class="hero-panel">
            <div class="hero-copy">
              <div class="hero-topline">
                ${renderLogo(course.media.logo)}
                <span class="hero-brand">| Pós-graduação</span>
              </div>
              <h1>${escapeHtml(course.hero.title)}</h1>
              <p class="hero-lead">${escapeHtml(course.hero.description)}</p>
              ${renderList(course.hero.quickPoints, "hero-points")}

              <div class="hero-actions">
                <a class="button button-primary" href="${escapeHtml(course.cta.primary.href)}">
                  ${escapeHtml(course.cta.primary.label)}
                </a>
                <a class="button button-secondary" href="${escapeHtml(course.cta.secondary.href)}">
                  ${escapeHtml(course.cta.secondary.label)}
                </a>
              </div>
            </div>

            <aside class="hero-media">
              <figure class="hero-image">
                ${renderImageBlock(
                  course.media.hero,
                  "Espaço para imagem principal",
                  "Aqui vamos encaixar uma foto forte de simulação realística, laboratório ou atendimento supervisionado.",
                  {
                    loading: "eager",
                    decoding: "async",
                    fetchpriority: "high",
                    width: 1600,
                    height: 1067
                  }
                )}
              </figure>
            </aside>
          </div>

          <div class="hero-bottom">
            <div class="hero-meta">
              ${renderStats(course.hero.stats)}
            </div>
            <div class="hero-note">
              <strong>${escapeHtml(course.media.note.title)}</strong>
              <p>${escapeHtml(course.media.note.description)}</p>
            </div>
          </div>
        </div>
      </header>

      <section class="section section-soft" id="diferenciais">
        <div class="section-inner">
          <div class="section-header">
            <span class="eyebrow">${escapeHtml(course.value.eyebrow)}</span>
            <h2>${escapeHtml(course.value.title)}</h2>
            <p>${escapeHtml(course.value.description)}</p>
          </div>

          <div class="feature-grid">
            ${renderFeatureCards(course.value.items)}
          </div>

          <div class="impact-strip">
            <strong>${escapeHtml(course.value.impact.title)}</strong>
            <p>${escapeHtml(course.value.impact.description)}</p>
          </div>
        </div>
      </section>

      <section class="section section-program" id="conteudo">
        <div class="section-inner">
          <div class="section-header section-header-light">
            <span class="eyebrow">${escapeHtml(course.program.eyebrow)}</span>
            <h2>${escapeHtml(course.program.title)}</h2>
            <p>${escapeHtml(course.program.description)}</p>
          </div>

          <div class="module-grid">
            ${renderModules(course.program.modules)}
          </div>
        </div>
      </section>

      <section class="section section-blue-soft" id="formato">
        <div class="section-inner">
          <div class="section-header">
            <span class="eyebrow">${escapeHtml(course.timeline.eyebrow)}</span>
            <h2>${escapeHtml(course.timeline.title)}</h2>
            <p>${escapeHtml(course.timeline.description)}</p>
          </div>

          <div class="timeline-grid">
            ${renderTimeline(course.timeline.items)}
          </div>
        </div>
      </section>

      <section class="section section-gradient" id="publico">
        <div class="section-inner">
          <div class="section-header">
            <span class="eyebrow">${escapeHtml(course.audience.eyebrow)}</span>
            <h2>${escapeHtml(course.audience.title)}</h2>
            <p>${escapeHtml(course.audience.description)}</p>
          </div>

          <div class="info-grid">
            ${renderInfoBlocks(course.audience.items)}
          </div>
        </div>
      </section>

      <section class="section section-blue-strong" id="docentes">
        <div class="section-inner">
          <div class="section-header section-header-light">
            <span class="eyebrow">${escapeHtml(course.faculty.eyebrow)}</span>
            <h2>${escapeHtml(course.faculty.title)}</h2>
            <p>${escapeHtml(course.faculty.description)}</p>
          </div>

          <div class="info-grid info-grid-3">
            ${renderInfoBlocks(course.faculty.items)}
          </div>
        </div>
      </section>

      <section class="section section-gradient" id="coordenacao">
        <div class="section-inner">
          <div class="coordinator-layout">
            <div class="coordinator-visual">
              <span class="coordinator-orb coordinator-orb-gold" aria-hidden="true"></span>
              <span class="coordinator-orb coordinator-orb-blue" aria-hidden="true"></span>
              <figure class="coordinator-photo">
                ${renderImageBlock(course.media.coordinator, "Espaço para foto da coordenadora", "Aqui podemos inserir a foto oficial da coordenadora com um corte mais institucional.", {
                  width: 400,
                  height: 400
                })}
              </figure>
            </div>

            <div class="coordinator-stack">
              <div class="section-header coordinator-header">
                <span class="eyebrow">${escapeHtml(course.coordinator.eyebrow)}</span>
                <h2>${escapeHtml(course.coordinator.title)}</h2>
                <p>${escapeHtml(course.coordinator.description)}</p>
              </div>

              <article class="coordinator-card">
                <div class="coordinator-profile">
                  <div class="coordinator-avatar">
                    ${renderCoordinatorAvatar(course.media.coordinator, course.coordinator.name)}
                  </div>
                  <div class="coordinator-profile-copy">
                    <h3>${escapeHtml(course.coordinator.name)}</h3>
                    <p class="coordinator-highlight">${escapeHtml(course.coordinator.highlight)}</p>
                  </div>
                </div>
                ${renderList(course.coordinator.credentials, "list")}
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-cta" id="lead-form">
        <div class="section-inner lead-layout">
          <div class="lead-copy">
            <span class="eyebrow">Próxima turma</span>
            <h2>${escapeHtml(course.lead.title)}</h2>
            <p>${escapeHtml(course.lead.description)}</p>
            ${renderList(course.lead.points, "hero-points")}
          </div>

          <article class="lead-card lead-card-simple">
            <strong class="lead-card-title">${escapeHtml(course.mobileCta.title)}</strong>
            <p>${escapeHtml(course.lead.note)}</p>
            <form class="lead-form" hidden>
              <div class="field">
                <label for="nome">Nome</label>
                <input id="nome" name="nome" type="text" placeholder="Seu nome completo" />
              </div>
              <div class="field">
                <label for="telefone">Telefone</label>
                <input id="telefone" name="telefone" type="tel" placeholder="Seu WhatsApp" />
              </div>
              <div class="field">
                <label for="email">E-mail</label>
                <input id="email" name="email" type="email" placeholder="Seu melhor e-mail" />
              </div>
              <div class="field">
                <label for="area">Área de atuação</label>
                <input id="area" name="area" type="text" placeholder="Ex.: pronto atendimento, UTI, clínica" />
              </div>
              <div class="field field-full">
                <label for="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" placeholder="Conte o que você busca nessa pós-graduação"></textarea>
              </div>
              <div class="field field-full">
                <a class="button button-primary" href="${escapeHtml(course.cta.primary.href)}">
                  ${escapeHtml(course.lead.buttonLabel)}
                </a>
              </div>
            </form>
            <a class="button button-primary" href="${escapeHtml(course.cta.primary.href)}">
              ${escapeHtml(course.lead.buttonLabel)}
            </a>
          </article>
        </div>
      </section>

      <div class="mobile-sticky-cta">
        <div class="mobile-sticky-cta-copy">
          <strong>${escapeHtml(course.mobileCta.title)}</strong>
          <span>${escapeHtml(course.mobileCta.description)}</span>
        </div>
        <a class="button button-primary" href="${escapeHtml(course.cta.primary.href)}">
          ${escapeHtml(course.mobileCta.buttonLabel)}
        </a>
      </div>
    </div>
  `;

  initModules();
  initStickyCta();
}
