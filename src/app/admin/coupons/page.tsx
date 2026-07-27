import type { Metadata } from "next";
import { Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "কুপন — অ্যাডমিন — Fashion Bazar",
  description: "Fashion Bazar অ্যাডমিন প্যানেল — কুপন ব্যবস্থাপনা।",
};

export default function CouponsPage() {
  return (
    <section className="px-4 py-8 sm:py-10 lg:px-0">
      <div className="mb-6">
        <p className="mb-1 text-sm font-semibold text-brand">অ্যাডমিন প্যানেল</p>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          কুপন ম্যানেজমেন্ট
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-16 text-center shadow-sm">
        <Tag
          aria-hidden="true"
          className="mb-4 size-12 text-muted-foreground"
        />
        <p className="text-base font-semibold text-foreground">
          শীঘ্রই আসছে
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          কুপন ম্যানেজমেন্ট UI শীঘ্রই যোগ করা হবে।
        </p>
      </div>
    </section>
  );
}
