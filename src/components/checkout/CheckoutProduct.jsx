import React from "react";
import "./checkout-product.css";
import { useStateValue } from "../../StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout-product">
      <img src={image} className="checkout-product__image" alt={title} />

      <div className="checkout-product___info">
        <p className="checkout-product__title">{title}</p>
        <p className="checkout-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
