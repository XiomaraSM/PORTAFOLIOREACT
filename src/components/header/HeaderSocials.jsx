import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {FiGithub} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank"><SlSocialLinkedin/></a>
      <a href="https://github.com" target="_blank"><FiGithub/></a>
      <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
      <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
      <a href="https://youtube.com" target="_blank"><BsYoutube/></a>
      <a href="https://tiktok.com" target="_blank"><FaTiktok/></a>
      <a href="https://twitter.com" target="_blank"><BsTwitter/></a>
      <a href="https://messenger.com"><FaFacebookMessenger/></a>
    </div>
  )
}

export default HeaderSocials