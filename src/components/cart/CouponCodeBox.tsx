"use client";

import { useState } from "react";
import { Tag, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { VALID_COUPONS } from "@/constants/cart";

export default function CouponCodeBox() {
  const { appliedCoupon, applyCoupon } = useCart();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleApply() {
    const code = inputValue.trim().toUpperCase();
    if (!code) {
      setError("কুপন কোড লিখুন।");
      return;
    }
    const found = VALID_COUPONS[code];
    if (!found) {
      setError("অবৈধ কুপন কোড। আবার চেষ্টা করুন।");
      return;
    }
    applyCoupon(found);
    setError(null);
    setInputValue("");
  }

  function handleRemove() {
    applyCoupon(null);
    setError(null);
    setInputValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleApply();
  }

  return (
    <section
      aria-label="কুপন কোড"
      className="rounded-2xl border border-border bg-card p-4 shadow-sm"
    >
      <div className="mb-3 flex items-center gap-2">
        <Tag aria-hidden="true" className="size-4 text-brand" />
        <h2 className="text-sm font-bold text-foreground">কুপন কোড</h2>
      </div>

      {appliedCoupon ? (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center justify-between rounded-xl bg-brand/10 px-3 py-2.5"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2
              aria-hidden="true"
              className="size-4 shrink-0 text-brand"
            />
            <div>
              <p className="text-xs font-bold text-brand">
                {appliedCoupon.code}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {appliedCoupon.label}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="কুপন সরান"
            onClick={handleRemove}
            className="size-7 text-muted-foreground hover:text-destructive"
          >
            <X aria-hidden="true" className="size-3.5" />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setError(null);
              }}
              onKeyDown={handleKeyDown}
              aria-label="কুপন কোড লিখুন"
              aria-describedby={error ? "coupon-error" : undefined}
              aria-invalid={!!error}
              placeholder="যেমন: NEWUSER"
              className="flex-1 rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button
              type="button"
              onClick={handleApply}
              aria-label="কুপন কোড প্রয়োগ করুন"
              className="shrink-0 bg-brand px-4 text-sm text-brand-foreground hover:bg-brand/90"
            >
              প্রয়োগ
            </Button>
          </div>
          {error && (
            <p
              id="coupon-error"
              role="alert"
              className="text-xs text-destructive"
            >
              {error}
            </p>
          )}
          <p className="text-[11px] text-muted-foreground">
            পরীক্ষার জন্য: NEWUSER, EIDMUBARAK, FASHIONBD
          </p>
        </div>
      )}
    </section>
  );
}
