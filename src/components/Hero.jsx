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

        {/*FIGURES*/}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
      </div>
      <div className="right-h">right</div>
    </div>
  );
};

export default Hero;
