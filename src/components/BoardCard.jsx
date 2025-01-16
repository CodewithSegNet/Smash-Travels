import Sat from "../assets/hugeicons_airplane-seat.svg";
import Calendar from "../assets/uil_calendar.svg";
import { BiChevronDown } from "react-icons/bi";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fadeIn } from '../variants'
import { motion } from 'framer-motion';

const BoardCard = () => {
  const cities = [
    "Abuja",
    "Lagos",
    "Kano",
    "Port Harcourt",
    "Ibadan",
    "Benin City",
    "Enugu",
    "Kaduna",
    "Maiduguri",
    "Aba",
    "Zaria",
    "Onitsha",
    "Jos",
    "Ilorin",
    "Warri",
    "Sokoto",
    "Asaba",
    "Uyo",
    "Ogbomoso",
    "Abakaliki",
    "Bauchi",
    "Yola",
    "Ekiti",
  ];

  const [startDate, setStartDate] = useState(null);
  const [selectedFromCity, setSelectedFromCity] = useState("");
  const [selectedToCity, setSelectedToCity] = useState("");

  const handleFromCityChange = (e) => {
    setSelectedFromCity(e.target.value);
  };

  const handleToCityChange = (e) => {
    setSelectedToCity(e.target.value);
  };

  return (
    <motion.div
  variants={fadeIn("up", 1.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: true }}
  className="relative bottom-[-200px] max-w-screen-2xl mx-auto mb-8 w-[90%] rounded-[24px] md:min-h-[25rem] lg:min-h-[29rem] shadow-lg bg-white text-sm md:text-lg font-medium"
> 
<div className="flex flex-wrap items-center w-[100%] lg:w-[60%] justify-between p-[2rem] md:p-[3rem]">
        <span className="flex items-center justify-center py-[.8rem] md:py-[0]">
          <input type="radio" name="tripType" className="md:w-6 md:h-6 text-primary" />
          <p className="pl-2">One Way</p>
        </span>
        <span className="flex items-center justify-center">
          <input type="radio" name="tripType" className="md:w-6 md:h-6 text-primary" />
          <p className="pl-2">Round Trip</p>
        </span>
        <span className="flex items-center justify-center">
          <input type="radio" name="tripType" className="md:w-6 md:h-6 text-primary" />
          <p className="pl-2">Multi City</p>
        </span>
        <span className="flex items-center justify-center">
          <p className="flex items-center">
            <img src={Sat} alt="Seats for economy package" className="pr-2" />
            Economy
          </p>
          <BiChevronDown
            aria-hidden="true"
            className="ml-2 text-[25px] mt-[3px]"
          />
        </span>
      </div>

      <div className="flex flex-wrap mx-[2rem] rounded-3xl">
        <div className="flex flex-col gap-[24px] w-full lg:w-[25%] border rounded-xl lg:rounded-l-3xl lg:rounded-r-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">
          <span>From</span>
          <select
            value={selectedFromCity}
            onChange={handleFromCityChange}
            className="font-black text-[#393939]  text-[1.5rem] md:text-[2rem] lg:text-[2rem]"
            style={{
              outline: "none",
              border: "none",
              boxShadow: "none",
            }}
          >
            <option className="font-black" value="" disabled>
              Select a city
            </option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-[24px] w-full lg:w-[25%] border rounded-xl lg:rounded-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">
          <span>To</span>
          <select
            value={selectedToCity}
            onChange={handleToCityChange}
            className="font-black text-[#393939] text-[1.5rem] md:text-[2rem] lg:text-[2rem]"
            style={{
              outline: "none",
              border: "none",
              boxShadow: "none",
            }}
          >
            <option value="" disabled className="font-black">
              Select a city
            </option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-[24px] w-full lg:w-[25%] border rounded-xl lg:rounded-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">
          <span className="flex items-center">Date <img src={Calendar} alt="travels calendar" className="md:mt-[2px] ml-1" /></span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a date"
            className="font-black text-[1.5rem] md:text-[2rem] lg:text-[2rem] w-[100%] placeholder:text-[#393939]"
            style={{
              outline: "none",
              border: "none",
              boxShadow: "none",
            }}
          />
        </div>

        <div className="flex flex-col gap-[24px] w-full lg:w-[25%] border rounded-xl lg:rounded-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">
          <span className="flex items-center">Passenger  <BiChevronDown
            aria-hidden="true"
            className="ml-1 text-[22px] md:text-[25px] text-primary md:mt-[3px]"
          /></span>
          <select
            value={selectedToCity}
            onChange={handleToCityChange}
            className="font-black text-[#393939] text-[1.5rem] md:text-[2rem] lg:text-[2rem]"
            style={{
              outline: "none",
              border: "none",
              boxShadow: "none",
            }}
          >
            <option value="" disabled className="font-black">
            1 Passenger
            </option>
          </select>
        </div>
      </div>
      <div className=" px-[3rem] pt-[2rem] pb-[5rem] lg:py[3rem] flex items-center">
        <input type="checkbox" className="mr-4 w-4 h-4 md:w-6 md:h-6" />
        My dates are flexible (+/- 3 days)
      </div>

      <button className="bg-primary rounded-full bottom-[-32px] text-white py-[1rem] px-[2rem] md:py-[1.5rem] md:px-[4rem] left-1/2 transform -translate-x-1/2 hover:scale-110 md:text-[1.3rem] lg:text-[1.8rem] font-bold absolute transition duration-300">
  Search Flight
</button>
    </motion.div>
  );
};

export default BoardCard;
