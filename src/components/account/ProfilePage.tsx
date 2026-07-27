"use client";

import { useState } from "react";
import { Camera, Check, Pencil, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_ACCOUNT_USER } from "@/constants/account";

interface ProfileFormState {
  name: string;
  phone: string;
  email: string;
  gender: string;
  dob: string;
}

function FieldWrapper({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState<ProfileFormState>({
    name: MOCK_ACCOUNT_USER.name,
    phone: MOCK_ACCOUNT_USER.phone,
    email: MOCK_ACCOUNT_USER.email,
    gender: "পুরুষ",
    dob: "১৯৯৫",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function handleCancel() {
    setForm({
      name: MOCK_ACCOUNT_USER.name,
      phone: MOCK_ACCOUNT_USER.phone,
      email: MOCK_ACCOUNT_USER.email,
      gender: "পুরুষ",
      dob: "১৯৯৫",
    });
    setIsEditing(false);
  }

  const inputBase =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground";

  return (
    <section className="px-4 py-8 sm:py-10 lg:px-0">
      <div className="mb-6">
        <p className="mb-1 text-sm font-semibold text-brand">আমার অ্যাকাউন্ট</p>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">প্রোফাইল</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          আপনার ব্যক্তিগত তথ্য পরিচালনা করুন।
        </p>
      </div>

      {/* Success banner */}
      {saved && (
        <div
          role="status"
          aria-live="polite"
          className="mb-4 flex items-center gap-3 rounded-xl border border-brand/20 bg-brand/10 px-4 py-3 text-sm font-medium text-brand"
        >
          <Check aria-hidden="true" className="size-4 shrink-0" />
          প্রোফাইল সফলভাবে আপডেট হয়েছে।
        </div>
      )}

      <div className="rounded-2xl border border-border bg-card shadow-sm">
        {/* Avatar section */}
        <div className="border-b border-border p-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
            <div className="relative">
              <div
                className="flex size-20 items-center justify-center rounded-full bg-brand text-3xl font-bold text-brand-foreground"
                aria-label={`${MOCK_ACCOUNT_USER.name} এর প্রোফাইল ছবি`}
              >
                {MOCK_ACCOUNT_USER.initials}
              </div>
              <button
                type="button"
                aria-label="প্রোফাইল ছবি পরিবর্তন করুন"
                className="absolute bottom-0 right-0 flex size-7 items-center justify-center rounded-full border-2 border-card bg-muted transition-colors hover:bg-border"
              >
                <Camera aria-hidden="true" className="size-3.5 text-muted-foreground" />
              </button>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-bold text-foreground">{MOCK_ACCOUNT_USER.name}</h2>
              <p className="text-sm text-muted-foreground">{MOCK_ACCOUNT_USER.memberSince}</p>
              <div className="mt-1 flex items-center justify-center gap-3 sm:justify-start">
                <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
                  <UserRound aria-hidden="true" className="size-3" />
                  যাচাইকৃত সদস্য
                </span>
              </div>
            </div>
            <div className="sm:ml-auto">
              {!isEditing ? (
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => setIsEditing(true)}
                  aria-label="প্রোফাইল সম্পাদনা মোড চালু করুন"
                >
                  <Pencil aria-hidden="true" className="size-4" />
                  সম্পাদনা
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        {/* Personal information form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="p-6"
          aria-label="ব্যক্তিগত তথ্য ফর্ম"
        >
          <h3 className="mb-5 text-base font-bold text-foreground">ব্যক্তিগত তথ্য</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <FieldWrapper label="পূর্ণ নাম" htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                disabled={!isEditing}
                autoComplete="name"
                aria-required="true"
                className={inputBase}
              />
            </FieldWrapper>

            <FieldWrapper label="ফোন নম্বর" htmlFor="phone">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                disabled={!isEditing}
                autoComplete="tel"
                aria-required="true"
                className={inputBase}
              />
            </FieldWrapper>

            <FieldWrapper label="ইমেইল ঠিকানা" htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                disabled={!isEditing}
                autoComplete="email"
                className={inputBase}
              />
            </FieldWrapper>

            <FieldWrapper label="লিঙ্গ" htmlFor="gender">
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                disabled={!isEditing}
                className={inputBase}
              >
                <option value="পুরুষ">পুরুষ</option>
                <option value="মহিলা">মহিলা</option>
                <option value="অন্যান্য">অন্যান্য</option>
              </select>
            </FieldWrapper>

            <FieldWrapper label="জন্ম সাল" htmlFor="dob">
              <input
                type="text"
                id="dob"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="যেমন: ১৯৯৫"
                autoComplete="bday-year"
                className={inputBase}
              />
            </FieldWrapper>
          </div>

          {isEditing && (
            <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="ghost"
                className="w-full sm:w-auto"
                onClick={handleCancel}
              >
                বাতিল
              </Button>
              <Button
                type="submit"
                className="w-full gap-2 bg-brand text-brand-foreground hover:bg-brand/90 sm:w-auto"
                aria-label="প্রোফাইল পরিবর্তন সেভ করুন"
              >
                <Check aria-hidden="true" className="size-4" />
                পরিবর্তন সেভ করুন
              </Button>
            </div>
          )}
        </form>

        {/* Stats summary */}
        <div className="grid grid-cols-2 gap-px border-t border-border bg-border sm:grid-cols-3">
          {[
            { label: "মোট অর্ডার", value: "৬টি" },
            { label: "সেভ করা ঠিকানা", value: "৩টি" },
            { label: "উইশলিস্ট পণ্য", value: "৬টি" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 bg-card px-4 py-4 text-center last:col-span-2 last:sm:col-span-1"
            >
              <span className="text-xl font-bold text-brand">{value}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
