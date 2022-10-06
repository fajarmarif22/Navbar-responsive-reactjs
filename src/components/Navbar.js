import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../data'
import logo from '../logo.svg'
import '../App.css'

function Navbar() {
  const [showLink, setShowLink] = useState(false)
  const linkContainerRef = useRef(null)
  const linkRef = useRef(null)

  useEffect(() => {
    const linkHeight = linkRef.current.getBoundingClientRect().height
    if (showLink) {
      linkContainerRef.current.style.height = `${linkHeight}px`
    } else {
      linkContainerRef.current.style.height = '0px'
    }
  }, [showLink])
  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} alt='logo' />
            <button
              className='nav-toggle'
              onClick={() => setShowLink(!showLink)}
            >
              <FaBars />
            </button>
          </div>

          <div className='links-container' ref={linkContainerRef}>
            <ul className='links' ref={linkRef}>
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>

          <ul className='social-icons'>
            {social.map((socials) => {
              const { id, url, icon } = socials
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
