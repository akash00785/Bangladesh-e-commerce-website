import { Truck, Shield, RefreshCw } from "lucide-react";
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from "@/constants/cart";
import { formatBanglaPrice } from "@/utils/price";

export default function ShippingInfoBox() {
  return (
    <section
      aria-label="শিপিং তথ্য"
      className="rounded-2xl border border-border bg-card p-4 shadow-sm"
    >
      <div className="mb-3 flex items-center gap-2">
        <Truck aria-hidden="true" className="size-4 text-brand" />
        <h2 className="text-sm font-bold text-foreground">শিপিং তথ্য</h2>
      </div>

      <ul className="flex flex-col gap-3" role="list">
        <li className="flex items-start gap-3">
          <Truck
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-brand"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">
              বিনামূল্যে ডেলিভারি
            </p>
            <p className="text-xs text-muted-foreground">
              {formatBanglaPrice(FREE_SHIPPING_THRESHOLD)} বা তার বেশি অর্ডারে
              সারা বাংলাদেশে বিনামূল্যে ডেলিভারি।
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <Shield
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-brand"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">
              স্ট্যান্ডার্ড ডেলিভারি
            </p>
            <p className="text-xs text-muted-foreground">
              {formatBanglaPrice(FREE_SHIPPING_THRESHOLD)}-এর কম অর্ডারে মাত্র{" "}
              {formatBanglaPrice(SHIPPING_FEE)} ডেলিভারি চার্জ প্রযোজ্য।
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <RefreshCw
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-brand"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">
              সহজ রিটার্ন
            </p>
            <p className="text-xs text-muted-foreground">
              পণ্য পাওয়ার ৭ দিনের মধ্যে ঝামেলামুক্ত রিটার্ন পলিসি।
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
