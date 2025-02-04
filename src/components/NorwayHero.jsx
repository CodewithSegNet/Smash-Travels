import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clock from "../assets/clock.png";
import stamp from "../assets/carbon-stamp-icon.svg";
import { fadeIn } from "../variants";

const NorwayHero = () => {
  return (
    <div className="flex md:px-14 p-4 mt-[2rem] md:mt-[3rem] xl:mt-[5rem] max-w-screen-2xl mx-auto max-h-[560px] grow relative items-end items-none md:items-center">
      <div className="flex md:flex-row flex-col w-full">
        <div className="w-[100%] flex flex-col md:mt-0 lg:mt-0 min-h-[240px] md:min-h-[350px] lg:min-h-[380px]  mt-3">
          <div className="hidden md:block">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="xl:text-7xl font-meutasBold md:text-4xl sm:3xl lg:text-6xl text-3xl text-white leading-[1.2]"
            >
              Relocate To Norway
            </motion.h1>
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white"
            >
              Today With SmashTravels
            </motion.h1>
          </div>

          <div className="block md:hidden">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white"
            >
              Relocate to New Zealand Today With SmashTravels
            </motion.h1>
          </div>
          <motion.h3
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="xl:text-lg font-meutaslight md:font-meutasLight text-[14px] text-gray-100 pt-4 pb-6 md:pt-6 lg:text-[15px] md:text-[14px] md:pb-4"
            >
           <span className="font-black"> Begin Your Process</span> By Selecting Your  <span className="font-black"> Job of Interest.</span>
           </motion.h3>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex items-center font-meutasRegular text-[14px] text-gray-100 pt-4 pb-6 md:pt-6 lg:text-[25px] md:text-[15px] md:pb-4"
          >
            <img src={clock} className="w-10 h-10 lg:w-16 lg:h-16 mr-3" />4 - 6
            Months Processing Time
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NorwayHero;
