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
    <Link href={`/countries/${country.code}`} className="block h-full">
      <div className="card block p-4 hover:shadow-md transition-all duration-300 h-full relative group hover:border-purple-200 cursor-pointer">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 sm:gap-5 mb-3">
            <div className="w-32 h-auto aspect-square relative flex-shrink-0">
              <CountryFlag
                countryCode={country.code}
                width={128}
                height={128}
              />
            </div>

            <div className="flex-1 min-w-0 text-left">
              <h2 className="text-lg font-bold text-purple-900 mb-1 truncate">
                {country.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {country.continent.name}
              </p>

              {country.currency && (
                <div className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 bg-purple-50 rounded-lg truncate">
                  DIVISA: {country.currency}
                </div>
              )}
            </div>
          </div>

          <div className="mt-auto text-center">
            <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-purple-600 text-purple-700 bg-transparent rounded-md hover:bg-purple-600 hover:text-white transition-colors text-sm">
              Ver detalle
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-0 h-1 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
      </div>
    </Link>
  );
};
