import React, { useRef, useEffect } from "react";
import { fadeIn } from '../variants';
import { motion, useInView, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blurIn } from '../variants';


const Carousel = ({ slides, settings }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    return (
      <motion.div
      variants={blurIn(1)}
      animate={controls} 
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        ref={ref}
        className="mx-auto w-full"
      >
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="">
              <img
                src={slide.src}
                alt={slide.alt}
                className="mx-auto w-[150px] md:w-[180px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    );
  };

  export default Carousel;