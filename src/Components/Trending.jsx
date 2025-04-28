import React from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Trending = () => {
  return (
    <div className="md:flex md:justify-center md:items-center md:mx-auto bg-gray-100 ">
      <div className="md:max-w-[1300px] md:gap-5">
        <div className="flex gap-3 text-center justify-center pt-20 text-sm">
          <div className="bg-white p-2 rounded-4xl">
            <span className="bg-black text-white font-bold rounded-4xl p-1">
              Trending
            </span>
            <span className="ml-2">Explore Internship Opportunities</span>
          </div>
        </div>
        <h1 className="px-4 py-10 text-2xl font-bold md:text-4xl lg:text-5xl text-center w-full flex justify-center items-center">
          Your Dream Internship Is Just One Click Away
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
              className="bg-white shadow-lg rounded-2xl overflow-hidden transition hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <span className="text-lg font-semibold">{item.title}</span>
                <Link to="/graphic">
                  <button className="flex items-center cursor-pointer gap-2 text-main hover:underline mt-2">
                    <FaArrowRightToBracket />
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
