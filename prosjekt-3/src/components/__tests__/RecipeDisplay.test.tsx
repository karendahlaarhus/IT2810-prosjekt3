import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import App from "../App";
import { render } from "@testing-library/react";
import RecipeDisplay from "../RecipeDisplay";
import Display from "../Display";

test("renders heading", () => {
  const { getByText } = render(<App />);
  const Heading = getByText("bon appétit");
  expect(Heading).toBeInTheDocument();
});

test("renders text", () => {
  const { getByText } = render(<App />);
  const Text = getByText(
    "What do you want to eat today? Search among hundreds of delicious recipes."
  );
  expect(Text).toBeInTheDocument();
});
