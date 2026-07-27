import Link from "next/link";
import {
  TrendingUp,
  ShoppingBag,
  Package,
  Users,
  AlertTriangle,
  Plus,
  Eye,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import {
  ADMIN_STAT_CARDS,
  ADMIN_RECENT_ORDERS,
  ADMIN_LOW_STOCK,
} from "@/constants/admin";
import type { AdminStatusTone } from "@/types/admin";
import { cn } from "@/lib/utils";

const STAT_ICONS = [TrendingUp, ShoppingBag, Package, Users];

const STAT_TONE_CLASSES: Record<AdminStatusTone, string> = {
  brand: "bg-brand/10 text-brand",
  sale: "bg-sale/10 text-sale",
  muted: "bg-muted text-muted-foreground",
  destructive: "bg-destructive/10 text-destructive",
};

export default function AdminDashboard() {
  return (
    <section className="px-4 py-8 sm:py-10 lg:px-0">
      {/* Page heading */}
      <div className="mb-6">
        <p className="mb-1 text-sm font-semibold text-brand">অ্যাডমিন প্যানেল</p>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          ড্যাশবোর্ড ওভারভিউ
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          আপনার স্টোরের সার্বিক পরিসংখ্যান এক নজরে দেখুন।
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {ADMIN_STAT_CARDS.map((card, index) => {
          const Icon = STAT_ICONS[index];
          return (
            <article
              key={card.label}
              className="rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <div
                className={cn(
                  "mb-3 flex size-10 items-center justify-center rounded-xl",
                  STAT_TONE_CLASSES[card.tone]
                )}
              >
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <p className="text-xs text-muted-foreground">{card.label}</p>
              <p className="mt-0.5 text-xl font-bold text-foreground">
                {card.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{card.sub}</p>
            </article>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="mb-3 text-base font-bold text-foreground">
          দ্রুত কাজ
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/admin/products"
            aria-label="নতুন পণ্য যোগ করুন"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "gap-1.5"
            )}
          >
            <Plus aria-hidden="true" className="size-4" />
            নতুন পণ্য
          </Link>
          <Link
            href="/admin/categories"
            aria-label="নতুন ক্যাটাগরি যোগ করুন"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1.5"
            )}
          >
            <Plus aria-hidden="true" className="size-4" />
            নতুন ক্যাটাগরি
          </Link>
          <Link
            href="/admin/orders"
            aria-label="সব অর্ডার দেখুন"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1.5"
            )}
          >
            <Eye aria-hidden="true" className="size-4" />
            সব অর্ডার
          </Link>
          <Link
            href="/admin/customers"
            aria-label="সব কাস্টমার দেখুন"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1.5"
            )}
          >
            <Users aria-hidden="true" className="size-4" />
            কাস্টমার
          </Link>
        </div>
      </div>

      {/* Two-column grid: Recent Orders + Low Stock */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders Table */}
        <div className="rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="font-bold text-foreground">সাম্প্রতিক অর্ডার</h2>
            <Link
              href="/admin/orders"
              aria-label="সব অর্ডার দেখুন"
              className="text-xs font-medium text-brand hover:underline"
            >
              সব দেখুন
            </Link>
          </div>
          <div className="divide-y divide-border">
            {ADMIN_RECENT_ORDERS.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between gap-3 px-5 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {order.id}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {order.customer}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-sm font-semibold text-foreground">
                    {order.total}
                  </span>
                  <AdminStatusBadge label={order.status} tone={order.statusTone} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Widget */}
        <div className="rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-2 border-b border-border px-5 py-4">
            <AlertTriangle
              aria-hidden="true"
              className="size-4 shrink-0 text-sale"
            />
            <h2 className="font-bold text-foreground">কম স্টক সতর্কতা</h2>
          </div>
          <div className="divide-y divide-border">
            {ADMIN_LOW_STOCK.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 px-5 py-3"
              >
                <div
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sale/10 text-sm font-bold text-sale"
                >
                  {item.initial}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {item.name}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-bold text-destructive">
                  {item.stock}টি বাকি
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-border px-5 py-3">
            <Link
              href="/admin/products"
              aria-label="পণ্য ম্যানেজমেন্টে যান"
              className="text-xs font-medium text-brand hover:underline"
            >
              পণ্য ম্যানেজ করুন →
            </Link>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-4">
        <Package aria-hidden="true" className="size-5 shrink-0 text-brand" />
        <p className="text-sm text-muted-foreground">
          এটি একটি ডেমো অ্যাডমিন প্যানেল — সব ডেটা মক।
        </p>
      </div>
    </section>
  );
}
