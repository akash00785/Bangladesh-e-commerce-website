export interface AccountUser {
  name: string;
  phone: string;
  email: string;
  memberSince: string;
  initials: string;
}

export interface AccountOrder {
  id: string;
  date: string;
  item: string;
  itemCount?: number;
  total: string;
  status: string;
  statusTone: "brand" | "sale" | "muted";
}

export interface SavedAddress {
  id: string;
  label: string;
  recipient: string;
  phone: string;
  address: string;
  isDefault?: boolean;
}

export interface WishlistItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  category: string;
  inStock: boolean;
  initial: string;
}
