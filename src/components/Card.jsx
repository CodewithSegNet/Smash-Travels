import Card from "../components/Card2";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import img1 from '../assets/image_fx_.png';

const CardData = [
  { src: img1, alt: "Travel Package 1", title: "Exclusive Flight Offer" },
];

const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-screen-2xl mx-auto"
      >
        <div className="mx-6">
          
          <Card slides={CardData} settings={settings} />
        </div>
      </motion.div>
    </section>
  );
};

export default Cards;
