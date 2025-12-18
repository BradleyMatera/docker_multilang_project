import { render, screen } from "@testing-library/react";
import { Hero } from "../hero/Hero";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

function renderWithProviders(ui: React.ReactNode) {
  return render(
    <ThemeProvider attribute="class" forcedTheme="dark">
      <NextUIProvider>{ui}</NextUIProvider>
    </ThemeProvider>
  );
}

describe("Hero", () => {
  it("renders headline and actions", () => {
    renderWithProviders(<Hero />);
    expect(screen.getByText(/Run containerized languages in Docker from one unified workflow./i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Explore the repository/i })).toBeInTheDocument();
  });
});
