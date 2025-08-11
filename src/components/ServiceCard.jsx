import React from "react";
import "../styles/SocialMediaSection.css";

const SmmServiceSection = ({
  title,
  greentitle,
  description,
  buttonText,
}) => {
  return (
    <div className="s_smmservice_section">
      <div className="s_smmservice_container">
        <h2 className="s_smmservice_title">
          {title}<span className="green">{greentitle}</span>
        </h2>
        <p className="s_smmservice_description">
          {description}
        </p>
        <button className="s_smmservice_button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SmmServiceSection;