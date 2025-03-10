import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactCard = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbxNkTHtlBaEOMUQqozk_TPVu2RWemeLDuKFbCQUx60M3KMZuKl9botrOETUc2D8D4SX/exec";
    const formBody = new URLSearchParams();
    formBody.append("Name", formData.name);
    formBody.append("Email", formData.email);
    formBody.append("Subject", formData.subject);
    formBody.append("Message", formData.message);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody.toString(),
    })
      .then((res) => res.text())
      .then((data) => {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        }); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-auto border border-[#16EA99] p-3 rounded-2xl">
      <h2 className="text-lg sm:text-xl lg:text-2xl mb-5">Let's Work Together</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] w-full p-4 text-sm">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="col-span-2 sm:col-span-1 sm:block py-2 outline-none text-white  bg-[#2F2D36] rounded-md px-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="col-span-2 sm:col-span-1 py-2 outline-none text-white bg-[#2F2D36] rounded-md px-3"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="col-span-2 py-2 outline-none text-white bg-[#2F2D36] rounded-md px-3"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          className="col-span-2 py-2 mb-[1.5rem] outline-none text-white bg-[#2F2D36] rounded-md px-3 w-full"
          rows={4}
        />
        <button
          type="submit"
          className="col-span-2 py-2 mb-6 w-full outline-none text-black font-semibold bg-[#16EA99] hover:bg-[#13d58b] rounded-md px-4"
        >
          Submit
        </button>
      </form>
      
      {/* Success Message */}
      {successMessage && (
        <div className="bg-[#329DF0] text-white font-semibold py-2 px-4 rounded-md mt-4">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default ContactCard;



