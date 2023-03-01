import React from 'react'
import AboutMe from './AboutMe'
import WhatIDo from './WhatIDo'
import Resume from './Resume'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Main from './Main'

export default function RightBar() {
  return (
    <>
   
    <div className="Rightbar">
      <Main />
    <AboutMe />
     <WhatIDo />
     <Resume />
     <Portfolio />
     <Contact />
     </div>
    </>
  )
}
 