"use client";
import { useCountriesContext } from "../context/countries-context";
import ChevronDownSvg from "@/assets/react-svg/chevron-down";
import ChevronUpSvg from "@/assets/react-svg/chevron-up";
import SearchSvg from "@/assets/react-svg/search";
import { Continent } from "@/lib/types/country";
import ResetSvg from "@/assets/react-svg/reset";

interface CountryFiltersProps {
  continents: Continent[];
}

/**
 * Component to handle country filters and sorting
 * @param continents - List of continents
 * @returns Component to handle country filters and sorting
 */
export const CountryFilters = ({ continents }: CountryFiltersProps) => {
  const {
    filters: { searchTerm, selectedContinent, selectedCurrency },
    sort: { sortCriteria, sortDirection },
    availableCurrencies,
    updateSearchTerm,
    updateSelectedContinent,
    updateSelectedCurrency,
    updateSortCriteria,
    toggleSortDirection,
    resetFilters,
  } = useCountriesContext();

  return (
    <div className="bg-white p-3 sm:p-6 rounded-lg shadow-md mb-3 sm:mb-8 border border-purple-100">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-purple-900">
          Filtros y Ordenamiento
        </h2>
        <button
          onClick={resetFilters}
          className="flex items-center gap-1 text-sm sm:text-base py-1.5 px-3 sm:p-2.5 border border-purple-200 rounded-md hover:bg-purple-50 text-purple-600 transition-colors"
          title="Resetear filtros"
        >
          <ResetSvg width={18} height={18} color="currentColor" />
          <span className="">Restablecer</span>
        </button>
      </div>

      <div className="space-y-3 sm:space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <SearchSvg width={16} height={16} color="#a78bfa" />
          </div>
          <input
            type="text"
            placeholder="Buscar países..."
            value={searchTerm}
            onChange={(e) => updateSearchTerm(e.target.value)}
            className="w-full text-sm pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-purple-50 border border-purple-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="flex flex-wrap sm:grid sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="w-[48%] sm:w-auto">
            <label className="block text-sm font-medium text-purple-700 mb-1 sm:mb-2">
              Continente
            </label>
            <select
              value={selectedContinent}
              onChange={(e) => updateSelectedContinent(e.target.value)}
              className="w-full text-sm sm:text-base p-2 sm:p-2.5 bg-purple-50 border border-purple-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Todos</option>
              {continents.map((continent) => (
                <option key={continent.code} value={continent.code}>
                  {continent.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-[48%] sm:w-auto">
            <label className="block text-sm font-medium text-purple-700 mb-1 sm:mb-2">
              Moneda
            </label>
            <select
              value={selectedCurrency}
              onChange={(e) => updateSelectedCurrency(e.target.value)}
              className="w-full text-sm sm:text-base p-2 sm:p-2.5 bg-purple-50 border border-purple-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Todas</option>
              {availableCurrencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-auto mt-3 sm:mt-0">
            <label className="block text-sm font-medium text-purple-700 mb-1 sm:mb-2">
              Ordenamiento
            </label>
            <div className="flex items-center gap-2">
              <select
                value={sortCriteria}
                onChange={(e) =>
                  updateSortCriteria(
                    e.target.value as "name" | "continent" | "currency"
                  )
                }
                className="flex-1 text-sm sm:text-base p-2 sm:p-2.5 bg-purple-50 border border-purple-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="name">Nombre</option>
                <option value="continent">Continente</option>
                <option value="currency">Divisa</option>
              </select>

              <button
                onClick={toggleSortDirection}
                className="p-2 sm:p-2.5 border border-purple-200 rounded-md hover:bg-purple-50 text-purple-600 transition-colors"
                title={sortDirection === "asc" ? "Ascendente" : "Descendente"}
              >
                {sortDirection === "asc" ? (
                  <ChevronUpSvg width={18} height={18} color="currentColor" />
                ) : (
                  <ChevronDownSvg width={18} height={18} color="currentColor" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
