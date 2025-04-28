import React from "react";
import { GrTrophy } from "react-icons/gr";
import { GiStaryu } from "react-icons/gi";
import { LuBadgeDollarSign } from "react-icons/lu";

const Coach = () => {
  return (
    <div className="px-6 py-16">
      {/* Title */}
      <h1 className="text-center mb-12 text-3xl md:text-4xl font-bold text-main">
        Why Choose AI Career Coach?
      </h1>

      {/* Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center max-w-sm mx-auto">
            <GrTrophy className="text-main text-5xl mb-4" />
            <h2 className="font-bold text-xl mb-2">Comprehensive Guidance</h2>
            <p className="text-gray-600">
              Everything you need to succeed in the AI industry
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center max-w-sm mx-auto">
            <GiStaryu className="text-main text-5xl mb-4" />
            <h2 className="font-bold text-xl mb-2">Industry-Ready Insights</h2>
            <p className="text-gray-600">
              Stay updated on the latest AI trends
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center max-w-sm mx-auto">
            <LuBadgeDollarSign className="text-main text-5xl mb-4" />
            <h2 className="font-bold text-xl mb-2">Monetization Options</h2>
            <p className="text-gray-600">
              Share your AI knowledge and earn income
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coach;
