import React from 'react';
import TopBanner from '@/components/sections/top-banner';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { Calendar, Download, Image as ImageIcon, Video, FileText, Mail, Phone, ExternalLink, Play, ArrowRight, Newspaper, Camera } from 'lucide-react';

const pressReleases = [
  {
    id: 1,
    title: "FAGE Announces Record-Breaking Export Growth for 2024",
    date: "January 15, 2025",
    category: "Press Release",
    excerpt: "The Federation of Associations of Ghanaian Exporters reports a 28% increase in non-traditional exports, reaching $4.2 billion in total export value for the 2024 fiscal year.",
    image: "/images/activities/trade-mission.png",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "FAGE Partners with EU for Trade Capacity Building Program",
    date: "December 10, 2024",
    category: "Partnership",
    excerpt: "New €5 million partnership will provide training and support to 500+ Ghanaian exporters over the next three years, focusing on quality standards and market access.",
    image: "/images/activities/networking.png",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "National Coconut Festival 2024 Attracts 500+ Industry Stakeholders",
    date: "November 22, 2024",
    category: "Event",
    excerpt: "FAGE's flagship coconut festival successfully brought together producers, exporters, and international buyers, resulting in 15 new export contracts worth $8.5 million.",
    image: "/images/activities/coconut-festival.png",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "FAGE Launches Digital Export Documentation Platform",
    date: "October 5, 2024",
    category: "Innovation",
    excerpt: "Revolutionary new platform streamlines export documentation process, reducing processing time by 60% and helping members navigate complex international regulations.",
    image: "/images/content/export-standards.webp",
    downloadUrl: "#"
  }
];

const photoGallery = [
  {
    id: 1,
    title: "Ghana Horticulture Expo 2024",
    date: "August 2024",
    imageCount: 45,
    thumbnail: "/images/activities/training-workshop.jpg"
  },
  {
    id: 2,
    title: "Trade Mission to Netherlands",
    date: "July 2024",
    imageCount: 32,
    thumbnail: "/images/activities/trade-fair.png"
  },
  {
    id: 3,
    title: "Export Training Workshop",
    date: "June 2024",
    imageCount: 28,
    thumbnail: "/images/activities/networking.png"
  },
  {
    id: 4,
    title: "National Coconut Festival",
    date: "August 2024",
    imageCount: 56,
    thumbnail: "/images/activities/coconut-festival.png"
  },
  {
    id: 5,
    title: "International Trade Fair 2024",
    date: "May 2024",
    imageCount: 41,
    thumbnail: "/images/activities/trade-mission.png"
  },
  {
    id: 6,
    title: "Member Success Stories",
    date: "Ongoing",
    imageCount: 67,
    thumbnail: "/images/products/pineapple.png"
  }
];

const videoGallery = [
  {
    id: 1,
    title: "FAGE: 30 Years of Empowering Ghanaian Exporters",
    duration: "3:45",
    date: "December 2024",
    thumbnail: "/images/activities/trade-mission.png",
    views: "12K"
  },
  {
    id: 2,
    title: "Ghana Horticulture Expo 2024 Highlights",
    duration: "5:20",
    date: "August 2024",
    thumbnail: "/images/activities/training-workshop.jpg",
    views: "8.5K"
  },
  {
    id: 3,
    title: "From Farm to Export: A Member's Journey",
    duration: "7:12",
    date: "July 2024",
    thumbnail: "/images/products/pineapple.png",
    views: "15K"
  },
  {
    id: 4,
    title: "Coconut Industry Success Stories",
    duration: "4:30",
    date: "August 2024",
    thumbnail: "/images/activities/coconut-festival.png",
    views: "6.2K"
  }
];

const mediaKit = [
  {
    id: 1,
    title: "FAGE Brand Guidelines",
    description: "Logo usage, colors, typography, and brand standards",
    fileSize: "2.4 MB",
    fileType: "PDF",
    icon: FileText
  },
  {
    id: 2,
    title: "High-Resolution Logos",
    description: "PNG, SVG, and EPS formats for print and digital",
    fileSize: "8.1 MB",
    fileType: "ZIP",
    icon: ImageIcon
  },
  {
    id: 3,
    title: "2024 Annual Report",
    description: "Comprehensive overview of activities and impact",
    fileSize: "5.7 MB",
    fileType: "PDF",
    icon: FileText
  },
  {
    id: 4,
    title: "Executive Bios & Photos",
    description: "Leadership team information and headshots",
    fileSize: "12.3 MB",
    fileType: "ZIP",
    icon: ImageIcon
  },
  {
    id: 5,
    title: "Fact Sheet & Statistics",
    description: "Key facts, figures, and achievements",
    fileSize: "890 KB",
    fileType: "PDF",
    icon: FileText
  },
  {
    id: 6,
    title: "Press Photo Library",
    description: "High-resolution event and activity photos",
    fileSize: "45.2 MB",
    fileType: "ZIP",
    icon: ImageIcon
  }
];

