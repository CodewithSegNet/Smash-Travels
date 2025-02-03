import React from "react";
import img from "../assets/image_fx_21.png";
import success from "../assets/success.png";
import customerSupport from "../assets/customerSupport.png";
import img3 from "../assets/image_fx_29.png";
import flexiblePricing from "../assets/flexiblePricing.png";
import img5 from "../assets/image_fx_31.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const read = [
  {
    img: success,
    title: "Proven track record of success.",
    description:
      "Our user-friendly platform makes booking flights quick and effortless. From selecting your route to finalizing your payment, it’s all done in a few clicks.",
  },
  {
    img: customerSupport,
    title: "24/7 customer support.",
    description:
      "At Smash Travels, we offer the most competitive rates for local flights within Nigeria, ensuring you get the best value for your money without compromising on quality.",
  },
  {
    img: flexiblePricing,
    title: "Affordable and flexible pricing.",
    description:
      "We partner with Nigeria's leading airlines, giving you access to a variety of flight options that fit your schedule and budget.",
  },
];

const WhychooseusAbout = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="max-w-[1289px] mx-auto my-[3rem] md:my-[4rem]"
    >
      <div className="mx-6">
      <div>
        <h2 className="text-center font-meutasRegular text-2xl lg:text-4xl text-regular font-bold mb-4 md:mb-8">
          Why Choose Us
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {read.map((item, index) => (
          <div key={index} className="">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-contain rounded-t-[10px]"
            />
            <div className="pt-2 px-2">
              <h3 className="font-semibold font-meutasRegular text-regular md:text-xl">
                {item.title}
              </h3>
              <p className="pt-2 leading-[1.5] font-meutasLight text-sm md:text-md text-regular">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </motion.div>
  );
};

export default WhychooseusAbout;
