const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cors = require("cors");
const corsOptions = {
  origin: ["https://sass-landing-stripe-frontend.onrender.com"],
  // origin: ["http://localhost:5173"],
};
const PORT = process.env.PORT || 3000;
const devUrl = "https://sass-landing-stripe.onrender.com";
const prodUrl = "http://localhost:3000";

app.use(cors(corsOptions));

// app.set("view engine", "ejs");

// app.get("/", async (req, res) => {
//   res.render("index.ejs");
// });

app.get("/subscribe", async (req, res) => {
  const plan = req.query.plan;

  if (!plan) {
    return res.send("Subscription plan not found");
  }

  let priceId;

  switch (plan.toLowerCase()) {
    case "corem":
      priceId = "price_1QEKV7Rw2ZPoOoHmjJ0zwFvY";
      break;

    case "corey":
      priceId = "price_1QEKWTRw2ZPoOoHmxyqserTT";
      break;

    case "teamm":
      priceId = "price_1QEKX7Rw2ZPoOoHmEEtgPabw";
      break;

    case "teamy":
      priceId = "price_1QEKYQRw2ZPoOoHmKFbyj5yX";
      break;

    case "overdrivem":
      priceId = "price_1QEKZ6Rw2ZPoOoHmhHfNBdvr";
      break;

    case "overdrivey":
      priceId = "price_1QEKZrRw2ZPoOoHmZj31uNo9";
      break;

    default:
      return res.send("Subscription plan not found");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    // success_url:
    //   "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
    // cancel_url: "http://localhost:3000/cancel",
    success_url:
      `${devURL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${devURL}/cancel`,
  });

  console.log(session);
  res.redirect(session.url);
});

app.get("/success", async (req, res) => {
  res.send("Subscribed successfully! You can close this tab.");
});

app.get("/cancel", (req, res) => {
  res.redirect(corsOptions.origin);
});

app.listen(PORT, () =>
  console.log("Server started at http://localhost:" + PORT)
);
