import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/passportyear.webp";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const SlideCard = ({ image1, title, firstlocation, price, pages, type }) => {
  return (
    <div className="relative w-full border rounded-[10px] mt-2 flex flex-col md:flex-row p-4 py-6 gap-4 bg-white shadow-sm">
      {/* Image Section */}
      <div className="relative flex max-h-[224px] md:w-[35%] rounded-[10px] overflow-hidden">
        <img
          src={image1}
          alt="Image 1"
          className="rounded-[10px] object-cover w-full h-full"
        />
        
        {/* Overlay covering only the image */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-sm md:text-md font-meutasLight md:font-bold">{title}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 md:w-[65%]">
        <div className="flex items-center justify-between">
          <h3 className="text-sm md:text-md font-semibold font-meutasRegular">{title}</h3>
          <p
            className={`rounded-full text-[10px] w-[30%] md:w-[24%] font-medium text-center flex items-center justify-center h-[30px] ${
              type === "Express" ? "bg-regular2 text-tertiary" : "bg-regular3 text-primary"
            }`}
          >
            {type}
          </p>
        </div>

        <div className="flex items-center text-regular">
          <span className="text-sm">Processing Time:</span>
          <p className="text-regular font-bold pl-2 text-sm md:text-md ">
            {firstlocation}
          </p>
        </div>

        <div className="flex flex-col gap-3 w-[180px]">
          <div className="flex items-center text-regular">
            <span className="text-sm">Pages:</span>
            <p className="text-sm md:text-md pl-2 font-bold">{pages}</p>
          </div>
          <div className="flex items-center text-regular">
            <span className="text-sm">Price:</span>
            <p className="font-bold pl-2 text-sm md:text-md">{price}</p>
          </div>
        </div>

        <div>
          <button className="py-2 px-5 bg-primary text-white rounded-full text-[11px] hover:bg-opacity-80">
            <a href="#">Apply Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

function Responsive() {
  const [tripType, setTripType] = useState("New Passport");

  const slides1 = [
    {
      image1: image,
      title: "10 Years Passport",
      firstlocation: "48 Hours",
      price: "₦300,000",
      pages: "64",
      type: "Express",
    },
    {
      image1: image,
      title: "5 Years Passport",
      firstlocation: "48 Hours",
      price: "₦150,000",
      pages: "32",
      type: "Express",
    },
   
    {
      image1: image,
      title: "10 Years Passport",
      firstlocation: "2 Weeks",
      price: "₦200,000",
      pages: "64",
      type: "Regular",
    },
    {
      image1: image,
      title: "5 Years Passport",
      firstlocation: "2 Weeks",
      price: "₦100,000",
      pages: "32",
      type: "Regular",
    },


  ];

  const slides2 = [
    {
      image1: image,
      title: "10 Years Passport Renewal",
      firstlocation: "48 Hours",
      price: "₦300,000",
      pages: "64",
      type: "Express",
    },
    {
      image1: image,
      title: "5 Years Passport Renewal",
      firstlocation: "48 Hours",
      price: "₦150,000",
      pages: "32",
      type: "Express",
    },

    {
      image1: image,
      title: "10 Years Passport Renewal",
      firstlocation: "2",
      price: "₦200,000",
      pages: "64",
      type: "Regular",
    },
    {
      image1: image,
      title: "10 Years Passport Renewal",
      firstlocation: "2 Weeks",
      price: "₦100,000",
      pages: "34",
      type: "Regular",
    },
 
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: false } },
    ],
  };

  
  const settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } },
    ],
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  return (
    <div className="h-full relative mb-[4rem] md:mb-[5rem] mt-[7rem]">
      <div className="text-center text-regular text-[18px] lg:text-4xl mb-[2rem]">
        <h1 className="font-meutasRegular font-semibold">Select Your Desired Package</h1>
      </div>

      {/* Radio Buttons */}
      <div className="flex justify-center text-sm md:text-md font-meutasRegular font-medium text-regular gap-6">
        {["New Passport", "Passport Renewal"].map((type) => (
          <label key={type} className="flex items-center gap-2 font-meutasRegular text-regular cursor-pointer">
            <input
              type="radio"
              name="tripType"
              value={type}
              checked={tripType === type}
              onChange={() => handleTripTypeChange(type)}
              className="w-5 h-5 text-primary"
            />
            {type}
          </label>
        ))}
      </div>

      {/* Sliders */}
      <motion.div
  variants={fadeIn("up", 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: true }}
  className="relative font-meutasRegular slider-container p-8 md:p-12 bg-gray-100"
>
  {/* First Slider - Always Visible */}
<div className="mt-8">
  <Slider {...settings}>
    {(tripType === "New Passport" ? slides1.slice(0, 2) : slides2.slice(0, 2)).map((slide, index) => (
      <div key={index} className="px-3">
        <SlideCard
          image1={slide.image1}
          title={slide.title}
          firstlocation={slide.firstlocation}
          price={slide.price}
          pages={slide.pages}
          type={slide.type}
        />
      </div>
    ))}
  </Slider>
</div>

{/* Second Slider - Only Visible on Medium Screens and Above */}
{(tripType === "New Passport" || tripType === "Passport Renewal") && (
  <div className="mt-8">
    <Slider {...settings2}>
      {(tripType === "New Passport" ? slides1.slice(2, 4) : slides2.slice(2, 4)).map((slide, index) => (
        <div key={index} className="px-3">
          <SlideCard
            image1={slide.image1}
            title={slide.title}
            firstlocation={slide.firstlocation}
            price={slide.price}
            pages={slide.pages}
            type={slide.type}
          />
        </div>
      ))}
    </Slider>
  </div>
)}

</motion.div>

    </div>
  );
}

export default Responsive;
