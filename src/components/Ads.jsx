import book from "../assets/image_fx.png";
import flight from "../assets/Frame317.png";
import phone from "../assets/image.png";
import { fadeIn } from '../variants'
import { motion } from 'framer-motion';




const Book = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto flex justify-center px-7 md:px-7 lg:px-4 py-[6rem] mt-[14rem]">
      <motion.div 
       variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      className="grid w-[100%] lg:w-[100%] text-left lg:grid-cols-3 lg:grid-rows-2 gap-4">
        {/* First Box - Takes full height and width */}
        <div
          className="col-span-2 row-span-2 bg-cover bg-center h-[388px] md:h-[800px] rounded-3xl p-6 flex flex-col justify-center text-white"
          style={{ backgroundImage: `url(${book})` }}
        >
          <h3 className="text-4xl md:text-4xl p-8 lg:text-8xl font-bold">
            Book your Flights Today With <span className="text-primary">Smash Travels</span> 
          </h3>

          <div className="mx-auto mt-[6rem]">
          <button className="lg:mt-4 py-[1rem] px-[2rem] md:py-[1.5rem] md:px-[4rem] bg-primary text-[1.4rem] lg:text-[1.7rem] transform bg-opacity-100 hover:bg-opacity-50 hover:text-white hover:opacity-1 transition-all duration-300 border-[5px] border-primary hover:border-white font-bold text-white rounded-full ">
            Book A Flight Now
          </button>
          </div>

       
        </div>

        {/* Second Box - Stacked on the side */}
        <div
          className="bg-cover md:col-span-1 md:row-span-1 col-span-2 row-span-2 bg-cover bg-center rounded-3xl p-6 h-[388px] flex flex-col justify-center text-white"
          style={{ backgroundImage: `url(${flight})` }}
        >
        </div>

        {/* Third Box - Stacked below the second */}
        <div
          className="md:col-span-1 md:row-span-1 col-span-2 row-span-2 bg-cover bg-center rounded-3xl p-6 h-[388px] flex flex-col justify-center text-white"
          style={{ backgroundImage: `url(${phone})` }}
        >
        </div>
      </motion.div>
    </div>
  );
};

export default Book;
