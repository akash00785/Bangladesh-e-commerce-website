"use client";

import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AccountField from "./AccountField";

export default function ForgotPasswordForm() {
  return (
    <form className="flex flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
      <div className="flex items-center justify-center rounded-2xl bg-brand/10 p-4 text-brand">
        <Mail aria-hidden="true" className="size-7" />
      </div>
      <AccountField
        id="forgotEmail"
        label="ফোন / ইমেইল"
        placeholder="অ্যাকাউন্টের ফোন বা ইমেইল লিখুন"
        autoComplete="username"
      />
      <Button type="submit" size="lg" className="h-11 w-full bg-brand text-brand-foreground hover:bg-brand/90">
        রিসেট লিংক পাঠান
      </Button>
      <Link
        href="/login"
        className="inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        লগইন পেজে ফিরে যান
      </Link>
    </form>
  );
}