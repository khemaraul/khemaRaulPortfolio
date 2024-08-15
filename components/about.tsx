"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28 max-[989px]:mx-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Dedicated <span className="font-medium">Data Engineer</span> with over{" "}
        <span className="font-medium">4+ years</span>{" "}of professional experience in{" "}
        <span className="font-medium">software development and deployment.</span>{" "}
        <span>Passionate about all kinds of technology, I have hands-on experience in both frontend and backend development. 
        Throughout my career, I have honed my skills in <span className="font-medium">Python, React.js, Node.js, JavaScript and TypeScript</span> languages.</span>{" "}
        <span className="italic">I have also utilized <span className="font-medium">Microsoft Azure</span> for deployment and <span className="font-medium">GitHub Actions</span> for CI/CD, ensuring efficient and reliable software delivery.</span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, you'll find me immersed in movies and tv series. I'm also an{" "}
        <span className="font-medium">avid learner</span>, always eager to explore new ideas and technologies. 
        I take pride in finding simpler solutions to complicated problems, constantly seeking efficiency and innovation in my work.
      </p>
    </motion.section>
  );
}
