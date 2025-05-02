import { Country } from "@/lib/types/country";

/**
 * Get the list of available currencies from the list of countries
 * @param countries - List of countries
 * @returns List of unique currencies sorted alphabetically
 */
export const getAvailableCurrencies = (countries: Country[]): string[] => {
  const currencies = countries
    .filter((country) => country.currency)
    .map((country) => country.currency)
    .filter(
      (currency, index, self) => currency && self.indexOf(currency) === index
    )
    .sort();
  return currencies;
};
