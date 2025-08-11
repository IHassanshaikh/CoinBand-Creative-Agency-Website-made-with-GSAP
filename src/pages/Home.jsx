import "../styles/Home.css"
import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import Footer from "../components/Footer"
import CryptoMarketing from "../components/CryptoAgency";
import Awards from "../components/awards";
import MarketingTabsSection from "../animations/MarketingTabsSection";
import Parallax from "../animations/Parallax";
import IndustriesSection from "../components/IndustriesSection";
import CaseStudy from "../components/CaseStudy";
import Collaborate from "../components/Collaborate";
import HowWeAchieveResults from "../components/HowWeAchieveResults";
import GetinTouch from "../components/getInTouch";
import Reviews from "../components/Reviews";
import Team from "../components/Team";
import QA from "../components/QA";
import Blog from "../components/Blog";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const Home = () => {

  useEffect(() => {
    const scrollToTarget = () => {
      const id = location.state?.scrollTo;
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Delay scroll for component to mount fully
    const timer = setTimeout(scrollToTarget, 200);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <CryptoMarketing />
      <Parallax />
      <Awards />
      <MarketingTabsSection />
      <section id="industries-section"><IndustriesSection /></section>
      <section id="cases-section">
        <CaseStudy />
      </section>
      <Collaborate />
      <HowWeAchieveResults />
      <Reviews />
      <Team />
      <QA />
      <section id="blog-section"><Blog /></section>
      <GetinTouch />
      <Footer />
    </div>
  )
}

export default Home
