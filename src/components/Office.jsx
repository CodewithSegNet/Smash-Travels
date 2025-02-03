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
    <div className="xl:mt-[250px] md:mt-[200px] mt-[70px] mb-[60px] flex justify-center shadow-[-1px_0px_7px_1px_rgba(0,_0,_0,_0.1)] mx-[64px] rounded-2xl py-[64px]  gap-[120px]">
      {offices.map((item) => {
        return (
          <div className="w-[472px] flex justify-center items-center flex-col">
            <div>
              <h3 className="font-meutasRegular text-[40px] mb-3">
                {item.title}
              </h3>
            </div>
            <div className="text-center text-xl font-meutasLight mb-10">
              {item.address}
            </div>
            <div className="text-xl font-meutasLight ">
              <div className="mb-3 flex gap-2 ">
                <img src={phone} alt="phone" />
                <span>{item.phone}</span>
              </div>
              <div className="mb-3 flex gap-2">
                <img src={mail} alt="email" />
                <span>{item.email}</span>
              </div>
              <div className="flex gap-2">
                <img src={mail} alt="support email" />
                <span>{item.supportEmail}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Office;
