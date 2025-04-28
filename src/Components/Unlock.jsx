import React from "react";
import { IoSearch } from "react-icons/io5";

const Unlock = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full  bg-[#0C0950] py-50 rounded-2xl max-w-7xl mx-auto px-4 text-center">
        <div className="flex gap-3 text-center justify-center mb-10 text-sm   ">
          <div className="bg-white p-2 rounded-4xl">
            <span className="bg-black text-white font-bold rounded-4xl p-1">
              Trending
            </span>
            <span className="ml-2">Explore Internship Opportunities</span>
          </div>
        </div>

        <h1 className="text-4xl text-white font-bold mb-4">
          Unlock New Opportunities With Top-tier Internships.
        </h1>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Take the first step toward a successful career with Internee.pk.
          Explore top internships, gain hands-on experience, and earn a valuable
          certificate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-blue-600 text-white border  rounded-full px-6 py-3 hover:bg-white hover:text-main transition duration-300">
            Get Started Now
          </button>

          <button className="flex items-center justify-center bg-white  gap-2 text-main border border-white  rounded-full px-6 py-3 hover:bg-blue-600 hover:text-white transition duration-300">
            <IoSearch size={20} />
            Explore Internships
          </button>
        </div>
      </div>
      <div className="md:flex justify-center gap-20 py-30">
        <div className="px-20 mb-10 text-center">
          <span className=" text-5xl  font-bold ">20+</span>
          <p className="text-gray-500 md:text-xl">Expert-Led Internships</p>
        </div>
        <div className="md:border-l mb-10 text-center px-20">
          <span className=" text-5xl font-bold ">1,500+</span>
          <p className="text-gray-500 md:text-xl">Successful Graduates</p>
        </div>
        <div className="md:border-l px-20 text-center">
          <span className="text-5xl font-bold ">50,000+</span>
          <p className="text-gray-500 md:text-xl">LinkedIn Followers</p>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
