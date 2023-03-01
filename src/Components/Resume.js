import React from 'react'

export default function Resume() {
  return (
    <>
      <div id="resume" className='resume'>
        <div className="container bg-dark text-white">
          <div className="position-relative">
            <h1 className=''>Summary</h1>
            <h2> Resume</h2>
          </div>
          <div className="row mt-4 rest">
            <div className="col-lg-6">
              <h4 className='fw-bolder'>My Education</h4>
              <div className="one">
                <p>2016 - 2018</p>
                <h5 className='fw-bold'>Computer Science</h5>
                <h4 className='text-success fs-5 mb-3'> DAV COLLEGE</h4>
                <h3 className='fs-6 text-secondary'>Basic knowledeg of programming languages and networking.</h3>
              </div>
              <div className="one">
                <p>2019 - 2022</p>
                <h5 className='fw-bold'>Computer Science</h5>
                <h4 className='text-success fs-5 mb-3'>ISMT COLLEGE </h4>
                <h3 className='fs-6 text-secondary'>Knowledge of programming languages, design and web development.</h3>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className='fw-bolder'>My Experience</h4>
              <div className="one">
                <p>2022 - 2023</p>
                <h5 className='fw-bold'>Computer Science</h5>
                <h4 className='text-success fs-5 mb-3'> Broadway Infosis</h4>
                <h3 className='fs-6 text-secondary'>Web Development: Developing project using react, html, css, responsive and bootstrap.</h3>
              </div>
              <div className="one">
                <p>2022 - 2023</p>
                <h5 className='fw-bold'>Research</h5>
                <h4 className='text-success fs-5 mb-3'>Self Study</h4>
                <h3 className='fs-6 text-secondary'>Doing research and gathering information on different things.</h3>
              </div>
            </div>
          </div>
          <div className="row skills bg-dark mx-4">
            <h3 className='fw-bold'>My SKills</h3>
            <div className="skill-box mt-3 row">
              <div className="col-lg-6 ">
                <span className='title'>HTML</span>
                <div className="skill-bar">
                  <span className='skill-per html'>
                    <span className='tool'> 90%</span>
                  </span>
                </div>
                <span className='title mt-3'>CSS</span>
                <div className="skill-bar">
                  <span className='skill-per css'>
                    <span className='tool'> 80%</span>
                  </span>
                </div>
                <span className='title mt-3'>FIGMA</span>
                <div className="skill-bar">
                  <span className='skill-per figma'>
                    <span className='tool'> 80%</span>
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <span className='title'>JAVASCRIPT</span>
                <div className="skill-bar">
                  <span className='skill-per javascript'>
                    <span className='tool'> 60%</span>
                  </span>
                </div>
                <span className='title mt-3'>REACT</span>
                <div className="skill-bar">
                  <span className='skill-per react'>
                    <span className='tool'> 70%</span>
                  </span>
                </div>
                <span className='title mt-3'>BOOTSTRAP</span>
                <div className="skill-bar">
                  <span className='skill-per bootstrap'>
                    <span className='tool'> 75%</span>
                  </span>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
