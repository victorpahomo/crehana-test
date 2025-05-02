"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

import { CountryDetail } from "@/features/countries/components/country-detail";
import ExclamationTriangleSvg from "@/assets/react-svg/exclamation-triangle";
import { useCountry } from "@/features/countries/api/use-country";
import ArrowLeftSvg from "@/assets/react-svg/arrow-left";
import UILayout from "@/components/layout/ui-layout";
import Spinner from "@/components/ui/spinner";
import XSvg from "@/assets/react-svg/x";

export default function CountryDetailPage() {
  const params = useParams();
  const countryCode = typeof params.code === "string" ? params.code : "";

  const { country, isLoading, error } = useCountry(countryCode);

  if (isLoading) {
    return (
      <UILayout>
        <Spinner />
      </UILayout>
    );
  }

  if (error) {
    return (
      <UILayout>
        <div className="animate-fadeIn">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-md shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                <XSvg width={24} height={24} color="#dc2626" />
              </div>
              <div>
                <p className="text-lg font-medium text-red-700">
                  Error al cargar el país
                </p>
                <p className="text-sm text-red-600">{error.message}</p>
              </div>
            </div>
          </div>
          <Link
            href="/countries"
            className="inline-flex items-center px-4 py-2.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            <ArrowLeftSvg width={16} height={16} color="currentColor" />
            <span className="ml-2">Volver a Países</span>
          </Link>
        </div>
      </UILayout>
    );
  }

  if (!country) {
    return (
      <UILayout>
        <div className="animate-fadeIn">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6 rounded-r-md shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                <ExclamationTriangleSvg
                  width={24}
                  height={24}
                  color="#d97706"
                />
              </div>
              <div>
                <p className="text-lg font-medium text-yellow-700">
                  País no encontrado
                </p>
                <p className="text-sm text-yellow-600">
                  El país con código &ldquo;{countryCode}&rdquo; no pudo ser
                  encontrado.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/countries"
            className="inline-flex items-center px-4 py-2.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            <ArrowLeftSvg width={16} height={16} color="currentColor" />
            <span className="ml-2">Volver a Países</span>
          </Link>
        </div>
      </UILayout>
    );
  }

  return (
    <UILayout>
      <div className="animate-fadeIn lg:px-24">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-purple-900">
            Detalle del país
          </h1>
          <Link
            href="/countries"
            className="inline-flex items-center px-3 py-2 border border-purple-600 text-purple-700 bg-transparent rounded-md hover:bg-purple-50 transition-colors"
          >
            <ArrowLeftSvg width={16} height={16} color="currentColor" />
            <span className="ml-2">Volver a países</span>
          </Link>
        </div>
        <CountryDetail country={country} />
      </div>
    </UILayout>
  );
}
