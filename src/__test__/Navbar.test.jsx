import React from "react";
import Navbar from "../components/header/navbar/index";
import {render, cleanup, screen, fireEvent} from "@testing-library/react";
import {afterEach, expect, it} from "vitest";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import {createMemoryHistory} from "history";

afterEach(cleanup);

// const renderWithRouter = (component) => {
//     const history = createMemoryHistory();

//     return {
//         ...render(<BrowserRouter>{component}</BrowserRouter>),
//     }
// }

// it("should render player page", () => {
//     const {container} = renderWithRouter(<Navbar />);
    
//     const navbar = screen.getByTestId("navbar");
    
//     const link = screen.getByTestId("about");
    
//     expect(navbar).toContainElement(link);

// })

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

  