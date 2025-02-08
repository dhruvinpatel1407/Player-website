import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { afterEach, it, expect } from "vitest";
import reducer, { initState } from "../reducer";
import { Provider } from "react-redux";
import PopularPlayer from "../pages/popular player";
import {thunk} from "redux-thunk";
afterEach(cleanup);

const renderWithRedux = (
  component,
  {
    initState,
    store = createStore(reducer, initState, applyMiddleware(thunk)),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

it("API Data check", async () => {
  renderWithRedux(<PopularPlayer />);

  await waitFor(() => {
    expect(screen.getByText("Alex Lees")).toBeInTheDocument();
  }, { timeout: 5000 });
});
