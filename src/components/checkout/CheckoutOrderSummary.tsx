"use client";

import Image from "next/image";
import { ShoppingBag, Package } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatBanglaPrice } from "@/utils/price";
import { FREE_SHIPPING_THRESHOLD } from "@/constants/cart";
import type { DeliveryMethod } from "@/types/checkout";
import { DELIVERY_OPTIONS } from "@/constants/checkout";

interface CheckoutOrderSummaryProps {
  deliveryMethod: DeliveryMethod;
}

export default function CheckoutOrderSummary({
  deliveryMethod,
}: CheckoutOrderSummaryProps) {
  const { items, appliedCoupon, subtotal, itemCount } = useCart();

  const discountAmount = appliedCoupon
    ? Math.round((subtotal * appliedCoupon.discountPercent) / 100)
    : 0;

  const discountedSubtotal = subtotal - discountAmount;

  const selectedDelivery = DELIVERY_OPTIONS.find(
    (opt) => opt.id === deliveryMethod,
  );
  const deliveryFee =
    discountedSubtotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : (selectedDelivery?.fee ?? 120);

  const total = discountedSubtotal + deliveryFee;

  return (
    <section
      aria-label="অর্ডার সারসংক্ষেপ"
      className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
    >
      <div className="mb-4 flex items-center gap-2">
        <ShoppingBag aria-hidden="true" className="size-4 text-brand" />
        <h2 className="text-sm font-bold text-foreground">
          অর্ডার সারসংক্ষেপ
        </h2>
      </div>

      {/* Product list */}
      {items.length > 0 ? (
        <ul aria-label="কার্টের পণ্যসমূহ" className="flex flex-col gap-3 mb-4">
          {items.map((item) => (
            <li
              key={item.cartItemId}
              className="flex items-start gap-3"
            >
              <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-border bg-muted">
                <Image
                  src={item.image}
                  alt={item.namebn}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
                {/* Quantity badge */}
                <span
                  aria-label={`পরিমাণ: ${item.quantity}`}
                  className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground"
                >
                  {item.quantity}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <p className="truncate text-sm font-medium text-foreground">
                  {item.namebn}
                </p>
                <p className="text-xs text-muted-foreground">
                  সাইজ: {item.selectedSize} · রঙ: {item.selectedColor}
                </p>
                <p className="text-sm font-semibold text-brand">
                  {item.currentPrice}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mb-4 flex flex-col items-center gap-2 py-4 text-center">
          <Package aria-hidden="true" className="size-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">কার্ট খালি আছে</p>
        </div>
      )}

      <div
        role="separator"
        aria-hidden="true"
        className="mb-4 h-px bg-border"
      />

      {/* Totals */}
      <dl className="flex flex-col gap-2.5 text-sm">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">
            পণ্যমূল্য ({itemCount}টি)
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

        {/* Delivery charge */}
        <div className="flex items-center justify-between">
          <dt className="text-muted-foreground">ডেলিভারি চার্জ</dt>
          <dd
            className={
              deliveryFee === 0
                ? "font-semibold text-brand"
                : "font-semibold text-foreground"
            }
          >
            {deliveryFee === 0
              ? "বিনামূল্যে"
              : formatBanglaPrice(deliveryFee)}
          </dd>
        </div>

        {/* Savings callout */}
        {discountAmount > 0 && (
          <div className="rounded-xl bg-brand/10 px-3 py-2 text-center text-xs font-semibold text-brand">
            আপনি {formatBanglaPrice(discountAmount)} সাশ্রয় করেছেন 🎉
          </div>
        )}

        <div
          role="separator"
          aria-hidden="true"
          className="h-px bg-border"
        />

        {/* Grand total */}
        <div className="flex items-center justify-between">
          <dt className="text-base font-bold text-foreground">সর্বমোট</dt>
          <dd className="text-lg font-extrabold text-brand">
            {formatBanglaPrice(total)}
          </dd>
        </div>
      </dl>
    </section>
  );
}
