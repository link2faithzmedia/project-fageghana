import React from 'react';
import TopBanner from '@/components/sections/top-banner';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { Check, Target, Eye, Users } from 'lucide-react';

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#0A3622] py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Who We Are</h1>
              <p className="text-xl text-white/90">
                Ghana's leading enabler of Non-Traditional Exports since 1992
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                  ABOUT FAGE
                </span>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Federation of Associations of Ghanaian Exporters
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The Federation of Associations of Ghanaian Exporters (FAGE) is an umbrella
                  organization of exporter and product associations, established in 1992. We aim to
                  be Ghana's leading enabler of Non-Traditional Exports, empowering members for
                  international success through global best practices, advocacy, market
                  development, and facilitated funding.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  FAGE is dedicated to export growth and innovation, connecting locally manufactured
                  goods and products to international buyers while maintaining the highest standards
                  of quality and authenticity.
                </p>
              </div>
              <div>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/16-14.png"
                  alt="FAGE Operations"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="bg-secondary p-10 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower Ghanaian exporters for international success by providing global best
                  practices, advocacy, market development opportunities, and facilitating access to
                  funding and resources needed for export growth.
                </p>
              </div>
              <div className="bg-secondary p-10 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be recognized as Ghana's leading enabler of Non-Traditional Exports,
                  championing innovation, quality, and sustainable growth in the export sector
                  while promoting authentic Ghanaian products globally.
                </p>
              </div>
            </div>

            {/* What We Stand For */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                  OUR VALUES
                </span>
                <h2 className="text-4xl font-bold text-foreground">What We Stand For</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-foreground">Quality Excellence</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We uphold the highest standards of quality in all Ghanaian export products,
                    ensuring global competitiveness and customer satisfaction.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-foreground">Member Empowerment</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide our members with training, resources, and support needed to succeed
                    in international markets and grow their export businesses.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-foreground">Market Development</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We actively connect Ghanaian exporters with international buyers, creating
                    sustainable trade relationships and expanding market access.
                  </p>
                </div>
              </div>
            </div>

            {/* History Section */}
            <div className="bg-secondary py-16 px-10 rounded-xl">
              <div className="max-w-4xl mx-auto">
                <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                  OUR JOURNEY
                </span>
                <h2 className="text-4xl font-bold mb-8 text-foreground">Over 30 Years of Excellence</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Established in 1992, the Federation of Associations of Ghanaian Exporters (FAGE)
                    has been at the forefront of promoting and enabling non-traditional exports from
                    Ghana for over three decades.
                  </p>
                  <p>
                    Throughout our history, we have consistently advocated for policies that support
                    exporters, facilitated billions of dollars in export value, and helped over 1,200
                    members expand their international presence. Our impact extends across various
                    sectors including agriculture, manufacturing, and value-added products.
                  </p>
                  <p>
                    Today, FAGE continues to be the voice of Ghanaian exporters, working closely with
                    government agencies, international organizations, and trade partners to create
                    opportunities and remove barriers to export success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0A3622] py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Join the FAGE Community</h2>
              <p className="text-xl text-white/90 mb-8">
                Become part of Ghana's largest network of exporters and take your business to
                international markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-white text-foreground font-bold text-base py-4 px-10 rounded-full transition-all hover:bg-white/90"
                >
                  Become a Member
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-base py-4 px-10 rounded-full transition-all hover:bg-white hover:text-foreground"
                >
                  Contact Us
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
