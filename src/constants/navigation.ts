import type { NavItem } from "@/types/navigation";

export const NAV_ITEMS: NavItem[] = [
  { label: "হোম", href: "/" },
  { label: "শার্ট", href: "/category/shirt" },
  { label: "পান্টো", href: "/category/panto" },
  { label: "জুতা", href: "/category/shoe" },
  { label: "টি-শার্ট", href: "/category/t-shirt" },
  { label: "এক্সেসরিজ", href: "/category/accessories" },
  { label: "অফার", href: "/offers" },
  { label: "ব্লগ", href: "/blog" },
];

export const ANNOUNCEMENT_FEATURES = [
  { icon: "shield-check", text: "অরিজিনাল পণ্য" },
  { icon: "refresh-cw", text: "সহজ রিটার্ন" },
  { icon: "truck", text: "দ্রুত ডেলিভারি" },
  { icon: "lock", text: "নিরাপদ পেমেন্ট" },
];
