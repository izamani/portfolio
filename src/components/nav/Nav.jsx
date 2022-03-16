import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiSoapExperiment} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactPhone} from 'react-icons/md'
const Nav = () => {
  return (
    <nav>
    <a href="#"><AiOutlineHome /></a>
    <a href="#about"><AiOutlineUser /></a>
    <a href="#experience"><GiSoapExperiment /></a>
    <a href="#services"><RiServiceLine /></a>
    <a href="#contact"><MdOutlineContactPhone /></a>
  </nav>
  )
}

export default Nav