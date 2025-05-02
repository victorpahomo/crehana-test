"use client";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES, GET_CONTINENTS } from "@/lib/graphql/queries";
import { CountriesData, ContinentsData } from "@/lib/types/country";

/**
 * Use countries query
 * @returns countries
 */
export const useCountries = () => {
  const {
    data: countriesData,
    loading: countriesLoading,
    error: countriesError,
  } = useQuery<CountriesData>(GET_COUNTRIES);

  const {
    data: continentsData,
    loading: continentsLoading,
    error: continentsError,
  } = useQuery<ContinentsData>(GET_CONTINENTS);

  return {
    countries: countriesData?.countries || [],
    continents: continentsData?.continents || [],
    isLoading: countriesLoading || continentsLoading,
    error: countriesError || continentsError,
  };
};
