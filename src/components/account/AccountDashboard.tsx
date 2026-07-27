import Link from "next/link";
import {
  ChevronRight,
  Heart,
  LogOut,
  MapPin,
  Package,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_ACCOUNT_ORDERS, MOCK_ACCOUNT_USER, MOCK_SAVED_ADDRESSES } from "@/constants/account";

function SectionHeading({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="text-lg font-bold text-foreground">{title}</h2>
      {action}
    </div>
  );
}

export default function AccountDashboard() {
  return (
    <section className="min-h-screen bg-muted/30 px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold text-brand">আমার অ্যাকাউন্ট</p>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              স্বাগতম, {MOCK_ACCOUNT_USER.name.split(" ")[0]}!
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              আপনার অর্ডার, প্রোফাইল এবং সেভ করা ঠিকানা এক জায়গায় দেখুন।
            </p>
          </div>
          <Button variant="outline" className="gap-2 self-start sm:self-auto">
            <LogOut aria-hidden="true" className="size-4" />
            লগআউট
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.5fr]">
          <div className="flex flex-col gap-6">
            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <SectionHeading title="প্রোফাইল" action={<UserRound aria-hidden="true" className="size-5 text-brand" />} />
              <div className="flex items-center gap-4 border-b border-border pb-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand text-xl font-bold text-brand-foreground">
                  {MOCK_ACCOUNT_USER.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-bold text-foreground">{MOCK_ACCOUNT_USER.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{MOCK_ACCOUNT_USER.memberSince}</p>
                </div>
              </div>
              <div className="space-y-3 pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">ফোন</span>
                  <span className="text-right font-medium text-foreground">{MOCK_ACCOUNT_USER.phone}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">ইমেইল</span>
                  <span className="max-w-[12rem] truncate text-right font-medium text-foreground">{MOCK_ACCOUNT_USER.email}</span>
                </div>
              </div>
              <Button variant="outline" className="mt-5 w-full">ব্যক্তিগত তথ্য সম্পাদনা</Button>
            </section>

            <div className="grid grid-cols-2 gap-3">
              <Link href="/wishlist" className="group rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-brand/50">
                <Heart aria-hidden="true" className="mb-6 size-5 text-brand" />
                <p className="font-semibold text-foreground">উইশলিস্ট</p>
                <p className="mt-1 text-xs text-muted-foreground">আপনার পছন্দের পণ্য</p>
                <ChevronRight aria-hidden="true" className="mt-3 size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/cart" className="group rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-brand/50">
                <ShoppingCart aria-hidden="true" className="mb-6 size-5 text-brand" />
                <p className="font-semibold text-foreground">আমার কার্ট</p>
                <p className="mt-1 text-xs text-muted-foreground">২টি পণ্য অপেক্ষায়</p>
                <ChevronRight aria-hidden="true" className="mt-3 size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <SectionHeading
                title="সাম্প্রতিক অর্ডার"
                action={<Link href="/account/orders" className="text-sm font-medium text-brand hover:underline">সব দেখুন</Link>}
              />
              <div className="overflow-x-auto">
                <table className="w-full min-w-[36rem] text-left text-sm">
                  <thead className="border-b border-border text-xs text-muted-foreground">
                    <tr>
                      <th className="pb-3 font-medium">অর্ডার</th>
                      <th className="pb-3 font-medium">তারিখ</th>
                      <th className="pb-3 font-medium">মোট</th>
                      <th className="pb-3 text-right font-medium">স্ট্যাটাস</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {MOCK_ACCOUNT_ORDERS.map((order) => (
                      <tr key={order.id}>
                        <td className="py-4 pr-3">
                          <p className="font-semibold text-foreground">{order.id}</p>
                          <p className="mt-1 max-w-[14rem] truncate text-xs text-muted-foreground">{order.item}</p>
                        </td>
                        <td className="py-4 pr-3 text-xs text-muted-foreground">{order.date}</td>
                        <td className="py-4 pr-3 font-medium text-foreground">{order.total}</td>
                        <td className="py-4 text-right">
                          <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${order.statusTone === "brand" ? "bg-brand/10 text-brand" : "bg-sale/10 text-sale"}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <SectionHeading
                title="সেভ করা ঠিকানা"
                action={<Button variant="ghost" size="sm" className="text-brand hover:text-brand">+ নতুন ঠিকানা</Button>}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {MOCK_SAVED_ADDRESSES.map((address) => (
                  <div key={address.id} className="rounded-xl border border-border bg-background p-4">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <MapPin aria-hidden="true" className="size-4 text-brand" />
                        <h3 className="text-sm font-semibold text-foreground">{address.label}</h3>
                      </div>
                      {address.isDefault && <span className="rounded-full bg-brand/10 px-2 py-1 text-[10px] font-semibold text-brand">ডিফল্ট</span>}
                    </div>
                    <p className="text-sm font-medium text-foreground">{address.recipient}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{address.phone}</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{address.address}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex items-center gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-4">
              <Package aria-hidden="true" className="size-5 shrink-0 text-brand" />
              <p className="text-sm text-muted-foreground">আপনার অর্ডার ও ঠিকানার তথ্য এখানে শুধু ডেমো হিসেবে দেখানো হচ্ছে।</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}