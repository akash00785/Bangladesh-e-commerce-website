"use client";

import { useState } from "react";
import { Search, Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import { ADMIN_ORDERS, ORDER_STATUS_FILTER_OPTIONS } from "@/constants/admin";

export default function AdminOrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = ADMIN_ORDERS.filter((o) => {
    const matchSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.phone.includes(search);
    const matchStatus =
      statusFilter === "all" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <section className="px-4 py-8 sm:py-10 lg:px-0">
      {/* Page heading */}
      <div className="mb-6">
        <p className="mb-1 text-sm font-semibold text-brand">অ্যাডমিন প্যানেল</p>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          অর্ডার ম্যানেজমেন্ট
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          আপনার স্টোরের সব অর্ডার দেখুন ও পরিচালনা করুন।
        </p>
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
            id="order-search"
            type="search"
            name="order-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="অর্ডার ID বা কাস্টমার নাম খুঁজুন…"
            aria-label="অর্ডার খুঁজুন"
            className="h-8 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-3 focus:ring-ring/50"
          />
        </div>

        {/* Status filter */}
        <div className="relative">
          <select
            id="order-status-filter"
            name="order-status-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="অর্ডার স্ট্যাটাস ফিল্টার"
            className="h-8 appearance-none rounded-lg border border-border bg-background pl-3 pr-8 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-3 focus:ring-ring/50"
          >
            {ORDER_STATUS_FILTER_OPTIONS.map((opt) => (
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
        অর্ডার পাওয়া গেছে
      </p>

      {/* Orders Table — desktop */}
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground">
                অর্ডার ID
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground">
                কাস্টমার
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground">
                তারিখ
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground">
                পণ্য সংখ্যা
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground">
                মোট
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
                  colSpan={7}
                  className="px-5 py-10 text-center text-sm text-muted-foreground"
                >
                  কোনো অর্ডার পাওয়া যায়নি।
                </td>
              </tr>
            ) : (
              filtered.map((order) => (
                <tr
                  key={order.id}
                  className="transition-colors hover:bg-muted/30"
                >
                  <td className="px-5 py-4 font-bold text-foreground">
                    {order.id}
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium text-foreground">
                      {order.customer}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {order.phone}
                    </p>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">
                    {order.date}
                  </td>
                  <td className="px-5 py-4 text-foreground">{order.items}টি</td>
                  <td className="px-5 py-4 font-semibold text-foreground">
                    {order.total}
                  </td>
                  <td className="px-5 py-4">
                    <AdminStatusBadge
                      label={order.status}
                      tone={order.statusTone}
                    />
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      aria-label={`${order.id} অর্ডারের বিস্তারিত দেখুন`}
                      className="gap-1.5"
                    >
                      <Eye aria-hidden="true" className="size-3.5" />
                      বিস্তারিত
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Orders Cards — mobile */}
      <div className="grid gap-3 md:hidden">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-sm text-muted-foreground">
              কোনো অর্ডার পাওয়া যায়নি।
            </p>
          </div>
        ) : (
          filtered.map((order) => (
            <article
              key={order.id}
              className="rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-foreground">{order.id}</p>
                  <p className="text-sm text-foreground">{order.customer}</p>
                  <p className="text-xs text-muted-foreground">{order.phone}</p>
                </div>
                <AdminStatusBadge label={order.status} tone={order.statusTone} />
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 border-t border-border pt-3">
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">তারিখ</p>
                    <p className="text-sm text-foreground">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">মোট</p>
                    <p className="text-sm font-bold text-foreground">
                      {order.total}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">পণ্য</p>
                    <p className="text-sm text-foreground">{order.items}টি</p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  aria-label={`${order.id} অর্ডারের বিস্তারিত দেখুন`}
                  className="shrink-0 gap-1.5"
                >
                  <Eye aria-hidden="true" className="size-3.5" />
                  বিস্তারিত
                </Button>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
