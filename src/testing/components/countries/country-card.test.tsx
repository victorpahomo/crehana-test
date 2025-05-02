import { render, screen } from "@testing-library/react";
import { CountryCard } from "@/features/countries/components/country-card";
import { Country } from "@/lib/types/country";

// Mock the CountryFlag component
jest.mock("@/components/ui/country-flag", () => ({
  __esModule: true,
  default: ({ countryCode }: { countryCode: string }) => (
    <div data-testid="country-flag">{countryCode}</div>
  ),
}));

describe("CountryCard", () => {
  const mockCountry: Country = {
    code: "US",
    name: "United States",
    native: "United States",
    capital: "Washington D.C.",
    continent: {
      name: "North America",
      code: "NA",
    },
    currency: "USD",
    emoji: "🇺🇸",
    languages: [{ name: "English", code: "en" }],
  };

  it("renders country information correctly", () => {
    render(<CountryCard country={mockCountry} />);

    // Check if country name is displayed
    expect(screen.getByText("United States")).toBeInTheDocument();

    // Check if continent name is displayed
    expect(screen.getByText("North America")).toBeInTheDocument();

    // Check if currency is displayed
    expect(screen.getByText(/DIVISA: USD/)).toBeInTheDocument();

    // Check if flag is rendered
    expect(screen.getByTestId("country-flag")).toBeInTheDocument();
  });

  it("renders without currency if not provided", () => {
    const countryWithoutCurrency = {
      ...mockCountry,
      currency: "",
    };

    render(<CountryCard country={countryWithoutCurrency} />);

    // Check that currency is not displayed
    expect(screen.queryByText(/DIVISA:/)).not.toBeInTheDocument();
  });

  it("links to the country detail page", () => {
    render(<CountryCard country={mockCountry} />);

    // Check if link has correct href
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/countries/US");
  });
});
