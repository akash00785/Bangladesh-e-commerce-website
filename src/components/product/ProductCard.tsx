"use client";

import Image from "next/image";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.namebn}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <span className="absolute left-2.5 top-2.5 rounded-full bg-sale px-2.5 py-1 text-[10px] font-bold text-sale-foreground shadow-sm sm:left-3 sm:top-3 sm:text-xs">
          {product.discount}
        </span>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={
            isWishlisted
              ? `${product.namebn} উইশলিস্ট থেকে সরান`
              : `${product.namebn} উইশলিস্টে যোগ করুন`
          }
          aria-pressed={isWishlisted}
          onClick={() => setIsWishlisted((value) => !value)}
          className="absolute right-2.5 top-2.5 size-8 rounded-full bg-card/90 text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-card hover:text-brand sm:right-3 sm:top-3"
        >
          <Heart
            aria-hidden="true"
            className={isWishlisted ? "fill-brand text-brand" : ""}
          />
        </Button>

        <Button
          type="button"
          variant="secondary"
          size="sm"
          aria-label={`${product.namebn} দ্রুত দেখুন`}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-3 gap-1.5 rounded-full bg-card/95 px-3 text-xs text-foreground opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-card group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Eye aria-hidden="true" />
          দ্রুত দেখুন
        </Button>
      </div>

      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {product.brand}
          </span>
          <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground">
            <Star aria-hidden="true" className="size-3.5 fill-sale text-sale" />
            {product.rating}
            <span>({product.reviewCount})</span>
          </span>
        </div>

        <h3 className="line-clamp-2 min-h-11 text-sm font-bold leading-5 text-foreground transition-colors duration-200 group-hover:text-brand sm:text-base">
          {product.namebn}
        </h3>

        <div className="mt-2.5 flex items-end gap-2">
          <span className="text-base font-extrabold text-brand sm:text-lg">
            {product.currentPrice}
          </span>
          <span className="text-xs text-muted-foreground line-through sm:text-sm">
            {product.oldPrice}
          </span>
        </div>

        <Button
          type="button"
          variant="default"
          className="mt-3 w-full gap-1.5 bg-brand text-brand-foreground shadow-sm hover:bg-brand/90"
          aria-label={`${product.namebn} কার্টে যোগ করুন`}
        >
          <ShoppingCart aria-hidden="true" />
          <span className="text-xs sm:text-sm">কার্টে যোগ করুন</span>
        </Button>
      </div>
    </article>
  );
}