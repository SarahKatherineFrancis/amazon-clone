import React from "react";
import "./checkout-product.css";
import { useStateValue } from "../../StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // Function to remove the item from the basket when 'Remove from basket' button is clicked
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout-product">
      {/* Product image */}
      <img src={image} className="checkout-product__image" alt={title} />

      <div className="checkout-product___info">
        {/* Product title */}
        <p className="checkout-product__title">{title}</p>
        {/* Product price */}
        <p className="checkout-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* Product rating */}
        <div className="checkout-product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // Render a star for each rating value
              <p key={i}>⭐️</p>
            ))}
        </div>
        {/* 'Remove from basket' button */}
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
