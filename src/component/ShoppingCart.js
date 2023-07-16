import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useLocation, useOutletContext } from "react-router-dom";

export default function ShoppingCart() {
  const location = useLocation();
  console.log(location);
  const itemList = location.state;
  return (
    <div className="shop">
      <h1>ShoppingCart</h1>
      <Link to="/">Home</Link>
      <ul>
        {itemList.map((e) => {
          return (
            <li>
              {e.name} {e.price} Bath X {e.amount} total:{e.amount * e.price}{" "}
              Bath
            </li>
          );
        })}
        <li>
          total price:
          {itemList.reduce((sum, e) => {
            return sum + e.price * e.amount;
          }, 0)}
          Bath
        </li>
      </ul>
    </div>
  );
}
