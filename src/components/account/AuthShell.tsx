import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

interface AuthShellProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export default function AuthShell({
  title,
  description,
  children,
  footer,
}: AuthShellProps) {
  return (
    <section className="min-h-[calc(100vh-15rem)] bg-muted/30 px-4 py-10 sm:py-16">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
        <div className="hidden flex-col justify-between bg-brand p-8 text-brand-foreground lg:flex">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span className="rounded-lg bg-brand-foreground/15 p-2">
              <ShoppingBag aria-hidden="true" className="size-5" />
            </span>
            Fashion Bazar
          </Link>
          <div>
            <p className="mb-3 text-sm font-medium text-brand-foreground/70">
              আপনার স্টাইল, আপনার অ্যাকাউন্ট
            </p>
            <h2 className="max-w-xs text-3xl font-bold leading-tight">
              আপনার পছন্দের ফ্যাশন এক জায়গায়।
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-brand-foreground/75">
              অর্ডার ট্র্যাক করুন, ঠিকানা সেভ করুন এবং আপনার শপিং আরও সহজ করে তুলুন।
            </p>
          </div>
          <p className="text-xs text-brand-foreground/55">Fashion Bazar · ২০২৬</p>
        </div>

        <div className="p-5 sm:p-8 lg:p-10">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand lg:hidden"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            শপিংয়ে ফিরে যান
          </Link>
          <div className="mb-7">
            <p className="mb-2 text-sm font-semibold text-brand">Fashion Bazar</p>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h1>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
          </div>
          {children}
          <div className="mt-7 border-t border-border pt-5 text-center text-sm text-muted-foreground">
            {footer}
          </div>
        </div>
      </div>
    </section>
  );
}