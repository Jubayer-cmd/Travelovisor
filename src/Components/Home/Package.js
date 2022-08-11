import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Package = () => {
  const { id } = useParams();
  const [pack, setPack] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/travel/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, [id]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 bg-red-100 p-5">
        <h1 className="text-4xl">
          Package:
          <span className="text-purple-600 text-3xl font-bold ">
            {pack.name}
          </span>
        </h1>
        <p className="mt-2 text-xl">🚀 Place: {pack.travel}</p>
        <div class="divider"></div>
        <div className="grid grid-cols-3 m-auto">
          <div className="flex justify-center">
            <img
              className="w-10 h-10 mr-3"
              src="https://cdn-icons.flaticon.com/png/512/3696/premium/3696861.png?token=exp=1660216559~hmac=3308cde66ede8a1d5599bb5a3dfeda90"
              alt=""
            />
            <div>
              <p className="font-bold">Duration</p>
              <p>{pack.duration}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-10 h-10 mr-3"
              src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
              alt=""
            />
            <div>
              <p className="font-bold">Tour Type</p>
              <p>{pack.type}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-10 h-10 mr-3"
              src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png"
              alt=""
            />
            <div>
              <p className="font-bold">Members</p>
              <p>{pack.person}</p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="p-1 bg-white border rounded max-w-sm mx-auto my-10"
            src={pack.image}
            alt=""
          />
        </div>
        <div class="overflow-x-auto">
          <h1 className="text-2xl font-bold text-violet-600 uppercase my-3">
            Food Menu:
          </h1>
          <table class="table table-zebra w-full">
            <tbody>
              <tr>
                <th>Breakfast</th>
                <td>{pack.breakfast}</td>
              </tr>

              <tr>
                <th>Lunch</th>
                <td>{pack.lunch}</td>
              </tr>
              <tr>
                <th>Snacks</th>
                <td>{pack.snacks}</td>
              </tr>
              <tr>
                <th>Dinner</th>
                <td>{pack.dinner}</td>
              </tr>
            </tbody>
          </table>
          <h1 className="text-2xl font-bold text-violet-600 my-3">
            INCLUDED/EXCLUDE
          </h1>
        </div>
        <div>
          <h1>Include</h1>
          <li>{pack?.include}</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>
      <div className="bg-black place-content-end">
        <h1>Want to purchase?</h1>
      </div>
    </div>
  );
};

export default Package;
