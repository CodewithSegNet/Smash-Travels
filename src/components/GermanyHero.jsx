import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clock from "../assets/clock.png";
import stamp from "../assets/carbon-stamp-icon.svg";
import { fadeIn } from "../variants";

const GermanyHero = () => {
  return (
    <div className="flex md:px-14 p-4 mt-[2rem] md:mt-[3rem] xl:mt-[5rem] max-w-screen-2xl mx-auto max-h-[560px] grow relative items-end items-none md:items-center">
      <div className="flex md:flex-row flex-col w-full">
        <div className="w-[100%] flex flex-col md:mt-0 lg:mt-0 mt-3">
          <div className="hidden md:block">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="xl:text-7xl font-meutasBold md:text-4xl sm:3xl lg:text-6xl text-3xl text-white leading-[1.2]"
            >
              Relocate To Germany
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
              Relocate to Germany Today With SmashTravels
            </motion.h1>
          </div>
          <motion.h3
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="text-4xl text-gray-100 pt-4 pb-6 md:pt-6 font-meutasRegular "
          >
            Begin Your Process By Selecting Your Job of Interest
          </motion.h3>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="font-meutaslight md:font-meutasLight text-[28px] text-3xl text-gray-100 pt-4 pb-6 md:pt-6  md:pb-4 flex items-center"
          >
            <img src={clock} className="w-16 h-16 mr-3" />4 - 6 Months
            Processing Time
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GermanyHero;
