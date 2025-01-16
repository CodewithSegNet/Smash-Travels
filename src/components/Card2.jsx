import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/image_.png";
import img1 from "../assets/image_fx_.png"
import image1 from "../assets/image6.png";
import logo1 from "../assets/image7.png"
import img2 from "../assets/image_fx_new.png";

import logo2 from "../assets/image8.png"




const SlideCard = ({ image1, image2, title, location, fare, price, slach }) => {
  return (
    <div className="w-full border rounded-lg mt-10 flex p-4 py-6 gap-4 bg-white shadow-sm">
      {/* Image Section */}
      <div className="flex max-h-[224px] w-[35%]">
        <img src={image1} alt="Image 1" className="rounded-lg object-cover w-full" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 w-[65%]">
        {/* Title and Icon */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-light">{title}</h3>
          <img src={image2} alt="Image 2" className="rounded-md object-contain w-[30%]" />
        </div>

        {/* Location and Fare */}
        <p className="text-regular font-bold text-lg">{location}</p>
        <p className="text-regular font-medium">{fare}</p>

        {/* Price and Slash */}
        <div className="flex items-center justify-between w-[160px]">
          <p className="text-regular font-bold text-lg">{price}</p>
          <p className="text-sm line-through">{slach}</p>
        </div>

        {/* Button */}
        <div>
          <button className="py-2 px-5 bg-primary text-white rounded-full text-[11px] hover:bg-opacity-80">
            <a href="#">Book Now</a>
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
      image2: image1,
      title: "Round Trip",
      location: "Abuja -> Lagos",
      fare: "Flight Fare",
      price: "₦630,000",
      slach: "₦700,000",
    },
    {
      image1: img1,
      image2: logo1,
      title: "Round Trip",
      location: "Lagos -> Abuja",
      fare: "Flight Fare",
      price: "₦630,000",
      slach: "₦700,000",
    },
    {
      image1: img2,
      image2: logo2,
      title: "Round Trip",
      location: "Lagos -> Abuja",
      fare: "Flight Fare",
      price: "₦630,000",
      slach: "₦700,000",
    },
  ];

  const slides2 = [
    {
      image1: image,
      image2: image1,
      title: "Round Trip",
      location: "Abuja -> Lagos",
      fare: "Flight Fare",
      price: "₦630,000",
      slach: "₦700,000",
    },
    {
      image1: image,
      image2: image1,
      title: "Round Trip",
      location: "Abuja -> Lagos",
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
    <div className="slider-container p-10 bg-gray-100 mb-[6rem] mt-[5rem]">
      <h1 className="text-3xl font-bold">Best-Selling Flight Offers</h1>
      <Slider {...settings}>
        {slides1.map((slide, index) => (
          <div key={index} className="px-3">
            <SlideCard
              image1={slide.image1}
              image2={slide.image2}
              title={slide.title}
              location={slide.location}
              fare={slide.fare}
              price={slide.price}
              slach={slide.slach}
            />
          </div>
        ))}
      </Slider>

      {/* Second Slider */}
      <Slider {...settings2}>
        {slides2.map((slide, index) => (
          <div key={index} className="px-3">
            <SlideCard
              image1={slide.image1}
              image2={slide.image2}
              title={slide.title}
              location={slide.location}
              fare={slide.fare}
              price={slide.price}
              slach={slide.slach}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
