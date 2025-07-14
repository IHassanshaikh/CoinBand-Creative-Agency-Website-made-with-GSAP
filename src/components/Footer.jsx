import React, { useState } from 'react';
import "../styles/Footer.css"
import envelope from "../assets/envelope.png"
import facebook from "../assets/svg/fb.svg"
import Instagram from "../assets/svg/insta.svg"
import Linkedin from "../assets/svg/in.svg"
import Telegram from "../assets/svg/telegram.svg"
import Medium from "../assets/svg/medium.svg"
import tweeter from "../assets/svg/x.svg"
import C from "../assets/svg/C.svg"
import Liability from "../assets/liabilitycompany.png"
import Designrush from "../assets/svg/Designrush.svg"

const Footer = () => {

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="footer-newsletter">
      <div className="newsletter-content">
        <div className="newsletter-left">
          <img
            src={envelope}
            alt="Envelope Icon"
            className="newsletter-icon"
          />
        </div>
        <div className="newsletter-right">
          <h2 className="newsletter-title">Keep up with our progress!</h2>
          <p className="newsletter-subtitle">Follow us for updates</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      {submitted && <p className="thank-you-message">Thank you for subscribing!</p>}

      <hr className="footer-line" />

      {/* Main Content */}
      <div className="footer-content">

        {/* Left Side */}
        <div className="footer-left">
          <a className="footer-logo"><img src={C} alt="C" /></a>
          <div className="footer-text">
            Coinband Crypto <br /> Marketing Agency
          </div>
        </div>

        {/* Right Side: Icons */}
        <div className="footer-icons">
          {[
            { src: tweeter, href: "https://twitter.com" },
            { src: facebook, href: "https://facebook.com" },
            { src: Instagram, href: "https://instagram.com" },
            { src: Linkedin, href: "https://linkedin.com" },
            { src: Telegram, href: "https://telegram.org" },
            { src: Medium, href: "https://medium.com" },
          ].map((icon, i) => (
            <div className="icon-box" key={i}>
              <a href={icon.href} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={`icon-${i}`} className="icon-img" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <hr className="footer-line" />

      {/* Footer Nav */}
      <div className="footerlinks-wrapper">
        <div className="footerlinks-section">
          <h3 className="footerlinks-heading">Services</h3>
          <ul className="footerlinks-list">
            <li><a href="#">Social media marketing (SMM)</a></li>
            <li><a href="#">Community management</a></li>
            <li><a href="#">PR (Public Relations)</a></li>
            <li><a href="#">Influencer marketing</a></li>
            <li><a href="#">Paid advertising (PPC)</a></li>
            <li><a href="#">SEO promotion</a></li>
            <li><a href="#">Website development</a></li>
          </ul>
        </div>

        <div className="footerlinks-section">
          <h3 className="footerlinks-heading">Industries</h3>
          <ul className="footerlinks-list">
            <li><a href="#">ICO marketing</a></li>
            <li><a href="#">IDO marketing</a></li>
            <li><a href="#">IEO marketing</a></li>
            <li><a href="#">DeFi marketing</a></li>
            <li><a href="#">NFT marketing</a></li>
            <li><a href="#">GameFi marketing</a></li>
            <li><a href="#">Crypto Exchange</a></li>
          </ul>
        </div>


        <div className="footerlinks-section">
          <h3 className="footerlinks-heading">Company</h3>
          <ul className="footerlinks-list">
            <li>Blog</li>
          </ul>
        </div>

        <div className="footerlinks-section footerlinks-images">
          <a href="#" className="footerlinks-a1">aaaaaa</a>
          <a href="#" className="footerlinks-a2">
            <img src={Designrush} alt="Image 2" className="footerlinks-img" />
          </a>
          <a href="#" className="footerlinks-a3">
            <img src={Liability} alt="Image 3" className="footerlinks-img" />
          </a>
        </div>
      </div>

      {/*Line */}
      <hr className="footer-line" />


      {/* Footer Countries  */}
      <div className="contact-section">
        <div className="contact-column">
          <h3 className="contact-title">Contacts</h3>
          <p className="contact-email">commercial@coinband.io</p>
        </div>

        <div className="contact-column">
          <h4 className="location-heading">
            <img src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-waving-250.png" alt="USA" className="flag-icon" />
            New York
          </h4>
          <p>Flatbush Avenue 41,<br />New York City, 11217, USA</p>

          <h4 className="location-heading">
            <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-waving-250.png" alt="UK" className="flag-icon" />
            London
          </h4>
          <p>50 Shelton St, London WC2H 9FD, UK</p>
        </div>

        <div className="contact-column">
          <h4 className="location-heading">
            <img src="https://cdn.countryflags.com/thumbs/hongkong/flag-waving-250.png" alt="Hong Kong" className="flag-icon" />
            Hong Kong
          </h4>
          <p>7/F, MW Tower, 111 Bonham Strand,<br />Sheung Wan, Hong Kong</p>

          <h4 className="location-heading">
            <img src="https://cdn.countryflags.com/thumbs/poland/flag-waving-250.png" alt="Poland" className="flag-icon" />
            Warszawa
          </h4>
          <p>Chmielna 73, 00-801<br />Warszawa, Poland</p>
        </div>

        <div className="contact-column">
          <h4 className="location-heading">
            <img src="https://cdn.countryflags.com/thumbs/united-arab-emirates/flag-waving-250.png" alt="UAE" className="flag-icon" />
            Dubai
          </h4>
          <p>King Salman Bin Abdulaziz<br />Al Saud St, Dubai, UAE</p>

          <h4 className="location-heading">
            <img src="https://cdn.countryflags.com/thumbs/ukraine/flag-waving-250.png" alt="Ukraine" className="flag-icon" />
            Kyiv
          </h4>
          <p>68 Zhilyanskaya, 02000,<br />Kyiv, Ukraine</p>
        </div>
      </div>

      {/* Footer copyright  */}
      <div className="coinband-footer">
        <hr />
        <div className="coinband-footer-container">
          <span>Privacy policy</span>
          <span>Public offer</span>
          <span>All rights reserved</span>
          <span>Copyright © 2025 Coinband.</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer
