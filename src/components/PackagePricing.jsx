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
    <>
    <section className="mx-7">
    <div className="max-w-screen-2xl mx-auto xl:mt-[150px] md:mt-[130px] mt-[120px] mb-[25px] lg:mb-[40px]">
      <div className="flex flex-col justify-center items-center mb-[30px] ">
        <p className="text-center text-regular text-2xl font-meutasRegular lg:text-4xl font-bold mb-[.8rem] md:mb-[1rem]">
          {country} Package Pricing
        </p>
        <p className="xl:text-[24px] md:text-[20px] text-[12px] font-meutasRegular font-light text-newgray">
          Select Preferred Package
        </p>
      </div>
      <div className="px-8 md:px-1 mx-auto lg:mx-6 w-[100%] h-[150px] md:h-[50px] my-2 shadow-md rounded-full lg:text-[12px] text-[8px] flex flex-col md:flex-row flex-nowrap justify-center items-center md:items-center text-newgray gap-x-2">
        <img src={notice} alt="" />
        <span className=" font-meutasBold text-primary text-[13px] md:pt-[1px] whitespace-nowrap">Please Note:</span>
        <span className="text-[11px] md:text-[12px]">
          This package covers all expenses ranging from your processing, visa,
          and accommodation. This package does not in any way cover the expense
          of your flight tickets to your desired destination.
        </span>
      </div>
      <div className="flex justify-center gap-1 items-center text-xl font-meutasRegular text-newgray mb-[-30px] md:mb-[-70px] lg:mb-[-40px] mt-[30px] md:mt-[30px]">
        <div>
          <Link
            to="#singlepackage"
            className={`flex items-center justify-center transition-all duration-300 xl:py-5 xl:px-12 lg:py-5 lg:px-12 md:py-4 md:px-12 px-4 py-2 rounded-full xl:text-[24px] text-[12px] md:text-[14px] lg:text-[24px]  ${
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
            className={`flex items-center justify-center transition-all duration-300 xl:py-5 xl:px-12 lg:py-5 lg:px-12 md:py-5 md:px-12 px-4 py-2 rounded-full xl:text-[24px] text-[12px] md:text-[14px] lg:text-[24px]  ${
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
        <div className="mt-[38px] md:mt-[100px]">
          <Money id="singlePackage" Amount="8.5 Million" />
        </div>
      ) : (
        <div className="shadow-md lg:mx-[64px] sm:mx-[20px] xs:mx-[20px] rounded-[24px] grid xl:grid-cols-2 grid-cols-1 mt-[5rem] md:mt-[6.5rem] py-[40px] md:py-[70px] lg:px-[120px] sm:px-[20px] gap-10">
          {packages.map((item) => (
            <div key={item.title} className=" grid place-items-center ">
              <div className="text-lg text-[24px] font-meutasRegular text-newgray mb-[14px]">
                {item.title}
              </div>
              <Money id="multiplepackage" Amount={item.amount} />
            </div>
          ))}
        </div>
      )}
    </div>
    </section>
    </>
 
  );
};

export default PackagePricing;
