"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import styles from "../styles/TextReveal.module.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollTextAnimation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const textElement = document.querySelector(`.${styles.animatedText}`);
      if (!textElement) return;

      const split = new SplitType(textElement, { types: "words" });

      // Combined animation and pinning
      gsap.fromTo(
        split.words,
        {
          backgroundPositionX: "100%",
          opacity: 0.5,
        },
        {
          backgroundPositionX: "0%",
          opacity: 1,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: `.${styles.textContainer}`,
            start: "top 20%",
            end: "bottom 50%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.textContainer}>
      <p className={styles.animatedText}>
        Coinband was founded in 2022 by crypto marketing experts with 4 years
        of experience. We have quickly established ourselves as industry leaders
        in Web3 marketing and the cryptocurrency and blockchain sectors. We know
        exactly what works and delivers results since we've promoted over 50 Web3
        projects, giving us industry-leading experience.
      </p>
    </div>
  );
};

export default ScrollTextAnimation;