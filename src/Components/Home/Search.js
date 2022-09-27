import React from "react";
import Typewriter from "typewriter-effect";
import "./Search.css";
const Search = () => {
  return (
    <div className="m-10">
      <div className="bg-overlay flex items-center justify-center rounded-xl">
        <div className="">
          <h1 className="text-5xl bold font-press-start mb-3">
            Find Your Next
          </h1>
          <h1 className="text-5xl bold font-press-start">Tour Destinations</h1>
          <input
            type="text"
            placeholder="Enter Package Name"
            className="input my-3 input-bordered text-black input-success w-full max-w-md"
          />
          <Typewriter
            options={{
              strings: [
                "Debotakhum Day Trip",
                "St.martin Relax trip for Couple",
                "Sajek Premium Couple Package",
                "Tanguar Haor Premium Trip",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <button className="btn my-3">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
