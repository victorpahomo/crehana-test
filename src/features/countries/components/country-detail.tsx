import CountryFlag from "@/components/ui/country-flag";
import { Country } from "@/lib/types/country";

interface CountryDetailProps {
  country: Country;
}

/**
 * Country Detail component
 * @param country - Country
 * @returns Country Detail component
 */
export const CountryDetail = ({ country }: CountryDetailProps) => {
  if (!country) return null;

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-purple-100 shadow-md">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-purple-100 pb-6 text-center items-center md:text-left">
          <div className="w-32 h-32 flex items-center justify-center">
            <CountryFlag countryCode={country.code} width={128} height={128} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-purple-900 mb-2">
              {country.name}
            </h1>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-gray-600 font-medium">
                {country.native}
              </span>
              <span className="text-purple-300 px-2">•</span>
              <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-sm font-medium">
                {country.code}
              </span>
              {country.continent && (
                <>
                  <span className="text-purple-300 px-2">•</span>
                  <span className="text-gray-500">
                    {country.continent.name}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-purple-900 pb-2 border-b border-purple-100">
              Información General
            </h2>
            <dl className="space-y-4">
              {country.capital && (
                <div className="bg-purple-50 p-3 rounded-md">
                  <dt className="text-sm font-medium text-purple-700">
                    Capital
                  </dt>
                  <dd className="mt-1 text-lg font-medium text-purple-900">
                    {country.capital}
                  </dd>
                </div>
              )}

              {country.currency && (
                <div className="bg-purple-50 p-3 rounded-md">
                  <dt className="text-sm font-medium text-purple-700">
                    Moneda
                  </dt>
                  <dd className="mt-1 text-lg font-medium text-purple-900">
                    <div className="flex flex-wrap gap-2">
                      {country.currency.split(",").map((currency, index) => (
                        <span key={index}>{currency.trim()}</span>
                      ))}
                    </div>
                  </dd>
                </div>
              )}

              <div className="bg-purple-50 p-3 rounded-md">
                <dt className="text-sm font-medium text-purple-700">
                  Continente
                </dt>
                <dd className="mt-1 text-lg font-medium text-purple-900">
                  {country.continent.name}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-purple-900 pb-2 border-b border-purple-100">
              Idiomas
            </h2>
            {country.languages.length > 0 ? (
              <ul className="space-y-2">
                {country.languages.map((language) => (
                  <li
                    key={language.code}
                    className="flex items-center p-3 bg-purple-50 rounded-md"
                  >
                    <div>
                      <p className="font-medium text-purple-900">
                        {language.name}
                      </p>
                      <p className="text-sm text-purple-700">{language.code}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800">
                  No hay información de idiomas disponible
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
