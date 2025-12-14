"use client";

import React from "react";
import { Montserrat, Merriweather } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });
const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

const Hero: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-gray-100 font-serif">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Content */}
        <div className="flex-1 text-left md:text-left">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-2 ${merriweather.className}`}>
            Welcome to MaxiLife Health and Wellness
          </h1>
          <h2 className={`text-2xl md:text-3xl text-blue-400 mb-6 font-normal ${merriweather.className}`}>
            Your Partner for Healthy Living
          </h2>
          <div className="w-20 h-1 bg-blue-400 mb-6"></div>
          <p className={`text-gray-600 leading-relaxed mb-6 ${montserrat.className}`}>
            Discover comprehensive health information, weight management guidance, and wellness resources
            tailored to your needs. At MaxiLife, we understand that living healthy isn't always easy.
            That's why we provide you with the right tools, information, support, and motivation to
            achieve your goals for a healthier lifestyle.
          </p>
          <p className={`text-gray-600 leading-relaxed mb-6 ${montserrat.className}`}>
            Explore our valuable resources and learn about the various ways we can work with you
            toward optimal health and wellbeing.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className={`px-6 py-3 bg-blue-400 text-white rounded-md font-semibold transition-colors hover:bg-blue-700 ${montserrat.className}`}>
              Explore Our Services
            </button>
            <button className={`px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-md font-semibold transition-colors hover:bg-blue-100 ${montserrat.className}`}>
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/images/heroImg.png"
            alt="Healthy lifestyle representation"
            className="w-full max-w-lg h-auto rounded-lg shadow-xl object-cover mb-8 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
