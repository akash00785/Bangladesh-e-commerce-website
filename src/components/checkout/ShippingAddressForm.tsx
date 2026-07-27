"use client";

import { MapPin, ChevronDown } from "lucide-react";
import type { ShippingAddress, CheckoutFormErrors } from "@/types/checkout";
import { DIVISIONS, DISTRICTS, UPAZILAS } from "@/constants/checkout";
import { cn } from "@/lib/utils";

interface ShippingAddressFormProps {
  values: ShippingAddress;
  errors: CheckoutFormErrors;
  onChange: (field: keyof ShippingAddress, value: string) => void;
}

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  options: { value: string; label: string }[];
  disabled?: boolean;
  error?: string;
  onChange: (value: string) => void;
}

function SelectField({
  id,
  label,
  value,
  placeholder,
  options,
  disabled,
  error,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        <span aria-hidden="true" className="ml-1 text-destructive">
          *
        </span>
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          aria-required="true"
          aria-invalid={!!error}
          className={cn(
            "w-full appearance-none rounded-lg border bg-background py-2 pl-3 pr-9 text-sm text-foreground",
            "transition-colors outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !value && "text-muted-foreground",
            error
              ? "border-destructive focus:border-destructive focus:ring-destructive/20"
              : "border-border",
          )}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />
      </div>
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ShippingAddressForm({
  values,
  errors,
  onChange,
}: ShippingAddressFormProps) {
  const filteredDistricts = DISTRICTS.filter(
    (d) => d.divisionId === values.division,
  );
  const filteredUpazilas = UPAZILAS.filter(
    (u) => u.districtId === values.district,
  );

  const handleDivisionChange = (val: string) => {
    onChange("division", val);
    onChange("district", "");
    onChange("upazila", "");
  };

  const handleDistrictChange = (val: string) => {
    onChange("district", val);
    onChange("upazila", "");
  };

  return (
    <section
      aria-label="শিপিং ঠিকানা"
      className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
    >
      <div className="mb-4 flex items-center gap-2">
        <MapPin aria-hidden="true" className="size-4 text-brand" />
        <h2 className="text-sm font-bold text-foreground">শিপিং ঠিকানা</h2>
      </div>

      <div className="flex flex-col gap-4">
        {/* Division */}
        <SelectField
          id="division"
          label="বিভাগ"
          value={values.division}
          placeholder="বিভাগ নির্বাচন করুন"
          options={DIVISIONS.map((d) => ({ value: d.id, label: d.name }))}
          error={errors.division}
          onChange={handleDivisionChange}
        />

        {/* District */}
        <SelectField
          id="district"
          label="জেলা"
          value={values.district}
          placeholder="জেলা নির্বাচন করুন"
          options={filteredDistricts.map((d) => ({
            value: d.id,
            label: d.name,
          }))}
          disabled={!values.division}
          error={errors.district}
          onChange={handleDistrictChange}
        />

        {/* Upazila */}
        <SelectField
          id="upazila"
          label="উপজেলা"
          value={values.upazila}
          placeholder="উপজেলা নির্বাচন করুন"
          options={filteredUpazilas.map((u) => ({
            value: u.id,
            label: u.name,
          }))}
          disabled={!values.district}
          error={errors.upazila}
          onChange={(val) => onChange("upazila", val)}
        />

        {/* Full Address */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="fullAddress"
            className="text-sm font-medium text-foreground"
          >
            সম্পূর্ণ ঠিকানা
            <span aria-hidden="true" className="ml-1 text-destructive">
              *
            </span>
          </label>
          <textarea
            id="fullAddress"
            rows={3}
            placeholder="বাড়ি নম্বর, রাস্তা, এলাকার নাম লিখুন"
            value={values.fullAddress}
            onChange={(e) => onChange("fullAddress", e.target.value)}
            aria-required="true"
            aria-invalid={!!errors.fullAddress}
            className={cn(
              "w-full resize-none rounded-lg border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
              "transition-colors outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
              errors.fullAddress
                ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                : "border-border",
            )}
          />
          {errors.fullAddress && (
            <p role="alert" className="text-xs text-destructive">
              {errors.fullAddress}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
