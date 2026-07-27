import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fashion Bazar — বাংলাদেশের সেরা ফ্যাশন শপ",
    short_name: "Fashion Bazar",
    description:
      "সহজ কেনাকাটা, দ্রুত ডেলিভারি, সেরা মানের পণ্য। শার্ট, পান্টো, জুতা, টি-শার্ট এবং আরও অনেক কিছু।",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6b4226",
    orientation: "portrait",
    categories: ["shopping", "fashion", "ecommerce"],
    lang: "bn",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
