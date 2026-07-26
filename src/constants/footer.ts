import type { FooterColumn, PaymentMethod } from "@/types/footer";

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "company",
    title: "কোম্পানি",
    links: [
      { label: "আমাদের সম্পর্কে", href: "/about" },
      { label: "ক্যারিয়ার", href: "/careers" },
      { label: "প্রেস", href: "/press" },
      { label: "ব্লগ", href: "/blog" },
      { label: "অ্যাফিলিয়েট", href: "/affiliate" },
    ],
  },
  {
    id: "help",
    title: "সহায়তা",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "ডেলিভারি তথ্য", href: "/delivery" },
      { label: "রিটার্ন পলিসি", href: "/returns" },
      { label: "অর্ডার ট্র্যাক", href: "/track-order" },
      { label: "যোগাযোগ করুন", href: "/contact" },
    ],
  },
  {
    id: "categories",
    title: "ক্যাটাগরি",
    links: [
      { label: "শার্ট", href: "/category/shirt" },
      { label: "পান্টো", href: "/category/panto" },
      { label: "জুতা", href: "/category/shoe" },
      { label: "টি-শার্ট", href: "/category/t-shirt" },
      { label: "এক্সেসরিজ", href: "/category/accessories" },
    ],
  },
  {
    id: "legal",
    title: "আইনি",
    links: [
      { label: "গোপনীয়তা নীতি", href: "/privacy" },
      { label: "ব্যবহারের শর্তাবলি", href: "/terms" },
      { label: "কুকি নীতি", href: "/cookies" },
      { label: "নিরাপত্তা", href: "/security" },
    ],
  },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "cod",
    name: "ক্যাশ অন ডেলিভারি",
    description: "পণ্য হাতে পেয়ে টাকা দিন",
  },
  {
    id: "bkash",
    name: "বিকাশ",
    description: "বিকাশ অ্যাকাউন্ট থেকে পেমেন্ট",
  },
  {
    id: "nagad",
    name: "নগদ",
    description: "নগদ অ্যাকাউন্ট থেকে পেমেন্ট",
  },
  {
    id: "rocket",
    name: "রকেট",
    description: "রকেট অ্যাকাউন্ট থেকে পেমেন্ট",
  },
];
