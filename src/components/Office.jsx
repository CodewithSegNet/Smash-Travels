import React from "react";
import phone from "../assets/phoneOutline.svg";
import mail from "../assets/mail.svg";

const Office = () => {
  const offices = [
    {
      id: 1,
      title: "Head Office",
      address:
        "2 King Jaja Street, Hillside Estate, Works & Housing Gwarinpa, Abuja - NIGERIA ",
      phone: "+234 90097403297",
      email: "hello@smashtravels.com",
      supportEmail: "support@smashtravels.com",
    },
    {
      id: 2,
      title: "Branch Office",
      address:
        "Suit 103/104, Workcentral, 5 Alhaji Tokan street Alaka Estate Surulere Lagos",
      phone: "+234 90097403297",
      email: "hello@smashtravels.com",
      supportEmail: "support@smashtravels.com",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto">
 <div className="flex-col md:flex-row  mx-6 text-regular mt-[6rem] md:mt-[10rem] mb-[3rem] md:mb-[5rem] flex justify-center shadow-md rounded-2xl py-[44px] gap-[50px] lg:gap-[120px]">
      {offices.map((item) => {
        return (
          <div key={item.id} className="flex flex-col justify-center text-center font-meutasRegular items-center">
            <div className="flex flex-col px-6">
            <div>
              <h3 className="font-meutasRegular text-xl font-bold md:text-3xl mb-3">
                {item.title}
              </h3>
            </div>
            <div className="text-center lg:text-xl font-meutasRegular mb-7">
              {item.address}
            </div>
            <div className="text-xl font-meutasRegular">
              <div className="mb-3 flex gap-2 ">
                <img src={phone} alt="phone" />
                <span className="text-sm lg:text-xl">{item.phone}</span>
              </div>
              <div className="mb-3 flex gap-2">
                <img src={mail} alt="email" />
                <span className="text-sm lg:text-xl font-meutasRegular">{item.email}</span>
              </div>
              <div className="flex gap-2">
                <img src={mail} alt="support email" />
                <span className="text-sm lg:text-xl">{item.supportEmail}</span>
              </div>
            </div>
          </div>
    
            </div>
             );
            })}
            </div>

    </div>
   
  );
};

export default Office;
