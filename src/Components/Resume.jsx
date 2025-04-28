import React from "react";
import { WiCloudUp } from "react-icons/wi";
import { FiDollarSign } from "react-icons/fi";
import { LuHandshake } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="p-6">
      {/* Cards Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <FaRegLightbulb className="text-4xl text-main" />
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
              <IoBookOutline className="text-4xl text-main" />
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
              <CgProfile className="text-4xl text-main" />
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
              <LuHandshake className="text-4xl text-main" />
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

export default Resume;
