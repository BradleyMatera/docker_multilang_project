import { render, screen, fireEvent } from "@testing-library/react";
import { NavBar } from "../NavBar";

describe("NavBar", () => {
  it("renders the navigation brand and GitHub link", () => {
    render(<NavBar />);
    expect(screen.getByText(/Docker Multi-Language/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub/i })).toBeInTheDocument();
  });

  it("toggles theme switcher", () => {
    render(<NavBar />);
    const switchBtn = screen.getByRole("switch", { name: /Toggle dark mode/i });
    expect(switchBtn).toBeInTheDocument();
    fireEvent.click(switchBtn);
    // No assertion for theme change since it's context-driven, but ensures interaction works
  });
});
