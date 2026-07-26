"use client";

import Link from "next/link";
import { ShoppingBag, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatBanglaPrice } from "@/utils/price";
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from "@/constants/cart";

export default function OrderSummaryCard() {
  const { subtotal, appliedCoupon, itemCount } = useCart();

  const discountAmount = appliedCoupon
    ? Math.round((subtotal * appliedCoupon.discountPercent) / 100)
    : 0;

  const discountedSubtotal = subtotal - discountAmount;
  const shippingFee =
    discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = discountedSubtotal + shippingFee;

  const savedTotal = subtotal - discountedSubtotal;

  return (
    <section
      aria-label="অর্ডার সারসংক্ষেপ"
      className="rounded-2xl border border-border bg-card p-4 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-2">
        <ShoppingBag aria-hidden="true" className="size-4 text-brand" />
        <h2 className="text-sm font-bold text-foreground">অর্ডার সারসংক্ষেপ</h2>
      </div>

      <dl className="flex flex-col gap-2.5 text-sm">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">
            মোট ({itemCount}টি পণ্য)
          </dt>
          <dd className="font-semibold text-foreground">
            {formatBanglaPrice(subtotal)}
          </dd>
        </div>

        {/* Coupon discount */}
        {appliedCoupon && discountAmount > 0 && (
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">
              কুপন ছাড় ({appliedCoupon.discountPercent}%)
            </dt>
            <dd className="font-semibold text-brand">
              − {formatBanglaPrice(discountAmount)}
            </dd>
          </div>
        )}

        {/* Shipping */}
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">ডেলিভারি চার্জ</dt>
          <dd
            className={
              shippingFee === 0
                ? "font-semibold text-brand"
                : "font-semibold text-foreground"
            }
          >
            {shippingFee === 0
              ? "বিনামূল্যে"
              : formatBanglaPrice(shippingFee)}
          </dd>
        </div>

        {/* Savings callout */}
        {savedTotal > 0 && (
          <div className="rounded-xl bg-brand/10 px-3 py-2 text-center text-xs font-semibold text-brand">
            আপনি {formatBanglaPrice(savedTotal)} সাশ্রয় করেছেন 🎉
          </div>
        )}

        <div
          role="separator"
          aria-hidden="true"
          className="h-px bg-border"
        />

        {/* Total */}
        <div className="flex items-center justify-between">
          <dt className="text-base font-bold text-foreground">সর্বমোট</dt>
          <dd className="text-lg font-extrabold text-brand">
            {formatBanglaPrice(total)}
          </dd>
        </div>
      </dl>

      {/* Checkout Button */}
      <Link
        href="/checkout"
        aria-label="চেকআউটে যান"
        className={buttonVariants({
          className:
            "mt-5 w-full gap-2 bg-brand text-brand-foreground shadow-sm hover:bg-brand/90",
        })}
      >
        চেকআউট করুন
        <ChevronRight aria-hidden="true" className="size-4" />
      </Link>

      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        নিরাপদ পেমেন্ট — bKash, Nagad, Rocket, COD
      </p>
    </section>
  );
}
