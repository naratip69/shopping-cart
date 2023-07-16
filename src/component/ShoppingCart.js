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
      <Navbar itemList={itemList} />
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
          {itemList.length
            ? `total price:
          ${itemList.reduce((sum, e) => {
            return sum + e.price * e.amount;
          }, 0)}
          Bath`
            : "Cart is empty"}
        </li>
      </ul>
    </div>
  );
}
