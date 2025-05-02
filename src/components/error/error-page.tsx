"use client";
import Image from "next/image";

import XSvg from "@/assets/react-svg/x";

interface ErrorPageProps {
  title?: string;
  message?: string;
  error?: Error;
  buttonText?: string;
}

export default function ErrorPage({
  title = "Error",
  message = "Se ha producido un error inesperado.",
  error,
  buttonText = "Recargar la página",
}: ErrorPageProps) {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-white to-purple-50 px-4">
      <div className="text-center max-w-md animate-fadeIn">
        <div className="mb-8">
          <div className="relative w-[150px] h-[40px] mx-auto mb-4">
            <Image
              src="https://23946686.fs1.hubspotusercontent-na1.net/hubfs/23946686/logo-color.svg"
              alt="crehana logo"
              fill
              sizes="150px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
            <XSvg width={32} height={32} color="#dc2626" />
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-2xl font-bold text-red-900 mb-2">{title}</h2>
          <p className="text-red-800 mb-4">{message}</p>
          {error && (
            <div className="bg-red-50 border border-red-200 p-4 rounded-md mb-8">
              <p className="font-medium text-red-700 mb-1">Tipo de error:</p>
              <p className="text-red-700 font-bold">{error.name || "Error"}</p>
            </div>
          )}
        </div>

        <button
          onClick={handleReload}
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <span className="mr-2">↻</span>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
