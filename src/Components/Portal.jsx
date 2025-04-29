import React, { useState } from "react";
import { Search } from "lucide-react";

const companies = [
  {
    name: "Google",
    description:
      "Global software and internet company known for Android, Chrome, and cloud-based solutions like Google Cloud and Workspace.",
  },
  {
    name: "Microsoft",
    description:
      "Enterprise software leader offering Windows OS, Office 365, Azure cloud services, and developer tools like Visual Studio.",
  },
  {
    name: "Oracle",
    description:
      "Renowned for database software and enterprise resource planning (ERP) systems used by global corporations.",
  },
  {
    name: "SAP",
    description:
      "German software company specializing in enterprise software for managing business operations and customer relations.",
  },
  {
    name: "Adobe",
    description:
      "Industry leader in creative software like Photoshop, Illustrator, Premiere Pro, and digital experience platforms.",
  },
  {
    name: "Salesforce",
    description:
      "World’s top customer relationship management (CRM) software provider, widely used in sales and marketing automation.",
  },
  {
    name: "Atlassian",
    description:
      "Developer-focused software company offering tools like Jira, Confluence, and Bitbucket for team collaboration and project tracking.",
  },
  {
    name: "GitHub",
    description:
      "Platform for software version control and collaboration, widely used for hosting and reviewing code using Git.",
  },
  {
    name: "Slack (by Salesforce)",
    description:
      "Business communication platform designed for teams to collaborate via messaging, channels, and app integrations.",
  },
  {
    name: "Zoom",
    description:
      "Video conferencing software enabling virtual meetings, webinars, and remote collaboration across the globe.",
  },
  {
    name: "Dropbox",
    description:
      "Cloud-based file storage and collaboration platform designed for individuals and teams to share and manage documents.",
  },
  {
    name: "Intuit",
    description:
      "Developer of financial software like QuickBooks and TurboTax, serving small businesses and individuals.",
  },
];


export default function Portal() {
  const [query, setQuery] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6 mt-20">

        <h1 className="text-4xl md:text-7xl py-5 font-semibold text-main text-center">Our Job Portal</h1>
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
            <button className="mt-4 bg-main text-white px-4 py-2 rounded-xl hover:bg-black cursor-pointer transition-all">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
