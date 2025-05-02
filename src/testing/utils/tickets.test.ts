import { tickets } from "@/features/tickets/utils/tickets";

describe("Tickets Algorithm", () => {
  it("should return YES for [25, 25, 50]", () => {
    expect(tickets([25, 25, 50])).toBe("YES");
  });

  it("should return NO for [25, 100]", () => {
    expect(tickets([25, 100])).toBe("NO");
  });

  it("should return NO for [25, 25, 50, 50, 100]", () => {
    expect(tickets([25, 25, 50, 50, 100])).toBe("NO");
  });

  it("should return YES for [25, 25, 25, 100]", () => {
    expect(tickets([25, 25, 25, 100])).toBe("YES");
  });

  it("should return YES for [25, 25, 50, 25, 50, 25, 25, 50]", () => {
    expect(tickets([25, 25, 50, 25, 50, 25, 25, 50])).toBe("YES");
  });

  it("should return NO for [50]", () => {
    expect(tickets([50])).toBe("NO");
  });

  it("should return NO for [100]", () => {
    expect(tickets([100])).toBe("NO");
  });

  it("should return YES for an empty queue", () => {
    expect(tickets([])).toBe("YES");
  });

  it("should return YES for a queue with only 25s", () => {
    expect(tickets([25, 25, 25, 25])).toBe("YES");
  });
});
