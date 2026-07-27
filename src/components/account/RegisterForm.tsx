"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AccountField from "./AccountField";
import PasswordField from "./PasswordField";

export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
      <AccountField id="registerName" label="পূর্ণ নাম" placeholder="আপনার পূর্ণ নাম লিখুন" autoComplete="name" />
      <div className="grid gap-4 sm:grid-cols-2">
        <AccountField id="registerPhone" label="ফোন" placeholder="০১৭XXXXXXXX" autoComplete="tel" type="tel" />
        <AccountField id="registerEmail" label="ইমেইল" placeholder="you@example.com" autoComplete="email" type="email" />
      </div>
      <PasswordField id="registerPassword" label="পাসওয়ার্ড" autoComplete="new-password" />
      <PasswordField
        id="confirmPassword"
        label="পাসওয়ার্ড নিশ্চিত করুন"
        placeholder="পাসওয়ার্ড আবার লিখুন"
        autoComplete="new-password"
      />
      <Button type="submit" size="lg" className="mt-1 h-11 w-full bg-brand text-brand-foreground hover:bg-brand/90">
        অ্যাকাউন্ট তৈরি করুন
      </Button>
      <p className="text-center text-xs leading-5 text-muted-foreground">
        অ্যাকাউন্ট তৈরি করে আপনি আমাদের{" "}
        <Link href="/terms" className="text-brand underline-offset-4 hover:underline">
          শর্তাবলিতে
        </Link>{" "}
        সম্মত হচ্ছেন।
      </p>
    </form>
  );
}