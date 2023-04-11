import React from "react";
import "./Hero.css";
import Header from "./Header";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="left-h">
        <Header />
      </div>
      <div className="right-h">right</div>
    </div>
  );
};

export default Hero;
