"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Layers,
  ShoppingBag,
  Users,
  Tag,
  Star,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/admin", label: "ড্যাশবোর্ড", icon: LayoutDashboard, exact: true },
  { href: "/admin/products", label: "পণ্যসমূহ", icon: Package, exact: false },
  { href: "/admin/categories", label: "ক্যাটাগরি", icon: Layers, exact: false },
  { href: "/admin/orders", label: "অর্ডার", icon: ShoppingBag, exact: false },
  { href: "/admin/customers", label: "কাস্টমার", icon: Users, exact: false },
  { href: "/admin/coupons", label: "কুপন", icon: Tag, exact: false },
  { href: "/admin/reviews", label: "রিভিউ", icon: Star, exact: false },
  { href: "/admin/settings", label: "সেটিংস", icon: Settings, exact: false },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  function isActive(href: string, exact: boolean): boolean {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  return (
    <>
      {/* Mobile: horizontal scrollable tab bar */}
      <nav
        aria-label="অ্যাডমিন নেভিগেশন"
        className="flex gap-1 overflow-x-auto border-b border-border bg-card px-4 pb-0 scrollbar-none lg:hidden"
      >
        {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-3 text-sm font-medium transition-colors",
                active
                  ? "border-brand text-brand"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon aria-hidden="true" className="size-4 shrink-0" />
              <span className="whitespace-nowrap">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Desktop: vertical sidebar */}
      <aside className="hidden w-56 shrink-0 lg:block">
        <div className="sticky top-6 flex flex-col gap-1 rounded-2xl border border-border bg-card p-3 shadow-sm">
          {/* Admin badge */}
          <div className="mb-2 flex items-center gap-2 rounded-xl bg-brand/10 px-3 py-2.5">
            <LayoutDashboard
              aria-hidden="true"
              className="size-4 shrink-0 text-brand"
            />
            <span className="text-sm font-bold text-brand">অ্যাডমিন প্যানেল</span>
          </div>

          {/* Navigation links */}
          <nav aria-label="অ্যাডমিন নেভিগেশন" className="flex flex-col gap-0.5">
            {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => {
              const active = isActive(href, exact);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-brand/10 text-brand"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon
                    aria-hidden="true"
                    className={cn(
                      "size-4 shrink-0",
                      active ? "text-brand" : "text-muted-foreground"
                    )}
                  />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="my-1 border-t border-border" />

          {/* Logout */}
          <button
            type="button"
            aria-label="অ্যাডমিন প্যানেল থেকে লগআউট করুন"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
          >
            <LogOut aria-hidden="true" className="size-4 shrink-0" />
            লগআউট
          </button>
        </div>
      </aside>
    </>
  );
}
