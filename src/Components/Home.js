import React from 'react'
import Particle from './Particles';
import RightBar from './RightBar';
import SideBar from './SideBar';

export default function Home() {
  return (
    <>
    <Particle/>
    <div className="row">
      <div className="col-lg-3"><SideBar/></div>
      <div className="col-lg-9 col-12 p-0">
      <RightBar/>
      </div>
    </div>
    </>
  )
}
