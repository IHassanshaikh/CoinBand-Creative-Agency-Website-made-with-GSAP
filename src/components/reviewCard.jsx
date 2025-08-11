import React from 'react';

const TestimonialCard = ({ profileimg, name, handle, testimony, icon, platform }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-head">
        <img className='testi-profile' src={profileimg} alt="profile" />
        <div>
          <h3 className="testimonial-card-name">{name}</h3>
          <p className="testimonial-card-handle">@{handle}</p>
        </div>
        <a href="#"><img src={icon} alt={platform} className="testimonial-card-icon" /></a>
      </div>
      <p className="testimonial-card-testimony">"{testimony}"</p>
    </div>
  );
};

export default TestimonialCard;
