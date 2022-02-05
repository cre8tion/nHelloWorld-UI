import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders Sign In link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Sign In link", () => {
  render(<App />);
  const textElement = screen.getByText(/Welcome/i);
  const userElement = screen.getByText(/User!/i);
  expect(textElement).toBeInTheDocument();
  expect(userElement).toBeInTheDocument();
});
