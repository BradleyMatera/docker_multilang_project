import { render, screen } from "@testing-library/react";
import HomePage from "../../app/page";

describe("HomePage", () => {
  it("renders the major sections", () => {
    render(<HomePage />);
    expect(screen.getByText(/Built to feel bold, modern, and cohesive/i)).toBeInTheDocument();
    expect(screen.getByText(/Containerized demos spanning seven runtimes/i)).toBeInTheDocument();
    expect(screen.getByText(/A deliberate plan from audit to deployment/i)).toBeInTheDocument();
    expect(screen.getByText(/From container orchestration to static hosting/i)).toBeInTheDocument();
    expect(screen.getByText(/Everything you need to explore further/i)).toBeInTheDocument();
    expect(screen.getByText(/Clone the repo, spin up the containers/i)).toBeInTheDocument();
  });
});
