import React from 'react'
import './landingPage.css'
import ProfileComponent from '../profile/profileComponent';
import LinkComponent from '../link/linkComponent';
import FooterComponent from '../footer/footerComponent';

const landingPage = () => {
  return (
    <div className='home'>
      <ProfileComponent />
      <LinkComponent />
      <FooterComponent />
    </div>
  )
}

export default landingPage