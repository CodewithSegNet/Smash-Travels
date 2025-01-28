import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import airplane from '../assets/airplane-flight-icon.svg'
import stamp from '../assets/carbon-stamp-icon.svg'
import { fadeIn } from '../variants'


const Hero = () => {
  return (
    <div className="flex md:px-14 p-4 mt-[2rem] md:mt-[3rem] xl:mt-[5rem] max-w-screen-2xl mx-auto max-h-[560px] grow relative items-end items-none md:items-center">
      <div className="flex md:flex-row flex-col w-full">
        <div
          className="w-[100%] flex flex-col md:mt-0 lg:mt-0 mt-3"
        >

          <div className='hidden md:block'>
          <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white leading-[1.2]"
          >
            Turn Your Travel Dreams
          </motion.h1>
          <motion.h1 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white">
            Into Reality
          </motion.h1>
          </div>
       
          <div className='block md:hidden'>
          <motion.h1 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white">
                        Turn Your Travel Dreams
                        Into Reality
          </motion.h1>
          </div>
          <motion.h3
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}

          className="xl:text-lg font-meutaslight md:font-meutasLight text-[14px] text-gray-100 pt-4 pb-6 md:pt-6 lg:text-[15px] md:text-[14px] md:pb-4">
            Your trusted partner for <strong className='font-black'>work visas</strong>, <strong className='font-black'>local flight bookings</strong>, and unforgettable travel experiences.
          </motion.h3>
          <motion.div 
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex items-center flex-row gap-3 mt-1">
            <Link to="/"
              className="flex items-center border-[3px] md:border-[3px] lg:border-[3px] justify-center text-md bg-opacity-100 hover:bg-opacity-50 border-white bg-secondary transition-all duration-300 py-2 px-4 md:py-2 md:px-6 lg:py-3 lg:px-6 text-white rounded-full hover:text-white text-sm md:text-lg font-semibold"
            >
              <img src={airplane} className='pr-2' alt="airplane icon image"/> 
              Flight
            </Link>
            <Link
              to="/"
              className="flex items-center border-[1px] md:border-[1px] border-white bg-opacity-100 hover:bg-opacity-50 justify-center bg-transparent transition-all duration-300 text-white py-2 px-5 md:py-2 md:px-6 lg:px-6 lg:py-3 rounded-full hover:text-white hover:bg-primary font-semibold text-sm md:text-lg"
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
