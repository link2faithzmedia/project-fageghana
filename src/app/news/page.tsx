import React from 'react';
import TopBanner from '@/components/sections/top-banner';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { Calendar, User, MessageCircle, ArrowRight, Search } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/Coconut-Funeral-8.png",
    date: "28 AUG",
    category: "Events",
    comments: 3,
    title: "National Coconut Festival Celebrates Ghana's Export Success",
    excerpt: "The annual National Coconut Festival brought together exporters, farmers, and trade officials to celebrate Ghana's growing coconut export industry and discuss strategies for market expansion.",
    author: "FAGE Admin"
  },
  {
    id: 2,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/Sylvester-Mensah-2048x1365-1-1536x1024-1-9.jpg",
    date: "15 AUG",
    category: "Trade Shows",
    comments: 5,
    title: "Ghana Horticulture Expo Attracts International Buyers",
    excerpt: "Over 200 international buyers attended this year's Ghana Horticulture Expo, resulting in significant trade agreements for Ghanaian exporters of fresh produce and processed foods.",
    author: "FAGE Admin"
  },
  {
    id: 3,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/tj-blog-1-10.webp",
    date: "10 AUG",
    category: "Industry News",
    comments: 8,
    title: "New Export Standards Boost Ghana's Competitiveness",
    excerpt: "Implementation of enhanced quality standards has positioned Ghanaian products favorably in international markets, with compliance rates reaching all-time highs among FAGE members.",
    author: "FAGE Admin"
  },
  {
    id: 4,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/16-14.png",
    date: "05 AUG",
    category: "Member Stories",
    comments: 12,
    title: "Local Exporter Secures Major European Contract",
    excerpt: "A FAGE member company has secured a multi-million dollar contract to supply organic pineapples to major European retailers, demonstrating the success of our matchmaking programs.",
    author: "FAGE Admin"
  },
  {
    id: 5,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/5-12.png",
    date: "28 JUL",
    category: "Policy Updates",
    comments: 6,
    title: "Government Announces New Export Incentive Packages",
    excerpt: "Following advocacy efforts by FAGE, the government has unveiled new export incentive packages designed to support non-traditional exporters with tax benefits and financing options.",
    author: "FAGE Admin"
  },
  {
    id: 6,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/10-13.png",
    date: "20 JUL",
    category: "Training",
    comments: 4,
    title: "FAGE Launches Advanced Export Certification Program",
    excerpt: "A new comprehensive training program aims to equip exporters with the latest skills in international trade compliance, logistics management, and market development strategies.",
    author: "FAGE Admin"
  }
];

const categories = [
  "All News",
  "Events",
  "Trade Shows",
  "Industry News",
  "Member Stories",
  "Policy Updates",
  "Training"
];

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#0A3622] py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <span className="text-white/90 font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                UPDATES
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Updates</h1>
              <p className="text-xl text-white/90">
                Stay informed about the latest developments in Ghana's export sector
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-6 left-6 bg-primary text-white px-6 py-3 rounded-lg font-bold">
                  {newsArticles[0].date}
                </div>
              </div>
              <div>
                <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                  FEATURED STORY
                </span>
                <h2 className="text-4xl font-bold mb-4 text-foreground">
                  {newsArticles[0].title}
                </h2>
                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{newsArticles[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{newsArticles[0].comments} Comments</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {newsArticles[0].excerpt}
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 text-primary font-bold text-lg hover:gap-5 transition-all"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                    index === 0
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-foreground hover:bg-primary hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm">
                      {article.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                      <span className="text-primary font-semibold">{article.category}</span>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                      <a href="#">{article.title}</a>
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary text-white font-bold text-base py-4 px-10 transition-all hover:bg-primary/90">
                <span className="z-10">Load More Articles</span>
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription Section */}
        <section className="bg-secondary py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                STAY INFORMED
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the latest news, updates, and insights from Ghana's export sector delivered
                directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-base py-4 px-8 rounded-full transition-all hover:bg-primary/90">
                  <span>Subscribe</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="bg-[#0A3622] py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Have a Story to Share?</h2>
              <p className="text-xl text-white/90 mb-8">
                We'd love to hear about your export success stories and experiences. Share your
                journey with the FAGE community.
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
                  <span className="z-10">Submit Your Story</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-base py-4 px-10 rounded-full transition-all hover:bg-white hover:text-foreground"
                >
                  Contact Media Team
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
