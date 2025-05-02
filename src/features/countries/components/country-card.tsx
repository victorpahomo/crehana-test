import Link from "next/link";

import CountryFlag from "@/components/ui/country-flag";
import { Country } from "@/lib/types/country";

interface CountryCardProps {
  country: Country;
}

/**
 * Country Card component
 * @param country - Country
 * @returns Country Card component
 */
export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link
      href={`/countries/${country.code}`}
      className="card block p-6 hover:bg-white/90 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="relative overflow-hidden">
          <CountryFlag countryCode={country.code} width={120} height={120} />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-purple-900 mb-1">
            {country.name}
          </h2>
          <p className="text-gray-600 mb-2">{country.continent.name}</p>
          {country.currency && (
            <div className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 bg-purple-50 rounded-lg">
              DIVISA: {country.currency}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
