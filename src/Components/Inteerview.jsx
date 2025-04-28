import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GiCircleClaws, GiCube, GiProgression } from "react-icons/gi";

const Inteerview = () => {
  return (
    <div className="bg-gray-200 py-10">
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Text Side */}
          <div>
            <h3 className="text-main font-bold mb-2">AI Mock Interviews</h3>
            <h1 className="font-bold text-2xl md:text-5xl py-4">
              AI Mock Interview Platform for Virtual Internships in Pakistan
            </h1>
            <p className="py-4 text-gray-700">
              Prepare for technical, marketing, or business interviews with our
              AI-powered mock interview system. Join Internee.pk’s virtual
              internship program to get unlimited access, real-time feedback,
              and role-specific practice.
            </p>
            <button className="flex items-center gap-3 cursor-pointer hover:bg-white bg-main text-white py-3 px-6 border hover:text-main transition duration-150 rounded-2xl mt-4">
              Apply Now for Virtual Internship <MdOutlineNavigateNext />
            </button>
          </div>

          {/* Cards Side */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <h1 className="font-bold text-lg flex items-center gap-2 mb-3">
                <MdOutlineNavigateNext className="text-2xl text-main" />
                Realistic AI Interview Simulations
              </h1>
              <p className="text-gray-600">
                Simulate real interview environments powered by AI. Perfect for
                students seeking online internship interview practice or job
                readiness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <h1 className="font-bold text-lg flex items-center gap-2 mb-3">
                <GiCircleClaws className="text-2xl text-main" />
                Tailored Practice Sessions
              </h1>
              <p className="text-gray-600">
                Focused mock interviews customized to your field of study and
                career interests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <h1 className="font-bold text-lg flex items-center gap-2 mb-3">
                <GiCube className="text-2xl text-main" />
                Instant Feedback & Improvement
              </h1>
              <p className="text-gray-600">
                Get immediate AI-driven feedback after every mock interview to
                boost your confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className="mt-20">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <GiProgression className="text-3xl text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">
                Build Real Interview Confidence
              </h2>
              <p className="text-gray-600">
                Reduce anxiety and increase success rate through repeated
                AI-based mock interview sessions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <MdOutlineNavigateNext className="text-3xl text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">
                Become Job-Ready Fast
              </h2>
              <p className="text-gray-600">
                Structured interview training that prepares you for real-world
                scenarios. Perfect for students applying for internships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <GiCircleClaws className="text-3xl text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">
                Track Progress with Reports
              </h2>
              <p className="text-gray-600">
                Access detailed performance reports you can share with mentors
                and hiring managers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inteerview;

