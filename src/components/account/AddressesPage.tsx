"use client";

import { useState } from "react";
import { MapPin, Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_SAVED_ADDRESSES } from "@/constants/account";
import type { SavedAddress } from "@/types/account";

function AddressCard({
  address,
  onEdit,
  onDelete,
}: {
  address: SavedAddress;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/10">
            <MapPin aria-hidden="true" className="size-4 text-brand" />
          </div>
          <h3 className="font-semibold text-foreground">{address.label}</h3>
        </div>
        {address.isDefault && (
          <span className="shrink-0 rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand">
            ডিফল্ট
          </span>
        )}
      </div>

      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium text-foreground">{address.recipient}</p>
        <p className="text-xs text-muted-foreground">{address.phone}</p>
        <p className="mt-2 text-xs leading-5 text-muted-foreground">{address.address}</p>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 gap-1.5"
          onClick={() => onEdit(address.id)}
          aria-label={`${address.label} সম্পাদনা করুন`}
        >
          <Pencil aria-hidden="true" className="size-3.5" />
          সম্পাদনা
        </Button>
        <Button
          variant="destructive"
          size="sm"
          className="flex-1 gap-1.5"
          onClick={() => onDelete(address.id)}
          aria-label={`${address.label} মুছে ফেলুন`}
          disabled={address.isDefault}
        >
          <Trash2 aria-hidden="true" className="size-3.5" />
          মুছুন
        </Button>
      </div>
    </article>
  );
}

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<SavedAddress[]>(MOCK_SAVED_ADDRESSES);

  function handleEdit(id: string) {
    // UI only — edit form would open here
    void id;
  }

  function handleDelete(id: string) {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  }

  return (
    <section className="px-4 py-8 sm:py-10 lg:px-0">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-1 text-sm font-semibold text-brand">আমার অ্যাকাউন্ট</p>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">সেভ করা ঠিকানা</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            আপনার ডেলিভারি ঠিকানাগুলো পরিচালনা করুন।
          </p>
        </div>
        <Button
          variant="outline"
          className="gap-2 self-start sm:self-auto"
          aria-label="নতুন ঠিকানা যোগ করুন"
        >
          <Plus aria-hidden="true" className="size-4" />
          নতুন ঠিকানা
        </Button>
      </div>

      {addresses.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card py-16 text-center">
          <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
            <MapPin aria-hidden="true" className="size-8 text-muted-foreground" />
          </div>
          <h2 className="mb-2 text-lg font-bold text-foreground">কোনো ঠিকানা নেই</h2>
          <p className="mb-6 max-w-xs text-sm text-muted-foreground">
            আপনি এখনো কোনো ঠিকানা সেভ করেননি। নতুন ঠিকানা যোগ করুন।
          </p>
          <Button variant="outline" className="gap-2">
            <Plus aria-hidden="true" className="size-4" />
            ঠিকানা যোগ করুন
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {addresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-4">
        <MapPin aria-hidden="true" className="size-5 shrink-0 text-brand" />
        <p className="text-sm text-muted-foreground">
          ডিফল্ট ঠিকানা মুছে ফেলা যাবে না।
        </p>
      </div>
    </section>
  );
}
