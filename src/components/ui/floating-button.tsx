import Link from "next/link";
import { FC } from "react";

import QuestionSvg from "@/assets/react-svg/question";

interface FloatingButtonProps {
  href: string;
  label: string;
}

/**
 * Floating button component that links to about page.
 *
 * @param href - The URL to link to
 * @param label - The label text for the button
 */
const FloatingButton: FC<FloatingButtonProps> = ({ href, label }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={href}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full 
                 bg-[var(--color-purple-600)] text-white shadow-lg hover:bg-[var(--color-purple-700)] 
                 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
        aria-label={label}
      >
        <span className="sr-only">{label}</span>
        <QuestionSvg width={24} height={24} color="currentColor" />

        <div
          className="absolute -top-10 right-0 whitespace-nowrap bg-[var(--color-purple-600)] px-3 py-1.5 
                        rounded-lg text-xs font-medium text-white shadow-md 
                        opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        >
          Púlsame para saber más
          <div className="absolute h-2 w-2 bg-[var(--color-purple-600)] rotate-45 bottom-[-4px] right-[10px]"></div>
        </div>
      </Link>
    </div>
  );
};

export default FloatingButton;
