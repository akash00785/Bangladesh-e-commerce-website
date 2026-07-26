import type { CartCoupon } from "@/types/cart";

export const VALID_COUPONS: Record<string, CartCoupon> = {
  EIDMUBARAK: {
    code: "EIDMUBARAK",
    discountPercent: 15,
    label: "ঈদ স্পেশাল ১৫% ছাড়",
  },
  NEWUSER: {
    code: "NEWUSER",
    discountPercent: 10,
    label: "নতুন ব্যবহারকারী ১০% ছাড়",
  },
  FASHIONBD: {
    code: "FASHIONBD",
    discountPercent: 20,
    label: "ফ্যাশন বিডি ২০% ছাড়",
  },
};

export const FREE_SHIPPING_THRESHOLD = 2000;
export const SHIPPING_FEE = 120;
export const MAX_ITEM_QUANTITY = 10;
export const MIN_ITEM_QUANTITY = 1;
export const DEFAULT_SIZE = "M";
export const DEFAULT_COLOR = "কালো";
