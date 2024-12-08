import { Icon } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaLinkedIn, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: ""},
    { icon: <FaLinkedinIn />, path: ""},
    { icon: <FaYoutube />, path: ""},
    { icon: <FaTwitter />, path: ""},
];


const Social = ({ containerStyles = "flex gap-4", iconStyles = "text-xl" }) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    );
  };
  

export default Social;
