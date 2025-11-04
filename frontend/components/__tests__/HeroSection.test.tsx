import { render, screen } from "@testing-library/react";
import { HeroSection } from "../HeroSection";

describe("HeroSection", () => {
  it("renders the hero headline and CTA buttons", () => {
    render(<HeroSection />);
    expect(screen.getByText(/A premium multi-language Docker showcase rebuilt with purpose/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /View Source/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /See the workflow/i })).toBeInTheDocument();
  });
});
