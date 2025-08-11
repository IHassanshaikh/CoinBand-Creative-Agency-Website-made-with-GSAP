import Navbar from '@components/navbar'
import ServiceCrypto from '@components/ServiceCrypto'
import ServiceHeader from '@components/ServiceHeader'
import SocialMediaSection from '@components/ServiceSocialMediaSection'
import Pinslider from '../animations/pinslider'
import ServiceChallenges from '@components/ServiceChallenges'
import GetinTouch from "../components/getInTouch";
import Footer from "../components/Footer"
import React from 'react'

const Service = () => {
  return (
    <div>
      <Navbar />
      <ServiceHeader />
      <ServiceCrypto />
      <SocialMediaSection />
      <Pinslider />
      <ServiceChallenges />
      <GetinTouch />
      <Footer />
    </div>
  )
}

export default Service
