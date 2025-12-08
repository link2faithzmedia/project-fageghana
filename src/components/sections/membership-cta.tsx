import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

const MembershipCta = () => {
  const backgroundImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/7-15.png";

  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      aria-labelledby="membership-heading"
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative container mx-auto px-4 py-28 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary mb-4">
          JOIN US
        </p>
        <h2 id="membership-heading" className="text-5xl md:text-[60px] font-bold leading-tight mb-4">
          Become a FAGE Member
        </h2>
        <p className="text-lg text-white/90 max-w-md mx-auto mb-12">
          Ready to start working together? Join us as
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#"
            className="group inline-flex items-center bg-white text-foreground font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300 text-base shadow-md"
          >
            <div className="flex items-center pl-2 pr-6 py-2">
              <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 transform transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-5 h-5" />
              </span>
              <span className="whitespace-nowrap">Associate Member</span>
            </div>
          </Link>
          <Link
            href="#"
            className="group inline-flex items-center gap-x-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 text-base py-3 px-7 shadow-md"
          >
            <Phone className="w-5 h-5 transform transition-transform duration-300 group-hover:scale-110" />
            <span className="whitespace-nowrap">Coperate Member</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MembershipCta;