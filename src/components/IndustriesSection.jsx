import React, { useEffect, useRef } from 'react';
import styles from '../styles/IndustriesSection.module.css';
import img1 from "../assets/serv1.png";
import img2 from "../assets/serv2.webp";
import img3 from "../assets/serv-3.webp";
import img4 from "../assets/serv4.png";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndustriesSection = () => {
  const sectionRef = useRef(null); // Ref for the entire industries section

  const services = [
    {
      title: 'ICO Marketing',
      description: 'Providing ROI-oriented marketing solutions for a successful ICO of your Crypto project. Coinband is a leading ICO marketing agency.',
      icon: img1,
    },
    {
      title: 'IDO Marketing',
      description: 'Providing ROI-oriented marketing solutions for a successful IDO of your Crypto project. Coinband is a leading IDO marketing agency.',
      icon: img2,
    },
    {
      title: 'IEO Marketing',
      description: 'Energise your IEO using Web 3.0 marketing tools that ensure the success of your token sale.',
      icon: img3,
    },
    {
      title: 'DeFi Marketing',
      description: 'Scale your DeFi service using a Growth marketing approach by attracting the users of your product.',
      icon: img4,
    },
    {
      title: 'DeFi Marketing',
      description: 'Scale your DeFi service using a Growth marketing approach by attracting the users of your product.',
      icon: img4,
    },
    {
      title: 'DeFi Marketing',
      description: 'Scale your DeFi service using a Growth marketing approach by attracting the users of your product.',
      icon: img4,
    },
    {
      title: 'DeFi Marketing',
      description: 'Scale your DeFi service using a Growth marketing approach by attracting the users of your product.',
      icon: img4,
    },
  ];

  useEffect(() => {
    // Animate entire section (industriesSection) coming from the left
    gsap.fromTo(
      sectionRef.current,
      { x: '100%', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
          once: true, // this will not actually work in GSAP; workaround below
          onEnter: () => {
            gsap.to(sectionRef.current, {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out',
            });
          },
        },
      }
    );
  }, []);



  return (
    <section className={styles.industriesWrapper} >
      <div className={styles.industriesSection} ref={sectionRef}>
        <p className={styles.subheading}>
          Effective solutions to business challenges for Web 3.0 projects
        </p>
        <h2 className={styles.heading}>
          Our Industries
        </h2>
        <p className={styles.description}>
          Our premier cryptocurrency marketing firm has assisted a wide array of companies and groups in reaching their
          promotional goals. With extensive knowledge in advancing diverse Web 3.0 initiatives, we possess the
          understanding and proficiency to guide you in realizing your full potential.
        </p>
      </div>

      <div className={styles.servicesSection}>
        <div className={styles.cardGrid}>
          {services.map((service, index) => (
            <div className={styles.card} key={index}>
              <img src={service.icon} alt={`${service.title} Icon`} className={styles.icon} />
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.carddescription}>{service.description}</p>
              <a href="#" className={styles.link}>Learn more...</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
