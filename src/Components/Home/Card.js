import React from "react";

const Card = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-violet-700 my-16 dark:text-sky-500">
        Travel with us!
      </h1>
      <div className="md:flex text-white mx-auto">
        <div className="card m-5 card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
          <figure>
            <img
              className="p-10 w-52 hover:scale-125 duration-300"
              src="https://cdn-icons-png.flaticon.com/512/1257/1257236.png?w=740&t=st=1659968503~exp=1659969103~hmac=e2a31072a5f458d0e168629d3f935147bb799e62913c6937d162888d340c12b2"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Opening Hours</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>
        <div className="card m-5 card-side bg-accent shadow-xl">
          <figure>
            <img
              className="p-10 w-52 hover:scale-125 duration-300"
              src="https://cdn-icons-png.flaticon.com/512/1257/1257234.png?w=740&t=st=1659969010~exp=1659969610~hmac=70eb9256dd771abb5db15f5d2097322060d2f31159321cc54f9c98626bb01156"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Visit our Location</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>
        <div className="card m-5 card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
          <figure>
            <img
              className="p-10 w-52 hover:scale-125 duration-300"
              src="https://cdn-icons-png.flaticon.com/512/1257/1257248.png?w=740&t=st=1659968566~exp=1659969166~hmac=e540299d9a78d4dc69e4cc6f989ae12fdd3d7fad357c2cdb1c2836ef8c56be4f"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Contact us now</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
