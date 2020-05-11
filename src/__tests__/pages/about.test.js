import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "../../pages/about";

afterEach(cleanup);

test("navigates about page when url is `/about`", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  const { getByTestId } = render(
    <MemoryRouter initialEntries={["/about"]}>
      <About />
    </MemoryRouter>,
    root
  );

  const pageTitle = getByTestId("page-title");

  expect(pageTitle).toBeInTheDocument();
  expect(pageTitle).toHaveTextContent("About");
});