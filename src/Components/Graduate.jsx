import React from 'react'
import Container from './Container'
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Graduate = () => {
   const cards = [
      {
    title: "Health Care",
    image: "/HealthCare.jpg",
    alt: "Health Care",
    description:
      "Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation, our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.",
  },
  {
    title: "Engineering",
    image: "/enginnering.webp",
    alt: "Engineering",
    description:
      "Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver’s seat of innovation. Whether it’s civil, electrical, mechanical, or software — get ready to design, build, and disrupt.",
  },
  {
    title: "Information Technologies",
    image: "/information.avif",
    alt: "Information Technologies",
    description:
      "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing — our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology.",
  },
];
  return (
    <div className="w-full">
      {" "}
      <div className="flex justify-center items-center mx-auto">
        <Container>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center mt-10 py-10">
              Graduate Programs
            </h1>
            <p className=" text-sm md:text-lg text-center md:px-60">
              Explore our comprehensive graduate programs designed to advance
              your career and expand your knowledge.
            </p>
            <h2 className="text-3xl font-bold text-center mt-20 pb-10">
              Explore Categories
            </h2>
            <div className="flex flex-wrap  gap-10 justify-center ">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[300px] rounded cursor-pointer overflow-hidden transition-transform shadow duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-[300px] h-[220px] object-cover rounded-t border-t border-white"
                  />
                  <h2 className="text-center text-2xl font-bold py-2 text-black transition-colors duration-300 hover:text-blue-500">
                    {card.title}
                  </h2>
                  <p className="text-center w-60 text-[13px] px-2 pb-6">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {/* footer */}
      <div className="bg-gray-100 mt-30">
        <footer className="bg-gray-100 text-gray-700 md:mx-auto md:max-w-[1200px]">
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

export default Graduate
