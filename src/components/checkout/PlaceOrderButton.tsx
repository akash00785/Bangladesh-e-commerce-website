"use client";

import { ShoppingBag, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceOrderButtonProps {
  loading: boolean;
  success: boolean;
  onPlaceOrder: () => void;
  disabled?: boolean;
}

export default function PlaceOrderButton({
  loading,
  success,
  onPlaceOrder,
  disabled,
}: PlaceOrderButtonProps) {
  return (
    <button
      type="button"
      onClick={onPlaceOrder}
      disabled={disabled || loading || success}
      aria-label={
        success
          ? "অর্ডার সফলভাবে দেওয়া হয়েছে"
          : loading
            ? "অর্ডার প্রক্রিয়া করা হচ্ছে"
            : "অর্ডার দিন"
      }
      aria-busy={loading}
      className={cn(
        "flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3",
        "text-sm font-bold transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50",
        "disabled:cursor-not-allowed disabled:opacity-60",
        success
          ? "bg-brand/20 text-brand"
          : "bg-brand text-brand-foreground shadow-sm hover:bg-brand/90 active:scale-[0.98]",
      )}
    >
      {success ? (
        <>
          <CheckCircle2 aria-hidden="true" className="size-5" />
          অর্ডার সম্পন্ন হয়েছে
        </>
      ) : loading ? (
        <>
          <span
            aria-hidden="true"
            className="size-4 animate-spin rounded-full border-2 border-brand-foreground border-t-transparent"
          />
          প্রক্রিয়া করা হচ্ছে...
        </>
      ) : (
        <>
          <ShoppingBag aria-hidden="true" className="size-5" />
          অর্ডার দিন
        </>
      )}
    </button>
  );
}
