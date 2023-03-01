import React, { useState } from 'react'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function SideBar() {
  const [ nav, setNav] = useState(false)
  return (
    <>
      <nav>
      <div className={!nav ? "" : "black"} onClick={() => (setNav(!nav)
                            )}></div>
        <ul className={!nav ? "response-nav" : "response-nav right"}>
          <div className="cross" onClick={() => setNav(!nav)}>
            <i className='fa fa-times text-dark' ></i>
          </div>
          <li><Link to="main"onClick={() => (setNav(!nav)
          )}  spy={true} smooth={false}>Home</Link></li>
          <li><Link to="about" onClick={() => (setNav(!nav)
          )} spy={true} smooth={false}>About Me</Link></li>
          <li><Link to="what" onClick={() => (setNav(!nav)
          )} spy={true} smooth={false}>What I Do</Link></li>
          <li><Link to="resume" onClick={() => (setNav(!nav)
          )} spy={true} smooth={false}>Ressume</Link></li>
          <li><Link to="portfolio" onClick={() => (setNav(!nav)
          )} spy={true} smooth={false}>Portfolio</Link></li>
          <li><Link to="contact" onClick={() => (setNav(!nav)
          )} spy={true} smooth={false}>Contact</Link></li>
        </ul>
        <i className='fa fa-bars text-end pe-3' onClick={() => setNav(!nav)}></i>
        <ul className="Sidebar text-white">
          <li><img src={require('../img/sme.jpg')} className="w-100" /><h3 className='my-2'>Sameer Rai</h3></li>
          <li><Link to="main" spy={true} smooth={false}>Home</Link></li>
          <li><Link to="about" spy={true} smooth={false}>About Me</Link></li>
          <li><Link to="what" spy={true} smooth={false}>What I Do</Link></li>
          <li><Link to="resume" spy={true} smooth={false}>Ressume</Link></li>
          <li><Link to="portfolio" spy={true} smooth={false}>Portfolio</Link></li>
          <li><Link to="contact" spy={true} smooth={false}>Contact</Link></li>

        </ul>
      </nav>

    </>

  )
}
