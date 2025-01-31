import React from "react";
import img from "../assets/card6.webp"
import img1 from "../assets/card1.webp"
import img2 from "../assets/card5.webp"
import img3 from "../assets/card2.webp"
import img4 from "../assets/card3.webp"
import img5 from "../assets/card4.webp"
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'



const read = [
  {
    img: img1,
    title: "50% Deposit", 
    description: "Begin your journey by making an initial deposit of 50% of the total service fee. This secures your spot and allows us to commence the travel process on your behalf."
  },
  {
    img: img3,
    title: "Signing of Refund Agreement Document",
    description: "A formal refund agreement document is signed by both Smash Travels and the client. This ensures transparency and guarantees the client’s funds are safeguarded in case of unforeseen circumstances."
  },
  {
    img: img4,
    title: "Payment Invoice Issuance",
    description: "Upon deposit confirmation, we provide you with a detailed payment invoice for your records, outlining the services covered and the remaining balance."
  },
  {
    img: img5,
    title: "Submission of Required Documents", 
    description: "Clients are required to submit essential documents for visa processing. These include identification documents, proof of qualifications, and any additional items specified in the checklist we provide."
  },
  {
    img: img,
    title: "Processing of Job Offer Letter and Biometrics Appointment",
    description: "We handle the preparation and submission of your job offer letter to expedite the process. Once completed, we secure a biometrics appointment at the relevant embassy for further visa processing."
  },
  {
    img: img2,
    title: "Visa Issuance",
    description: "Following successful document verification and embassy protocols, your visa is issued, marking the final step of your journey preparation. We ensure timely delivery and guide you on the next steps for your travel plans."
  }
];

const Whychooseus = () => {
  return (
    <motion.div 
       variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true}}
    className="max-w-[1289px] mx-auto my-[3rem] md:my-[4rem]">
      <div className="pt-[3rem]">

      </div>
      <div>
        <h2 className="text-center font-meutasRegular text-2xl lg:text-4xl text-regular font-bold mb-4 md:mb-6">Our Visa Process</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
        {read.map((item, index) => (
          <div
            key={index}
            className="p-6"
          >
            <div className="relative"> 
            <img src={item.img} alt={item.title} className="w-full relative h-52 object-contain rounded-t-[10px]" />
            <div className="absolute top-[21px] left-[14px] flex text-sm  justify-center items-center rounded-full w-10 h-10 z-20 text-white bg-black font-semibold bg-opacity-40">
            <span>{index + 1}</span>
            </div>
            </div>
         
            <div className="pt-2 px-2">
              <h3 className="font-semibold font-meutasBold text-regular md:text-xl">{item.title}</h3>
              <p className="pt-2 leading-[1.5] font-meutasLight text-sm md:text-md text-regular">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Whychooseus;
