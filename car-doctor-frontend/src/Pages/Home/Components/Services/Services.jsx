import React, { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [Services, setServices] = useState([]);

  useEffect(() => {
    fetch("./data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center mt-10">
      <p className="font-bold text-[#ff3811] ">Service</p>
      <h2 className="text-4xl font-semibold text-gray-800">Our Service Area</h2>
      <p className="py-6 text-gray-600">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br></br>
        Words which don't look even slightly believable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
        {Services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
