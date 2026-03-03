## Portfolio de Luciano Guardese

Este repositorio contiene mi portfolio personal como **Backend Developer con perfil full‑stack**, desarrollado con **React + TypeScript + Vite**.

El sitio resume mi formación, experiencia, proyectos y stack tecnológico, y está pensado como una carta de presentación técnica para recruiters y equipos de desarrollo.

## Contenido del portfolio

- **Hero / Presentación**: resumen rápido de quién soy, mi rol y stack principal.
- **Sobre mí**: contexto sobre mi perfil, experiencia con APIs REST, arquitectura modular y trabajo en producción.
- **Experiencia**: proyectos académicos, personales y experiencia en Oleohidráulica Guardese.
- **Proyectos destacados**:
  - **Oleohidráulica Guardese – App Full‑Stack en producción**  
    Aplicación web full‑stack con autenticación JWT, control de roles, panel de administración y deploy en Render (frontend, backend y base de datos PostgreSQL con Sequelize).
  - **Simulador de Sistema de Gestión de Biblioteca (C++)**  
    Proyecto académico en C++ que simula un sistema completo de gestión de biblioteca usando archivos CSV para persistencia de datos.  
    Repositorio: [`Cajero-automatico-C-funcional`](https://github.com/LuchoGuardese/Cajero-automatico-C-funcional)
- **Stack tecnológico**: lenguajes, frameworks, bases de datos y herramientas que uso en mi día a día.
- **Contacto**: enlaces a mi email, LinkedIn y GitHub.

## Tecnologías principales

- **Frontend**: React, TypeScript, Vite, CSS.
- **Backend (experiencia mostrada en proyectos)**: Node.js, Express, TypeScript.
- **Base de datos**: PostgreSQL (Sequelize ORM).
- **Otras herramientas**: Git, GitHub, Render, Docker, ESLint, Prettier.

## Cómo correr el proyecto localmente

```bash
# Instalar dependencias
npm install

# Levantar el entorno de desarrollo
npm run dev
```

Luego abrí la URL que Vite te muestre en la consola (por defecto suele ser `http://localhost:5173`).

## Deploy

El portfolio está preparado para deploy estático (por ejemplo, en Render, Vercel o Netlify) usando el build de Vite:

```bash
npm run build
```

Esto genera la versión optimizada en la carpeta `dist/`.
