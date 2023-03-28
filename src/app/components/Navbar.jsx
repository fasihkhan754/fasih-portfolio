import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { NavLinks, navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import logo1 from "../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
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
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo1} alt="logo" className="w-14 h-11 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Fasih &nbsp;
            <span className="sm:block hidden"> | Software Engineer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
              hover:text-white text-[18px]
              font-medium cursor-pointer
            `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <Link
                href={
                  "https://drive.google.com/file/d/11pbEdjafPvpLj1ya5ehLISv-dNJ8A40l/view?usp=sharing"
                }
              >
                
                <button className="bg-slate-400 p-3 rounded-md border-slate-100 hover:bg-blue-300 text-white"> View Resume </button>
              </Link>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt={menu}
            className="w-[28px] h-[28px]
          object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
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
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <Link
                href={
                  "https://drive.google.com/file/d/11pbEdjafPvpLj1ya5ehLISv-dNJ8A40l/view?usp=sharing"
                }
              >
                
                <button className="border-slate-100 hover:text-blue-300"> View Resume </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
