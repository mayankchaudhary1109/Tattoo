
import { useState } from "react";
import image from "../pics/icon1.png"; 
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-BACK shadow-2xl transition-opacity shadow-white lg:backdrop-blur-sm">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav aria-label="main navigation" className="flex h-[5.5rem] items-stretch lg:justify-evenly justify-between font-medium text-slate-700" role="navigation">
          <div className="hidden lg:block">
            <ul className="flex mt-6">
              <Link to="frontpic" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="mr-12 rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg font-sans">HOME</li>
              </Link>
              <Link spy={true} smooth={true} offset={-70} duration={500} to="about">
                <li className="mr-12 rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg cursor-pointer scroll-smooth">ABOUT ME</li>
              </Link>
              <Link to="service" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="mr-12 rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg cursor-pointer">SERVICE</li>
              </Link>
             
            </ul>
          </div>

          {/* Center Logo */}
          <div className="block">
            <img src={image} alt="Logo" className="lg:w-16 w-12 ml-1 mt-5 md:mx-auto text-center lg:mt-3 my-3 lg:ml-36" />
          </div>

          <div className="hidden lg:block">
            <ul className="flex mt-6 ml-20">
              <Link to="gallery" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="ml-12 rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg">GALLERY</li>
              </Link>
              <li className="ml-12 rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg">CONTACT US</li>
              <li className="ml-12 rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg">FOLLOW US</li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center mt-5 p-2 w-10 h-10 justify-center text-sm text-SHADE rounded-lg lg:hidden hover:bg-BACK focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-SHADE dark:hover:bg-BACK dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5 text-SHADE" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className={`absolute top-16 right-0 z-20 w-full bg-BACK shadow-lg ${isMobileMenuOpen ? "block" : "hidden"}`} id="navbar-sticky">
            <ul className="flex flex-col font-sans mx-auto pt-10 border pb-10">
      <li className="block mx-auto py-2 px-4 rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg">
        <Link to="frontpic" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>HOME</Link>
      </li>
      <li className="block py-2 px-4 mx-auto rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg">
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>ABOUT</Link>
      </li>
      <li className="block py-2 mx-auto px-4 rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg">
        <Link to="service" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>SERVICE</Link>
      </li>
      <li className="block py-2 px-4 mx-auto rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg">
        <Link to="gallery" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>GALLERY</Link>
      </li>
      <li className="block py-2 px-4 mx-auto rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg">
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>CONTACT</Link>
      </li>
      <li className="block py-2 px-4 mx-auto rounded dark:text-TEXT leading-6 text-TEXT text-base s sm:text-lg md:text-lg">
        <Link to="" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>FOLLOW</Link>
      </li>
    </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
