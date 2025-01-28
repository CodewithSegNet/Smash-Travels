import book from "../assets/image_fx.png";
import flight from "../assets/planeimage.png";
import phone from "../assets/image.png";
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from "react";

const BackgroundSlideshow = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return images[currentImageIndex];
};

const Book = () => {
  const bookImages = [book, flight, phone];
  const flightImages = [flight, book, phone];
  const phoneImages = [phone, book, flight];

  // Book background change every 3 seconds
  const [bookBackground, setBookBackground] = useState(bookImages[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setBookBackground((prev) => {
        const nextIndex = (bookImages.indexOf(prev) + 1) % bookImages.length;
        return bookImages[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Flight background change every 5 seconds
  const [flightBackground, setFlightBackground] = useState(flightImages[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setFlightBackground((prev) => {
        const nextIndex = (flightImages.indexOf(prev) + 1) % flightImages.length;
        return flightImages[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Phone background change every 7 seconds
  const [phoneBackground, setPhoneBackground] = useState(phoneImages[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setPhoneBackground((prev) => {
        const nextIndex = (phoneImages.indexOf(prev) + 1) % phoneImages.length;
        return phoneImages[nextIndex];
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex justify-center px-7 md:px-7 lg:px-4 pt-[5rem] pb-[4rem] md:pt-[6rem] md:pb-[5rem]">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="grid w-[100%] lg:w-[100%] text-left lg:grid-cols-3 lg:grid-rows-2 gap-4"
      >
        {/* First Box - Takes full height and width */}
        <div
          className="col-span-2 row-span-2 bg-cover bg-center h-[388px] md:h-[800px] rounded-[20px] p-6 flex flex-col justify-center text-white"
          style={{ backgroundImage: `url(${bookBackground})` }}
        >
          <h3 className="font-meutasBold text-4xl md:text-6xl md:p-6 lg:text-7xl leading-normal md:!leading-extra-loose">
            Book your Flights Today With <span className="text-primary">Smash Travels</span>
          </h3>
          <div className="mx-auto mt-[1rem]">
            <button className="lg:mt-1 py-[.7rem] px-[2rem] md:py-[1.3rem] md:px-[4rem] bg-primary md:text-[1.3rem] lg:text-[1.6rem] hover:bg-opacity-80 border-[5px] border-primary hover:border-[5px] hover:border-white transition-all duration-300 font-bold rounded-full">
              Book A Flight Now
            </button>
          </div>
        </div>

        {/* Second Box - Stacked on the side */}
        <div
          className="bg-cover md:col-span-1 md:row-span-1 col-span-2 row-span-2 bg-center rounded-[20px] p-6 h-[388px] flex flex-col justify-center text-white"
          style={{ backgroundImage: `url(${flightBackground})` }}
        >
          <div className="mx-auto mt-[14rem]">
            <button className="lg:mt-4 py-[.7rem] px-[2rem] md:py-[.5rem] md:px-[2rem] bg-primary md:text-[1.3rem] lg:text-[1.2rem] hover:bg-opacity-80 border-[5px] border-primary hover:border-[5px] hover:border-white transition-all duration-300 font-bold rounded-full">
              Book Now
            </button>
          </div>
        </div>

        {/* Third Box - Stacked below the second */}
        <div
          className="hidden md:col-span-1 md:row-span-1 col-span-2 row-span-2 bg-cover bg-center rounded-[20px] p-6 h-[388px] md:flex md:flex-col justify-center text-white"
          style={{ backgroundImage: `url(${phoneBackground})` }}
        >
        </div>
      </motion.div>
    </div>
  );
};

export default Book;
