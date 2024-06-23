import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements} from "@stripe/react-stripe-js";

import './CheckoutForm.css';
export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [state, setState] = useState('');
const [pincode, setPincode] = useState('');
const [country, setCountry] = useState('');
  const stripe = useStripe();
  const elements = useElements();


  
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
const Secretgenerate=async ()=>{
  const res = await fetch("http://54.176.185.234:3000/api/reviewDetails/createIntent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ amount: 100, currency: 'usd', description: 'testing' })
  });
  const data = await res.json();
  setClientSecret(data.client_secret);
  return data.client_secret;
    
};
  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const client_Secret = await Secretgenerate();
console.log("clientsec",clientSecret);
console.log("card",CardElement);
    const payload = await stripe.confirmCardPayment(client_Secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: name,
          address: {
            line1: address,
            city: city,
            state: state,
            postal_code:pincode,
            country: country,
          },
        },
      }
    });
console.log("payload",payload);
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <div  className='maincheckout'>
    <form id="payment-form" onSubmit={handleSubmit} className="formcheckout">
    <input
 type="text"
 value={name}
 onChange={(e) => setName(e.target.value)}
 placeholder="Enter your name"
/>
<input
 type="text"
 value={address}
 onChange={(e) => setAddress(e.target.value)}
 placeholder="Enter your address"
/>
<input
 type="text"
 value={city}
 onChange={(e) => setCity(e.target.value)}
 placeholder="Enter your City"
/>
<input
 type="text"
 value={state}
 onChange={(e) => setState(e.target.value)}
 placeholder="Enter your State"
/>
<input
 type="number"
 value={pincode}
 onChange={(e) => setPincode(e.target.value)}
 placeholder="Enter your Pincode"
/>
<input
 type="text"
 value={country}
 onChange={(e) => setCountry(e.target.value)}
 placeholder="Enter your country"
/>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
      />
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
  

      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
    </div>
  );
}
