import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import airplane from '../assets/airplane-flight-icon.svg'
import stamp from '../assets/carbon-stamp-icon.svg'
import { fadeIn } from '../variants'


const PassportHero = () => {
  return (
    <div className="flex md:px-14 p-4 pt-[8rem] md:pt-[10rem] xl:pt-[12rem] max-w-screen-2xl mx-auto max-h-[560px] grow relative items-end items-none md:items-center">
      <div className="flex md:flex-row flex-col w-full">
        <div
          className="w-[100%] flex flex-col min-h-[240px] md:min-h-[350px] lg:min-h-[380px] md:mt-0 lg:mt-0 mt-3"
        >

          <div className='hidden md:block'>
          <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white leading-[1.2]"
          >
Seamless Passport 
          </motion.h1>
          <motion.h1 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white">
Processing Starts Here
          </motion.h1>
          </div>
       
          <div className='block md:hidden'>
          <motion.h1 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white">
                        Seamless Passport Processing Starts Here
          </motion.h1>
          </div>
          <motion.h3
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}

          className="xl:text-lg font-meutaslight md:font-meutasLight text-[14px] text-gray-100 pt-4 pb-6 md:pt-6 lg:text-[15px] md:text-[14px] md:pb-4">
            Fast,  <strong className='font-black'>easy passport processing  </strong>for your journey.
          </motion.h3>
     
        </div>
      </div>
    </div>
  );
};

export default PassportHero;
