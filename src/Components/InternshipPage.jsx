import React from 'react'
import { FaArrowRightToBracket } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const InternshipPage = () => {
  return (
    <div>
      {" "}
      <div className="md:flex justify-center mt-30 items-center md:gap-40 md:mx-auto md:max-w-[1300px]">
        <div className=" mt-20 ml-4 ">
          <h1 className="text-main text-5xl font-bold">Unlock Your Future</h1>
          <p className="text-lg md:w-120  py-6">
            Discover world-class internships and gain hands-on experience with
            top industry leaders.
          </p>
          <button className="bg-main px-7 py-4 cursor-pointer rounded-2xl text-white hover:bg-white hover:text-main border">
            Get Started
          </button>
        </div>
        <div>
          <button
            className="bg-main mt-5 px-[10px] md:mt-20  py-10 text-xl font-bold cursor-pointer rounded-2xl text-white border 
 md:py-10 md:text-xl lg:py-12 lg:text-2xl"
          >
            Find Your Dream Internship Today!
          </button>
        </div>
      </div>
      {/* Trending  page*/}
      <div className="md:flex md:justify-center md:items-center md:mx-auto bg-gray-100 pb-20  mt-20 ">
        <div className=" md:max-w-[1300px]">
          <div className="flex gap-3 text-center justify-center pt-20 text-sm   "></div>
          <h1 className="px-4 mb-2 text-3xl  md:font-bold  md:text-4xl lg:text-5xl text-center w-full flex justify-center items-center">
            Explore Internship Categories
          </h1>
          <p className="text-center  md:px-80 py-5">
            Choose from a wide range of internship opportunities and kickstart
            your professional journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6 p-6">
            {[
              { img: "/graphics.webp", title: "Graphic Design" },
              { img: "/chatbot.webp", title: "AI Chatbot" },
              { img: "/machine.jpg", title: "Machine Learning" },
              { img: "/frontend.webp", title: "Frontend Internship" },
              { img: "/mobile-app.webp", title: "Mobile App Design" },
              { img: "/BackendDevelopment.webp", title: "Backend Development" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl md:w-70 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-80 h-70 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <span className="text-center text-lg font-semibold">
                    {item.title}
                  </span>
                  <button className="bg-main text-white font-bold py-1 rounded-full border hover:text-main hover:bg-white cursor-pointer">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        {" "}
        <footer className=" text-gray-700 md:mx-auto md:max-w-[1400px]">
          {/* Newsletter Section */}
          <div className="border-b border-gray-300 flex flex-col md:flex-row justify-between items-center p-6">
            <div className="mb-4 md:mb-0">
              <h1 className="text-xl font-bold mb-2">
                Subscribe to Newsletter
              </h1>
              <p className="text-sm max-w-md">
                Subscribe to our newsletter and get exclusive insights, industry
                trends.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center ml-5 sm:ml-5 space-y-2 sm:space-y-0 sm:space-x-0">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-2 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none w-full sm:w-auto"
              />
              <button className="bg-main text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-blue-600 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          {/* Main Footer */}
          <div className="border-b border-gray-300 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-50 p-6">
            {/* Logo & About */}
            <div>
              <img src="/internee2.png" alt="Logo" className="w-32 mb-4 " />
              <p className="text-sm mb-4">
                The ultimate platform designed to turbocharge the IT sector in
                Pakistan.
              </p>
              <p className="flex items-center gap-2 text-sm mb-4">
                <FaPhoneAlt /> 0327622156
              </p>
              <div className="flex gap-4 text-xl">
                <FaFacebook className="hover:text-main cursor-pointer" />
                <FaTwitter className="hover:text-main cursor-pointer" />
                <BsLinkedin className="hover:text-main cursor-pointer" />
                <FaInstagramSquare className="hover:text-main cursor-pointer" />
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h1 className="text-lg font-semibold mb-4">Company</h1>
              <ul className="space-y-2 text-sm">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">
                  Student Ambassador
                </li>
                <li className="hover:underline cursor-pointer">
                  Interns Profiles
                </li>
                <li className="hover:underline cursor-pointer">About Us</li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h1 className="text-lg font-semibold mb-4">Resources</h1>
              <ul className="space-y-2 text-sm">
                <li className="hover:underline cursor-pointer">Community</li>
                <li className="hover:underline cursor-pointer">
                  Certification
                </li>
                <li className="hover:underline cursor-pointer">
                  Interns Profiles
                </li>
                <li className="hover:underline cursor-pointer">Scholarships</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center p-4 text-xs text-gray-500">
            <span>© 2025 internee.pk</span>
            <span className="flex gap-2">
              Terms of Use{" "}
              <span className="border-l border-gray-400 pl-2">
                Privacy Policy
              </span>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default InternshipPage
