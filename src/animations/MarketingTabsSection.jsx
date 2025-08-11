"use client";
import React, { useState } from "react";
import styles from "../styles/MarketingTabsSection.module.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import MarketingCard from "../components/MarketingCard";
import serv1 from "../assets/serv1.avif"
import serv2 from "../assets/serv2.avif"
import serv3 from "../assets/serv3.webp"
import serv4 from "../assets/serv4.avif"
import serv5 from "../assets/serv5.avif"
import serv6 from "../assets/serv6.avif"
import serv7 from "../assets/serv7.webp"

const tabs = [
  {
    title: "SMM",
    img: serv2,
    description: "We assist in increasing brand awareness on social media. You will attract new audiences and investors by ordering the SMM service. Creating the right content will gain authority and trust from your subscribers."
  },

  {
    title: "Community Management",
    img: serv3,
    description: "Community is one of the most important resources of any Web3 project. This service is aimed at creating communities. You can use Discord and Telegram to spread ideas, attract investment, and increase engagement."
  },

  {
    title: "PPC",
    img: serv4,
    description: "PPC advertising for crypto projects is an important tool in promoting events such as IDO / ICO, listing or to attract users of your product."
  },

  {
    title: "SEO",
    img: serv5,
    description: "Search engine optimisation can boost your website to the top positions in organic search results, which will provide significant traffic and a large flow of potential customers."
  },

  {
    title: "Influencers Marketing",
    img: serv6,
    description: "This is a way to quickly and loyally attract an audience through opinion leaders. Our database has 1000+ proven crypto-influencers, Web3, blockchain, and NFT influencers."
  },

  {
    title: "PR",
    img: serv7,
    description: "Public relations distinguish a project from the crowd. Web3 agency uses media relations to create a positive image and reputation for the business in the community by using PR articles."
  },


  {
    title: "Website Dev",
    img: serv1,
    description: "We create a website design that embodies the big idea of the brand. We highlight the benefits of the product, set up integrations and analytics."
  },
];


const MarketingTabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.marketingWrapper}>
      <div className="line"></div>
      <p className={styles.smallTop}>Tools for achieving results</p>
      <h2 className={styles.mainHeading}>
        Marketing Services for the Web3<br />Projects
      </h2>
      <p className={styles.smallBottom}>
        Our digital marketing agency knows what you need. We use growth-marketing tools<br />
        to provide effective solutions to our client's business problems.
      </p>

      <div className={styles.contentGrid}>
        <div className={styles.tabsList}>
          {tabs.map((tab, index) => (
            <div key={index} className={styles.tabArrowWrapper}>
              <div
                className={`${styles.tabItem} ${index === activeTab ? styles.active : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <span>{tab.title}</span>
              </div>
              <div className={styles.arrowbox}>
                <LiaLongArrowAltRightSolid size="1.5vw"
                  className={`${styles.arrow} ${index === activeTab ? styles.rotate : ""}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cardContainer}>
          <MarketingCard
            image={tabs[activeTab].img}
            title={tabs[activeTab].title}
            description={tabs[activeTab].description}
          />
        </div>
      </div>
      <div className="line"></div>

    </section>
  );
};

export default MarketingTabsSection;