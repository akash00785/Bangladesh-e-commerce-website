import { FEATURED_PRODUCTS } from "@/constants/products";
import ProductGrid from "@/components/product/ProductGrid";

export default function FeaturedProducts() {
  return (
    <section
      aria-labelledby="featured-products-heading"
      className="w-full bg-background px-4 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Fashion Bazar selection
            </p>
            <h2
              id="featured-products-heading"
              className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
            >
              ফিচার্ড প্রোডাক্ট
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              আপনার স্টাইলের জন্য বেছে নেওয়া সেরা পণ্য
            </p>
          </div>
          <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 text-xs font-semibold text-brand">
            ৮টি পছন্দের পণ্য
          </span>
        </div>

        <ProductGrid products={FEATURED_PRODUCTS} />
      </div>
    </section>
  );
}