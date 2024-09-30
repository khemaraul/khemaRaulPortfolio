"use client";

import Image from "next/image";
import React from "react";
import { FaLinkedin, FaMapMarkedAlt, FaEnvelope, FaCalendarWeek, FaMapPin, FaCode, FaCertificate, FaGithub, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
export default function ResumeBackup() {
    const { ref } = useSectionInView("Resume", 0.5);
    let personalData = [
        {
            position: "Data Engineer",
            company_name: "ICICI Lombard",
            duration: "2022-2024",
            office_location: "Dadar, Mumbai",
            tagline: "Responsible for developing and deploying SPA and desktop applications",
            description: [
                "👉 Designed and implemented a SPA applications and APIs for the internal teams.",
                "👉 Integration of third-party APIs and implementation of integration of websites made by our team into publicly available android apps.",
                "👉 Collaborated with internal business teams to understand their requirements and performed automation which increased product functionality by 50%."
            ]
        },
        {
            position: "Software Engineer",
            company_name: "iConnect Info Solutions Pvt. Ltd.",
            duration: "2021-2022",
            office_location: "Airoli, Mumbai",
            tagline: "Responsible for developing and deploying web apps using react.js and node.js",
            description: [
                "👉 Ability to translate Wireframes and PSD Designs into functional web apps using HTML5, React , Node.js, and MSSQL and binding of UI elements to JavaScript object models",
                "👉 Creating RESTful services with Node.js",
                "👉 Work in a cross-functional team to deliver a complete user experience",
                "👉 Create Unit and Integration tests to ensure the quality of code",
                "👉 Be responsive to change requests and feature requests and write code that is cross-platform and cross-device compatible",
                "👉 Ability to wear many hats and learn new technologies quickly"
            ]
        },
        {
            position: "Software Developer",
            company_name: "Zeki Software Solutions Pvt. Ltd.",
            duration: "2020-2021",
            office_location: "Andheri, Mumbai",
            tagline: "Responsible for developing and debugging websites using Java(struts), Javascript, Bootstrap",
            description: [
                "👉 Developed a highly customizable, risk assessment systemfocused on design modularity and code flexibility. Handled all steps of the development lifecycle; from requirements gathering/estimating to customer support and enhancements. Worked as part of a remote team.",
                "👉 Development of User Interface using PHP and Mysql.",
                "👉 Creating client side web pages using Html, css, Javascript.",
                "👉 Creating a Web Api’s , charts and make a dynamic entries into a database."
            ]
        }
    ]
    let projects = [
        {
            duration: "2022-2024", 
            projectsList: [
                {project_name: "SLR", project_description: "Calculating the loss ratio of policies to aid business growth. Developed a utility for uploading masters and creating open spaces for formula-based calculations, reducing manual effort for multiple teams."},
                {project_name: "Garage Recommender", project_description: "Developed a solution for suggesting garages to customers based on their location, integrating MapMyIndia APIs for accuracy. Proposed integration with the mobile app, receiving positive feedback from the digital team."},
                {project_name: "NOVA Website", project_description: "Created a website for ICICI Lombard's startup accelerator program, streamlining communication with startups and coordinating product information. Gained knowledge of Azure Front Door (CDN) service."},
                {project_name: "Claims-AI", project_description: "Developed a project that allows users to select parts from a 3D car model, edit the estimated costs, and automatically send these estimations in PDF format to garages via email. This solution reduces manual effort, with part prices calculated based on specific parameters."},
                {project_name: "Group Health Insurance Premium Calculator", project_description: "Developed a premium calculator using linear regression algorithm, achieving 72% accuracy. Collaborated with the underwriting team for dataset preparation."},
                {project_name: "Email Utility", project_description: "Python API utilized to send emails both within and outside the organization."},
                {project_name: "Tax Automation", project_description: "Developed a desktop application for the taxation team to simplify GST-related calculations. This solution reduced their manual work by 70% and has gained their trust in the automation process."}
            ]
        },
        {
            duration: "2021-2022", 
            projectsList: [
                {project_name: "DVInvestments", project_description: "Developed a web application to help the team analyze risks and opportunities across asset classes. The application supports the creation of customer-based portfolios, fetches data directly from the NSE website using an API, and allows for real-time updates."},
            ]
        },
        {
            duration: "2020-2021", 
            projectsList: [
                {project_name: "Mahindra & Mahindra(Mahindra Rise)", project_description: ["Timesheet: https://timesheet.mahindrassg.com", "MahindraMitra: https://www.mahindramitra.com", "VMS : https://mm-vms.com"]},
                {project_name: "CRMs", project_description: ["CORP ETHICS: https://Wb.zekisolutions.com", "ZEKI CRM - Zeki Software Solutions Pvt Ltd.: https://books.zekisolutions.com", "ZEKI BROKERAGE", "SSMS BANDHAN: https://ssms.zekisolutions.com", "Paras Rampuria Engineers"]},
            ]
        },
        // {
        //     duration: "2019-2020", 
        //     projectsList: [
        //         {project_name: "Advanced", project_description: ["Payroll Management System(Instantpayzz): https://github.com/khemaraul/InstantPayzz"]},
        //         {project_name: "Simple", project_description: ["CakeBurgerHouse: https://github.com/khemaraul/CakeBurgerHouse"]},
        //     ]
        // }
    ]
    let passions = [
        {name: "Coding", description: "Passionate about building and optimizing software applications, always eager to learn new programming languages and techniques."},
        {name: "Space & Sci-Fi Interests", description: "I love watching sci-fi space movies and series; they constantly inspire me to think beyond the boundaries of the ordinary."},
    ]
  return (
    <section
      ref={ref}
      id="resume"
      className="scroll-mt-[6rem] w-full mx-4 mb-28 sm:mb-0 font-['arial'] rounded-[10px]"
    >
      <SectionHeading>Resume</SectionHeading>
      <motion.div
        className="flex-col justify-center items-center bg-white py-[40px] px-[40px] dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-3xl my-[5px] font-['raleway']">Khema Raul</div>
        <div className="text-lg text-[#ec6608] my-[5px]">Stamp 2 | Masters AI Student at DCU | Data Engineer | Ex ICICI Lombard | Python, Microsoft Azure, Javascript, React.js, Node.js</div>
        <div className="personalInfo flex flex-row items-center text-lg my-[10px]">
            <div className="text-[#AEAEAE]"><FaEnvelope /></div>
            <div className="alt"><a href="mailto:khemaraul@gmail.com">khemaraul@gmail.com</a></div>
            <div className="text-[#AEAEAE]"><FaGithub /></div>
            <div className="alt"><a href="https://github.com/khemaraul">github.com</a></div>
            <div className="text-[#AEAEAE]"><FaLinkedin /></div>
            <div className="alt"><a href="https://www.linkedin.com/in/khema-raul-970bba15b/?originalSubdomain=in" target="_blank">linkedin.com</a></div>
            <div className="text-[#AEAEAE] max-[989px]:hidden"><FaMapMarkedAlt /></div>
            <div className="max-[989px]:hidden">D09W6Y4, Ireland</div>
        </div>
        <div className="hidden max-[989px]:personalInfo max-[989px]:flex max-[989px]:flex-row max-[989px]:items-center max-[989px]:text-lg max-[989px]:my-[10px]">
            <div className="max-[989px]:text-[#AEAEAE] max-[989px]:mr-2"><FaMapMarkedAlt /></div>
            <div className="max-[989px]:block">D09W6Y4, Ireland</div>
        </div>
      </motion.div>
      <motion.div
        className="w-full grid grid-cols-[1.8fr_1.2fr] max-[989px]:grid-cols-1 gap-8 items-start bg-white p-[40px] dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col justify-evenly">
            <div className="flex flex-col justify-evenly mb-6">
                <div className="text-xl text-[#AEAEAE] border-b-2 border-[#AEAEAE]">SUMMARY</div>
                <div className="text-sm mt-4">Currently pursuing a Master's in Computing with a specialization in Artificial Intelligence at DCU. I am an experienced Data Engineer with 4+ years in software development and deployment, proficient in both frontend and backend technologies. My technical skill set includes Python, React.js, Node.js, JavaScript, and TypeScript, along with expertise in Microsoft Azure for cloud deployments and GitHub Actions for CI/CD pipelines. I am passionate about leveraging innovative technologies to deliver high-impact results and continually enhance software delivery processes. Eager to contribute and grow in the dynamic field of AI and software engineering.</div>
            </div>
            <div className="flex flex-col justify-evenly mb-6">
                <div className="text-xl text-[#AEAEAE] border-b-2 border-[#AEAEAE]">EXPERIENCE</div>
                {personalData.map((ele,index) => (
                    <div key={index}>
                        <div className="text-2xl font-bold mt-6">{ele.position}</div>
                        <div className="flex flex-row justify-between items-center my-2">
                            <div className="text-md text-[#ec6608] font-bold">{ele.company_name}</div>
                            <div className="flex flex-row justify-evenly">
                                <div className="flex flex-row justify-between items-center"><span className="pr-[1px]"><FaCalendarWeek /></span><span className="px-2">{ele.duration}</span></div>
                                <div className="flex flex-row justify-between items-center"><span className="pr-[1px]"><FaMapPin /></span><span className="px-2">{ele.office_location}</span></div>
                            </div>
                        </div>
                        <div className="my-4">{ele.tagline}</div>
                        {ele.description.map((item,index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </div>
                    )
                )}
            </div>
            <div className="flex flex-col justify-evenly mb-6">
                <div className="text-xl text-[#AEAEAE] border-b-2 border-[#AEAEAE]">EDUCATION</div>
                <div className="text-2xl font-bold mt-6">Master's in Computing-Artificial Intelligence</div>
                <div className="flex flex-row justify-between items-center my-4">
                    <div className="text-md text-[#ec6608] font-bold">Dublin City University</div>
                    <div className="flex flex-row justify-evenly mr-[18px]">
                        <div className="flex flex-row justify-between items-center"><span className="pr-[1px]"><FaCalendarWeek /></span><span className="px-2">2024-2025</span></div>
                        <div className="flex flex-row justify-between items-center"><span className="pr-[1px]"><FaMapPin /></span><span className="px-2">Dublin 9, Ireland</span></div>
                    </div>
                </div>
                <div className="text-2xl font-bold mt-6">Bachelor of engineering Information Technology</div>
                <div className="flex flex-row justify-between items-center my-4">
                    <div className="text-md text-[#ec6608] font-bold">Savitribai Phule Pune University</div>
                    <div className="flex flex-row justify-evenly">
                        <div className="flex flex-row justify-between items-center"><span className="pr-[1px]"><FaCalendarWeek /></span><span className="px-2">2015-2019</span></div>
                        <div className="flex flex-row justify-between items-center"><span className="pr-[1px]"><FaMapPin /></span><span className="px-2">Pune, Maharashtra</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-evenly">
            <div className="flex flex-col justify-evenly mb-6">
                <div className="text-xl text-[#AEAEAE] border-b-2 border-[#AEAEAE]">PROJECTS</div>
                {projects.map((element,index) => (
                    <div key={index} className="text-sm flex flex-row justify-between items-baseline mt-4">
                        <div className="text-lg text-[#ec6608] mr-[10px]"><FaCode /></div>
                        <div className="flex flex-col justify-evenly">
                            <div className="text-xl text-[#AEAEAE]">{element.duration}</div>
                            {element.projectsList.map((items,index) => (
                                <div key={index} className="flex flex-col justify-evenly">
                                    <div className="text-sm font-bold">{items.project_name}</div>
                                    {typeof(items.project_description) === "string" ? <div className="text-sm">{items.project_description}</div> : <div className="text-sm">{items.project_description.join(",")}</div>}
                                </div>
                            ))}
                        </div>
                    </div>)
                )}
            </div>
            <div className="flex flex-col justify-evenly">
            <div className="flex flex-col justify-evenly mb-6">
                <div className="text-xl text-[#AEAEAE] border-b-2 border-[#AEAEAE]">SKILLS</div>
                <div className="text-sm flex flex-row items-center mt-4">
                    <div className="text-sm border-b-2 border-[#ec6608] mx-[5px]">Python</div>
                    <div className="text-sm border-b-2 border-[#ec6608] mx-[5px]">Javascript</div>
                    <div className="text-sm border-b-2 border-[#ec6608] mx-[5px]">React.js</div>
                    <div className="text-sm border-b-2 border-[#ec6608] mx-[5px]">Node.js</div>
                    <div className="text-sm border-b-2 border-[#ec6608] mx-[5px]">Tailwindcss</div>
                    <div className="max-[989px]:hidden text-sm border-b-2 border-[#ec6608] mx-[5px]">Microsoft Azure</div>
                    <div className="max-[989px]:hidden text-sm border-b-2 border-[#ec6608] mx-[5px]">MS-SQL</div>
                </div>
                <div className="max-[989px]:flex hidden text-sm flex-row items-center mt-4">
                    <div className="text-sm border-b-2 border-[#ec6608] mx-[5px]">Microsoft Azure</div>
                    <div className="text-sm border-b-2 border-[#ec6608] mx-[5px]">MS-SQL</div>
                </div>
            </div>
            </div>
            <div className="flex flex-col justify-evenly">
            <div className="flex flex-col justify-evenly mb-[0.8rem]">
                <div className="text-xl text-[#AEAEAE] border-b-2 border-[#AEAEAE]">CERTIFICATION</div>
                <div className="text-sm flex flex-row items-center mt-4">
                    <div className="text-lg text-[#ec6608] mr-[10px]"><FaCertificate /></div>
                    <div className="text-sm mx-[5px]">React - The Complete Guide 2024 (incl. Next.js, Redux)</div>
                </div>
            </div>
            </div>
            <div className="flex flex-col justify-evenly mb-6">
                <div className="text-xl text-[#AEAEAE] border-b-2 border-[#AEAEAE] py-[7px]">PASSIONS</div>
                {passions.map((item,index) => (
                <div key={index} className="text-md grid grid-cols-[0.2fr_1.8fr] gap-2 items-start mt-4">
                    <div className="text-xl text-[#ec6608] p-[10px] m-[5px]"><FaStar /></div>
                    <div className="flex flex-col justify-evenly">
                        <div className="text-md font-bold">{item.name}</div>
                        <div className="text-sm">{item.description}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </motion.div>
    </section>
  );
}