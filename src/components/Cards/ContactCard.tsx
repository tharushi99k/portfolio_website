import React from "react";

const ContactCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-auto border border-[#16EA99]  sm:p-6 py-8 rounded-2xl">
      <h2 className="text-lg sm:text-xl lg:text-2xl mb-5">
        Let's Work Together
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] w-full p-4 ">
        <input
          type="text"
          placeholder="Name"
          className="col-span-2 sm:col-span-1 sm:block py-2 outline-none text-white bg-[#2F2D36] rounded-md px-3 "
        />
        <input
          type="email"
          placeholder="Email"
          className="col-span-2 sm:col-span-1  py-2 outline-none text-white bg-[#2F2D36] rounded-md px-3"
        />
        <input
          type="text"
          placeholder="Subject"
          className="col-span-2 py-2 outline-none text-white bg-[#2F2D36] rounded-md px-3"
        />

        <select className="col-span-2 py-2 outline-none text-white bg-[#2F2D36] rounded-md px-3">
          <option value="" disabled selected hidden>
            Services
          </option>
          <option value="web-developer">Web Development</option>
          <option value="ux-ui-designer">UX/UI Design</option>
          <option value="mobile-developer">Mobile Development</option>
          <option value="fullstack-developer">Fullstack Development</option>
        </select>

        <textarea
          placeholder="Message"
          className="col-span-2 py-2 mb-[1.5rem] outline-none text-white bg-[#2F2D36] rounded-md px-3 w-full"
          rows={4}
        />
        <button className=" col-span-2  py-2 mb-6   w-full outline-none text-black font-semibold bg-[#16EA99] hover:bg-[#13d58b] rounded-md px-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
