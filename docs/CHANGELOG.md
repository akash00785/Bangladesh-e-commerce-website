# CHANGELOG — Version history and list of changes made across all project phases.

v1.4.1

Agent-10 Final Production Audit — User Dashboard module-only audit.

Issues Found and Fixed:

1. WishlistPage.tsx: EmptyWishlist used window.location.href = "/" inside onClick.
   Causes full page reload in Next.js, bypassing the router and losing client state.
   Fixed: replaced with styled <Link href="/"> (next/link client-side navigation).
   (Next.js anti-pattern fix)

2. ProfilePage.tsx: <select id="gender"> had aria-label="লিঙ্গ নির্বাচন করুন"
   alongside a linked <label htmlFor="gender"> from FieldWrapper.
   aria-label overrides the programmatically linked label for screen readers,
   violating WCAG 2.1 SC 1.3.1.
   Fixed: removed aria-label from select; FieldWrapper label is correct and sufficient.
   (Accessibility fix — WCAG 2.1 SC 1.3.1)

3. AccountDashboard.tsx: "সব দেখুন" link used href="/orders" — non-existent route.
   Order history page lives at /account/orders.
   Fixed: href="/orders" → href="/account/orders".
   (Broken link fix)

No other issues across 10 audit categories:
✔ Hardcoded colors: 0 found
✔ Duplicate components: 0 found
✔ Unused imports/variables/types: 0 found
✔ console.log/TODO/FIXME: 0 found
✔ Broken imports: 0 found
✔ Unnecessary re-renders: 0 found
✔ Active sidebar: usePathname + aria-current="page" verified
✔ Responsive: mobile tab bar → sm:2-col → lg:sidebar verified

Build: PASS | TypeScript: PASS | Lint: PASS (0 errors, 0 warnings)

v1.4.0

Agent-10 — User Account Dashboard Expansion.

New routes:
- `/account/orders` — Full order history page with order cards
- `/account/wishlist` — Wishlist page with product grid and actions
- `/account/addresses` — Saved addresses page with management UI
- `/account/profile` — Profile page with editable personal information

New files:
- `src/app/account/layout.tsx` — Account layout with sidebar navigation (desktop + mobile)
- `src/components/account/AccountSidebar.tsx` — Sidebar/tab navigation (client component, usePathname for active state)
- `src/components/account/OrderHistoryPage.tsx` — Order history with order cards (ID, date, status badge, total, View Details button)
- `src/components/account/WishlistPage.tsx` — Wishlist with product grid, Remove, Move to Cart, and Empty State
- `src/components/account/AddressesPage.tsx` — Address cards with Default badge, Add, Edit, Delete buttons
- `src/components/account/ProfilePage.tsx` — Profile avatar, Personal info form, Edit/Save/Cancel flow, Stats summary

Modified files:
- `src/types/account.ts` — Added `WishlistItem` interface; added optional `itemCount` to `AccountOrder`
- `src/constants/account.ts` — Added `MOCK_ALL_ORDERS` (6 orders), `MOCK_WISHLIST_ITEMS` (6 items), extended `MOCK_SAVED_ADDRESSES` (3 addresses)
- `docs/PROJECT_STATUS.md` — Agent-10 phase and completion recorded
- `docs/AGENT_LOG.md` — Agent-10 execution log added
- `docs/CHANGELOG.md` — v1.4.0 entry added

Features:
- Sidebar navigation: Dashboard / Orders / Wishlist / Addresses / Profile / Logout (UI only)
- Mobile: horizontal scrollable tab bar; Desktop: sticky vertical sidebar with user info
- Active route highlighting via usePathname
- Order History: cards with order ID, date, item summary, item count, total, status badge (brand/sale/muted tone), View Details button
- Wishlist: 6 mock items with price, discount badge, inStock state, Remove and Move to Cart buttons, Empty State
- Addresses: 3 mock addresses with Default badge, Edit button (UI only), Delete button (disables for default address), Empty State
- Profile: avatar with initials, camera button placeholder, editable form (name, phone, email, gender, dob), Save/Cancel flow, success banner, stats summary
- All design tokens used — no hardcoded colors
- Mobile-first responsive layout throughout
- No new packages installed
- No backend, API, database, OTP, Firebase, JWT, or authentication logic

Validation:
- Build: PASS (Next.js 16.2.12, Turbopack, 14/14 static pages)
- TypeScript: PASS (0 errors)
- Lint: PASS (0 errors, 0 warnings)

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
- src/components/cart/EmptyCartState.tsx — empty cart illustration + CTA
- src/app/cart/page.tsx — /cart route; breadcrumb, responsive 1-col → lg:2-col grid

v1.0.0

Initial release — Home page, Header, Footer, and core product sections completed.
