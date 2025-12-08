import React from 'react';
import TopBanner from '@/components/sections/top-banner';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { Check, Leaf, Globe, Award, TrendingUp } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      number: '01',
      title: 'Pineapple Production',
      description: 'Premium quality pineapples grown with sustainable farming practices. Our pineapples are known for their exceptional sweetness and are exported to markets worldwide.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/images_7.png',
    },
    {
      number: '02',
      title: 'Mango Production',
      description: 'Juicy, ripe mangoes cultivated by our experienced member farmers. Available in multiple varieties to meet diverse international market demands.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/16-14.png',
    },
    {
      number: '03',
      title: 'Papaya Production',
      description: 'Fresh papayas harvested at peak ripeness, packed with nutrients and flavor. Grown using modern agricultural techniques for consistent quality.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/16-14.png',
    },
    {
      number: '04',
      title: 'Vegetable Production',
      description: 'Wide variety of fresh vegetables including peppers, okra, and leafy greens. Cultivated with care to maintain nutritional value and freshness.',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/16-14.png',
    },
  ];

  const categories = [
    {
      icon: Leaf,
      title: 'Fresh Produce',
      description: 'Farm-fresh fruits and vegetables harvested at peak quality and delivered to international markets.',
    },
    {
      icon: Award,
      title: 'Processed Foods',
      description: 'Value-added products including dried fruits, juices, and packaged goods meeting global standards.',
    },
    {
      icon: Globe,
      title: 'Export Quality',
      description: 'All products meet international quality certifications and food safety standards for global distribution.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Products sourced from sustainable farming practices supporting local communities and the environment.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#0A3622] py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
              <p className="text-xl text-white/90">
                Quality Ghanaian products trusted by international buyers worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                WHAT WE OFFER
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Products You Can Trust
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                FAGE members produce and export a diverse range of high-quality agricultural products. 
                From fresh produce to processed goods, every product meets international standards and 
                represents the best of Ghanaian agriculture.
              </p>
            </div>

            {/* Product Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-secondary p-8 rounded-xl text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{category.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                FEATURED PRODUCTS
              </span>
              <h2 className="text-4xl font-bold text-foreground">Our Main Exports</h2>
            </div>

            <div className="space-y-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl font-bold text-primary">{product.number}</span>
                      <h3 className="text-3xl font-bold text-foreground">{product.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">International quality standards</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Sustainable farming practices</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Year-round availability</span>
                      </li>
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-auto shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                  QUALITY ASSURANCE
                </span>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Meeting Global Standards
                </h2>
              </div>

              <div className="bg-secondary p-10 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold text-primary mb-3">100%</div>
                    <p className="text-muted-foreground font-semibold">Quality Certified</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-primary mb-3">50+</div>
                    <p className="text-muted-foreground font-semibold">Export Markets</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-primary mb-3">1000+</div>
                    <p className="text-muted-foreground font-semibold">Products Exported</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  All products from FAGE members undergo rigorous quality control processes to ensure 
                  they meet international food safety and quality standards. We work closely with 
                  certification bodies and regulatory agencies to maintain compliance with global requirements.
                </p>
                <p>
                  Our commitment to quality extends beyond the final product. We support our members 
                  with training on good agricultural practices, post-harvest handling, and packaging 
                  standards to ensure consistency and excellence at every stage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0A3622] py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Interested in Our Products?</h2>
              <p className="text-xl text-white/90 mb-8">
                Connect with our member exporters to source authentic, high-quality Ghanaian products 
                for your market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-white text-foreground font-bold text-base py-4 px-10 rounded-full transition-all hover:bg-white/90"
                >
                  Contact Our Members
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-base py-4 px-10 rounded-full transition-all hover:bg-white hover:text-foreground"
                >
                  Download Product Catalog
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
