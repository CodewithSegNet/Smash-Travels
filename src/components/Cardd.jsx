import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/image_fx_21.png";

const Cardd = ({ buttonText, title, description, image }) => {
  return (
    <div className="flex flex-col w-[387px] ">
      <img src={image} className="h-52 w-[387px] rounded-t-[10px] mb-2" />
      <div className="pt-2 px-2 mb-3">
        <h3 className="font-semibold font-meutasBold text-regular md:text-xl">
          {title}
        </h3>
        <p className="pt-2 leading-[1.5] font-meutasLight text-sm md:text-md text-regular">
          {description}
          <span className="pl-1 leading-[1.5] font-meutasLight text-sm md:text-md text-secondary cursor-pointer">
            Read More
          </span>
        </p>
      </div>
      <div>
        <Link className="flex items-center border-[3px] md:border-[3px] lg:border-[3px] justify-center text-md bg-opacity-100 hover:bg-opacity-50 border-white bg-secondary transition-all duration-30 text-white rounded-full hover:text-white text-[12px]  w-[129px] h-[48px]">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Cardd;
