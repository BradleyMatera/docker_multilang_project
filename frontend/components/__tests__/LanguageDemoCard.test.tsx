import { render, screen } from "@testing-library/react";
import { LanguageDemoCard } from "../LanguageDemoCard";

describe("LanguageDemoCard", () => {
  it("renders language name, description, and code", () => {
    render(
      <LanguageDemoCard
        language="Python"
        description="Popular scripting language. Prints date/time."
        code={`from datetime import datetime\nprint(f"Hello ASL! The date is: {datetime.now()}")`}
      />
    );
    expect(screen.getByText(/Python/i)).toBeInTheDocument();
    expect(screen.getByText(/Popular scripting language/i)).toBeInTheDocument();
    expect(screen.getByText(/from datetime import datetime/i)).toBeInTheDocument();
  });
});
