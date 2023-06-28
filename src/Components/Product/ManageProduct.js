import React from "react";
import { useQuery } from "react-query";
import Loading from "./../Login/Loading";
import ManagePackageRow from "./ManagePackageRow";

const ManageProduct = () => {
  const {
    data: travel,
    isLoading,
    refetch,
  } = useQuery("adminorder", () =>
    fetch("https://travelovidor.onrender.com/travel", {
      method: "GET",
      headers: {},
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="m-5">
      <h1 className="text-center text-2xl font-bold my-2 ">Manage Package</h1>
      <div>
        <div class="overflow-x-auto">
          <table class="table  table-compact w-full dark:text-black">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Travel</th>
                <th>Type</th>
                <th>Person</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Snacks</th>
                <th>Dinner</th>
                <th>Include</th>
                <th>Day1</th>
                <th>Day2</th>
                <th>Day3</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {travel.map((buy, index) => (
                <ManagePackageRow
                  key={buy._id}
                  buy={buy}
                  index={index}
                  refetch={refetch}
                ></ManagePackageRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
