import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/home";

afterEach(cleanup);

test("navigates home on start app", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  const { getByTestId } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Home />
    </MemoryRouter>,
    root
  );

  const pageTitle = getByTestId("page-title");

  expect(pageTitle).toBeInTheDocument();
  expect(pageTitle).toHaveTextContent("Home");
});
