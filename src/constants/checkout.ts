import type {
  DeliveryOption,
  Division,
  District,
  Upazila,
  PaymentOption,
} from "@/types/checkout";

export const DELIVERY_OPTIONS: DeliveryOption[] = [
  {
    id: "home",
    label: "হোম ডেলিভারি",
    description: "৩–৫ কার্যদিবসের মধ্যে ডেলিভারি",
    fee: 120,
    duration: "৩–৫ কার্যদিবস",
  },
  {
    id: "express",
    label: "এক্সপ্রেস ডেলিভারি",
    description: "২৪ ঘন্টার মধ্যে ডেলিভারি (ঢাকার মধ্যে)",
    fee: 200,
    duration: "২৪ ঘন্টা",
  },
];

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: "cod",
    label: "ক্যাশ অন ডেলিভারি",
    description: "পণ্য পাওয়ার পরে নগদে পেমেন্ট করুন",
    icon: "💵",
  },
  {
    id: "bkash",
    label: "bKash",
    description: "bKash মোবাইল ব্যাংকিং দিয়ে পেমেন্ট করুন",
    icon: "📱",
  },
  {
    id: "nagad",
    label: "Nagad",
    description: "Nagad মোবাইল ব্যাংকিং দিয়ে পেমেন্ট করুন",
    icon: "📲",
  },
  {
    id: "rocket",
    label: "Rocket",
    description: "Dutch-Bangla Rocket দিয়ে পেমেন্ট করুন",
    icon: "🚀",
  },
];

export const DIVISIONS: Division[] = [
  { id: "dhaka", name: "ঢাকা" },
  { id: "chittagong", name: "চট্টগ্রাম" },
  { id: "rajshahi", name: "রাজশাহী" },
  { id: "khulna", name: "খুলনা" },
  { id: "barisal", name: "বরিশাল" },
  { id: "sylhet", name: "সিলেট" },
  { id: "rangpur", name: "রংপুর" },
  { id: "mymensingh", name: "ময়মনসিংহ" },
];

export const DISTRICTS: District[] = [
  // ঢাকা
  { id: "dhaka-district", name: "ঢাকা", divisionId: "dhaka" },
  { id: "gazipur", name: "গাজীপুর", divisionId: "dhaka" },
  { id: "narayanganj", name: "নারায়ণগঞ্জ", divisionId: "dhaka" },
  { id: "tangail", name: "টাঙ্গাইল", divisionId: "dhaka" },
  { id: "manikganj", name: "মানিকগঞ্জ", divisionId: "dhaka" },
  { id: "munshiganj", name: "মুন্সিগঞ্জ", divisionId: "dhaka" },
  { id: "narsingdi", name: "নরসিংদী", divisionId: "dhaka" },
  // চট্টগ্রাম
  { id: "chittagong-district", name: "চট্টগ্রাম", divisionId: "chittagong" },
  { id: "coxsbazar", name: "কক্সবাজার", divisionId: "chittagong" },
  { id: "comilla", name: "কুমিল্লা", divisionId: "chittagong" },
  { id: "noakhali", name: "নোয়াখালী", divisionId: "chittagong" },
  { id: "feni", name: "ফেনী", divisionId: "chittagong" },
  // রাজশাহী
  { id: "rajshahi-district", name: "রাজশাহী", divisionId: "rajshahi" },
  { id: "bogra", name: "বগুড়া", divisionId: "rajshahi" },
  { id: "chapainawabganj", name: "চাঁপাইনবাবগঞ্জ", divisionId: "rajshahi" },
  { id: "naogaon", name: "নওগাঁ", divisionId: "rajshahi" },
  // খুলনা
  { id: "khulna-district", name: "খুলনা", divisionId: "khulna" },
  { id: "jessore", name: "যশোর", divisionId: "khulna" },
  { id: "satkhira", name: "সাতক্ষীরা", divisionId: "khulna" },
  // বরিশাল
  { id: "barisal-district", name: "বরিশাল", divisionId: "barisal" },
  { id: "patuakhali", name: "পটুয়াখালী", divisionId: "barisal" },
  // সিলেট
  { id: "sylhet-district", name: "সিলেট", divisionId: "sylhet" },
  { id: "moulvibazar", name: "মৌলভীবাজার", divisionId: "sylhet" },
  { id: "habiganj", name: "হবিগঞ্জ", divisionId: "sylhet" },
  // রংপুর
  { id: "rangpur-district", name: "রংপুর", divisionId: "rangpur" },
  { id: "dinajpur", name: "দিনাজপুর", divisionId: "rangpur" },
  { id: "kurigram", name: "কুড়িগ্রাম", divisionId: "rangpur" },
  // ময়মনসিংহ
  { id: "mymensingh-district", name: "ময়মনসিংহ", divisionId: "mymensingh" },
  { id: "netrokona", name: "নেত্রকোণা", divisionId: "mymensingh" },
  { id: "jamalpur", name: "জামালপুর", divisionId: "mymensingh" },
];

