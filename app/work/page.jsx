"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Pinknote",
    description: "A diary and library all in one webapp",
    stack: [{ name: "Html5" }, { name: "Tailwindcss" }, { name: "Javascript" }, { name: "Django" }, { name: "Sqlite3" }],
    image: "/assets/work/pinknote.png",
    live: "https://personal-library-7-f9vs.onrender.com/",
    github: "https://github.com/DevUnanam/Personal-library.git",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Wrkman",
    description: "A platform for users to seek and book the services of professional artisans",
    stack: [{ name: "Tailwindcss" }, { name: "Javascript" }, { name: "Html 5" }, { name: "Django" }, { name: "Postgresql" }],
    image: "/assets/work/Artisan.png",
    live: "https://wrkman-g1h3.onrender.com/",
    github: "https://github.com/DevUnanam/wrkman.git",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Pulsewell",
    description: "An online platform for husers to keep track of their wellness jounrney",
    stack: [{ name: "Tailwindcss" }, { name: "Javascript" }, { name: "Html 5" }, { name: "Django" }, { name: "Postgresql" }],
    image: "/assets/work/pulsewell.png",
    live: "https://pulsewell.onrender.com/",
    github: "https://github.com/DevUnanam/pulsewell.git",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Restaapp",
    description: "A webapp where customers can place orders for food from restaurants and get it delivered to their location",
    stack: [{ name: "Tailwind" }, { name: "Django" }, { name: "Javascript" }],
    image: "/assets/work/newimg1.png",
    live: "https://restapp-vzx2.onrender.com",
    github: "https://github.com/DevUnanam/restapp.git",
  },

];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
       }}
      className="min-h-[88vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                   <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                </Link>
                <Link href={project.github}>
                   <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=> {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 button-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
