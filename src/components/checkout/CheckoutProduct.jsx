import React from 'react'
import "./checkout-product.css"

const CheckoutProduct = ({id, image, title, price, rating}) => {
  return (
    <div className='checkout-product'>
      <img src={image} className='checkout-product__image' alt={title} />

      <div className="checkout-product___info">
        <p className='checkout-product__title'>{title}</p>
        <p className="checkout-product__price"><small>$</small><strong>{price}
        </strong></p>
        <div className="checkout-product__rating">
          {Array(rating).fill().map((_, i) =>
          <p>⭐️</p>
          )}
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
