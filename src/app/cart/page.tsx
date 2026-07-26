"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import CartItemCard from "@/components/cart/CartItemCard";
import EmptyCartState from "@/components/cart/EmptyCartState";
import CouponCodeBox from "@/components/cart/CouponCodeBox";
import OrderSummaryCard from "@/components/cart/OrderSummaryCard";
import ShippingInfoBox from "@/components/cart/ShippingInfoBox";
import EstimatedDelivery from "@/components/cart/EstimatedDelivery";

export default function CartPage() {
  const { items, itemCount } = useCart();

  if (items.length === 0) {
    return <EmptyCartState />;
  }

  return (
    <section className="min-h-screen bg-background py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="ব্রেডক্রাম্ব"
          className="mb-5 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link
            href="/"
            className="transition-colors hover:text-brand"
            aria-label="হোমে ফিরুন"
          >
            হোম
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-foreground">শপিং কার্ট</span>
        </nav>

        {/* Page heading */}
        <div className="mb-6 flex items-center gap-3">
          <ShoppingCart
            aria-hidden="true"
            className="size-6 shrink-0 text-brand"
          />
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            আমার কার্ট{" "}
            <span className="text-base font-normal text-muted-foreground">
              ({itemCount}টি পণ্য)
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left — Cart items */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {items.map((item) => (
              <CartItemCard key={item.cartItemId} item={item} />
            ))}

            {/* Continue Shopping */}
            <div className="mt-1">
              <Link
                href="/"
                aria-label="কেনাকাটা চালিয়ে যান"
                className={buttonVariants({
                  variant: "ghost",
                  className: "gap-2 text-muted-foreground hover:text-brand",
                })}
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                কেনাকাটা চালিয়ে যান
              </Link>
            </div>
          </div>

          {/* Right — Summary panel */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <CouponCodeBox />
            <OrderSummaryCard />
            <ShippingInfoBox />
            <EstimatedDelivery />
          </div>
        </div>
      </div>
    </section>
  );
}
