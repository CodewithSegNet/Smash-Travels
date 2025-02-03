import React from "react";
import naira from "../assets/naira.svg";

const Money = ({ Amount, id }) => {
  return (
    <div
      id={id}
      className=" flex justify-center items-center xl:text-5xl lg:text-5xl sm:text-3xl text-2xl text-secondary font-bold font-meutasRegular"
    >
      <img src={naira} className="w-[25px] lg:w-[38px] h-[70px] md:h-[90px] md:pb-[8px] mr-3" />
      {Amount}
    </div>
  );
};

export default Money;