export const UPAZILAS: Upazila[] = [
  // ঢাকা জেলা
  { id: "dhanmondi", name: "ধানমন্ডি", districtId: "dhaka-district" },
  { id: "gulshan", name: "গুলশান", districtId: "dhaka-district" },
  { id: "mirpur", name: "মিরপুর", districtId: "dhaka-district" },
  { id: "uttara", name: "উত্তরা", districtId: "dhaka-district" },
  { id: "motijheel", name: "মতিঝিল", districtId: "dhaka-district" },
  { id: "demra", name: "ডেমরা", districtId: "dhaka-district" },
  { id: "lalbagh", name: "লালবাগ", districtId: "dhaka-district" },
  // গাজীপুর
  { id: "gazipur-sadar", name: "গাজীপুর সদর", districtId: "gazipur" },
  { id: "kaliakair", name: "কালিয়াকৈর", districtId: "gazipur" },
  { id: "sreepur", name: "শ্রীপুর", districtId: "gazipur" },
  // নারায়ণগঞ্জ
  { id: "narayanganj-sadar", name: "নারায়ণগঞ্জ সদর", districtId: "narayanganj" },
  { id: "araihazar", name: "আড়াইহাজার", districtId: "narayanganj" },
  // চট্টগ্রাম জেলা
  { id: "kotwali", name: "কোতোয়ালি", districtId: "chittagong-district" },
  { id: "double-mooring", name: "ডবল মুরিং", districtId: "chittagong-district" },
  { id: "panchlaish", name: "পাঁচলাইশ", districtId: "chittagong-district" },
  { id: "hathazari", name: "হাটহাজারী", districtId: "chittagong-district" },
  // কক্সবাজার
  { id: "coxsbazar-sadar", name: "কক্সবাজার সদর", districtId: "coxsbazar" },
  { id: "teknaf", name: "টেকনাফ", districtId: "coxsbazar" },
  // রাজশাহী জেলা
  { id: "rajshahi-sadar", name: "রাজশাহী সদর", districtId: "rajshahi-district" },
  { id: "godagari", name: "গোদাগাড়ী", districtId: "rajshahi-district" },
  // খুলনা জেলা
  { id: "khulna-sadar", name: "খুলনা সদর", districtId: "khulna-district" },
  { id: "sonadanga", name: "সোনাডাঙ্গা", districtId: "khulna-district" },
  // সিলেট জেলা
  { id: "sylhet-sadar", name: "সিলেট সদর", districtId: "sylhet-district" },
  { id: "golapganj", name: "গোলাপগঞ্জ", districtId: "sylhet-district" },
  // বরিশাল জেলা
  { id: "barisal-sadar", name: "বরিশাল সদর", districtId: "barisal-district" },
  { id: "babuganj", name: "বাবুগঞ্জ", districtId: "barisal-district" },
  // রংপুর জেলা
  { id: "rangpur-sadar", name: "রংপুর সদর", districtId: "rangpur-district" },
  { id: "pirganj", name: "পীরগঞ্জ", districtId: "rangpur-district" },
  // ময়মনসিংহ জেলা
  { id: "mymensingh-sadar", name: "ময়মনসিংহ সদর", districtId: "mymensingh-district" },
  { id: "trishal", name: "ত্রিশাল", districtId: "mymensingh-district" },
];

export const EXPRESS_DELIVERY_FEE = 200;
export const HOME_DELIVERY_FEE = 120;
