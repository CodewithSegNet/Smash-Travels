import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../variants";
import denmark from "../assets/denmark.webp";
import germany from "../assets/germany.webp"
import canada from "../assets/canada.webp"
import norway from "../assets/norway.webp"
import netherlands from "../assets/netherlands.webp"
import Luxembourg from "../assets/luxembourg.webp"
import croatia from "../assets/croatia.webp"
import zealand from "../assets/new-zealand.webp"

 
const Countries = () => {
    const countryinfo = [
      {
        imgSrc: denmark,
        country: "Denmark",
        linkTo: "/job-denmark",
      },
      {
        imgSrc: canada,
        country: "Canada",
        linkTo: "/job-canada",
      },
      {
        imgSrc: norway,
        country: "Norway",
        linkTo: "/job-norway",
      },
      {
        imgSrc: netherlands,
        country: "Netherlands",
        linkTo: "/job-netherlands",
      },
      {
        imgSrc: germany,
        country: "Germany",
        linkTo: "/job-germany",
      },
      {
        imgSrc: Luxembourg,
        country: "Luxembourg",
        linkTo: "/job-luxembourg",
      },
      {
        imgSrc: croatia,
        country: "Croatia",
        linkTo: "/job-croatia",
      },
      {
        imgSrc: zealand,
        country: "New Zealand",
        linkTo: "/job-new-zealand",
      },
    ];
  
    return (
      <div className="flex flex-col w-full md:px-14 p-4 mt-[2rem] md:mt-[1.5rem] xl:mt-[1rem] max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <div className="w-full text-center">
          <h1 className="text-regular font-meutasRegular font-bold text-2xl lg:text-4xl">
            Our Available Countries
          </h1>
          <p className="text-lg font-meutasRegular pt-3 text-newgray">
            Select Country of Choice
          </p>
        </div>
  
        {/* Country Cards */}
        <div className="shadow-xl rounded-xl mt-10 md:mt-13 py-8 px-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {countryinfo.map((country, index) => (
            <Link to={country.linkTo} key={index} className="p-2 rounded-lg mx-auto text-center flex flex-col items-center cursor-pointer w-[100%] md:w-[70%] hover:scale-105 transition-transform duration-300 bg-white">
              <img src={country.imgSrc} alt={country.country} className="w-[100px] h-[100px] rounded-full" />
              <p className="font-semibold text-regular mt-3 text-[16px] md:text-[18px] block">{country.country}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Countries;