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
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <CryptoMarketing />
      <Parallax />
      <Awards />
      <MarketingTabsSection />
      <IndustriesSection />
      <CaseStudy />
      <Collaborate />
      <HowWeAchieveResults />
      <Reviews />
      <Team />
      <QA />
      <Blog />
      <GetinTouch />
      <Footer />
    </div>
  )
}

export default Home
