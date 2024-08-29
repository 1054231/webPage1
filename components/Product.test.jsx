/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import React from "react";
import '@testing-library/jest-dom'
describe("test Product", () => {
  it("render", () => {
    render(
      <Product
        product={{
          name: "Test",
          image: ["image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg"],
          price: "220",
          slug: { current: "test" },
        }}
      />
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
