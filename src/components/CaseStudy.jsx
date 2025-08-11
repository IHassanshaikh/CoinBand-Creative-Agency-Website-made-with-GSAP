import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/Casestudy.module.css';
import CardComponent from '../components/CaseCard';
import img1 from '../assets/case1.avif';
import img2 from '../assets/case2.avif';
import img3 from '../assets/case3.avif';
import img4 from '../assets/case4.avif';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudy = () => {
  const industries = [

    {
      img: img2,
      title: 'GT Protocol',
      description: 'IDO and Listing Marketing Campaign with 50x ROI',
      tags: ['SMM', 'PR', 'PPC', 'Shilling'],
      bgImage: img2,
      buttonText: 'Discover case',
    },

    {
      img: img1,
      title: 'GT Protocol',
      description: 'IDO and Listing Marketing Campaign with 50x ROI',
      tags: ['SMM', 'PR', 'PPC', 'Shilling'],
      bgImage: img1,
      buttonText: 'Discover case',
    },

    {
      img: img3,
      title: 'GT Protocol',
      description: 'IDO and Listing Marketing Campaign with 50x ROI',
      tags: ['SMM', 'PR', 'PPC', 'Shilling'],
      bgImage: img3,
      buttonText: 'Discover case',
    },
    {
      img: img4,
      title: 'GT Protocol',
      description: 'IDO and Listing Marketing Campaign with 50x ROI',
      tags: ['SMM', 'PR', 'PPC', 'Shilling'],
      bgImage: img4,
      buttonText: 'Discover case',
    },
    {
      img: img1,
      title: 'GT Protocol',
      description: 'IDO and Listing Marketing Campaign with 50x ROI',
      tags: ['SMM', 'PR', 'PPC', 'Shilling'],
      bgImage: img1,
      buttonText: 'Discover case',
    },
    {
      img: img1,
      title: 'GT Protocol',
      description: 'IDO and Listing Marketing Campaign with 50x ROI',
      tags: ['SMM', 'PR', 'PPC', 'Shilling'],
      bgImage: img1,
      buttonText: 'Discover case',
    },
    // ... (keep all your other card data)
  ];

  // Create a reference for the slider
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: false,
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
    <div className={styles.casestudy}>
      <h1 className={styles.casestudyhead}>Explore Our Case Studies</h1>

      <div className={styles.sliderWrapper}>
        <Slider {...settings} ref={sliderRef} className={styles.casestudyslider}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.slideItem}>
              <CardComponent
                img={industry.img}
                title={industry.title}
                description={industry.description}
                tags={industry.tags}
                bgImage={industry.bgImage}
                buttonText={industry.buttonText}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.caseFooter}>
        <span className={styles.arrow} onClick={handlePrev}>
          <LiaLongArrowAltRightSolid />
        </span>
        <button className={styles.showMoreButton}>Show more</button>
        <span className={styles.arrow} onClick={handleNext}>
          <LiaLongArrowAltRightSolid />
        </span>
      </div>
    </div>
  );
};


export default CaseStudy;