import Link from "next/link";
import Image from "next/image";
import type { CategoryItem } from "@/types/home";

interface CategoryCardProps {
  category: CategoryItem;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group flex flex-col items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4513] focus-visible:ring-offset-2 rounded-2xl"
      aria-label={`${category.namebn} ক্যাটেগরি দেখুন`}
    >
      {/* Image circle */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-50 transition-all duration-300 group-hover:border-[#8B4513] group-hover:shadow-lg group-hover:shadow-[#8B4513]/20 group-hover:scale-105">
        <Image
          src={category.image}
          alt={category.namebn}
          fill
          sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#8B4513]/0 group-hover:bg-[#8B4513]/10 transition-colors duration-300 rounded-full" />
      </div>

      {/* Category name */}
      <span className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-[#8B4513] transition-colors duration-200 text-center leading-tight">
        {category.namebn}
      </span>
    </Link>
  );
}
