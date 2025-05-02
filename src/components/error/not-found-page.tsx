import Image from "next/image";
import Link from "next/link";

import ExclamationTriangleSvg from "@/assets/react-svg/exclamation-triangle";

interface NotFoundPageProps {
  title?: string;
  message?: string;
  code?: string;
  backLink?: {
    text: string;
    href: string;
  };
}

export default function NotFoundPage({
  title = "Recurso no encontrado",
  message = "Lo sentimos, el recurso que estás buscando no existe o ha sido movido.",
  code,
  backLink = {
    text: "Volver a Países",
    href: "/countries",
  },
}: NotFoundPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-purple-50 px-4">
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
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
            <ExclamationTriangleSvg width={32} height={32} color="#d97706" />
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-2xl font-bold text-yellow-800 mb-2">{title}</h2>
          <p className="text-yellow-700 mb-4">{message}</p>
          {code && (
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-8">
              <p className="text-sm text-yellow-700">
                El recurso con código &ldquo;{code}&rdquo; no pudo ser
                encontrado.
              </p>
            </div>
          )}
        </div>

        <Link
          href={backLink.href}
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <span className="mr-2">←</span>
          {backLink.text}
        </Link>
      </div>
    </div>
  );
}
