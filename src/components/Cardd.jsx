import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";


const Cardd = ({
  buttonText,
  title,
  description,
  image,
  fullDescription,
  sector,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  
  return (
    <div className="flex flex-col w-[387px]">
      <div className="relative">
        <span className="flex justify-center items-center text-[16px] font-meutasRegular bg-black bg-opacity-50 py-2 px-3 absolute top-4 left-4 rounded-full z-20 text-white">
          {sector}
        </span>
        <img src={image} className="h-52 w-[387px] rounded-t-[10px] mb-2" />
      </div>

      <div className="pt-2 mb-3">
        <div className="flex items-center">
        <h3 className="font-semibold font-meutasRegular text-regular md:text-xl">
          {title}
          
        </h3>
         <BiChevronDown
              aria-hidden="true"
              className="ml-2 text-[25px] mb-[3px] text-primary"
            />
        </div>

        <p className="pt-2 leading-[1.5] font-meutasLight text-sm md:text-md text-regular">
          {isExpanded ? fullDescription : description}
          <span
            className="pl-1 leading-[1.5] font-meutasLight text-sm md:text-md text-secondary cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? " Read Less" : " Read More"}
          </span>
        </p>
      </div>
      <div>
        <Link className="flex items-center border-[3px] font-meutasRegular md:border-[3px] lg:border-[3px] justify-center text-md bg-opacity-100 hover:bg-opacity-50 border-white bg-secondary transition-all duration-30 text-white rounded-full hover:text-white text-[12px]  w-[129px] h-[48px]">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Cardd;
