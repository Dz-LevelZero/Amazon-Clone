const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HRb53HbyqYiG8AoqiButyF6V49kfdWVC2w9y2EW9thcc91MVaaGVZ1ojH2zPpAJxTmnk58XzLhVUSHvBugBIgy400iY4SfQvQ")

// API

// - App confing
const app = express();

// - Middlewares
app.use(cors({ origin:true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payment request recived !! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency 
        currency: "usd",
    });

    // 201 == Ok - Created
    res.status(201).send({
        clientSecret : paymentIntent.client_secret 
    });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// exemple endpoint
// http://localhost:5001/dz-clone/us-central1/api 