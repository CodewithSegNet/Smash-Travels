import React from "react";

const Mission = ({ title, subtitle }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
    <div className=" mt-[40px] mx-6">
      <h3 className="text-regular text-center text-2xl font-meutasRegular lg:text-4xl pt-4 pb-6 md:pt-6 font-bold md:pb-10 flex justify-center">
        Our {title}
      </h3>
      <p className="font-meutasRegular text-regular text-justify text-sm/7 md:text-md ">{subtitle}</p>
    </div>

    </div>

  );
};

export default Mission;
