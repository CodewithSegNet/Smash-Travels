import React from "react";
import naira from "../assets/naira.svg";

const Money = ({ Amount, id }) => {
  return (
    <div
      id={id}
      className=" flex justify-center items-center xl:text-6xl lg:text-6xl sm:text-6xl text-2xl text-secondary font-bold font-meutasRegular"
    >
      <img src={naira} className="w-[38px] h-[90px mr-3" />
      {Amount}
    </div>
  );
};

export default Money;
