import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/HowWeAchieveResults.css';
import img1 from "../assets/acheive1.svg";
import img2 from "../assets/acheive2.svg";
import img3 from "../assets/acheive3.svg";
import img4 from "../assets/acheive4.svg";

gsap.registerPlugin(ScrollTrigger);

const HowWeAchieveResults = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Set initial state (hidden)
    gsap.set([headingRef.current, descRef.current, ...cardRefs.current], {
      x: 100,
      opacity: 0
    });

    // Section appearance control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
        onEnter: () => animateIn(),
        onLeaveBack: () => animateOut()
      }
    });

    function animateIn() {
      tl.to(sectionRef.current, { opacity: 1, duration: 0.5 })
        .to(headingRef.current, { x: 0, opacity: 1, duration: 0.8 }, 0)
        .to(descRef.current, { x: 0, opacity: 1, duration: 0.8 }, 0.3)
        .to(cardRefs.current, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        }, 0.6);
    }

    function animateOut() {
      gsap.to(sectionRef.current, { opacity: 0, duration: 0.5 });
    }

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const achievements = [
    { img: img1, title: "Comprehensive cryptocurrency marketing strategy", desc: "We discuss the implementation plan of proven marketing strategies through growth marketing services for a unique strategy of each crypto service." },
    { img: img2, title: "Moving towards business goals", desc: "We improve results precisely at specific points that are important to our clients. As a result, goals are achieved efficiently and quickly." },
    { img: img3, title: "We build communications", desc: "Reporting and communication between the WEB3 team and the client guarantee the transparency of work and the effectiveness of crypto marketing." },
    { img: img4, title: "We present real results", desc: "We break down reports into weekly summaries so that you are always informed about the stages of work on the crypto project." },
  ];

  return (
    <div
      className="howWeAchieveResults"
      ref={sectionRef}
      style={{ overflow: 'hidden' }} // Prevent horizontal overflow
    >
      <h2 className="title" ref={headingRef}>
        How Coinband Marketing Agency Achieves Results for Its Clients
      </h2>
      <p className="description" ref={descRef}>
        We achieve high performance due to well-coordinated business processes, behind the implementation of which is a proactive team of experts in crypto marketing.      </p>

      <div className="results-grid">
        {achievements.map((item, index) => (
          <div
            className="result-item"
            key={index}
            ref={el => cardRefs.current[index] = el}
          >
            <img src={item.img} alt="achievement icon" className="result-img" />
            <div className="result-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeAchieveResults;