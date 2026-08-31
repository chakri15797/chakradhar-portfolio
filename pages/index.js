import { useEffect, useState } from "react";

const ROLES = [
  "Data Engineer",
  "Data Scientist",
  "Software Developer",
  "Forward Deployed ML Engineer",
];

const VIEWS = [
  {
    tag: "Front View",
    title: "Data Engineer",
    body: "Design and operate the pipelines that move and reshape data — ingestion, orchestration, and OLAP modeling at production scale.",
    skills: ["Airflow", "Spark", "Kafka", "BigQuery / Redshift"],
  },
  {
    tag: "Side View",
    title: "Data Scientist",
    body: "Turn raw signals into models — feature pipelines, classical ML, and evaluation grounded in production data.",
    skills: ["Scikit-learn", "Pandas", "SVM / Naive Bayes", "Prompt Engineering"],
  },
  {
    tag: "Plan View",
    title: "Software Developer",
    body: "Ship full-stack systems — APIs, services, and interfaces that turn platform capability into something people can use.",
    skills: ["FastAPI / Django", "REST / Microservices", "JS / HTML / CSS", "Kubernetes"],
  },
  {
    tag: "Detail View",
    title: "Forward Deployed ML Engineer",
    body: "Sit inside the business and build the agent layer on top of the platform — tools, MCP servers, and multi-agent systems end users talk to directly.",
    skills: ["Google ADK", "Vertex AI", "MCP", "Multi-Agent Orchestration"],
  },
];

const PROJECTS = [
  {
    mono: "01",
    title: "Aurora — Conversational Data Platform",
    body: "A unified chat interface over BigQuery, PostgreSQL, and GitHub. A supervisor agent routes between Query, Reporting, and Data-Quality sub-agents powered by a custom MCP server.",
    tags: ["Next.js", "Google ADK", "Vertex AI", "MCP"],
    href: "#",
  },
  {
    mono: "02",
    title: "Pipeline Observatory",
    body: "A live observability dashboard for 20+ Airflow / Cloud Composer DAGs — SLA tracking, SLA break alerts, and manual-intervention reduction metrics.",
    tags: ["Airflow", "BigQuery", "D3", "FastAPI"],
    href: "#",
  },
  {
    mono: "03",
    title: "Vero — ML Drift Monitor",
    body: "An end-to-end model monitoring UI surfacing feature drift, retraining nudges, and failure prediction for production classifiers.",
    tags: ["Python", "Scikit-learn", "React", "Elasticsearch"],
    href: "#",
  },
  {
    mono: "04",
    title: "IP-XACT Studio",
    body: "Schema-driven code-generation dashboard for ASIC design metadata — XSD to Ruby class generation that cut development effort by ~99%.",
    tags: ["Ruby", "XSD", "CMake", "Kubernetes"],
    href: "#",
  },
  {
    mono: "05",
    title: "Copper — Pipeline Codegen",
    body: "A CLI plus web companion that bootstraps repeatable ETL patterns from reusable blueprints, standardizing observability and error handling.",
    tags: ["Python", "SQLAlchemy", "CLI", "FastAPI"],
    href: "#",
  },
  {
    mono: "06",
    title: "Resume Engine",
    body: "This portfolio itself — a hand-built design system and engineering-drawing theme shipped as a server-rendered Next.js app.",
    tags: ["Next.js", "React", "CSS custom props", "TypeScript"],
    href: "#",
  },
];

const STATS = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Prod. Pipelines Orchestrated" },
  { value: 99.5, suffix: "%", label: "Pipeline SLA Compliance" },
  { value: 500, suffix: "K+", label: "Downstream Users Served" },
];

const SKILL_ICON = (slug, label) => ({ name: label, img: slug });

