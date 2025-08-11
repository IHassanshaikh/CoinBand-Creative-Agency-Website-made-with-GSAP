"use client";

import React from "react";
import ScrollTextAnimation from "../animations/TextReveal";
import award1 from '../assets/award1.webp';
import award2 from "../assets/award2.webp";
import award3 from "../assets/award1.svg";
import "../styles/Awards.css"; // <-- Importing normal CSS

const AwardsSection = () => {
  return (
    <div>
      <ScrollTextAnimation />
      <section className="awards-section">
        <h2 className="awards-heading">
          Coinband crypto agency <span className="awards-highlight">awards</span>
        </h2>
        <div className="awards-grid">
          <img src={award1} alt="Award 1" className="award-img" />
          <img src={award2} alt="Award 2" className="award-img" />
          <img src={award3} alt="Award 3" className="award-img" />
        </div>
      </section>
    </div>
  );
};

export default AwardsSection;
