# CHANGELOG — Version history and list of changes made across all project phases.

v1.2.1

Agent-08 final production audit — Checkout-only audit.

Issues Found and Fixed:

1. CustomerInfoForm.tsx: error <p> elements had no id — aria-describedby on
   fullName, phone, email inputs pointed to non-existent DOM elements.
   Added id={`${id}-error`} to FieldWrapper error paragraph.
   (Accessibility fix — WCAG 2.1 SC 1.3.1, broken aria-describedby resolved)

2. CustomerInfoForm.tsx: fullName, phone, email inputs missing name attribute.
   Added name="fullName", name="phone", name="email".
   (Form correctness fix — browser autofill and native form data)

3. ShippingAddressForm.tsx: division, district, upazila selects missing name;
   fullAddress textarea missing name and autoComplete.
   Added name={id} to SelectField select; name="fullAddress" and
   autoComplete="street-address" to textarea.
   (Form correctness + UX fix)

4. DeliveryMethodSelector.tsx: cn() had isSelected ? "text-foreground" :
   "text-foreground" — both branches identical (dead conditional).
   Replaced with plain className="text-sm font-semibold text-foreground".
   (Dead code fix)

No other issues found across all 12 audit categories.

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)

v1.3.0

Agent-09 — Authentication and User Account UI.

New routes:
- `/login` — Login form with phone/email, password visibility toggle, remember-me option, and forgot-password link
- `/register` — Registration form with full account details and password confirmation
- `/forgot-password` — Password reset request UI
- `/account` — User dashboard with profile, personal information, recent orders, shortcuts, saved addresses, and logout CTA

New reusable frontend files:
- `src/components/account/AuthShell.tsx`
- `src/components/account/AccountField.tsx`
- `src/components/account/PasswordField.tsx`
- `src/components/account/LoginForm.tsx`
- `src/components/account/RegisterForm.tsx`
- `src/components/account/ForgotPasswordForm.tsx`
- `src/components/account/AccountDashboard.tsx`
- `src/types/account.ts`
- `src/constants/account.ts`

Scope:
- Mock data and UI only
- No backend, API, database, OTP, Firebase, JWT, or authentication logic
- No packages added

Validation:
- Build: PASS
- TypeScript: PASS (0 errors)
- Lint: PASS (0 errors, 0 warnings)

v1.2.0

Checkout Page completed by Agent-08.

New files:
- src/types/checkout.ts — CustomerInfo, ShippingAddress, DeliveryMethod, PaymentMethod,
  CheckoutFormState, CheckoutFormErrors, DeliveryOption, PaymentOption,
  Division, District, Upazila TypeScript interfaces
- src/constants/checkout.ts — DELIVERY_OPTIONS (Home/Express), PAYMENT_OPTIONS
  (COD/bKash/Nagad/Rocket), DIVISIONS (8), DISTRICTS (30+), UPAZILAS (30+),
  EXPRESS_DELIVERY_FEE, HOME_DELIVERY_FEE constants
- src/components/checkout/CustomerInfoForm.tsx — Full Name, Phone, Email form
  with validation, icon prefix, aria-invalid, aria-required
- src/components/checkout/ShippingAddressForm.tsx — Cascading Division → District
  → Upazila selectors (disabled until parent selected) + Full Address textarea
- src/components/checkout/DeliveryMethodSelector.tsx — Home Delivery / Express
  Delivery radio group with fees, icons, duration
- src/components/checkout/PaymentMethodSelector.tsx — COD / bKash / Nagad / Rocket
  radio grid; UI-only preview note
- src/components/checkout/CheckoutOrderSummary.tsx — Product list with images,
  quantity badges, subtotal, coupon discount, delivery charge, grand total
- src/components/checkout/PlaceOrderButton.tsx — loading spinner + success state
  with aria-busy and aria-label
- src/app/checkout/page.tsx — /checkout route; breadcrumb, mobile-first lg:12-column
  grid, success banner with aria-live, inline form validation

Modified:
- docs/PROJECT_STATUS.md — Agent-08 phase and completion recorded
- docs/AGENT_LOG.md — Agent-08 execution log added
- docs/CHANGELOG.md — v1.2.0 entry added

Features:
- Mobile-first responsive layout (single column → lg:12-column grid)
- Cascading dropdowns: Division → District → Upazila (resets child on parent change)
- Phone validation: Bangladesh format (01XXXXXXXXX / +8801XXXXXXXXX)
- Email validation (optional field)
- Delivery method dynamically updates order summary total
- Free shipping applied above ৳২,০০০ threshold (from existing CartContext)
- Coupon discount carried over from CartContext into checkout summary
- Place Order button: loading (1.5s simulated), success state, aria-busy
- All interactive elements: aria-label, aria-checked, role="radiogroup"
- No hardcoded colors — all design tokens (text-brand, bg-brand, border-border, etc.)
- No new packages installed
- UI-only payment method (no gateway integration)

Quality:
- Build: PASS (Next.js 16.2.12, Turbopack, 6/6 static pages including /checkout)
- TypeScript: PASS (0 errors)
- Lint: PASS (0 errors, 0 warnings)

v1.1.1

Agent-07 final production audit — Cart-only audit.

Issues Found and Fixed:
1. CartItemCard.tsx: removed direct useCart() call — unnecessary context subscription
   per cart item. Refactored to accept onRemove and onQuantityChange as props.
   CartPage passes callbacks; CartItemCard no longer subscribes to context.
   (Performance fix — reduces context fan-out)

