import React from "react";

const Booking = ({ booking, deleteHandler, confirmHandler }) => {
  const { _id, service, price, status } = booking;
  return (
    <tr className="bg-white">
      <th className="bg-white">
        <label>
          <button
            onClick={() => deleteHandler(_id)}
            className="btn btn-ghost btn-xs"
          >
            X
          </button>
        </label>
      </th>
      <td className="bg-white">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={booking?.img} alt={service} />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td className="bg-white">
        {price}
        <br />
      </td>
      <th className="bg-white">
        {
            status? <h2>Confirmed</h2> : <button
            onClick={() => confirmHandler(_id)}
            className="btn btn-ghost btn-xs"
          >
            Not Confirm
          </button>
        }
      </th>
    </tr>
  );
};

export default Booking;
