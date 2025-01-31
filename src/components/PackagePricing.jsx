import React, { useEffect, useState } from "react";
import notice from "../assets/notice.png";
import Money from "./Money";
import { Link, useLocation } from "react-router-dom";

const PackagePricing = ({ country }) => {
  const packages = [
    {
      title: "Main Applicant ",
      amount: "8 Million",
    },
    {
      title: "Spouse with job ",
      amount: "2.5 Million",
    },
    {
      title: "Spouse without job",
      amount: "1.5 Million",
    },
    {
      title: "Child",
      amount: "1 Million",
    },
  ];

  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState(hash || "#singlepackage");

  useEffect(() => {
    if (!hash) {
      setActiveTab("#singlepackage");
    }
  }, [hash]);

  return (
    <div className="xl:mt-[200px] md:mt-[160px] mt-[60px] mb-[60px]">
      <div className="flex flex-col justify-center items-center mb-[40px] ">
        <p className=" xl:text-[40px] md:text-[24px] font-meutasRegular md:font-meutasRegular pt-4 pb-6 md:pt-6 text-[15px] text-regular md:pb-4">
          {country} Package Pricing
        </p>
        <p className="xl:text-[24px] md:text-[20px] text-[12px] font-meutasRegular font-light text-newgray">
          Select Preferred Package
        </p>
      </div>
      <div className="px-1 lg:mx-6 mx-4 h-[50px] my-4 shadow-[-1px_0px_7px_1px_rgba(0,_0,_0,_0.1)] rounded-full lg:text-[12px] text-[8px] flex flex-nowrap justify-center items-center text-newgray gap-x-2">
        <img src={notice} alt="" />
        <span className=" font-meutasBold whitespace-nowrap">Please Note:</span>
        <span className="">
          This package covers all expenses ranging from your processing, visa,
          and accommodation. This package does not in any way cover the expense
          of your flight tickets to your desired destination.
        </span>
      </div>
      <div className="flex justify-center gap-1 items-center text-xl font-meutasRegular text-newgray mb-[20px] mt-[60px]">
        <div>
          <Link
            to="#singlepackage"
            className={`flex items-center justify-center transition-all duration-300 xl:py-5 xl:px-12 lg:py-5 lg:px-12 md:py-5 md:px-12 px-4 py-2 rounded-full xl:text-[24px] text-[12px] lg:text-[24px]  ${
              activeTab === "#singlepackage"
                ? "bg-opacity-30 bg-primary text-primary"
                : "bg-white"
            }  `}
            onClick={() => setActiveTab("#singlepackage")}
          >
            Single Package
          </Link>
        </div>
        <div>
          <Link
            to="#multiplepackage"
            className={`flex items-center justify-center transition-all duration-300 xl:py-5 xl:px-12 lg:py-5 lg:px-12 md:py-5 md:px-12 px-4 py-2  rounded-full xl:text-[24px] text-[12px] lg:text-[24px]  ${
              activeTab === "#multiplepackage"
                ? "bg-opacity-30 bg-primary text-primary"
                : "bg-white"
            }  `}
            onClick={() => setActiveTab("#multiplepackage")}
          >
            Family Package
          </Link>
        </div>
      </div>
      {activeTab === "#singlepackage" ? (
        <div className="mt-[100px]">
          <Money id="singlePackage" Amount="8.5 Million" />
        </div>
      ) : (
        <div className="shadow-[-1px_0px_7px_1px_rgba(0,_0,_0,_0.1)] lg:mx-[64px] sm:mx-[20px] xs:mx-[20px] rounded-[24px] grid xl:grid-cols-2 grid-cols-1 py-[70px] lg:px-[120px] sm:px-[20px] gap-16 ">
          {packages.map((item) => (
            <div key={item.title} className=" grid place-items-center ">
              <div className="text-lg text-[24px] font-meutasRegular text-newgray mb-[24px]">
                {item.title}
              </div>
              <Money id="multiplepackage" Amount={item.amount} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PackagePricing;
