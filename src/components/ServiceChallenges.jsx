import React from 'react'
import "../styles/ServiceChallenges.css"
import img1 from "../assets/challenge1.webp"
import img2 from "../assets/challenge2.webp"
import img3 from "../assets/challenge3.webp"
import img4 from "../assets/challenge4.webp"
import target from "../assets/target.webp"
import lock from "../assets/lock.webp"
import speaker from "../assets/speaker.webp"
import SmmServiceSection from "./ServiceCard";
import CryptoMarketing from "../components/CryptoAgency";
import Slider from 'react-slick';
import "../styles/Review.css";
import TestimonialCard from './reviewCard';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import linkedinIcon from "../assets/svg/linkedin.svg";
import facebookIcon from "../assets/svg/facebook.svg";
import prof1 from "../assets/prof1.avif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team from "../components/Team"
import Blog from './Blog'

const ServiceChallenges = () => {

  const testimonials = [
    {
      profileimg: prof1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: prof1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: prof1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: prof1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: prof1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: prof1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: prof1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: prof1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: prof1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: prof1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    // ... other testimonials
  ];

  // Create a reference for the slider
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <section className='s_smm_challenges'>
        <div className="s_smm_challenges_header">
          <h1>Which crypto-marketing challenges does social media promotion solve?</h1>
        </div>
        <div className="s_smm_challenges_body">
          <div className="s_smm_challenges_card">
            <img src={img1} alt="img1" />
            <p>Keeping your audience's attention on your project, thanks to a personalized content strategy for your Web3 project.</p>
          </div>


          <div className="s_smm_challenges_card">
            <img src={img2} alt="img2" />
            <p>Keeping your audience's attention on your project, thanks to a personalized content strategy for your Web3 project.</p>
          </div>

          <div className="s_smm_challenges_card">
            <img src={img3} alt="img3" />
            <p>Keeping your audience's attention on your project, thanks to a personalized content strategy for your Web3 project.</p>
          </div>


          <div className="s_smm_challenges_card">
            <img src={img4} alt="img4" />
            <p>Keeping your audience's attention on your project, thanks to a personalized content strategy for your Web3 project.</p>
          </div>

          <div className="s_smm_challengesbig">
            <p className='green'>In the highly competitive landscape of Web3 projects, it's not enough to just publish posts and banners for effective SMM promotion.</p>
            <p>A comprehensive approach is required that involves utilizing all SMM tools for crypto, such as communicating and engaging with your audience and crafting content tailored to their needs.</p>
          </div>


        </div>
      </section>

      <section className='s_smm_benifits'>
        <div className="s_smm_challenges_header">
          <h1>Benefits of working with Coinband on SMM</h1>
        </div>
        <div className='s_smm_benifit_body'>
          <div className='s_smm_benifits_card'>
            <img src={target} alt="target" />
            <p>You get advanced content marketing strategies and tactics to promote your crypto project.</p>
          </div>


          <div className='s_smm_benifits_card'>
            <img src={lock} alt="lock" />
            <p>You no longer have to worry about content production. We are an autonomous team that provides turn-key social media management services.</p>
          </div>

          <div className='s_smm_benifits_card'>
            <img src={speaker} alt="speaker" />
            <p>With us, you get access to 100+ web3 communities and projects for partnerships and cross-marketing to attract organically new audiences</p>
          </div>


        </div>
      </section>

      <section className='s_smmcryptomarket'>
        <CryptoMarketing />
      </section>

      <section className="s_servicecard1">
        <SmmServiceSection
          title="Get a personal proposal "
          greentitle="from Coinband"
          description="DOur crypto marketing agency is dedicated to social media promotion using the best Web3 marketing practices and approaches. Send an online request to receive a personalized offer for the social media promotion of your project."
          buttonText="Get a Free Proposal" />
      </section>

      <section className='s_smm_reviews'>
        <h3 className='s_smm_reviews_h3'>What people are saying about us? </h3>

        <div className="slider-container">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="slide-item">
                <TestimonialCard
                  name={testimonial.name}
                  handle={testimonial.handle}
                  testimony={testimonial.testimony}
                  icon={testimonial.icon}
                  platform={testimonial.platform}
                  profileimg={testimonial.profileimg}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="review-arrows">
          <span className="reviewarrow" onClick={handlePrev}>
            <LiaLongArrowAltRightSolid style={{ transform: 'rotate(0deg)' }} />
          </span>
          <span className="reviewarrow" onClick={handleNext}>
            <LiaLongArrowAltRightSolid />
          </span>
        </div>
      </section>

      <section>
        <Team />
      </section>

      <section className="s_servicecard1">
        <SmmServiceSection
          title="Contact us"
          description="You will feel confident in your choice from the first minutes of communication with Coinband."
          buttonText="Get a Free Proposal" />
      </section>

      <section className='s_smm_blog'>
        <Blog />
      </section>
    </>
  )
}

export default ServiceChallenges
