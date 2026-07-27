"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  MapPin,
  Package,
  Heart,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_ACCOUNT_USER } from "@/constants/account";

const NAV_ITEMS = [
  { href: "/account", label: "ড্যাশবোর্ড", icon: LayoutDashboard, exact: true },
  { href: "/account/orders", label: "অর্ডার হিস্ট্রি", icon: Package, exact: false },
  { href: "/account/wishlist", label: "উইশলিস্ট", icon: Heart, exact: false },
  { href: "/account/addresses", label: "সেভ করা ঠিকানা", icon: MapPin, exact: false },
  { href: "/account/profile", label: "প্রোফাইল", icon: UserRound, exact: false },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  function isActive(href: string, exact: boolean): boolean {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  return (
    <>
      {/* Mobile: horizontal scrollable tab bar */}
      <nav
        aria-label="অ্যাকাউন্ট নেভিগেশন"
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
      <aside className="hidden w-60 shrink-0 lg:block">
        <div className="sticky top-6 flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 shadow-sm">
          {/* User info */}
          <div className="mb-2 flex items-center gap-3 border-b border-border pb-4">
            <div
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-base font-bold text-brand-foreground"
            >
              {MOCK_ACCOUNT_USER.initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                {MOCK_ACCOUNT_USER.name}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {MOCK_ACCOUNT_USER.phone}
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <nav aria-label="অ্যাকাউন্ট নেভিগেশন" className="flex flex-col gap-1">
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
                      "size-4 shrink-0 transition-colors",
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
            aria-label="অ্যাকাউন্ট থেকে লগআউট করুন"
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
