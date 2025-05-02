import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TicketsPage from "@/app/tickets/page";

// Mock the components
jest.mock("@/components/layout/ui-layout", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="ui-layout">{children}</div>
  ),
}));

jest.mock("@/features/tickets/components", () => ({
  TicketDescription: () => (
    <div data-testid="ticket-description">Description</div>
  ),
  TicketForm: ({
    onResult,
  }: {
    onResult: (result: string, queue: number[]) => void;
  }) => (
    <div>
      <button
        data-testid="submit-button"
        onClick={() => onResult("YES", [25, 25, 50])}
      >
        Submit
      </button>
    </div>
  ),
  TicketResult: ({ result, queue }: { result: string; queue: number[] }) => (
    <div data-testid="ticket-result">
      Result: {result}, Queue: {queue.join(", ")}
    </div>
  ),
  TicketExamples: ({
    onSelectExample,
  }: {
    onSelectExample: (queue: number[]) => void;
  }) => (
    <div>
      <button
        data-testid="example-button"
        onClick={() => onSelectExample([25, 25, 50, 100])}
      >
        Example
      </button>
    </div>
  ),
}));

// Mock dynamic import
jest.mock("@/features/tickets/utils/tickets", () => ({
  tickets: (queue: number[]) => (queue.includes(100) ? "NO" : "YES"),
}));

describe("TicketsPage", () => {
  it("renders page title and description", () => {
    render(<TicketsPage />);

    expect(
      screen.getByText("Algoritmo de Validación de Tickets")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Prueba un algoritmo que determina/)
    ).toBeInTheDocument();
  });

  it("updates result when form is submitted", () => {
    render(<TicketsPage />);

    // Result should not be visible initially
    expect(screen.queryByTestId("ticket-result")).not.toBeInTheDocument();

    // Submit the form
    fireEvent.click(screen.getByTestId("submit-button"));

    // Result should be visible now
    expect(screen.getByTestId("ticket-result")).toBeInTheDocument();
    expect(
      screen.getByText("Result: YES, Queue: 25, 25, 50")
    ).toBeInTheDocument();
  });

  it("updates result when example is selected", async () => {
    render(<TicketsPage />);

    // Result should not be visible initially
    expect(screen.queryByTestId("ticket-result")).not.toBeInTheDocument();

    // Select an example
    fireEvent.click(screen.getByTestId("example-button"));

    // Wait for the dynamic import to resolve
    await waitFor(() => {
      expect(screen.getByTestId("ticket-result")).toBeInTheDocument();
    });

    expect(
      screen.getByText("Result: NO, Queue: 25, 25, 50, 100")
    ).toBeInTheDocument();
  });
});
