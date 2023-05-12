import React from "react";
import person from "../../../../assets/images/about_us/person.jpg";
import parts from "../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200  bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative p-0">
          <img src={person} className="w-4/5 rounded-lg shadow-2xl " />
          <img
            src={parts}
            className="w-1/2 absolute right-4 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className="font-bold text-[#ff3811] ">About Us</p>
          <h2 className="text-4xl font-semibold text-gray-800">
            We are qualified & of experience in this field
          </h2>
          <p className="py-6 text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
            <br /> <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-outline text-black hover:bg-[#ff3811] hover:border-white hover:text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
