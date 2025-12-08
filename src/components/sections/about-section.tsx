import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-secondary py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 lg:gap-x-[30px]">
          {/* Left Column: Image */}
          <div className="flex justify-center px-4 lg:px-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/16-14.png"
              alt=""
              width={550}
              height={580}
              className="rounded-xl object-cover w-full h-auto max-w-full lg:max-w-[550px]"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col px-4 lg:px-0">
            <span className="text-primary font-bold text-sm tracking-[0.7px] uppercase mb-3">
              ABOUT US
            </span>
            <h2 className="text-foreground text-[42px] font-bold leading-tight mb-[25px]">
              Ghana’s leading enabler of Non-Traditional Exports.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-[35px] max-w-[580px]">
              The Federation of Associations of Ghanaian Exporters (FAGE) is an umbrella
              organization of exporter, and product associations, established in 1992. We aim to
              be Ghana's leading enabler of Non-Traditional Exports, empowering members for
              international success through global best practices, advocacy, market
              development, and facilitated funding. FAGE is dedicated to export growth and
              innovation
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-bold text-base py-4 px-[38px] rounded-full w-fit group transition-colors duration-300 hover:bg-primary/90"
            >
              <div className="bg-white rounded-full p-2 transition-transform duration-300 group-hover:scale-105">
                <ArrowRight className="text-primary h-4 w-4" />
              </div>
              <span>Know more us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;