import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Página no encontrada",
  description: "La página que estás buscando no existe o ha sido movida.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
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
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-700 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-2xl font-bold text-purple-900 mb-2">
            Página no encontrada
          </h2>
          <p className="text-purple-1000 mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </p>
        </div>

        <Link
          href="/countries"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <span className="mr-2">←</span>
          Volver a Países
        </Link>
      </div>
    </div>
  );
}
