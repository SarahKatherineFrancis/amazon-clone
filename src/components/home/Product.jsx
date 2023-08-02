import React from "react";
import "./product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  // Function to add the product to the basket
  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        {/* Product title */}
        <p>{title}</p>
        {/* Product price */}
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* Product rating */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>

      {/* Product image */}
      <img src={image} alt={title} />

      {/* Add to Basket button */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
