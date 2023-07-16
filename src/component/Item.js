import { useEffect, useState } from "react";

export default function Item({ name, price }) {
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

  us;

  return (
    <div className="Item" id={name}>
      <div>{name}</div>
      <div>{price} Bath</div>
      <div className="logic">
        <button type="button" onClick={(e) => addAmount(-1)} disable={isInCart}>
          -
        </button>
        <input
          type="number"
          onChange={(e) => editAmount(+e.target.value)}
          value={amount}
          disable={isInCart}
        />
        <button type="button" onClick={(e) => addAmount(1)} disable={isInCart}>
          +
        </button>
        <button
          type="button"
          onClick={(e) => {
            return setInCart((current) => !current);
          }}
        >
          {isInCart ? "Add to cart" : "Edit Amount"}
        </button>
      </div>
    </div>
  );
}
