"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_WISHLIST_ITEMS } from "@/constants/account";
import type { WishlistItem } from "@/types/account";

const AVATAR_COLORS = [
  "bg-brand/20 text-brand",
  "bg-sale/20 text-sale",
  "bg-muted text-muted-foreground",
  "bg-secondary text-secondary-foreground",
];

function WishlistCard({
  item,
  colorClass,
  onRemove,
  onMoveToCart,
}: {
  item: WishlistItem;
  colorClass: string;
  onRemove: (id: string) => void;
  onMoveToCart: (id: string) => void;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      {/* Product image placeholder */}
      <div
        className={`relative flex h-44 items-center justify-center text-5xl font-bold ${colorClass}`}
        aria-hidden="true"
      >
        {item.initial}
        {!item.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/70">
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
              স্টকে নেই
            </span>
          </div>
        )}
        {item.discount && item.inStock && (
          <span
            aria-hidden="true"
            className="absolute right-3 top-3 rounded-full bg-sale px-2 py-0.5 text-xs font-bold text-sale-foreground"
          >
            -{item.discount}
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-medium text-muted-foreground">{item.category}</p>
        <h3 className="line-clamp-2 text-sm font-semibold text-foreground">{item.name}</h3>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-bold text-foreground">{item.price}</span>
          {item.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {item.originalPrice}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Button
            variant="default"
            size="sm"
            className="w-full gap-1.5 bg-brand text-brand-foreground hover:bg-brand/90"
            disabled={!item.inStock}
            onClick={() => onMoveToCart(item.id)}
            aria-label={`${item.name} কার্টে যোগ করুন`}
          >
            <ShoppingCart aria-hidden="true" className="size-3.5" />
            {item.inStock ? "কার্টে যোগ করুন" : "স্টকে নেই"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full gap-1.5 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={() => onRemove(item.id)}
            aria-label={`${item.name} উইশলিস্ট থেকে মুছুন`}
          >
            <Trash2 aria-hidden="true" className="size-3.5" />
            মুছে ফেলুন
          </Button>
        </div>
      </div>
    </article>
  );
}

function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card py-16 text-center">
      <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
        <Heart aria-hidden="true" className="size-8 text-muted-foreground" />
      </div>
      <h2 className="mb-2 text-lg font-bold text-foreground">উইশলিস্ট খালি</h2>
      <p className="mb-6 max-w-xs text-sm text-muted-foreground">
        আপনি এখনো কোনো পণ্য উইশলিস্টে যোগ করেননি। পছন্দের পণ্য যোগ করুন।
      </p>
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => (window.location.href = "/")}
      >
        পণ্য দেখুন
      </Button>
    </div>
  );
}

export default function WishlistPage() {
  const [items, setItems] = useState<WishlistItem[]>(MOCK_WISHLIST_ITEMS);

  function handleRemove(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleMoveToCart(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <section className="px-4 py-8 sm:py-10 lg:px-0">
      <div className="mb-6">
        <p className="mb-1 text-sm font-semibold text-brand">আমার অ্যাকাউন্ট</p>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">উইশলিস্ট</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          আপনার পছন্দের পণ্যগুলো এখানে সেভ করা আছে।
        </p>
      </div>

      {items.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <>
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              মোট{" "}
              <span className="font-semibold text-foreground">{items.length}টি</span>{" "}
              পণ্য
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <WishlistCard
                key={item.id}
                item={item}
                colorClass={AVATAR_COLORS[index % AVATAR_COLORS.length]}
                onRemove={handleRemove}
                onMoveToCart={handleMoveToCart}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
