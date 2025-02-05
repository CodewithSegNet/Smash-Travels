import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

const Cardd = ({
  buttonText,
  title,
  description,
  image,
  fullDescription,
  sector,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null); 


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
  
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);
  

  // Simulated authentication check (Replace with real logic)
  const isAuthenticated = false;

  // Job lists for different sectors
  const jobLists = {
    "Hospitality Sector": [
      { id: 1, title: "Chef", path: "" },
      { id: 2, title: "Hotel Receptionist", path: "" },
      { id: 3, title: "Waiter/Waitress", path: "" },
      { id: 4, title: "Receptionist", path: "" },
      { id: 5, title: "Front Attendant", path: ""},
      { id: 6, title: "Laundry Assistant", path: "" },
      { id: 7, title: "Kitchen Helper", path: "" },
      { id: 8, title: "F&B Service Staff", path: "" },
      { id: 9, title: "F&B Manager", path: "" },
    ],
    "Logistics Sector": [
      { id: 1, title: "Warehouse Worker", path: "" },
      { id: 2, title: "Delivery Driver", path: "" },
      { id: 3, title: "Forklift Operators", path: "" },
      { id: 4, title: "Light Vehicle Drivers", path: "" },
      { id: 5, title: "Heavy Vehicle Drivers", path: "" },

    ],
    "Construction Sector": [
      { id: 1, title: "Loading & Unloading Workers", path: "" },
      { id: 2, title: "Painters", path: "" },
      { id: 3, title: "Carpenters", path: "" },
      { id: 4, title: "Plumbers", path: "" },
      { id: 5, title: "Pipe Fabricators", path: "" },

    ],
    "Technical Sector": [
      { id: 1, title: "Mechanics", path: "" },
      { id: 2, title: "CNC Machine Operators", path: "" },
      { id: 3, title: "IT Technicians", path: "" },
      { id: 4, title: "General Helpers", path: "" },
      { id: 5, title: "Auto Mechanics", path: "" },
      { id: 6, title: "Car Painters", path: "" },
    ],
    "Engineering Sector": [
      { id: 1, title: "Engineer", path: "" },
      { id: 2, title: "Electrical Engineers", path: "" },
      { id: 3, title: "Mechanical Engineers", path: "" },
      { id: 4, title: "Civil Engineers", path: "" },
      { id: 5, title: "Software Engineers", path: "" },
    ],
    "Housekeeping Sector": [
      { id: 1, title: "HouseKeepers", path: "" },
      { id: 2, title: "Room Attendants", path: "" },
      { id: 3, title: "Laudry Assistant", path: "" },
      { id: 4, title: "HouseKeeping Supervisors", path: "" },

    ],
    "Non-Destructive Testing": [
      { id: 1, title: "Customer Service Sector", path: "" },
      { id: 2, title: "Customer Service Representatives", path: "" },
      { id: 3, title: "Call Center Agents", path: "" },
    ],
  };

  // Get the job list based on the sector (default to an empty array if not found)
  const jobs = jobLists[sector] || [];

  // Handle job selection
  const handleJobClick = (path) => {
    navigate(isAuthenticated ? path : "/login");
  };

  return (
    <div className="flex flex-col w-[387px]">
      <div className="relative">
        <span className="flex justify-center items-center text-[16px] font-meutasRegular bg-black bg-opacity-50 py-2 px-3 absolute top-4 left-4 rounded-full z-20 text-white">
          {sector}
        </span>
        <img src={image} className="h-52 w-[387px] rounded-t-[10px] mb-2" />
      </div>

      <div className="pt-2 mb-3">
        <div className="flex items-center">
          <h3 className="font-semibold font-meutasRegular text-regular md:text-xl">
            {title}
          </h3>
        </div>

        <p className="pt-2 leading-[1.5] font-meutasLight text-sm md:text-md text-regular">
          {isExpanded ? fullDescription : description}
          <span
            className="pl-1 leading-[1.5] font-meutasLight text-sm md:text-md text-secondary cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? " Read Less" : " Read More"}
          </span>
        </p>
      </div>

      {/* Job Dropdown Button */}
      <div className="relative"  ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center border-[3px] font-meutasRegular md:border-[3px] lg:border-[3px] justify-center text-md bg-opacity-100 hover:bg-opacity-50 border-white bg-secondary transition-all duration-30 text-white rounded-full hover:text-white text-[12px]  w-[129px] h-[48px]"
        >
          {buttonText} <BiChevronDown className="ml-2" />
        </button>

        {/* Dropdown List */}
        {dropdownOpen && jobs.length > 0 && (
          <ul className="absolute left-0 mt-2 w-48 z-30 bg-white font-meutasRegular border rounded-lg shadow-md">
            {jobs.map((job) => (
              <li
                key={job.id}
                onClick={() => handleJobClick(job.path)}
                className="p-2 hover:bg-gray-200 cursor-pointer text-black"
              >
                {job.title}
              </li>
            ))}
          </ul>
        )}

        {/* Message when no jobs are available for the sector */}
        {dropdownOpen && jobs.length === 0 && (
          <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-md p-2 text-gray-600">
            No jobs available for this sector.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cardd;

