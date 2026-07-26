import type { Product } from "@/types/product";

export interface CartItem extends Product {
  cartItemId: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface CartCoupon {
  code: string;
  discountPercent: number;
  label: string;
}

export interface CartContextValue {
  items: CartItem[];
  appliedCoupon: CartCoupon | null;
  addItem: (
    product: Product,
    quantity?: number,
    selectedSize?: string,
    selectedColor?: string,
  ) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  applyCoupon: (coupon: CartCoupon | null) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}
