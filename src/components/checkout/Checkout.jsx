import React from 'react'
import "./checkout.css"
import AD1 from "../../assets/ad1.jpg"
import Subtotal from "./Subtotal"


const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src={AD1} className="checkout__ad" alt="Advertisement" />

        <div>
          <h2 className="checkout__title">
            Your Shopping Basket
          </h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
