"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Joining FAGE has been a dream come true for us. Not only have we been trained on better procedures for food production but they have also helped with exporting our products globally",
    author: "Evelyn Farms",
  },
  {
    quote:
      "Joining FAGE has been a dream come true for us. Not only have we been trained on better procedures for food production but they have also helped with exporting our products globally",
    author: "Evelyn Farms",
  },
  {
    quote:
      "Joining FAGE has been a dream come true for us. Not only have we been trained on better procedures for food production but they have also helped with exporting our products globally",
    author: "Evelyn Farms",
  },
  {
    quote:
      "Joining FAGE has been a dream come true for us. Not only have we been trained on better procedures for food production but they have also helped with exporting our products globally",
    author: "Evelyn Farms",
  },
];

const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="45"
    height="36"
    viewBox="0 0 45 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.1212 36C9.65874 36 6.59874 34.86 3.94124 32.58C1.30124 30.28 0 27.56 0 24.42V14.1H13.1512V24.84C13.1512 25.7 12.9437 26.44 12.5287 27.06C12.1312 27.66 11.6412 28 11.0587 28.08L8.52874 28.5V24.18L16.6162 14.1H22.5L13.1212 36Z"
      fill="currentColor"
    />
    <path
      d="M34.3712 36C30.9087 36 27.8487 34.86 25.1912 32.58C22.5512 30.28 21.25 27.56 21.25 24.42V14.1H34.4012V24.84C34.4012 25.7 34.1937 26.44 33.7787 27.06C33.3812 27.66 32.8912 28 32.3087 28.08L29.7787 28.5V24.18L37.8662 14.1H43.75L34.3712 36Z"
      fill="currentColor"
    />
  </svg>
);

export default function TestimonialsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setScrollSnaps(api.scrollSnapList());
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", () => {
      setScrollSnaps(api.scrollSnapList());
      setCurrent(api.selectedScrollSnap());
    });
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };
  
  return (
    <section className="bg-secondary py-20 lg:py-28 font-body">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-semibold text-sm text-primary uppercase tracking-[0.2em] mb-4">
            • WHAT OUR MEMBERS ARE SAYING •
          </p>
          <h2 className="text-4xl lg:text-[42px] font-bold text-foreground">
            Testimonials
          </h2>
        </div>

        <div className="relative lg:px-14">
            <Carousel
                setApi={setApi}
                opts={{
                align: "start",
                loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-8">
                {testimonials.map((testimonial, index) => (
                    <CarouselItem
                    key={index}
                    className="pl-8 sm:basis-1/2 lg:basis-1/3"
                    >
                    <div className="p-1 h-full">
                        <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-10 text-center h-full flex flex-col items-center justify-start">
                        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-accent">
                            <QuoteIcon className="text-primary"/>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                            {testimonial.quote}
                        </p>
                        <h5 className="font-semibold text-lg text-foreground mt-auto">
                            {testimonial.author}
                        </h5>
                        </div>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden h-14 w-14 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-md transition-all hover:bg-gray-100 disabled:opacity-50 lg:flex">
                    <ChevronLeft className="h-6 w-6" />
                </CarouselPrevious>
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden h-14 w-14 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-md transition-all hover:bg-gray-100 disabled:opacity-50 lg:flex">
                    <ChevronRight className="h-6 w-6" />
                </CarouselNext>
            </Carousel>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current ? 'w-8 bg-primary' : 'w-2.5 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}