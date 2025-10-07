import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">FULLSTACK SOFTWARE DEVELOPER</span>
          <h1 className="h1">
            Hello I'm <br /> <span>Victoria Joseph</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
          I am a seasoned Django developer with over 3 years of experience in building robust web applications. My expertise lies in creating scalable backend systems, integrating APIs, and ensuring seamless user experiences. I am passionate about leveraging technology to solve real-world problems and I'm always eager to take on new challenges in the tech world.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            {/* <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button> */}
            <a
                href="/Victoria Joseph Resume.pdf"
                download="Victoria Joseph Resume.pdf"
                className="uppercase flex items-center gap-2 border border-gray-500 text-gray-500 px-6 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>

        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
    </section>;
};

export default Home;