2. cart/page.tsx: breadcrumb current-page span missing aria-current="page".
   Added aria-current="page" to শপিং কার্ট breadcrumb span.
   (Accessibility fix — WCAG 2.1 SC 1.3.1 compliance)

3. CartItemCard.tsx: discount badge span missing aria-hidden="true".
   Screen readers would announce badge text redundantly alongside price.
   Added aria-hidden="true" to discount badge.
   (Accessibility fix)

4. QuantityStepper.tsx: removed redundant gap-0 class (flex default is no gap).
   (Code cleanliness fix)

No other issues found across all 7 audit categories.

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)

v1.1.0

Shopping Cart Page completed by Agent-07.

New files:
- src/types/cart.ts — CartItem, CartCoupon, CartContextValue TypeScript interfaces
- src/constants/cart.ts — VALID_COUPONS (3 codes), FREE_SHIPPING_THRESHOLD, SHIPPING_FEE constants
- src/utils/price.ts — parseBanglaPrice() and formatBanglaPrice() Bengali numeral utilities
- src/context/CartContext.tsx — CartProvider + useCart() with full state management
- src/components/cart/QuantityStepper.tsx — reusable accessible quantity stepper (min/max enforced)
- src/components/cart/RemoveItemButton.tsx — reusable remove item button with aria-label
- src/components/cart/CartItemCard.tsx — cart item card (image, size/color, qty, line total, remove)
- src/components/cart/CouponCodeBox.tsx — coupon code input with validation and success state
- src/components/cart/OrderSummaryCard.tsx — dynamic order summary (subtotal, coupon, shipping, total)
- src/components/cart/ShippingInfoBox.tsx — shipping info (free threshold, fee, return policy)
- src/components/cart/EstimatedDelivery.tsx — delivery timeline (Dhaka 2-3 days, outside 3-5 days)
- src/components/cart/EmptyCartState.tsx — empty cart state with continue shopping link
- src/app/cart/page.tsx — /cart route; shows EmptyCartState or full cart layout

Modified:
- src/app/layout.tsx — wrapped with CartProvider; SiteHeader and SiteFooter inside provider
- docs/PROJECT_STATUS.md — Agent-07 phase and completion recorded
- docs/AGENT_LOG.md — Agent-07 execution log added
- docs/CHANGELOG.md — v1.1.0 entry added

Features:
- Mobile-first responsive layout (single column → lg:12-column grid)
- Three valid coupon codes: NEWUSER (10%), EIDMUBARAK (15%), FASHIONBD (20%)
- Free shipping above ৳২,০০০; ৳১২০ below threshold
- Dynamic totals: subtotal, coupon discount, shipping fee, grand total
- Savings callout when discount applied
- Demo cart pre-populated with 3 items from FEATURED_PRODUCTS
- All interactive elements have aria-label, aria-live, aria-invalid, role attributes
- No hardcoded colors — all design tokens used
- No new packages installed

Quality:
- Build: PASS (Next.js 16.2.12, Turbopack, 5/5 static pages)
- TypeScript: PASS (0 errors)
- Lint: PASS (0 errors, 0 warnings)

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

v1.0.2

Agent-06 Recovery & Verification — full project verification.

Verified:
- All sections from Agent-01 through Agent-05 confirmed present and functional
- ProductDetailsPreview.tsx verified: Gallery, Thumbnails, Size Selector, Color Selector,
  Quantity Selector, Buy Now, Add To Cart, Product Information, Guarantee Bar, Responsive Layout

Build Check Results:
- npm install — PASS
- npm run build — PASS (Next.js 16.2.12, Turbopack, 4/4 static pages)
- npm run type-check — PASS (0 errors)
- npm run lint — PASS (0 errors, 0 warnings)

Issues Found: None
Code Changes: None (verification only)

Modified docs:
- docs/PROJECT_STATUS.md — Agent-06 verification status recorded
- docs/AGENT_LOG.md — Agent-06 log entry added
- docs/CHANGELOG.md — v1.0.2 entry added

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)

v1.0.3

Agent-06 final production audit — full 20-category audit of entire codebase.

Issues Found and Fixed:
1. AnnouncementBar.tsx: 4 decorative icons (ShieldCheck, RefreshCw, Truck, Lock)
   missing aria-hidden="true" — added to all 4 icons.
   (Accessibility fix — screen readers no longer announce decorative icons)

2. layout.tsx: <body> className "bg-gray-50" hardcoded, overriding design token.
   @layer base { body { @apply bg-background } } was being overridden by the
   utility class bg-gray-50 (utility classes win over base layer in Tailwind).
   Fixed: bg-gray-50 → bg-background.
   (Design system fix — body now correctly uses the bg-background design token)

No other production issues found across all 20 audit categories.

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)

v1.0.4

Agent-06 repository health check — 13-point final verification.

Health Check Results:
1. Merge Conflicts — NONE
2. Duplicate Files — NONE
3. Duplicate Components — NONE
4. Broken Imports — NONE (all @/ aliases resolve; build passes)
5. Circular Imports — NONE (all relative imports are strictly parent → child)
6. Unused Dependencies — NONE (react-dom: no direct src import expected in Next.js App Router)
7. Missing Dependencies — NONE
8. Empty Folders — 15 folders with .gitkeep (intentional enterprise scaffold per FOLDER_STRUCTURE.md)
9. Invalid Routes — NONE (single valid route: /)
10. Duplicate Documentation — NONE (8 unique docs files)
11. Docs Synchronized — YES (PROJECT_STATUS.md, AGENT_LOG.md, CHANGELOG.md all current)
12. Working Tree Clean — YES (nothing to commit, up to date with origin/main)
13. Agent-07 Ready — YES

No source code changes required.

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)
