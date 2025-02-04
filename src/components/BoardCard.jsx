import Sat from "../assets/hugeicons_airplane-seat.svg";
import Calendar from "../assets/uil_calendar.svg";
import { BiChevronDown } from "react-icons/bi";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

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

  const [tripType, setTripType] = useState("One Way");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [selectedFromCity, setSelectedFromCity] = useState("");
  const [selectedToCity, setSelectedToCity] = useState("");

  const handleTripTypeChange = (type) => {
    setTripType(type);
    setEndDate(null);
  
    if (type === "Multi City" && multiCityCards.length === 0) {
      setMultiCityCards([{}]);
    } else if (type !== "Multi City") {
      setMultiCityCards([]);
    }
  };
  

  const handleFromCityChange = (e) => {
    setSelectedFromCity(e.target.value);
  };

  const handleToCityChange = (e) => {
    setSelectedToCity(e.target.value);
  };

  const [multiCityCards, setMultiCityCards] = useState([]);

  const addMultiCityCard = () => {
    setMultiCityCards([...multiCityCards, {}]);
  };


  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Economy");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  const [isOpens, setIsOpens] = useState(false);
  const [selectedValue, setSelectedValue] = useState("1");
  
  const toggleDropdownPassenger = () => setIsOpens(!isOpens);
  
  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    console.log("Selected passengers:", value);
  };
  
  // Format the selected date
  const formattedDate = {
    day: startDate.toLocaleDateString("en-US", { weekday: "long" }),
    date: startDate.toLocaleDateString("en-US", { day: "2-digit" }),
    month: startDate.toLocaleDateString("en-US", { month: "short" }),
    year: startDate.toLocaleDateString("en-US", { year: "numeric" }),
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="relative bottom-[-30px] lg:bottom-[-30px] text-regular font-meutasRegular max-w-screen-2xl mx-auto mb-8 w-[90%] rounded-[20px] md:min-h-[25rem] lg:min-h-[26rem] shadow-lg bg-white text-sm md:text-md font-medium"
    >
      <div className="flex flex-wrap items-center w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] justify-between p-[1rem] md:p-[2rem]">
        {["One Way", "Round Trip", "Multi City"].map((type) => (
          <span className="flex items-center justify-center py-[.8rem] md:py-[0]" key={type}>
            <input
              type="radio"
              name="tripType"
              value={type}
              checked={tripType === type}
              onChange={() => handleTripTypeChange(type)}
              className="md:w-6 md:h-6 text-primary"
            />
            <p className="pl-2">{type}</p>
          </span>
        ))}
  
  <div className="relative inline-block text-left">
  {/* Dropdown Trigger */}
  <span
    className="flex items-center justify-between cursor-pointer w-[301px] md:w-[250px] h-[50px] border border-gray-300 rounded-md px-3 bg-white"
    onClick={toggleDropdown}
  >
    <p className="flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
      <img src={Sat} alt="Seats for economy package" className="pr-2" />
      {selectedOption}
    </p>
    <BiChevronDown
      aria-hidden="true"
      className="ml-2 text-[25px] mt-[3px]"
    />
  </span>

  {/* Dropdown Menu */}
  {isOpen && (
    <div className="absolute border border-1 border-primary left-0 mt-2 md:w-[200px] bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
      <ul className="py-1">
        <li
          className="text-regular hover:bg-gray-100 cursor-pointer px-4 py-2"
          onClick={() => handleOptionSelect("Economy")}
        >
          Economy
        </li>
        <li
          className="text-regular hover:bg-gray-100 cursor-pointer px-4 py-2"
          onClick={() => handleOptionSelect("Premium Economy")}
        >
          Premium Economy
        </li>
        <li
          className="text-regular hover:bg-gray-100 cursor-pointer px-4 py-2"
          onClick={() => handleOptionSelect("First Class")}
        >
          First Class
        </li>
        <li
          className="text-regular hover:bg-gray-100 cursor-pointer px-4 py-2"
          onClick={() => handleOptionSelect("Business")}
        >
          Business Class
        </li>
      </ul>
    </div>
  )}

    </div>
      </div>

      <div className="flex flex-wrap mx-[2rem] rounded-3xl">
  <div className="flex flex-col gap-[24px] w-full lg:w-[25%] border rounded-xl lg:rounded-l-3xl lg:rounded-r-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">
  <span className="text-sm">From</span>
<select
  value={selectedFromCity}
  onChange={handleFromCityChange}
  className="font-black font-meutas text-regular text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] appearance-none focus:outline-none focus:ring-0 w-full h-auto py-2 leading-[1.5rem] overflow-visible"
  style={{
    outline: "none",
    border: "none",
    boxShadow: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
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

  <div className="flex flex-col gap-[24px] text-regular w-full lg:w-[25%] border rounded-xl lg:rounded-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">
    <span className="text-sm">To</span>
    <select
      value={selectedToCity}
      onChange={handleToCityChange}
      className="font-black font-meutas text-regulars text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] w-full h-auto py-2 leading-[1.5rem] overflow-visible appearance-none focus:outline-none focus:ring-0"
      style={{
        outline: "none",
        border: "none",
        boxShadow: "none",
      }}
    >
      <option value="" disabled className="font-meutas text-regular font-black">
        Select a city
      </option>
      {cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  </div>

  <div className="flex flex-col w-full lg:w-[30%] border text-regular rounded-xl lg:rounded-none">
    <div className="flex">
      <div className="flex flex-col w-full md:w-[50%] gap-[19px] text-sm mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">
      <span className="flex items-center">
          Departure
          <img src={Calendar} alt="travels calendar" className="md:mb-1 ml-1" />
        </span>
        
        {/* DatePicker */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Date"
          className="font-black font-meutas text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] h-auto py-2 leading-[1.5rem] overflow-visible w-full placeholder:text-regular"
          dateFormat="d MMM ''yy" 
          style={{
            outline: "none",
            border: "none",
            boxShadow: "none",
          }}
          minDate={new Date()}
        />

        {/* Customized Date Output */}
        <div className="flex flex-col gap-[1px]">
          <span className="text-sm font-light">{formattedDate.day}</span>
        </div>
      </div>


{tripType === "Round Trip" && (
    <div className="flex flex-col gap-[19px] w-full md:w-[50%] font-meutas text-regular border-l-[2px] lg:rounded-none lg:mb-0 p-2 md:p-3 lg:p-6">
      <span className="flex items-center text-sm">
        Return
        <img src={Calendar} alt="return calendar" className="md:mb-1 ml-1" />
      </span>
       {/* DatePicker */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Date"
          className="font-black font-meutas text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] h-auto py-2 leading-[1.5rem] overflow-visible w-full placeholder:text-regular"
          dateFormat="d MMM ''yy" 
          style={{
            outline: "none",
            border: "none",
            boxShadow: "none",
          }}
          minDate={new Date()}
        />

        {/* Customized Date Output */}
        <div className="flex flex-col gap-[1px]">
          <span className="text-sm font-light">{formattedDate.day}</span>
        </div>
    </div>
  )}
  </div>
    </div>

   

 
 <div className="flex flex-col gap-[24px] w-full lg:w-[20%] border rounded-xl mt-3 md:mt-0 lg:rounded-r-3xl lg:rounded-l-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">

      <span className="text-sm">Passengers</span>
      
      {/* Custom Dropdown Button */}
      <div
        className="cursor-pointer font-black text-regular text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] w-[200px] h-auto py-2 leading-[1.5rem] overflow-visible  flex items-center justify-between"
        onClick={toggleDropdownPassenger}
      >
        <span className="font-meutas">{selectedValue}{selectedValue > 1 ? "" : ""}</span>
              </div>

      
      
      {/* Custom Dropdown List */}
      {isOpens && (
        <div className="absolute left-0 top-[600px] lg:top-[300px] bg-white shadow-lg p-9 justify-between rounded-xl w-[100%] mt-2 z-10">
        <div className="flex">
        <div className="w-[420px]">
  {/* Adult (12+ Years) Filter */}
  <div className="text-regular font-semibold flex py-2 m-5 items-center justify-between">
            <span>Adult (12+ Years)</span>
          </div>
          
          <div className="
          flex flex-wrap m-5">
  {/* Loop for Passenger Numbers */}
  {[...Array(9).keys()].map((num) => (
            <div
              key={num + 1}
              className="text-regular flex py-3 px-5 mt-2 border hover:bg-gray-100 items-center justify-between cursor-pointer"
              onClick={() => handleSelect(num + 1)}
            >
              <span>{num + 1} {num + 1 > 1 ? "" : ""}</span>
            </div>
          ))}
          </div>
        
          </div>

          <div className="w-[420px]">
  {/* Adult (12+ Years) Filter */}
  <div className="text-regular font-semibold flex py-2 m-5 items-center justify-between">
            <span>Children (2-12 Years+)</span>
          </div>
          
          <div className="
          flex flex-wrap m-5">
  {/* Loop for Passenger Numbers */}
  {[...Array(9).keys()].map((num) => (
            <div
              key={num + 1}
              className="text-regular flex py-3 px-5 mt-2 border hover:bg-gray-100 items-center justify-between cursor-pointer"
              onClick={() => handleSelect(num + 1)}
            >
              <span>{num + 1} {num + 1 > 1 ? "" : ""}</span>
            </div>
          ))}
          </div>
        
          </div>
          
        
          <div className="w-[420px]">
  {/* Adult (12+ Years) Filter */}
  <div className="text-regular font-semibold  flex py-2 m-5 items-center justify-between">
            <span>Infant (Below 2 Years)</span>
          </div>
          
          <div className="
          flex flex-wrap m-5">
  {/* Loop for Passenger Numbers */}
  {[...Array(9).keys()].map((num) => (
            <div
              key={num + 1}
              className="text-regular flex py-3 px-5 mt-2 border hover:bg-gray-100 items-center justify-between cursor-pointer"
              onClick={() => handleSelect(num + 1)}
            >
              <span>{num + 1} {num + 1 > 1 ? "" : ""}</span>
            </div>
          ))}
          </div>
        
          </div>


         
        </div>
        
<div className="w-full">
  <p className="font-light"><span className="font-bold">Note:</span> Number of total passengers must be between 1 and 9</p>

  <div className="text-center items-center ">
    <button className="py-[.8rem] px-[1.7rem] mt-10 rounded-full bg-primary text-white font-bold">Apply Filters</button>
  </div>
</div>
        </div>
         
      )}
    </div>


</div>

{multiCityCards.map((_, index) => (
  <div
    key={index}
    className="flex flex-wrap mx-[2rem] rounded-3xl mt-4"
  >
    <div className="flex flex-col gap-[24px] w-full lg:w-[25%] border rounded-xl lg:rounded-l-3xl lg:rounded-r-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">
      <span className="text-sm">From</span>
      <select
        value=""
        onChange={(e) => console.log(`From city selected for card ${index}:`, e.target.value)}
        className="font-black text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] h-auto py-2 leading-[1.5rem] overflow-visible w-full placeholder:text-regular appearance-none focus:outline-none focus:ring-0"
        style={{
          outline: "none",
          border: "none",
          boxShadow: "none",
        }}
      >
        <option className="font-black" value="" disabled>
          Select a city
        </option>
        {cities.map((city, idx) => (
          <option key={idx} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>

    <div className="flex flex-col gap-[24px] w-full lg:w-[25%] border rounded-xl lg:rounded-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">
      <span className="text-sm">To</span>
      <select
        value=""
        onChange={(e) => console.log(`To city selected for card ${index}:`, e.target.value)}
        className="font-black text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] h-auto py-2 leading-[1.5rem] overflow-visible w-full placeholder:text-regular appearance-none focus:outline-none focus:ring-0"
        style={{
          outline: "none",
          border: "none",
          boxShadow: "none",
        }}
      >
        <option value="" disabled className="font-black">
          Select a city
        </option>
        {cities.map((city, idx) => (
          <option key={idx} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>

    <div className="flex flex-col gap-[18px] w-full lg:w-[30%] border rounded-xl lg:rounded-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">
    <span className="flex items-center">
          Departure
          <img src={Calendar} alt="travels calendar" className="md:mb-1 ml-1" />
        </span>
        
        {/* DatePicker */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Date"
          className="font-black font-meutas text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] h-auto py-2 leading-[1.5rem] overflow-visible w-full placeholder:text-regular"
          dateFormat="d MMM ''yy" 
          style={{
            outline: "none",
            border: "none",
            boxShadow: "none",
          }}
          minDate={new Date()}
        />

        {/* Customized Date Output */}
        <div className="flex flex-col gap-[1px]">
          <span className="text-sm font-light">{formattedDate.day}</span>
        </div>
    </div>


    <div className="flex flex-col gap-[24px] w-full lg:w-[20%] border rounded-xl lg:rounded-r-3xl lg:rounded-l-none mb-3 lg:mb-0 p-2 md:p-3 lg:p-6">

      <span className="text-sm">Passengers</span>
      
      {/* Custom Dropdown Button */}
      <div
        className="cursor-pointer font-black text-regular text-[1.1rem] md:text-[1.3rem] lg:text-[1.4rem] w-[200px] flex items-center justify-between"
        onClick={toggleDropdownPassenger}
      >
        <span>{selectedValue} {selectedValue > 1 ? "" : ""}</span>
              </div>

      
      
      {/* Custom Dropdown List */}
      {isOpens && (
        <div className="absolute left-0 top-[600px] lg:top-[300px] bg-white shadow-lg p-9 justify-between rounded-xl w-[100%] mt-2 z-10">
        <div className="flex">
        <div className="w-[420px]">
  {/* Adult (12+ Years) Filter */}
  <div className="text-regular font-semibold flex py-2 m-5 items-center justify-between">
            <span>Adult (12+ Years)</span>
          </div>
          
          <div className="
          flex flex-wrap m-5">
  {/* Loop for Passenger Numbers */}
  {[...Array(9).keys()].map((num) => (
            <div
              key={num + 1}
              className="text-regular flex py-3 px-5 mt-2 border hover:bg-gray-100 items-center justify-between cursor-pointer"
              onClick={() => handleSelect(num + 1)}
            >
              <span>{num + 1} {num + 1 > 1 ? "" : ""}</span>
            </div>
          ))}
          </div>
        
          </div>

          <div className="w-[420px]">
  {/* Adult (12+ Years) Filter */}
  <div className="text-regular font-semibold flex py-2 m-5 items-center justify-between">
            <span>Children (2-12 Years+)</span>
          </div>
          
          <div className="
          flex flex-wrap m-5">
  {/* Loop for Passenger Numbers */}
  {[...Array(9).keys()].map((num) => (
            <div
              key={num + 1}
              className="text-regular flex py-3 px-5 mt-2 border hover:bg-gray-100 items-center justify-between cursor-pointer"
              onClick={() => handleSelect(num + 1)}
            >
              <span>{num + 1} {num + 1 > 1 ? "" : ""}</span>
            </div>
          ))}
          </div>
        
          </div>
          
        
          <div className="w-[420px]">
  {/* Adult (12+ Years) Filter */}
  <div className="text-regular font-semibold  flex py-2 m-5 items-center justify-between">
            <span>Infant (Below 2 Years)</span>
          </div>
          
          <div className="
          flex flex-wrap m-5">
  {/* Loop for Passenger Numbers */}
  {[...Array(9).keys()].map((num) => (
            <div
              key={num + 1}
              className="text-regular flex py-3 px-5 mt-2 border hover:bg-gray-100 items-center justify-between cursor-pointer"
              onClick={() => handleSelect(num + 1)}
            >
              <span>{num + 1} {num + 1 > 1 ? "" : ""}</span>
            </div>
          ))}
          </div>
        
          </div>


         
        </div>
        
<div className="w-full">
  <p className="font-light"><span className="font-bold">Note:</span> Number of total passengers must be between 1 and 9</p>

  <div className="text-center items-center ">
    <button className="py-[.8rem] px-[1.7rem] mt-10 rounded-full bg-primary text-white font-bold">Apply Filters</button>
  </div>
</div>
        </div>
         
      )}
    </div>

  </div>
))}


      <div className="flex items-center px-[3rem] pt-[1rem] md:pt-[2rem] pb-[5rem] lg:py-[2rem]">
        <label className="flex items-center gap-2 custom-checkbox">
          <input type="checkbox" className="hidden" />
          <span className="checkmark"></span>
          <span>My dates are flexible (+/- 3 days)</span>
        </label>
      </div>

      <button className="bg-primary rounded-full bottom-[15px] md:bottom-[-29px] hover:text-white text-white py-[1rem] px-[2rem] lg:py-[1.3rem] lg:px-[3rem] left-1/2 transform -translate-x-1/2 hover:bg-opacity-80 md:text-[1.2rem] lg:text-[1.5rem] font-bold absolute transition duration-300">
        Search Flight
      </button>
    </motion.div>
  );
};

export default BoardCard;