const STACK = [
  {
    icon: "code",
    cat: "Languages",
    items: [
      SKILL_ICON("python", "Python"),
      SKILL_ICON("postgresql", "SQL"),
      SKILL_ICON("openjdk", "Java"),
      SKILL_ICON("c", "C"),
      SKILL_ICON("cplusplus", "C++"),
      SKILL_ICON("ruby", "Ruby"),
      SKILL_ICON("perl", "Perl"),
      SKILL_ICON("gnubash", "Bash"),
      SKILL_ICON(null, "TCL"),
    ],
  },
  {
    icon: "cloud",
    cat: "Cloud & DevOps",
    items: [
      SKILL_ICON("amazonwebservices", "AWS"),
      SKILL_ICON("googlecloud", "GCP"),
      SKILL_ICON("kubernetes", "Kubernetes"),
      SKILL_ICON("docker", "Docker"),
      SKILL_ICON("terraform", "Terraform"),
      SKILL_ICON("githubactions", "CI/CD"),
    ],
  },
  {
    icon: "database",
    cat: "Data Engineering",
    items: [
      SKILL_ICON("apacheairflow", "Airflow"),
      SKILL_ICON("apachespark", "Spark / PySpark"),
      SKILL_ICON("apachekafka", "Kafka"),
      SKILL_ICON("apachehadoop", "Hadoop"),
      SKILL_ICON("apachehive", "Hive"),
      SKILL_ICON(null, "Impala"),
      SKILL_ICON("googlebigquery", "BigQuery"),
      SKILL_ICON("amazonredshift", "Redshift"),
      SKILL_ICON("teradata", "Teradata"),
      SKILL_ICON("oracle", "Oracle"),
      SKILL_ICON("informatica", "Informatica"),
      SKILL_ICON(null, "Autosys"),
      SKILL_ICON(null, "HDFS"),
    ],
  },
  {
    icon: "bot",
    cat: "AI / Machine Learning",
    items: [
      SKILL_ICON("langchain", "LangChain"),
      SKILL_ICON(null, "LangGraph"),
      SKILL_ICON(null, "RAGFlow"),
      SKILL_ICON(null, "MCP"),
      SKILL_ICON(null, "Google ADK"),
      SKILL_ICON("pandas", "Pandas"),
      SKILL_ICON("scikitlearn", "Scikit-learn"),
      SKILL_ICON("tensorflow", "TensorFlow"),
      SKILL_ICON("pytorch", "PyTorch"),
      SKILL_ICON("huggingface", "Hugging Face"),
    ],
  },
  {
    icon: "server",
    cat: "Backend & Distributed",
    items: [
      SKILL_ICON("fastapi", "FastAPI"),
      SKILL_ICON("django", "Django"),
      SKILL_ICON(null, "REST APIs"),
      SKILL_ICON("celery", "Celery"),
      SKILL_ICON("redis", "Redis"),
      SKILL_ICON("postgresql", "PostgreSQL"),
      SKILL_ICON(null, "Microservices"),
      SKILL_ICON(null, "APIGEE"),
    ],
  },
  {
    icon: "tools",
    cat: "Platforms & Tools",
    items: [
      SKILL_ICON("git", "Git"),
      SKILL_ICON(null, "IBM Spectrum LSF"),
      SKILL_ICON("gradle", "Gradle"),
      SKILL_ICON("cmake", "CMake"),
      SKILL_ICON(null, "Ninja"),
    ],
  },
];

