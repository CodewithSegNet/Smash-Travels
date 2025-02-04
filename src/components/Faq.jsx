import { useState, useRef } from "react";
import { fadeIn } from '../variants'
import { motion } from 'framer-motion';

const FAQ = () => {
  const answerRef = useRef(null);

  const [faqData] = useState([
    {
      question: "How do I book a flight with Smash Travels?",
      answer:
        "Simply visit our website, enter your travel details (departure, destination, and dates) in the flight search bar, and select from the available options. Complete the payment to confirm your booking.",
    },
    {
      question: "Can I book international flights through Smash Travels?",
      answer:
        "Yes, we offer international flight bookings to a wide range of destinations worldwide.",
    },
    {
      question: "Can I book flights for multiple passengers at once?",
      answer:
        "Yes, you can book flights for multiple passengers by adding their details during the booking process.",
    },
    {
      question: "What payment options are available?",
      answer:
        "We accept various payment options, including credit/debit cards, online banking, and e-wallets.",
    },
    {
      question: "Can I reschedule or cancel my flight after booking?",
      answer:
        "Yes, you can reschedule or cancel your flight by following the instructions in your booking confirmation email.",
    },
  ]);

  // Initialize with the first answer and index
  const [activeIndex, setActiveIndex] = useState(0);

  

  const handleQuestionClick = (index) => {
    setActiveIndex(index);

    // Scroll to the answer section on tab and mobile screens
    if (window.innerWidth <= 1024) {
      answerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <section>
      <motion.div 
         variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true}}
      className="flex gap-5 my-[5rem] items-start max-w-screen-2xl mx-auto px-6">
        {/* Card for Questions */}
        <div className="shadow-md rounded-xl p-[2rem] w-full">
          <ul className="p-0 flex gap-[40px] flex-col lg:flex-row">
            <div className="flex-1">
              <h2 className="text-left mb-[24px] text-xl text-regular font-meutasRegular">FAQ's.</h2>
              {faqData.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center text-sm md:text-md justify-between py-[25px] px-[10px] md:px-[24px] mb-[10px] border rounded-md font-meutasRegular text-regular font-semibold transition duration-300 cursor-pointer ${
                    activeIndex === index
                      ? "bg-regular text-white"
                      : "hover:text-white hover:bg-regular"
                  }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  <h3 style={{ margin: 0 }}>{item.question}</h3>
                  {activeIndex === index && (
                    <div>
                      <div className="w-5 h-5 md:w-6 md:h-6 border-4 rounded-full flex items-center justify-center text-primary border-primary text-2xl"></div>
                    </div>
                  )}
                </li>
              ))}
            </div>

            {/* Card for Answer */}
            <div 
              ref={answerRef}
            className="flex-1">
              <h2 className="text-left mb-4 text-xl text-regular font-meutasRegular">Ans.</h2>
              <div
              
                className="border rounded-xl bg-primary p-5 shadow-lg min-h-[300px] md:min-h-[500px]"
              >
                <p className="md:text-[26px] leading-[42px] md:leading-[54px] font-meutasRegular md:mt-[30px] text-white">
                  {faqData[activeIndex].answer}
                </p>
              </div>
            </div>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
