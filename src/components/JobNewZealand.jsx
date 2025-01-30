import React, { useState } from "react";
import img from "../assets/image_fx_21.png";
import img1 from "../assets/image_fx_24.png";
import img2 from "../assets/image_fx_27.png";
import img3 from "../assets/image_fx_29.png";
import img4 from "../assets/image_fx_30.png";
import img5 from "../assets/image_fx_31.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import Money from "./Money";
import Cardd from "./Cardd";

const read = [
  {
    img: img1,
    title: "Bartender",
    description:
      "In the hospitality sector in Canada, you'll play a vital role in creating exceptional guest experiences. Responsibilities may...",
    fulldescription:
      "In the hospitality sector in Canada, you'll play a vital role in creating exceptional guest experiences. Responsibilities may include customer service, front desk operations, housekeeping, food and beverage service, and ensuring a welcoming and comfortable environment for guests. This role requires excellent communication skills, attention to detail, and a passion for delivering top-notch service.",
  },
  {
    img: img2,
    title: "Warehouse Workers",
    description:
      "In the logistics sector in Canada, you'll oversee the efficient transportation, storage, and distribution of goods...",
    fulldescription:
      "In the logistics sector in canada, you'll oversee the efficient transportation, storage, and distribution of goods. Responsibilities may include inventory management, supply chain coordination, and ensuring timely delivery of goods. This role requires organizational skills, attention to detail, and the ability to work in fast-paced environments.",
  },
  {
    img: img4,
    title: "Carpenters",
    description:
      "Working in Canada's construction sector involves building, repairing, and maintaining infrastructure. Responsibilities may include...",
    fulldescription:
      "Working in Canada's construction sector involves building, repairing, and maintaining infrastructure. Responsibilities may include operating machinery, interpreting blueprints, and ensuring safety standards on-site. This role is ideal for individuals with physical stamina, teamwork skills, and a commitment to quality workmanship.",
  },
  {
    img: img5,
    title: "Mechanics",
    description:
      "The technical sector in Canada offers roles requiring specialized skills in fields such as IT, mechanics, or electronics...",
    fulldescription:
      "The technical sector in Canada offers roles requiring specialized skills in fields such as IT, mechanics, or electronics. Responsibilities may include troubleshooting, system maintenance, or implementing technical solutions. Success in this field demands analytical thinking, problem-solving abilities, and technical expertise.",
  },
  {
    img: img3,
    title: "Electrical Engineers",
    description:
      "In the engineering sector in Canada, you'll contribute to designing, developing, and implementing innovative solutions...",
    fulldescription:
      "In the engineering sector in Canada, you'll contribute to designing, developing, and implementing innovative solutions in various industries. Roles may involve creating blueprints, conducting research, and overseeing project execution. Strong technical knowledge, creativity, and teamwork are essential in this field.",
  },
  {
    img: img2,
    title: "Room Attenders",
    description:
      "Housekeeping roles in Canada focus on maintaining clean, organized, and hygienic spaces in residential, commercial, or...",
    fulldescription:
      "Housekeeping roles in Canada focus on maintaining clean, organized, and hygienic spaces in residential, commercial, or hospitality settings. Responsibilities may include cleaning, laundry services, and ensuring a welcoming environment. Attention to detail, time management, and reliability are crucial for this role.",
  },
  {
    img: img2,
    title: "Customer Service Representatives",
    description:
      "As an NDT Officer in Canada, your primary responsibilities will involve providing excellent customer service in the field of...",
    fulldescription:
      "As an NDT Officer in Canada, you'll inspect materials, components, or systems for flaws without causing damage. Using advanced techniques like ultrasound, radiography, or magnetic particle testing, you’ll ensure safety and quality standards are met. This role requires precision, technical knowledge, and adherence to safety protocols.",
  },
];

const JobNewZealand = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleText = (index) => {
    setExpandedIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className=""
    >
      <div className="flex flex-col justify-center items-center mb-[60px]">
        <p className="text-4xl font-meutasRegular font-bold mb-[20px]">
          Jobs Available
        </p>
        <p className="text-xl font-light text-newgray font-meutasRegular ">
          Below Are The Jobs Available In New Zealand
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {/* {read.map((item, index) => (
          <div key={index} className="p-6">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-contain rounded-t-[10px]"
            />
            <div className="pt-2 px-2">
              <h3 className="font-semibold font-meutasBold text-regular md:text-xl">
                {item.title}
              </h3>
              <p className="pt-2 leading-[1.5] font-meutasLight text-sm md:text-md text-regular">
                {expandedIndexes.includes(index)
                  ? item.fulldescription
                  : item.description}

                <span
                  onClick={() => toggleText(index)}
                  className="pl-1 leading-[1.5] font-meutasLight text-sm md:text-md text-secondary cursor-pointer"
                >
                  {expandedIndexes.includes(index) ? "Read less" : "Read More"}
                </span>
              </p>
            </div>
          </div>
        ))} */}
        {read.map((item, index) => {
          return (
            <div className="flex justify-center items-center">
              <Cardd
                key={index}
                image={item.img}
                buttonText="Apply Now"
                description={item.description}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default JobNewZealand;
