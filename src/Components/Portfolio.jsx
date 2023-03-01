import React from 'react'

export default function Portfolio() {
    return (
        <div id="portfolio" className='portfolio'>
          
            <div className="container bg-secondary text-white p-0">
          <div className="position-relative">
            <h1 className=''>Portfolio</h1>
            <h2 className=''>My Work</h2>
          </div>
          <div className="php mt-3">
          <div className="photos" data-aos="fade-left">
            <div className="first" >
            <img src={require('../img/1.jpg')} alt="" className='w-100'/>
            <a href="https://spectacular-naiad-3b2a94.netlify.app/">Real Estate Project</a>
            </div>
            </div>
            <div className="photos"  data-aos="fade-right">
            <div className="first">
            <img src={require('../img/2.jpg')} alt="" className='w-100'/>
            <a href="https://celebrated-starlight-3466f4.netlify.app/"> Ecommerce Project</a>
            </div>
          </div>
          </div>
          </div>
        </div>
    )
}

