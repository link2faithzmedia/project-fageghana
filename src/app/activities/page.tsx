import React from 'react';
import TopBanner from '@/components/sections/top-banner';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { Calendar, MapPin, Users, ArrowRight, Clock, CheckCircle2, Award, Globe, Briefcase, GraduationCap, Handshake, TrendingUp } from 'lucide-react';

const upcomingActivities = [
  {
    id: 1,
    type: "Trade Mission",
    title: "West Africa Export Trade Mission to Europe",
    date: "March 15-22, 2025",
    location: "Brussels, Belgium & Amsterdam, Netherlands",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/5-12.png",
    description: "Join us for a comprehensive trade mission connecting Ghanaian exporters with European buyers and distributors. This mission includes B2B meetings, market tours, and networking events.",
    spots: "15 spots remaining",
    icon: Globe,
    featured: true
  },
  {
    id: 2,
    type: "Training Workshop",
    title: "Advanced Export Documentation & Compliance",
    date: "February 28, 2025",
    location: "FAGE Training Center, Accra",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/Sylvester-Mensah-2048x1365-1-1536x1024-1-9.jpg",
    description: "Intensive 2-day workshop covering international trade documentation, customs procedures, and regulatory compliance for export success.",
    spots: "25 spots remaining",
    icon: GraduationCap,
    featured: false
  },
  {
    id: 3,
    type: "Exhibition",
    title: "Ghana International Trade Fair 2025",
    date: "April 10-14, 2025",
    location: "Accra International Trade Fair Centre",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/10-13.png",
    description: "Showcase your products at Ghana's premier trade exhibition. FAGE members receive subsidized booth rates and promotion support.",
    spots: "30 booths available",
    icon: Briefcase,
    featured: false
  },
  {
    id: 4,
    type: "Networking Event",
    title: "Monthly Business Matchmaking Forum",
    date: "Every Last Friday",
    location: "FAGE Conference Hall, Accra",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/16-14.png",
    description: "Connect with fellow exporters, buyers, and industry partners in our monthly networking sessions designed to facilitate business relationships.",
    spots: "Open to all members",
    icon: Handshake,
    featured: false
  }
];

const activityCategories = [
  {
    title: "Trade Missions",
    description: "International buyer meetings and market exploration trips to key export destinations.",
    icon: Globe,
    color: "bg-primary/10 text-primary",
    count: "8 annual missions"
  },
  {
    title: "Training Programs",
    description: "Capacity building workshops on export processes, quality standards, and market strategies.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600",
    count: "24+ workshops yearly"
  },
  {
    title: "Trade Exhibitions",
    description: "Participation in local and international trade fairs and product showcases.",
    icon: Briefcase,
    color: "bg-orange-50 text-orange-600",
    count: "12+ exhibitions"
  },
  {
    title: "Networking Events",
    description: "Business matchmaking forums connecting exporters with buyers and partners.",
    icon: Handshake,
    color: "bg-purple-50 text-purple-600",
    count: "Monthly events"
  },
  {
    title: "Annual Conference",
    description: "Flagship event bringing together stakeholders to discuss export sector developments.",
    icon: Users,
    color: "bg-green-50 text-green-600",
    count: "1,000+ attendees"
  },
  {
    title: "Awards & Recognition",
    description: "Celebrating excellence in Ghana's non-traditional export sector.",
    icon: Award,
    color: "bg-yellow-50 text-yellow-600",
    count: "Annual ceremony"
  }
];

const pastActivities = [
  {
    id: 1,
    title: "National Coconut Festival 2024",
    date: "August 2024",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/Coconut-Funeral-8.png",
    participants: "500+ attendees",
    impact: "15 new export contracts signed"
  },
  {
    id: 2,
    title: "Horticulture Expo 2024",
    date: "August 2024",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/Sylvester-Mensah-2048x1365-1-1536x1024-1-9.jpg",
    participants: "200 international buyers",
    impact: "$12M in trade agreements"
  },
  {
    id: 3,
    title: "Export Standards Training",
    date: "July 2024",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/tj-blog-1-10.webp",
    participants: "150 members trained",
    impact: "98% compliance rate achieved"
  },
  {
    id: 4,
    title: "US Trade Mission",
    date: "June 2024",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/16-14.png",
    participants: "25 exporters",
    impact: "30+ B2B meetings conducted"
  }
];

