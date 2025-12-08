import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/18-3.png",
    title: "Advocacy",
    description: "Comprehensive Policy Framework & Strategic Business Development Initiatives",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/22-4.png",
    title: "Matchmaking",
    description: "Trade Inquiries, Networking International business partnering.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/20-5.png",
    title: "Trade Support",
    description: "Dynamic Trade Fairs & Comprehensive Export Insurance Solutions",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/21-6.png",
    title: "Research",
    description: "Technical materials, business directories, export standards,policies",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 lg:order-last lg:pl-10">
            <p className="font-semibold text-sm text-primary tracking-[0.2em] mb-4 flex items-center gap-2">
              <span>•</span>
              <span>WHAT WE DO</span>
              <span>•</span>
            </p>
            <h2 className="text-[42px] leading-tight font-bold text-foreground mb-4">Services</h2>
            <p className="text-lg text-muted-foreground mb-10">
              We specialize in connecting locally manufactured goods to international buyers.
            </p>
            <a href="#" className="inline-flex items-center gap-4 group">
              <div className="bg-primary rounded-full h-16 w-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-primary font-bold text-lg">Explore more</span>
            </a>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-muted p-8 rounded-xl transition-all duration-300 hover:-translate-y-2">
                <Image
                  src={service.iconSrc}
                  alt={`${service.title} icon`}
                  width={70}
                  height={70}
                  className="mb-6"
                />
                <h5 className="text-[22px] font-semibold text-foreground mb-2">{service.title}</h5>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;