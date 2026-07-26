"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { CartContextValue, CartCoupon, CartItem } from "@/types/cart";
import type { Product } from "@/types/product";
import { parseBanglaPrice } from "@/utils/price";
import { FEATURED_PRODUCTS } from "@/constants/products";
import { DEFAULT_COLOR, DEFAULT_SIZE } from "@/constants/cart";

const CartContext = createContext<CartContextValue | null>(null);

const DEMO_ITEMS: CartItem[] = [
  {
    ...FEATURED_PRODUCTS[0],
    cartItemId: FEATURED_PRODUCTS[0].id,
    quantity: 2,
    selectedSize: "M",
    selectedColor: "কালো",
  },
  {
    ...FEATURED_PRODUCTS[2],
    cartItemId: FEATURED_PRODUCTS[2].id,
    quantity: 1,
    selectedSize: "L",
    selectedColor: "বাদামি",
  },
  {
    ...FEATURED_PRODUCTS[6],
    cartItemId: FEATURED_PRODUCTS[6].id,
    quantity: 1,
    selectedSize: "XL",
    selectedColor: "সাদা",
  },
];

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(DEMO_ITEMS);
  const [appliedCoupon, setAppliedCoupon] = useState<CartCoupon | null>(null);

  const addItem = useCallback(
    (
      product: Product,
      quantity: number = 1,
      selectedSize: string = DEFAULT_SIZE,
      selectedColor: string = DEFAULT_COLOR,
    ) => {
      const cartItemId = product.id;
      setItems((prev) => {
        const existing = prev.find((item) => item.cartItemId === cartItemId);
        if (existing) {
          return prev.map((item) =>
            item.cartItemId === cartItemId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        }
        return [
          ...prev,
          { ...product, cartItemId, quantity, selectedSize, selectedColor },
        ];
      });
    },
    [],
  );

  const removeItem = useCallback((cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  }, []);

  const updateQuantity = useCallback((cartItemId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item,
      ),
    );
  }, []);

  const applyCoupon = useCallback((coupon: CartCoupon | null) => {
    setAppliedCoupon(coupon);
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setAppliedCoupon(null);
  }, []);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + parseBanglaPrice(item.currentPrice) * item.quantity,
        0,
      ),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      appliedCoupon,
      addItem,
      removeItem,
      updateQuantity,
      applyCoupon,
      clearCart,
      itemCount,
      subtotal,
    }),
    [
      items,
      appliedCoupon,
      addItem,
      removeItem,
      updateQuantity,
      applyCoupon,
      clearCart,
      itemCount,
      subtotal,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}
