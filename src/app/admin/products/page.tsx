import type { Metadata } from "next";
import AdminProductsPage from "@/components/admin/AdminProductsPage";

export const metadata: Metadata = {
  title: "পণ্য ম্যানেজমেন্ট — অ্যাডমিন — Fashion Bazar",
  description: "Fashion Bazar অ্যাডমিন প্যানেল — পণ্য পরিচালনা করুন।",
};

export default function ProductsPage() {
  return <AdminProductsPage />;
}
