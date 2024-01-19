import React, {useState,useRef,useEffect} from 'react'
import logo from './logo'
import {social,links} from './Data'
import { FaBars, FaTwitter } from 'react-icons/fa'


const Navbar = () => {

  const [showLinks,setShowLinks] = useState(false)
  const linksContainerRef = useRef(null) //div
  const linksRef = useRef(null)  //ul

  useEffect (() => {
   const linksHeight = linksRef.current.getBoundingClientRect().height
   //console.log(linksHeight)
   if (showLinks) {
     linksContainerRef.current.style.height = `${linksHeight}px`
   } else {
     linksContainerRef.current.style.height = '0px'
   }
  },[showLinks])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='name'/>
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
          </div>
          
          <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              {links.map((link) => {
                const {id,url,text} = link
                return  (
                <li key={id}>
                  <a href={url}>
                   {text}
                 </a>
                </li>
                )
              })}
            </ul>
            </div>
           <ul className='social-icons'>
              {social.map((socials) => {
                 const {id,url,icon} = socials
                 return (
                   <li key={id}>
                    <a href={url}>
                     {icon}
                 </a>
                 </li>
                 )
               })}
              </ul>
            </div>
    </nav>
  )
}

export default Navbar