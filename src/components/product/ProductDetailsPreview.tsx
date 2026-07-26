import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star, Truck, RefreshCw, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FEATURED_PRODUCTS } from "@/constants/products";

const SIZES = ["S", "M", "L", "XL", "XXL"] as const;
const COLORS = [
  { value: "#1a1a1a", label: "কালো" },
  { value: "#8B4513", label: "বাদামি" },
  { value: "#2c4a7c", label: "নীল" },
  { value: "#4a7c4a", label: "সবুজ" },
  { value: "#7c4a2c", label: "মেরুন" },
] as const;

const GUARANTEES = [
  { id: "delivery", icon: Truck, label: "ফ্রি ডেলিভারি", sub: "৳৮০০+ অর্ডারে" },
  { id: "return", icon: RefreshCw, label: "সহজ রিটার্ন", sub: "৭ দিনের মধ্যে" },
  { id: "secure", icon: Shield, label: "নিরাপদ পেমেন্ট", sub: "১০০% নিশ্চিত" },
] as const;

const product = FEATURED_PRODUCTS[0];

export default function ProductDetailsPreview() {
  return (
    <section
      aria-labelledby="product-details-heading"
      className="w-full bg-background px-4 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-brand">
            পণ্যের বিস্তারিত
          </p>
          <h2
            id="product-details-heading"
            className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            পণ্য পর্যালোচনা
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            প্রতিটি পণ্যের বিস্তারিত তথ্য দেখুন
          </p>
        </div>

        {/* Product detail card */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            {/* Images column */}
            <div className="relative aspect-square bg-muted lg:aspect-auto lg:min-h-[560px]">
              <Image
                src={product.image}
                alt={product.namebn}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
              {/* Discount badge */}
              <span className="absolute left-4 top-4 rounded-full bg-sale px-3 py-1.5 text-xs font-bold text-sale-foreground shadow">
                {product.discount}
              </span>
              {/* Wishlist button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={`${product.namebn} উইশলিস্টে যোগ করুন`}
                className="absolute right-4 top-4 size-10 rounded-full bg-card/90 text-foreground shadow backdrop-blur-sm hover:bg-card hover:text-brand"
              >
                <Heart aria-hidden="true" />
              </Button>

              {/* Thumbnail strip */}
              <div
                aria-label="পণ্যের ছবি থাম্বনেইল"
                className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2"
              >
                {[product.image, FEATURED_PRODUCTS[1].image, FEATURED_PRODUCTS[2].image].map(
                  (src, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`ছবি ${idx + 1} দেখুন`}
                      className={[
                        "relative size-14 overflow-hidden rounded-xl border-2 shadow-md transition-all",
                        idx === 0
                          ? "border-brand ring-2 ring-brand/30"
                          : "border-card/80 opacity-70 hover:opacity-100",
                      ].join(" ")}
                    >
                      <Image
                        src={src}
                        alt={`পণ্যের ছবি ${idx + 1}`}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Info column */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              {/* Brand & name */}
              <div>
                <p className="mb-1.5 text-xs font-bold uppercase tracking-widest text-brand">
                  {product.brand}
                </p>
                <h3 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
                  {product.namebn}
                </h3>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className="flex items-center gap-1 rounded-full bg-sale/10 px-2.5 py-1 text-xs font-bold text-sale"
                    aria-label={`রেটিং ${product.rating} এর মধ্যে ৫`}
                  >
                    <Star
                      aria-hidden="true"
                      className="size-3.5 fill-sale text-sale"
                    />
                    {product.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviewCount} রিভিউ)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-end gap-3">
                  <span className="text-3xl font-extrabold text-brand">
                    {product.currentPrice}
                  </span>
                  <span className="mb-1 text-base text-muted-foreground line-through">
                    {product.oldPrice}
                  </span>
                  <span className="mb-1 rounded-md bg-sale/10 px-2 py-0.5 text-xs font-bold text-sale">
                    {product.discount}
                  </span>
                </div>

                <p className="mt-1 text-xs text-muted-foreground">
                  মূল্য সংযুক্ত মূল্য করসহ
                </p>

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  উচ্চমানের কটন ফেব্রিক দিয়ে তৈরি এই শার্টটি আপনার প্রতিদিনের
                  পোশাকে এনে দেবে স্টাইল ও আরামের নিখুঁত সমন্বয়। স্লিম ফিট
                  ডিজাইনে তৈরি এই শার্টটি যেকোনো অনুষ্ঠানে পরার উপযুক্ত।
                </p>

                {/* Size selector */}
                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-foreground">
                    সাইজ নির্বাচন করুন
                  </p>
                  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="সাইজ নির্বাচন">
                    {SIZES.map((size, idx) => (
                      <button
                        key={size}
                        type="button"
                        role="radio"
                        aria-checked={idx === 1}
                        className={[
                          "h-10 min-w-10 rounded-xl border-2 px-3 text-sm font-bold transition-all",
                          idx === 1
                            ? "border-brand bg-brand text-brand-foreground shadow-sm"
                            : "border-border bg-card text-foreground hover:border-brand hover:text-brand",
                        ].join(" ")}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color selector */}
                <div className="mt-5">
                  <p className="mb-3 text-sm font-semibold text-foreground">
                    রঙ নির্বাচন করুন
                  </p>
                  <div className="flex gap-2.5" role="radiogroup" aria-label="রঙ নির্বাচন">
                    {COLORS.map(({ value, label }, idx) => (
                      <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={idx === 0}
                        aria-label={`${label} রঙ নির্বাচন করুন`}
                        style={{ backgroundColor: value }}
                        className={[
                          "size-9 rounded-full border-2 transition-all",
                          idx === 0
                            ? "border-brand ring-2 ring-brand/40 ring-offset-2"
                            : "border-border hover:border-brand/50",
                        ].join(" ")}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity + CTA */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity */}
                  <div
                    className="flex items-center rounded-xl border border-border bg-muted"
                    role="group"
                    aria-label="পরিমাণ নির্বাচন"
                  >
                    <button
                      type="button"
                      aria-label="পরিমাণ কমান"
                      className="px-4 py-3 text-lg font-bold text-foreground transition-colors hover:text-brand"
                    >
                      −
                    </button>
                    <span
                      aria-live="polite"
                      aria-atomic="true"
                      className="min-w-8 text-center text-sm font-bold text-foreground"
                    >
                      ১
                    </span>
                    <button
                      type="button"
                      aria-label="পরিমাণ বাড়ান"
                      className="px-4 py-3 text-lg font-bold text-foreground transition-colors hover:text-brand"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to cart */}
                  <Button
                    type="button"
                    className="flex-1 gap-2 bg-brand text-brand-foreground hover:bg-brand/90"
                    aria-label={`${product.namebn} কার্টে যোগ করুন`}
                  >
                    <ShoppingCart aria-hidden="true" className="size-4" />
                    কার্টে যোগ করুন
                  </Button>
                </div>

                {/* Buy now */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-brand text-brand hover:bg-brand hover:text-brand-foreground"
                  aria-label={`${product.namebn} এখনই কিনুন`}
                >
                  এখনই কিনুন
                </Button>

                {/* View full product */}
                <p className="text-center text-xs text-muted-foreground">
                  <Link
                    href={product.href}
                    className="font-semibold text-brand underline underline-offset-2 hover:no-underline"
                  >
                    সম্পূর্ণ বিবরণ দেখুন
                  </Link>
                </p>
              </div>

              {/* Guarantees */}
              <div className="mt-7 grid grid-cols-3 gap-3 rounded-2xl bg-muted/60 p-4">
                {GUARANTEES.map(({ id, icon: Icon, label, sub }) => (
                  <div key={id} className="flex flex-col items-center gap-1.5 text-center">
                    <div className="flex size-9 items-center justify-center rounded-full bg-brand/10">
                      <Icon aria-hidden="true" className="size-4 text-brand" />
                    </div>
                    <span className="text-[11px] font-bold leading-tight text-foreground">
                      {label}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
