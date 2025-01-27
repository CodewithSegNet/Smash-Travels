import React, { useState, useEffect, useRef } from "react";
import Carousel from "./carousel";
import { fadeIn } from "../variants";
import { motion, useInView, useAnimation } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partner from "../assets/image11.png"
import partner2 from "../assets/image6.png"
import partner3 from "../assets/image7.png"
import partner4 from "../assets/image8.png"
import partner5 from "../assets/image9.png"
import partner6 from "../assets/partnerimage.png"
import partner7 from "../assets/partnerimage1.png"




const BookingsPartner = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const startCounter = () => {
    if (hasStarted) return;
    setHasStarted(true);

    const target = 5000;
    const duration = 3000;
    const increment = target / (duration / 16);

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, 16);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);



  const carouselData1 = [
    { src: partner, alt: "partners with aero" },
    { src: partner2, alt: "partners with airplane peace" },
    { src: partner3, alt: "partners with ibom air" }, 
    { src: partner4, alt: "partners with dana airs"},
    { src: partner5, alt: "partners with united nigeria"},
    { src: partner6, alt: "partners with arik"},
    { src: partner7, alt: "partners with AZMAN"}

  ];


  const sliderSettings1 = {
    dots: false,
    infinite: true,
    lazyLoad: 'ondemand',
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true, 
    centerPadding: '0', 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-screen-2xl w-[100%] mx-auto px-7">
      <div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl lg:text-4xl text-regular font-meutasRegular font-bold text-center">Successful Bookings</h1>
        </motion.div>

        <motion.div
   variants={fadeIn(1)}
         animate={controls} 
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: true }}
           ref={ref}
          onViewportEnter={startCounter}
          className="py-[3rem] lg:py-[5rem] font-black text-center text-4xl lg:text-7xl font-meutasBold text-primary"
        >
          <span>+{Math.floor(count).toLocaleString()}</span>
        </motion.div>

      </div>
      <div className="items-center mt-12 text-center">
      <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
      className="text-2xl lg:text-4xl text-regular font-bold font-meutasRegular text-center">Our Partners</motion.h1>

      <div className="flex lg:mt-[4rem] md:mt-[3rem] mt-[2rem] w-full">
        <Carousel slides={carouselData1} settings={sliderSettings1}/>
      </div>
    </div>
    </section>
  );
};

export default BookingsPartner;
