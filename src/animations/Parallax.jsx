import React, { useEffect, useRef } from 'react';
import styles from "../styles/Parallax.module.css";
import parallax1 from "../assets/parallax1.png";
import parallax2 from "../assets/parallax2.avif";
import parallax3 from "../assets/parallax3-4.png";
import parallax4 from "../assets/parallax5.png";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  const textRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  useEffect(() => {
    // Heading animation (play once, smooth)
    gsap.fromTo(
      textRef.current,
      { x: '100%', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true, // this will not actually work in GSAP; workaround below
          onEnter: () => {
            gsap.to(textRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out',
            });
          },
        },
      }
    );


    // Image 1 scale reveal
    gsap.fromTo(
      img1Ref.current,
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: img1Ref.current,
          start: 'top 100%',
          end: 'top 80%',
          scrub: 2,
        },
      }
    );

    // Image 2 moves down
    gsap.fromTo(
      img2Ref.current,
      { y: -240 },
      {
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: img2Ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,

        },
      }
    );

    // Image 3 moves up
    gsap.fromTo(
      img3Ref.current,
      { y: 0 },
      {
        y: -250,
        ease: 'none',
        scrollTrigger: {
          trigger: img3Ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    // Image 4 moves down
    gsap.fromTo(
      img4Ref.current,
      { y: -170 },
      {
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: img4Ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section className={styles.agencySection}>
      <div className={styles.textWrapper}>
        <div className={styles.agencySectionheader} ref={textRef}>
          <p className={styles.topText}>We present the directions of our work</p>
          <h1 className={styles.mainHeading}>
            The Full-Service Crypto Marketing Agency for Achieving Results
          </h1>
        </div>
      </div>

      <div className={styles.imageRow}>
        <img ref={img1Ref} src={parallax1} alt="Analytics 1" />
        <img ref={img2Ref} src={parallax2} alt="Analytics 2" />
        <img className={styles.parallax3} ref={img3Ref} src={parallax3} alt="Analytics 3" />
        <img ref={img4Ref} src={parallax4} alt="Analytics 4" />
      </div>
    </section>
  );
};

export default Parallax;
