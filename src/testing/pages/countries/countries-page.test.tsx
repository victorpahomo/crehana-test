import { render, screen } from "@testing-library/react";
import CountriesPage from "@/app/countries/page";
import { useCountries } from "@/features/countries/api/use-countries";
import { Country, Continent } from "@/lib/types/country";

// Mock the custom hooks and components
jest.mock("@/features/countries/api/use-countries");
jest.mock("@/components/layout/ui-layout", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="ui-layout">{children}</div>
  ),
}));
jest.mock("@/components/ui/spinner", () => ({
  __esModule: true,
  default: () => <div data-testid="spinner">Loading...</div>,
}));
jest.mock("@/features/countries/components/country-list", () => ({
  CountryList: ({
    countries,
    continents,
  }: {
    countries: Country[];
    continents: Continent[];
  }) => (
    <div data-testid="country-list">
      Countries: {countries.length}, Continents: {continents.length}
    </div>
  ),
}));

describe("CountriesPage", () => {
  const mockCountries: Country[] = [
    {
      code: "US",
      name: "United States",
      native: "United States",
      capital: "Washington D.C.",
      emoji: "🇺🇸",
      currency: "USD",
      continent: { name: "North America", code: "NA" },
      languages: [{ name: "English", code: "en" }],
    },
  ];

  const mockContinents: Continent[] = [
    { name: "North America", code: "NA" },
    { name: "Europe", code: "EU" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state correctly", () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: [],
      continents: [],
      isLoading: true,
      error: null,
    });

    render(<CountriesPage />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("renders error state correctly", () => {
    const errorMessage = "Failed to load countries";
    (useCountries as jest.Mock).mockReturnValue({
      countries: [],
      continents: [],
      isLoading: false,
      error: new Error(errorMessage),
    });

    render(<CountriesPage />);
    expect(screen.getByText("Error al cargar los países")).toBeInTheDocument();
    expect(
      screen.getByText(
        "No pudimos cargar la lista de países. Por favor, intente nuevamente."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("renders countries list when data is loaded", () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: mockCountries,
      continents: mockContinents,
      isLoading: false,
      error: null,
    });

    render(<CountriesPage />);
    expect(screen.getByText("Lista de países")).toBeInTheDocument();
    expect(screen.getByTestId("country-list")).toBeInTheDocument();
    expect(screen.getByText("Countries: 1, Continents: 2")).toBeInTheDocument();
  });
});
