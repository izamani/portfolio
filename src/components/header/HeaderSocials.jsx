import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"><BsLinkedin /></a>
        <a href="https://github.com"><FaGithub /></a>
        <a href="https://twitter"><BsTwitter /></a>

    </div>
  )
}

export default HeaderSocials