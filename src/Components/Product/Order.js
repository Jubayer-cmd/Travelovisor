import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import swal from "sweetalert";
import auth from "../../firebase.init";
import Loading from "../Login/Loading";
const Order = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("ordering", () =>
    fetch(`https://travelovidor.onrender.com/order/${user.email}`, {
      method: "GET",
      headers: {},
    }).then((res) => res.json())
  );

  const handleCancel = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete(id);
        swal("Poof! Your order has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your order is safe!");
      }
    });
  };

  const handleDelete = (id) => {
    const url = `https://travelovidor.onrender.com/payment/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold my-2 ">Manage products</h1>
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
                <th>Person</th>
                <th>Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((a, index) => (
                <tr key={a._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img src={a.image} width="50vw" alt="" />
                  </td>
                  <td>{a.name}</td>
                  <td>{a.price}</td>
                  <td>{a.duration}</td>
                  <td>{a.person}</td>
                  <td>{a.date}</td>
                  <td>
                    {a.price && !a.paid && (
                      <Link to={`/payment/${a._id}`}>
                        <button className="btn btn-sm btn-success">pay</button>
                      </Link>
                    )}
                    {a.price && a.paid && (
                      <div>
                        <p>
                          <span className="text-success">Paid</span>
                        </p>
                        <p>
                          TransacID:{" "}
                          <span className="text-success">
                            {a.transactionId}
                          </span>
                        </p>
                      </div>
                    )}
                  </td>
                  <td>
                    {!a.paid ? (
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleCancel(a._id)}
                      >
                        <i class="bi bi-trash"></i> Cancel
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm btn-error"
                        disabled="disabled"
                      >
                        <i class="bi bi-trash"></i> Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
