/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Navbar } from "../components";

jest.mock("../context/StateContext", () => ({
  useStateContext: () => ({
    showCart: true,
    setShowCart: () => {},
    totalPrice: "2345",
    totalQuantities: "34",
    cartItems: [],
    toggleCartItemQuanitity: "3",
    onRemove: () => {},
  }),
}));
describe("test Navbar", () => {
  it("render", () => {
    render(<Navbar />);
    expect(screen.getByText("Your shopping bag is empty")).toBeInTheDocument();
  });
});
