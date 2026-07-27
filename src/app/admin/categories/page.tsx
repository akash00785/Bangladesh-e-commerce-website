import type { Metadata } from "next";
import AdminCategoriesPage from "@/components/admin/AdminCategoriesPage";

export const metadata: Metadata = {
  title: "ক্যাটাগরি ম্যানেজমেন্ট — অ্যাডমিন — Fashion Bazar",
  description: "Fashion Bazar অ্যাডমিন প্যানেল — ক্যাটাগরি পরিচালনা করুন।",
};

export default function CategoriesPage() {
  return <AdminCategoriesPage />;
}
