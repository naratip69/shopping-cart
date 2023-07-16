import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Item from "./Item";

export default function Home() {
  const [itemList, setItemList] = useState([]);

  function addItemList(obj) {
    setItemList((list) => [...list, obj]);
  }

  function removeItemList(name) {
    setItemList((list) => list.filter((e) => e.name !== name));
  }

  const items = [
    <Item
      name="Candy"
      price={10}
      addItemList={addItemList}
      removeItemList={removeItemList}
    />,
    <Item
      name="Chips"
      price={28}
      addItemList={addItemList}
      removeItemList={removeItemList}
    />,
    <Item
      name="Cola"
      price={15}
      addItemList={addItemList}
      removeItemList={removeItemList}
    />,
  ];

  useEffect(() => {
    console.log(itemList);
  }, [itemList]);
  return (
    <div className="home">
      <h1>Home</h1>
      <Navbar itemList={itemList} />
      <div className="items">{items.map((e) => e)}</div>
    </div>
  );
}
