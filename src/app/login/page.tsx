import Link from "next/link";
import AuthShell from "@/components/account/AuthShell";
import LoginForm from "@/components/account/LoginForm";

export default function LoginPage() {
  return (
    <AuthShell
      title="আপনার অ্যাকাউন্টে লগইন করুন"
      description="আপনার অর্ডার এবং পছন্দের পণ্য দেখতে লগইন করুন।"
      footer={
        <>
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/register" className="font-semibold text-brand hover:underline">
            নতুন অ্যাকাউন্ট তৈরি করুন
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}