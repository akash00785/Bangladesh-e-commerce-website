import type { ElementType } from "react";
import { Truck, RefreshCw, ShieldCheck, Headphones } from "lucide-react";
import { SERVICE_FEATURES } from "@/constants/home";

const ICON_MAP: Record<string, ElementType> = {
  truck: Truck,
  refresh: RefreshCw,
  shield: ShieldCheck,
  headset: Headphones,
};

export default function ServiceFeatures() {
  return (
    <section
      aria-label="সেবার বিবরণ"
      className="w-full bg-white border-t border-b border-gray-100 py-4"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SERVICE_FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <li
                key={feature.id}
                className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-amber-50 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                  <Icon
                    className="w-5 h-5 text-[#8B4513]"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-800 leading-tight">
                    {feature.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">
                    {feature.subtitle}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
