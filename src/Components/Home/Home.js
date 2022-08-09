import React from "react";
import Banner from "../Banner/Banner";
import NavBar from "../Navbar/NavBar";
import Accordion from "./Accordion";
import Card from "./Card";
import Footer from "./Footer";
import Hero1 from "./Hero1";
import Newsletter from "./Newsletter";
import Slider from "./Slider";
import State from "./State";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div className="dark:bg-[#0B1222] dark:text-[#8D9BB0]">
      <NavBar></NavBar>
      <Banner></Banner>
      <Hero1></Hero1>
      <Card></Card>
      <Slider></Slider>
      <State></State>
      <Testimonials></Testimonials>
      <Accordion></Accordion>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default Home;
