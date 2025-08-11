import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import '../styles/QA.css';
import Ad from "../assets/Ad.webp"
import play from "../assets/play.webp"
import star from "../assets/star.webp"
import clock from "../assets/clock.webp"
import location from "../assets/location.webp"
import dollar from "../assets/dollar.webp"

const QA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Can I purchase a separate crypto advertising service?",
      answer: "A full range of advertising services is offered by the digital marketing company Coinband, which can be purchased both as a package and separately.",
      img: Ad,
      imgClass: "qa-image-1"
    },
    {
      question: "How should a marketing budget for cryptocurrencies be set? What are the prices for your services?",
      answer: "Our pricing is customized based on project requirements. We recommend starting with a free consultation to determine the optimal budget for your specific goals.",
      img: dollar,
      imgClass: "qa-image-2"
    },
    {
      question: "Where is Coinband's WEB3 marketing agency located?",
      answer: "We have offices in Kyiv, Warsaw, and Dubai, but serve clients globally in the WEB3 space with remote teams across multiple time zones.",
      img: location,
      imgClass: "qa-image-3"
    },
    {
      question: "What is your specialty?",
      answer: "We specialize in end-to-end crypto marketing including influencer campaigns, community growth, exchange listings, and blockchain project launches.",
      img: star,
      imgClass: "qa-image-4"
    },
    {
      question: "What makes Coinband stand out and why should I consider choosing you?",
      answer: "We combine deep blockchain expertise with data-driven marketing strategies, having successfully launched 200+ crypto projects with measurable ROI.",
      img: play,
      imgClass: "qa-image-5"
    },
    {
      question: "What is necessary for the promotion and what are the terms?",
      answer: "We need your project details, target metrics, and timeline. Typical campaigns run 6-12 weeks with weekly performance reports.",
      img: clock,
      imgClass: "qa-image-6"
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='QA'>
      <div className='line'></div>
      <h3 className="qa-title">Have any questions?</h3>
      <div className='QA-main'>
        {faqData.map((item, index) => (
          <div className={`qa-item ${activeIndex === index ? 'active' : ''}`} key={index}>
            <div className='qa-question-container' onClick={() => toggleAnswer(index)}>
              <img
                src={item.img}
                alt="Question visual"
                className={`qa-image ${item.imgClass}`}
              />
              <div className='qa-text-container'>
                <h4>{item.question}</h4>
                <FiChevronDown
                  className={`qa-arrow ${activeIndex === index ? 'rotated' : ''}`}
                  onClick={() => toggleAnswer(index)}
                />
              </div>

            </div>
            {activeIndex === index && (
              <div className='qa-answer'>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='line'></div>

    </div>
  );
};

export default QA;
