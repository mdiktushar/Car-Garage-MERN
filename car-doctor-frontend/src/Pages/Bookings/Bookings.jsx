import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Booking from "./Booking/Booking";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `${import.meta.env.VITE_ULR}bookings?email=${user.email}`;

  const deleteHandler = (id) => {
    const proceed = confirm("Are your sure you want ot delete?");
    if (proceed) {
      fetch(`${import.meta.env.VITE_ULR}bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const confirmHandler = (id) => {
    fetch(`${import.meta.env.VITE_ULR}bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: `true` }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [deleteHandler, confirmHandler]);

  return (
    <div>
      <div className="overflow-x-auto w-full bg-white">
        <table className="table w-full bg-white">
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <Booking
                key={booking._id}
                booking={booking}
                deleteHandler={deleteHandler}
                confirmHandler={confirmHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
