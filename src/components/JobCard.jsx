import React from "react";

const JobCard = ({ image, index, title, description }) => {
  return (
    <div key={index} className="p-6">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-contain rounded-t-[10px]"
      />
      <div className="pt-2 px-2">
        <h3 className="font-semibold font-meutasBold text-regular md:text-xl">
          {title}
        </h3>
        <p className="pt-2 leading-[1.5] font-meutasLight text-sm md:text-md text-regular">
          {description}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
