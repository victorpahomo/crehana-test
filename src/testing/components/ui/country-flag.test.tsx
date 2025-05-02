import { render, screen, fireEvent } from "@testing-library/react";
import CountryFlag from "@/components/ui/country-flag";
import { ImageProps } from "next/image";

// Mock the env configuration
jest.mock("@/config/env", () => ({
  env: {
    countryFlagCdnUrl: "https://flagcdn.com",
  },
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"img"> & Partial<ImageProps>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={props.alt || ""} {...props} data-testid="flag-image" />;
  },
}));

describe("CountryFlag Component", () => {
  it("renders with correct flag URL when CDN URL is available", () => {
    render(<CountryFlag countryCode="US" />);

    const image = screen.getByTestId("flag-image");
    expect(image).toHaveAttribute("src", "https://flagcdn.com/w160/us.webp");
    expect(image).toHaveAttribute("alt", "Bandera de US");
  });

  it("applies custom width and height", () => {
    render(<CountryFlag countryCode="ES" width={100} height={120} />);

    const container = screen.getByTestId("flag-image").parentElement;
    expect(container).toHaveStyle({ width: "100px", height: "120px" });
  });

  it("falls back to placeholder on error", () => {
    render(<CountryFlag countryCode="XX" />);

    const image = screen.getByTestId("flag-image");

    // Simulate image load error
    fireEvent.error(image);

    // Check if the placeholder is used
    expect(image).toHaveAttribute("src", "/svg/flag-placeholder.svg");
    expect(image).toHaveAttribute("alt", "Bandera de placeholder");
  });
});
