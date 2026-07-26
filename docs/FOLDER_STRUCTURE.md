# FOLDER_STRUCTURE — Documented directory layout and explanation of where each type of file belongs.

## Root Structure

```
/
├── src/                    # All application source code
├── public/                 # Static assets served at root (images, SVGs, fonts)
├── docs/                   # Project documentation for all agents
├── TASKS/                  # Per-agent task definitions
├── components.json         # shadcn/ui configuration
├── tsconfig.json           # TypeScript compiler config
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS / Tailwind v4 config
├── eslint.config.mjs       # ESLint flat config
├── .prettierrc             # Prettier formatting rules
└── package.json            # Scripts and dependencies
```

## src/ Structure

```
src/
├── app/                    # Next.js App Router — pages and routing only
│   ├── layout.tsx          # Root layout (fonts, providers, global CSS)
│   ├── page.tsx            # Home page route
│   └── globals.css         # Global styles and Tailwind/shadcn CSS variables
│
├── assets/                 # Static assets imported by components (icons, images, fonts)
├── config/                 # App-wide configuration values (env vars, feature flags, site metadata)
├── constants/              # Shared constants and enumerations (routes, keys, magic strings)
├── context/                # React Context providers and consumer hooks
├── hooks/                  # Custom React hooks (data fetching, UI state, utilities)
├── layouts/                # Full-page layout wrappers (e.g. ShopLayout, AdminLayout)
├── services/               # API service layer — all external data fetching logic lives here
├── store/                  # Global client-side state (Zustand / Redux slices)
├── styles/                 # Shared CSS modules or additional global style files
├── types/                  # TypeScript type and interface declarations
├── utils/                  # Pure helper functions (formatting, validation, math)
│
├── components/             # Reusable UI components, grouped by domain
│   ├── ui/                 # shadcn/ui primitives (auto-generated; do not hand-edit)
│   ├── common/             # Domain-agnostic shared components (Button wrappers, Spinner, etc.)
│   ├── layout/             # Structural layout components (Header, Footer, Sidebar, Navbar)
│   ├── home/               # Components used only on the home / landing page
│   ├── category/           # Category listing and filter components
│   ├── product/            # Product card, detail, gallery, and review components
│   ├── cart/               # Shopping cart drawer, line items, totals
│   ├── checkout/           # Checkout form steps, payment, address, confirmation
│   ├── account/            # User profile, orders history, settings panels
│   └── admin/              # Admin dashboard panels, tables, and management forms
└── lib/                    # Third-party library wrappers and initialisation (e.g. shadcn utils)
```

## Conventions

- **Pages live in `src/app/`** — no business logic, only layout composition and data loading.
- **Domain components in `src/components/<domain>/`** — each domain folder owns its slice of UI.
- **`src/components/ui/`** — shadcn/ui only; never add hand-written files here.
- **`src/services/`** — every API call goes through here; components never call `fetch` directly.
- **`src/types/`** — all TypeScript interfaces and types; import from here, never inline in components.
- **`src/constants/`** — no magic strings in components; define them here and import.
- **`.gitkeep`** — present in every empty folder so Git tracks the directory.
