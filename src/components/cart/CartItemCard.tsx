"use client";

import Image from "next/image";
import type { CartItem } from "@/types/cart";
import QuantityStepper from "@/components/cart/QuantityStepper";
import RemoveItemButton from "@/components/cart/RemoveItemButton";
import { formatBanglaPrice, parseBanglaPrice } from "@/utils/price";

interface CartItemCardProps {
  item: CartItem;
  onRemove: () => void;
  onQuantityChange: (qty: number) => void;
}

export default function CartItemCard({
  item,
  onRemove,
  onQuantityChange,
}: CartItemCardProps) {
  const unitPrice = parseBanglaPrice(item.currentPrice);
  const lineTotal = formatBanglaPrice(unitPrice * item.quantity);

  return (
    <article
      aria-label={`কার্ট আইটেম: ${item.namebn}`}
      className="flex gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm sm:gap-4 sm:p-4"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] w-20 shrink-0 overflow-hidden rounded-xl bg-muted sm:w-24">
        <Image
          src={item.image}
          alt={item.namebn}
          fill
          sizes="(max-width: 640px) 80px, 96px"
          className="object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute left-1.5 top-1.5 rounded-full bg-sale px-1.5 py-0.5 text-[9px] font-bold text-sale-foreground sm:text-[10px]"
        >
          {item.discount}
        </span>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {/* Top row: name + remove */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs">
              {item.brand}
            </p>
            <h3 className="line-clamp-2 text-sm font-bold leading-5 text-foreground sm:text-base">
              {item.namebn}
            </h3>
          </div>
          <RemoveItemButton productName={item.namebn} onRemove={onRemove} />
        </div>

        {/* Size & Color */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-md border border-border bg-muted px-2 py-0.5 font-medium">
            সাইজ: {item.selectedSize}
          </span>
          <span className="rounded-md border border-border bg-muted px-2 py-0.5 font-medium">
            রঙ: {item.selectedColor}
          </span>
        </div>

        {/* Bottom row: price + qty */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-base font-extrabold text-brand sm:text-lg">
              {lineTotal}
            </span>
            {item.quantity > 1 && (
              <span className="text-[11px] text-muted-foreground">
                {item.currentPrice} × {item.quantity}
              </span>
            )}
            <span className="text-xs text-muted-foreground line-through">
              {formatBanglaPrice(
                parseBanglaPrice(item.oldPrice) * item.quantity,
              )}
            </span>
          </div>
          <QuantityStepper
            value={item.quantity}
            onChange={onQuantityChange}
            productName={item.namebn}
          />
        </div>
      </div>
    </article>
  );
}
