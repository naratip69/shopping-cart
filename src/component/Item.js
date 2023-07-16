import { useEffect, useState } from "react";

export default function Item({ name, price, addItemList, removeItemList }) {
  const [amount, setAmount] = useState(0);
  const [isInCart, setInCart] = useState(false);

  function addAmount(num) {
    setAmount((current) => {
      return current + num >= 0 ? current + num : 0;
    });
  }

  function editAmount(num) {
    setAmount((current) => {
      return num >= 0 ? num : 0;
    });
  }

  function addToCartHandle(e) {
    if (amount === 0) return;
    if (isInCart) {
      removeItemList(name);
      setInCart((current) => !current);
    } else {
      const obj = {
        name: name,
        price: price,
        amount: amount,
      };
      addItemList(obj);
      setInCart((current) => !current);
    }
  }

  return (
    <div className="Item" id={name}>
      <div>{name}</div>
      <div>{price} Bath</div>
      <div className="logic">
        <button
          type="button"
          onClick={(e) => addAmount(-1)}
          disabled={isInCart}
        >
          -
        </button>
        <input
          type="number"
          onChange={(e) => editAmount(+e.target.value)}
          value={amount}
          disabled={isInCart}
        />
        <button type="button" onClick={(e) => addAmount(1)} disabled={isInCart}>
          +
        </button>
        <button type="button" onClick={addToCartHandle}>
          {!isInCart ? "Add to cart" : "Edit Amount"}
        </button>
      </div>
    </div>
  );
}
