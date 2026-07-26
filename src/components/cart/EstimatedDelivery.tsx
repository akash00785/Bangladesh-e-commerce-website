import { CalendarDays, MapPin } from "lucide-react";

export default function EstimatedDelivery() {
  return (
    <section
      aria-label="আনুমানিক ডেলিভারি"
      className="rounded-2xl border border-border bg-card p-4 shadow-sm"
    >
      <div className="mb-3 flex items-center gap-2">
        <CalendarDays aria-hidden="true" className="size-4 text-brand" />
        <h2 className="text-sm font-bold text-foreground">আনুমানিক ডেলিভারি</h2>
      </div>

      <ul className="flex flex-col gap-3" role="list">
        <li className="flex items-start gap-3">
          <MapPin
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-brand"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">ঢাকা সিটি</p>
            <p className="text-xs text-muted-foreground">
              ২–৩ কার্যদিবসের মধ্যে ডেলিভারি
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <MapPin
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-muted-foreground"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">
              ঢাকার বাইরে (সারা বাংলাদেশ)
            </p>
            <p className="text-xs text-muted-foreground">
              ৩–৫ কার্যদিবসের মধ্যে ডেলিভারি
            </p>
          </div>
        </li>
      </ul>

      <p className="mt-3 rounded-xl bg-muted px-3 py-2 text-[11px] text-muted-foreground">
        ✦ অর্ডার নিশ্চিত হওয়ার পর SMS ও ইমেইলে ট্র্যাকিং লিংক পাঠানো হবে।
      </p>
    </section>
  );
}
