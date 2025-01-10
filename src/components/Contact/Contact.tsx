import React from "react";
import ContactCard from "../Cards/ContactCard";
import PersonalDetails from "../PersonalDetails";

const Contact = () => {
  return (
    <div className="flex flex-col items-center pt-[5rem] pb-[3rem] ">
      <div className="text_head flex items-center justify-center ">
        <h1>
          Contact <span className="text-[#01F191]">Me</span>
        </h1>
      </div>
      <div className="pt-[4rem] w-[80%] max-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 items-center md:pt-[7rem]">
        <ContactCard/>
        <div className="flex flex-col items-center justify-center w-full gap-3 sm:gap-8 lg:gap-10 ">
        <PersonalDetails 
        image='/images/contact/call.png'
        title='(+94)  12  345  567'
        />
        <PersonalDetails 
        image='/images/contact/email.png'
        title='tharushinishshanka02@gmail.com'
        />
        <PersonalDetails 
        image='/images/contact/location.png'
        title='Gampaha District '
        />

        </div>
        
      </div>
    </div>
  );
};

export default Contact;
