/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import React from "react";
import "@testing-library/jest-dom";

jest.mock("../context/StateContext", () => ({
  useStateContext: () => ({
    showCart: true,
    setShowCart: jest.fn(),
    totalPrice: 2345,
    totalQuantities: 34,
    cartItems: [
      {
        image: ["image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg"],
        name: "item one",
        id: "item_1",
        price: 23,
        quantity: 1,
      },
      {
        image: ["image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg"],
        name: "item two",
        id: "item_2",
        price: 23,
        quantity: 1,
      },
    ],
    toggleCartItemQuanitity: "3",
    onRemove: () => {},
  }),
}));
describe("test Cart", () => {
  it("render", () => {
    render(<Cart />);
    expect(screen.getByText("Your Cart")).toBeInTheDocument();
    expect(screen.getByText("item one")).toBeInTheDocument();
    expect(screen.getByText("item two")).toBeInTheDocument();
    expect(screen.getByText("Subtotal:")).toBeInTheDocument();
    expect(screen.getByText("Pay with Stripe")).toBeInTheDocument();
  });
});
