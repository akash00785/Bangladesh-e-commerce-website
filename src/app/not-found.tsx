import Link from "next/link";
import { Home, SearchX } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center"
      aria-label="৪০৪ পেজ পাওয়া যায়নি"
    >
      {/* Icon */}
      <div
        aria-hidden="true"
        className="mb-8 flex size-28 items-center justify-center rounded-full bg-muted sm:size-32"
      >
        <SearchX className="size-12 text-muted-foreground sm:size-14" />
      </div>

      {/* Error Code */}
      <p className="mb-2 text-7xl font-extrabold tracking-tight text-brand sm:text-8xl">
        ৪০৪
      </p>

      {/* Title */}
      <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
        পেজটি খুঁজে পাওয়া যায়নি
      </h1>

      {/* Description */}
      <p className="mb-10 max-w-sm text-sm leading-relaxed text-muted-foreground sm:max-w-md sm:text-base">
        আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, নাম পরিবর্তন হয়েছে, অথবা
        সাময়িকভাবে পাওয়া যাচ্ছে না।
      </p>

      {/* CTA */}
      <Link
        href="/"
        aria-label="হোম পেজে ফিরে যান"
        className={buttonVariants({
          className:
            "gap-2 bg-brand px-6 py-2 text-brand-foreground hover:bg-brand/90",
          size: "lg",
        })}
      >
        <Home aria-hidden="true" className="size-4" />
        হোম পেজে ফিরুন
      </Link>
    </main>
  );
}
