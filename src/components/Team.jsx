import React, { useRef, useEffect } from 'react';
import "../styles/Team.css"; // Regular CSS import
import img1 from '../assets/person1.avif';  // Replace with the correct image paths
import img2 from '../assets/person2.avif';
import img3 from '../assets/person3.avif';
import img4 from '../assets/person4.avif';
import img5 from '../assets/person5.avif';

const TeamSection = () => {

  const teamRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);

  const teamMembers = [
    {
      name: 'Artur Shustov',
      role: 'Founder & CEO',
      img: img1,
    },
    {
      name: 'Dmitriy Mitiuk',
      role: 'CBDO',
      img: img2,
    },
    {
      name: 'Daria Brahynska',
      role: 'Head of Influencer Marketing',
      img: img3,
    },
    {
      name: 'Hasan Yahiya',
      role: 'Influencer Manager',
      img: img4,
    },
    {
      name: 'Vladyslav Shokurov',
      role: 'Head of SMM',
      img: img5,  // You can update the images accordingly
    },
  ];

  return (
    <div className="team-section" ref={teamRef}>
      <h2 className="team-heading">
        The Team of the Crypto Marketing Agency Coinband
      </h2>
      <p className="team-subheading">
        We would like to introduce you to the Coinband experts. Over several years of work, they have found a comprehensive solution to marketing and business problems for Web 3.0, Crypto, and Blockchain.
      </p>

      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img className="team-card-img" src={member.img} alt={member.name} />
            <h3 className="team-card-name">{member.name}</h3>
            <p className="team-card-role">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="team-footer">
        <div className="team-footer-left">
          <div className="footer-flags">
            <img className="footer-flag" src="https://cdn.prod.website-files.com/650b98c87c6a1115054ef3d1/650b98c87c6a1115054ef3e6_%F0%9F%87%AA%F0%9F%87%B8.svg" alt="USA" />
            <img className="footer-flag" src="https://cdn.prod.website-files.com/650b98c87c6a1115054ef3d1/650b98c87c6a1115054ef3e7_%F0%9F%87%A9%F0%9F%87%AA.svg" alt="Spain" />
            <img className="footer-flag" src="https://cdn.prod.website-files.com/650b98c87c6a1115054ef3d1/650b98c87c6a1115054ef3e8_%F0%9F%87%BA%F0%9F%87%A6.svg" alt="Ukraine" />
            <img className="footer-flag" src="https://cdn.prod.website-files.com/650b98c87c6a1115054ef3d1/650b98c87c6a1115054ef3e9_%F0%9F%87%AC%F0%9F%87%A7.svg" alt="UK" />
          </div>
          <div className="footer-text">
            <span className='green'>We work all over the world.</span> Offices are located in Kyiv, Warsaw, and Dubai. The company provides services in other cities and countries.
          </div>
        </div>
        <button className="team-footer-right">
          Show more
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
