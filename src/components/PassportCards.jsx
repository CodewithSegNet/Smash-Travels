import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/passportyear.webp";

import logo2 from "../assets/image8.png"
import { fadeIn } from '../variants'
import { motion } from 'framer-motion';






const SlideCard = ({ image1, title, firstlocation, price, pages }) => {
  return (
    <div className="relative w-full border rounded-[10px] mt-10 flex flex-col md:flex-row p-4 py-6 gap-4 bg-white shadow-sm">
      {/* Image Section */}
      <div className="flex max-h-[224px] md:w-[35%]">
        <img src={image1} alt="Image 1" className="rounded-[10px] object-cover w-full" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 md:w-[65%]">
        {/* Title and Icon */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-light">{title}</h3>
          <p className="rounded-full px-[24px] text-[12px] w-[30%] font-medium text-center flex items-center justify-center text-tertiary bg-regular2 h-[33px]" >Express</p>
        </div>

        {/* Location and Fare */}
        <div className="flex text-regular font-bold">
          <span>Processing Time:</span>
        <p className="text-regular font-bold text-md md:text-lg">{firstlocation}</p>
        </div>

        {/* Price and Slash */}
        <div className="flex flex-col w-[180px]">
          <div>
          <span>Price</span>
          <p className="text-regular text-sm font-bold md:text-lg">{price}</p>
          </div>
      
<div>
<span>Pages:</span>
<p className="text-sm line-through">{pages}</p>
</div>
       
        </div>

        {/* Button */}
        <div>
          <button className="py-2 px-5 bg-primary text-white rounded-full text-[11px] hover:bg-opacity-80">
            <a href="#">Apply Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

// Slider Component
function Responsive() {
  const slides1 = [
    {
      image1: image,
      title: "Round Trip",
      firstlocation: "Abuja",
      secondlocation: "Lagos",
      fare: "Flight Fare",
      price: "₦630,000",
      slach: "₦700,000",
    },
    
  ];

  const slides2 = [
    {
      image1: image,
      image2: logo2,
      title: "Round Trip",
      firstlocation: "Abuja",
      secondlocation: "Lagos",
      fare: "Flight Fare",
      price: "₦630,000",
      slach: "₦700,000",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
    ],
  };

  return (
    <>
<div>
  <h1>Select Your Desired Package</h1>
</div>

     <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true}}

    className=" relative font-meutasRegular slider-container p-8 md:p-12 bg-gray-100 mb-[4rem] md:mb-[5rem] mt-[4rem]">
      <Slider {...settings}>
        {slides1.map((slide, index) => (
          <div key={index} className="px-3">
            <SlideCard
              image1={slide.image1}
              image2={slide.image2}
              title={slide.title}
              firstlocation={slide.firstlocation}
              secondlocation={slide.secondlocation}
              fare={slide.fare}
              price={slide.price}
              slach={slide.slach}
            />
          </div>
        ))}
      </Slider>

      {/* Second Slider */}
      <div className="hidden md:block">
      <Slider {...settings2}>
        {slides2.map((slide, index) => (
          <div key={index} className="px-3">
            <SlideCard
              image1={slide.image1}
              image2={slide.image2}
              title={slide.title}
              firstlocation={slide.firstlocation}
              secondlocation={slide.secondlocation}
              fare={slide.fare}
              price={slide.price}
              slach={slide.slach}
            />
          </div>
        ))}
      </Slider>
      </div>
    </motion.div>
    </>
   
  );
}

export default Responsive;
