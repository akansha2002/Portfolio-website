import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href ="https://www.linkedin.com/in/akansha-aggarwal-991780204/" target='blank' rel="noreferrer"><BsLinkedin/></a>
        <a href ="https://github.com/akansha2002" target='blank' rel="noreferrer"><BsGithub/></a>
        <a href ="https://www.instagram.com/_akansha_aggarwal_/" target='blank' rel="noreferrer"><FiInstagram/></a>
        <a href ="https://twitter.com/Akansha272" target='blank' rel="noreferrer"><IoLogoTwitter/></a>
    </div>
  )
}

export default HeaderSocials
