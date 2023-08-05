import React, { useEffect, useState } from "react";
import "./payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../reducer";
import axios from "../../axios";
import { db } from "../../firebase";

const Payment = () => {
  const navigate = useNavigate();
  // Access the global state (basket and user) and the dispatch function from the data layer
  const [{ basket, user }, dispatch] = useStateValue();

  // Access the Stripe context
  const stripe = useStripe();
  const elements = useElements();

  // States for handling payment processing and error messages
  const [succeeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  // Use effect hook to fetch the client secret for payment
  useEffect(() => {
    const getClientSecret = async () => {
      // Make a POST request to the server to get the client secret
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log(clientSecret);

  // Handle form submission on payment button click
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Perform the payment processing using Stripe
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders"); // Redirect to orders page after successful payment
      });
  };

  // Handle changes in the CardElement
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            {<p>user.email</p>}
            <p>123 React Lane</p>
            <p>Cape Town, South Africa</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              {/* Stripe CardElement */}
              <CardElement onChange={handleChange} />

              {/* Display the order total and the payment button */}
              <div className="payment__price-container">
                <h3>Order Total: ${getBasketTotal(basket)}</h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Display error message if there's any */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
