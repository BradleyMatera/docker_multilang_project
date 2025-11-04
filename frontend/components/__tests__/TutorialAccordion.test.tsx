import { render, screen } from "@testing-library/react";
import TutorialLandingPage from "../../app/page";

describe("TutorialLandingPage Accordion", () => {
  it("renders all tutorial step titles", () => {
    render(<TutorialLandingPage />);
    expect(screen.getByText(/Project Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Architecture & Technologies/i)).toBeInTheDocument();
    expect(screen.getByText(/Step-by-Step Implementation/i)).toBeInTheDocument();
    expect(screen.getByText(/Code Walkthrough/i)).toBeInTheDocument();
    expect(screen.getByText(/Deployment & Automation/i)).toBeInTheDocument();
    expect(screen.getByText(/Future Enhancements/i)).toBeInTheDocument();
  });
});
