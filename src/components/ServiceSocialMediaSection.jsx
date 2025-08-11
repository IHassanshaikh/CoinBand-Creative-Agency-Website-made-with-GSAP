import React, { useEffect, useRef, useState } from "react";
import "../styles/SocialMediaSection.css";
import logo1 from "../assets/svg/x.svg";
import logo2 from "../assets/svg/fb.svg";
import logo3 from "../assets/svg/insta.svg";
import logo4 from "../assets/svg/in.svg";
import logo5 from "../assets/svg/telegram.svg";
import logo6 from "../assets/svg/medium.svg";
import logo7 from "../assets/svg/github.svg";
import logo8 from "../assets/svg/tiktok.svg";
import logo from "../assets/svg/logo.svg";
import linkedin from "../assets/svg/in.svg"
import insta from "../assets/svg/insta.svg"
import x from "../assets/svg/x.svg"
import reddit from "../assets/svg/github.svg"
import medium from "../assets/svg/medium.svg"
import CaseStudy from "./CaseStudy";
import SmmServiceSection from "./ServiceCard";
import PinSlider from "../animations/pinslider"

const SocialMediaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const platformDetails = [
    {
      icon: x,
      title: 'Web3',
      description: 'For any Web3 project with a large crypto audience, Twitter is a key venue. This social network sets the trends for cryptocurrencies.',
    },
    {
      icon: linkedin,
      title: 'B2B Clients',
      description: 'It is simple to find institutional investors or B2B clients for your cryptocurrency product with LinkedIn.',
    },
    {
      icon: insta,
      title: 'Cryptocurrency Startup',
      description: 'Instagram is the leading social network in terms of audience. You will get a great deal of interest in your cryptocurrency startup by using SMM on Instagram.',
    },
    {
      icon: reddit,
      title: 'Cryptocurrency Market',
      description: 'Reddit is a crucial online platform for the cryptocurrency market where you can interact with your followers and inform them of upcoming updates for your project.',
    },
    {
      icon: medium,
      title: 'Full-fledged Blog',
      description: 'Medium is a well-known platform for those who want to publish interesting posts about cryptocurrencies and run a full-fledged blog.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
      }
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
    <div
      ref={sectionRef}
      className={`s_socialmedia_section ${isVisible ? "s_socialmedia_animate" : ""}`}
    >
      <section className="s_socialmedia_textcontainer">
        <span className="s_socialmedia_whitetext">
          Managing Reddit, Facebook, LinkedIn, Medium, Twitter, Instagram, and other social network websites
        </span>
        <span className="s_socialmedia_graytext">
          {" "}
          will assist you in producing original content that will positively impact the further growth of your project.
        </span>
      </section>
      <section className="s_socialmedia_logocontainer">
        <img src={logo1} className="s_socialmedia_logoframe" alt="X/Twitter" />
        <img src={logo2} className="s_socialmedia_logoframe" alt="Facebook" />
        <img src={logo3} className="s_socialmedia_logoframe" alt="Instagram" />
        <img src={logo4} className="s_socialmedia_logoframe" alt="LinkedIn" />
        <img src={logo5} className="s_socialmedia_logoframe" alt="Telegram" />
        <img src={logo6} className="s_socialmedia_logoframe" alt="Medium" />
        <img src={logo7} className="s_socialmedia_logoframe" alt="GitHub" />
        <img src={logo8} className="s_socialmedia_logoframe" alt="TikTok" />
      </section>
      <section className="s_casestudy">
        <CaseStudy />
      </section>
      <section className="s_servicecard1">
        <SmmServiceSection
          title="Order SMM service and get a "
          greentitle="personalized strategy from Coinband"
          description="Do you want to produce attractive content and to further promote your account on social networks? All you need is to hire Coinband professionals. Fill out the form and get a special offer"
          buttonText="Get a Free Proposal" />
      </section>
      <section class="smm_target_section">
        <h2>Who is SMM aimed at?</h2>
        <p>SMM is actively used to blockchain projects promotion, and therefore will be helpful for</p>
        <div class="smm_target_buttons">
          <button class="smm_target_button">DeFi</button>
          <button class="smm_target_button">Metaverse</button>
          <button class="smm_target_button">Fintech</button>
          <button class="smm_target_button">Crypto (Token, Coin)</button>
          <button class="smm_target_button">Web3</button>
          <button class="smm_target_button">NFT</button>
          <img src={logo} class="smm_target_span" />
          <button class="smm_target_button">GameFi</button>
          <button class="smm_target_button">Crypto exchanges</button>
          <button class="smm_target_button">Wallets</button>
          <button class="smm_target_button">dApp</button>
          <button class="smm_target_button">and others...</button>
        </div>
      </section>


      <section className="s_smm_platform">
        <div className="s_smm_platform_header">
          <h1>Which SMM platforms do we work with?</h1>
          <p>Social media marketing refers to the must-have tool for each crypto project. SMM makes your project more noticeable, involves the community, and brings in new customers.</p>
        </div>

        <div className="s_smm_platform_cards">
          {platformDetails.map((platform, index) => (
            <SmmPlatformCard
              key={index}
              icon={platform.icon}
              title={platform.title}
              description={platform.description}
            />
          ))}
        </div>
      </section>

      <section className="s_smm_WEB3">
        <section className="s_socialmedia_textcontainer">
          <span className="green">
            Our digital agency Coinband
          </span>
          <span className="s_socialmedia_whitetext">
            {" "}will work with you on developing a standout content strategy based on the specifics of each platform
          </span>
          <span className="s_socialmedia_graytext">
            {" "}
            to promote your blockchain project, boost exposure, and draw in new users.
          </span>
        </section>

        <div className="s_smm_platform_header s_smm_WEB3_header">
          <h1>Stages of WEB3 social media promotion</h1>
          <p>Social media networks' crypto marketing has specific characteristics, unlike the classic SMM. We assess your social media accounts and analyze your projects and target audience to ensure the effectiveness of our advertising.</p>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaSection;


const SmmPlatformCard = ({ icon, title, description }) => {
  return (
    <div className="s_smm_platform_card">
      <div className="s_platform_icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="s_platform_title">{title}</h3>
      <p className="s_platform_description">{description}</p>
    </div>
  );
};