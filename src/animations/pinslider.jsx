import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../styles/pinslider.css";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";

gsap.registerPlugin(ScrollTrigger);

const PinSlider = () => {
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!cardsRef.current.length || !containerRef.current) return;

    // Set initial state
    gsap.set(cardsRef.current, { x: -100, opacity: 0 });

    // Entry animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 80%",
        end: "bottom 30%",
        toggleActions: "play none none none",
        // markers: true
      }
    });

    tl.to(cardsRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.2,
      ease: "power2.out"
    });

    // Calculate scroll distance
    const cardWidth = cardsRef.current[0].offsetWidth;
    const gap = 3 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 3vw in pixels
    const totalWidth = (cardWidth + gap) * cardsRef.current.length;
    const scrollDistance = totalWidth - window.innerWidth + (gap * 2);

    // Horizontal scroll with extra space
    gsap.to(containerRef.current, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 40%",
        end: `+=${scrollDistance}`, // Added extra scroll space
        pin: true,
        scrub: 2,
        snap: {
          snapTo: 1 / (cardsRef.current.length - 1),
          duration: { min: 0.2, max: 0.4 }
        },
        // markers: true,
        invalidateOnRefresh: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pinSlider" ref={sliderRef}>
      <div className="pinSlidercards" ref={containerRef}>
        <div className="pinSlidercard" ref={addToCardsRef}>
          <img src={step1} alt="step1" />
          <p>Developing a content strategy, focusing on the business and marketing objectives set.</p>
        </div>
        <div className="pinSlidercard" ref={addToCardsRef}>
          <img src={step2} alt="step2" />
          <p>We create and promote relevant content that effectively engages with your target audience.</p>
        </div>
        <div className="pinSlidercard" ref={addToCardsRef}>
          <img src={step3} alt="step3" />
          <p>Cross-marketing and affiliate publications to attract new audiences.</p>
        </div>
      </div>
    </div>
  );
};

export default PinSlider;