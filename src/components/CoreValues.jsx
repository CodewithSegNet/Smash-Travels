import React from "react";
import transparency from "../assets/transparency.svg";
import satisfaction from "../assets/satisfaction.svg";
import innovation from "../assets/innovation.svg";
import integrity from "../assets/integrity.svg";

const CoreValues = () => {
  const values = [
    { id: 1, icons: satisfaction, title: "customer satisfaction" },
    { id: 2, icons: integrity, title: "integrity" },
    { id: 3, icons: innovation, title: "innovation" },
    { id: 4, icons: transparency, title: "transparency" },
  ];

  return (
    <div className="max-w-screen-2xl pt-[6rem] mx-auto md:pt-[6rem] mb-[30px]">
      <h3 className="font-meutasRegular pt-4 pb-6 text-regular md:pt-6 font-bold text-center text-2xl lg:text-4xl md:pb-4 flex justify-center mb-6">
        Our Core Values
      </h3>
      <div className="flex flex-col md:flex-row justify-center text-regular items-center gap-12">
        {values.map((value) => {
          return (
            <div
              key={value.id}
              className="flex flex-col justify-center items-center"
            >
              <img
                src={value.icons}
                alt={value.title}
                className="h-[80px] w-[80px] mb-2"
              />
              <div className="font-meutasRegular text-regular lg:text-xl">{value.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;
