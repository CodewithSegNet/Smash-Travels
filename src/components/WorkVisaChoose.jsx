import React from "react";
import img from "../assets/choose6.webp"
import img1 from "../assets/choose1.webp"
import img2 from "../assets/choose2.webp"
import img3 from "../assets/choose3.webp"
import img4 from "../assets/choose4.webp"
import img5 from "../assets/choose5.webp"
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'



const read = [
  {
    img: img1,
    title: "Proven Expertise in Visa Processing", 
    description: "With years of experience in work visa facilitation, Smash Travels has built a reputation for efficiency and success. We understand the complexities of visa applications and handle the process with precision to give you peace of mind."
  },
  {
    img: img2,
    title: "Transparent and Secure Process",
    description: "Our process is clear and secure at every step. From the initial deposit to visa issuance, we keep you informed and ensure all transactions and agreements are transparent."
  },
  {
    img: img3,
    title: "Comprehensive Document Assistance",
    description: "Navigating documentation can be challenging, but we’re here to simplify it. We guide you through the submission of required documents, ensuring everything is in place for a successful application."
  },
  {
    img: img4,
    title: "Strong Employer Network", 
    description: "We work with trusted employers and agencies abroad to help secure valid job offer letters. This minimizes the risks and ensures your application is supported by legitimate opportunities."
  },
  {
    img: img5,
    title: "Timely Biometrics and Embassy Scheduling",
    description: "Smash Travels ensures you’re well-prepared for the biometrics stage. We coordinate with embassies to secure appointments promptly, keeping your application on track."
  },
  {
    img: img,
    title: "Refund Assurance",
    description: "Our refund agreement provides additional peace of mind. In rare cases where the process doesn’t proceed as planned, your funds are safeguarded, showcasing our commitment to fairness and client satisfaction."
  }
];

const WorkVisaWhychooseus = () => {
  return (
    <motion.div 
       variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true}}
    className="max-w-[1289px] mx-auto pt-[4.4rem] pb-[3rem] md:pb-[0rem] md:pt-[11.5rem] lg:pt-[13.5rem]">
      <div className="mx-6">
      <div>
        <h2 className="text-center font-meutasRegular text-2xl lg:text-4xl text-regular font-bold mb-[1.7rem] md:mb-[3rem]">Why Choose Us</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-8">
        {read.map((item, index) => (
          <div
            key={index}
            className="text-regular lg:pb-[.6rem] bg-white rounded-xl"
          >
            <img src={item.img} alt={item.title} className="w-full h-52 object-contain rounded-t-[10px]" />
            <div className="pt-2 px-2">
              <h3 className="font-semibold font-meutasRegular text-regular md:text-xl">{item.title}</h3>
              <p className="pt-2 leading-[1.5] font-meutasLight text-sm md:text-md text-regular">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    
    </motion.div>
  );
};

export default WorkVisaWhychooseus;
