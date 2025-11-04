import { render, screen } from "@testing-library/react";
import { HeroSection } from "../HeroSection";

describe("HeroSection", () => {
  it("renders the hero title and CTA button", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Docker Multi-Language Project/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /View on GitHub/i })).toBeInTheDocument();
  });
});
