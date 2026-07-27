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