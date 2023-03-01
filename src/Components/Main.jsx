import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Main() {
  return (
    <>
      <div id="main" className='main'>
        <div className="con">
          <h2> Welcome </h2>
          <div class="wrapper">
            <div class="static-txt">I'm</div>
            <ul class="dynamic-txts">
              <li><span>Sameer</span></li>
              <li><span>Designer</span></li>
              <li><span>Developer</span></li>
              <li><span>Available</span></li>
            </ul>
          </div>
          <h3 className='text-center text-light'>based in Kathmadnu.</h3>
          <Button variant="success">Hire Me</Button>{' '}
          <div className="drop text-center my-5" ><i class="fa fa-angle-down" aria-hidden="true"></i></div>
        </div>
      </div>
    </>
  )
}

