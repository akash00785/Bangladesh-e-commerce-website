"use client";

import { useState } from "react";
import { Search, Plus, Pencil, Trash2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import {
  ADMIN_PRODUCTS,
  CATEGORY_FILTER_OPTIONS,
  PRODUCT_STATUS_FILTER_OPTIONS,
  PRODUCT_STATUS_LABELS,
} from "@/constants/admin";
import type { AdminProduct, AdminStatusTone } from "@/types/admin";
import { cn } from "@/lib/utils";

function productStatusTone(status: AdminProduct["status"]): AdminStatusTone {
  if (status === "active") return "brand";
  if (status === "inactive") return "muted";
  return "destructive";
}

export default function AdminProductsPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = ADMIN_PRODUCTS.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      categoryFilter === "all" || p.category === categoryFilter;
    const matchStatus =
      statusFilter === "all" || p.status === statusFilter;
    return matchSearch && matchCategory && matchStatus;
  });

  return (
    <section className="px-4 py-8 sm:py-10 lg:px-0">
      {/* Page heading */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-sm font-semibold text-brand">অ্যাডমিন প্যানেল</p>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            পণ্য ম্যানেজমেন্ট
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            আপনার স্টোরের সব পণ্য দেখুন ও পরিচালনা করুন।
          </p>
        </div>
        <Button
          type="button"
          aria-label="নতুন পণ্য যোগ করুন"
          className="shrink-0 gap-1.5"
        >
          <Plus aria-hidden="true" className="size-4" />
          নতুন পণ্য যোগ করুন
        </Button>
      </div>

      {/* Filters */}
      <div className="mb-5 flex flex-wrap gap-3">
        {/* Search */}
        <div className="relative min-w-0 flex-1">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            id="product-search"
            type="search"
            name="product-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="পণ্য বা ক্যাটাগরি খুঁজুন…"
            aria-label="পণ্য খুঁজুন"
            className="h-8 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-3 focus:ring-ring/50"
          />
        </div>

        {/* Category filter */}
        <div className="relative">
          <select
            id="category-filter"
            name="category-filter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            aria-label="ক্যাটাগরি ফিল্টার"
            className="h-8 appearance-none rounded-lg border border-border bg-background pl-3 pr-8 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-3 focus:ring-ring/50"
          >
            {CATEGORY_FILTER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
        </div>

        {/* Status filter */}
        <div className="relative">
          <select
            id="status-filter"
            name="status-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="স্ট্যাটাস ফিল্টার"
            className="h-8 appearance-none rounded-lg border border-border bg-background pl-3 pr-8 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-3 focus:ring-ring/50"
          >
            {PRODUCT_STATUS_FILTER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
        </div>
      </div>

      {/* Result count */}
      <p className="mb-3 text-sm text-muted-foreground">
        মোট{" "}
        <span className="font-semibold text-foreground">{filtered.length}টি</span>{" "}
        পণ্য পাওয়া গেছে
      </p>

      {/* Products Table — desktop */}
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground">
                পণ্য
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground">
                ক্যাটাগরি
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground">
                দাম
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground">
                স্টক
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground">
                স্ট্যাটাস
              </th>
              <th className="px-5 py-3 text-right text-xs font-semibold text-muted-foreground">
                অ্যাকশন
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-5 py-10 text-center text-sm text-muted-foreground"
                >
                  কোনো পণ্য পাওয়া যায়নি।
                </td>
              </tr>
            ) : (
              filtered.map((product) => (
                <tr
                  key={product.id}
                  className="transition-colors hover:bg-muted/30"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        aria-hidden="true"
                        className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-sm font-bold text-brand"
                      >
                        {product.initial}
                      </div>
                      <span className="font-medium text-foreground">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">
                    {product.category}
                  </td>
                  <td className="px-5 py-4 font-semibold text-foreground">
                    {product.price}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "font-semibold",
                        product.stock === 0
                          ? "text-destructive"
                          : product.stock <= 5
                            ? "text-sale"
                            : "text-foreground"
                      )}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <AdminStatusBadge
                      label={PRODUCT_STATUS_LABELS[product.status]}
                      tone={productStatusTone(product.status)}
                    />
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label={`${product.name} পণ্য সম্পাদনা করুন`}
                      >
                        <Pencil aria-hidden="true" className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon-sm"
                        aria-label={`${product.name} পণ্য মুছুন`}
                      >
                        <Trash2 aria-hidden="true" className="size-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Products Cards — mobile */}
      <div className="grid gap-3 md:hidden">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-sm text-muted-foreground">
              কোনো পণ্য পাওয়া যায়নি।
            </p>
          </div>
        ) : (
          filtered.map((product) => (
            <article
              key={product.id}
              className="rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-sm font-bold text-brand"
                  >
                    {product.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {product.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {product.category}
                    </p>
                  </div>
                </div>
                <AdminStatusBadge
                  label={PRODUCT_STATUS_LABELS[product.status]}
                  tone={productStatusTone(product.status)}
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-border pt-3">
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">দাম</p>
                    <p className="text-sm font-bold text-foreground">
                      {product.price}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">স্টক</p>
                    <p
                      className={cn(
                        "text-sm font-bold",
                        product.stock === 0
                          ? "text-destructive"
                          : product.stock <= 5
                            ? "text-sale"
                            : "text-foreground"
                      )}
                    >
                      {product.stock}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    aria-label={`${product.name} সম্পাদনা করুন`}
                  >
                    <Pencil aria-hidden="true" className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon-sm"
                    aria-label={`${product.name} মুছুন`}
                  >
                    <Trash2 aria-hidden="true" className="size-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
