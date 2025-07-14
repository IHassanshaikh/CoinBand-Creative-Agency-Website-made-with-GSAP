import React from 'react'
import logo from "../assets/svg/logo.svg"
import connect1 from "../assets/connect1.avif"
import connect2 from "../assets/connect2.avif"
import connect3 from "../assets/connect3.avif"
import "../styles/Form1.css"
import { Link } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa6";
import Form1 from '../components/Form1'


const ContactForm = () => {
  return (
    <div className='Contactform1'>
      <div className="connect-nav">
        <Link to="/"><img className='connect-logo' src={logo} alt="logo" /></Link>
        <Link to="/Contact"><button className='connect-close'><FaAngleLeft />
          What are you interested in</button></Link>
      </div>
      <section className="form1-main">
        <h1>
          Get a free marketing proposal for your project
        </h1>
        <div className="form1-body">
          <div className="form1-left">
            <Form1 />
          </div>
          <div className="form1-right">
            <img src={connect3} alt="connect1" />
          </div>
        </div>

      </section>
    </div>
  )
}

export default ContactForm;
