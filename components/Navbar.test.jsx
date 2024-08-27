/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import React from "react";
import "@testing-library/jest-dom";

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
