FLUX
====

AI-assisted smart notes application.
Design system focuses on fluid aesthetics ("Liquid UI") and agentic cursor interactions.

STACK
-----

Runtime:    Bun
Framework:  Next.js 14+ (App Router)
Database:   PostgreSQL
ORM:        Prisma
State:      React Query (TanStack)

SETUP
-----

1. Install dependencies:
   bun install

2. Configure environment:
   cp .env.example .env
   (Set DATABASE_URL)

3. Run development server:
   bun dev

ARCHITECTURE
------------

/src/app
    Next.js App Router structure.
    Global styles defined in globals.css (CSS Variables).
    Layout handles font loading (Inter, JetBrains Mono, Instrument Serif).

/src/components
    Orb:            Canvas/Div based cursor follower.
    ThemeEngine:    CSS variable switch for Neon/Minimalist/Brutalist themes.
    NoteCard:       Glassmorphic card component.

DESIGN SYSTEM
-------------

Core philosophy: Glassmorphism + Neon Accents.
All tokens defined in CSS variables for runtime theming.
Default theme (Flux) uses exclusion blending for the cursor orb.
