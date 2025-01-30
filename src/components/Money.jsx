import React from "react";
import naira from "../assets/naira.svg";

const Money = ({ Amount }) => {
  return (
    <div className=" flex justify-center items-center text-6xl text-secondary font-bold font-meutasRegular">
      <img src={naira} className="w-[38px] h-[90px mr-3" />
      {Amount}
    </div>
  );
};

export default Money;
