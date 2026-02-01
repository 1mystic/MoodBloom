# AI Context & Reference for Flux

## 📌 Project Overview
**Name:** Flux
**Type:** AI-Assisted Smart Todo / Notes App
**Vibe:** Liquid interface, organic movement, "Agentic" feel (Orb cursor, glassmorphism).
**Inspiration:** `layout.html` prototype (Glassy, smooth, custom cursor).

## 🏗️ Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Runtime/Manager:** Bun
- **Database:** PostgreSQL
- **ORM:** Prisma
- **State/Fetching:** TanStack Query (React Query)
- **Styling:** CSS Modules / Vanilla CSS (or Tailwind if requested, but favoring custom aesthetics).
- **AI Integration:** LLM API (OpenAI/Anthropic/Gemini) for "Smart Add" and "Suggestions".

## 🧠 Core Mental Models
1.  **Frontend:** React UI (Browser)
2.  **Data Fetching:** TanStack Query (Server State Sync)
3.  **Backend Logic:** Next.js API Routes / Server Actions
4.  **Data Layer:** Prisma Client -> PostgreSQL
5.  **Intelligence:** AI Service via API

## 📂 Project Structure
```
flux/
├── prisma/             # DB Schema
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React UI Components
│   ├── lib/            # Utilities (Prisma client, AI helpers)
│   ├── services/       # Business logic
│   └── styles/         # Global CSS / Tokens
├── public/             # Static assets
└── ...config files
```
