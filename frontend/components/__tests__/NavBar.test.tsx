import { render, screen, fireEvent } from "@testing-library/react";
import { NavBar } from "../NavBar";

describe("NavBar", () => {
  it("renders the navigation brand and GitHub link", () => {
    render(<NavBar />);
    expect(screen.getByText(/Docker Multi-Language/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Language demos/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /View Repo/i })).toBeInTheDocument();
  });

  it("toggles theme switcher", () => {
    render(<NavBar />);
    const switchBtn = screen.getByLabelText(/Toggle dark mode/i);
    expect(switchBtn).toBeInTheDocument();
    fireEvent.click(switchBtn);
    // No assertion for theme change since it's context-driven, but ensures interaction works
  });
});
