"use client";
import { CountriesProvider } from "../context/countries-context";
import { Country, Continent } from "@/lib/types/country";
import { CountryFilters } from "./country-filters";
import { CountryGrid } from "./country-grid";

interface CountryListProps {
  countries: Country[];
  continents: Continent[];
}

/**
 * Country List component
 * @param countries - Countries
 * @param continents - Continents
 * @returns Country List component
 */
export const CountryList = ({ countries, continents }: CountryListProps) => {
  return (
    <CountriesProvider countries={countries}>
      <div className="space-y-6">
        <CountryFilters continents={continents} />
        <CountryGrid />
      </div>
    </CountriesProvider>
  );
};
