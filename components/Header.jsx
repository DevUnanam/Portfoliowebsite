import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            DevUnanam<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a
            href="https://wa.me/message/IQUAVMF6ZLGYJ1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Hire Me</Button>
          </a>
        </div>


        {/* mobilenav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;
