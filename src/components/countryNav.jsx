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
            className="h-[24px] pt-1 justify-center items-center flex rounded-md"
            aria-label="Smash Travels home page"
          >
            <img
              src={logo}
              alt="Smash Travels - Affordable travel packages and visa services"
              className="w-5 h-5 md:w-[24px] flex items-center pb-1 justify-center md:h-[24px] mr-3"
            />
            <span className="font-meutasRegular lg:text-2xl">Go Back</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default CountryNavbar;
