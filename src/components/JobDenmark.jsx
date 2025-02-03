import React, { useState } from "react";
import bartender from "../assets/bartender.png";
import warehouse from "../assets/warehouse.png";
import carpenter from "../assets/carpenter.png";
import mechanic from "../assets/mechanic.png";
import engineering from "../assets/engineering.png";
import roomAttenders from "../assets/roomAttenders.png";
import customerRep from "../assets/customerRep.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Cardd from "./Cardd";

const read = [
  {
    img: bartender,
    title: "Bartender",
    description:
      "In the hospitality sector in Canada, you'll play a vital role in creating exceptional guest experiences. Responsibilities may...",
    fulldescription:
      "In the hospitality sector in Canada, you'll play a vital role in creating exceptional guest experiences. Responsibilities may include customer service, front desk operations, housekeeping, food and beverage service, and ensuring a welcoming and comfortable environment for guests. This role requires excellent communication skills, attention to detail, and a passion for delivering top-notch service.",
    sector: "Hospitality Sector",
  },
  {
    img: warehouse,
    title: "Warehouse Workers",
    description:
      "In the logistics sector in Canada, you'll oversee the efficient transportation, storage, and distribution of goods...",
    fulldescription:
      "In the logistics sector in canada, you'll oversee the efficient transportation, storage, and distribution of goods. Responsibilities may include inventory management, supply chain coordination, and ensuring timely delivery of goods. This role requires organizational skills, attention to detail, and the ability to work in fast-paced environments.",
    sector: "Logistics Sector",
  },
  {
    img: carpenter,
    title: "Carpenters",
    description:
      "Working in Canada's construction sector involves building, repairing, and maintaining infrastructure. Responsibilities may include...",
    fulldescription:
      "Working in Canada's construction sector involves building, repairing, and maintaining infrastructure. Responsibilities may include operating machinery, interpreting blueprints, and ensuring safety standards on-site. This role is ideal for individuals with physical stamina, teamwork skills, and a commitment to quality workmanship.",
    sector: "Construction Sector",
  },
  {
    img: mechanic,
    title: "Mechanics",
    description:
      "The technical sector in Canada offers roles requiring specialized skills in fields such as IT, mechanics, or electronics...",
    fulldescription:
      "The technical sector in Canada offers roles requiring specialized skills in fields such as IT, mechanics, or electronics. Responsibilities may include troubleshooting, system maintenance, or implementing technical solutions. Success in this field demands analytical thinking, problem-solving abilities, and technical expertise.",
    sector: "Technical Sector",
  },
  {
    img: engineering,
    title: "Electrical Engineers",
    description:
      "In the engineering sector in Canada, you'll contribute to designing, developing, and implementing innovative solutions...",
    fulldescription:
      "In the engineering sector in Canada, you'll contribute to designing, developing, and implementing innovative solutions in various industries. Roles may involve creating blueprints, conducting research, and overseeing project execution. Strong technical knowledge, creativity, and teamwork are essential in this field.",
    sector: "Engineering Sector",
  },
  {
    img: roomAttenders,
    title: "Room Attenders",
    description:
      "Housekeeping roles in Canada focus on maintaining clean, organized, and hygienic spaces in residential, commercial, or...",
    fulldescription:
      "Housekeeping roles in Canada focus on maintaining clean, organized, and hygienic spaces in residential, commercial, or hospitality settings. Responsibilities may include cleaning, laundry services, and ensuring a welcoming environment. Attention to detail, time management, and reliability are crucial for this role.",
    sector: "Housekeeping Sector",
  },
  {
    img: customerRep,
    title: "Customer Service Representatives",
    description:
      "As an NDT Officer in Canada, your primary responsibilities will involve providing excellent customer service in the field of...",
    fulldescription:
      "As an NDT Officer in Canada, you'll inspect materials, components, or systems for flaws without causing damage. Using advanced techniques like ultrasound, radiography, or magnetic particle testing, you’ll ensure safety and quality standards are met. This role requires precision, technical knowledge, and adherence to safety protocols.",
    sector: "Non-Destructive Testing",
  },
];

const JobDenmark = () => {
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
    <>
    <section className="px-7">
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="max-w-[1289px] text-regular mx-auto mt-[30px] md:mt-[50px] lg:mt-[80px] mb-[3rem] md:mb-[3rem] lg:mb-[3rem]"
    >
      <div className=" flex flex-col justify-center items-center mb-[40px]">
        <p className="text-center text-regular text-2xl font-meutasRegular lg:text-4xl font-bold mb-[.8rem] md:mb-[1rem]">
          Jobs Available
        </p>
        <p className="md:text-xl font-light text-sm text-newgray font-meutasRegular">
          Below Are The Jobs Available In Denmark
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
        {read.map((item, index) => {
          return (
            <div key={index}  className="flex md:pb-[2rem] text-regular justify-center items-center">
              <Cardd
                image={item.img}
                buttonText="Apply Now"
                description={item.description}
                title={item.title}
                fullDescription={item.fulldescription}
                sector={item.sector}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
    </section>
   </>
  );
};

export default JobDenmark;
