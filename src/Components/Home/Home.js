import React from "react";
import Banner from "../Banner/Banner";
import NavBar from "../Navbar/NavBar";
import Hero1 from "./Hero1";

function Home() {
  return (
    <div className="dark:bg-[#0B1222] dark:text-[#8D9BB0]">
      <NavBar></NavBar>
      <Banner></Banner>
      <Hero1></Hero1>
    </div>
  );
}

export default Home;
