import React from "react";
import swal from "sweetalert";
const ManagePackageRow = ({ buy, index, refetch }) => {
  const {
    _id,
    image,
    name,
    type,
    price,
    person,
    breakfast,
    lunch,
    snacks,
    dinner,
    duration,
    travel,
    include,
    day1,
    day2,
    day3,
  } = buy;
  const handleDelete = (_id) => {
    const url = `https://quiet-fortress-52901.herokuapp.com/travel/${_id}`;
    fetch(url, {
      method: "DELETE",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleDeleteOrder = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete(_id);
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
      <td>{travel}</td>
      <td>{type}</td>
      <td>{person}</td>
      <td>{breakfast}</td>
      <td>{lunch}</td>
      <td>{snacks}</td>
      <td>{dinner}</td>
      <td>
        {include?.[0]},{include?.[1]},{include?.[2]},{include?.[3]}
      </td>
      <td className="w-20">{day1}</td>
      <td>{day2}</td>
      <td>{day3}</td>
      <td>
        <button
          className="btn btn-error"
          onClick={() => handleDeleteOrder(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManagePackageRow;
