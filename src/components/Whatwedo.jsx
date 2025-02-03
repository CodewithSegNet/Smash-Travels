import React from "react";
import img from "../assets/image_fx_21.png";
import workVisa from "../assets/workVisa.png";
import flightBooking from "../assets/flightBooking.png";
import img3 from "../assets/image_fx_29.png";
import passportProcessing from "../assets/passportProcessing.png";
import img5 from "../assets/image_fx_31.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const read = [
  {
    img: workVisa,
    title: "Work Visas",
    description:
      "Simplify your journey abroad with our seamless work visa services. From document prep to visa issuance, we handle everything to help you secure your dream job internationally.",
  },
  {
    img: flightBooking,
    title: "Flight Booking ",
    description:
      "Book domestic flights effortlessly with Smash Travels. Enjoy affordable, flexible options from top Nigerian airlines for business or leisure.",
  },
  {
    img: passportProcessing,
    title: "Passport Processing",
    description:
      "Get your passport quickly and easily. Whether it’s your first application or a renewal, we guide you every step of the way.",
  },
];

const Whatwedo = () => {
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
        <h2 className="text-center text-regular text-2xl font-meutasRegular lg:text-4xl font-bold mb-4 md:mb-8">
          What Do We Do
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

export default Whatwedo;
