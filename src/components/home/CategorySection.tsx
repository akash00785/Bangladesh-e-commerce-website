import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "@/constants/home";

export default function CategorySection() {
  return (
    <section
      aria-labelledby="category-heading"
      className="w-full py-12 px-4 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2
            id="category-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
          >
            ক্যাটেগরি
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            আপনার পছন্দের ক্যাটেগরি বেছে নিন
          </p>
          {/* Decorative underline */}
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-[#8B4513]" />
        </div>

        {/* Category grid */}
        <ul
          className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-x-4 gap-y-8"
          role="list"
          aria-label="পণ্য ক্যাটেগরি তালিকা"
        >
          {CATEGORIES.map((category) => (
            <li key={category.id} className="flex justify-center">
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
