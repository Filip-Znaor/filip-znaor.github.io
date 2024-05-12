import React from "react";
import pozad from "../assets/pozad.jpg";

const MyComponent = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center "
      style={{ backgroundImage: `url(${pozad})` }}
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4">
        <div className="text-white text-left">
          <h1 className="text-5xl mt-4">The Yield</h1>
          <h1 className="text-5xl mt-4">Automation</h1>
          <h1 className="text-5xl mt-4 mb-8">Protocol</h1>
          <p className="text-lg mt-4">
            <b>DeFi yields</b> aren't easy to manage.
          </p>
          <p className="text-lg mb-8">
            But Idle makes you feel <b>like they are</b>.
          </p>
          <a href="https://cdn.dribbble.com/userupload/5218052/file/original-d337e185745ebe23a348dd47070af325.png?resize=1024x768">
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded inline-flex items-center">
            Sign in
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;