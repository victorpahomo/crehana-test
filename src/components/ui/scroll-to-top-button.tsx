"use client";
import { useState, useEffect } from "react";

import ChevronUpSvg from "@/assets/react-svg/chevron-up";

/**
 * Scroll to top button component that appears when scrolling down
 * and smoothly scrolls back to the top when clicked.
 */
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-28 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-14 h-14 rounded-full 
                     bg-[var(--color-purple-600)]/30 text-white shadow-lg hover:bg-[var(--color-purple-700)]/50 
                     transition-all duration-300 transform hover:scale-110 hover:shadow-xl backdrop-blur-sm"
            aria-label="Volver arriba"
          >
            <span className="sr-only">Volver arriba</span>
            <ChevronUpSvg width={24} height={24} color="currentColor" />

            <div
              className="absolute -top-10 right-0 whitespace-nowrap bg-[var(--color-purple-600)]/60 px-3 py-1.5 
                          rounded-lg text-xs font-medium text-white shadow-md backdrop-blur-sm
                          opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
            >
              Volver arriba
              <div className="absolute h-2 w-2 bg-[var(--color-purple-600)]/60 rotate-45 bottom-[-4px] right-[10px]"></div>
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
