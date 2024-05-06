import React from "react";
import pozad from "../assets/pozad.jpg";

const MyComponent = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: `url(${pozad})` }}
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4">
        <div className="text-white text-left">
          <h1 className="text-5xl font-bold mt-4">THE DAGABASE</h1>
          <h1 className="text-5xl font-bold mt-4 mb-8">CLOUD SHIMMERS</h1>
          <p className="text-lg mt-4">
            Our decentralized global network of independent
          </p>
          <p className="text-lg mb-8">
            devices protects your data against all risks.
          </p>
          <a href="https://cdn.dribbble.com/userupload/5218052/file/original-d337e185745ebe23a348dd47070af325.png?resize=1024x768">
            <button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-md hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-purple-200 font-bold">
              EXPLORE --&gt;
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;