import React from "react";
import "./subtotal.css";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): $
        <strong>{getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
