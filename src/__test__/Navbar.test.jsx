import Navbar from "../components/header/navbar/index";
import {render, cleanup, screen} from "@testing-library/react";
import {afterEach, expect, it} from "vitest";
import { MemoryRouter } from "react-router-dom";


afterEach(cleanup);

it('should render the About link in the desktop menu', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const navbar = screen.getByTestId('navbar'); // Ensure you have a testId for the navbar element.
  expect(navbar).toBeInTheDocument();

  const aboutLinks = screen.getAllByTestId('about-desktop');
  expect(aboutLinks).toHaveLength(2); // Adjust based on your expectations
  expect(aboutLinks[0]).toBeInTheDocument();
});

  