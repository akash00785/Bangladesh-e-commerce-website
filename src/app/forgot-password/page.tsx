import Link from "next/link";
import AuthShell from "@/components/account/AuthShell";
import ForgotPasswordForm from "@/components/account/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="পাসওয়ার্ড রিসেট করুন"
      description="আপনার ফোন বা ইমেইল দিন। আমরা পরবর্তী ধাপের নির্দেশনা দেখাব।"
      footer={
        <>
          মনে পড়েছে?{" "}
          <Link href="/login" className="font-semibold text-brand hover:underline">
            লগইনে ফিরে যান
          </Link>
        </>
      }
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}