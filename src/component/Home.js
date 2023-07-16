import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const [itemList, setItemList] = useState([]);

  function addItemList(obj) {
    setItemList((list) => [...list, obj]);
  }

  function removeItemList(name) {
    setItemList((list) => list.filter((e) => e.name !== name));
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <Navbar />
    </div>
  );
}
