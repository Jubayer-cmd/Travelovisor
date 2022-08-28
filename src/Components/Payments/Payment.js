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
  return (
    <div className="dark:bg-[#0B1222] h-screen">
      <h1 className="text-2xl font-bold text-center py-3 mb-3 dark:text-white">
        Payment for <span className="text-primary">{id}</span>
      </h1>

      <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
            {Payment.name}
          </h5>
          <p class="text-gray-700 text-base mb-4">{Payment.price}</p>
          <p class="text-gray-700 text-base mb-4">{Payment.quantity}</p>
          <Elements stripe={stripePromise}>
            <CheckoutForm Payment={Payment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
