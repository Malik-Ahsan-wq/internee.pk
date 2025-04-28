import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GiCircleClaws, GiCube } from "react-icons/gi";

const Internship = () => {
  return (
    <div className="relative overflow-hidden px-4 py-10">
      {/* Full Screen Background */}
      <div
        className="absolute inset-0 top-0 left-0 w-full h-full bg-cover bg-center filter blur-md z-0"
        style={{ backgroundImage: "url(/enginnering.webp)" }}
      ></div>
      <div className="absolute inset-0 bg-white/55"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 z-10">
        {/* Text Section */}
        <div>
          <h3 className="text-main text-start font-bold mb-2">How it works</h3>
          <h1 className="font-bold text-start text-2xl md:text-5xl py-4">
            A Simple and Seamless Process to Start Your Internship Journey
          </h1>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col items-start justify-center">
          <div className="relative border-l-2 border-dashed border-main pl-10">
            {/* Step 1 */}
            <div className="relative mb-16">
              <div className="absolute -left-20 top-10">
                <button className="bg-main text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md">
                  Step 1
                </button>
              </div>
              <div className="bg-white px-5 py-5 rounded-2xl shadow-lg w-full">
                <h1 className="font-bold text-lg flex items-center gap-2">
                  Sign Up & Choose a Domain
                </h1>
                <p className="text-start mt-4">
                  Explore a wide range of internships across various industries,
                  tailored to match your skills.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-16">
              <div className="absolute -left-20 top-10">
                <button className="bg-black text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md">
                  Step 2
                </button>
              </div>
              <div className="bg-white px-5 py-5 rounded-2xl shadow-lg w-full">
                <h1 className="font-bold text-lg flex items-center gap-2">
                  Fill out the Desired Form
                </h1>
                <p className="text-start mt-4">
                  Fill out a quick application form and secure your internship
                  opportunity.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mb-16">
              <div className="absolute -left-20 top-10">
                <button className="bg-black text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md">
                  Step 3
                </button>
              </div>
              <div className="bg-white px-5 py-5 rounded-2xl shadow-lg w-full">
                <h1 className="font-bold text-lg flex items-center gap-2">
                  Earn Your Certificate
                </h1>
                <p className="text-start mt-4">
                  Complete your internship, gain valuable hands-on experience,
                  and receive a certificate.
                </p>
              </div>
            </div>
          </div>

          {/* Get Started Button */}
          <button className="bg-main py-3 mt-10 text-white hover:bg-white hover:text-main duration-150 px-8 rounded-3xl border">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Internship;
