import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Basic Splide CSS

const data = [
  {
    image: "/chatbot.webp",
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience.",
    name: "Peter Mik",
    location: "Florida, America",
  },
  {
    image: "/graphics.webp",
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience.",
    name: "M. Attari",
    location: "FSD, Pakistan",
  },
  {
    image: "/mobile-app.webp",
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience.",
    name: "Johnson Allay",
    location: "UAE",
  },
  {
    image: "/BackendDevelopment.webp",
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience.",
    name: "Malik Sh",
    location: "South Africa",
  },
  {
    image: "/BackendDevelopment.webp",
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience.",
    name: "Alixa",
    location: "Delhi, India",
  },
];

const Feedback = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Text */}
        <div className="text-center lg:text-left max-w-xl">
          <h3 className="text-blue-500 text-lg font-semibold mb-3">
            Trusted By Thousands
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Join a Global Community Achieving Their Dreams
          </h1>
          <button className="bg-main text-white cursor-pointer px-8 py-3 rounded-lg mt-4 hover:bg-white hover:text-main border border-main transition">
            Join Our Community
          </button>
        </div>

        {/* Right Side Splide Slider */}
        <div className="w-full max-w-lg">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              autoplay: true,
              pauseOnHover: true,
              arrows: false,
              pagination: true,
              speed: 800,
              gap: "1rem",
            }}
          >
            {data.map((item, index) => (
              <SplideSlide key={index}>
                <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-full mb-4"
                  />
                  <span className="text-amber-700 text-sm mb-1">
                    {item.location}
                  </span>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600 mt-3 text-sm">{item.feedback}</p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
