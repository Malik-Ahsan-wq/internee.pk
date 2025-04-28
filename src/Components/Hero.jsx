import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="flex justify-center mx-auto">
      {" "}
      <div>
        {/* Hero Section */}
        <div className="relative flex flex-col md:flex-row mt-30  justify-center items-center gap-10 px-5 md:px-0 md:mt-30">
          {/* Text Content */}
          <div className="p-5 md:p-20 w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold text-start mb-5 leading-snug">
              Looking for dream Internship?
            </h1>

            <p className="text-base mb-8 max-w-md text-gray-600">
              Internee.pk kick-starts students’ tech careers with their first
              internship, providing industry exposure, practical skills, and
              networking opportunities.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <button className="w-full md:w-auto bg-main cursor-pointer hover:bg-white hover:text-main border border-main py-3 px-6 rounded-2xl text-white font-semibold transition-all duration-300">
                Our Job Portal
              </button>
              <button className="w-full md:w-auto bg-black hover:bg-gray-800 cursor-pointer flex items-center justify-center gap-3 py-3 px-6 rounded-2xl text-white font-semibold transition-all duration-300">
                Sign In
                <FiArrowDownRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:block w-full md:w-1/2 relative">
            <div
              className="absolute top-1/2 left-1/2   bg-[#02a1fa] opacity-100 rounded-2xl blur-2xl -z-10 rotating-x"
              style={{
                transform: "translate(-50%, -50%)",
                transformStyle: "preserve-3d",
              }}
            ></div>

            {/* Image */}
            <img
              src="/code71.png"
              alt="Internship Hero"
              className="w-[450px] rounded-2xl mx-auto mt-10  relative z-10"
            />
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-20">
          <h1 className="text-center px-20  mt-10">
            Collaborate with trusted world wide partners
          </h1>
          <div className="flex gap-20 cursor-pointer justify-center flex-wrap pb-20 mt-10">
            <img
              className="w-20 max-w-full transition-transform duration-300 transform hover:scale-110"
              src="/cloud.png"
              alt="Cloud"
            />
            <img
              className="w-20 max-w-full transition-transform duration-300 transform hover:scale-110"
              src="/collab 1.png"
              alt="Collab 1"
            />
            <img
              className="w-20 max-w-full transition-transform duration-300 transform hover:scale-110"
              src="/nics.png"
              alt="NICS"
            />
            <img
              className="w-20 max-w-full transition-transform duration-300 transform hover:scale-110"
              src="/pitb.png"
              alt="PITB"
            />
            <img
              className="w-20 max-w-full transition-transform duration-300 transform hover:scale-110"
              src="/see.png"
              alt="SEE"
            />
            <img
              className="w-20 max-w-full transition-transform duration-300 transform hover:scale-110"
              src="/logo1 1.png"
              alt="Logo 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
