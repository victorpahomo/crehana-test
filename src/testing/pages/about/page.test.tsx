import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

// Mock SVG components
jest.mock("@/assets/react-svg/external-link", () => ({
  __esModule: true,
  default: () => <svg data-testid="external-link-svg" />,
}));

jest.mock("@/assets/react-svg/linkedin", () => ({
  __esModule: true,
  default: () => <svg data-testid="linkedin-svg" />,
}));

jest.mock("@/assets/react-svg/github", () => ({
  __esModule: true,
  default: () => <svg data-testid="github-svg" />,
}));

describe("AboutPage", () => {
  it("renders the main title", () => {
    render(<AboutPage />);

    const titleElement = screen.getByText(/¿Qué es/);
    expect(titleElement).toBeInTheDocument();
    expect(screen.getByText("crehana")).toBeInTheDocument();
    expect(screen.getByText("countries")).toBeInTheDocument();
  });

  it("renders the application description", () => {
    render(<AboutPage />);

    expect(
      screen.getByText(/Es una aplicación web desarrollada como prueba técnica/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/React.js, Next.js, TypeScript y Apollo Client/)
    ).toBeInTheDocument();
  });

  it("renders the main sections", () => {
    render(<AboutPage />);

    expect(screen.getByText("Listado de países")).toBeInTheDocument();
    expect(screen.getByText("Detalle de país")).toBeInTheDocument();
    expect(screen.getByText("Ejercicio del algoritmo")).toBeInTheDocument();
    expect(screen.getByText("Arquitectura y Tecnologías")).toBeInTheDocument();
    expect(screen.getByText("Sobre mí")).toBeInTheDocument();
  });

  it("renders the technologies section", () => {
    render(<AboutPage />);

    const techSections = [
      "Frontend",
      "Diseño",
      "GraphQL",
      "Arquitectura",
      "Testing",
      "Estado",
      "Despliegue",
      "Convenciones",
      "Error boundary y 404",
    ];

    techSections.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it("contains links to external resources", () => {
    render(<AboutPage />);

    // Check if the link to the countries API exists
    const apiLink = screen.getByText("countries.trevorblades.com");
    expect(apiLink).toBeInTheDocument();
    expect(apiLink.closest("a")).toHaveAttribute(
      "href",
      "https://countries.trevorblades.com"
    );

    // Check if the link to Bulletproof React exists
    const bulletproofLink = screen.getByText("Ver Bulletproof React en GitHub");
    expect(bulletproofLink).toBeInTheDocument();
  });
});
