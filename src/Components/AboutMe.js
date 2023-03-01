import React from 'react'
import CV from '../CV.pdf'

export default function AboutMe() {
  return (
    <>
      <div id="about" className='about'>
        <div className="container bg-dark text-white">
          <div className="position-relative">
            <h1 className=''> About Me</h1>
            <h2> Know Me More</h2>
          </div>
          <div className="row">
            <div className="abright col-lg-8">
              <h3 className='fs-3 fw-bold'>I'm <span className='text-success'>Sameer Rai</span>, a Web Developer</h3>
              <p className='text-secondary fw-normal'>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <p className='text-secondary fw-normal'>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
            </div>
            <ul className="ableft col-lg-4 semi-bold">
              <li> Name: Sameer Rai</li>
              <li>Email: <span className='text-success'>raisamir4494@gmail.com</span></li>
              <li>Age: 24</li>
              <li className='mb-5'>From: Pepsicola, Kathmandu</li>
              <a href={CV} download className='bg-success border-success' >Download CV</a>{' '}
            </ul>
            
          </div>
        </div>
      </div>
    </>
  )
}



