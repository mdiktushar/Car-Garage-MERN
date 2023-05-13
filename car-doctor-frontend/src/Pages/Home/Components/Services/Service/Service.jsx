import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl bg-white">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} width={314} height={208} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-900 font-semibold">{title}</h2>
        <p className="text-left text-gray-800">Price: {price}</p>
        <div className="card-actions">
         <Link to={`checkout/${_id}`}> <button className="btn btn-outline text-[#ff3811] hover:bg-[#ff3811] hover:border-white hover:text-white">
            Checkout
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
