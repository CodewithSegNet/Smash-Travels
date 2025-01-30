import React from "react";
import naira from "../assets/naira.svg";
import Money from "./Money";
import Card from "../components/Card";

const PackagePricing = ({ country }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-[24px] lg:mt-[200px] ">
        <p className="text-4xl font-meutasRegular font-bold mb-3">
          {country} Package Pricing
        </p>
        <p className="text-xl font-meutasRegular font-light text-regular">
          Below Are The Jobs Available In {country}
        </p>
      </div>
      <div className="font-meutasRegular  p-8 md:p-12 bg-gray-100 mb-[4rem] md:mb-[5rem] mt-[4rem]">
        gii
      </div>
      <Money Amount="8.5 Million" />
    </>
  );
};

export default PackagePricing;
