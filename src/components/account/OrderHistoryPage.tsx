import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_ALL_ORDERS } from "@/constants/account";
import type { AccountOrder } from "@/types/account";

function StatusBadge({ status, tone }: { status: string; tone: AccountOrder["statusTone"] }) {
  const classes: Record<AccountOrder["statusTone"], string> = {
    brand: "bg-brand/10 text-brand",
    sale: "bg-sale/10 text-sale",
    muted: "bg-muted text-muted-foreground",
  };
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${classes[tone]}`}>
      {status}
    </span>
  );
}

function OrderCard({ order }: { order: AccountOrder }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
            <Package aria-hidden="true" className="size-5 text-brand" />
          </div>
          <div>
            <p className="font-bold text-foreground">{order.id}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{order.date}</p>
          </div>
        </div>
        <StatusBadge status={order.status} tone={order.statusTone} />
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <p className="truncate text-sm text-muted-foreground">{order.item}</p>
        {order.itemCount !== undefined && (
          <p className="mt-1 text-xs text-muted-foreground">
            মোট {order.itemCount}টি পণ্য
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-muted-foreground">মোট মূল্য</p>
          <p className="text-base font-bold text-foreground">{order.total}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          aria-label={`${order.id} অর্ডারের বিস্তারিত দেখুন`}
        >
          বিস্তারিত দেখুন
        </Button>
      </div>
    </article>
  );
}

export default function OrderHistoryPage() {
  return (
    <section className="px-4 py-8 sm:py-10 lg:px-0">
      <div className="mb-6">
        <p className="mb-1 text-sm font-semibold text-brand">আমার অ্যাকাউন্ট</p>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">অর্ডার হিস্ট্রি</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          আপনার সব অর্ডারের তালিকা এখানে দেখতে পাবেন।
        </p>
      </div>

      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          মোট{" "}
          <span className="font-semibold text-foreground">{MOCK_ALL_ORDERS.length}টি</span>{" "}
          অর্ডার
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {MOCK_ALL_ORDERS.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-4">
        <Package aria-hidden="true" className="size-5 shrink-0 text-brand" />
        <p className="text-sm text-muted-foreground">
          এখানে শুধু ডেমো অর্ডার দেখানো হচ্ছে।
        </p>
      </div>
    </section>
  );
}
