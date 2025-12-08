"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';

const productData = [
  {
    id: 'products-1',
    title: 'Pineapple production',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/images_7.png',
  },
  {
    id: 'products-2',
    title: 'Mango production',
    imageSrc: null,
  },
  {
    id: 'products-3',
    title: 'Papaya production',
    imageSrc: null,
  },
  {
    id: 'products-4',
    title: 'Vegetable production',
    imageSrc: null,
  },
];

const ProductsSection = () => {
  const [openItemId, setOpenItemId] = useState<string>(productData[0].id);

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? '' : id);
  };

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <span className="h-[5px] w-[5px] rounded-full bg-primary"></span>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                WHAT WE OFFER
              </p>
            </div>
            <h2 className="mt-4 font-heading text-[42px] font-bold leading-[1.2] text-foreground">
              Products you can trust, by our members
            </h2>
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore more
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Right Column: Accordion */}
          <div>
            <div className="w-full">
              {productData.map((item, index) => (
                <div key={item.id} className="border-b border-border">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-center justify-between py-6 text-left"
                    aria-expanded={openItemId === item.id}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-xl font-bold text-primary">0{index + 1}.</span>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </span>
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        openItemId === item.id ? 'bg-primary' : 'bg-muted'
                      }`}
                    >
                      {openItemId === item.id ? (
                        <ArrowUp className="h-5 w-5 text-primary-foreground" />
                      ) : (
                        <ArrowDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      openItemId === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      {item.imageSrc && (
                        <div className="pb-6">
                            <Image
                                src={item.imageSrc}
                                alt={item.title}
                                width={613}
                                height={408}
                                className="h-auto w-full rounded-lg object-cover"
                            />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;