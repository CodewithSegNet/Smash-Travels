import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import norway from '../assets/norway.webp'
import stamp from '../assets/carbon-stamp-icon.svg'
import { fadeIn } from '../variants'
import backgroundImage from '../assets/norwayhero.webp'; 
import backgroundImageSmall from '../assets/norwayhero.webp'; 
import backgroundImageMedium from '../assets/norwayhero.webp'; 





const CountryBoard = () => {
  return (
    <>
    
    
    <div className="relative md:w-[80%] mx-6 md:mx-auto md:max-h-[806px]">
      <img
        src={backgroundImage}
        srcSet={`${backgroundImageSmall} 720w, ${backgroundImageMedium} 1440w, ${backgroundImage} 2880w`}
        sizes="(min-width: 2880px) 2880px, 100vw"
        alt="Explore travel packages and visa services with Smash Travels"
        className="absolute object-cover w-full rounded-xl h-[450px] md:h-[580px] lg:h-[550px] xl:h-[640px] inset-0"
        loading="eager"
      />

<div className='absolute right-[80px] md:right-[100px] top-[100px] bg-white rounded-full p-0 m-0'>

<img src={norway}  alt="airplane icon"/> 

</div>

    </div>

    <div className="flex md:px-14 w-[90%] md:w-[70%] p-4 mt-[2rem] md:mt-[4rem] mx-auto xl:mt-[7rem] max-w-screen-2xl h-[400px] md:max-h-[560px] relative items-end md:items-center">
      <div className="flex md:flex-row flex-col w-full">
        <div className="w-full flex flex-col mt-3 md:mt-0">
          <div className='hidden md:block max-w-[600px]'>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white !leading-[60px] md:!leading-[70px] lg:!leading-[90px]"
            >
              Norway,
            </motion.h1>
            <motion.h1 
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="xl:text-7xl font-meutasBold md:text-4xl lg:text-6xl text-3xl !leading-[70px] lg:!leading-[90px] text-white"
            >
              Our Best-Seller. Relocate Today!
            </motion.h1>
          </div>
          <div className='block md:hidden'>
            <motion.h1 
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="xl:text-7xl px-[10px] py-[10px] font-meutasBold md:text-4xl lg:text-6xl text-3xl text-white"
            >
              Norway, Our Best-Seller. Relocate Today!
            </motion.h1>
          </div>
          
          <motion.div 
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-center w-full gap-3 mt-5 md:mt-16"
          >
            <Link to="/job-norway"
              className="flex items-center justify-right text-right text-md bg-opacity-100 hover:bg-opacity-50 border-white bg-secondary transition-all duration-300 py-3 px-4 md:py-2 md:px-8 lg:py-3 lg:px-8 text-white rounded-full hover:text-white text-sm md:text-lg font-bold"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default CountryBoard;
