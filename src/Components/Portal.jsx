import React, { useState } from "react";
import { Search } from "lucide-react";

const companies = [
  {
    name: "Google",
    description:
      "Leading tech company known for its search engine and innovative projects.",
  },
  {
    name: "Microsoft",
    description:
      "Global software giant and creator of Windows, Office, and Azure.",
  },
  {
    name: "Amazon",
    description: "E-commerce leader and cloud computing provider through AWS.",
  },
  {
    name: "Apple",
    description:
      "Famous for iPhones, Macs, and elegant software/hardware integration.",
  },
  {
    name: "Netflix",
    description:
      "Streaming entertainment service with a wide range of original content.",
  },
  {
    name: "Meta",
    description:
      "Parent company of Facebook, Instagram, and WhatsApp focusing on the metaverse.",
  },
  {
    name: "Tesla",
    description: "Electric vehicle and clean energy company led by Elon Musk.",
  },
  {
    name: "Adobe",
    description:
      "Creative software leader with tools like Photoshop and Illustrator.",
  },
  {
    name: "IBM",
    description:
      "One of the oldest tech companies specializing in AI and cloud solutions.",
  },
  {
    name: "Spotify",
    description:
      "Popular music streaming platform with millions of users worldwide.",
  },
  {
    name: "Uber",
    description:
      "Ride-sharing and delivery service transforming urban mobility.",
  },
  {
    name: "Intel",
    description: "Semiconductor manufacturer powering millions of computers.",
  },
];

export default function Portal() {
  const [query, setQuery] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
        <div className="relative w-full sm:w-auto flex-1">
          <input
            type="text"
            placeholder="Search for companies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-2xl hover:bg-blue-700 transition-all">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
              <p className="text-gray-600 text-sm">{company.description}</p>
            </div>
            <button className="mt-4 bg-main text-white px-4 py-2 rounded-xl hover:bg-blue-500 transition-all">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
