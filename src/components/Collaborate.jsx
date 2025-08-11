import React from 'react';
import '../styles/Collaborate.css';
import bgImage from '../assets/bg.webp';

const Collaborate = () => {
  return (
    <section className="crypto-section">
      {/* Background image layer */}
      <div className="crypto-bg"></div>

      {/* Dark overlay on top of image */}
      <div className="overlay"></div>

      {/* Foreground content */}
      <div className="crypto-content">
        <h1>Collaborate With the Crypto Marketing Agency If You Are:</h1>
        <div className="crypto-main">
          <div className="crypto-grid">
            <span>DeFi</span>
            <span>Crypto (Token, Coin)</span>
            <span>Fintech</span>
            <span>Web3</span>
            <span>Metaverses</span>
            <span>Wallets</span>
            <span>NFT</span>
            <span>GameFi</span>
            <span>dApp</span>
            <span>Crypto exchanges</span>
          </div>
        </div>
      </div>
      <div className="proposalSection">
        <h2 className="mainTitle">
          Tell us your marketing challenge, and <span className='white'> we'll prepare a customized solution for you.</span>
        </h2>
        <p className="subTitle">
          Select Coinband as your WEB3 digital marketing partner to chart a path for your company's
          growth in the blockchain, cryptocurrency, and NFT sectors. Click the "Get a proposal"
          button to get started.
        </p>
        <button className="proposalButton">Get a Free Proposal</button>
      </div>
    </section>
  );
};

export default Collaborate;
