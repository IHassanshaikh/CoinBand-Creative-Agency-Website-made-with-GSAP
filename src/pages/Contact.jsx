import React from 'react'
import logo from "../assets/svg/logo.svg"
import connect1 from "../assets/connect1.avif"
import connect2 from "../assets/connect2.avif"
import connect3 from "../assets/connect3.avif"
import "../styles/contact.css"
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="connect-section">
      <div className="connect-nav">
        <Link to="/"><img className='connect-logo' src={logo} alt="logo" /></Link>
        <Link to="/"><button className='connect-close'>Close</button></Link>
      </div>
      <div className="connect-header">
        <h1>How would you like to connect with us?</h1>
      </div>

      <div className="connect-options">
        <Link to="/contactform"><div className="connect-card">
          <p>Get a free marketing<br />proposal for your project</p>
          <img src={connect1} alt="Your project" />
        </div>
        </Link>
        <Link to="/offerform">
          <div className="connect-card">
            <p>You have an offer for us</p>
            <img src={connect2} alt="Offer" />
          </div></Link>

        <Link to="/opportunityform"><div className="connect-card">
          <p>Career opportunities</p>
          <img src={connect3} alt="Career" />
        </div></Link>
      </div>
    </section >

  )
}

export default Contact
