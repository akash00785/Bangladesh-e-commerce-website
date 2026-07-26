# 🛒 Bangladesh E-Commerce Website

A modern, scalable e-commerce platform built for the Bangladesh market — powered by Next.js 16 App Router, TypeScript, Tailwind CSS v4, and shadcn/ui.

---

## 📌 Project Overview

This platform provides a full-featured online shopping experience including product browsing by category, cart management, checkout, user accounts, and an admin dashboard. The architecture is designed for multi-agent AI-assisted development, with each agent responsible for a clearly scoped layer of the application.

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) — App Router |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) — base-nova style |
| Icons | [Lucide React](https://lucide.dev/) |
| Linting | [ESLint 9](https://eslint.org/) with `eslint-config-next` |
| Formatting | [Prettier 3](https://prettier.io/) with `prettier-plugin-tailwindcss` |
| Package Manager | npm |
| Node Version | 20+ |

---

## 📁 Project Structure

```
/
├── src/
│   ├── app/                # Next.js App Router — routes and layouts only
│   │   ├── layout.tsx      # Root layout (fonts, providers)
│   │   ├── page.tsx        # Home page route
│   │   └── globals.css     # Global styles and CSS variables
│   │
│   ├── assets/             # Static assets imported by components
│   ├── config/             # App-wide config and feature flags
│   ├── constants/          # Shared constants and enumerations
│   ├── context/            # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── layouts/            # Full-page layout wrappers
│   ├── lib/                # Third-party library wrappers (shadcn utils)
│   ├── services/           # API service layer — all fetch logic lives here
│   ├── store/              # Global client-side state management
│   ├── styles/             # Additional shared CSS files
│   ├── types/              # TypeScript type and interface declarations
│   ├── utils/              # Pure helper functions
│   │
│   └── components/
│       ├── ui/             # shadcn/ui primitives (auto-generated)
│       ├── common/         # Shared domain-agnostic components
│       ├── layout/         # Header, Footer, Navbar, Sidebar
│       ├── home/           # Home page specific components
│       ├── category/       # Category listing and filter components
│       ├── product/        # Product card, detail, gallery, reviews
│       ├── cart/           # Cart drawer and line items
│       ├── checkout/       # Checkout flow components
│       ├── account/        # User profile and order history
│       └── admin/          # Admin dashboard panels
│
├── public/                 # Static files served at root
├── docs/                   # Project documentation for all agents
│   ├── README.md
│   ├── DESIGN_GUIDE.md
│   ├── PROJECT_RULES.md
│   ├── PROJECT_STATUS.md
│   ├── CHANGELOG.md
│   ├── AGENT_LOG.md
│   ├── COMPONENT_GUIDE.md
│   └── FOLDER_STRUCTURE.md
├── TASKS/                  # Per-agent task definitions
│   ├── 001.md
│   ├── 002.md
│   └── 003.md
├── components.json         # shadcn/ui config
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── .prettierrc
└── package.json
```

---

## ⚙️ Installation

### Prerequisites

- Node.js **20 or higher**
- npm **9 or higher**

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/akash00785/Bangladesh-e-commerce-website.git
cd Bangladesh-e-commerce-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**.

---

## 🛠️ Development Commands

| Command | Description |
|---|---|
| `npm run dev` | Start Next.js development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint across the `src/` directory |
| `npm run type-check` | Run TypeScript compiler check (no emit) |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without writing changes |

> **Before every commit:** run `npm run lint` and `npm run type-check` to ensure no errors are pushed.

---

## 🌿 Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production-ready code — always stable |
| `dev` | Active development integration branch |
| `feature/<name>` | Individual feature branches |
| `fix/<name>` | Bug fix branches |
| `agent/<agent-id>` | Isolated branch per AI agent task |

**Workflow:**
1. Create a branch from `main` → `agent/agent-02-ui-setup`
2. Complete the agent's scoped task
3. Run all checks (lint, type-check, build)
4. Merge into `main` via pull request

---

## 🤖 AI Agent Workflow

This project is built using a multi-agent AI development system. Each agent is responsible for a single, clearly scoped layer of the application.

| Agent | Responsibility |
|---|---|
| **Agent-01** | Project foundation, folder architecture, documentation |
| **Agent-02** | Global layout, design system, shared UI components |
| **Agent-03** | Pages and routing (Home, Category, Product, Cart, Checkout) |
| **Agent-04** | State management, API service layer, data fetching |
| **Agent-05** | Authentication, user accounts, admin dashboard |
| **Agent-06** | Testing, performance optimisation, final QA |

### Agent Rules

- Each agent **reads** `docs/PROJECT_STATUS.md` and `docs/AGENT_LOG.md` before starting.
- Each agent **updates** `docs/AGENT_LOG.md`, `docs/PROJECT_STATUS.md`, and `docs/CHANGELOG.md` on completion.
- Agents must **not** modify work outside their defined scope.
- All checks (lint, type-check, build) must **pass** before committing.

---

## 📐 Coding Standards

### TypeScript

- **Strict mode** is enabled — no `any` types.
- All props must have explicit TypeScript interfaces defined in `src/types/`.
- Prefer `type` over `interface` for simple shapes; use `interface` for extendable contracts.

### Components

- One component per file.
- File name matches the component name in **PascalCase**: `ProductCard.tsx`.
- All components are **functional** with React hooks — no class components.
- Keep components **small and focused** — extract sub-components when a file exceeds ~150 lines.

### Styling

- Use **Tailwind CSS utility classes** exclusively — no inline styles.
- Use `cn()` from `src/lib/utils` to merge conditional class names.
- Global CSS variables live in `src/app/globals.css` only.
- Do **not** hand-edit files in `src/components/ui/` — they are managed by shadcn/ui CLI.

### Data Fetching

- All API calls go through `src/services/` — never call `fetch` directly inside a component.
- No business logic inside page files (`src/app/**`).

### Imports

- Use the `@/` alias for all imports from `src/`: `import { Button } from "@/components/ui/button"`.
- Group imports: external libraries → internal modules → types → styles.

### Git

- Commit messages are **imperative, present tense**: `Add product card component`.
- Each commit must be **atomic** — one logical change per commit.
- Run lint and type-check before every push.

---

## 📄 License

Private project — all rights reserved.
