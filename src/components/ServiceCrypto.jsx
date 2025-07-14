import React, { useEffect, useRef, useState } from 'react';
import "../styles/ServiceCrypto.css";
import img1 from "../assets/brandawarness.webp";
import img2 from "../assets/engagment.avif";
import img3 from "../assets/newaudi.avif";

const CryptoSmmCard = ({ image, text }) => {
  return (
    <div className="s_crypto_smm_card">
      <img src={image} alt="crypto visual" className="s_crypto_smm_card_img" />
      <p className="s_crypto_smm_card_text">{text}</p>
    </div>
  );
};

const ServiceCrypto = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`s_crypto_smm ${isVisible ? "animate" : ""}`}
    >
      <div className="s_crypto_smm_wrapper">
        <div className="s_crypto_smm_left">
          <h1 className="s_crypto_smm_heading">
            What is<br />crypto SMM?
          </h1>
        </div>
        <div className="s_crypto_smm_right">
          <p className="s_crypto_smm_para1">
            SMM for crypto projects are marketing solutions that attract an audience on social media that drives new users and token holders. For most projects, social media marketing is a must-have tool for promotion.
          </p>
          <p className="s_crypto_smm_para2">
            SMM is essential for Web3 projects. The agency's specialists design each client’s distinctive strategy and content plan. As a result, you can gain advantages from cryptocurrency social media marketing, like
          </p>
        </div>
      </div>

      <div className="s_crypto_smm_cards_wrapper">
        <CryptoSmmCard
          image={img1}
          text="Increase brand awareness among the crypto community"
        />
        <CryptoSmmCard
          image={img2}
          text="Greater audience engagement through relevant content and regular activity"
        />
        <CryptoSmmCard
          image={img3}
          text="Attracting new audiences through cross-marketing and affiliate publications"
        />
      </div>
    </section>
  );
};

export default ServiceCrypto;
