import type { CategoryItem, ServiceFeature } from "@/types/home";

export const CATEGORIES: CategoryItem[] = [
  {
    id: "shirt",
    slug: "shirt",
    namebn: "শার্ট",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop&auto=format",
    href: "/category/shirt",
  },
  {
    id: "tshirt",
    slug: "t-shirt",
    namebn: "টি-শার্ট",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&auto=format",
    href: "/category/t-shirt",
  },
  {
    id: "pants",
    slug: "pants",
    namebn: "প্যান্ট",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=300&fit=crop&auto=format",
    href: "/category/pants",
  },
  {
    id: "shoes",
    slug: "shoes",
    namebn: "জুতা",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&auto=format",
    href: "/category/shoes",
  },
  {
    id: "watch",
    slug: "watch",
    namebn: "ঘড়ি",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&auto=format",
    href: "/category/watch",
  },
  {
    id: "bag",
    slug: "bag",
    namebn: "ব্যাগ",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop&auto=format",
    href: "/category/bag",
  },
  {
    id: "perfume",
    slug: "perfume",
    namebn: "পারফিউম",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=300&h=300&fit=crop&auto=format",
    href: "/category/perfume",
  },
  {
    id: "accessories",
    slug: "accessories",
    namebn: "এক্সেসরিজ",
    image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=300&h=300&fit=crop&auto=format",
    href: "/category/accessories",
  },
];

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    id: "delivery",
    icon: "truck",
    title: "ফ্রি ডেলিভারি",
    subtitle: "৳৯৯৯+ অর্ডারে",
  },
  {
    id: "return",
    icon: "refresh",
    title: "সহজ রিটার্ন",
    subtitle: "৭ দিনের মধ্যে",
  },
  {
    id: "payment",
    icon: "shield",
    title: "সুরক্ষিত পেমেন্ট",
    subtitle: "১০০% বিশ্বাস",
  },
  {
    id: "support",
    icon: "headset",
    title: "২৪/৭ সাপোর্ট",
    subtitle: "সর্বদা আপনার পাশে",
  },
];
