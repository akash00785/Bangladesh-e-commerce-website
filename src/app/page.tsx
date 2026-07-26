import HeroBanner from "@/components/home/HeroBanner";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FlashSaleSection from "@/components/home/FlashSaleSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ServiceFeatures />
      <CategorySection />
      <FeaturedProducts />
      <FlashSaleSection />
    </>
  );
}
