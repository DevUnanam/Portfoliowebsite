import { Icon } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaLinkedIn, FaWhatsapp, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/DevUnanam"},
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/victoria-unanam/"},
    { icon: <FaWhatsapp />, path: "https://wa.me/message/IQUAVMF6ZLGYJ1" },
    { icon: <FaTwitter />, path: "https://x.com/EmasenyeUnanam"},
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
