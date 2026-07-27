"use client";

import { Truck, Zap } from "lucide-react";
import type { DeliveryMethod } from "@/types/checkout";
import { DELIVERY_OPTIONS } from "@/constants/checkout";
import { formatBanglaPrice } from "@/utils/price";
import { cn } from "@/lib/utils";

interface DeliveryMethodSelectorProps {
  selected: DeliveryMethod;
  onChange: (method: DeliveryMethod) => void;
}

const DELIVERY_ICONS: Record<DeliveryMethod, React.ReactNode> = {
  home: <Truck aria-hidden="true" className="size-5 shrink-0" />,
  express: <Zap aria-hidden="true" className="size-5 shrink-0" />,
};

export default function DeliveryMethodSelector({
  selected,
  onChange,
}: DeliveryMethodSelectorProps) {
  return (
    <section
      aria-label="ডেলিভারি পদ্ধতি"
      className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
    >
      <div className="mb-4 flex items-center gap-2">
        <Truck aria-hidden="true" className="size-4 text-brand" />
        <h2 className="text-sm font-bold text-foreground">ডেলিভারি পদ্ধতি</h2>
      </div>

      <div
        role="radiogroup"
        aria-label="ডেলিভারি পদ্ধতি নির্বাচন করুন"
        className="flex flex-col gap-3"
      >
        {DELIVERY_OPTIONS.map((option) => {
          const isSelected = selected === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={`${option.label} — ${option.duration} — ${formatBanglaPrice(option.fee)}`}
              onClick={() => onChange(option.id)}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-all",
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

              {/* Icon */}
              <span
                className={cn(
                  "mt-0.5 transition-colors",
                  isSelected ? "text-brand" : "text-muted-foreground",
                )}
              >
                {DELIVERY_ICONS[option.id]}
              </span>

              {/* Info */}
              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      isSelected ? "text-foreground" : "text-foreground",
                    )}
                  >
                    {option.label}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 text-sm font-bold",
                      isSelected ? "text-brand" : "text-foreground",
                    )}
                  >
                    {formatBanglaPrice(option.fee)}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {option.description}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
