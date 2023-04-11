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
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              We will help you shape and build your ideal body and live up your
              life to the fullest.
            </span>
          </div>
        </div>
      </div>
      <div className="right-h">right</div>
    </div>
  );
};

export default Hero;
