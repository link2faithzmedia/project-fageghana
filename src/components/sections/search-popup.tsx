"use client";

import { useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchPopup({ isOpen, onClose }: SearchPopupProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-[#061122]/90 backdrop-blur-sm z-[9998] animate__animated animate__fadeIn animate__faster"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-[9999] p-4 animate__animated animate__fadeInDown animate__faster"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-heading"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white transition-opacity hover:opacity-75"
          aria-label="Close search"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L17 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 1L1 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center justify-center h-full">
          <div className="container max-w-4xl">
            <div className="text-center">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full"
              >
                  <h4
                    id="search-heading"
                    className="text-white text-2xl font-semibold mb-12"
                  >
                    Search blog, projects, service or people.
                  </h4>
                  <div className="relative max-w-3xl mx-auto">
                    <input
                      type="search"
                      name="s"
                      className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-white/50 text-4xl p-4 text-center focus:ring-0 focus:border-white transition-colors duration-300"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 transition-opacity hover:opacity-75"
                      aria-label="Submit search"
                    >
                      <Search size={32} strokeWidth={1.5} />
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}