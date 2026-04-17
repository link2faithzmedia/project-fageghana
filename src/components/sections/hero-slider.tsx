"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/activities/trade-fair.png",
    subtitle: "Promoting non traditional exporters",
    title: "Federation of Associations of Ghanaian Exporters",
  },
  {
    image: "/images/activities/trade-mission.png",
    subtitle: "Promoting non traditional exporters",
    title: "Federation of Associations of Ghanaian Exporters",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] lg:-mt-28 lg:pt-28 md:-mt-24 md:pt-24 -mt-[88px] pt-[88px]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        className="w-full h-full [&_.swiper-pagination]:[bottom:30px!important] [&_.swiper-pagination-bullet]:size-2.5 [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-70 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:w-7 [&_.swiper-pagination-bullet-active]:rounded-full [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-pagination-bullet-active]:opacity-100"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                quality={100}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/60 z-10"></div>
              <div className="container relative h-full flex items-center justify-center text-center text-white z-20 px-4">
                <div className="max-w-5xl flex flex-col items-center">
                    <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm font-semibold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
                      {slide.subtitle}
                    </span>
                    <h1 className="font-bold text-white text-[40px] md:text-[56px] lg:text-[72px] leading-tight lg:leading-[1.2] mb-8">
                      {slide.title}
                    </h1>
                    <Link
                      href="#"
                      className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-full text-base transition-colors hover:bg-[#007a3d]"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;