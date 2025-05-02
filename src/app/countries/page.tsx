"use client";
import { CountryList } from "@/features/countries/components/country-list";
import { useCountries } from "@/features/countries/api/use-countries";
import UILayout from "@/components/layout/ui-layout";
import Spinner from "@/components/ui/spinner";
import ErrorPage from "@/components/error/error-page";

export default function CountriesPage() {
  const { countries, continents, isLoading, error } = useCountries();

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
          title="Error al cargar los países"
          message="No pudimos cargar la lista de países. Por favor, intente nuevamente."
          error={error}
          buttonText="Intentar nuevamente"
        />
      </UILayout>
    );
  }

  return (
    <UILayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-900 mb-2">
          Lista de países
        </h1>
        <p className="text-gray-600">
          Lista de países con su respectiva bandera, continente y moneda.
        </p>
      </div>
      <CountryList countries={countries} continents={continents} />
    </UILayout>
  );
}
