import React from 'react'
import "../styles/Hero.css"
import animation from "../assets/animation-hero.mp4"

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Web 3.0 Marketing Agency</h1>
          <p className="hero-subtitle">Promoting crypto, blockchain, and web3 projects</p>
          <button className="hero-button">Get a Free Proposal</button>
          <p className="hero-description">
            Coinband is a marketing agency with first-class customer experience and advanced growth marketing tools,
            which will make your project noticeable and attractive to the Web3 community.
          </p>
        </div>
        <div className="hero-right">
          <video
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
            src={animation}
            alt="Video Description"
          >
            Your browser does not support the video tag.
          </video>

        </div>
      </section>

    </div>
  )
}

export default Hero
