import React from "react";
import "./subtotal.css";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* Display subtotal information */}
      <p>
        Subtotal ({basket.length} items): $
        {/* Get and display the total price of all items in the basket */}
        <strong>{getBasketTotal(basket)}</strong>
      </p>
      {/* Checkbox for gift option */}
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      {/* Button to proceed to checkout */}
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
