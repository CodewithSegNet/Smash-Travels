import book from "../assets/image_fx.png";
import flight from "../assets/planeimage.png";
import phone from "../assets/image.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";

const Book = () => {
  const settings1 = {
    dots: false,
    lazyLoad: true,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    dots: false,
    lazyLoad: true,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 pt-[5rem] pb-[4rem] md:pt-[6rem] md:pb-[5rem]">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2"
      >
        {/* First Box */}
        <div
          className="col-span-2 row-span-2 bg-cover bg-center h-[400px] md:h-[600px] lg:h-[800px] rounded-[20px] p-6 flex flex-col justify-center items-center text-white"
          style={{ backgroundImage: `url(${book})` }}
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

        {/* Second Box */}
  <div className="h-auto overflow-hidden rounded-[20px] relative col-span-2 lg:col-span-1">
  <Slider {...settings1}>
    {[flight, book, phone].map((image, idx) => (
      <div
        key={idx}
        className="h-[388px] flex justify-center items-center rounded-[20px] overflow-hidden relative"
      >
        <img
          src={image}
          alt={`Slide ${idx + 1}`}
          className="w-full h-full object-cover"
        />
        {/* Button Container */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button className="py-[.7rem] px-[2rem] md:py-[.5rem] md:px-[2rem] text-white bg-primary md:text-[1.3rem] lg:text-[1.2rem] hover:bg-opacity-80 border-[3px] border-primary hover:border-white transition-all duration-300 font-bold rounded-full">
            Book Now
          </button>
        </div>
      </div>
    ))}
  </Slider>
</div>


        {/* Third Box */}
        <div className="h-auto hidden lg:block overflow-hidden rounded-[20px]">
          <Slider {...settings2}>
            {[phone, flight, book].map((image, idx) => (
              <div
                key={idx}
                className="h-[388px] flex justify-center items-center rounded-[20px] overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default Book;
