import TopBanner from '@/components/sections/top-banner';
import Header from '@/components/sections/header';
import HeroSlider from '@/components/sections/hero-slider';
import ServicesGrid from '@/components/sections/services-grid';
import AboutSection from '@/components/sections/about-section';
import StatsSection from '@/components/sections/stats-section';
import ProductsSection from '@/components/sections/products-section';
import MembershipCta from '@/components/sections/membership-cta';
import TestimonialsCarousel from '@/components/sections/testimonials-carousel';
import NewsBlogSection from '@/components/sections/news-blog';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Header />
      <main className="flex-grow">
        <HeroSlider />
        <ServicesGrid />
        <AboutSection />
        <StatsSection />
        <ProductsSection />
        <MembershipCta />
        <TestimonialsCarousel />
        <NewsBlogSection />
      </main>
      <Footer />
    </div>
  );
}