import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {
  const [state, handleSubmit] = useForm("xpzepzgw");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div id="contact" className='contact'>
        <div className="container bg-dark text-white">
          <div className="position-relative">
            <h1 className=''>Contact</h1>
            <h2 className=''> Get in touch</h2>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 ps-5 address">
              <h3>Address</h3>
              <ul className='mt-3 add'>
                <li>Pepsicola Ward No.32, Kathmandu</li>
                <li><i class="fa fa-phone" aria-hidden="true"></i><span className='mx-2'>9861784494</span></li>
                <li><i class="fa fa-envelope" aria-hidden="true"></i><span className='mx-2'>raisamir4494@gmail.com</span></li>
              </ul>
              <h6 className='fs-4 mt-4'>Follow Me:</h6>
              <ul className='social mt-3'>
                <li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href=""><i class="fa fa-google" aria-hidden="true"></i></a></li>
                <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href=""><i class="fa fa-github" aria-hidden="true"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-8 pe-5 notes">
              <h6 className='fs-4'>Send ma a notes:</h6>
              {/* <form action="">
                <div className="input d-flex mt-3">
                  <input type="text" placeholder='Name' className='w-100' />
                  <input type="text" placeholder='Email' className='w-100 ms-2' />
                </div>
                <input type="message" placeholder='How may I help you...?' className='w-100 my-4 py-5' />
                <Button className='b-bg-success text-light px-3 fs-6 last m5' >Send Message</Button>{' '}
              </form> */}
              <form onSubmit={handleSubmit} className="text-center">
              <div className="input d-flex mt-3">
      <input placeholder='UserName' className='w-100 mx-2'
        id="username"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input placeholder='Email' className='w-100 mx-2'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       </div>
      <textarea placeholder='How may I help you...?' className='w-100 my-4 mx-2'
        id="message"
        name="message"
        rows={7}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className='bg-success text-light butt mb-5' disabled={state.submitting}>
        Message Me
      </button>
    </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
