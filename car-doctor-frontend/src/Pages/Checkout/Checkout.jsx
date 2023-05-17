import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
//   console.log(service);
  const { _id, title, price, img } = service;

  const handleCheckout = async(event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const date = form.date.value;
    const email = form.email.value;

    const order = {
      customerName: name,
      email,
      date,
      service_id: _id,
      service: title,
      price,
      img,
      status: false,
    };

    // console.log(order);

    await fetch(`${import.meta.env.VITE_ULR}bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
            alert('Service book successfully')
        }
      });
  };
  return (
    <div className="text-center">
      <h2 className={`text-4xl font-semibold text-center mt-20 mb-20`}>Checkout: {title}</h2>
      <form onSubmit={handleCheckout} className="bg-white mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              defaultValue={price}
              disabled
              name="price"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
