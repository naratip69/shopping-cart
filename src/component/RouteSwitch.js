import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}
