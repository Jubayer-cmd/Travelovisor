import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Login/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L3h5BLYfK2WiSoMhQPKX42Qb6RAVciI8azz2t1mdxxpwBLhXeyZXpjeDiHUMBWPvq89MOaob83AZl7inKpXTSxR00UGOnoE6g"
);
const Payment = () => {
  const { id } = useParams();
  const { data: Payment, isLoading } = useQuery("payments", () =>
    fetch(`https://quiet-fortress-52901.herokuapp.com/payment/${id}`, {
      method: "GET",
      headers: {},
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const Payssl = () => {
    fetch(`https://quiet-fortress-52901.herokuapp.com/ssl-request`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Payment),
    })
      .then((res) => res.json())
      .then((data) => window.open(data.GatewayPageURL));
  };
  return (
    <div className="dark:bg-[#0B1222] h-screen">
      <h1 className="text-2xl font-bold text-center py-3 mb-3 dark:text-white">
        Payment for <span className="text-primary">{Payment.name}</span>
      </h1>
      <div className="flex justify-between">
        <div class="flex justify-center w-3/5">
          <div class="block p-6 max-w-2xl rounded-lg shadow-lg bg-white">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
              Payment with Stripe
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Total Price:{Payment.price}
            </p>
            <p class="text-gray-700 text-base mb-4">{Payment.quantity}</p>
            <Elements stripe={stripePromise}>
              <CheckoutForm Payment={Payment} />
            </Elements>
          </div>
        </div>
        <div class="flex justify-center w-3/5">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
              Payment with SSlCommerz
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Total Price:{Payment.price}
            </p>
            <p class="text-gray-700 text-base">{Payment.quantity}</p>
            <button className="btn" onClick={() => Payssl()}>
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
