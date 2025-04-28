import React from "react";
import { TbSubtask } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { IoBagRemoveOutline, IoBookOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineNavigateNext } from "react-icons/md";

const Skills = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: "url(/skills.avif)" }}
      ></div>
      <div className="absolute inset-0 bg-white/55 "></div>
      {/* Main Content */}
      <div className="relative px-6 py-10 max-w-7xl mx-auto">
        {/* Header Button */}
        <div className="flex justify-center mb-8">
          <button className="text-sm bg-gray-400 rounded-full hover:bg-black hover:text-white cursor-pointer flex items-center gap-2 px-4 py-2 text-white">
            <TbSubtask />
            Task Management Platform
          </button>
        </div>

        {/* Heading and Text */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mt-6 text-black bg-clip-text ">
            Master Real-World Skills with Our Task Portal at internee.pk
          </h1>
          <p className="text-gray-900 mt-6 max-w-3xl mx-auto">
            Transform theoretical knowledge into practical expertise through our
            comprehensive task portal. Build, learn, and grow with
            industry-standard projects from our{" "}
            <span className="text-black font-bold ">
              virtual internships on internee.pk
            </span>
            .
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <IoBagRemoveOutline className="text-6xl bg-gray-200 p-2 rounded-full text-main mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Hands-on Industry with internee.pk
            </h2>
            <p className="text-gray-700 mb-6">
              Gain practical experience through real-world projects that
              simulate actual industry scenarios. Each task is carefully
              designed to enhance your professional portfolio through our
              virtual internships.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-green-600" /> Project-based
                learning
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-green-600" /> Industry Standard
                Practices
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-green-600" /> Portfolio building
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <LuBadgeCheck className="text-6xl bg-gray-200 p-2 rounded-full text-main mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Skill Verification System by internee.pk
            </h2>
            <p className="text-gray-700 mb-6">
              Each completed task adds to your verified skills portfolio.
              Showcase your capabilities with confidence through our virtual
              internships and comprehensive tracking system.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-main" /> Skill verification
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-main" /> Progress tracking
              </li>
              <li className="flex items-center gap-2">
                <CiCircleCheck className="text-main" /> Achievement badges
              </li>
            </ul>
          </div>
        </div>

        {/* Smaller Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white px-6 py-8 rounded-2xl shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-workflow w-10 h-10 p-2 rounded-2xl bg-gray-200 text-main"
            >
              <rect width="8" height="8" x="3" y="3" rx="2"></rect>
              <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
              <rect width="8" height="8" x="13" y="13" rx="2"></rect>
            </svg>
            <h3 className="text-xl font-bold mb-4">
              SDLC Implementation via internee.pk
            </h3>
            <p className="text-sm text-gray-700">
              Experience the complete Software Development Life Cycle through
              structured tasks and milestones, part of our virtual internship
              offerings.
            </p>
          </div>

          <div className="bg-white px-6 py-8 rounded-2xl shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-book-open w-10 h-10 p-2 rounded-2xl bg-gray-200 text-main"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
            <h3 className="text-xl font-bold mb-4">
              Guided Learning Path at internee.pk
            </h3>
            <p className="text-sm text-gray-700">
              Follow a structured learning path designed for both beginners and
              advanced learners as part of our virtual internship curriculum.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Build Your Professional Portfolio with internee.pk?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our virtual internships and get access to industry-standard
              tasks that will help you build a remarkable portfolio, only at
              internee.pk.
            </p>
            <button className="bg-main md:mx-auto text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-main border transition">
              Start Your Journey Now
              <MdOutlineNavigateNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;




