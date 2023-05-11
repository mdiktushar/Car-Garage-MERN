import React from "react";
import img1 from "./../../../../assets/images/banner/1.jpg";
import img2 from "./../../../../assets/images/banner/2.jpg";
import img3 from "./../../../../assets/images/banner/3.jpg";
import img4 from "./../../../../assets/images/banner/4.jpg";
import img5 from "./../../../../assets/images/banner/5.jpg";
import img6 from "./../../../../assets/images/banner/6.jpg";

const HomeBanner = () => {
  const imageText = (
    <div
      className={`absolute h-full left-0 top-0 bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]`}
    >
      <div className="text-white space-y-7 w-1/3 pl-28 v">
        <h2 className="text-6xl font-semibold">
          Affordable Price For Car Servicing
        </h2>
        <p className="">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>

        <div className="flex gap-5">
          <button className="btn btn-outline text-white hover:bg-[#ff3811] hover:border-[#ff3811]">
            Discover More
          </button>
          <button className="btn btn-outline text-white hover:bg-[#ff3811] hover:border-[#ff3811]">
            Latest Projects
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        {imageText}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide6"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        {imageText}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        {imageText}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        {imageText}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
        {imageText}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
        {imageText}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide5"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-outline text-white border-white btn-circle hover:bg-[#FF3811] hover:border-none"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
