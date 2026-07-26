"use client";

import { useState, type FormEvent } from "react";
import { Mail, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("ইমেইল ঠিকানা দিন");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("একটি সঠিক ইমেইল ঠিকানা দিন");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="w-full bg-brand px-4 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        {/* Icon */}
        <div
          aria-hidden="true"
          className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-brand-foreground/15"
        >
          <Mail className="size-7 text-brand-foreground" />
        </div>

        <h2
          id="newsletter-heading"
          className="text-2xl font-extrabold tracking-tight text-brand-foreground sm:text-3xl"
        >
          নিউজলেটারে সাবস্ক্রাইব করুন
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-brand-foreground/80 sm:text-base">
          সর্বশেষ অফার, নতুন পণ্য ও এক্সক্লুসিভ ডিসকাউন্টের খবর সবার আগে পান।
          <br className="hidden sm:block" />
          কোনো স্প্যাম নেই। যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
        </p>

        {submitted ? (
          /* Success state */
          <div
            role="alert"
            className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-brand-foreground/10 px-6 py-5"
          >
            <CheckCircle aria-hidden="true" className="size-6 shrink-0 text-brand-foreground" />
            <p className="text-sm font-semibold text-brand-foreground">
              ধন্যবাদ! আপনি সফলভাবে সাবস্ক্রাইব করেছেন।
            </p>
          </div>
        ) : (
          /* Form state */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8"
            aria-label="নিউজলেটার সাবস্ক্রিপশন ফর্ম"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  ইমেইল ঠিকানা
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="আপনার ইমেইল ঠিকানা লিখুন..."
                  aria-describedby={error ? "newsletter-error" : undefined}
                  aria-invalid={!!error}
                  required
                  className="w-full rounded-xl border-2 border-brand-foreground/25 bg-brand-foreground/10 px-4 py-3 text-sm text-brand-foreground placeholder-brand-foreground/50 outline-none transition-all focus:border-brand-foreground focus:bg-brand-foreground/15"
                />
              </div>
              <Button
                type="submit"
                className="shrink-0 rounded-xl bg-brand-foreground px-6 py-3 text-sm font-bold text-brand shadow-md hover:bg-brand-foreground/90 sm:px-8"
                aria-label="নিউজলেটারে সাবস্ক্রাইব করুন"
              >
                সাবস্ক্রাইব
              </Button>
            </div>

            {error && (
              <p
                id="newsletter-error"
                role="alert"
                className="mt-2 text-xs font-semibold text-brand-foreground/90"
              >
                {error}
              </p>
            )}
          </form>
        )}

        {/* Trust badges */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-brand-foreground/70"
          aria-label="বিশ্বাসযোগ্যতার তথ্য"
        >
          <span>✓ ৫০,০০০+ সাবস্ক্রাইবার</span>
          <span aria-hidden="true">·</span>
          <span>✓ স্প্যাম নেই</span>
          <span aria-hidden="true">·</span>
          <span>✓ যেকোনো সময় বাতিল করুন</span>
        </div>
      </div>
    </section>
  );
}
