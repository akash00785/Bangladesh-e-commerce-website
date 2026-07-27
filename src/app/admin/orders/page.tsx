import type { Metadata } from "next";
import AdminOrdersPage from "@/components/admin/AdminOrdersPage";

export const metadata: Metadata = {
  title: "অর্ডার ম্যানেজমেন্ট — অ্যাডমিন — Fashion Bazar",
  description: "Fashion Bazar অ্যাডমিন প্যানেল — অর্ডার পরিচালনা করুন।",
};

export default function OrdersPage() {
  return <AdminOrdersPage />;
}
