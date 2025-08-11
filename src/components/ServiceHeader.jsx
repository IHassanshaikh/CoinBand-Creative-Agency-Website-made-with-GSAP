import React from 'react';
import "../styles/ServiceHeader.css";

const ServiceHeader = () => {
  return (
    <div className="s_header">
      <div className="s_header_breadcrumbs">
        <p>Home &nbsp;&gt;&nbsp; Services &nbsp;&gt;&nbsp; SMM</p>
      </div>
      <div className="s_header_content">
        <h1 className="s_header_heading">
          <span>Crypto Social Media </span>Marketing Agency
        </h1>
        <p className="s_header_paragraph">
          The digital agency offers services for social media marketing. Our specialists assist Web3, blockchain,
          and crypto firms in growing their audience and engagement on Twitter and beyond. You can start
          working with Coinband's team right now.
        </p>
        <button className="s_header_button">Get a Free Proposal</button>
      </div>
    </div>
  );
};

export default ServiceHeader;
