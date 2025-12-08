import React from 'react';
import TopBanner from '@/components/sections/top-banner';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { Megaphone, Users, TrendingUp, FileSearch, ArrowRight, Check } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#0A3622] py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-white/90">
                Empowering Ghanaian exporters with comprehensive support and resources
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                WHAT WE DO
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Connecting Locally Manufactured Goods to International Buyers
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                FAGE provides a comprehensive suite of services designed to support Ghanaian exporters
                at every stage of their export journey. From policy advocacy to market access, we are
                committed to your success in international markets.
              </p>
            </div>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {/* Advocacy Service */}
              <div className="bg-secondary p-10 rounded-xl">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Megaphone className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Advocacy</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We represent the interests of our members at the highest levels of government and
                  international trade organizations. Our advocacy efforts focus on creating favorable
                  policies, reducing trade barriers, and ensuring that the voice of Ghanaian exporters
                  is heard in critical decision-making processes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Policy development and reform advocacy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Trade barrier reduction initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Government and stakeholder engagement</span>
                  </li>
                </ul>
              </div>

              {/* Matchmaking Service */}
              <div className="bg-secondary p-10 rounded-xl">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Matchmaking</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our matchmaking services connect Ghanaian exporters with international buyers,
                  distributors, and trade partners. We facilitate business-to-business meetings,
                  organize trade missions, and provide platforms for meaningful commercial
                  engagements that lead to sustainable trade relationships.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Buyer-seller connection programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Trade missions and exhibitions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">B2B meeting facilitation</span>
                  </li>
                </ul>
              </div>

              {/* Trade Support Service */}
              <div className="bg-secondary p-10 rounded-xl">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Trade Support</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We provide comprehensive trade support services including capacity building,
                  technical assistance, and access to export financing. Our programs are designed
                  to enhance the competitiveness of Ghanaian products in international markets
                  through training, certification support, and quality improvement initiatives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Export training and capacity building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Certification and compliance support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Access to export financing</span>
                  </li>
                </ul>
              </div>

              {/* Research Service */}
              <div className="bg-secondary p-10 rounded-xl">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <FileSearch className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Research</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our research division provides critical market intelligence, export statistics,
                  and industry analysis to help members make informed business decisions. We conduct
                  sector studies, market assessments, and produce regular reports on export trends,
                  opportunities, and challenges facing Ghanaian exporters.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Market intelligence and analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Export statistics and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Industry sector studies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Services Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/18-3.png"
                  alt="FAGE Services"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div>
                <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                  COMPREHENSIVE SUPPORT
                </span>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  End-to-End Export Solutions
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Beyond our core services, FAGE offers a wide range of support mechanisms designed
                  to address the unique challenges faced by exporters at different stages of their
                  business growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">
                        Export Documentation Assistance
                      </h4>
                      <p className="text-muted-foreground">
                        We help members navigate complex export documentation requirements and
                        regulatory compliance procedures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">
                        Quality Standards Support
                      </h4>
                      <p className="text-muted-foreground">
                        Access to testing facilities, quality certification programs, and standards
                        compliance guidance for international markets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">
                        Networking Opportunities
                      </h4>
                      <p className="text-muted-foreground">
                        Regular events, workshops, and forums connecting members with peers,
                        experts, and potential partners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Benefits */}
            <div className="bg-secondary py-16 px-10 rounded-xl">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                    MEMBER BENEFITS
                  </span>
                  <h2 className="text-4xl font-bold text-foreground">
                    Why Choose FAGE Services?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-3">30+</div>
                    <p className="text-muted-foreground text-lg">Years of Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-3">1,200+</div>
                    <p className="text-muted-foreground text-lg">Active Members</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-3">$3.6B</div>
                    <p className="text-muted-foreground text-lg">Export Value Enabled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0A3622] py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Export Business?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let us help you navigate the complexities of international trade and unlock new
                opportunities for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white text-foreground font-bold text-base py-4 px-10 transition-all hover:bg-white/90"
                  style={{ paddingLeft: '65px', paddingRight: '40px' }}
                >
                  <span className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white">
                    <span className="relative block h-full w-full overflow-hidden">
                      <ArrowRight className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:-translate-x-[150%]" />
                      <ArrowRight className="absolute top-1/2 left-1/2 h-5 w-5 -translate-y-1/2 translate-x-[150%] transition-transform duration-300 group-hover:-translate-x-1/2" />
                    </span>
                  </span>
                  <span className="z-10">Become a Member</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-base py-4 px-10 rounded-full transition-all hover:bg-white hover:text-foreground"
                >
                  Learn More
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
