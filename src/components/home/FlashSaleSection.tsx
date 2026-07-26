import { FLASH_SALE_PRODUCTS } from "@/constants/products";
import ProductGrid from "@/components/product/ProductGrid";

import SaleCountdown from "./SaleCountdown";

export default function FlashSaleSection() {
  return (
    <section
      aria-labelledby="flash-sale-heading"
      className="w-full bg-muted/50 px-4 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-5 rounded-2xl bg-brand px-5 py-5 text-brand-foreground shadow-lg shadow-brand/15 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex size-2 animate-pulse rounded-full bg-sale-foreground" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                Limited time offer
              </span>
            </div>
            <h2
              id="flash-sale-heading"
              className="text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              ফ্ল্যাশ সেল
            </h2>
            <p className="mt-1.5 text-sm opacity-80 sm:text-base">
              সময় শেষ হওয়ার আগেই পছন্দের পণ্যটি নিয়ে নিন
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-brand-foreground/15 pt-4 sm:border-t-0 sm:pt-0">
            <span className="text-xs font-semibold opacity-80 sm:text-sm">
              অফার শেষ হবে
            </span>
            <SaleCountdown />
          </div>
        </div>

        <ProductGrid products={FLASH_SALE_PRODUCTS} />
      </div>
    </section>
  );
}