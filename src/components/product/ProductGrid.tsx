import type { Product } from "@/types/product";

import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <ul
      className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
      role="list"
      aria-label="পণ্যের তালিকা"
    >
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}