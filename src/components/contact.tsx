import React, { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'


interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_lxp0w0t",
        "template_61qm6hh",
        {
          from_name: form.name,
          to_name: "DIGITAL LOOP MARKETING",
          from_email: form.email,
          to_email: "gaikwadsiddharth039@gmail.com",
          message: form.message,
        },
        "2FFcbqUG923LjfNUN"
      )
      .then(
        (response: EmailJSResponseStatus) => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: any) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
        data-aos="fade-up"
        className=" bg-transparent">
        <div className="lg:mx-80 h-1 w-80 font-bold bg-gradient-to-l from-orange-500 rounded"></div>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center  text-orange-500">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-medium text-center text-black text-2xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-black font-bold mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className=" border  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white border-gray-600 placeholder-black  focus:ring-secondary-500  shadow-sm-light shadow-lg shadow-black"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-black  font-bold mb-4">Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className="block p-3 w-full border  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  bg-white border-gray-600 placeholder-black  focus:ring-secondary-500  shadow-lg shadow-black"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="text-black font-bold mb-4 ">Your Message</span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium shadow-lg shadow-black"
          />
        </label>

        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-black  bg-orange-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-xl shadow-black"
        >
          {loading ? "Sending Message..." : "Send Message"}
        </button>
      </form>
    </div>
    <div className="my-3 relative left-0 top-0 lg:ml-[950px]   h-1 w-80 font-bold bg-gradient-to-r from-orange-500 rounded"></div>
    </section>
  );
};

export default Contact;