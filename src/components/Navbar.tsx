import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "./styles";
import { navLinks } from "../constants";
import  Logo from "../images/Navbar/Logo.png";
import  menu from "../images/Navbar/menu.png";
import  close from "../images/Navbar/close.png";
import { motion } from "framer-motion";


const Navbar = () => {
    const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return(
        <motion.nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 sticky top-0 z-20 shadow-md ${
          scrolled ? "bg-gray-50" : "bg-white"
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl '>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <motion.img 
                initial={{opacity: 0, y: -10}}
                animate={{opacity:1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
            
            src={Logo} alt='logo' className='w-auto h-10 lg:h-32 object-contain' />
            {/* <p className='text-black text-[32px] font-bold cursor-pointer flex '>
              Digital Loop&nbsp;
              <span className='sm:block hidden'>| Marketing</span>
            </p> */}
          </Link>
          
          <motion.p
          initial={{opacity: 0, y: -10}}
          animate={{opacity:1, y: 0}}
          transition={{duration: 0.8, delay: 0.2}}
           
          className='text-black text-[18px] lg:text-[32px] font-bold cursor-pointer flex justify-center items-center '>
              DIGITAL LOOP&nbsp;
              <span className='sm:block hidden '>MARKETING</span>
            </motion.p>
  
          <ul className='list-none hidden md:flex flex-row lg:gap-10 md:gap-4 '>
            {navLinks.map((nav) => (
              <motion.li
                initial={{opacity: 0, y: -10}}
                animate={{opacity:1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                key={nav.id}
                className={`${
                  active === nav.title ? "text-orange-600" : "text-secondary"
                } hover:text-orange-400 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </motion.li>
            ))}
          </ul>
  
          <div className='md:hidden flex mx-5 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain text-gray-500'
              onClick={() => setToggle(!toggle)}
            />
  
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-orange-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`/${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    );
    
};

export default Navbar;