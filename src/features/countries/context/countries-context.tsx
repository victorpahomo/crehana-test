import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import { getAvailableCurrencies } from "../utils/country-utils";
import { Country } from "@/lib/types/country";

interface FilterState {
  searchTerm: string;
  selectedContinent: string;
  selectedCurrency: string;
}

interface SortState {
  sortCriteria: "name" | "continent" | "currency";
  sortDirection: "asc" | "desc";
}

interface CountriesContextType {
  // States
  filters: FilterState;
  sort: SortState;
  // Processed data
  availableCurrencies: string[];
  filteredCountries: Country[];
  // Actions
  updateSearchTerm: (term: string) => void;
  updateSelectedContinent: (continent: string) => void;
  updateSelectedCurrency: (currency: string) => void;
  updateSortCriteria: (criteria: "name" | "continent" | "currency") => void;
  toggleSortDirection: () => void;
  // Reset
  resetFilters: () => void;
}

// Initial values for the context
const defaultContextValue: CountriesContextType = {
  filters: {
    searchTerm: "",
    selectedContinent: "",
    selectedCurrency: "",
  },
  sort: {
    sortCriteria: "name",
    sortDirection: "asc",
  },
  availableCurrencies: [],
  filteredCountries: [],
  updateSearchTerm: () => {},
  updateSelectedContinent: () => {},
  updateSelectedCurrency: () => {},
  updateSortCriteria: () => {},
  toggleSortDirection: () => {},
  resetFilters: () => {},
};

// Create the context
const CountriesContext =
  createContext<CountriesContextType>(defaultContextValue);

/**
 * Hook to use the CountriesContext
 * @returns CountriesContext
 */
export const useCountriesContext = () => useContext(CountriesContext);

// Keys for localStorage
const FILTERS_STORAGE_KEY = "countries-filters";
const SORT_STORAGE_KEY = "countries-sort";

// Provider of the context
interface CountriesProviderProps {
  children: ReactNode;
  countries: Country[];
}

/**
 * Provider of the CountriesContext
 * @param {ReactNode} children - The children of the provider
 * @param {Country[]} countries - The countries to be used in the context
 * @returns CountriesProvider
 */
export const CountriesProvider = ({
  children,
  countries,
}: CountriesProviderProps) => {
  // Recover state from localStorage or use default values
  const [filters, setFilters] = useState<FilterState>(() => {
    if (typeof window === "undefined") return defaultContextValue.filters;

    try {
      const savedFilters = localStorage.getItem(FILTERS_STORAGE_KEY);
      return savedFilters
        ? JSON.parse(savedFilters)
        : defaultContextValue.filters;
    } catch (error) {
      console.error("Error loading filters from localStorage:", error);
      return defaultContextValue.filters;
    }
  });

  const [sort, setSort] = useState<SortState>(() => {
    if (typeof window === "undefined") return defaultContextValue.sort;

    try {
      const savedSort = localStorage.getItem(SORT_STORAGE_KEY);
      return savedSort ? JSON.parse(savedSort) : defaultContextValue.sort;
    } catch (error) {
      console.error("Error loading sort from localStorage:", error);
      return defaultContextValue.sort;
    }
  });

  // Persist state in localStorage when it changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(SORT_STORAGE_KEY, JSON.stringify(sort));
  }, [sort]);

  // Get available currencies
  const availableCurrencies = useMemo(
    () => getAvailableCurrencies(countries),
    [countries]
  );

  // Filter and sort countries
  const filteredCountries = useMemo(() => {
    return countries
      .filter((country) => {
        const matchesSearch = country.name
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());
        const matchesContinent =
          !filters.selectedContinent ||
          country.continent.code === filters.selectedContinent;
        const matchesCurrency =
          !filters.selectedCurrency ||
          country.currency === filters.selectedCurrency;

        return matchesSearch && matchesContinent && matchesCurrency;
      })
      .sort((a, b) => {
        if (sort.sortCriteria === "name") {
          // Sort by name
          return sort.sortDirection === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        } else if (sort.sortCriteria === "continent") {
          // Sort by continent name
          return sort.sortDirection === "asc"
            ? a.continent.name.localeCompare(b.continent.name)
            : b.continent.name.localeCompare(a.continent.name);
        } else if (sort.sortCriteria === "currency") {
          // Sort by currency
          const aCurrency = a.currency || "";
          const bCurrency = b.currency || "";
          return sort.sortDirection === "asc"
            ? aCurrency.localeCompare(bCurrency)
            : bCurrency.localeCompare(aCurrency);
        }
        return 0;
      });
  }, [countries, filters, sort]);

  // Actions
  const updateSearchTerm = (term: string) => {
    setFilters((prev) => ({ ...prev, searchTerm: term }));
  };

  const updateSelectedContinent = (continent: string) => {
    setFilters((prev) => ({ ...prev, selectedContinent: continent }));
  };

  const updateSelectedCurrency = (currency: string) => {
    setFilters((prev) => ({ ...prev, selectedCurrency: currency }));
  };

  const updateSortCriteria = (criteria: "name" | "continent" | "currency") => {
    setSort((prev) => ({ ...prev, sortCriteria: criteria }));
  };

  const toggleSortDirection = () => {
    setSort((prev) => ({
      ...prev,
      sortDirection: prev.sortDirection === "asc" ? "desc" : "asc",
    }));
  };

  const resetFilters = () => {
    setFilters(defaultContextValue.filters);
    setSort(defaultContextValue.sort);
  };

  // Context value
  const contextValue: CountriesContextType = {
    filters,
    sort,
    availableCurrencies,
    filteredCountries,
    updateSearchTerm,
    updateSelectedContinent,
    updateSelectedCurrency,
    updateSortCriteria,
    toggleSortDirection,
    resetFilters,
  };

  return (
    <CountriesContext.Provider value={contextValue}>
      {children}
    </CountriesContext.Provider>
  );
};
