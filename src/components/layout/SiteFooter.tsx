import Link from "next/link";
import { ShoppingBag, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

import { FOOTER_COLUMNS, PAYMENT_METHODS } from "@/constants/footer";

const SOCIAL_LINKS = [
  { id: "facebook", icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { id: "instagram", icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { id: "youtube", icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { id: "twitter", icon: Twitter, label: "Twitter", href: "https://twitter.com" },
] as const;

const PAYMENT_ICON_MAP: Record<string, string> = {
  cod: "💵",
  bkash: "📱",
  nagad: "🌟",
  rocket: "🚀",
};

export default function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer aria-label="সাইট ফুটার" className="w-full bg-foreground text-background">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Fashion Bazar হোমে যান"
              className="inline-flex items-center gap-2.5"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand">
                <ShoppingBag aria-hidden="true" className="size-5 text-brand-foreground" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold text-background">
                  Fashion{" "}
                  <span className="text-brand" style={{ color: "oklch(0.72 0.08 52)" }}>
                    Bazar
                  </span>
                </div>
                <div className="text-[10px] text-background/60">স্টাইল আপনার, বিশ্বাস আমাদের</div>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-background/70">
              বাংলাদেশের সেরা অনলাইন ফ্যাশন ই-কমার্স প্ল্যাটফর্ম। সহজ কেনাকাটা,
              দ্রুত ডেলিভারি, সেরা মানের পণ্য।
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3" aria-label="সোশ্যাল মিডিয়া লিঙ্ক">
              {SOCIAL_LINKS.map(({ id, icon: Icon, label, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} পেজে যান`}
                  className="flex size-9 items-center justify-center rounded-lg bg-background/10 text-background/70 transition-all hover:bg-brand hover:text-brand-foreground"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-6 space-y-1.5 text-xs text-background/60">
              <p>📞 ০১৮০০-০০০-০০০ (সকাল ৯টা — রাত ১০টা)</p>
              <p>✉️ support@fashionbazar.com.bd</p>
              <p>📍 ঢাকা, বাংলাদেশ</p>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.id} aria-labelledby={`footer-col-${col.id}`}>
              <h3
                id={`footer-col-${col.id}`}
                className="mb-4 text-sm font-bold uppercase tracking-widest text-background"
              >
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Payment methods */}
        <div className="mt-12 border-t border-background/10 pt-8">
          <h3 className="mb-5 text-center text-sm font-bold uppercase tracking-widest text-background/80">
            পেমেন্ট পদ্ধতি
          </h3>
          <div
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            aria-label="গ্রহণযোগ্য পেমেন্ট পদ্ধতি"
          >
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.id}
                className="flex items-center gap-3 rounded-xl bg-background/8 px-4 py-3"
              >
                <span
                  aria-hidden="true"
                  className="text-2xl"
                  style={{ fontSize: "1.4rem", lineHeight: 1 }}
                >
                  {PAYMENT_ICON_MAP[method.id]}
                </span>
                <div>
                  <p className="text-xs font-bold text-background">{method.name}</p>
                  <p className="text-[10px] text-background/55">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10 px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-background/50">
            &copy; {currentYear} Fashion Bazar. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            <Link
              href="/privacy"
              className="text-xs text-background/50 transition-colors hover:text-background/80"
            >
              গোপনীয়তা নীতি
            </Link>
            <Link
              href="/terms"
              className="text-xs text-background/50 transition-colors hover:text-background/80"
            >
              শর্তাবলি
            </Link>
            <Link
              href="/sitemap"
              className="text-xs text-background/50 transition-colors hover:text-background/80"
            >
              সাইটম্যাপ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
