import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { LuNotepadText } from "react-icons/lu";
import { IoMan } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuArrowRightLeft } from "react-icons/lu";
import { IoMdChatbubbles } from "react-icons/io";
import { GrTrophy } from "react-icons/gr";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Student = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <img className="brightness-50 " src="/suit image.avif" alt="" />
          <div className="flex justify-center items-center mx-auto">
            <div className="  text-center z-1 -mt-40 md:text-start md:absolute md:top-100 md:left-30 font-bold text-white md:text-6xl  md:leading-15 max-w-7xl px-4">
              <h1 className="text-4xl  md:text-5xl leading-20">Internee.pk</h1>
              <h1 className="text-3xl pb-5 md:text-5xl  ">
                Student Ambassadors
              </h1>
            </div>
            <div className="hidden md:flex justify-center items-center pb-10">
              <div className=" -mt-100 z-1 bg-[#e5e7eb] py-6 rounded-2xl max-w-[1200px] mx-4">
                <div className="flex justify-center items-center px-10 gap-5">
                  <div>
                    <h3 className="text-2xl font-bold mb-5">
                      Become a Student Ambassador
                    </h3>
                    <p className="w-220">
                      Join our global community of students who are passionate
                      about building AI-driven solutions with Microsoft
                      technology. Accelerate innovation and grow the skills you
                      need to have greater impact in the projects and
                      communities that matter to you.
                    </p>
                  </div>

                  <div>
                    <button className="bg-main flex items-center gap-5 text-white rounded-3xl py-5 text-xl border hover:bg-white hover:text-main duration-150 cursor-pointer px-7">
                      Get Started
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="w-110 ml-30 h-160 mb-10 mt-20 rounded-2xl"
                    src="/building.avif"
                    alt=""
                  />
                  <div className="absolute font-arial-halveti top-50 left-90 shadow-lg py-10 bg-white w-110 rounded-xl">
                    <h1 className="text-5xl px-5 font-bold">
                      Unlock Your Potential
                    </h1>
                    <p className="text-sm px-5 mt-5">
                      Discover new opportunities and enhance your skills. Gain
                      real-world experience with hands-on projects. Connect with
                      a network of like-minded individuals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:mt-20 max-w-7xl mx-auto  flex-wrap gap-6">
        <div className="md:flex  hover:scale-105 transition duration-150 items-center text-center   shadow-md md:w-72">
          <div className="bg-gray-200 py-5 px-5 md:py-4 ">
            <IoMan className="text-main mx-auto  text-6xl" />
          </div>
          <div className="ml-4 py-4 ">
            <span className="block font-semibold text-start  ">Community</span>
            <span className="block text-start md:text-[12px] w-80 md:w-[170px]  ">
              Explore Student Ambassador profiles
            </span>
          </div>
        </div>
        <div className="md:flex  hover:scale-105 transition duration-150 items-center text-center   shadow-md md:w-72">
          <div className="bg-gray-200 py-5 px-5 md:py-4 ">
            <GrTrophy className="text-main mx-auto  text-6xl" />
          </div>
          <div className="ml-4 py-4">
            <span className="block font-semibold text-start ">Community</span>
            <span className="block text-start md:text-[12px] w-80 md:w-[170px]  ">
              Explore Student Ambassador profiles
            </span>
          </div>
        </div>
        <div className="md:flex  hover:scale-105 transition duration-150 items-center text-center   shadow-md md:w-72">
          <div className="bg-gray-200 py-5  px-5 md:py-4  ">
            <IoMdCheckboxOutline className="text-main mx-auto  text-6xl" />
          </div>
          <div className="ml-4 py-4">
            <span className="block font-semibold text-start ">
              Startup Compitition
            </span>
            <span className="block text-start md:text-[12px] w-80 md:w-[170px] ">
              Student competition for AI startups
            </span>
          </div>
        </div>
        <div className="md:flex  hover:scale-105 transition duration-150 items-center text-center shadow-md md:w-72">
          <div className="bg-gray-200 py-5  px-5 md:py-6  ">
            <LuNotepadText className="text-main mx-auto   text-6xl" />
          </div>
          <div className="ml-4 py-4">
            <span className="block font-semibold text-start mt-3 ">
              Founder Hub
            </span>
            <span className="block text-start md:text-[12px] w-80 md:w-[170px]  ">
              A platform for entrepreneurs stage
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-20 pb-10">
        <div className="md:flex justify-center px-5 md:px-10 mt-10 items-center gap-10">
          <div className="bg-gray-100 px-5 py-7 md:py-10 mt-7 w-84  md:w-130 ">
            <IoMdChatbubbles className="text-main text-2xl md:text-5xl" />
            <h1 className="text-2xl mt-4 font-semibold">Learn and Grow</h1>
            <p className="text-sm mt-4">
              Access exclusive learning resources and certifications to build
              your technical skills.
            </p>
          </div>

          <div className="bg-gray-100 px-5 py-7 md:py-10 mt-7 w-84  md:w-130">
            <IoMan className="text-main text-2xl md:text-5xl" />
            <h1 className="text-2xl mt-4 font-semibold">Build Community</h1>
            <p className="text-sm mt-4">
              Connect with fellow students and mentors from around the world.
            </p>
          </div>

          <div className="bg-gray-100 px-5 py-7 md:py-10 mt-7 w-84  md:w-130 ">
            <LuArrowRightLeft className="text-main text-4xl" />
            <h1 className="text-2xl mt-4 font-semibold">Create Solutions</h1>
            <p className="text-sm mt-4">
              Work on real projects using cutting-edge Internee's technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="bg-gray-100 mt-15">
        <footer className="bg-gray-100 text-gray-700 md:mx-auto md:max-w-[1500px]">
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
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-2 border border-gray-300 rounded-l-md focus:outline-none "
              />
              <button className="bg-main  cursor-pointer text-white px-4 rounded-r-md hover:bg-blue-600">
                Subscribe
              </button>
            </div>
          </div>

          {/* Main Footer */}
          <div className="border-b border-gray-300 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-50 p-6">
            {/* Logo & About */}
            <div>
              <img src="/logo.png" alt="Logo" className="w-32 mb-4" />
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

export default Student