const mediaFeatures = [
  {
    id: 1,
    outlet: "Bloomberg Africa",
    title: "Ghana's Export Boom: How FAGE is Driving Growth",
    date: "January 8, 2025",
    image: "/images/activities/trade-mission.png",
    link: "#"
  },
  {
    id: 2,
    outlet: "Financial Times",
    title: "West African Trade: Ghana's Non-Traditional Export Success",
    date: "December 15, 2024",
    image: "/images/activities/trade-fair.png",
    link: "#"
  },
  {
    id: 3,
    outlet: "African Business Magazine",
    title: "FAGE: 30 Years of Empowering Ghanaian Exporters",
    date: "November 28, 2024",
    image: "/images/activities/networking.png",
    link: "#"
  }
];

export default function MediaPage() {
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
                PRESS & MEDIA
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Media Center</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Your source for news, press releases, photos, videos, and media resources about FAGE and Ghana's export sector
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                LATEST NEWS
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Press Releases & Announcements
              </h2>
              <p className="text-lg text-muted-foreground">
                Stay updated with the latest news and developments from FAGE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressReleases.map((release) => (
                <article
                  key={release.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
                >
                  <div className="relative h-64">
                    <Image
                      src={release.image}
                      alt={release.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm shadow-md">
                      {release.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{release.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2">
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {release.excerpt}
                    </p>
                    <div className="flex gap-3">
                      <button className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-full transition-all hover:bg-primary/90 group">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3 px-6 rounded-full transition-all hover:bg-primary hover:text-white">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
              >
                <span>View All Press Releases</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                VISUAL STORIES
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Photo Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our collection of photos from events, activities, and member success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoGallery.map((album) => (
                <div
                  key={album.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative h-80">
                    <Image
                      src={album.thumbnail}
                      alt={album.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full font-bold text-sm shadow-md flex items-center gap-2">
                      <Camera className="w-4 h-4 text-primary" />
                      <span>{album.imageCount} Photos</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl mb-2">
                        {album.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{album.date}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-4">
                        <ImageIcon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                WATCH & LEARN
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Video Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Watch our latest videos featuring member stories, event highlights, and industry insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoGallery.map((video) => (
                <div
                  key={video.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative h-72">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full font-bold text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-secondary">
                    <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{video.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-primary" />
                        <span>{video.views} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
              >
                <span>Watch More Videos</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Media Kit Downloads Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                FOR JOURNALISTS & MEDIA
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Media Kit & Resources
              </h2>
              <p className="text-lg text-muted-foreground">
                Download logos, brand guidelines, photos, and other resources for your stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {mediaKit.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {item.fileType} • {item.fileSize}
                      </span>
                      <Download className="w-5 h-5 text-primary group-hover:translate-y-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <button className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-base py-4 px-10 rounded-full transition-all hover:bg-primary/90">
                <Download className="w-5 h-5" />
                <span>Download Complete Media Kit</span>
              </button>
            </div>
          </div>
        </section>

        {/* In The News Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                MEDIA COVERAGE
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                FAGE In The News
              </h2>
              <p className="text-lg text-muted-foreground">
                See how international media outlets are covering FAGE and Ghana's export success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {mediaFeatures.map((feature) => (
                <article
                  key={feature.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
                >
                  <div className="relative h-48">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-white text-primary px-3 py-1 rounded-full font-bold text-xs mb-2">
                        {feature.outlet}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{feature.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-foreground line-clamp-2 leading-snug">
                      {feature.title}
                    </h3>
                    <a
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all group"
                    >
                      <span>Read Article</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
              >
                <span>View All Media Coverage</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Media Contact Section */}
        <section className="py-20 bg-[#0A3622]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-white/90 font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                  GET IN TOUCH
                </span>
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Media Inquiries
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  For press inquiries, interview requests, or additional information, please contact our media relations team
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Email Us</h3>
                  <p className="text-white/80 mb-4">
                    For press releases and media inquiries
                  </p>
                  <a
                    href="mailto:media@fageghana.com"
                    className="text-white font-bold text-lg hover:text-primary transition-colors"
                  >
                    media@fageghana.com
                  </a>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Call Us</h3>
                  <p className="text-white/80 mb-4">
                    Speak with our communications team
                  </p>
                  <a
                    href="tel:+233535170780"
                    className="text-white font-bold text-lg hover:text-primary transition-colors"
                  >
                    +233 (0) 53 517 0780
                  </a>
                </div>
              </div>

              <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Media Response Times
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
                    <p className="text-white/80 text-sm">General Inquiries</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">4hrs</div>
                    <p className="text-white/80 text-sm">Urgent Requests</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">48hrs</div>
                    <p className="text-white/80 text-sm">Interview Scheduling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Newspaper className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Stay Informed
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Subscribe to receive our press releases and media updates directly in your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-border focus:border-primary focus:outline-none text-base"
                />
                <button className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-base py-4 px-10 rounded-full transition-all hover:bg-primary/90 whitespace-nowrap">
                  <span>Subscribe</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
