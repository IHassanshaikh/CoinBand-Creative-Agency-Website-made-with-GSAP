import React from 'react';
import Slider from 'react-slick';
import "../styles/Review.css";
import TestimonialCard from './reviewCard';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import linkedinIcon from "../assets/svg/linkedin.svg";
import facebookIcon from "../assets/svg/facebook.svg";
import img1 from "../assets/prof1.avif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const testimonials = [
    {
      profileimg: img1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: img1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: img1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: img1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: img1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: img1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: img1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: img1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: img1,
      name: 'Charlie Bussat',
      handle: 'CharlieBussat',
      testimony: 'Implemented a great marketing strategy with the Coinband team. Their proactive and expert approach is inspiring.',
      icon: linkedinIcon,
      platform: 'linkedin',
    },
    {
      profileimg: img1,
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
          slidesToShow: 2,
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
    <div className='Review'>
      <h3>Reviews of Coinband's Work</h3>

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
    </div>
  );
};

export default Reviews;