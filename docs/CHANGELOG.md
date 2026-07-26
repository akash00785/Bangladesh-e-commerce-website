# CHANGELOG — Version history and list of changes made across all project phases.

v0.0.1

Initial project foundation created.

v0.0.2

Add enterprise frontend folder architecture.

New folders under src/:
  assets, config, constants, context, hooks, layouts,
  services, store, styles, types, utils

New folders under src/components/:
  common, layout, home, category, product,
  cart, checkout, account, admin

All empty folders tracked with .gitkeep files.

v0.0.3

Documentation and project scripts updated.

Changes:
- README.md rewritten with full professional documentation
  (Project Overview, Tech Stack, Project Structure, Installation,
   Development Commands, Branch Strategy, AI Agent Workflow, Coding Standards)
- package.json: added "type-check" script (tsc --noEmit)
- docs/PROJECT_STATUS.md updated
- docs/AGENT_LOG.md updated

v0.0.4

Final quality check completed by Agent-01.

Fix:
- @base-ui/react@^1.6.0 missing from package.json dependencies —
  package was installed by shadcn/ui init and present in package-lock.json
  and node_modules but not declared explicitly; added to dependencies.

v0.0.5

Header and Navigation completed by Agent-02.

New files:
- src/types/navigation.ts — NavItem and CartItem TypeScript types
- src/constants/navigation.ts — NAV_ITEMS array (8 categories) and announcement features
- src/components/layout/AnnouncementBar.tsx — Top green bar with 4 feature badges
- src/components/layout/Header.tsx — Logo + Search box + Account/Wishlist/Cart icons
- src/components/layout/Navigation.tsx — Desktop horizontal nav with active state
- src/components/layout/MobileMenu.tsx — Slide-in drawer for mobile with backdrop
- src/components/layout/SiteHeader.tsx — Sticky wrapper combining all header sections

Modified:
- src/app/layout.tsx — SiteHeader integrated, lang="bn", metadata বাংলায়
- src/app/page.tsx — Simple welcome placeholder
- src/app/globals.css — Removed broken shadcn/tailwind.css import; tw-animate-css installed

Build status: PASS
TypeScript: PASS
Lint: PASS (0 errors, 0 warnings)