const EXPERIENCE = [
  {
    meta: "May 2025 — Present",
    role: "Senior Data Engineer",
    org: "EXL Service · Client: CVS Health",
    tags: ["Data Eng", "Forward Deployed ML", "Software Dev"],
    points: [
      "Architected and delivered an enterprise healthcare data platform end-to-end in under one year, ingesting 10+ source systems for 500K+ downstream business users.",
      "Built agentic AI data workflows on Google ADK and Vertex AI, cutting ad-hoc reporting turnaround from days to minutes.",
      "Designed multi-layer BigQuery data models (raw, curated, aggregated) powering leadership dashboards and self-serve analytics.",
      "Orchestrated 20+ production ETL workflows with Airflow and Cloud Composer, achieving 99.5%+ SLA compliance and cutting manual intervention by 80%.",
      "Deployed a custom MCP server layer exposing BigQuery, PostgreSQL, and GitHub as structured tools for autonomous AI agents.",
      "Architected a three-agent system (Query, Reporting, Data Quality) under a supervisor agent, plus a full-stack internal developer platform with a conversational chat interface.",
    ],
  },
  {
    meta: "Sep 2024 — May 2025",
    role: "Senior Data Engineer",
    org: "Infosys Limited · Client: Bank of America",
    tags: ["Data Eng"],
    points: [
      "Led migration from SSIS-based AutoETL to a modern open-source Python ETL framework (SQLAlchemy, Airflow, PySpark, Kubernetes).",
      "Designed reusable pipeline architecture processing multi-terabyte datasets across SQL Server, Hadoop/Hive, and HDFS.",
      "Consolidated data movement across 15+ source systems, cutting manual intervention by 60%.",
      "Built a Hadoop/Hive/Impala security analytics platform surfacing compliance risks for the Bank of America compliance team.",
      "Mentored junior engineers on ETL design patterns and pipeline observability standards.",
    ],
  },
  {
    meta: "Jun 2023 — Dec 2023",
    role: "Software Development Intern — DevOps Infrastructure",
    org: "Advanced Micro Devices (AMD) · Verification Methodology Team",
    tags: ["Software Dev"],
    points: [
      "Evaluated and implemented modern build orchestration tools (Gradle, Airflow) to streamline development workflows.",
      "Improved build performance by 18% by migrating build systems from GNU Make to CMake and Ninja.",
      "Developed reusable APIs supporting ASIC design and verification workflows.",
    ],
  },
  {
    meta: "Jul 2019 — Aug 2022",
    role: "Senior Silicon Design Engineer",
    org: "Advanced Micro Devices (AMD) · Verification Methodology Team",
    tags: ["Software Dev", "Data Science"],
    points: [
      "Led development of enterprise-grade ASIC design and verification platforms across global engineering teams; led integration and packaging of critical IP for the AMD MI250 and MI300 accelerator programs.",
      "Designed and deployed cloud-native regression infrastructure (Python, FastAPI, Kubernetes, Docker, Kafka, Redis, Celery, PostgreSQL) with fault-tolerant distributed builds across AWS EC2 and IBM Spectrum LSF.",
      "Built ML models (SVM, Naive Bayes) predicting verification failures with 83% accuracy and automated coverage-extraction tooling that cut verification effort by 99%.",
      "Built schema-driven code generation frameworks automating Ruby class generation from XSD definitions, cutting development effort by 99%.",
      "Improved packaging tool performance by 70% through architectural refactoring; designed DSLs, exporters, and importers for next-generation IP-XACT metadata systems.",
      "Partnered with EDA vendors to qualify and deploy critical engineering tools across AMD design organizations.",
    ],
  },
  {
    meta: "May 2018 — Jul 2019",
    role: "Software Engineer, R&D Machine Learning",
    org: "Capgemini · Group Industrialization and Automation",
    tags: ["Data Science", "Software Dev"],
    points: [
      "Developed AI-powered IT support automation on AWS, reducing SLA resolution time by 70% and operational cost by 60%.",
      "Built enterprise chatbots (Microsoft Bot Framework, Azure LUIS, QnA Maker) serving 5,000+ users.",
      "Implemented enterprise cognitive search with Sinequa across 100+ knowledge repositories.",
    ],
  },
];

const MARQUEE = [
  { name: "Python", img: "python" },
  { name: "SQL", img: "postgresql" },
  { name: "Spark", img: "apachespark" },
  { name: "Kafka", img: "apachekafka" },
  { name: "Airflow", img: "apacheairflow" },
  { name: "BigQuery", img: "googlebigquery" },
  { name: "GCP / Vertex AI", img: "googlecloud" },
  { name: "Kubernetes", img: "kubernetes" },
  { name: "Docker", img: "docker" },
  { name: "FastAPI", img: "fastapi" },
  { name: "React", img: "react" },
  { name: "Next.js", img: "nextdotjs" },
  { name: "Terraform", img: "terraform" },
  { name: "MCP", img: "langchain" },
  { name: "LangChain", img: "langchain" },
  { name: "Redshift", img: "amazonredshift" },
  { name: "AWS", img: "amazonwebservices" },
];

const NAV = [
  ["#views", "Views"],
  ["#summary", "Summary"],
  ["#stack", "Stack"],
  ["#projects", "Projects"],
  ["#experience", "Experience"],
  ["#credentials", "Credentials"],
  ["#contact", "Contact"],
];

