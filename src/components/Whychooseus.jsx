import React from "react";
import img from "../assets/image_fx_21.png"
import img1 from "../assets/image_fx_24.png"
import img2 from "../assets/image_fx_27.png"
import img3 from "../assets/image_fx_29.png"
import img4 from "../assets/image_fx_30.png"
import img5 from "../assets/image_fx_31.png"


const read = [
  {
    img: img1,
    title: "Best Price Guarantee", 
    description: "At Smash Travels, we offer the most competitive rates for local flights within Nigeria, ensuring you get the best value for your money without compromising on quality."
  },
  {
    img: img2,
    title: "Seamless Booking Process",
    description: "Our user-friendly platform makes booking flights quick and effortless. From selecting your route to finalizing your payment, it’s all done in a few clicks."
  },
  {
    img: img4,
    title: "Wide Range of Airlines",
    description: "We partner with Nigeria's leading airlines, giving you access to a variety of flight options that fit your schedule and budget."
  },
  {
    img: img5,
    title: "Secure Payment Options", 
    description: "Your security is our priority. With multiple secure payment gateways, you can book your flights with peace of mind."
  },
  {
    img: img3,
    title: "Instant Ticket Confirmation",
    description: "No delays, no hassle. Receive your ticket confirmation immediately after booking, so you can plan your journey with confidence."
  },
  {
    img: img2,
    title: "Exclusive Deals and Discounts",
    description: "Save more on your flights with our regular discounts, seasonal offers, and promo codes tailored to meet your travel needs."
  }
];

const Whychooseus = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-[6rem]">
      <div>
        <h2 className="text-center text-3xl lg:text-5xl text-regular font-bold mb-8">Why Choose Us</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {read.map((item, index) => (
          <div
            key={index}
            className="p-6"
          >
            <img src={item.img} alt={item.title} className="w-full h-52 object-contain rounded-t-lg" />
            <div className="pt-4 px-2">
              <h3 className="font-medium text-regular text-xl">{item.title}</h3>
              <p className="pt-2 leading-[1.5] text-regular">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychooseus;
