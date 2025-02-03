import React from "react";

const Mission = ({ title, subtitle }) => {
  return (
    <div className="mt-[60px] mx-[192px]">
      <h3 className="font-meutasRegular  pt-4 pb-6 md:pt-6 lg:text-[40px] md:text-[14px] md:pb-4 flex justify-center mb-6">
        Our {title}
      </h3>
      <p className="font-meutasRegular text-[16px]/10 ">{subtitle}</p>
    </div>
  );
};

export default Mission;
