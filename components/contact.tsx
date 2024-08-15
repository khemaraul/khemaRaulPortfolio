"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";

interface FormData {
  email: string;
  message: string;
}

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const [formData, setFormData] = useState<FormData>({
      email: '',
      message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent(`Job Opportunity from Recruiter.`)}&body=${encodeURIComponent(`Hello Khema,\n\n${formData.message}\n\nThanks`)}`;

    // Open the user's email client with the pre-filled data
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-24 sm:mb-28 w-full text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <div className="grid max-[989px]:grid-cols-1 grid-cols-[0.8fr_1.2fr] gap-12 items-center">
        <div className="flex flex-col justify-evenly items-center">
          <div className="text-lg text-gray-700 dark:text-white/80 my-[5px]">
            Please contact me directly at{" "}
            <a className="underline text-[#ec6608]" href="mailto:khemaraul@gmail.com">
              khemaraul@gmail.com
            </a>{" "}
          </div>
          <div className="text-lg text-gray-700 dark:text-white/80 my-[5px]">or</div>
          <div className="text-lg text-gray-700 dark:text-white/80 my-[5px]">through this form <span className="max-[989px]:hidden">👉</span><span className="hidden max-[989px]:block">👇</span></div>
        </div>

        <form
          className="mt-10 mr-8 max-[989px]:mr-0 flex flex-col dark:text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="email"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            onChange={handleChange}
            value={formData.email}
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            onChange={handleChange}
            value={formData.message}
          />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
