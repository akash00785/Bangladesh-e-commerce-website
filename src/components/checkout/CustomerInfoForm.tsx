"use client";

import { User, Phone, Mail } from "lucide-react";
import type { CustomerInfo, CheckoutFormErrors } from "@/types/checkout";
import { cn } from "@/lib/utils";

interface CustomerInfoFormProps {
  values: CustomerInfo;
  errors: CheckoutFormErrors;
  onChange: (field: keyof CustomerInfo, value: string) => void;
}

interface FieldWrapperProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function FieldWrapper({
  id,
  label,
  required,
  error,
  children,
}: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-foreground"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-destructive">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export default function CustomerInfoForm({
  values,
  errors,
  onChange,
}: CustomerInfoFormProps) {
  return (
    <section
      aria-label="ক্রেতার তথ্য"
      className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
    >
      <div className="mb-4 flex items-center gap-2">
        <User aria-hidden="true" className="size-4 text-brand" />
        <h2 className="text-sm font-bold text-foreground">ক্রেতার তথ্য</h2>
      </div>

      <div className="flex flex-col gap-4">
        {/* Full Name */}
        <FieldWrapper
          id="fullName"
          label="পূর্ণ নাম"
          required
          error={errors.fullName}
        >
          <div className="relative">
            <User
              aria-hidden="true"
              className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="আপনার পূর্ণ নাম লিখুন"
              value={values.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={cn(
                "w-full rounded-lg border bg-background py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground",
                "transition-colors outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
                errors.fullName
                  ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                  : "border-border",
              )}
            />
          </div>
        </FieldWrapper>

        {/* Phone */}
        <FieldWrapper
          id="phone"
          label="ফোন নম্বর"
          required
          error={errors.phone}
        >
          <div className="relative">
            <Phone
              aria-hidden="true"
              className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="০১XXXXXXXXX"
              value={values.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={cn(
                "w-full rounded-lg border bg-background py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground",
                "transition-colors outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
                errors.phone
                  ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                  : "border-border",
              )}
            />
          </div>
        </FieldWrapper>

        {/* Email (optional) */}
        <FieldWrapper
          id="email"
          label="ইমেইল (ঐচ্ছিক)"
          error={errors.email}
        >
          <div className="relative">
            <Mail
              aria-hidden="true"
              className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="example@email.com"
              value={values.email}
              onChange={(e) => onChange("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn(
                "w-full rounded-lg border bg-background py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground",
                "transition-colors outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
                errors.email
                  ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                  : "border-border",
              )}
            />
          </div>
        </FieldWrapper>
      </div>
    </section>
  );
}
