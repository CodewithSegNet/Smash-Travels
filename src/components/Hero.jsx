import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import airplane from '../assets/airplane-flight-icon.svg'
import stamp from '../assets/carbon-stamp-icon.svg'
import { fadeIn } from '../variants'


const Hero = () => {
  return (
    <div className="flex md:px-14 p-4 mt-[5rem] md:mt-[4rem] xl:mt-[9rem] max-w-screen-2xl mx-auto min-h-[200px]">
      <div className="flex md:flex-row flex-col w-full">
        <div
          className="w-[100%] flex flex-col md:mt-0 lg:mt-0 mt-3"
        >
          <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="xl:text-8xl lg:text-4xl text-4xl text-white font-black font-euclid font-black leading-[1.2]"
          >
            Turn Your Travel Dreams
          </motion.h1>
          <motion.h1 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          className="xl:text-8xl lg:text-4xl md:text-4xl text-4xl text-white font-black inter">
            Into Reality
          </motion.h1>
          <motion.h3
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}

          className="xl:text-lg text-gray-100 pt-8 font-medium text-[18px] pb-12">
            Your trusted partner for <strong className='font-black'>work visas</strong>, <strong className='font-black'>local flight bookings</strong>, and unforgettable travel experiences.
          </motion.h3>
          <motion.div 
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex flex-row gap-3 mt-3">
            <Link to="/"
              className="flex items-center border-[5px] justify-center text-md bg-opacity-100 hover:bg-opacity-50 border-white bg-secondary transition-all duration-300  md:py-4 md:px-8 text-white rounded-full hover:text-white text-sm md:text-lg font-semibold"
            >
              <img src={airplane} className='pr-2' alt="airplane icon image"/>
              Flight
            </Link>
            <Link
              to="/"
              className="flex items-center border-[2px] border-white bg-opacity-100 hover:bg-opacity-50 justify-center bg-transparent transition-all duration-300 text-white md:py-4 md:px-8 rounded-full hover:text-white hover:bg-primary font-semibold text-sm md:text-lg"
            >
              <img src={stamp} className='pr-2' alt="visa stamp icon image" />
              Work Visas
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
