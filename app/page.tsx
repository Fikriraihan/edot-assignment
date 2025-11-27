import { Footer } from "@/features/Footer/Footer";
import HeroSection from "@/features/Hero/HeroSection";
import ProductSection from "@/features/Product/ProductSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductSection />
      <Footer />
    </main>
  );
}
