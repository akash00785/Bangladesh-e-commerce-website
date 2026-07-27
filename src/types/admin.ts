export type AdminStatusTone = "brand" | "sale" | "muted" | "destructive";

export interface AdminStatCard {
  label: string;
  value: string;
  sub: string;
  tone: AdminStatusTone;
}

export interface AdminProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: "active" | "inactive" | "out_of_stock";
  initial: string;
}

export interface AdminOrder {
  id: string;
  customer: string;
  date: string;
  items: number;
  total: string;
  status: string;
  statusTone: AdminStatusTone;
  phone: string;
}

export interface AdminCategory {
  id: string;
  name: string;
  slug: string;
  productCount: number;
  status: "active" | "inactive";
  initial: string;
}

export interface AdminCustomer {
  id: string;
  name: string;
  phone: string;
  email: string;
  orders: number;
  totalSpent: string;
  joinDate: string;
  initial: string;
}

export interface AdminRecentOrder {
  id: string;
  customer: string;
  total: string;
  status: string;
  statusTone: AdminStatusTone;
}

export interface AdminLowStockItem {
  id: string;
  name: string;
  stock: number;
  initial: string;
}
