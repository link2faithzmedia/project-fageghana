import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-[#002817] text-white">
      <div className="max-w-[1320px] mx-auto px-[15px] py-20 lg:py-28 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          WHAT WE DO
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Our Impact By Numbers
        </h2>
        
        <p className="max-w-3xl mx-auto text-white/80 mb-16 text-lg">
          See how we are connecting locally manufacturedproduce with international buyers through measurable success.
        </p>

        <div className="flex flex-col gap-y-12 md:flex-row md:items-stretch md:justify-center md:gap-y-0 md:divide-x md:divide-white/20">
          <div className="flex flex-col items-center justify-center md:px-8 lg:px-16">
            <p className="text-5xl lg:text-6xl font-bold">1,992</p>
            <p className="mt-2 text-white/80 text-base">Operational Since</p>
          </div>
          <div className="flex flex-col items-center justify-center md:px-8 lg:px-16">
            <p className="text-5xl lg:text-6xl font-bold">1,200+</p>
            <p className="mt-2 text-white/80 text-base">Members Added</p>
          </div>
          <div className="flex flex-col items-center justify-center md:px-8 lg:px-16">
            <p className="text-5xl lg:text-6xl font-bold">$3.6B</p>
            <p className="mt-2 text-white/80 text-base">Export Value Enable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;