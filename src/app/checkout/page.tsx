"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import CustomerInfoForm from "@/components/checkout/CustomerInfoForm";
import ShippingAddressForm from "@/components/checkout/ShippingAddressForm";
import DeliveryMethodSelector from "@/components/checkout/DeliveryMethodSelector";
import PaymentMethodSelector from "@/components/checkout/PaymentMethodSelector";
import CheckoutOrderSummary from "@/components/checkout/CheckoutOrderSummary";
import PlaceOrderButton from "@/components/checkout/PlaceOrderButton";
import type {
  CheckoutFormState,
  CheckoutFormErrors,
  CustomerInfo,
  ShippingAddress,
} from "@/types/checkout";

const INITIAL_STATE: CheckoutFormState = {
  customerInfo: { fullName: "", phone: "", email: "" },
  shippingAddress: { division: "", district: "", upazila: "", fullAddress: "" },
  deliveryMethod: "home",
  paymentMethod: "cod",
};

function validateForm(state: CheckoutFormState): CheckoutFormErrors {
  const errors: CheckoutFormErrors = {};

  const { fullName, phone, email } = state.customerInfo;
  const { division, district, upazila, fullAddress } = state.shippingAddress;

  if (!fullName.trim()) {
    errors.fullName = "পূর্ণ নাম প্রয়োজন";
  }

  if (!phone.trim()) {
    errors.phone = "ফোন নম্বর প্রয়োজন";
  } else if (!/^(?:\+?880|0)1[3-9]\d{8}$/.test(phone.trim())) {
    errors.phone = "সঠিক বাংলাদেশি ফোন নম্বর দিন (যেমন: ০১XXXXXXXXX)";
  }

  if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "সঠিক ইমেইল ঠিকানা দিন";
  }

  if (!division) errors.division = "বিভাগ নির্বাচন করুন";
  if (!district) errors.district = "জেলা নির্বাচন করুন";
  if (!upazila) errors.upazila = "উপজেলা নির্বাচন করুন";

  if (!fullAddress.trim()) {
    errors.fullAddress = "সম্পূর্ণ ঠিকানা প্রয়োজন";
  } else if (fullAddress.trim().length < 10) {
    errors.fullAddress = "কমপক্ষে ১০টি অক্ষরের ঠিকানা দিন";
  }

  return errors;
}

export default function CheckoutPage() {
  const [form, setForm] = useState<CheckoutFormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<CheckoutFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCustomerInfoChange = useCallback(
    (field: keyof CustomerInfo, value: string) => {
      setForm((prev) => ({
        ...prev,
        customerInfo: { ...prev.customerInfo, [field]: value },
      }));
      if (errors[field as keyof CheckoutFormErrors]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field as keyof CheckoutFormErrors];
          return next;
        });
      }
    },
    [errors],
  );

  const handleAddressChange = useCallback(
    (field: keyof ShippingAddress, value: string) => {
      setForm((prev) => ({
        ...prev,
        shippingAddress: { ...prev.shippingAddress, [field]: value },
      }));
      if (errors[field as keyof CheckoutFormErrors]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field as keyof CheckoutFormErrors];
          return next;
        });
      }
    },
    [errors],
  );

  const handlePlaceOrder = useCallback(() => {
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to top to show first error
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate async order placement (UI only — no real API)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  }, [form]);

  return (
    <section className="min-h-screen bg-background py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="ব্রেডক্রাম্ব"
          className="mb-5 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link
            href="/"
            className="transition-colors hover:text-brand"
            aria-label="হোমে ফিরুন"
          >
            হোম
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/cart"
            className="transition-colors hover:text-brand"
            aria-label="কার্টে ফিরুন"
          >
            কার্ট
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="font-medium text-foreground">
            চেকআউট
          </span>
        </nav>

        {/* Page heading */}
        <div className="mb-6 flex items-center gap-3">
          <ShieldCheck aria-hidden="true" className="size-6 shrink-0 text-brand" />
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            চেকআউট
          </h1>
        </div>

        {/* Success banner */}
        {success && (
          <div
            role="status"
            aria-live="polite"
            className="mb-6 flex items-center gap-3 rounded-2xl border border-brand/30 bg-brand/10 px-4 py-4"
          >
            <ShieldCheck aria-hidden="true" className="size-5 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                অর্ডার সফলভাবে দেওয়া হয়েছে! 🎉
              </p>
              <p className="text-xs text-muted-foreground">
                আপনার অর্ডার শীঘ্রই প্রক্রিয়া করা হবে। ধন্যবাদ কেনাকাটার জন্য।
              </p>
            </div>
          </div>
        )}

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left column — forms */}
          <div className="flex flex-col gap-5 lg:col-span-7">
            <CustomerInfoForm
              values={form.customerInfo}
              errors={errors}
              onChange={handleCustomerInfoChange}
            />

            <ShippingAddressForm
              values={form.shippingAddress}
              errors={errors}
              onChange={handleAddressChange}
            />

            <DeliveryMethodSelector
              selected={form.deliveryMethod}
              onChange={(method) =>
                setForm((prev) => ({ ...prev, deliveryMethod: method }))
              }
            />

            <PaymentMethodSelector
              selected={form.paymentMethod}
              onChange={(method) =>
                setForm((prev) => ({ ...prev, paymentMethod: method }))
              }
            />

            {/* Back to cart */}
            <div>
              <Link
                href="/cart"
                aria-label="কার্টে ফিরে যান"
                className={buttonVariants({
                  variant: "ghost",
                  className: "gap-2 text-muted-foreground hover:text-brand",
                })}
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                কার্টে ফিরে যান
              </Link>
            </div>
          </div>

          {/* Right column — order summary + place order */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <CheckoutOrderSummary deliveryMethod={form.deliveryMethod} />

            <PlaceOrderButton
              loading={loading}
              success={success}
              onPlaceOrder={handlePlaceOrder}
            />

            <p className="text-center text-[11px] text-muted-foreground">
              🔒 আপনার তথ্য সম্পূর্ণ নিরাপদ — SSL এনক্রিপ্টেড
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
