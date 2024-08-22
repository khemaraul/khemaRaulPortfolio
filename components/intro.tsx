"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="w-full grid max-[989px]:grid-cols-1 grid-cols-[1.2fr_1.8fr] max-[989px]:justify-center gap-8 mx-4 mb-28 sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.div
        className="flex-col justify-center items-center p-[40px]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="w-full h-[25rem] bg-[url('../Images/DSC_0492-removebg.png')] bg-no-repeat bg-contain bg-center rounded-[10%_30%_50%_70%] border-2 border-solid bg-white shadow-2xl"></div>
      </motion.div>
      <motion.div
        className="flex-col justify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1
          className="flex flex-col my-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="font-bold py-2"><span className="pr-8">👋</span> I'm Khema Raul.</div>
          <div className="text-xl py-2"> I'm Mumbai based <span className="font-semibold">Data Engineer</span>, Former employee of <span className="font-semibold">ICICI Lombard</span>.</div>
          <div className="font-semibold text-xl py-2">Having <span className="font-semibold">4 years</span> of experience in <span className="font-semibold">development and deployment</span>.</div>
          <div className="text-xl py-2">I enjoy building  <span className="italic font-semibold">Websites and Desktop apps</span>.</div>
          <div className="text-xl py-2">My focus is to learn new technologies.</div>
        </motion.h1>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-start max-[989px]:justify-center gap-2 px-2 py-2 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <a
            className="p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.95rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:text-white/60"
            href="https://github.com/khemaraul"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            className="p-2 text-gray-700 flex items-center gap-2 text-[1.95rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:text-white/60"
            href="https://www.linkedin.com/in/khema-raul-970bba15b/?originalSubdomain=in"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            className="p-2 text-gray-700 flex items-center gap-2 text-[1.95rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:text-white/60"
            href="https://x.com/khemaraul"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-start max-[989px]:justify-center gap-4 px-2 py-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/Resume_Khema_Raul.pdf"
            download
          >
            Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <Link
            href="#contact"
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:text-white active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact{" "}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
