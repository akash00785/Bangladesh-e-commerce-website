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
- src/types/navigation.ts — NavItem TypeScript interface
- src/constants/navigation.ts — NAV_ITEMS array (8 categories)
- src/components/layout/AnnouncementBar.tsx — Top green bar with 4 feature badges
- src/components/layout/Navigation.tsx — Desktop horizontal nav with active state
- src/components/layout/MobileMenu.tsx — Slide-in drawer for mobile with backdrop
- src/components/layout/SiteHeader.tsx — Sticky wrapper combining all header sections

Modified:
- src/app/layout.tsx — SiteHeader integrated, lang="bn", metadata বাংলায়
- src/app/page.tsx — Simple welcome placeholder
- src/app/globals.css — Removed broken shadcn/tailwind.css import; tw-animate-css installed

v0.0.6

Agent-02 final quality audit.

Fixed:
- SiteHeader.tsx: imports were placed after function body — moved to top
- SiteHeader.tsx: "useState as useStateInner" alias removed
- Header.tsx: deleted — file was entirely unused
- constants/navigation.ts: ANNOUNCEMENT_FEATURES unused export removed
- types/navigation.ts: CartItem unused interface removed
- Search input/form/button: aria-labels added
- Account/Wishlist/Cart links: aria-label added to each
- Lucide icons: aria-hidden="true" added to all decorative icons
- Navigation: aria-label="প্রধান নেভিগেশন" added
- AnnouncementBar: role="banner" and aria-label="বিশেষ ঘোষণা" added

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)

v0.0.9

Featured Products and Flash Sale completed by Agent-04.

New files:
- src/types/product.ts — Product data interface
- src/constants/products.ts — 8 featured products and 8 flash sale products
- src/components/product/ProductCard.tsx — reusable product card with wishlist,
  quick view, rating, pricing, add-to-cart UI, hover animation, and responsive layout
- src/components/product/ProductGrid.tsx — shared responsive product grid
- src/components/home/FeaturedProducts.tsx — featured products section
- src/components/home/SaleCountdown.tsx — frontend-only Bengali countdown UI
- src/components/home/FlashSaleSection.tsx — flash sale section

Modified:
- src/app/page.tsx — Featured Products and Flash Sale composed after CategorySection
- src/app/globals.css — reusable brand and sale color tokens added
- docs/PROJECT_STATUS.md — updated project phase and completion status
- docs/AGENT_LOG.md — added Agent-04 execution log

Quality:
- Build: PASS
- TypeScript: PASS (0 errors)
- Lint: PASS (0 errors, 0 warnings)

Agent-04 Final Production Audit

Audited:
- ProductCard and ProductGrid
- FeaturedProducts
- FlashSaleSection and SaleCountdown
- Product types and product constants

Audit outcome:
- No duplicate components, CSS, or product-card markup
- No unused imports or variables
- No hardcoded colors or custom spacing values in the audited scope
- Image alt text and button aria-labels verified
- Reusability and shared grid composition verified
- No console.log(), TODO, or FIXME found
- Mobile, tablet, and desktop responsive classes verified
- No unnecessary dependencies added

No code fixes were required.

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)

v0.0.7

Hero Banner and Category Section completed by Agent-03.

New files:
- src/types/home.ts — CategoryItem, ServiceFeature interfaces
- src/constants/home.ts — CATEGORIES (8 items), SERVICE_FEATURES (4 items)
- src/components/home/HeroBanner.tsx — Premium hero banner
- src/components/home/ServiceFeatures.tsx — 4-feature service bar
- src/components/home/CategoryCard.tsx — Reusable category card
- src/components/home/CategorySection.tsx — 8 category cards grid

Modified:
- src/app/page.tsx — HeroBanner + ServiceFeatures + CategorySection composed
- next.config.ts — images.unsplash.com added to remotePatterns

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)

v0.0.8

Agent-03 final quality audit.

Fixed:
- ServiceFeatures.tsx: React.ElementType used without React import — replaced with
  "import type { ElementType } from 'react'" and updated type usage
- CategoryCard.tsx: removed unnecessary unoptimized prop from next/image —
  remotePatterns already configured; Next.js now properly optimizes category images
- HeroBanner.tsx: removed unnecessary unoptimized prop from hero model image —
  Next.js now properly optimizes hero image with priority loading
- HeroBanner.tsx: removed animate-fade-in class — class does not exist in
  tw-animate-css, causing silent styling failure
- CategorySection.tsx: removed redundant sm:grid-cols-4 class — identical value
  to base grid-cols-4, redundant at sm breakpoint

No console.log, TODO/FIXME, duplicate code, broken imports, missing alt text,
or missing aria-labels found. No unnecessary dependencies added.

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)

v1.0.0

Product Details Preview, Newsletter Section, and Premium Footer completed by Agent-05 Recovery.

New files:
- src/types/footer.ts — FooterLink, FooterColumn, PaymentMethod TypeScript interfaces
- src/constants/footer.ts — FOOTER_COLUMNS (4 nav columns), PAYMENT_METHODS (4 payment options)
- src/components/product/ProductDetailsPreview.tsx — interactive product detail preview with
  image gallery thumbnails, size selector (S/M/L/XL/XXL), color swatches (5 colors),
  quantity control, add-to-cart, buy-now CTA, and guarantee bar (delivery, return, secure)
- src/components/home/NewsletterSection.tsx — client-side email subscription form with
  validation, success state, and trust badges; aria-live feedback
- src/components/layout/SiteFooter.tsx — 6-column footer with brand block, 4 nav columns,
  social links, payment methods grid (COD/bKash/Nagad/Rocket), bottom bar with copyright

Modified:
- src/app/page.tsx — ProductDetailsPreview and NewsletterSection composed after FlashSaleSection
- src/app/layout.tsx — SiteFooter added to root layout
- docs/PROJECT_STATUS.md — updated phase and completion status
- docs/CHANGELOG.md — this entry
- docs/AGENT_LOG.md — Agent-05 Recovery execution log

Quality:
- Build: PASS
- TypeScript: PASS (0 errors)
- Lint: PASS (0 errors, 0 warnings)

v1.0.1

Final frontend production & security audit by Agent-05.

Issues Fixed:
1. SiteHeader.tsx: window.location.href → router.push() (Next.js anti-pattern fix)
2. HeroBanner.tsx: Hardcoded year "২০২৫" → "২০২৬" (factual error fix)
3. ProductDetailsPreview.tsx: Non-descriptive color aria-labels → named Bengali color labels
   (accessibility fix — "কালো রঙ নির্বাচন করুন", "বাদামি রঙ নির্বাচন করুন", etc.)

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)
