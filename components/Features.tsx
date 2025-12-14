"use client";

import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 font-serif">
      <div className="max-w-screen-xl mx-auto px-4 space-y-16">

        {/* Physical Activity Feature */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-400 text-white flex items-center p-6 gap-4">
            <span className="text-2xl">📍</span>
            <h2 className="text-2xl font-bold">Physical Activity</h2>
          </div>
          <div className="p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Imagine a 'magic pill' that could reduce your risk of developing many chronic diseases,
              has no major side effects, and is completely free. Would you take it? Regular physical
              activity has been described as exactly this wonder pill.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Everyone can gain health benefits and enjoyment by being physically active at home, work,
              school, and leisure. It's never too early or too late to start living actively or to
              increase your activity level if you're already an active person.
            </p>
            <button className="px-6 py-3 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition">
              View Articles
            </button>
          </div>
        </div>

        {/* Healthy Eating Feature */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/images/healthyFood.png"
              alt="Healthy balanced meal with fresh vegetables and fruits"
              className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Healthy Eating & Lifestyle</h2>
            <p className="text-gray-700 leading-relaxed">
              Proper nutrition is fundamental to good health. A balanced diet helps prevent or control
              blood pressure, maintain healthy weight, and reduce the risk of chronic diseases.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At MaxiLife, we provide practical guidance on nutrition and dietary choices that support
              your overall wellness goals.
            </p>
            <button className="px-6 py-3 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Physical Activity Definition Feature */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">What is Physical Activity?</h2>
            <p className="text-gray-700 leading-relaxed">
              Physical activity is any body movement that works your muscles and uses more energy than
              resting. Regular physical activity strengthens your heart, improves lung function, and
              enhances overall fitness.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From walking and swimming to cycling and dancing, there are countless ways to incorporate
              physical activity into your daily routine.
            </p>
            <button className="px-6 py-3 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition">
              Read More
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/images/healthyCouples.png"
              alt="Active couple exercising outdoors"
              className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gray-100 rounded-lg p-8 space-y-8">
          <h2 className="text-2xl font-bold text-center text-gray-800">Subscribe And Get Tips</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded"></div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Subscribe To Our Newsletter</h3>
              <p className="text-gray-700 leading-relaxed">
                The hustle and bustle of life and our daily busy schedules can push health-related
                issues down our list of priorities. Access to a continuous stream of health tips and
                information will help not only keep you adequately informed but also sustain your
                motivation in cultivating healthy habits.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our practical guides and tips will help keep you abreast of essential wellness facts
                and strategies for maintaining optimal health.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="px-6 py-2 bg-blue-400 text-white font-semibold rounded sm:rounded-l-none hover:bg-blue-500 transition">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/images/bodyImg.png"
                alt="Healthy lifestyle representation"
                className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
