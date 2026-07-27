"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AccountField from "./AccountField";
import PasswordField from "./PasswordField";

export default function LoginForm() {
  const [remember, setRemember] = useState(false);

  return (
    <form className="flex flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
      <AccountField
        id="loginIdentifier"
        label="ফোন / ইমেইল"
        placeholder="০১৭XXXXXXXX বা আপনার ইমেইল"
        autoComplete="username"
      />
      <PasswordField id="loginPassword" label="পাসওয়ার্ড" />

      <div className="flex items-center justify-between gap-3">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
            className="size-4 rounded border-border accent-brand"
          />
          মনে রাখুন
        </label>
        <Link
          href="/forgot-password"
          className="text-sm font-medium text-brand underline-offset-4 hover:underline"
        >
          পাসওয়ার্ড ভুলে গেছেন?
        </Link>
      </div>

      <Button type="submit" size="lg" className="h-11 w-full bg-brand text-brand-foreground hover:bg-brand/90">
        লগইন করুন
      </Button>
    </form>
  );
}