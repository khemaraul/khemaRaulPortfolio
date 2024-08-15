"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function SectionDivider() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.div
      className="mt-32 mb-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <Link
        className={clsx(
          "flex w-full items-center justify-center px-3 py-3 text-[1.95rem] hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
        )}
        href={"#contact"}
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
      >
        {<IoIosArrowDropdownCircle />}

        {"Contact" === activeSection && (
          <motion.span
            className="bg-gray-100 rounded-[10px] absolute inset-0 -z-10 dark:bg-gray-800"
            layoutId="activeSection"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          ></motion.span>
        )}
      </Link>
    </motion.div>
  );
}
