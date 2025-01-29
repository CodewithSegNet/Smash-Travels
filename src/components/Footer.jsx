import { useState } from "react";
import logo from "../assets/logos.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import Copyright from "../assets/copyright.png";
import ngnlogo from "../assets/nigeria.svg";


const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="w-full md:max-w-screen-4xl mx-auto bg-regular md:px-14 p-4 text-white">
      <div className="w-full my-4 flex flex-col md:flex-row gap-2">
        <div className="flex w-full md:flex-row flex-col flex-wrap justify-between gap-3 mt-[1rem] items-start">
          <div className="space-y-4">
            <h1 className=" text--300 font-meutas font-black mb-4 md:text-xl">Product</h1>
            <ul className="space-y-3">
              <Link
                to="/about"
                className="block hover:text-secondary text-gray-200"
              >
                Flight Booking
              </Link>
              <Link
                to="/services"
                className="block hover:text-secondary text-gray-200"
              >
                Work Visa
              </Link>
              <Link
                to="/driveAndEarn"
                className="block hover:text-secondary  text-gray-200"
              >
                Passport
              </Link>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className=" text--300 font-black mb-4 font-meutas md:text-xl">Company</h1>
            <ul className="space-y-3">
              <Link
                to="/about"
                className="block hover:text-secondary text-gray-200"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block hover:text-secondary text-gray-200"
              >
                Services
              </Link>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className=" text--300 font-black mb-4 md:text-xl">Resource</h1>
            <ul className="space-y-3">
              <Link
                to="/ride-hailing"
                className="block hover:text-secondary text-gray-200"
              >
                Blog
              </Link>
              <Link
                to="/delivery"
                className="block hover:text-secondary text-gray-200"
              >
                Support
              </Link>
            </ul>
          </div>
          <div className="flex md:flex-col gap-2">
            <div className="space-y-4">
              <h4 className="text--300 font-black mb-4 font-meutas md:text-xl">Contact</h4>
              <ul className="space-y-3">
                <Link
                  to="/driveAndEarn"
                  className="block hover:text-secondary text-gray-200"
                >
                  Support@smashtravels.com
                </Link>
                <Link
                  to="/fleets"
                  className="block hover:text-secondary text-gray-200"
                >
                  02013309103 <span className="text-secondary">(HotLine)</span>
                </Link>
                {/* <Link
                  to="/franchise"
                  className="block hover:text-secondary text-gray-200"
                >
                  +234 8144824339 (Lagos Branch)
                </Link> */}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className=" text--300 font-black mb-4 font-meutas md:text-xl">Legal</h1>
            <ul className="space-y-3">
              <Link
                to="/ride-hailing"
                className="block hover:text-secondary text-gray-200"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/ride-hailing"
                className="block hover:text-secondary text-gray-200"
              >
                Privacy
              </Link>
            </ul>
          </div>
          <div className="w-full md:pt-8 flex items-center flex-col md:flex-row gap-2">
            <div className="w-full">
              <div className="flex py-4 md:py-0 flex-col md:flex-row items-left md:max-w-[500px] md:justify-between">
                <a href="/" className="flex w-[100%] md:justify-center lg:mr-[80px] items-center">
                  <img
                    src={logo}
                    alt="Smash Travels - Affordable travel packages and visa services"
                    className="w-[50px] md:w-[64px] mb-3"
                  />
                  <span className="w-full md:text-[20px] font-meutas font-black flex">
                    Smash Travels
                  </span>
                </a>
                 
                 <a href="/" className="flex md:justify-center w-[100%] items-center">
                 <img
                  src={ngnlogo}
                  alt="Smash Travels - Affordable travel packages and visa services"
                  className="w-[35px] md:w-[40px] mr-4 flex items-center justify-center"
                />
                <span className="w-full md:text-[24px] font-semibold flex">
                  N G N
                </span>
                 </a>
             
              </div>
            </div>

            <div className="flex md:ml-0 flex-col gap-1 md:items-center md:justify-center">
              <div className="flex flex-row items-center gap-3 ">
              <Link to="https://x.com/ridesmashng?s=21/">
                  <FaTwitter className="hover:text-secondary text-2xl" />
                </Link>
             
                <Link to="https://www.instagram.com/ridesmashnigeria/">
                  <FaInstagram className="hover:text-secondary text-2xl" />
                </Link>
             
                <Link to="https://www.tiktok.com/@ridesmash?_t=ZM-8spvH4JpCrd&_r=1">
                  <FaTiktok className="hover:text-secondary text-2xl" />
                </Link>
                <Link to="https://web.facebook.com/ridesmashNigeria">
                  <FaLinkedin className="hover:text-secondary text-2xl transition-all duration-300 cursor-pointer" />
                </Link>
                <Link to="https://web.facebook.com/ridesmashNigeria">
                  <FaFacebookF className="hover:text-secondary text-2xl transition-all duration-300 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=" border-b-[0.5] border-solid border-gray-600" />

      <div className="flex md:flex-row flex-col md:items-center justify-between md:py-4 gap-8 py-4 ">
        <div className="flex max-w-screen-2xl w-[100%] justify-center text-center mx-auto md:flex-row gap-3">
          <Link to="/termsAndConditions">
            <h3 className="text-center w-full text-[12px] md:text-md flex items-center text-gray-300">
              Copyright
              <span className="px-1">
                <img src={Copyright} alt="" />
              </span>
              {currentYear} | Smash Travels All rights reserved
            </h3>
          </Link>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:items-center justify-between md:py-4 py-4 gap-8 mb-4 ">
        <div>
          <h3 className=" text-gray-300"></h3>
          <h3 className=" text-gray-300"></h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
