import React, { useEffect, useState } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const App: React.FC = () => {
  const [lang, setLang] = useState<"en" | "es">("en");
  const isEs = lang === "es";

  useScrollReveal();

  return (
    <div className="page">
      <header>
        <div className="container nav">
          <div className="nav-left">
            <div className="logo-circle">
              <div className="logo-inner">LG</div>
            </div>
            <div className="nav-title">
              <span className="nav-name">Luciano Facundo Guardese</span>
              <span className="nav-role">
                {isEs ? "Backend Developer · Técnico UTN" : "Backend Developer · UTN Technician"}
              </span>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#about">{isEs ? "Sobre mí" : "About"}</a>
            <a href="#experience">{isEs ? "Experiencia" : "Experience"}</a>
            <a href="#projects">{isEs ? "Proyectos" : "Projects"}</a>
            <a href="#stack">{isEs ? "Stack" : "Tech Stack"}</a>
            <a href="#contact">{isEs ? "Contacto" : "Contact"}</a>
          </nav>
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang(isEs ? "en" : "es")}
          >
            {isEs ? "ES / EN" : "EN / ES"}
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid" data-reveal>
            <div>
              <div className="hero-tag">
                <span className="hero-badge-dot" />
                <span>
                  {isEs
                    ? "Técnico Universitario en Programación (UTN)"
                    : "University Technician in Programming (UTN)"}
                </span>
              </div>
              <h1 className="hero-title">
                {isEs ? "Construyendo sistemas backend con " : "Crafting backend systems with "}
                <span>{isEs ? "mentalidad full‑stack" : "a full‑stack mindset"}</span>
              </h1>
              <p className="hero-subtitle">
              {isEs ? "Soy " : "I'm a "}
                <span className="hero-highlight">
                  {isEs
                    ? "Técnico Universitario en Programación (UTN)"
                    : "University Technician in Programming (UTN)"}
                </span>{" "}
                {isEs ? "y backend developer enfocado en " : "and backend developer focused on "}
                <span className="hero-highlight">
                  {isEs ? "APIs REST seguras" : "secure REST APIs"}
                </span>{" "}
                {isEs ? "y aplicaciones web listas para producción." : "and production‑ready web applications."}
              </p>
              <div className="hero-badges">
                <span className="hero-badge">Node.js · Express · TypeScript</span>
                <span className="hero-badge">
                  {isEs ? "PostgreSQL · Arquitectura modular" : "PostgreSQL · Modular architecture"}
                </span>
                <span className="hero-badge">React · Render</span>
                <span className="hero-badge">
                  {isEs ? "Java · Crecimiento constante" : "Java · Continuous growth"}
                </span>
              </div>
              <div className="hero-cta">
                <a href="#projects" className="btn-primary">
                  {isEs ? "Ver proyectos" : "View projects"}
                </a>
                <a href="#contact" className="btn-secondary">
                  {isEs ? "Contact me" : "Let&apos;s connect"}
                </a>
              </div>
              <div className="hero-meta">
                <span>
                  <span className="hero-meta-dot" />
                  {isEs
                    ? "Abierto a oportunidades backend / full‑stack"
                    : "Available for backend / full‑stack roles"}
                </span>
              </div>
            </div>

            <aside className="hero-right">
              <div className="hero-photo-wrapper" data-reveal>
                <img
                  src="/profile.png"
                  alt="Foto de Luciano Guardese"
                  className="hero-photo"
                />
                <div className="hero-photo-orbit" />
              </div>
              <div className="hero-card float-card" data-reveal>
                <p className="hero-pill">
                  {isEs ? "Snapshot profesional" : "Professional snapshot"}
                </p>
                <h2 className="hero-card-title">
                  {isEs
                    ? "Software con estructura, claridad y visión a largo plazo"
                    : "Software with structure, clarity and long‑term vision"}
                </h2>
                <div className="hero-card-grid">
                  <div className="hero-chip">
                    <label>{isEs ? "Rol principal" : "Main role"}</label>
                    <span>Backend Developer</span>
                    <small>{isEs ? "Perfil full‑stack" : "Full‑stack mindset"}</small>
                  </div>
                  <div className="hero-chip">
                    <label>{isEs ? "Formación" : "Education"}</label>
                    <span>
                      {isEs
                        ? "Técnico Universitario en Programación"
                        : "University Technician in Programming"}
                    </span>
                    <small>UTN</small>
                  </div>
                  <div className="hero-chip">
                    <label>{isEs ? "Experiencia clave" : "Key experience"}</label>
                    <span>{isEs ? "App full‑stack en producción" : "Production full‑stack app"}</span>
                    <small>JWT · Roles · Render</small>
                  </div>
                  <div className="hero-chip">
                    <label>{isEs ? "Stack actual" : "Current stack"}</label>
                    <span>Node · TS · React</span>
                    <small>{isEs ? "Java en progreso" : "Java in progress"}</small>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section" data-reveal>
          <div className="container">
            <h2 className="section-title">{isEs ? "Sobre mí" : "About"}</h2>
            <p className="section-text">
              {isEs ? "Soy " : "I'm a "}
              <strong>
                {isEs
                  ? "Técnico Universitario en Programación (UTN)"
                  : "University Technician in Programming (UTN)"}
              </strong>{" "}
              {isEs ? "que trabaja como " : "working as a "}
              <strong>
                {isEs
                  ? "Backend Developer con perfil full‑stack"
                  : "backend developer with a full‑stack profile"}
              </strong>
              {isEs ? ", desarrollando " : ", building "}
              <strong>{isEs ? "APIs REST seguras" : "secure REST APIs"}</strong>
              {isEs ? " y " : " and "}
              <strong>
                {isEs
                  ? "aplicaciones web desplegadas en producción"
                  : "web applications deployed to production"}
              </strong>
              .
            </p>
            <p className="section-text">
              {isEs ? "Trabajo principalmente con " : "I mainly work with "}
              <strong>Node.js, Express, TypeScript {isEs ? "y" : "and"} PostgreSQL</strong>
              {isEs ? ", aplicando " : ", applying "}
              <strong>{isEs ? "arquitectura modular" : "modular architecture"}</strong>,{" "}
              <strong>clean code</strong> {isEs ? "y " : "and "}
              <strong>
                {isEs
                  ? "buenas prácticas de ingeniería de software"
                  : "software engineering best practices"}
              </strong>
              .
            </p>
            <p className="section-text">
              {isEs ? "Participé en el desarrollo de una " : "I worked on a "}
              <strong>
                {isEs
                  ? "aplicación full‑stack empresarial en producción para Oleohidráulica Guardese"
                  : "production full‑stack business application for Oleohidráulica Guardese"}
              </strong>{" "}
              {isEs ? "con " : "with "}
              <strong>JWT</strong>,{" "}
              <strong>
                {isEs ? "control de roles" : "role‑based access control"}
              </strong>{" "}
              {isEs ? "y " : "and "}
              <strong>{isEs ? "deploy en Render" : "deployment on Render"}</strong>
              {isEs
                ? ", obteniendo experiencia real en todo el ciclo de vida de una aplicación web."
                : ", gaining end‑to‑end experience across the full lifecycle of a web app."}
            </p>
            <p className="section-text">
              {isEs ? "En el frontend trabajo con " : "On the front‑end side I work with "}
              <strong>React + TypeScript</strong>
              {isEs
                ? ", y actualmente profundizo en "
                : ", and I'm currently deepening my knowledge of "}
              <strong>Java</strong>{" "}
              {isEs
                ? "para fortalecer mi perfil backend en distintos entornos."
                : "to strengthen my backend profile in different environments."}
            </p>
            <p className="section-text">
              {isEs ? "Busco unirme a un " : "I'm looking to join a "}
              <strong>{isEs ? "equipo técnico" : "technical team"}</strong>{" "}
              {isEs ? "donde pueda aportar " : "where I can bring "}
              <strong>
                {isEs
                  ? "estructura, lógica y visión a largo plazo"
                  : "structure, logic and long‑term thinking"}
              </strong>{" "}
              {isEs ? "al diseño de software." : "to software design."}
            </p>
          </div>
        </section>

        {/* Formation */}
        <section id="formation" className="section" data-reveal>
          <div className="container">
            <h2 className="section-title">{isEs ? "Formación" : "Education"}</h2>
            <div className="cards-grid">
              <article className="card">
                <h3 className="card-title">
                  {isEs
                    ? "Técnico Universitario en Programación – UTN"
                    : "University Technician in Programming – UTN"}
                </h3>
                <ul className="card-list">
                  <li>
                    {isEs
                      ? "Diseño y desarrollo de software."
                      : "Software design and development."}
                  </li>
                  <li>
                    {isEs
                      ? "Bases de datos y programación orientada a objetos."
                      : "Databases and object‑oriented programming."}
                  </li>
                  <li>
                    {isEs
                      ? "Entornos web y buenas prácticas de ingeniería."
                      : "Web environments and good engineering practices."}
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section section-alt" data-reveal>
          <div className="container">
            <h2 className="section-title">{isEs ? "Experiencia" : "Experience"}</h2>
            <div className="cards-grid">
              <article className="card">
                <h3 className="card-title">
                  {isEs ? "Backend / Full‑Stack Developer" : "Backend / Full‑Stack Developer"}
                </h3>
                <p className="card-subtitle">
                  {isEs ? "Proyectos académicos y personales" : "Academic & personal projects"}
                </p>
                <ul className="card-list">
                  <li>
                    {isEs ? "Desarrollo de " : "Development of "}
                    <strong>REST APIs</strong> {isEs ? "con " : "with "}
                    <strong>Node.js, Express {isEs ? "y" : "and"} TypeScript</strong>.
                  </li>
                  <li>
                    {isEs ? "Integración con " : "Database integration with "}
                    <strong>PostgreSQL</strong>{" "}
                    {isEs ? "usando modelos claros y consultas cuidadas." : "using clear models and careful querying."}
                  </li>
                  <li>
                    {isEs ? "Implementación de " : "Implementation of "}
                    <strong>JWT</strong>,{" "}
                    {isEs ? "manejo de sesiones y " : "sessions and "}
                    <strong>{isEs ? "control de roles" : "role‑based access"}</strong>.
                  </li>
                  <li>
                    {isEs ? "Despliegue de aplicaciones en " : "Application deployment on "}
                    <strong>Render</strong> {isEs ? "con configuración segura." : "with secure configuration."}
                  </li>
                  <li>
                    {isEs ? "Proyecto en producción: " : "Production project: "}
                    <strong>Oleohidráulica Guardese</strong>
                    {isEs
                      ? ", aplicación web full‑stack para gestión interna."
                      : ", full‑stack web app for internal management."}
                  </li>
                </ul>
              </article>

              <article className="card">
                <h3 className="card-title">
                  {isEs ? "Administrador" : "Administrator"}
                </h3>
                <p className="card-subtitle">Oleohidráulica Guardese</p>
                <ul className="card-list">
                  <li>
                    {isEs
                      ? "Gestión y administración general de la empresa."
                      : "General management and administration of the business."}
                  </li>
                  <li>
                    {isEs
                      ? "Organización de tareas y coordinación operativa diaria."
                      : "Task organization and day‑to‑day operational coordination."}
                  </li>
                  <li>
                    {isEs
                      ? "Atención al público y resolución de consultas de clientes."
                      : "Customer‑facing work: public service and resolving client requests."}
                  </li>
                  <li>
                    {isEs
                      ? "Soporte en la toma de decisiones operativas y estratégicas."
                      : "Support in operational and strategic decision‑making."}
                  </li>
                  <li>
                    {isEs
                      ? "Aporte de una mirada estructurada y orientada a procesos, alineada con mi perfil técnico."
                      : "Bringing a structured, process‑oriented perspective aligned with my technical background."}
                  </li>
                </ul>
              </article>

            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section" data-reveal>
          <div className="container">
            <h2 className="section-title">
              {isEs ? "Proyectos destacados" : "Selected work"}
            </h2>
            <div className="cards-grid">
              <article className="card card-project">
                <div className="card-project-header">
                  <span className="badge">
                    {isEs ? "Full‑Stack · Producción" : "Full‑Stack · Production"}
                  </span>
                  <h3 className="card-title">
                    {isEs
                      ? "Oleohidráulica Guardese · Aplicación Full‑Stack en Producción"
                      : "Oleohidráulica Guardese · Production Full‑Stack App"}
                  </h3>
                </div>
                <p className="section-text">
                  {isEs
                    ? "Aplicación web full‑stack en producción para Oleohidráulica Guardese, con autenticación, gestión de roles y panel de administración interno."
                    : "Full‑stack web application in production for Oleohidráulica Guardese, with authentication, role management and an internal admin dashboard."}
                </p>
                <ul className="card-list">
                  <li>
                    <strong>Frontend:</strong> React + TypeScript.
                  </li>
                  <li>
                    <strong>Backend:</strong> Node.js, Express, TypeScript.
                  </li>
                  <li>
                    <strong>{isEs ? "Base de datos" : "Database"}:</strong> PostgreSQL
                    {isEs ? " con Sequelize ORM." : " with Sequelize ORM."}
                  </li>
                  <li>
                    <strong>{isEs ? "Arquitectura" : "Architecture"}:</strong> Modular REST API.
                  </li>
                  <li>
                    <strong>{isEs ? "Autenticación" : "Auth"}:</strong> JWT,{" "}
                    {isEs ? "rutas protegidas y control de roles." : "protected routes and role‑based access."}
                  </li>
                  <li>
                    <strong>{isEs ? "Infraestructura" : "Infrastructure"}:</strong>{" "}
                    {isEs
                      ? "Render (frontend + backend + base de datos)."
                      : "Render (frontend + backend + database)."}
                  </li>
                </ul>
                <a
                  href="https://trabajo-final-frontend-j103.onrender.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card-link"
                >
                  {isEs ? "Ver demo en producción" : "View live demo"}
                </a>
                <a
                  href="https://github.com/belenburgos20/Trabajo-Final-Frontend"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card-link"
                >
                  {isEs ? "Repositorio Frontend" : "Frontend repository"}
                </a>
                <a
                  href="https://github.com/belenburgos20/Trabajo-Final-Backend"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card-link"
                >
                  {isEs ? "Repositorio Backend" : "Backend repository"}
                </a>
              </article>

              <article className="card card-project">
                <div className="card-project-header">
                  <span className="badge">
                    {isEs ? "C++ · Consola" : "C++ · Console"}
                  </span>
                  <h3 className="card-title">
                    {isEs
                      ? "Simulador de Sistema de Gestión de Biblioteca"
                      : "Library Management System Simulator"}
                  </h3>
                </div>
                <p className="section-text">
                  {isEs
                    ? "Proyecto académico en C++ que simula un sistema completo de gestión de biblioteca: libros, usuarios, préstamos, reservas, multas y reportes, utilizando archivos CSV para la persistencia de datos."
                    : "Academic C++ project that simulates a complete library management system: books, users, loans, reservations, fines and reports, using CSV files for data persistence."}
                </p>
                <ul className="card-list">
                  <li>
                    {isEs ? "Gestión de libros, usuarios y stock." : "Management of books, users and stock."}
                  </li>
                  <li>
                    {isEs
                      ? "Registro de préstamos, devoluciones y cálculo de multas por demora."
                      : "Loan and return tracking with fine calculation for late returns."}
                  </li>
                  <li>
                    {isEs
                      ? "Sistema de reservas con lista de espera y actualización automática de disponibilidad."
                      : "Reservation system with waiting list and automatic availability updates."}
                  </li>
                  <li>
                    {isEs
                      ? "Uso de estructuras, arreglos y manejo de archivos CSV con <fstream>."
                      : "Uses structs, arrays and CSV file handling with <fstream>."}
                  </li>
                </ul>
                <a
                  href="https://github.com/LuchoGuardese/Cajero-automatico-C-funcional"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card-link"
                >
                  {isEs ? "Ver repositorio en GitHub" : "View GitHub repository"}
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="section section-alt" data-reveal>
          <div className="container">
            <h2 className="section-title">
              {isEs ? "Stack tecnológico" : "Tech Stack & Tools"}
            </h2>
            <div className="stack-chips">
              <div className="stack-group">
                <span className="stack-label">
                  {isEs ? "Lenguajes" : "Languages"}
                </span>
                <div className="stack-row">
                  <span className="stack-chip">C++</span>
                  <span className="stack-chip">C#</span>
                  <span className="stack-chip">Python</span>
                  <span className="stack-chip">JavaScript</span>
                  <span className="stack-chip">TypeScript</span>
                  <span className="stack-chip">SQL</span>
                  <span className="stack-chip">Java</span>
                </div>
              </div>
              <div className="stack-group">
                <span className="stack-label">Backend</span>
                <div className="stack-row">
                  <span className="stack-chip">Node.js</span>
                  <span className="stack-chip">Express</span>
                  <span className="stack-chip">REST APIs</span>
                  <span className="stack-chip">JWT</span>
                  <span className="stack-chip">Sequelize</span>
                  <span className="stack-chip">PostgreSQL</span>
                  <span className="stack-chip">Mongoose</span>
                </div>
              </div>
              <div className="stack-group">
                <span className="stack-label">
                  {isEs ? "Bases de datos" : "Databases"}
                </span>
                <div className="stack-row">
                  <span className="stack-chip">PostgreSQL</span>
                  <span className="stack-chip">MySQL</span>
                </div>
              </div>
              <div className="stack-group">
                <span className="stack-label">Frontend</span>
                <div className="stack-row">
                  <span className="stack-chip">React</span>
                  <span className="stack-chip">TypeScript</span>
                  <span className="stack-chip">React Router</span>
                  <span className="stack-chip">Axios</span>
                </div>
              </div>
              <div className="stack-group">
                <span className="stack-label">
                  {isEs ? "Prácticas y herramientas" : "Practices & Tools"}
                </span>
                <div className="stack-row">
                  <span className="stack-chip">Git</span>
                  <span className="stack-chip">GitHub</span>
                  <span className="stack-chip">Postman</span>
                  <span className="stack-chip">Render</span>
                  <span className="stack-chip">Docker</span>
                  <span className="stack-chip">ESLint</span>
                  <span className="stack-chip">Prettier</span>
                  <span className="stack-chip">Vitest</span>
                  <span className="stack-chip">Arquitectura backend</span>
                  <span className="stack-chip">Diseño de sistemas</span>
                  <span className="stack-chip">Buenas prácticas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section" data-reveal>
          <div className="container contact">
            <h2 className="section-title">
              {isEs ? "Contacto" : "Get in touch"}
            </h2>
            <p className="section-text">
              {isEs
                ? "¿Te interesa que trabajemos juntos? Estoy abierto a nuevas oportunidades como "
                : "Interested in working together? I'm open to new opportunities as a "}
              <strong>Backend / Full‑Stack Developer</strong>
              {isEs
                ? ", tanto en roles a largo plazo como en proyectos puntuales."
                : ", whether it&apos;s a long‑term role or a focused project."}
            </p>
            <div className="contact-grid">
              <div className="contact-card">
                <p className="contact-label">Email</p>
                <a href="mailto:Lucho.Guardese@gmail.com" className="contact-value">
                  <span className="contact-icon-circle">@</span>
                </a>
              </div>
              <div className="contact-card">
                <p className="contact-label">LinkedIn</p>
                <a href="https://www.linkedin.com/in/luciano-guardese-3402981b5/" target="_blank" rel="noreferrer noopener" className="contact-value">
                  <span className="contact-icon-circle">LI</span>
                </a>
              </div>
              <div className="contact-card">
                <p className="contact-label">GitHub</p>
                <a href="https://github.com/LuchoGuardese" target="_blank" rel="noreferrer noopener" className="contact-value">
                  <span className="contact-icon-circle">GH</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Lucho Guardese</span>
          <span>
            {isEs
              ? "Construido con React · Deploy en Render"
              : "Built with React · Deployed on Render"}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;