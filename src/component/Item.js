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
}
