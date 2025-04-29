import React from "react";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="bg-gray-100 text-gray-700 md:mx-auto md:max-w-[1200px]">
        {/* Newsletter Section */}
        <div className="border-b border-gray-300 flex flex-col md:flex-row justify-between items-center p-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold mb-2">Subscribe to Newsletter</h1>
            <p className="text-sm max-w-md">
              Subscribe to our newsletter and get exclusive insights, industry
              trends.
            </p>
          </div>
          <div className="flex ml-5">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none "
            />
            <button className="bg-main mr-5  cursor-pointer text-white px-4 rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="border-b border-gray-300 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-50 p-6">
          {/* Logo & About */}
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
              <li className="hover:underline cursor-pointer">Certification</li>
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
  );
};

export default Footer;
