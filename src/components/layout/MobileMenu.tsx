"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
        aria-expanded={isOpen}
        className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={[
          "fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-[#8B4513]">
          <span className="text-white font-bold text-lg">মেনু</span>
          <button
            onClick={closeMenu}
            aria-label="মেনু বন্ধ করুন"
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-3">
          <ul>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={[
                      "flex items-center px-6 py-3.5 text-base font-medium border-l-4 transition-colors",
                      isActive
                        ? "border-[#8B4513] text-[#8B4513] bg-orange-50"
                        : "border-transparent text-gray-700 hover:border-[#8B4513]/40 hover:text-[#8B4513] hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer Links */}
        <div className="border-t border-gray-200 px-6 py-4 space-y-2 text-sm text-gray-500">
          <Link href="/account/login" onClick={closeMenu} className="block hover:text-[#8B4513]">
            অ্যাকাউন্ট
          </Link>
          <Link href="/wishlist" onClick={closeMenu} className="block hover:text-[#8B4513]">
            উইশলিস্ট
          </Link>
          <Link href="/cart" onClick={closeMenu} className="block hover:text-[#8B4513]">
            কার্ট
          </Link>
        </div>
      </div>
    </div>
  );
}
