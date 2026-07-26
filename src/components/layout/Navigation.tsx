"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="hidden md:flex items-center gap-0">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "block px-4 py-3 text-sm font-medium transition-colors relative",
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all",
                    isActive
                      ? "text-[#8B4513] after:bg-[#8B4513]"
                      : "text-gray-700 hover:text-[#8B4513] after:bg-transparent hover:after:bg-[#8B4513]/40",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
