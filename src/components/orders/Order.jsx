import React from "react";
import "./order.css";
import moment from "moment";
import CheckoutProduct from "../checkout/CheckoutProduct";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      {console.log(order)}
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
    </div>
  );
};

export default Order;
