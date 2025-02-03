import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import airplane from "../assets/airplane-flight-icon.svg";
import stamp from "../assets/carbon-stamp-icon.svg";
import { fadeIn } from "../variants";

const AboutUsHero = () => {
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
              className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white leading-[1.2]"
            >
              Start Your Travel Plans
            </motion.h1>
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white"
            >
              With Us Today
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
              Start Your Travel Plans With Us Today
            </motion.h1>
          </div>
          <motion.h3
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="xl:text-lg font-meutaslight md:font-meutasLight text-[14px] text-gray-100 pt-4 pb-6 md:pt-6 lg:text-[15px] md:text-[14px] md:pb-4"
          >
            Smash Travels—Redefining global travel and visa solutions.
          </motion.h3>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex items-center flex-row gap-3 mt-1"
          >
            <Link
              to="/"
              className="flex items-center justify-center text-md bg-opacity-100 hover:bg-opacity-50  bg-secondary transition-all duration-300 py-2 px-4 md:py-2 md:px-6 lg:py-3 lg:px-6 text-white rounded-full hover:text-white text-sm md:text-lg font-semibold"
            >
              Apply for Work Visa
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
