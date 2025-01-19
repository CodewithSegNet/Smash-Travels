

import React from "react";
import Slider from "react-slick";
import img from "../assets/image_fx_21.png";
import img1 from "../assets/image_fx_24.png";
import img2 from "../assets/image_fx_27.png";
import img3 from "../assets/image_fx_29.png";
import img4 from "../assets/image_fx_30.png";
import img5 from "../assets/image_fx_31.png";
import nigeria from "../assets/Vector.svg";

const testimonyprofile = [
  {
    img: img1,
    name: "– Tolu Adebayo, Abuja",
    description: "Smash Travels made booking my flight so easy! The website is user-friendly, and I got my ticket instantly after payment. I’ll definitely use their service again.",
  },
  {
    img: img2,
    name: "– Chinedu Okafor, Lagos",
    description: "I was amazed by the competitive rates Smash Travels offered. I saved a lot compared to other platforms, and the process was smooth from start to finish.",
  },
  {
    img: img4,
    name: "– Fatima Suleiman, Kano",
    description: "Their 24/7 support team was a lifesaver when I had to reschedule my flight. They handled everything professionally and quickly. Highly recommended!",
  },
  {
    img: img5,
    name: "– Grace Ekene, Port Harcourt",
    description: "Booking a local flight has never been this easy! Smash Travels’ platform is straightforward, and I loved the instant ticket confirmation.",
  },
  {
    img: img3,
    name: "– Ahmed Bello, Kaduna",
    description: "I was initially worried about online bookings, but Smash Travels made it secure and stress-free. I’ll always recommend them for flights within Nigeria.",
  },
  {
    img: img,
    name: "– Ada Kalu, Enugu",
    description: "I appreciate the real-time updates on my flight status. Smash Travels kept me informed, and everything went without a hitch. Great service!",
  },
  {
    img: img,
    name: "– Dayo Thomas, Ibadan",
    description: "From finding the perfect flight to making a secure payment, Smash Travels exceeded my expectations. It’s the best booking platform I’ve used.",
  },
  {
    img: img,
    name: "– Efe James, Benin City",
    description: "The discounts and promos are unbeatable. I’ll continue booking my flights through Smash Travels – it’s a win-win!",
  },
  {
    img: img,
    name: "– Musa Yusuf, Jos",
    description: "I’ve used Smash Travels multiple times, and they never disappoint. Everything is clear, quick, and trustworthy.",
  },
];

function Testimonies() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 7000,
     cssEase: "linear",
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="my-16">
      <h1 className="text-center text-3xl lg:text-5xl font-bold mb-[4rem]">Testimonials</h1>
      <Slider {...settings} className=" px-4">
      {testimonyprofile.map((item, index) => (
          <div key={index} className="space-x-4">
            <div className="relative bg-regular p-6 items-center max-w-[400px] rounded-xl shadow-md min-h-[370px] mx-[10px]">
              {/* Container for image and vector */}
              <div className="relative justify-center">
                {/* Main Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-full relative border-4 border-primary object-cover z-10"
                />
                {/* Vector SVG */}
                <img
                  src={nigeria}
                  alt="Vector"
                  className="absolute z-40 -bottom-5 top-[53px] left-[70px] left-1/2 transform bg-white -translate-x-1/2 w-6 h-6 border-4 border-primary rounded-full"
                  />
              </div>
              {/* Text Content */}
              <div className="mt-4 flex flex-col w-full justify-between min-h-[370px]">
                <p className="pt-2 leading-relaxed text-lg text-white">
                  {item.description}
                </p>

                <h3 className="text-lg text-white">{item.name}</h3>

              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonies;