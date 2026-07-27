import type { Metadata } from "next";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "অ্যাডমিন ড্যাশবোর্ড — Fashion Bazar",
  description: "Fashion Bazar অ্যাডমিন প্যানেল — স্টোর পরিচালনা করুন।",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