const benefits = [
  "Priority access to international trade missions and buyer meetings",
  "Subsidized participation in trade fairs and exhibitions",
  "Free or discounted training workshops and certification programs",
  "Networking opportunities with industry leaders and potential partners",
  "Market intelligence and export opportunity briefings",
  "Recognition through awards and industry acknowledgment"
];

export default function ActivitiesPage() {
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
                WHAT WE DO
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Activities & Events</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Empowering Ghana's exporters through trade missions, capacity building, networking events, and industry-leading programs
              </p>
            </div>
          </div>
        </section>

        {/* Featured Activity Section */}
        {upcomingActivities.filter(a => a.featured).map((activity) => (
          <section key={activity.id} className="py-20 bg-secondary">
            <div className="container">
              <div className="mb-10 text-center">
                <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                  FEATURED EVENT
                </span>
                <h2 className="text-4xl font-bold text-foreground">Don't Miss This Opportunity</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-[400px] lg:h-full">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-lg">
                    {activity.type}
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    {activity.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{activity.spots}</span>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary text-white font-bold text-base py-4 px-8 transition-all hover:bg-primary/90">
                      <span className="z-10">Register Now</span>
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="inline-flex items-center justify-center border-2 border-primary text-primary font-bold text-base py-4 px-8 rounded-full transition-all hover:bg-primary hover:text-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Activity Categories Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                OUR PROGRAMS
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Comprehensive Activity Portfolio
              </h2>
              <p className="text-lg text-muted-foreground">
                We organize diverse activities designed to support exporters at every stage of their growth journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activityCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
                  >
                    <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{category.count}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Activities Grid */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                MARK YOUR CALENDAR
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Upcoming Activities
              </h2>
              <p className="text-lg text-muted-foreground">
                Join us at these exciting events and take your export business to the next level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingActivities.filter(a => !a.featured).map((activity) => {
                const IconComponent = activity.icon;
                return (
                  <article
                    key={activity.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-56">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white text-primary px-4 py-2 rounded-full font-bold text-sm shadow-md flex items-center gap-2">
                        <IconComponent className="w-4 h-4" />
                        <span>{activity.type}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2">
                        {activity.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{activity.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="line-clamp-1">{activity.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                          <Clock className="w-4 h-4" />
                          <span>{activity.spots}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        {activity.description}
                      </p>
                      <button className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-full transition-all hover:bg-primary/90 group">
                        <span>Register Now</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
              >
                <span>View Full Calendar</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Past Activities Success Stories */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                OUR TRACK RECORD
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Recent Activities & Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                See how our activities have created tangible value for Ghana's export community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pastActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
                        {activity.title}
                      </h3>
                      <p className="text-white/80 text-sm">{activity.date}</p>
                    </div>
                  </div>
                  <div className="p-5 bg-secondary">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{activity.participants}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{activity.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Benefits Section */}
        <section className="py-20 bg-[#0A3622]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-white/90 font-bold text-sm tracking-[0.7px] uppercase mb-3 block">
                  MEMBER BENEFITS
                </span>
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Why Participate in FAGE Activities?
                </h2>
                <p className="text-xl text-white/90">
                  Our members enjoy exclusive access and benefits across all our activities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white text-lg leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
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
                  <span className="z-10">Become a Member Today</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Ready to Get Involved?
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Whether you're a current member or considering joining, our activities are designed to help you succeed in international markets
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-base py-4 px-10 rounded-full transition-all hover:bg-primary/90"
                >
                  <span>View Event Calendar</span>
                  <Calendar className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary font-bold text-base py-4 px-10 rounded-full transition-all hover:bg-primary hover:text-white"
                >
                  Contact Events Team
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
