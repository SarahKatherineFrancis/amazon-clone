const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Nb5GICgEhGHHlG1frdmMmZ83FkZ5asuyQ6uJEQmFnALYoOSoTxE3DgrL8UDCUrTs8laiyt9zlfSGYZwtgOddleo00rSSYisap"
);

const app = express();

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from any origin
app.use(cors({ origin: true }));

// Parse incoming JSON data
app.use(express.json());

// Define a GET endpoint at the root URL
app.get("/", (request, response) => response.status(200).send("Hello world"));

// Define a POST endpoint for creating payment intents
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  // Log the received payment amount
  console.log("payment received", total);

  // Create a payment intent using the Stripe API
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // Send the client secret back to the client-side for completing the payment
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Export the Express app as a Firebase Cloud Function called "api"
exports.api = functions.https.onRequest(app);
