"use client";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "@/lib/graphql/queries";
import { CountryData } from "@/lib/types/country";

/**
 * Use country query
 * @param code - Country code (ISO 3166-1 alpha-2)
 * @returns country
 */
export const useCountry = (code: string) => {
  const { data, loading, error } = useQuery<CountryData>(GET_COUNTRY, {
    variables: { code },
    skip: !code,
  });

  return {
    country: data?.country,
    isLoading: loading,
    error,
  };
};
