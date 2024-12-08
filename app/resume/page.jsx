"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, } from "react-icons/fa";

import { SiTailwindcss, SiDjango, SiFlask, SiMysql, SiPostgresql, SiGit } from "react-icons/si";

const about = {
  title: "About me",
  description: 
    "I am a passionate and detail-oriented full-stack software developer with a background in Biochemistry,blending analytical precision with creative problem-solving. Over the past year, I’ve honed my expertise in developing robust web applications using technologies like Python, Django, React, and MySQL.My diverse skill set includes creating user-centric designs, optimizing back-end processes, and delivering scalable solutions.An avid learner and team player, I thrive on challenges and enjoy bringing ideas to life through code. Beyond development, I have a knack for writing, music, and storytelling, which enhance my ability to craft engaging digital experiences. Whether it's building innovative platforms like PLAN2LIVE or collaborating on team projects like TaskMaster, I am committed to creating meaningful impact through technology.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Unanam Victoria",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 7053830422",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "Riaahh20@yahoo.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
  };

const experience = {
  icon: '/assets/resume/approved.png',
  title: "My experience",
  description: "Below is a list of projects to show what i have been able to do",
  items: [
    {
      company: "ALX SWE",
      position: "Full Stack Software Engineer",
      duration: "2023-2024",
    },
    {
      company: "Women Techsters",
      position: "Frontend intern",
      duration: "Spring Internship 2024",
    },
    {
      company: "Intern Pulse",
      position: "Intern",
      duration: "2024",
    },
    {
      company: "1512 Computer Institute",
      position: "Operator",
      duration: "2013-2022",
    },
    {
      company: "Lorem Ipsum DOlor stuffing",
      position: "junior Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Lorem Ipsum Dolor",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
  ]
};

const education = {
  icon: '/assets/resume/education.png',
  title: "My education",
  description: "From Online courses to personal upskilling practices, I have done a lot of learning.",
  items: [
    {
      institution: "ALX SWE",
      degree: "Full Stack Software Engineer",
      duration: "2023-2024",
    },
    {
      institution: "W3 Schools",
      degree: "SOftware Development",
      duration: "2023-2024",
    },
    {
      institution: "Women Techsters",
      degree: "Software Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
   
  ]
};

const skills = {
  title: "My skills",
  description: "Below are the technologies I am skilled at",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
  ],
  
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return <motion.div 
  initial={{ opacity: 0 }} 
  animate={{
    opacity: 1,
    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
  }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index)=> {
                    return (
                    <li 
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-18 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index)=> {
                    return (
                    <li 
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-18 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.skillList.map((skill, index) => {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>;
                })}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
};

export default Resume;