const GLYPHS = {
  code: (
    <path d="M8 5L3 10l5 5M16 5l5 5-5 5M13 3l-2 18" />
  ),
  cloud: (
    <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 8.1 4 4 0 0 0 7 18z" />
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </>
  ),
  bot: (
    <>
      <rect x="5" y="8" width="14" height="10" rx="2" />
      <circle cx="9.5" cy="13" r="1.1" />
      <circle cx="14.5" cy="13" r="1.1" />
      <path d="M12 8V5M9 5h6" />
    </>
  ),
  server: (
    <>
      <rect x="4" y="4" width="16" height="6" rx="1" />
      <rect x="4" y="14" width="16" height="6" rx="1" />
      <circle cx="8" cy="7" r="0.9" />
      <circle cx="8" cy="17" r="0.9" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
    </>
  ),
};

function Icon({ name, size = 40 }) {
  return (
    <span className="icon-stack" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {GLYPHS[name] || GLYPHS.code}
      </svg>
    </span>
  );
}

export default function Index({ hasPhoto = false }) {
  const [showPhoto, setShowPhoto] = useState(hasPhoto);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* scroll reveal */
    const revealEls = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window && !reduce) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("in-view"));
    }

    /* typewriter */
    const roleEl = document.getElementById("roleCycle");
    const timers = [];
    if (roleEl && !reduce) {
      let ri = 0, ci = 0, deleting = false;
      const type = 55, del = 30, hold = 1600;
      let t;
      const tick = () => {
        const word = ROLES[ri];
        if (!deleting) {
          ci++;
          roleEl.textContent = word.slice(0, ci);
          if (ci === word.length) { deleting = true; t = setTimeout(tick, hold); return; }
          t = setTimeout(tick, type);
        } else {
          ci--;
          roleEl.textContent = word.slice(0, ci);
          if (ci === 0) { deleting = false; ri = (ri + 1) % ROLES.length; t = setTimeout(tick, 400); return; }
          t = setTimeout(tick, del);
        }
      };
      t = setTimeout(tick, type);
      timers.push(() => clearTimeout(t));
    } else if (roleEl) {
      roleEl.textContent = ROLES[0];
    }

    /* counters */
    const counterEls = document.querySelectorAll("[data-count]");
    const runCount = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const isDec = target % 1 !== 0;
      const fmt = (v) => (isDec ? v.toFixed(1) : Math.round(v)) + suffix;
      if (reduce) { el.textContent = fmt(target); return; }
      const dur = 1300;
      let start = null;
      const step = (ts) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const v = target * (1 - Math.pow(1 - p, 3));
        el.textContent = fmt(v);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmt(target);
      };
      requestAnimationFrame(step);
    };
    const inViewport = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    if ("IntersectionObserver" in window) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); }
          });
        },
        { threshold: 0.2 }
      );
      counterEls.forEach((el) => {
        if (inViewport(el)) runCount(el);
        else cio.observe(el);
      });
    } else {
      counterEls.forEach(runCount);
    }

    /* smooth scroll for anchor links (ignore reduced motion) */
    let anchors = [];
    if (!reduce) {
      const anchorHandler = (e) => {
        const href = e.currentTarget.getAttribute("href");
        if (href && href.startsWith("#")) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      };
      anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
      anchors.forEach((a) => a.addEventListener("click", anchorHandler));
      if (anchors.length) {
        timers.push(() => {
          anchors.forEach((a) => a.removeEventListener("click", anchorHandler));
        });
      }
    }

    return () => timers.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const nearBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 420;
      setShowTop(nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const toggleMenu = () => {
    document.getElementById("pageNav").classList.toggle("open");
  };

  return (
    <main id="main">
      {/* NAV */}
      <header className="nav">
        <span className="mark">CHAKRADHAR // MULTI-DISCIPLINE</span>
        <button className="burger" onClick={toggleMenu} aria-controls="pageNav" aria-label="Toggle menu">
          MENU
        </button>
        <nav id="pageNav">
          {NAV.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="hero shell" id="top">
        <div data-reveal>
          <p className="eyebrow">Sheet 01 — Overview</p>
          <h1 className="name">
            Chakradhar<br />
            <span className="dyn" id="roleCycle">Data Engineer</span>
            <span className="caret" aria-hidden="true">_</span>
          </h1>
          <p className="role-line">
            <span className="exp-count" data-count="7" data-suffix="+">7</span> years building large-scale data pipelines, ML systems, and agentic AI platforms
            across healthcare, banking, and semiconductor domains — on GCP and AWS.
          </p>
          <div className="hero-tags">
            {["Data Engineering", "Data Science / ML", "Software Development", "Forward Deployed ML"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <div className="hero-cta">
            <a className="btn primary" href="#projects">See My Work</a>
            <a className="btn ghost" href="#contact">Get In Touch</a>
          </div>
        </div>

        <div data-reveal="right">
          <div className="id-card">
            <div className="id-photo">
              {showPhoto && (
                <img
                  src="/photo.jpg"
                  alt="Chakradhar"
                  onError={() => setShowPhoto(false)}
                />
              )}
              {!showPhoto && (
                <div className="placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                  <span>ADD photo.jpg</span>
                </div>
              )}
            </div>
            <div className="titleblock">
              <div className="row"><span>DRAWING</span><b>CAREER-01</b></div>
              <div className="row"><span>DISCIPLINE</span><b>Multi (4)</b></div>
              <div className="row"><span>SCALE</span><b><span data-count="7" data-suffix="+ Years">7+ Years</span></b></div>
              <div className="row"><span>CERT</span><b>AWS Dev · AWS ML Spec</b></div>
              <div className="row"><span>REV</span><b>2026</b></div>
            </div>
          </div>

          {/* pipeline diagram */}
          <svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Data pipeline diagram" style={{ width: "100%", height: "auto", marginTop: 18 }}>
            <path d="M50,40 H160" stroke="#7fd4e8" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
            <path d="M50,90 H160" stroke="#7fd4e8" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
            <path d="M50,140 H160" stroke="#7fd4e8" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
            <path d="M195,40 C240,40 240,90 280,90" stroke="#7fd4e8" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
            <path d="M195,90 H280" stroke="#7fd4e8" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
            <path d="M195,140 C240,140 240,90 280,90" stroke="#7fd4e8" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
            <path d="M315,90 H400" stroke="#ffb454" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
            <path d="M50,40 H400" className="flow" stroke="#ffb454" strokeWidth="1.4" fill="none" strokeDasharray="2 10" opacity="0.7" />
            <path d="M50,90 H400" className="flow" style={{ animationDelay: "-1s" }} stroke="#ffb454" strokeWidth="1.4" fill="none" strokeDasharray="2 10" opacity="0.5" />
            <path d="M50,140 H400" className="flow" style={{ animationDelay: "-2s" }} stroke="#ffb454" strokeWidth="1.4" fill="none" strokeDasharray="2 10" opacity="0.35" />
            <rect x="10" y="28" width="40" height="24" rx="2" fill="#123353" stroke="#7fd4e8" strokeOpacity="0.5" />
            <rect x="10" y="78" width="40" height="24" rx="2" fill="#123353" stroke="#7fd4e8" strokeOpacity="0.5" />
            <rect x="10" y="128" width="40" height="24" rx="2" fill="#123353" stroke="#7fd4e8" strokeOpacity="0.5" />
            <text x="30" y="43" textAnchor="middle" fill="#9fbdd4" fontFamily="IBM Plex Mono, monospace" fontSize="10">SQL</text>
            <text x="30" y="93" textAnchor="middle" fill="#9fbdd4" fontFamily="IBM Plex Mono, monospace" fontSize="10">API</text>
            <text x="30" y="143" textAnchor="middle" fill="#9fbdd4" fontFamily="IBM Plex Mono, monospace" fontSize="10">EVT</text>
            <rect x="160" y="70" width="60" height="40" rx="2" className="pulse" fill="#123353" stroke="#ffb454" strokeOpacity="0.7" />
            <text x="190" y="94" textAnchor="middle" fill="#ffb454" fontFamily="IBM Plex Mono, monospace" fontSize="10">ETL</text>
            <rect x="280" y="70" width="60" height="40" rx="2" fill="#123353" stroke="#7fd4e8" strokeOpacity="0.6" />
            <text x="310" y="94" textAnchor="middle" fill="#9fbdd4" fontFamily="IBM Plex Mono, monospace" fontSize="10">OLAP</text>
            <circle cx="400" cy="90" r="14" className="pulse" style={{ animationDelay: "1.1s" }} fill="#071a27" stroke="#ffb454" strokeWidth="1.6" />
            <text x="400" y="94" textAnchor="middle" fill="#ffb454" fontFamily="IBM Plex Mono, monospace" fontSize="10">BI</text>
          </svg>
        </div>
      </section>

      {/* VIEWS (disciplines) */}
      <section id="views">
        <div className="inner">
          <p className="eyebrow" data-reveal>Sheet 01B — Projections</p>
          <h2 className="head" data-reveal>Orthographic Views</h2>
          <h3 className="subhead" data-reveal>Four views of the same build</h3>
          <div className="grid-2" data-reveal="scale">
            {VIEWS.map((v, i) => (
              <article key={v.tag} className="card" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="view-tag">{v.tag}</div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
                <div className="view-skills">{v.skills.map((s) => <span key={s}>{s}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY + STATS */}
      <section id="summary">
        <div className="inner">
          <p className="eyebrow" data-reveal>Sheet 02 — Summary</p>
          <h2 className="head" data-reveal>Profile</h2>
          <h3 className="subhead" data-reveal>What I build</h3>
          <p style={{ fontSize: 17, color: "var(--c-paper-dim)", maxWidth: "74ch" }} data-reveal>
            I design and operate <strong style={{ color: "var(--c-paper)", fontWeight: 600 }}>large-scale data pipelines</strong>, ETL/ELT platforms, and <strong style={{ color: "var(--c-paper)", fontWeight: 600 }}>agentic AI data systems</strong> for organizations like CVS Health, Bank of America, and AMD. My work spans cloud-native architecture on GCP and AWS — from raw ingestion through curated OLAP models to natural-language, agent-driven analytics that put answers in front of business users in minutes instead of days.
          </p>
          <div className="stat-strip" data-reveal="scale">
            {STATS.map((s) => (
              <div key={s.label} className="stat">
                <div className="num" data-count={s.value} data-suffix={s.suffix}>{s.value}{s.suffix}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack">
        <div className="inner">
          <p className="eyebrow" data-reveal>Sheet 03 — Technical Stack</p>
          <h2 className="head" data-reveal>Toolbox</h2>
          <h3 className="subhead" data-reveal>Systems &amp; languages</h3>
          <div className="grid-2" data-reveal="scale">
            {STACK.map((cat, i) => (
              <article key={cat.cat} className="card stack-card" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="stack-head">
                  <Icon name={cat.icon} size={22} />
                  <div className="cat">{cat.cat}</div>
                </div>
                <ul className="skill-list">
                  {cat.items.map((it) => (
                    <li key={it.name} className="skill-item">
                      <span className="skill-ic">
                        {it.img
                          ? <img src={`/icons/${it.img}.svg`} alt="" width="16" height="16" loading="lazy" />
                          : <Icon name={cat.icon} size={16} />}
                      </span>
                      <span className="skill-name">{it.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className="mq-item">
              <img className="mq-ic" src={`/icons/${t.img}.svg`} alt="" width="22" height="22" loading="lazy" />
              <b>{t.name}</b>
            </span>
          ))}
        </div>
      </div>

      {/* PROJECTS (new) */}
      <section id="projects">
        <div className="inner">
          <p className="eyebrow" data-reveal>Sheet 03B — Selected Work</p>
          <h2 className="head" data-reveal>Portfolio</h2>
          <h3 className="subhead" data-reveal>Projects that run in production</h3>
          <div className="grid-2" data-reveal="scale">
            {PROJECTS.map((p, i) => (
              <article key={p.title} className="project-card" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column", transitionDelay: `${i * 70}ms` }}>
                  <div className="p-thumb"><b>{p.mono}</b><span>PROJECT</span></div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                  <div className="p-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  <div className="p-links">
                    <a href={p.href} aria-label={`${p.title} live demo`} onClick={(e) => e.preventDefault()} tabIndex={-1}>Live ▸</a>
                    <a href={p.href} aria-label={`${p.title} source`} onClick={(e) => e.preventDefault()} tabIndex={-1}>Source</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="inner">
          <p className="eyebrow" data-reveal>Sheet 04 — Career Pipeline</p>
          <h2 className="head" data-reveal>Experience</h2>
          <h3 className="subhead" data-reveal>Stages, in reverse-chronological order</h3>
          <div className="xp-metrics" data-reveal>
            {[
              { n: 7, s: "+", l: "Years in data & AI" },
              { n: 3, s: "", l: "Industry verticals" },
              { n: 5, s: "", l: "Cloud / tool platforms" },
              { n: 2, s: "", l: "Cloud providers (GCP, AWS)" },
            ].map((m) => (
              <div className="xp-metric" key={m.l}>
                <div className="xp-num"><span data-count={m.n} data-suffix={m.s}>{m.n}{m.s}</span></div>
                <div className="xp-label">{m.l}</div>
              </div>
            ))}
          </div>
          <div className="timeline">
            {EXPERIENCE.map((job) => (
              <article key={job.role + job.org} className="tl-item" data-reveal="left">
                <div className="tl-meta">{job.meta}</div>
                <div className="tl-role">{job.role}</div>
                <div className="tl-org">{job.org}</div>
                <div className="tl-tags">{job.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <ul>{job.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials">
        <div className="inner">
          <p className="eyebrow" data-reveal>Sheet 05 — Credentials</p>
          <h2 className="head" data-reveal>Foundation</h2>
          <h3 className="subhead" data-reveal>Education, certifications &amp; recognition</h3>
          <div className="grid-3" data-reveal="scale">
            <article className="card">
              <div className="cat">Education</div>
              <div className="edu-item">
                <div className="deg">M.S. Computer Science</div>
                <div className="sch">The University of Texas at Dallas</div>
                <div className="yr">May 2024</div>
              </div>
              <div className="edu-item">
                <div className="deg">B.S. Computer Science</div>
                <div className="sch">JNTU Kakinada, India</div>
                <div className="yr">May 2018</div>
              </div>
            </article>
            <article className="card">
              <div className="cat">Certifications</div>
              <ul className="plain">
                <li>AWS Certified Developer – Associate</li>
                <li>AWS Certified Machine Learning – Specialty</li>
                <li>Neo4j Certified Professional</li>
              </ul>
            </article>
            <article className="card">
              <div className="cat">Awards</div>
              <ul className="plain">
                <li>AMD T&amp;E Excellence Award (2021) — resolved a critical infrastructure issue preventing large-scale IBM Spectrum LSF cluster outages.</li>
                <li>AMD Spotlight Awards (Q1 2020, Q3 2020, Q2 2021) — recognized for exceeding expectations on IP integration deliverables.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact">
        <div className="inner">
          <p className="eyebrow" style={{ justifyContent: "center" }} data-reveal>Sheet 06 — Contact</p>
          <h2 className="head" data-reveal>Get in touch</h2>
          <h3 className="subhead" data-reveal>Let&apos;s build the next pipeline</h3>
          <p className="blurb" data-reveal>
            Open to senior data engineering and agentic AI platform roles. Reach out directly or connect on LinkedIn.
          </p>
          <div className="contact-row" data-reveal="scale">
            <a className="btn primary" href="mailto:cnadikota97@gmail.com">cnadikota97@gmail.com</a>
            <a className="btn ghost" href="https://linkedin.com/in/chakradhar-n-0a768430" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn ghost" href="https://github.com/chakri15797" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <p className="fine">DRAWING CAREER-01 · REV 2026 · CHAKRADHAR · DATA ENG · DATA SCI · SW DEV · FORWARD DEPLOYED ML</p>
        </div>
      </footer>

      <button
        className={`to-top${showTop ? " visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        ↑ Back to Top
      </button>
    </main>
  );
}

export async function getStaticProps() {
  const fs = await import("fs");
  const path = await import("path");
  const photoPath = path.join(process.cwd(), "public", "photo.jpg");
  return { props: { hasPhoto: fs.existsSync(photoPath) } };
}
