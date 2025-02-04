import { useState, useEffect } from "react";
import logo from "../assets/backarrow.png";
import { BiChevronDown } from "react-icons/bi";
import { FaXmark, FaBars } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import airplane from "../assets/Vector2.svg";
import visa from "../assets/carbon_stamp.svg";
import passport from "../assets/la_passport.svg";
import car from "../assets/iconoir_car.svg";
import airport from "../assets/airport-rounded.svg";

const CountryNavbar = () => {
  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="md:px-14 pb-5 pt-5 relative max-w-screen-2xl mx-auto w-full z-70 text-white px-4 transition-all duration-500 flex items-center justify-center"
      >
        <div className="flex items-center justify-between w-[100%] md:pb-3">
          <NavLink
            to="/work-visa"
            className="h-[24px] pt-1 justify-center items-center flex rounded-md transition-all duration-300 group"
            aria-label="Smash Travels home page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 md:w-[24px] md:h-[24px] mr-1 md:mr-3 transition-all duration-300 text-gray-200 group-hover:text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H20a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 1 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0z"
                clipRule="evenodd"
              />
            </svg>

            <span className="font-meutasRegular lg:text-2xl transition-all pt-1 md:pt-1 duration-300 text-gray-200 group-hover:text-primary">
              Go Back
            </span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default CountryNavbar;
