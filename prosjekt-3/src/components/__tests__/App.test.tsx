import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

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
