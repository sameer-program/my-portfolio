import React from 'react'

export default function WhatIDo() {
  return (
    <>
      <div id="what" className='what'>
        <div className="container bg-secondary text-white">
          <div className="position-relative">
            <h1 className=''>Services</h1>
            <h2> What I Do ?</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5">
              <div className="d-flex services">
                <div className="and">
                  <i class="fa fa-desktop" aria-hidden="true"></i>
                </div>
                <ul>
                  <li className='fs-5 fw-bolder'>Web Development</li>
                  <li>Developing projects using html, react and css.</li>
                </ul>
              </div>
              <div className="d-flex services">
                <div className="and">
                  <i class="fa fa-area-chart" aria-hidden="true"></i>
                </div>
                <ul>
                  <li className='fs-5 fw-bolder'>Business Analysis</li>
                  <li>Business minded and can deal with customers.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="d-flex services">
                <div className="and">
                  <i class="fa fa-fire" aria-hidden="true"></i>
                </div>
                <ul>
                  <li className='fs-5 fw-bolder'>UI/UX Development</li>
                  <li>Design, draw the project using Figma.</li>
                </ul>
              </div>
              <div className="d-flex services">
                <div className="and">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </div>
                <ul>
                  <li className='fs-5 fw-bolder'>App Design & Develop</li>
                  <li>Fully responsive projects as per the need.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


