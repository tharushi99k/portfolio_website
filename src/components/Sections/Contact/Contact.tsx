import React from "react";
import ContactCard from "../../Cards/ContactCard";
import PersonalDetails from "@/components/Cards/PersonalDetails";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-[5rem] pb-[3rem] w-full ">
      {/* Contact Header */}
      <div className="text_head flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Contact <span className="text-[#01F191]">Me</span>
        </h1>
      </div>
      <div className="pt-[4rem] w-[90%] sm:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 items-center md:pt-[7rem]">
        <ContactCard />

        <div className="flex flex-col items-center justify-center w-full gap-6 sm:gap-8 lg:gap-10">
          <PersonalDetails
            image="/images/contact/call.png"
            alt="Call Icon"
            title="Not Available"
          />
          <PersonalDetails
            image="/images/contact/email.png"
            alt="Email Icon"
            title="tharushinishshanka02@gmail.com"
          />
          <PersonalDetails
            image="/images/contact/location.png"
            alt="Location Icon"
            title="Gampaha District"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
