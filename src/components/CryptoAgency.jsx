import React from 'react';
import '../styles/CryptoAgency.css'; // Importing the unique CSS
import InfiniteSlider from '../animations/Infinityslider';

const CryptoMarketing = () => {
  return (
    <div className="crypto-marketing">
      <div className="crypto-marketing-content">
        <h1 className="crypto-heading">
          Our Crypto Marketing Agency Attracts Over{' '}
          <span className="highlighted-text">100,000</span> New Token Holders Per Month for Our Clients.
        </h1>
        <p className="crypto-description">
          Experience in promoting 90+ Crypto, NFT and Web3 projects
        </p>
      </div>
      <InfiniteSlider />
    </div>
  );
};

export default CryptoMarketing;
