import React, { useState } from "react";
import Popup from "./Popup";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Graphic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupKey, setPopupKey] = useState(0); // force remount

  const openPopup = () => {
    setPopupKey(prev => prev + 1);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div className="mt-25 max-w-7xl md:mx-auto">
        <div>
          <div className="bg-main px-5 ml-5 mr-5 text-center py-20 text-white text-5xl rounded-xl font-bold">
            <h1>Graphic Design</h1>
          </div>
          <div className="text-center mt-10">
            <h1 className="text-4xl font-bold text-main">
              Explore Your Next Internship
            </h1>
            <p className="mt-5 md:mt-3 w-70 mx-auto">
              Handpicked opportunities to elevate your career.
            </p>
          </div>
        </div>

        {/* Grid Container */}
        <div className="md:grid grid-cols-3 items-center gap-6 mt-10">

          {/* Box 1 */}
          <div className="bg-gray-100 md:mt-10 w-80 md:w-100 rounded-2xl shadow-lg px-5 ml-7">
            <img className="w-80 mx-auto" src="/photoshop.png" alt="" />
            <div className="pl-5 leading-7">
              <h1 className="text-2xl font-bold pb-5 -mt-10">
                Photoshop Internship
              </h1>
              <p className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-[#43A724]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                Remote
              </p>
              <p className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                2 month
              </p>
              <span className="text-gray-500">internship</span>
            </div>
            <div className="flex justify-center items-center py-5">
              <button onClick={openPopup} className="bg-main cursor-pointer px-20 py-3 text-white rounded-2xl hover:bg-blue-500">
                Apply Now
              </button>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-gray-100 w-80 md:w-100 rounded-2xl shadow-lg mt-10 ml-7">
            <img className="w-70 md:w-80 mx-auto pt-8 pb-10" src="/ai copy.png" alt="" />
            <div className="pl-5 leading-7">
              <h1 className="text-2xl font-bold pb-5">
                Illustrator Internship
              </h1>
              <p className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-[#43A724]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                Remote
              </p>
              <p className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                2 month
              </p>
              <span className="text-gray-500">internship</span>
            </div>
            <div className="flex justify-center items-center py-5">
              <button onClick={openPopup} className="bg-main cursor-pointer px-20 py-3 text-white rounded-2xl hover:bg-blue-500">
                Apply Now
              </button>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-gray-100 w-80 md:w-100 rounded-2xl shadow-lg mt-10 ml-7">
            <img className="w-70 mx-auto py-5 pb-18" src="/maya copy.png" alt="" />
            <div className="pl-5 leading-7">
              <h1 className="text-2xl font-bold pb-5 -mt-10">
                Auto Desk Maya Internship
              </h1>
              <p className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-[#43A724]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                Remote
              </p>
              <p className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                2 month
              </p>
              <span className="text-gray-500">internship</span>
            </div>
            <div className="flex justify-center items-center py-5">
              <button onClick={openPopup} className="bg-[#02a1fa] cursor-pointer px-20 py-3 text-white rounded-2xl hover:bg-blue-500">
                Apply Now
              </button>
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-gray-100 w-80 md:w-100 rounded-2xl shadow-lg mt-10 ml-7">
            <img className="w-70 md:w-80 py-5 mx-auto" src="/figmaIcon copy.png" alt="" />
            <div className="pl-5 leading-7">
              <h1 className="text-2xl font-bold pb-5">Photoshop Internship</h1>
              <p className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-[#43A724]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                Remote
              </p>
              <p className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                2 month
              </p>
              <span className="text-gray-500">internship</span>
            </div>
            <div className="flex justify-center items-center py-5">
              <button onClick={openPopup} className="bg-main px-20 cursor-pointer py-3 text-white rounded-2xl hover:bg-blue-500">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed flex justify-center items-center z-50 p-4 sm:p-6">
          <div className="relative w-full max-w-[90%] sm:max-w-[700px] max-h-[100vh] overflow-y-auto bg-white rounded-lg">
            <button
              onClick={closePopup}
              className="absolute top-3 right-4 text-3xl sm:text-5xl font-bold text-black hover:text-main"
            >
              &times;
            </button>
            <Popup key={popupKey} />
          </div>
        </div>
      )}






      {/* Footer */}
      <div className="bg-gray-100 mt-20">
        <footer className="bg-gray-100 text-gray-700 md:mx-auto md:max-w-[1200px]">
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

          <div className="border-b border-gray-300 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-50 p-6">
            <div>
              <img src="/internee2.png" alt="Logo" className="w-32 mb-4" />
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
    </>
  );
};

export default Graphic;
