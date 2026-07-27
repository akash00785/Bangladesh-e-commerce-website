"use client";

import { CreditCard } from "lucide-react";
import type { PaymentMethod } from "@/types/checkout";
import { PAYMENT_OPTIONS } from "@/constants/checkout";
import { cn } from "@/lib/utils";

interface PaymentMethodSelectorProps {
  selected: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
}

export default function PaymentMethodSelector({
  selected,
  onChange,
}: PaymentMethodSelectorProps) {
  return (
    <section
      aria-label="পেমেন্ট পদ্ধতি"
      className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
    >
      <div className="mb-4 flex items-center gap-2">
        <CreditCard aria-hidden="true" className="size-4 text-brand" />
        <h2 className="text-sm font-bold text-foreground">পেমেন্ট পদ্ধতি</h2>
      </div>

      <div
        role="radiogroup"
        aria-label="পেমেন্ট পদ্ধতি নির্বাচন করুন"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {PAYMENT_OPTIONS.map((option) => {
          const isSelected = selected === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={option.label}
              onClick={() => onChange(option.id)}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-3 text-left transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50",
                isSelected
                  ? "border-brand bg-brand/5"
                  : "border-border bg-background hover:border-brand/40 hover:bg-muted/50",
              )}
            >
              {/* Radio indicator */}
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  isSelected
                    ? "border-brand bg-brand"
                    : "border-muted-foreground bg-background",
                )}
              >
                {isSelected && (
                  <span className="size-1.5 rounded-full bg-brand-foreground" />
                )}
              </span>

              {/* Emoji icon */}
              <span aria-hidden="true" className="text-xl leading-none mt-0.5">
                {option.icon}
              </span>

              {/* Info */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <span
                  className={cn(
                    "text-sm font-semibold",
                    isSelected ? "text-brand" : "text-foreground",
                  )}
                >
                  {option.label}
                </span>
                <span className="text-xs text-muted-foreground leading-snug">
                  {option.description}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* UI-only note */}
      <p className="mt-3 rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground">
        💡 পেমেন্ট গেটওয়ে ইন্টিগ্রেশন শীঘ্রই আসছে। এটি শুধুমাত্র UI প্রিভিউ।
      </p>
    </section>
  );
}
