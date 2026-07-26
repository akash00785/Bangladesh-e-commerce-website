import { ShieldCheck, RefreshCw, Truck, Lock } from "lucide-react";

const features = [
  { Icon: ShieldCheck, text: "অরিজিনাল পণ্য" },
  { Icon: RefreshCw, text: "সহজ রিটার্ন" },
  { Icon: Truck, text: "দ্রুত ডেলিভারি" },
  { Icon: Lock, text: "নিরাপদ পেমেন্ট" },
];

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#1a5c3a] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
        {features.map(({ Icon, text }) => (
          <div key={text} className="flex items-center gap-1.5 text-sm font-medium">
            <Icon className="w-4 h-4 text-green-300 shrink-0" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
