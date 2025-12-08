"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <Fragment>
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#0A3622] text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        data-lenis-prevent
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b sm:p-8 border-white/10">
            <Link href="/" onClick={onClose}>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/fage-logo-white-2.png"
                alt="FAGE Logo"
                width={130}
                height={36}
                className="w-auto h-9"
              />
            </Link>
            <button onClick={onClose} className="p-2 -mr-2 text-white/80 hover:text-white">
              <span className="sr-only">Close menu</span>
              <X size={28} />
            </button>
          </div>

          <nav className="flex-grow px-6 py-8 overflow-y-auto sm:px-8">
            <ul className="flex flex-col space-y-1">
              <li>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="w-full py-3 text-lg font-semibold text-left text-white hover:text-primary hover:no-underline">
                      About
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="pt-2 pl-4 mt-1 space-y-3">
                        <li><Link href="/?page_id=5955" onClick={onClose} className="block text-base font-normal text-white/70 hover:text-white">Who We Are</Link></li>
                        <li><Link href="/?page_id=5948" onClick={onClose} className="block text-base font-normal text-white/70 hover:text-white">Product</Link></li>
                        <li><Link href="/?page_id=5949" onClick={onClose} className="block text-base font-normal text-white/70 hover:text-white">Services</Link></li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li><Link href="/?page_id=5950" onClick={onClose} className="block w-full py-3 text-lg font-semibold text-white hover:text-primary">News</Link></li>
              <li><Link href="/?page_id=5951" onClick={onClose} className="block w-full py-3 text-lg font-semibold text-white hover:text-primary">Activities</Link></li>
              <li><Link href="/?page_id=5952" onClick={onClose} className="block w-full py-3 text-lg font-semibold text-white hover:text-primary">Media</Link></li>
              <li><Link href="/?page_id=5953" onClick={onClose} className="block w-full py-3 text-lg font-semibold text-white hover:text-primary">Membership</Link></li>
            </ul>
          </nav>

          <div className="p-6 mt-auto border-t sm:p-8 border-white/10">
            <h4 id="mobile-menu-title" className="mb-4 text-lg font-semibold">Follow us</h4>
            <div className="flex space-x-5">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><span className="sr-only">Facebook</span><Facebook size={22} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><span className="sr-only">Instagram</span><Instagram size={22} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><span className="sr-only">Twitter</span><Twitter size={22} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white"><span className="sr-only">LinkedIn</span><Linkedin size={22} /></a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenu;