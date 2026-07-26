import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function EmptyCartState() {
  return (
    <section
      aria-label="খালি কার্ট"
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <div
        aria-hidden="true"
        className="mb-6 flex size-24 items-center justify-center rounded-full bg-muted sm:size-28"
      >
        <ShoppingCart className="size-10 text-muted-foreground sm:size-12" />
      </div>

      <h1 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">
        আপনার কার্ট খালি
      </h1>
      <p className="mb-8 max-w-xs text-sm text-muted-foreground sm:max-w-sm">
        এখনো কোনো পণ্য কার্টে যোগ করা হয়নি। আমাদের কালেকশন দেখুন এবং পছন্দের পণ্যটি কার্টে যোগ করুন।
      </p>

      <Link
        href="/"
        aria-label="কেনাকাটা শুরু করুন"
        className={buttonVariants({
          className: "gap-2 bg-brand px-6 text-brand-foreground hover:bg-brand/90",
        })}
      >
        কেনাকাটা শুরু করুন
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </section>
  );
}
