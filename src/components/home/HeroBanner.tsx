import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-[#f5efe8] min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#8B4513]/8 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-[#d4a982]/25 blur-2xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-10 left-8 w-24 h-24 rounded-full border-2 border-[#8B4513]/12 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 right-1/3 w-12 h-12 rounded-full bg-[#8B4513]/10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-8 w-6 h-6 rounded-full bg-[#d4a982]/50 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
        {/* Left — text content */}
        <div className="flex-1 flex flex-col items-start gap-5 z-10 text-left max-w-xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 bg-[#8B4513]/10 text-[#8B4513] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#8B4513]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513] inline-block" />
            নতুন কালেকশন ২০২৬
          </span>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            নতুন স্টাইল
            <br />
            <span className="text-[#8B4513]">নতুন তুমি</span>
          </h1>

          {/* Supporting text */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-sm">
            এক্সক্লুসিভ কালেকশন —<br className="hidden sm:block" />
            আপনার সেরা পছন্দ এখানেই পাবেন
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-[#8B4513] hover:bg-[#7a3b10] active:bg-[#6b3310] text-white font-bold px-7 py-3 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#8B4513]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4513] focus-visible:ring-offset-2"
            >
              এখনই কিনুন
            </Link>
            <Link
              href="/category"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-[#8B4513] text-[#8B4513] font-bold px-7 py-3 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4513] focus-visible:ring-offset-2"
            >
              কালেকশন দেখুন
            </Link>
          </div>

          {/* Trust stats */}
          <div className="flex items-center gap-6 mt-2 pt-4 border-t border-[#8B4513]/15 w-full">
            <div className="text-center">
              <p className="text-xl font-extrabold text-gray-900">৫০,০০০+</p>
              <p className="text-xs text-gray-500 mt-0.5">সন্তুষ্ট গ্রাহক</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <p className="text-xl font-extrabold text-gray-900">১,০০০+</p>
              <p className="text-xs text-gray-500 mt-0.5">পণ্য সংগ্রহ</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <p className="text-xl font-extrabold text-gray-900">৪.৯ ★</p>
              <p className="text-xs text-gray-500 mt-0.5">গড় রেটিং</p>
            </div>
          </div>
        </div>

        {/* Right — model image */}
        <div className="relative flex-1 flex items-end justify-center lg:justify-end w-full max-w-sm lg:max-w-none">
          {/* Decorative circle behind model */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 lg:right-4 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-[#d4a982]/30 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute top-8 right-16 lg:right-20 w-16 h-16 rounded-full border-4 border-[#8B4513]/20 pointer-events-none"
          />

          {/* Model image */}
          <div className="relative z-10 w-56 sm:w-64 lg:w-80 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-[#8B4513]/20">
            <Image
              src="https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&h=800&fit=crop&auto=format"
              alt="ফ্যাশন মডেল"
              fill
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
              className="object-cover object-top"
              priority
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/20 via-transparent to-transparent" />
          </div>

          {/* Floating badge — top left of image */}
          <div
            aria-hidden="true"
            className="absolute z-20 top-4 right-2 lg:right-0 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100 flex flex-col items-center"
          >
            <span className="text-lg font-extrabold text-[#8B4513]">২০%</span>
            <span className="text-[10px] text-gray-500 font-medium">ছাড়</span>
          </div>
        </div>
      </div>
    </section>
  );
}
