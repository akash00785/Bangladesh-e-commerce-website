import type { AccountOrder, AccountUser, SavedAddress } from "@/types/account";

export const MOCK_ACCOUNT_USER: AccountUser = {
  name: "সাব্বির আহমেদ",
  phone: "০১৭১২৩৪৫৬৭৮",
  email: "sabbir.ahmed@example.com",
  memberSince: "জানুয়ারি ২০২৪ থেকে সদস্য",
  initials: "সা",
};

export const MOCK_ACCOUNT_ORDERS: AccountOrder[] = [
  {
    id: "#FB-10482",
    date: "১৮ জুলাই, ২০২৬",
    item: "প্রিমিয়াম স্লিম ফিট শার্ট ও আরও ১টি",
    total: "৳ ২,৮৮০",
    status: "ডেলিভারি হয়েছে",
    statusTone: "brand",
  },
  {
    id: "#FB-10436",
    date: "০৯ জুলাই, ২০২৬",
    item: "লেদার ফরমাল লোফার",
    total: "৳ ২,৭৯০",
    status: "পথে আছে",
    statusTone: "sale",
  },
  {
    id: "#FB-10391",
    date: "২৮ জুন, ২০২৬",
    item: "অর্গানিক কটন টি-শার্ট",
    total: "৳ ৮৯০",
    status: "ডেলিভারি হয়েছে",
    statusTone: "brand",
  },
];

export const MOCK_SAVED_ADDRESSES: SavedAddress[] = [
  {
    id: "home",
    label: "বাসার ঠিকানা",
    recipient: "সাব্বির আহমেদ",
    phone: "০১৭১২৩৪৫৬৭৮",
    address: "বাড়ি ১২, রোড ৫, ধানমন্ডি, ঢাকা ১২০৯",
    isDefault: true,
  },
  {
    id: "office",
    label: "অফিস",
    recipient: "সাব্বির আহমেদ",
    phone: "০১৭১২৩৪৫৬৭৮",
    address: "লেভেল ৬, গুলশান অ্যাভিনিউ, ঢাকা ১২১২",
  },
];