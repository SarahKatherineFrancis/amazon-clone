import React from "react";
import "./checkout.css";
import AD1 from "../../assets/ad1.jpg";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../StateProvider";

const Checkout = () => {
  // Destructure the 'basket' and 'user' states from the StateProvider's state
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      {/* Checkout left section */}
      <div className="checkout__left">
        {/* Display an advertisement */}
        <img src={AD1} className="checkout__ad" alt="Advertisement" />

        <div>
          {/* Display a greeting message based on user's authentication */}
          {user ? <h3>Hello, {user.email}</h3> : <h3>Hello, Guest User</h3>}

          {/* Title for the shopping basket */}
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {/* Iterate through each item in the basket and render a CheckoutProduct component */}
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id} // Use 'key' prop for React's internal optimization
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* Checkout right section */}
      <div className="checkout__right">
        {/* Render the Subtotal component */}
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
