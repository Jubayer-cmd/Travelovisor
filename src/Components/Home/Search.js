import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Typewriter from "typewriter-effect";
import "./Search.css";
const Search = () => {
  const navigate = useNavigate();
  const [travel, setTravel] = useState([]);
  useEffect(() => {
    fetch("https://quiet-fortress-52901.herokuapp.com/travel")
      .then((res) => res.json())
      .then((data) => setTravel(data));
  }, [travel]);

  const handleOnSearch = (string, results) => {
    console.log("handle search", string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    localStorage.removeItem("id");
    let ids = item._id;
    localStorage.setItem("id", ids);
  };
  const handleSearch = () => {
    let id = localStorage.getItem("id");
    navigate(`/package/${id}`);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  return (
    <div className="m-10">
      <div className="bg-overlay flex items-center justify-center rounded-xl">
        <div className="">
          <h1 className="text-5xl bold font-press-start mb-3">
            Find Your Next
          </h1>
          <h1 className="text-5xl bold font-press-start">Tour Destinations</h1>
          <div className="flex items-center">
            <div className="my-2 mx-1 searc">
              {/* style={{ width: 300 }} */}
              <ReactSearchAutocomplete
                items={travel}
                fuseOptions={{ keys: ["name"] }} // Search on both fields
                resultStringKeyName="name" // String to display in the results
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                onClear={handleOnClear}
                showIcon={false}
                styling={{
                  height: "45px",
                  border: "1px solid darkgreen",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  boxShadow: "none",
                  hoverBackgroundColor: "lightgreen",
                  color: "darkgreen",
                  fontSize: "16px",
                  fontFamily: "Courier",
                  iconColor: "green",
                  lineColor: "lightgreen",
                  placeholderColor: "darkgreen",
                  clearIconMargin: "3px 8px 0 0",
                  zIndex: 2,
                }}
              />
            </div>
            <div>
              <button
                onClick={() => handleSearch()}
                className="btn btn-md my-3"
              >
                Search
              </button>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Search;
