import Link from "next/link";
import AuthShell from "@/components/account/AuthShell";
import RegisterForm from "@/components/account/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthShell
      title="নতুন অ্যাকাউন্ট তৈরি করুন"
      description="কয়েকটি তথ্য দিয়ে Fashion Bazar পরিবারের সদস্য হয়ে যান।"
      footer={
        <>
          আগে থেকেই অ্যাকাউন্ট আছে?{" "}
          <Link href="/login" className="font-semibold text-brand hover:underline">
            লগইন করুন
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}