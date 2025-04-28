import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { WiCloudUp } from "react-icons/wi";
import { FiDollarSign } from "react-icons/fi";
import { LuHandshake } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Content = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 px-4">
      <div className=" w-full max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex items-center justify-center pt-20">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold mb-4">
              Tech Instructor or Content Creator?
            </h1>
            <p className="mb-6">
              Create in Your Native Language & Start Earning
            </p>
            <div className="flex justify-center items-center">
              <button className="bg-main text-white px-6 py-2 border cursor-pointer rounded-2xl flex items-center justify-center gap-2 hover:bg-white hover:text-main transition">
                Start Your Journey Now
                <MdOutlineNavigateNext />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16 px-6 pb-20">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <WiCloudUp className="text-6xl text-main bg-gray-200 p-2 rounded-3xl" />
            </div>
            <h1 className="text-xl font-semibold mb-2">
              Upload Tutorials & Exercises
            </h1>
            <p className="text-gray-600 mb-4">
              Use internee.pk to share tutorials, exercises, and projects. Help
              others learn while you grow with virtual internships that reward
              your skills.
            </p>
            <span className="text-main flex items-center gap-1 cursor-pointer hover:underline">
              Learn more <MdOutlineNavigateNext />
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <FiDollarSign className="text-6xl text-main bg-gray-200 p-2 rounded-3xl" />
            </div>
            <h1 className="text-xl font-semibold mb-2">
              Earn from Your Expertise
            </h1>
            <p className="text-gray-600 mb-4">
              Internee.pk offers virtual internships in Pakistan where tech
              creators and instructors can earn passive income by sharing their
              knowledge.
            </p>
            <span className="text-main flex items-center gap-1 cursor-pointer hover:underline">
              Learn more <MdOutlineNavigateNext />
            </span>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <CgProfile className="text-6xl text-main bg-gray-200 p-2 rounded-3xl" />
            </div>
            <h1 className="text-xl font-semibold mb-2">
              Build Your Instructor Profile
            </h1>
            <p className="text-gray-600 mb-4">
              Become a trusted voice on internee.pk. Our virtual internship
              ecosystem helps you build your personal brand in the online
              learning space.
            </p>
            <span className="text-main flex items-center gap-1 cursor-pointer hover:underline">
              Learn more <MdOutlineNavigateNext />
            </span>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <LuHandshake className="text-6xl text-main bg-gray-200 p-2 rounded-3xl" />
            </div>
            <h1 className="text-xl font-semibold mb-2">Fair Revenue Sharing</h1>
            <p className="text-gray-600 mb-4">
              We keep it transparent. Join internee.pk and benefit from a fair
              model that pays you well — all while gaining experience in virtual
              internships.
            </p>
            <span className="text-main flex items-center gap-1 cursor-pointer hover:underline">
              Learn more <MdOutlineNavigateNext />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
