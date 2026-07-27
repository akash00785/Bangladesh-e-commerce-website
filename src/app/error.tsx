"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Error is already captured by Next.js error boundary
    // No console.error needed — Next.js handles logging internally
    void error;
  }, [error]);

  return (
    <main
      className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center"
      aria-live="assertive"
      aria-label="একটি সমস্যা হয়েছে"
    >
      {/* Icon */}
      <div
        aria-hidden="true"
        className="mb-8 flex size-28 items-center justify-center rounded-full bg-destructive/10 sm:size-32"
      >
        <AlertTriangle className="size-12 text-destructive sm:size-14" />
      </div>

      {/* Title */}
      <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
        একটি সমস্যা হয়েছে
      </h1>

      {/* Description */}
      <p className="mb-10 max-w-sm text-sm leading-relaxed text-muted-foreground sm:max-w-md sm:text-base">
        দুঃখিত! কিছু একটা ঠিকমতো কাজ করছে না। অনুগ্রহ করে একটু পরে আবার চেষ্টা
        করুন।
      </p>

      {/* Retry Button */}
      <Button
        onClick={reset}
        aria-label="পুনরায় চেষ্টা করুন"
        className="gap-2 bg-brand px-6 text-brand-foreground hover:bg-brand/90"
        size="lg"
      >
        <RefreshCw aria-hidden="true" className="size-4" />
        পুনরায় চেষ্টা করুন
      </Button>
    </main>
  );
}
