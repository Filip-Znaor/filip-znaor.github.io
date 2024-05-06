import React from "react";
import ikona from "../assets/ikona.png";

const BlackHeader = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between w-full fixed top-0 z-50"> {/* Added z-50 class */}
      <div className="flex items-center">
        <div className="text-xl font-bold flex items-center">
          <img src={ikona} alt="" className="mr-2" />
          <b>DAGABASE</b>
        </div>
      </div>
      <nav className="flex justify-center flex-1 font-courier">
        <a href="https://dribbble.com/search/shots/popular/?q=landing-page" className="px-4">
          ABOUT US
        </a>
        <a href="https://dribbble.com/shots/20864055-Dagabase-landing-page" className="px-4">
          CAREERS
        </a>
        <a href="https://www.ign.com/wikis/ign/IGN_Blogs" className="px-4">
          BLOG
        </a>
        <a href="https://en.wikipedia.org/wiki/Database" className="px-4">
          WHITEPAPER
        </a>
      </nav>
      <a href="https://support.dribbble.com/hc/en-us">
        <button className="bg-gray-700 text-white px-4 py-2 rounded font-courier">
          JOIN WAITLIST
        </button>
      </a>
    </header>
  );
};

export default BlackHeader;