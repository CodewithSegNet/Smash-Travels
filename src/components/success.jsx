import React, { useState, useEffect, useRef } from "react";
import { fadeIn } from "../variants";
import { motion, useInView, useAnimation } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessRate = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [hasStarted1, setHasStarted1] = useState(false);
  const [hasStarted2, setHasStarted2] = useState(false);
  const [hasStarted3, setHasStarted3] = useState(false);

  const startCounter = (target, setCount, setHasStarted, hasStarted) => {
    if (hasStarted) return;
    setHasStarted(true);

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

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      controls1.start("visible");
      startCounter(3200, setCount1, setHasStarted1, hasStarted1);
    }
    if (isInView2) {
      controls2.start("visible");
      startCounter(3200, setCount2, setHasStarted2, hasStarted2);
    }
    if (isInView3) {
      controls3.start("visible");
      startCounter(5400, setCount3, setHasStarted3, hasStarted3);
    }
  }, [isInView1, isInView2, isInView3, controls1, controls2, controls3]);

  return (
    <section className="max-w-screen-2xl pb-[3rem] lg:pb-[5rem] w-[100%] mt-[2rem] md:mt-[3rem] xl:mt-[4rem] mx-auto px-7">
      <div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl lg:text-4xl text-regular font-meutasRegular font-bold text-center">
            Success Rate
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-around w-full mx-auto text-center">
          {/* Counter 1 */}
          <motion.div
            variants={fadeIn(1)}
            animate={controls1}
            initial="hidden"
            whileInView="show"
            ref={ref1}
            className="pt-[3rem] lg:pt-[3.5rem] font-black text-center text-4xl lg:text-7xl font-meutasBold text-primary"
          >
            <span>+{Math.floor(count1).toLocaleString()}</span>

            <p className="text-newgray text-[16px] font-medium pt-4 font-meutasRegular">Processed Visa</p>
          </motion.div>

          {/* Counter 2 */}
          <motion.div
            variants={fadeIn(1)}
            animate={controls2}
            initial="hidden"
            whileInView="show"
            ref={ref2}
            className="pt-[3rem] lg:pt-[3.5rem] font-black text-center text-4xl lg:text-7xl font-meutasBold text-primary"
          >
            <span>+{Math.floor(count2).toLocaleString()}</span>

            <p className="text-newgray text-[16px] font-medium pt-4 font-meutasRegular">Successful Travels</p>

          </motion.div>

          {/* Counter 3 */}
          <motion.div
            variants={fadeIn(1)}
            animate={controls3}
            initial="hidden"
            whileInView="show"
            ref={ref3}
            className="pt-[3rem] lg:pt-[3.5rem] font-black text-center text-4xl lg:text-7xl font-meutasBold text-primary"
          >
            <span>+{Math.floor(count3).toLocaleString()}</span>
            <p className="text-newgray text-[16px] font-medium pt-4 font-meutasRegular">Annual Target</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessRate;
