"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Search,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Check,
} from "lucide-react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  dropdownItems?: { href: string; label: string }[];
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  hasDropdown,
  dropdownItems,
}) => {
  if (hasDropdown) {
    return (
      <li className="group relative">
        <Link
          href={href}
          className="flex items-center gap-1.5 py-[35px] px-[23px] text-base font-semibold text-foreground transition-colors hover:text-primary"
        >
          {children}
          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
        </Link>
        <ul className="absolute top-full left-0 z-20 w-[220px] rounded-b-lg bg-white py-4 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2.5 transition-all duration-300">
          {dropdownItems?.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block px-5 py-2 text-foreground hover:bg-gray-100 hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className="block py-[35px] px-[23px] text-base font-semibold text-foreground transition-colors hover:text-primary"
      >
        {children}
      </Link>
    </li>
  );
};

const MainNavContent: React.FC<{ onMobileMenuToggle: () => void }> = ({
  onMobileMenuToggle,
}) => {
  const navLinks = [
    {
      label: "About",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "Who We Are", href: "/about/who-we-are" },
        { label: "Product", href: "/products" },
        { label: "Services", href: "/services" },
      ],
    },
    { label: "News", href: "/news" },
    { label: "Activities", href: "/activities" },
    { label: "Media", href: "/media" },
    { label: "Membership", href: "#" },
  ];

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <div className="relative h-[91px] flex items-center">
          <Link href="/">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/cropped-Asset-1-1-1.png"
              alt="FAGE Logo"
              width={140}
              height={55}
              className="h-auto w-[140px]"
            />
          </Link>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <NavItem
                key={link.label}
                href={link.href}
                hasDropdown={link.hasDropdown}
                dropdownItems={link.dropdownItems}
              >
                {link.label}
              </NavItem>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden lg:inline-flex h-12 w-12 items-center justify-center rounded-full text-foreground transition-colors hover:bg-gray-100">
            <Search className="h-6 w-6" />
          </button>
          <a
            href="#"
            className="group relative hidden md:inline-flex items-center justify-center overflow-hidden rounded-full bg-primary py-4 px-10 text-base font-bold text-primary-foreground transition-all duration-300"
            style={{ paddingLeft: "65px", paddingRight: "40px" }}
          >
            <span className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary">
              <span className="relative block h-full w-full overflow-hidden">
                <ArrowRight className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:-translate-x-[150%]" />
                <ArrowRight className="absolute top-1/2 left-1/2 h-5 w-5 -translate-y-1/2 translate-x-[150%] transition-transform duration-300 group-hover:-translate-x-1/2" />
              </span>
            </span>
            <span className="z-10">Let's Talk</span>
          </a>
          <button
            onClick={onMobileMenuToggle}
            className="ml-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 lg:hidden"
            aria-label="Open mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const MobileMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div
    className="fixed inset-0 z-[1000] lg:hidden"
    aria-modal="true"
    role="dialog"
  >
    <div
      className="fixed inset-0 bg-black/60"
      onClick={onClose}
      aria-hidden="true"
    />
    <div className="fixed top-0 right-0 h-full w-[320px] bg-[#0A3622] text-white p-6 transform transition-transform duration-300 ease-in-out translate-x-0">
      <div className="flex items-center justify-between mb-8">
        <Link href="/">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/21170815-9165-4c39-9770-a60ff14b40ba-fageghana-com-beak-host/assets/images/fage-logo-white-2.png"
            alt="FAGE Logo White"
            width={120}
            height={47}
          />
        </Link>
        <button onClick={onClose} aria-label="Close mobile menu">
          <X className="h-6 w-6 text-white" />
        </button>
      </div>
      <nav>
        <ul className="flex flex-col gap-2">
          {/* Mobile nav items would go here */}
          <li><a href="#" className="block p-3">About</a></li>
          <li><a href="#" className="block p-3">News</a></li>
          <li><a href="#" className="block p-3">Activities</a></li>
          <li><a href="#" className="block p-3">Media</a></li>
          <li><a href="#" className="block p-3">Membership</a></li>
        </ul>
      </nav>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="relative z-40 bg-white">
        {/* Top Info Bar */}
        <div className="hidden bg-secondary md:block">
          <div className="container">
            <div className="flex items-center justify-between h-[50px]">
              <div/> {/* Empty div for spacing */}
              <div className="flex items-center gap-6">
                <a
                  href="mailto:info@fageghana.com"
                  className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  info@fageghana.com
                </a>
                <a
                  href="tel:+233 (0) 53 517 0780"
                  className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +233 (0) 53 517 0780
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="border-b border-border">
          <MainNavContent onMobileMenuToggle={() => setIsMobileMenuOpen(true)} />
        </div>
      </header>

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isSticky ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <MainNavContent onMobileMenuToggle={() => setIsMobileMenuOpen(true)} />
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
    </>
  );
};

export default Header;