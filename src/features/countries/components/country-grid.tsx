import { useCountriesContext } from "../context/countries-context";
import { CountryCard } from "./country-card";

/**
 * Component that shows a grid of countries
 *
 * @returns CountryGrid component
 */
export const CountryGrid = () => {
  const { filteredCountries } = useCountriesContext();

  if (filteredCountries.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No se encontraron países que coincidan
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCountries.map((country) => (
        <CountryCard key={country.code} country={country} />
      ))}
    </div>
  );
};
