import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageTabs } from "../language/LanguageTabs";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import type { DemoState } from "@/hooks/useDemoOutput";

const demoState: DemoState = {
  activeLang: "c",
  setLanguage: jest.fn(),
  output: "",
  isPending: false,
};

function renderWithProviders() {
  return render(
    <ThemeProvider attribute="class" forcedTheme="dark">
      <NextUIProvider>
        <LanguageTabs demo={demoState} />
      </NextUIProvider>
    </ThemeProvider>
  );
}

describe("LanguageTabs", () => {
  it("renders language options", () => {
    renderWithProviders();
    expect(screen.getByRole("tab", { name: /C \(GCC\)/i })).toBeInTheDocument();
  });

  it("invokes setLanguage on selection", () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole("tab", { name: /Go/i }));
    expect(demoState.setLanguage).toHaveBeenCalled();
  });
});
