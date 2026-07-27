export interface CustomerInfo {
  fullName: string;
  phone: string;
  email: string;
}

export interface ShippingAddress {
  division: string;
  district: string;
  upazila: string;
  fullAddress: string;
}

export type DeliveryMethod = "home" | "express";

export type PaymentMethod = "cod" | "bkash" | "nagad" | "rocket";

export interface CheckoutFormState {
  customerInfo: CustomerInfo;
  shippingAddress: ShippingAddress;
  deliveryMethod: DeliveryMethod;
  paymentMethod: PaymentMethod;
}

export interface CheckoutFormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  division?: string;
  district?: string;
  upazila?: string;
  fullAddress?: string;
}

export interface DeliveryOption {
  id: DeliveryMethod;
  label: string;
  description: string;
  fee: number;
  duration: string;
}

export interface PaymentOption {
  id: PaymentMethod;
  label: string;
  description: string;
  icon: string;
}

export interface Division {
  id: string;
  name: string;
}

export interface District {
  id: string;
  name: string;
  divisionId: string;
}

export interface Upazila {
  id: string;
  name: string;
  districtId: string;
}
