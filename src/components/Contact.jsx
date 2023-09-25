import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex w-full items-center justify-center bg-[#0C2D48] p-4 pt-24"
    >
      <form
        method="POST"
        action="https://getform.io/f/02c422e0-b70e-4691-a1b9-f0fc1b804ad4"
        className="flex w-full max-w-[700px] flex-col"
      >
        <div className="pb-8 text-xl">
          <p className="inline border-b-4 border-red-600 text-4xl font-bold text-gray-300">
            Contact
          </p>
          <p className="py-4 text-2xl text-gray-300">
            // Submit the form below or sent an email to tatasuppakrit@gmail.com
          </p>
        </div>
        <input
          className="rounded-md bg-[#ccd6f6] p-2 text-black placeholder:text-slate-500"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 rounded-md bg-[#ccd6f6] p-2 text-black placeholder:text-slate-500"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="min-h-[100px] rounded-md bg-[#ccd6f6] p-2 text-black placeholder:text-slate-500"
          name="message"
          rows="8"
          placeholder="Message"
        ></textarea>
        <button className="my-8 mx-auto flex items-center rounded-lg border-2 px-4 py-3 text-white duration-200 hover:border-red-600 hover:bg-red-600 active:bg-white">
          Email me
        </button>
      </form>
    </div>
  );
};

export default Contact;
