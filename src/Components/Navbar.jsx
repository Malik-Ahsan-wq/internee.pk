import React, { useState } from "react";
import { LuMoonStar } from "react-icons/lu";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50  bg-white shadow-md">
      <div className="flex items-center md:mx-auto  max-w-7xl  justify-between py-3 px-4">
        {/* Logo */}
        <div>
          <img className="w-40" src="/internee2.png" alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-10">
          <ul className="flex gap-6 md:mr-40 text-xs">
            <li>
              <Link to="/" className="hover:text-main">
                Home
              </Link>
            </li>
            <li>
              <Link to="/internshipPage" className="hover:text-main">
                Internship
              </Link>
            </li>
            <li>
              <Link to="/graduate" className="hover:text-main">
                Graduate Program
              </Link>
            </li>
            <li>    
              <Link to="/student" className="hover:text-main">
                Student Ambassador
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 items-center">
            <Link to="/">
              <button className="bg-main px-4 py-2 cursor-pointer rounded-2xl text-white hover:bg-white hover:text-main border">
                Job Portal
              </button>
            </Link>
            <Link to="/graduate">
              <button className="border cursor-pointer px-4 py-2 rounded-2xl text-main hover:bg-main hover:text-white">
                Dashboard
              </button>
            </Link>
            <div
              className="text-2xl p-2 rounded-full bg-black text-white shadow-xl hover:bg-main hover:text-white cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              <LuMoonStar />
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="sm:hidden flex items-center gap-4 text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className="text-2xl p-2 rounded-full text-white bg-black hover:bg-main hover:text-white"
            aria-label="Toggle Dark Mode"
          >
            <LuMoonStar />
          </div>
          {isOpen ? (
            <HiOutlineX className="bg-main text-white text-[40px] px-[4px] rounded-[5px]" />
          ) : (
            <HiOutlineMenuAlt3 className="bg-main text-white text-[40px] px-[4px] rounded-[5px]" />
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black shadow-md px-6 py-6 flex flex-col gap-6 sm:hidden z-50 transition duration-150">
            <Link to="/">
              <a className="text-main">Home</a>
            </Link>

            <Link to="/internshipPage">
              <a
                className="text-white hover:text-main"
                href="/internshipPage"
                onClick={() => setIsOpen(!isOpen)}
              >
                Internship
              </a>
            </Link>
            <Link to="/">
              <a
                className="hover:text-main text-white"
                href="#"
                onClick={() => setIsOpen(!isOpen)}
              >
                Job Portal
              </a>
            </Link>
            <Link to="/graduate">
              <a
                className="text-white hover:text-main"
                href="#"
                onClick={() => setIsOpen(!isOpen)}
              >
                Graduate Program
              </a>
            </Link>
            <Link to="/student">
              <a
                className="hover:text-main text-white"
                href="#"
                onClick={() => setIsOpen(!isOpen)}
              >
                Student Ambassador
              </a>
            </Link>
            <Link to="/">
              <a
                className="hover:text-main flex items-center gap-3 text-white"
                onClick={() => setIsOpen(!isOpen)}
                href="#"
              >
                Dashboard <FiArrowDownRight />
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


