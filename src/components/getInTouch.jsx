import React from 'react'
import getintouchimg from "../assets/footer.webp"
import "../styles/getInTouch.css"

const getInTouch = () => {
  return (
    <div className='getintouch'>
      <div className='getintouch-img'>
        <img src={getintouchimg} alt="getintouchimg" />
      </div>
      <div className="contact-us-container">
        <h1 className="contact-us-heading">Get in touch with us</h1>
        <p className="contact-us-description">
          You will feel confident in your choice from the first minutes of communication with Coinband.
        </p>
        <button className="contact-us-button">Get a Free Proposal</button>
      </div>
    </div>
  )
}

export default getInTouch
