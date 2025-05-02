"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

import { CountryDetail } from "@/features/countries/components/country-detail";
import { useCountry } from "@/features/countries/api/use-country";
import NotFoundPage from "@/components/error/not-found-page";
import ArrowLeftSvg from "@/assets/react-svg/arrow-left";
import ErrorPage from "@/components/error/error-page";
import UILayout from "@/components/layout/ui-layout";
import Spinner from "@/components/ui/spinner";

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
        <ErrorPage
          title="Error al cargar el país"
          message="No pudimos obtener la información del país solicitado."
          error={error}
          buttonText="Intentar nuevamente"
        />
      </UILayout>
    );
  }

  if (!country) {
    return (
      <UILayout>
        <NotFoundPage
          title="País no encontrado"
          message="El país que estás buscando no existe o ha sido movido."
          code={countryCode}
          backLink={{
            text: "Volver a Países",
            href: "/countries",
          }}
        />
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
