import React from "react";
import { useQuery } from "react-query";
import Loading from "../Login/Loading";

import OrderRow from "./OrderRow";

const ManageOrder = () => {
  const {
    data: purchase,
    isLoading,
    refetch,
  } = useQuery("adminorder", () =>
    fetch("https://travelovidor.onrender.com/payment", {
      method: "GET",
      headers: {},
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {" "}
      <div class="overflow-x-auto">
        <table class="table  table-compact w-full dark:text-black">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Person</th>
              <th>Date</th>
              <th>E-mail</th>
              <th></th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {purchase.map((buy, index) => (
              <OrderRow
                key={buy._id}
                buy={buy}
                index={index}
                refetch={refetch}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
