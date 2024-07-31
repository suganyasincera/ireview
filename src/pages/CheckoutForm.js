import React, { useCallback } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';




// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.
//const stripePromise = loadStripe("pk_test_51Ou7j0SIgrfsrVy23Jru7s4v44HEHwSE7yrts3yHXng0m09mAJOYqznTkwR2tfEl9MX5VxveN7hzY2pHe3ykr38M00bbji3gDO");
const stripePromise = loadStripe('pk_test_51PiW61BXJEI3LbRpLWSFcDhRBYbwh4KBkemAyYhZrOlEVXdZvSePkAhcXvQn8v8vTfvWvZwDxyszaB48nUP49Nit00qcGiNMCU');
const apiUrl = process.env.REACT_APP_BASE_URL
export default function Checkout() {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    console.log("check")
    return fetch(apiUrl+"/api/reviewDetails/createCheckoutSession", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
      
  }, []);
  console.log("out");
  const options = {fetchClientSecret};

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}


