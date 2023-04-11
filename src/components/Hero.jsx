import React from "react";
import "./Hero.css";
import Header from "./Header";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/*the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/*Hero Heading */}
      </div>
      <div className="right-h">right</div>
    </div>
  );
};

export default Hero;
