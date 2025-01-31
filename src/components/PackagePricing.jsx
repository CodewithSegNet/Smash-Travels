import React from "react";
import notice from "../assets/notice.png";
import Money from "./Money";
import { Link } from "react-router-dom";

const PackagePricing = ({ country }) => {
  return (
    <div className="my-[80px]">
      <div className="flex flex-col justify-center items-center lg:mt-[200px] mb-[40px] ">
        <p className="text-4xl font-meutasRegular font-bold mb-[20px]">
          {country} Package Pricing
        </p>
        <p className="text-xl font-meutasRegular font-light text-newgray">
          Select Preferred Package
        </p>
      </div>
      <div className="px-1 mx-6 h-[50px] my-4 shadow-[-1px_0px_7px_1px_rgba(0,_0,_0,_0.1)] rounded-full text-[12px] flex flex-nowrap justify-center items-center text-newgray gap-x-2">
        <img src={notice} alt="" />
        <span className="text-secondary font-meutasBold whitespace-nowrap">
          Please Note:
        </span>
        <span className="">
          This package covers all expenses ranging from your processing, visa,
          and accommodation. This package does not in any way cover the expense
          of your flight tickets to your desired destination.
        </span>
      </div>
      <div className="flex justify-center gap-6 items-center text-xl font-meutasRegular text-newgray mb-[80px] mt-[60px]">
        <div>
          <Link
            to="/"
            className="flex items-center justify-center bg-opacity-100 hover:bg-opacity-50  bg-secondary transition-all duration-300 py-5 px-12 rounded-full"
          >
            Single Package
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="flex items-center justify-center bg-opacity-100 hover:bg-opacity-50  bg-secondary transition-all duration-300 py-5 px-12 rounded-full"
          >
            Family Package
          </Link>
        </div>
      </div>

      <Money Amount="8.5 Million" />
    </div>
  );
};

export default PackagePricing;
