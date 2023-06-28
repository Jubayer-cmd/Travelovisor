import React, { useState } from "react";
import swal from "sweetalert";

const OrderRow = ({ buy, index, refetch }) => {
  const [ship, setShip] = useState(false);
  const { _id, image, name, duration, price, email, paid, date, person } = buy;

  const handleDelete = (id) => {
    const url = `https://travelovidor.onrender.com/payment/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleDeleteOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete(id);
        swal("Poof! User has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your cancel the delete!");
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img src={image} width="50vw" alt="" />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{duration}</td>
      <td>{person}</td>
      <td>{date}</td>
      <td>{email}</td>
      <td></td>
      <td>
        {!paid && (
          <button
            className="btn btn-error"
            onClick={() => handleDeleteOrder(_id)}
          >
            <i class="bi bi-trash"></i> Cancel
          </button>
        )}
        {ship && <p className="text-success">Confirmed</p>}
      </td>
      <td>
        {paid && (
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setShip(true)}
          >
            Confirm
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
