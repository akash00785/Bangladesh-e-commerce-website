"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Heart, ShoppingCart, ShoppingBag } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlistCount] = useState(0);
  const [cartCount] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 mr-2">
          <div className="bg-[#8B4513] p-1.5 rounded-lg">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold text-gray-900 leading-none">
              Fashion{" "}
              <span className="text-[#8B4513]">Bazar</span>
            </div>
            <div className="text-[10px] text-gray-500">স্টাইল আপনার, বিশ্বাস আমাদের</div>
          </div>
        </Link>

        {/* Search Box */}
        <form
          onSubmit={handleSearch}
          className="flex-1 flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-[#8B4513] focus-within:ring-1 focus-within:ring-[#8B4513] transition-all"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="খুঁজুন এখানে..."
            className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none bg-white"
          />
          <button
            type="submit"
            className="bg-[#8B4513] hover:bg-[#7a3b10] text-white px-5 py-2 text-sm font-semibold transition-colors shrink-0"
          >
            খুঁজুন
          </button>
        </form>

        {/* Action Icons */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Login */}
          <Link
            href="/account/login"
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-[#8B4513]"
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] hidden sm:block">অ্যাকাউন্ট</span>
          </Link>

          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="relative flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-[#8B4513]"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#8B4513] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {wishlistCount}
              </span>
            )}
            <span className="text-[10px] hidden sm:block">উইশলিস্ট</span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-[#8B4513]"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#8B4513] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
            <span className="text-[10px] hidden sm:block">কার্ট</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
