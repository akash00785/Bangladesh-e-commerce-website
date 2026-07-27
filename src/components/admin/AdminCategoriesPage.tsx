"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import { ADMIN_CATEGORIES } from "@/constants/admin";
import type { AdminCategory } from "@/types/admin";

function categoryStatusTone(status: AdminCategory["status"]) {
  return status === "active" ? ("brand" as const) : ("muted" as const);
}

function categoryStatusLabel(status: AdminCategory["status"]) {
  return status === "active" ? "সক্রিয়" : "নিষ্ক্রিয়";
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState(ADMIN_CATEGORIES);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  function handleAddCategory() {
    if (!newName.trim()) return;
    const initial = newName.trim().slice(0, 2);
    const slug = newSlug.trim() || newName.trim().toLowerCase().replace(/\s+/g, "-");
    setCategories((prev) => [
      ...prev,
      {
        id: `c${Date.now()}`,
        name: newName.trim(),
        slug,
        productCount: 0,
        status: "active",
        initial,
      },
    ]);
    setNewName("");
    setNewSlug("");
    setShowAddForm(false);
  }

  function handleEditStart(cat: AdminCategory) {
    setEditId(cat.id);
    setEditName(cat.name);
  }

  function handleEditSave(id: string) {
    if (!editName.trim()) return;
    setCategories((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, name: editName.trim(), initial: editName.trim().slice(0, 2) }
          : c
      )
    );
    setEditId(null);
    setEditName("");
  }

  function handleEditCancel() {
    setEditId(null);
    setEditName("");
  }

  function handleDelete(id: string) {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <section className="px-4 py-8 sm:py-10 lg:px-0">
      {/* Page heading */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-sm font-semibold text-brand">অ্যাডমিন প্যানেল</p>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            ক্যাটাগরি ম্যানেজমেন্ট
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            আপনার স্টোরের সব ক্যাটাগরি দেখুন ও পরিচালনা করুন।
          </p>
        </div>
        <Button
          type="button"
          aria-label="নতুন ক্যাটাগরি যোগ করুন"
          onClick={() => setShowAddForm((v) => !v)}
          className="shrink-0 gap-1.5"
        >
          <Plus aria-hidden="true" className="size-4" />
          নতুন ক্যাটাগরি
        </Button>
      </div>

      {/* Add category form */}
      {showAddForm && (
        <div className="mb-6 rounded-2xl border border-brand/20 bg-brand/5 p-5">
          <h2 className="mb-4 text-sm font-bold text-foreground">
            নতুন ক্যাটাগরি যোগ করুন
          </h2>
          <div className="flex flex-wrap gap-3">
            <div className="min-w-0 flex-1">
              <label
                htmlFor="new-category-name"
                className="mb-1 block text-xs font-medium text-foreground"
              >
                ক্যাটাগরির নাম *
              </label>
              <input
                id="new-category-name"
                type="text"
                name="new-category-name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="যেমন: জ্যাকেট"
                aria-required="true"
                className="h-8 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-3 focus:ring-ring/50"
              />
            </div>
            <div className="min-w-0 flex-1">
              <label
                htmlFor="new-category-slug"
                className="mb-1 block text-xs font-medium text-foreground"
              >
                স্লাগ (ঐচ্ছিক)
              </label>
              <input
                id="new-category-slug"
                type="text"
                name="new-category-slug"
                value={newSlug}
                onChange={(e) => setNewSlug(e.target.value)}
                placeholder="jacket"
                className="h-8 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-3 focus:ring-ring/50"
              />
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <Button
              type="button"
              size="sm"
              onClick={handleAddCategory}
              aria-label="ক্যাটাগরি সেভ করুন"
            >
              সেভ করুন
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setShowAddForm(false);
                setNewName("");
                setNewSlug("");
              }}
              aria-label="ফর্ম বন্ধ করুন"
            >
              বাতিল
            </Button>
          </div>
        </div>
      )}

      {/* Result count */}
      <p className="mb-3 text-sm text-muted-foreground">
        মোট{" "}
        <span className="font-semibold text-foreground">{categories.length}টি</span>{" "}
        ক্যাটাগরি
      </p>

      {/* Categories List */}
      {categories.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-10 text-center">
          <Layers aria-hidden="true" className="mx-auto mb-3 size-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            কোনো ক্যাটাগরি নেই। নতুন ক্যাটাগরি যোগ করুন।
          </p>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-sm font-bold text-brand"
                  >
                    {cat.initial}
                  </div>
                  <div className="min-w-0">
                    {editId === cat.id ? (
                      <input
                        id={`edit-category-${cat.id}`}
                        type="text"
                        name={`edit-category-${cat.id}`}
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        aria-label="ক্যাটাগরির নাম সম্পাদনা করুন"
                        className="h-7 rounded-lg border border-brand bg-background px-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                      />
                    ) : (
                      <p className="font-semibold text-foreground">{cat.name}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      স্লাগ: {cat.slug} · {cat.productCount}টি পণ্য
                    </p>
                  </div>
                </div>
                <AdminStatusBadge
                  label={categoryStatusLabel(cat.status)}
                  tone={categoryStatusTone(cat.status)}
                />
              </div>

              <div className="mt-4 flex items-center justify-end gap-2 border-t border-border pt-3">
                {editId === cat.id ? (
                  <>
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => handleEditSave(cat.id)}
                      aria-label="সম্পাদনা সেভ করুন"
                    >
                      সেভ
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleEditCancel}
                      aria-label="সম্পাদনা বাতিল করুন"
                    >
                      বাতিল
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditStart(cat)}
                      aria-label={`${cat.name} ক্যাটাগরি সম্পাদনা করুন`}
                      className="gap-1.5"
                    >
                      <Pencil aria-hidden="true" className="size-3.5" />
                      সম্পাদনা
                    </Button>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(cat.id)}
                      aria-label={`${cat.name} ক্যাটাগরি মুছুন`}
                      className="gap-1.5"
                    >
                      <Trash2 aria-hidden="true" className="size-3.5" />
                      মুছুন
                    </Button>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
